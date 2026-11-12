# Cara membuat Short vertikal (standar Short Ep2 v5)

```bash
mkdir -p /home/claude/shortN && cd /home/claude/shortN
cp <repo>/kit/short_vertikal/ep2_v4/index.html .
cp <repo>/kit/short_vertikal/{render.js,overlap.js,sfx_split.py} .   # render.js & overlap.js versi 1080x1920
# 1. Pilih potongan audio terbaik dari transkrip: AWAL..AKHIR (±150–160 dtk), akhir di kalimat tuntas.
# 2. index.html: TOTAL = 170; const A = x => x - (AWAL - 6);  ubah teks hook, judul HUD "EP NN · …",
#    isi poin (header/arw/kin/show/flow), daftar ADAB untuk penghitung, ringkasan penutup.
node overlap.js 0 170 0.25          # harus kosong
node render.js preview 2.5,5.5,30,60,90,120,150,168 pv   # cek foto
mkdir -p out && (node render.js vid 0 43 out/c0.mp4 & node render.js vid 43 86 out/c1.mp4 & node render.js vid 86 128 out/c2.mp4 & node render.js vid 128 170 out/c3.mp4 & wait)
node render.js sfx out/sfx.json && cd out
BK=0 FK=1 python3 ../sfx_split.py 170 fxonly.wav sfx.json        # SFX saja, TANPA dengungan
printf "file c0.mp4\nfile c1.mp4\nfile c2.mp4\nfile c3.mp4\n" > l.txt && ffmpeg -y -f concat -i l.txt -c copy v.mp4
LEN=$(echo "AKHIR - AWAL" | bc)
ffmpeg -y -i v.mp4 -ss AWAL -t $LEN -i epN.mp3 -i fxonly.wav -filter_complex \
 "[1:a]loudnorm=I=-16:TP=-1.5:LRA=11,aresample=44100,aformat=channel_layouts=stereo,adelay=6000|6000,afade=t=in:st=6:d=0.3[v];[2:a]volume=2.2[f];[v][f]amix=inputs=2:duration=longest:normalize=0,alimiter=limit=0.84:level=0:attack=5:release=50,afade=t=out:st=168.6:d=1.4[a]" \
 -map 0:v -map "[a]" -c:v libx264 -crf 22 -pix_fmt yuv420p -c:a aac -b:a 192k -t 170 -movflags +faststart SHORT_EpN_v1_….mp4
```
Struktur: hook penasaran (0–3) → hook LIKE/FOLLOW/SUBSCRIBE + "klik di bawah ini" ⬇ (3–6) → isi bersuara (6–163) → penutup ringkasan + CTA (163–170).
