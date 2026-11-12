"""Episode 3: Catatan Amal - tersinkron dengan voice-over (50,76 detik).
Visual simbolis: lembar, tinta, tangan, cahaya dan bayangan; tanpa wajah/identitas."""
import math, os, sys, wave, subprocess
import numpy as np
from multiprocessing import Pool
from PIL import Image, ImageDraw, ImageFilter, ImageOps

S = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(S), "ep2"))
import render_ep2 as e2
rb = e2.rb
from render_barzakh import (W, H, FPS, F, ease, fade, lerp, lerpc, vgrad, to_img, radial, word_layers, arabic_layer,
                            src_layer, GOLD, WHITE, LORA_R, LORA_I, MONT)

UP = "/root/.claude/uploads/06fbf1ed-987f-5f23-8ee6-ea05fd4d4a70"
VO = os.path.join(UP, [p for p in os.listdir(UP) if p.startswith("0ba3d274")][0])
TOTAL = 50.76
NFRAMES = int(TOTAL * FPS)
G = e2.G

BLOCKS = [
    (0.5, 4.2, [("ar", "وَوُضِعَ الْكِتَابُ", 0), ("tr", "“Catatan amal dibuka.”", 1.6), ("src", "SURAH AL-KAHF AYAT 49", 2.2)]),
    (5.0, 15.2, [("id", "Tak ada amal kecil maupun besar yang luput.", 0), ("src", "SURAH AL-KAHF AYAT 49", 2.2)]),
    (16.0, 21.3, [("ar", "هَاؤُمُ اقْرَءُوا كِتَابِيَهْ", 0), ("tr", "“Kemarilah, bacalah catatanku!”", 3.3), ("src", "SURAH AL-HAQQAH AYAT 19", 3.9)]),
    (22.8, 30.9, [("ar", "يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ", 5.0), ("tr", "“Andai saja catatanku tidak diberikan kepadaku.”", 5.7), ("src", "SURAH AL-HAQQAH AYAT 25", 6.6)]),
    (31.3, 35.0, [("trg", "Bahagia pada satu suara. Penyesalan pada suara lain.", 0)]),
    (36.1, 42.7, [("ar", "وَلَا يَظْلِمُ رَبُّكَ أَحَدًا", 0), ("id", "Tuhanmu tidak menzalimi seorang pun.", 2.4), ("src", "SURAH AL-KAHF AYAT 49", 3.4)]),
    (43.6, 50.2, [("trg", "Apa yang akan ditunjukkan catatan amal kita?", 1.4)]),
]
e2.BLOCKS[:] = BLOCKS

# ---------------- tangan & lembar ----------------
def build_hand():
    """Komposisi tangan kanan menerima lembar bercahaya (dicerminkan untuk tangan kiri)."""
    hand = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(hand)
    col = (6, 5, 7, 255)
    px, py = 560, 1250                     # pusat telapak
    d.polygon([(W + 160, H + 80), (W + 40, H + 260), (px + 20, py + 90), (px + 120, py - 10)], fill=col)  # lengan
    d.ellipse((px - 130, py - 70, px + 130, py + 80), fill=col)                                            # telapak
    for k, (ang, ln) in enumerate([(-160, 150), (-148, 168), (-136, 160), (-124, 132)]):                   # jari
        a = math.radians(ang); bx, by = px - 80 + k * 46, py - 40
        ex, ey = bx + ln * 0.25 * math.cos(a) - 6, by - ln
        d.line((bx, by, ex, ey), fill=col, width=40); d.ellipse((ex - 20, ey - 20, ex + 20, ey + 20), fill=col)
    d.line((px + 110, py, px + 200, py - 120), fill=col, width=44); d.ellipse((px + 178, py - 142, px + 222, py - 98), fill=col)
    G["hand"] = hand
    pg = G["page"].resize((340, 480)).rotate(-6, resample=Image.BICUBIC, expand=True)
    G["hpage"] = pg
    G["hglow"] = radial(W, H, 540, 1000, 560, 640, (255, 214, 150), 1.5, 1.0)
    G["hglow_c"] = radial(W, H, 540, 1000, 520, 600, (120, 140, 190), 1.6, 1.0)
    G["hbg"] = to_img(vgrad(H, [(0, (6, 6, 9)), (0.6, (14, 12, 14)), (1, (5, 5, 7))])).convert("RGBA")

