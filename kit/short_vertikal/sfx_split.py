"""python3 sfx.py <durasi> bed.wav sfx.json [t_offset] — musik latar ambient + SFX dari event mesin."""
import sys, json, wave
import numpy as np

SR = 44100
dur, out, ev = float(sys.argv[1]), sys.argv[2], json.load(open(sys.argv[3]))
off = float(sys.argv[4]) if len(sys.argv) > 4 else 0.0
rng = np.random.default_rng(5)
n = int(SR * dur)
t = np.arange(n) / SR


def env(m, a, d):
    e = np.ones(m); na = max(1, int(a * SR)); e[:na] = np.linspace(0, 1, na)
    e *= np.exp(-np.maximum(0, np.arange(m) - na) / (d * SR)); return e


def bandnoise(m, lo, hi):
    x = rng.normal(0, 1, m); X = np.fft.rfft(x); f = np.fft.rfftfreq(m, 1 / SR)
    X[(f < lo) | (f > hi)] = 0; y = np.fft.irfft(X, m); return y / (np.abs(y).max() + 1e-9)


# pad ambient: akor minor rendah + noise lembut berdenyut
bed = np.zeros(n)
for f, g in [(55, .5), (82.4, .35), (110, .3), (130.8, .22), (164.8, .14)]:
    bed += g * np.sin(2 * np.pi * f * (t + off) + 0.3 * np.sin(2 * np.pi * .05 * (t + off)))
bed *= 0.55 + 0.45 * np.sin(2 * np.pi * (t + off) / 16) ** 2
air = bandnoise(n, 300, 1800) * (0.5 + 0.5 * np.sin(2 * np.pi * (t + off) / 9) ** 2)
bed = 0.09 * bed + 0.025 * air
# denyut elektronik halus 124 bpm (sangat pelan)
beat = 60 / 124
for k in range(int((dur + off) / beat) + 1):
    s = k * beat - off
    if s < 0 or s >= dur: continue
    i = int(s * SR); m = min(int(.18 * SR), n - i)
    tt = np.arange(m) / SR
    bed[i:i + m] += 0.05 * np.sin(2 * np.pi * (60 + 40 * np.exp(-tt / .03)) * tt) * env(m, .002, .06)


def S(name):
    if name == 'tick':
        m = int(.035 * SR); return 0.05 * bandnoise(m, 2500, 7000) * env(m, .0005, .006)
    if name == 'mark':
        m = int(.28 * SR); u = np.linspace(0, 1, m); return 0.06 * bandnoise(m, 1800, 6000) * np.sin(np.pi * u) ** 2
    if name == 'click':
        m = int(.05 * SR); tt = np.arange(m) / SR; return 0.12 * np.sin(2 * np.pi * 1700 * tt) * env(m, .0005, .01)
    if name == 'beep':
        m = int(.12 * SR); tt = np.arange(m) / SR; return 0.06 * np.sin(2 * np.pi * 1320 * tt) * env(m, .002, .05)
    if name == 'whoosh':
        m = int(.6 * SR); u = np.linspace(0, 1, m); y = bandnoise(m, 300, 900) * (1 - u) + bandnoise(m, 900, 5000) * u
        return 0.16 * y * np.sin(np.pi * u) ** 1.5
    if name == 'impact':
        m = int(.9 * SR); tt = np.arange(m) / SR
        y = np.sin(2 * np.pi * (45 + 70 * np.exp(-tt / .05)) * tt) * env(m, .002, .25) + 0.4 * bandnoise(m, 80, 1500) * env(m, .001, .05)
        return 0.32 * y
    if name == 'stamp':
        m = int(.3 * SR); tt = np.arange(m) / SR
        return 0.25 * (np.sin(2 * np.pi * (90 + 60 * np.exp(-tt / .03)) * tt) * env(m, .002, .06) + .6 * bandnoise(m, 1500, 5000) * env(m, .0008, .012))
    if name == 'paper':
        m = int(.35 * SR); u = np.linspace(0, 1, m); return 0.12 * bandnoise(m, 600, 6000) * (u ** .3) * np.exp(-u * 5)
    if name == 'draw':
        m = int(1.1 * SR); u = np.linspace(0, 1, m); return 0.05 * bandnoise(m, 2000, 7000) * np.sin(np.pi * u)
    return np.zeros(10)


fx = np.zeros(n + SR)
for e in ev:
    s = e['t'] - off
    if s < 0 or s >= dur: continue
    y = S(e['type']) * e.get('g', 1); i = int(s * SR); fx[i:i + len(y)] += y
fx = fx[:n] * 5.8  # SFX dinaikkan lagi (Ep3 2.1, Ep4 2.7, Ep5-6 3.8, Ep7-9 4.8, mulai Ep9 v2 5.8)
import os
BK = float(os.environ.get('BK', '1')); FK = float(os.environ.get('FK', '1'))
mix = np.tanh(bed * BK + fx * FK) * 0.95
pcm = (np.stack([mix, mix], 1) * 32767).astype(np.int16)
with wave.open(out, 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('ok', len(ev))
