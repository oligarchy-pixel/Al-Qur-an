# SFX dari config engine Ep2 + peristiwa runtime (flips, highlight ayat)
import json, sys, numpy as np, wave
sys.argv += []
cfg = json.load(open(sys.argv[1])); ev = json.load(open(sys.argv[2])); out = sys.argv[3]
exec(open('audio/mix.py').read().split("E={")[0])   # pakai generator suara yang sama
DUR = cfg['end']; N = int(SR * DUR)
modes = [m[0] for m in cfg['modes'][1:]]
E = {'whoosh': [p['t'] for p in cfg['points']] + [m - .35 for m in modes],
     'riser': [m - .65 for m in modes], 'boom': modes,
     'hit': [p['t'] + .7 for p in cfg['points']],
     'tick': [t0 for _, _, items in cfg.get('chips', []) for _, t0 in items] + ev['flips'],
     'click': [1.25, 2.25],
     'sparkle': ev['ayah'] + [p['t'] + 1.0 for p in cfg['points']] + [cfg['follow'] + .2]}
G = {'whoosh': .5, 'riser': .6, 'boom': .55, 'hit': .55, 'tick': .32, 'click': .7, 'sparkle': .6}
F = {'whoosh': whoosh, 'riser': riser, 'boom': boom, 'hit': hit, 'tick': tick, 'click': click, 'sparkle': sparkle}
sfx = np.zeros(N)
for k, ts in E.items():
    for t0 in ts:
        s = F[k]() * G[k]; o = int(t0 * SR); m = min(len(s), N - o)
        if m > 0: sfx[o:o + m] += s[:m]
w = wave.open(out, 'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((np.clip(sfx, -1, 1) * 32767).astype(np.int16).tobytes()); w.close()
print({k: len(v) for k, v in E.items()})
