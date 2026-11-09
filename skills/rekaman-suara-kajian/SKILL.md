---
name: "rekaman-suara-kajian"
description: "Olah rekaman suara kajian (mp3): pisahkan VOKAL & INSTRUMEN dengan AI, lalu buat versi vokal yang dimiripkan dengan suara acuan video_terang_ke2 (tebal, ber-bass, rata, -16 LUFS)."
---

# Rekaman suara kajian → VOKAL, INSTRUMEN, MIRIP-REFERENSI

Dipakai untuk setiap rekaman mp3 baru seri kajian Al-Qur'an. Kerjakan langsung sampai selesai tanpa banyak bertanya. Balas dalam bahasa Indonesia santai.

## Hasil yang dikirim (SendUserFile)
1. `<nama>-VOKAL.mp3` + `<nama>-VOKAL.wav` — suara saja, tanpa olahan lain
2. `<nama>-INSTRUMEN.mp3` — musik latar/noise yang terpisah
3. `<nama>-MIRIP-REFERENSI.mp3` + `.wav` — vokal dimiripkan dengan suara acuan (INI hasil utama)

PENTING: pengguna TIDAK suka suara yang bass-nya dipotong/tipis. Jangan pakai high-pass tinggi atau potong nada rendah. Suara acuan sangat tebal di 100–500 Hz dan redup di atas 2 kHz.

## Langkah
Semua kerja di scratchpad. Buat folder `tools/`, `models/`, `job/`.

1. Decode: `ffmpeg -i in.mp3 -ac 2 -ar 44100 -f f32le job/in.raw`
2. Model (pip/huggingface diblokir; GitHub boleh):
   `curl -sSL -o models/Kim_Vocal_2.onnx https://github.com/TRvlvr/model_repo/releases/download/all_public_uvr_models/Kim_Vocal_2.onnx` (≈67 MB). onnxruntime, numpy, scipy sudah terpasang.
3. Pisahkan (jalankan di background, ±1,3× durasi audio):
   `python3 -I tools/mdx.py models/Kim_Vocal_2.onnx job/in.raw job/voc.raw job/inst.raw`
4. Export stem: raw → wav 24-bit (`-f f32le -ar 44100 -ac 2 -i x.raw -c:a pcm_s24le`), mp3 320k.
5. Mirip referensi:
   - `python3 -I tools/match_curve.py job/voc.raw job/m1.raw 2` (EQ cocok-kurva, mono)
   - `python3 -I tools/denoise.py job/m1.raw job/m2.raw 44100` (versi lembut, floor -12 dB)
   - `ffmpeg -f f32le -ar 44100 -ac 1 -i job/m2.raw -af "volume=-8dB,acompressor=threshold=-24dB:ratio=4:attack=5:release=100:knee=4:makeup=6dB,acompressor=threshold=-18dB:ratio=2.5:attack=25:release=300:knee=6:makeup=2dB,alimiter=limit=0.9:level=disabled" -c:a pcm_f32le job/m3.wav`
   - loudnorm 2-pass ke I=-16, TP=-1.5, LRA=3 (linear=true), output stereo `-ac 2` pcm_s24le, lalu mp3 320k.
6. Cek: ebur128 (I ≈ -16, LRA ≈ 1.5–2); bandingkan level pita relatif 400–1000 Hz. Target acuan: 50–80 ≈ -10, 80–150 ≈ +10, 150–400 ≈ +10, 1–3k ≈ -12, 3–6k ≈ -19, 6–9k ≈ -25 dB. Jika selisih >2 dB, jalankan koreksi EQ tambahan.
7. Kirim file, jelaskan singkat. Sampaikan bahwa pengecekan lewat pengukuran, bukan didengar langsung.

