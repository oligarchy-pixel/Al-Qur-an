"""End card ajakan: Like, Comment, Follow, Subscribe @alurziyadahku (5 detik)."""
import math, os, sys, wave, subprocess
import numpy as np
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "barzakh"))
from render_barzakh import W, H, FPS, F, ease, fade, lerp, vgrad, to_img, radial, LORA_R, LORA_I, MONT, GOLD, WHITE
from PIL import Image, ImageDraw, ImageFilter
D = 5.0
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "out")
LORA_B = "fontsource-lora-5.3.0/package/files/lora-latin-600-normal.woff"
MONT_B = "mont/package/files/montserrat-latin-500-normal.woff"
BTN = [("like", "Like", "Liked", 0.45, 1.6), ("comment", "Comment", "Comment", 0.7, 2.3),
       ("follow", "Follow", "Following", 0.95, 3.0), ("sub", "Subscribe", "Subscribed", 1.2, 3.7)]
BG = Image.alpha_composite(to_img(vgrad(H, [(0, (6, 6, 9)), (0.5, (16, 14, 16)), (1, (5, 5, 7))])).convert("RGBA"),
                           radial(W, H, 540, 900, 600, 700, (255, 210, 140), 1.6, 0.18))

def heart(d, cx, cy, s, fill):
    d.ellipse((cx - s, cy - s * 0.8, cx, cy + s * 0.2), fill=fill); d.ellipse((cx, cy - s * 0.8, cx + s, cy + s * 0.2), fill=fill)
    d.polygon([(cx - s * 0.97, cy - s * 0.15), (cx + s * 0.97, cy - s * 0.15), (cx, cy + s * 0.95)], fill=fill)

def icon(d, kind, cx, cy, on, col):
    if kind == "like":
        heart(d, cx, cy, 20, (235, 64, 82, 255) if on else col)
    elif kind == "comment":
        d.rounded_rectangle((cx - 22, cy - 18, cx + 22, cy + 12), radius=9, fill=col)
        d.polygon([(cx - 10, cy + 10), (cx - 14, cy + 24), (cx + 4, cy + 10)], fill=col)
    elif kind == "follow":
        if on:
            d.line((cx - 16, cy, cx - 4, cy + 12, cx + 18, cy - 12), fill=col, width=7)
        else:
            d.line((cx - 18, cy, cx + 18, cy), fill=col, width=7); d.line((cx, cy - 18, cx, cy + 18), fill=col, width=7)
    else:  # lonceng
        d.chord((cx - 18, cy - 20, cx + 18, cy + 18), 180, 360, fill=col)
        d.rectangle((cx - 18, cy - 2, cx + 18, cy + 12), fill=col)
        d.ellipse((cx - 5, cy + 12, cx + 5, cy + 22), fill=col)