def hand_frame(t, side="R", light=1.0, rise=1.0):
    fr = G["hbg"].copy()
    warm = side == "R"
    gl = (G["hglow"] if warm else G["hglow_c"]).copy()
    gl.putalpha(gl.getchannel("A").point(lambda v: int(v * (0.85 if warm else 0.6) * light)))
    fr.alpha_composite(gl)
    pg = G["hpage"].copy()
    if not warm:
        pg = Image.blend(pg, Image.new("RGBA", pg.size, (40, 46, 60, 255)), 0.55 + 0.35 * (1 - light))
        pg.putalpha(G["hpage"].getchannel("A"))
    else:
        tint = Image.new("RGBA", pg.size, (255, 236, 190, 0)); tint.putalpha(G["hpage"].getchannel("A").point(lambda v: int(v * 0.35 * light)))
        pg.alpha_composite(tint)
    float_y = 6 * math.sin(t * 2.0)
    py = int(lerp(1400, 700, ease(rise)) + float_y)
    x0 = int(470 - pg.width / 2 + 40)
    col = (6, 5, 7, 255)
    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0)); hd = ImageDraw.Draw(lay)
    bx = x0 + pg.width * 0.58; by = py + pg.height - 46
    # lengan & telapak di belakang lembar
    hd.polygon([(W + 200, H + 200), (W - 60, H + 260), (bx + 30, by + 70), (bx + 170, by - 20)], fill=col)
    hd.ellipse((bx - 70, by - 70, bx + 170, by + 90), fill=col)
    lay.alpha_composite(pg, (x0, py))
    # partikel cahaya di sekitar lembar
    rng = np.random.default_rng(3 if warm else 4); dd = ImageDraw.Draw(lay)
    for k in range(60):
        x = 510 + rng.normal(0, 200); y0 = py + rng.uniform(-100, 560); sp = rng.uniform(20, 70)
        y = y0 - ((t * sp) % 300) * (1 if warm else -0.6)
        a = int((150 if warm else 90) * light * (0.5 + 0.5 * math.sin(t * 3 + k)))
        c = (255, 226, 170) if warm else (170, 190, 230)
        if a > 5: dd.ellipse((x - 2, y - 2, x + 2, y + 2), fill=c + (a,))
    # buku jari di tepi bawah & jempol di depan lembar
    for k in range(4):
        cx_, cy_ = bx - 70 + k * 40, by + 14 - k * 3
        hd.ellipse((cx_ - 23, cy_ - 23, cx_ + 23, cy_ + 23), fill=col)
    hd.line((bx + 120, by + 30, bx + 60, by - 105), fill=col, width=44)
    hd.ellipse((bx + 38, by - 127, bx + 82, by - 83), fill=col)
    if not warm: lay = ImageOps.mirror(lay)
    fr.alpha_composite(lay)
    return fr

# ---------------- adegan ----------------
def scene_open(t):
    p = ease((t - 0.2) / 2.2)
    fr = e2.book_frame(t, open_p=max(0.02, p), write_p=0.0, light=0.6 * fade(t, 2.0, 1.5))
    return e2.zoom(fr, 1.25 - 0.15 * ease(t / 4.3), 540, 1000)

def ink_dot(fr, cx, cy, r, a=1.0):
    d = ImageDraw.Draw(fr)
    d.ellipse((cx - r, cy - r * 0.9, cx + r, cy + r * 0.9), fill=(30, 22, 18, int(255 * a)))
    for k in range(7):
        ang = k * 0.9; rr = r * (1.1 + 0.25 * math.sin(k * 3))
        d.ellipse((cx + rr * math.cos(ang) - r * 0.25, cy + rr * math.sin(ang) - r * 0.25, cx + rr * math.cos(ang) + r * 0.25, cy + rr * math.sin(ang) + r * 0.25), fill=(30, 22, 18, int(200 * a)))

def scene_deeds(t):
    if t < 4.92:
        fr = e2.book_frame(t, write_p=0.0, light=0.6)
        ink_dot(fr, 760, 900, 3 + 40 * ease((t - 4.3) / 0.5))
        return e2.zoom(fr, 2.6, 760, 900)
    if t < 7.6:   # jejak tulisan abstrak muncul
        fr = e2.book_frame(t, write_p=ease((t - 4.92) / 2.6), light=0.6)
        return e2.zoom(fr, 2.0 + 0.2 * (t - 4.92) / 2.7, 760, 860)
    if t < 9.99:  # "smallest" - titik tinta sangat kecil, cut tajam
        fr = e2.book_frame(t, light=0.6)
        fr.alpha_composite(radial(120, 120, 60, 60, 60, 60, (255, 220, 150), 1.4, 0.9 * fade(t, 7.7, 0.4)), (240, 1030))
        ink_dot(fr, 300, 1090, 4)
        return e2.zoom(fr, 4.2, 300, 1090)
    if t < 12.36:  # "greatest" - seluruh kitab
        fr = e2.book_frame(t, light=0.9)
        for i, (x, y) in enumerate(G["marks"]):
            fr.alpha_composite(radial(60, 60, 30, 30, 30, 30, (255, 220, 140), 1.5, 0.8 * fade(t, 10.1 + i * 0.02, 0.3)), (int(x - 30), int(y - 30)))
        return e2.zoom(fr, 1.0 + 0.04 * (t - 9.99), 540, 1000)
    fr = e2.book_frame(t, light=0.7 + 0.3 * fade(t, 12.4, 2))
    return e2.zoom(fr, 1.5 - 0.15 * ease((t - 12.36) / 3), 540, 980)