## tools/mdx.py
```python
import sys, numpy as np, onnxruntime as ort
model, inp, out_voc, out_inst = sys.argv[1:5]
N_FFT, HOP, DIM_F, DIM_T, COMP = 7680, 1024, 3072, 256, 1.009
x = np.fromfile(inp, np.float32).reshape(-1, 2).T.astype(np.float64)
n = x.shape[1]
CH = HOP * (DIM_T - 1); TRIM = N_FFT // 2; GEN = CH - 2 * TRIM
win = np.hanning(N_FFT + 1)[:-1]
pad = GEN - n % GEN
xp = np.concatenate([np.zeros((2, TRIM)), x, np.zeros((2, pad + TRIM))], 1)
def stft(a):
    a = np.pad(a, ((0, 0), (N_FFT // 2, N_FFT // 2)), mode='reflect')
    fr = np.lib.stride_tricks.sliding_window_view(a, N_FFT, axis=1)[:, ::HOP] * win
    return np.fft.rfft(fr, axis=2).transpose(0, 2, 1)
def istft(S, length):
    fr = np.fft.irfft(S.transpose(0, 2, 1), n=N_FFT, axis=2) * win
    T = fr.shape[1]; L = N_FFT + HOP * (T - 1)
    y = np.zeros((S.shape[0], L)); wsum = np.zeros(L)
    for t in range(T):
        y[:, t*HOP:t*HOP+N_FFT] += fr[:, t]; wsum[t*HOP:t*HOP+N_FFT] += win**2
    y /= np.maximum(wsum, 1e-8)
    return y[:, N_FFT//2:N_FFT//2 + length]
sess = ort.InferenceSession(model, providers=['CPUExecutionProvider'])
voc = np.zeros_like(xp)
starts = range(0, xp.shape[1] - CH + 1, GEN)
for k, i in enumerate(starts):
    S = stft(xp[:, i:i+CH])[:, :DIM_F, :DIM_T]
    inp_t = np.stack([S[0].real, S[0].imag, S[1].real, S[1].imag])[None].astype(np.float32)
    o = sess.run(None, {'input': inp_t})[0][0].astype(np.float64)
    So = np.zeros((2, N_FFT//2 + 1, DIM_T), complex)
    So[0, :DIM_F] = o[0] + 1j*o[1]; So[1, :DIM_F] = o[2] + 1j*o[3]
    y = istft(So, CH)
    voc[:, i+TRIM:i+CH-TRIM] = y[:, TRIM:CH-TRIM]
    if k % 20 == 0: print(k, '/', len(starts), flush=True)
voc = voc[:, TRIM:TRIM+n] * COMP
inst = x - voc
voc.T.astype(np.float32).tofile(out_voc); inst.T.astype(np.float32).tofile(out_inst)
print('done')
```

## tools/match_curve.py
```python
import sys, numpy as np
from scipy.signal import welch, firwin2, fftconvolve
# target = suara acuan video_terang_ke2, dB per 1/3 oktaf relatif rata-rata 300-3000 Hz
T = {25:-6.9,31:-7.3,40:-7.2,50:-6.3,63:-4.7,79:-1.1,100:9.6,126:20.0,159:14.2,200:12.2,252:15.5,317:12.0,400:11.2,504:10.1,635:3.8,800:-1.3,1008:-2.5,1270:-3.4,1600:-5.4,2016:-11.6,2540:-12.9,3200:-16.4,4032:-17.9,5080:-23.3,6400:-26.6,8063:-26.0,10159:-30.4,12800:-36.1}
inp, outp, sr = sys.argv[1], sys.argv[2], 44100
passes = int(sys.argv[3]) if len(sys.argv) > 3 else 2
y = np.fromfile(inp, np.float32).reshape(-1, 2).mean(1).astype(np.float64)
c = np.array(list(T)); tv = np.array(list(T.values()))
def curve(x):
    w=2048; n=len(x)//w; fr=x[:n*w].reshape(n,w); e=(fr**2).mean(1); a=fr[e>np.percentile(e,40)].ravel()
    f,P=welch(a,sr,nperseg=8192); d=10*np.log10(P+1e-20)
    v=np.array([d[(f>=k/2**(1/6))&(f<=k*2**(1/6))].mean() for k in c]); return v-v[(c>=300)&(c<=3000)].mean()
for p in range(passes):
    diff = np.clip(tv - curve(y), -12, 14 if p == 0 else 9)
    diff[c < 45] = np.minimum(diff[c < 45], -6); diff[c > 11000] = np.minimum(diff[c > 11000], 0)
    fg = np.concatenate([[0], c, [sr/2]]); g = np.concatenate([[diff[0]], diff, [diff[-1]]])
    y = fftconvolve(y, firwin2(4097, fg/(sr/2), 10**(g/20)), mode='same')
y.astype(np.float32).tofile(outp)
print('residual dB:', dict(zip(c.astype(int), (tv-curve(y)).round(1))))
```

## tools/denoise.py (lembut)
```python
import sys, numpy as np
from scipy.signal import stft, istft
from scipy.ndimage import uniform_filter
inp, outp, sr = sys.argv[1], sys.argv[2], int(sys.argv[3])
x = np.fromfile(inp, np.float32)
n = 2048; hop = 512
f, t, Z = stft(x, sr, nperseg=n, noverlap=n-hop)
mag = np.abs(Z); pdb = 20*np.log10(mag+1e-10)
fdb = 10*np.log10((mag**2).mean(0)+1e-20)
q = fdb < np.percentile(fdb, 8)
mu = pdb[:, q].mean(1, keepdims=True); sd = pdb[:, q].std(1, keepdims=True)
m = np.clip((pdb - (mu + 1.5*sd))/9.0, 0, 1)
m = uniform_filter(m, size=(5, 7))
floor = 10**(-12/20)
_, y = istft(Z*(floor + (1-floor)*m), sr, nperseg=n, noverlap=n-hop)
y[:len(x)].astype(np.float32).tofile(outp)
```

## Opsi tambahan (hanya jika diminta)
- Versi "PODCAST" (lebih jernih, kurang ber-bass) dan "VOKAL-STUDIO" pernah dibuat, tapi pengguna memilih gaya MIRIP-REFERENSI.
- Jika pengguna minta musik latar pelan seperti acuan, campurkan musik ±19 dB di bawah suara.