def frame(t):
    fr = BG.copy(); d = ImageDraw.Draw(fr)
    a0 = fade(t, 0.0, 0.5) * (1 - fade(t, D - 0.4, 0.4))
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    d.text((540, 430), "Jangan lewatkan", font=F(LORA_R, 54), fill=WHITE + (255,), anchor="mm")
    d.text((540, 505), "episode berikutnya", font=F(LORA_I, 58), fill=GOLD + (255,), anchor="mm")
    d.text((540, 640), "@alurziyadahku", font=F(MONT_B, 64), fill=(245, 242, 235, 255), anchor="mm")
    d.line((440, 690, 640, 690), fill=GOLD + (170,), width=2)
    fb = F(MONT_B, 40)
    for i, (kind, lab, lab_on, t_in, t_tap) in enumerate(BTN):
        p = ease((t - t_in) / 0.35)
        if p <= 0: continue
        on = t >= t_tap + 0.08
        y = 840 + i * 165; w = 600; x0 = 540 - w / 2
        sc = 0.85 + 0.15 * p
        if t_tap <= t < t_tap + 0.18: sc *= 0.94
        bw, bh = w * sc, 120 * sc; bx0, by0 = 540 - bw / 2, y - bh / 2
        if kind == "sub":
            fill = (60, 60, 64, 255) if on else (220, 32, 38, 255); tc = (235, 235, 235, 255)
        elif kind == "follow":
            fill = (40, 40, 46, 255) if on else (238, 236, 230, 255); tc = (240, 240, 240, 255) if on else (20, 20, 24, 255)
        else:
            fill = (30, 30, 36, 255); tc = (240, 238, 232, 255)
        btn = Image.new("RGBA", (W, H), (0, 0, 0, 0)); bd = ImageDraw.Draw(btn)
        bd.rounded_rectangle((bx0, by0, bx0 + bw, by0 + bh), radius=int(bh / 2), fill=fill, outline=(90, 88, 84, 255) if kind in ("like", "comment") else None, width=2)
        icon(bd, kind, bx0 + 90 * sc, y - 2, on, tc)
        bd.text((540 + 30 * sc, y), lab_on if on else lab, font=fb, fill=tc, anchor="mm")
        btn.putalpha(btn.getchannel("A").point(lambda v: int(v * p)))
        L.alpha_composite(btn)
        # ketukan (lingkaran + riak)
        if t_tap - 0.35 <= t < t_tap + 0.6:
            tx, ty = bx0 + bw - 52, y + 8
            ap = fade(t, t_tap - 0.35, 0.2) * (1 - fade(t, t_tap + 0.3, 0.3))
            dd = ImageDraw.Draw(L)
            dd.ellipse((tx - 26, ty - 26, tx + 26, ty + 26), fill=(255, 255, 255, int(150 * ap)))
            if t >= t_tap:
                r = 30 + (t - t_tap) * 220
                dd.ellipse((tx - r, ty - r, tx + r, ty + r), outline=(255, 255, 255, int(200 * (1 - (t - t_tap) / 0.6))), width=4)
        if kind == "like" and t_tap <= t < t_tap + 0.8:   # hati kecil melayang
            k = (t - t_tap) / 0.8; dd = ImageDraw.Draw(L)
            for j in range(5):
                heart(dd, bx0 + 90 + (j - 2) * 30 + 20 * math.sin(k * 6 + j), y - 40 - k * 160 - j * 15, 10, (235, 64, 82, int(220 * (1 - k))))
    L.putalpha(L.getchannel("A").point(lambda v: int(v * a0)))
    fr.alpha_composite(L)
    return fr.convert("RGB")

def audio(path):
    sr = 44100; n = int(D * sr); out = np.zeros(n); rng = np.random.default_rng(1)
    def add(sig, t0, g):
        i0 = int(t0 * sr); e = min(n, i0 + len(sig)); out[i0:e] += g * sig[:e - i0]
    lt = np.arange(int(0.12 * sr)) / sr
    click = (np.sin(2 * np.pi * 1800 * lt) + 0.5 * np.sin(2 * np.pi * 3400 * lt)) * np.exp(-lt / 0.012) + rng.standard_normal(len(lt)) * np.exp(-lt / 0.0015) * 0.3
    pop = np.sin(2 * np.pi * (500 + 400 * np.exp(-lt * 40)) * lt) * np.exp(-lt / 0.03)
    for (_, _, _, t_in, t_tap) in BTN:
        add(pop, t_in, 0.12); add(click, t_tap, 0.35)
    lt2 = np.arange(int(1.5 * sr)) / sr
    add(sum(np.sin(2 * np.pi * f * lt2) for f in (523.3, 659.3, 784.0)) * np.exp(-lt2 * 2.2) / 3, 3.75, 0.25)
    out *= np.clip((n - np.arange(n)) / (0.4 * sr), 0, 1)
    st = np.stack([out, out], 1)
    with wave.open(path, "wb") as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr); w.writeframes((st * 32767).astype(np.int16).tobytes())

if __name__ == "__main__":
    if sys.argv[1] == "still":
        for t in map(float, sys.argv[2:]): frame(t).save(os.path.join(OUT, f"end_{t:.1f}.png"))
    else:
        audio(os.path.join(OUT, "end.wav"))
        p = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                              "-i", os.path.join(OUT, "end.wav"), "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p",
                              "-c:a", "aac", "-b:a", "192k", "-shortest", os.path.join(OUT, "endcard.mp4")], stdin=subprocess.PIPE)
        for fi in range(int(D * FPS)): p.stdin.write(frame(fi / FPS).tobytes())
        p.stdin.close(); p.wait(); print("ok")