def scene_right(t):
    return hand_frame(t, "R", light=fade(t, 15.4, 1.2) * (0.8 + 0.2 * fade(t, 19.2, 1.0)), rise=(t - 15.3) / 1.6)

def scene_left(t):
    light = 0.9 * (1 - 0.7 * fade(t, 23.0, 5.0))
    fr = hand_frame(t, "L", light=light, rise=(t - 21.4) / 1.4)
    return fr

def scene_alt(t):
    k = int((t - 31.29) / 0.5)
    if t >= 35.2:   # tahan satu ketukan hening
        fr = e2.book_frame(t, light=0.2)
        fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, 200)))
        return fr
    return hand_frame(t, "R" if k % 2 == 0 else "L", light=1.0 if k % 2 == 0 else 0.45, rise=1.0)

def scene_sweep(t):
    fr = e2.book_frame(t, light=0.5)
    x = lerp(80, 1000, ease((t - 37.0) / 4.4))
    bar = radial(W, H, x, 1000, 70, 420, (255, 246, 220), 1.2, 0.75 * fade(t, 36.4, 0.8))
    fr.alpha_composite(bar)
    rb.overlay_dust(fr, t, (240, 235, 220), 0.6, (80, 600, 1000, 1400))
    return e2.zoom(fr, 1.2, 540, 1000)

def scene_end(t):
    fr = e2.book_frame(t, light=0.6 * (1 - fade(t, 47, 3)))
    z = lerp(1.2, 0.7, ease((t - 42.9) / 7.0))
    if z < 1:
        small = fr.resize((int(W * z), int(H * z)), Image.BILINEAR)
        out = Image.new("RGBA", (W, H), (5, 5, 7, 255)); out.alpha_composite(small, ((W - small.width) // 2, (H - small.height) // 2))
        fr = out
    else:
        fr = e2.zoom(fr, z, 540, 1000)
    k = fade(t, 48.2, 2.4)
    if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(255 * k))))
    return fr

def scene_black(t): return Image.new("RGBA", (W, H), (0, 0, 0, 255))

SCENES = [(0.0, 4.3, scene_open), (4.3, 15.5, scene_deeds), (15.3, 21.5, scene_right), (21.4, 31.29, scene_left),
          (31.29, 36.1, scene_alt), (36.0, 43.0, scene_sweep), (42.9, TOTAL + 0.1, scene_end)]
HARD = {4.3, 15.3, 21.4, 31.29}  # cut tanpa crossfade

def compose(t):
    act = [(a, b, f) for (a, b, f) in SCENES if a <= t < b]
    if not act: return scene_black(t)
    if len(act) == 1 or act[1][0] in HARD: return act[-1][2](t)
    (a1, b1, f1), (a2, b2, f2) = act[0], act[1]
    x = ease((t - a2) / max(0.01, b1 - a2))
    return Image.blend(f1(t).convert("RGB"), f2(t).convert("RGB"), x).convert("RGBA")

FLASHES = [(7.6, 0.18, 0.55), (9.99, 0.18, 0.55), (15.95, 0.5, 0.35), (22.73, 0.25, 0.25)]
SHAKES = [(7.6, 0.4, 10), (9.99, 0.4, 12), (22.73, 0.6, 8)]

def render(fi):
    t = fi / FPS
    fr = compose(t)
    for (t0, d, s) in FLASHES:
        if t0 <= t < t0 + d:
            fr.alpha_composite(Image.new("RGBA", (W, H), (255, 250, 240, int(255 * s * (1 - (t - t0) / d) ** 1.5))))
    vl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); vl.putalpha(rb.G["vig_a"].point(lambda a: int(a * 0.8)))
    fr.alpha_composite(vl)
    fr.alpha_composite(rb.G["grain"][fi % 6])
    dx = dy = 0
    for (t0, dur, amp) in SHAKES:
        if t0 <= t < t0 + dur:
            k = amp * (1 - (t - t0) / dur); dx += int(k * math.sin(t * 61)); dy += int(k * math.cos(t * 47))
    if dx or dy:
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 255)); sh.paste(fr, (dx, dy)); fr = sh
    fr.alpha_composite(G["topshade"])
    e2.draw_text(fr, t)
    fr.alpha_composite(G["wm"], (0, 1640))
    g = min(fade(t, 0, 0.8), 1 - fade(t, TOTAL - 0.4, 0.4))
    rgb = fr.convert("RGB")
    if g < 0.999: rgb = Image.eval(rgb, lambda v: int(v * g))
    return rgb

def build():
    rb.build_extras(); e2.build_book(); build_hand()
    G["text"] = e2.build_text()
    G["topshade"] = to_img(np.dstack([np.zeros((H, W, 3)), np.repeat(np.interp(np.arange(H), [0, 300, 640, 820], [235, 215, 120, 0])[:, None], W, 1)])).convert("RGBA")
    wm = Image.new("RGBA", (W, 60), (0, 0, 0, 0))
    ImageDraw.Draw(wm).text((W / 2, 30), "@alurziyadahku", font=F(MONT, 24), fill=(235, 232, 225, 150), anchor="mm")
    G["wm"] = wm

def worker(args):
    a, b, out = args
    build()
    p = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                          "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-maxrate", "5000k", "-bufsize", "10000k", "-pix_fmt", "yuv420p", out], stdin=subprocess.PIPE)
    for fi in range(a, b): p.stdin.write(render(fi).tobytes())
    p.stdin.close(); p.wait(); return out

# ---------------- audio ----------------
def make_audio(path):
    from numpy.fft import rfft, irfft
    sr = 44100; n = int(TOTAL * sr); tt = np.arange(n) / sr
    rng = np.random.default_rng(5)
    os.makedirs(os.path.join(S, "out"), exist_ok=True)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", VO, "-ar", str(sr), "-ac", "1", os.path.join(S, "out", "vo44.wav")], check=True)
    with wave.open(os.path.join(S, "out", "vo44.wav")) as w:
        vo = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(float) / 32768
    vo = np.pad(vo, (0, max(0, n - len(vo))))[:n]
    def env(points): return np.interp(tt, [p[0] for p in points], [p[1] for p in points])
    def filt(x, lo=None, hi=None):
        X = rfft(x); f = np.fft.rfftfreq(len(x), 1 / sr); g = np.ones_like(f)
        if hi: g *= 1 / np.sqrt(1 + (f / hi) ** 4)
        if lo: g *= 1 / np.sqrt(1 + (lo / np.maximum(f, 1e-3)) ** 4)
        return irfft(X * g, len(x))
    def norm(x): return x / (np.abs(x).max() + 1e-9)
    def seg(d): return np.arange(int(d * sr)) / sr
    bed = np.zeros(n)
    def add(sig, t0, g=1.0):
        i0 = int(t0 * sr)
        if i0 >= n: return
        e = min(n, i0 + len(sig)); bed[i0:e] += g * sig[:e - i0]
    # dasar lembut (bukan dengung terus-menerus): pad tegang yang naik-turun
    pad = filt(sum(np.sin(2 * np.pi * f * tt + i) for i, f in enumerate([110.0, 164.8, 220.0, 261.6])), None, 800)
    bed += 0.05 * pad * env([(0, 0), (1, 0.5), (4.2, 0.5), (4.3, 0.8), (15.2, 0.8), (15.9, 0.0), (22.7, 0.0), (23.5, 0.6), (31.2, 0.6), (35.2, 0), (36.1, 0),
                            (37, 0.5), (43, 0.6), (48, 0.2), (50.76, 0)])
    warm = filt(sum(np.sin(2 * np.pi * f * tt + i) for i, f in enumerate([261.6, 329.6, 392.0, 523.3])), None, 2000)
    bed += 0.035 * warm * env([(0, 0), (15.9, 0), (16.5, 1), (21.3, 0.8), (21.4, 0), (50.76, 0)])
    cold = filt(np.sin(2 * np.pi * 55 * tt) + 0.7 * np.sin(2 * np.pi * 58.27 * tt) + 0.5 * np.sin(2 * np.pi * 77.8 * tt), None, 300)
    bed += 0.09 * cold * env([(0, 0), (22.7, 0), (23.2, 1), (31.2, 0.8), (31.3, 0), (50.76, 0)])
    # halaman dibuka
    def page(t0, g, d=0.6):
        lt = seg(d); s = filt(rng.standard_normal(len(lt)), 1500, 9000) * np.sin(np.pi * lt / d) ** 2 * (0.6 + 0.4 * (rng.uniform(0, 1, len(lt)) > 0.5))
        add(norm(s), t0, g)
    page(0.2, 0.25, 1.6); page(3.1, 0.15); page(12.36, 0.18)
    # tetes tinta
    lt = seg(0.4); add(np.sin(2 * np.pi * (900 * np.exp(-lt * 9) + 300) * lt) * np.exp(-lt * 14), 4.4, 0.25)
    # goresan pena
    scr = norm(filt(rng.standard_normal(int(2.6 * sr)), 2500, 7000)) * (0.5 + 0.5 * np.sin(2 * np.pi * 7 * seg(2.6)) ** 2)
    add(scr * np.sin(np.pi * seg(2.6) / 2.6), 4.95, 0.08)
    # cut tajam
    def hit(t0, g):
        lt = seg(1.6); s = np.sin(2 * np.pi * (60 - 8 * lt) * lt) * np.exp(-lt * 3) + 0.5 * filt(rng.standard_normal(len(lt)), 800, 8000) * np.exp(-lt * 18)
        add(norm(s) * np.clip(lt / 0.003, 0, 1), t0, g)
    def whoosh(t_end, d, g):
        lt = seg(d); s = filt(rng.standard_normal(len(lt)), 400, 6000) * (lt / d) ** 2.5
        add(norm(s), t_end - d, g)
    for t0, g in [(7.6, 0.5), (9.99, 0.55), (22.73, 0.45), (36.0, 0.25), (43.55, 0.3)]:
        whoosh(t0, 0.5, 0.15); hit(t0, g)
    for k in range(8):   # pergantian cepat bahagia/penyesalan
        hit(31.29 + k * 0.5, 0.22 if k % 2 else 0.18)
    # kilau hangat (tangan kanan)
    def shimmer(t0, g, base=880):
        for i, f in enumerate([base, base * 1.25, base * 1.5, base * 2]):
            lt = seg(2.5); add(np.sin(2 * np.pi * f * lt) * np.exp(-lt * 1.8) * np.clip(lt / 0.01, 0, 1), t0 + i * 0.07, g)
    shimmer(15.95, 0.04); shimmer(19.2, 0.03, 1046)
    # hembusan dingin (tangan kiri / penyesalan)
    air = norm(filt(rng.standard_normal(n), 200, 1200)) * env([(0, 0), (26.3, 0), (27.9, 1), (30.4, 0.5), (31.2, 0), (50.76, 0)])
    bed += 0.06 * air
    # sapuan cahaya
    lt = seg(4.4); add(norm(filt(rng.standard_normal(len(lt)), 3000, 10000)) * np.sin(np.pi * lt / 4.4) ** 2 * 0.5 + np.sin(2 * np.pi * 1320 * lt) * 0.2 * np.sin(np.pi * lt / 4.4), 37.0, 0.06)
    # duck di bawah narator
    vo_env = np.sqrt(np.maximum(filt(vo ** 2, None, 6), 0))
    vo_env = np.clip(vo_env / (vo_env.max() + 1e-9) * 6, 0, 1)
    bed = np.nan_to_num(np.tanh(bed * (1 - 0.6 * vo_env) * 1.2))
    out = vo + bed * 0.3
    out *= env([(0, 0), (0.2, 1), (50.0, 1), (50.76, 0)])
    out = out / (np.abs(out).max() + 1e-9) * 0.95
    st = np.stack([out, out], 1)
    with wave.open(path, "wb") as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr)
        w.writeframes((st * 32767).astype(np.int16).tobytes())

if __name__ == "__main__":
    outdir = os.path.join(S, "out"); os.makedirs(outdir, exist_ok=True)
    mode = sys.argv[1]
    if mode == "still":
        build()
        for tt_ in map(float, sys.argv[2:]):
            render(int(tt_ * FPS)).save(os.path.join(outdir, f"still_{tt_:06.1f}.png"))
    elif mode == "audio":
        make_audio(os.path.join(outdir, "audio.wav"))
    elif mode == "full":
        make_audio(os.path.join(outdir, "audio.wav"))
        P = 4; ch = math.ceil(NFRAMES / P)
        jobs = [(k * ch, min(NFRAMES, (k + 1) * ch), os.path.join(outdir, f"part{k}.mp4")) for k in range(P)]
        with Pool(P) as pool: parts = pool.map(worker, jobs)
        with open(os.path.join(outdir, "list.txt"), "w") as f:
            for p in parts: f.write(f"file '{p}'\n")
        os.system(f"ffmpeg -v error -y -f concat -safe 0 -i {outdir}/list.txt -i {outdir}/audio.wav -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart {outdir}/ep3.mp4")
        print("done")
