"""Episode 2: Saat Sangkakala Ditiup - tersinkron dengan voice-over (110,6 detik).
Visual simbolis: tanpa sangkakala literal, tanpa sosok gaib, siluet tanpa wajah."""
import math, os, sys, wave, subprocess
import numpy as np
from multiprocessing import Pool
from PIL import Image, ImageDraw, ImageFilter, ImageChops

S = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(S), "barzakh"))
import render_barzakh as rb
from render_barzakh import (W, H, FPS, F, ease, fade, lerp, lerpc, vgrad, to_img, radial, cypress, person,
                            word_layers, arabic_layer, src_layer, GOLD, WHITE, LORA_R, LORA_I, MONT)

VO = [p for p in os.listdir("/root/.claude/uploads/06fbf1ed-987f-5f23-8ee6-ea05fd4d4a70") if p.startswith("8f432c42")][0]
VO = os.path.join("/root/.claude/uploads/06fbf1ed-987f-5f23-8ee6-ea05fd4d4a70", VO)
TOTAL = 110.6
NFRAMES = int(TOTAL * FPS)
G = {}
SIL = (4, 4, 7)

# ---------------- teks layar ----------------
BLOCKS = [
    (2.3, 15.0, [("id", "Dunia yang kita kenal akan terdiam.", 0)]),
    (16.4, 24.9, [("ar", "وَنُفِخَ فِي الصُّورِ", 0), ("tr", "“Dan sangkakala pun ditiup…”", 1.2),
                  ("src", "SURAH AZ-ZUMAR AYAT 68", 2.6)]),
    (25.8, 30.6, [("id", "Semua terdiam, kecuali yang dikehendaki Allah.", 0)]),
    (32.2, 45.8, [("ar", "ثُمَّ نُفِخَ فِيهِ أُخْرَىٰ\nفَإِذَا هُمْ قِيَامٌ يَنظُرُونَ", 0), ("id", "Lalu mereka bangkit dan menanti.", 3.5),
                  ("src", "SURAH AZ-ZUMAR AYAT 68", 5.0)]),
    (46.7, 56.2, [("id", "Dari kubur, mereka bergegas.", 0), ("ar", "فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ", 1.4),
                  ("src", "SURAH YASIN AYAT 51", 3.2)]),
    (57.1, 66.2, [("ar", "يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا", 0),
                  ("tr", "“Celakalah kami! Siapakah yang membangkitkan kami dari tempat tidur kami?”", 1.0),
                  ("trg", "“Inilah yang dijanjikan Yang Maha Pengasih, dan benarlah para rasul.”", 5.6),
                  ("src", "SURAH YASIN AYAT 52", 6.6)]),
    (67.1, 77.9, [("ar", "وَحَشَرْنَاهُمْ فَلَمْ نُغَادِرْ مِنْهُمْ أَحَدًا", 5.9), ("id", "Tak seorang pun tertinggal.", 8.1),
                  ("src", "SURAH AL-KAHF AYAT 47", 9.0)]),
    (78.4, 93.0, [("ar", "مَالِ هَٰذَا الْكِتَابِ لَا يُغَادِرُ\nصَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا", 0),
                  ("tr", "“Kitab apakah ini, tidak ada yang tertinggal, yang kecil dan yang besar, melainkan tercatat semuanya.”", 5.4),
                  ("src", "SURAH AL-KAHF AYAT 49", 8.0)]),
    (94.4, 100.9, [("ar", "وَلَا يَظْلِمُ رَبُّكَ أَحَدًا", 0), ("tr", "“Dan Tuhanmu tidak menzalimi seorang pun.”", 1.0),
                   ("src", "SURAH AL-KAHF AYAT 49", 2.4)]),
    (101.8, 109.6, [("id", "Hari itu pasti datang.", 0), ("trg", "Apa bekal kita?", 6.0)]),
]
TEXT_TOP = 230

def build_text():
    out = []
    for (t0, t1, items) in BLOCKS:
        y = TEXT_TOP; elems = []
        for it in items:
            kind, content, delay = it
            if kind == "ar":
                im = arabic_layer(content, 64); elems.append(("img", im, y, delay)); y += im.height + 16
            elif kind == "src":
                im = src_layer(content); elems.append(("img", im, y + 6, delay)); y += 70
            else:
                font = {"id": F(LORA_R, 48), "tr": F(LORA_I, 40), "trg": F(LORA_I, 44)}[kind]
                col = {"id": WHITE, "tr": (225, 222, 214), "trg": GOLD}[kind]
                words, hh = word_layers(content, font, col, 900)
                elems.append(("words", words, y, delay)); y += hh + 18
        out.append((t0, t1, elems))
    return out

def draw_text(fr, t):
    for (t0, t1, elems) in G["text"]:
        if t < t0 - 0.1 or t > t1 + 0.1: continue
        out = 1 - fade(t, t1 - 0.45, 0.45)
        for kind, obj, y, delay in elems:
            ts = t0 + delay
            if kind == "img":
                a = fade(t, ts, 0.6) * out
                if a > 0.01:
                    im = obj if a > 0.99 else obj.copy()
                    if a <= 0.99: im.putalpha(obj.getchannel("A").point(lambda v: int(v * a)))
                    fr.alpha_composite(im, (int((W - obj.width) / 2), int(y + (1 - fade(t, ts, 0.6)) * 8)))
            else:
                for k, (im, x, yy) in enumerate(obj):
                    a = fade(t, ts + k * 0.09, 0.35) * out
                    if a <= 0.01: continue
                    im2 = im if a > 0.99 else im.copy()
                    if a <= 0.99: im2.putalpha(im.getchannel("A").point(lambda v: int(v * a)))
                    fr.alpha_composite(im2, (x, int(y + yy)))

# ---------------- bangunan visual ----------------
def build_city():
    rng = np.random.default_rng(3)
    sky = to_img(vgrad(H, [(0, (6, 8, 18)), (0.5, (16, 18, 34)), (0.62, (52, 36, 46)), (0.7, (24, 20, 30)), (1, (8, 8, 12))])).convert("RGBA")
    sky.alpha_composite(rb.stars_layer(int(H * 0.55), 160, 5)[0])
    bl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(bl)
    gy = int(H * 0.72)
    wins = []
    for layer_, (col, hmin, hmax, wmin, wmax) in enumerate([((22, 24, 36), 300, 700, 60, 120), ((12, 13, 20), 200, 560, 80, 170)]):
        x = -20
        while x < W + 20:
            bw = rng.uniform(wmin, wmax); bh = rng.uniform(hmin, hmax)
            d.rectangle((x, gy - bh, x + bw, gy), fill=col + (255,))
            if rng.uniform() < 0.3: d.rectangle((x + bw * 0.4, gy - bh - 60, x + bw * 0.45, gy - bh), fill=col + (255,))
            for wy in np.arange(gy - bh + 18, gy - 20, 26 if layer_ else 22):
                for wx in np.arange(x + 10, x + bw - 14, 20 if layer_ else 16):
                    if rng.uniform() < (0.45 if layer_ else 0.3):
                        wins.append((wx, wy, 8 if layer_ else 6, 12 if layer_ else 9, rng.uniform(2.4, 7.0) if rng.uniform() < 0.92 else rng.uniform(7.0, 7.4), layer_))
            x += bw + rng.uniform(-6, 8)
    d.rectangle((0, gy, W, H), fill=(6, 6, 9, 255))
    lamps = [(x, gy + 40) for x in np.arange(60, W, 180)]
    for (x, y) in lamps:
        d.line((x, y, x, y - 170), fill=(10, 10, 14, 255), width=6); d.line((x, y - 170, x + 40, y - 170), fill=(10, 10, 14, 255), width=5)
    G["city_sky"], G["city_bl"], G["city_wins"], G["city_lamps"] = sky, bl, wins, lamps
    G["lampglow"] = radial(300, 300, 150, 150, 150, 150, (255, 200, 120), 1.8, 0.7)
    G["cityglow"] = radial(W, H, 540, gy, 900, 300, (255, 160, 90), 1.6, 0.45)

def scene_city(t):
    fr = G["city_sky"].copy()
    lit_all = 1 - fade(t, 5.4, 2.0)
    g = G["cityglow"].copy(); g.putalpha(g.getchannel("A").point(lambda v: int(v * lit_all))); fr.alpha_composite(g)
    fr.alpha_composite(G["city_bl"])
    d = ImageDraw.Draw(fr)
    for (wx, wy, ww, wh, toff, ly) in G["city_wins"]:
        if t < toff:
            c = (255, 214, 140) if ly else (230, 200, 150)
            d.rectangle((wx, wy, wx + ww, wy + wh), fill=c + (255 if ly else 170,))
        elif t < toff + 0.12:
            d.rectangle((wx, wy, wx + ww, wy + wh), fill=(120, 110, 90, 200))
    for k, (x, y) in enumerate(G["city_lamps"]):
        off = 5.4 + k * 0.18
        if t < off or (off + 0.1 < t < off + 0.2):
            fr.alpha_composite(G["lampglow"], (int(x + 40 - 150), int(y - 170 - 150)))
            d.ellipse((x + 32, y - 176, x + 48, y - 164), fill=(255, 230, 170, 255))
    z = 1 + 0.04 * t / 7.5
    return zoom(fr, z, 540, 1100)

def build_clock():
    bg = to_img(vgrad(H, [(0, (8, 8, 12)), (0.5, (18, 18, 24)), (1, (6, 6, 9))])).convert("RGBA")
    bg.alpha_composite(radial(W, H, 540, 980, 520, 520, (90, 80, 70), 1.4, 0.35))
    d = ImageDraw.Draw(bg); cx, cy, R = 540, 980, 360
    d.ellipse((cx - R - 24, cy - R - 24, cx + R + 24, cy + R + 24), fill=(28, 26, 26, 255))
    d.ellipse((cx - R, cy - R, cx + R, cy + R), fill=(214, 206, 188, 255))
    for k in range(60):
        a = math.radians(k * 6); r1 = R - 14; r2 = R - (48 if k % 5 == 0 else 26)
        d.line((cx + r1 * math.sin(a), cy - r1 * math.cos(a), cx + r2 * math.sin(a), cy - r2 * math.cos(a)), fill=(40, 36, 32, 255), width=8 if k % 5 == 0 else 3)
    G["clock"] = bg

def scene_clock(t):
    fr = G["clock"].copy(); d = ImageDraw.Draw(fr); cx, cy = 540, 980
    def hand(ang, ln, wd, col):
        a = math.radians(ang); d.line((cx - 40 * math.sin(a), cy + 40 * math.cos(a), cx + ln * math.sin(a), cy - ln * math.cos(a)), fill=col, width=wd)
    hand(305, 190, 18, (30, 28, 26, 255)); hand(55, 280, 12, (30, 28, 26, 255))
    st = min(t, 9.75)
    sec = math.floor(st - 7.4) + ease(min(1, (st - math.floor(st)) / 0.12))
    if t > 9.75: sec += 0.03 * math.sin((t - 9.75) * 30) * math.exp(-(t - 9.75) * 6)
    hand(120 + sec * 6, 320, 4, (150, 30, 26, 255))
    d.ellipse((cx - 16, cy - 16, cx + 16, cy + 16), fill=(30, 28, 26, 255))
    k = fade(t, 9.8, 0.6) * 0.45
    if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(255 * k))))
    return zoom(fr, 1.0 + 0.08 * (t - 7.4) / 2.8, 540, 980)

def build_land():
    sky = to_img(vgrad(H, [(0, (14, 12, 18)), (0.42, (60, 40, 40)), (0.52, (120, 74, 50)), (0.56, (40, 30, 30)), (1, (14, 12, 12))])).convert("RGBA")
    d = ImageDraw.Draw(sky)
    hy = int(H * 0.54)
    rng = np.random.default_rng(8)
    pts = [(0, hy)]
    for x in np.linspace(0, W, 12): pts.append((x, hy - rng.uniform(10, 60)))
    pts += [(W, hy), (W, H), (0, H)]
    d.polygon(pts, fill=(26, 20, 18, 255))
    d.rectangle((0, hy, W, H), fill=(30, 24, 20, 255))
    for _ in range(140):
        x, y = rng.uniform(0, W), rng.uniform(hy + 10, H)
        d.ellipse((x - 3, y - 2, x + 3, y + 2), fill=(56, 44, 34, 200))
    G["land"] = sky
    G["streaks"] = [(rng.uniform(0, W), rng.uniform(hy - 400, H), rng.uniform(400, 1100), rng.uniform(1, 3), rng.uniform(10, 60)) for _ in range(260)]

def scene_dust(t):
    fr = G["land"].copy()
    off = int((t * 300) % W)
    fog = rb.G["fog"].crop((off, 0, off + W, 700))
    fl = Image.new("RGBA", (W, 700), (170, 130, 100, 0)); fl.putalpha(fog.point(lambda v: int(v * 0.8)))
    fr.alpha_composite(fl, (0, int(H * 0.54) - 380))
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    for (x, y, sp, r, ln) in G["streaks"]:
        xx = (x + t * sp) % (W + 200) - 100
        d.line((xx, y + 10 * math.sin(t * 2 + x), xx - ln, y + 10 * math.sin(t * 2 + x)), fill=(200, 160, 120, 140), width=int(r))
    fr.alpha_composite(L)
    k = fade(t, 12.5, 2.8) * 0.85
    if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(255 * k))))
    return zoom(fr, 1.0 + 0.05 * (t - 10.2) / 5, 540, 1000)

def build_mountains():
    rng = np.random.default_rng(12)
    sky = to_img(vgrad(H, [(0, (8, 10, 22)), (0.45, (30, 26, 44)), (0.55, (90, 50, 50)), (0.6, (30, 24, 30)), (1, (10, 10, 12))])).convert("RGBA")
    sky.alpha_composite(rb.stars_layer(int(H * 0.5), 300, 14)[0])
    G["mt_sky"] = sky
    layers = []
    def ridge(npts, rough, seed):
        r = np.random.default_rng(seed); y = np.zeros(npts); step = npts - 1; amp = 1.0
        y[0], y[-1] = r.uniform(0.2, 0.6), r.uniform(0.2, 0.6)
        while step > 1:
            half = step // 2
            for i in range(half, npts - 1, step):
                y[i] = (y[i - half] + y[i + half]) / 2 + r.uniform(-amp, amp)
            amp *= rough; step = half
        y -= y.min(); return y / (y.max() + 1e-9)
    for k, (base, amp, col, seed) in enumerate([(1000, 420, (52, 46, 62), 3), (1080, 330, (30, 27, 36), 5), (1170, 230, (13, 12, 17), 9)]):
        L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
        yv = ridge(257, 0.52, seed); xs = np.linspace(-40, W + 40, 257)
        pts = [(x, base - amp * y) for x, y in zip(xs, yv)]
        d.polygon([(-40, H)] + pts + [(W + 40, H)], fill=col + (255,))
        layers.append(L)
    G["mts"] = layers
    G["rocks"] = [(rng.uniform(0, W), rng.uniform(700, 1100), rng.uniform(0, 6), rng.uniform(3, 8)) for _ in range(90)]

def scene_mountains(t, crumble=0.0, rows=False):
    fr = G["mt_sky"].copy()
    for k, L in enumerate(G["mts"]):
        dy = int(crumble * (220 + 120 * k))
        fr.alpha_composite(L, (0, dy))
    d = ImageDraw.Draw(fr)
    if 19.0 < t < 30 or crumble > 0:
        for (x, y, s0, r) in G["rocks"]:
            yy = y + ((t * 2 + s0) % 3) ** 2 * 120
            if yy < 1500: d.ellipse((x - r, yy - r, x + r, yy + r), fill=(60, 52, 60, 220))
    return fr

def build_ground():
    a = vgrad(H, [(0, (6, 6, 10)), (0.48, (14, 12, 16)), (0.5, (26, 22, 20)), (1, (12, 10, 9))])
    img = to_img(a).convert("RGBA")
    rng = np.random.default_rng(21)
    cracks = []
    for _ in range(14):
        x, y = rng.uniform(80, W - 80), rng.uniform(1000, 1800); pts = [(x, y)]
        ang = rng.uniform(0, 2 * math.pi)
        for k in range(int(rng.uniform(8, 18))):
            ang += rng.uniform(-0.7, 0.7); ln = rng.uniform(20, 60)
            x += math.cos(ang) * ln; y += math.sin(ang) * ln * 0.45; pts.append((x, y))
        cracks.append((rng.uniform(0, 1.6), pts))
    G["ground"], G["cracks"] = img, cracks
    # kerumunan berdiri di kejauhan (siluet tanpa wajah)
    crowd = Image.new("RGBA", (W, H), (0, 0, 0, 0)); cd = ImageDraw.Draw(crowd)
    for row, (yb, hh, n, col) in enumerate([(960, 38, 60, (40, 36, 44)), (985, 52, 40, (26, 24, 30)), (1020, 72, 26, (12, 12, 16))]):
        for k in range(n):
            person(cd, rng.uniform(-20, W + 20), yb + rng.uniform(-6, 6), hh * rng.uniform(0.9, 1.1), 0, "stand", 1, col)
    G["crowd"] = crowd

def scene_rise(t):
    fr = G["ground"].copy(); d = ImageDraw.Draw(fr)
    g = ease((t - 32.3) / 3.0)
    for (s0, pts) in G["cracks"]:
        n = int(len(pts) * min(1, max(0, (g * 1.8 - s0 * 0.5))))
        if n > 1:
            d.line(pts[:n], fill=(230, 150, 90, 230), width=4)
    if g > 0:
        cl = fr.filter(ImageFilter.GaussianBlur(10)) if False else None
    haze(fr, 980, (170, 150, 170), 0.45 * fade(t, 34.4, 2.0) + 0.15)
    a = fade(t, 35.6, 1.8)
    if a > 0:
        c = G["crowd"].copy(); c.putalpha(c.getchannel("A").point(lambda v: int(v * a))); fr.alpha_composite(c)
    z = 1.0 + 0.06 * ease((t - 38.2) / 4)
    cx, cy = 540, 1000
    if t > 42.2:  # potongan cepat
        k = int((t - 42.2) / (0.62 - min(0.3, (t - 42.2) * 0.07)))
        opts = [(1.6, 300, 990), (2.2, 760, 1000), (1.3, 540, 1000), (2.6, 420, 1010), (1.9, 640, 990), (3.0, 540, 1005)]
        z, cx, cy = opts[k % len(opts)]
    return zoom(fr, z, cx, cy)

def haze(fr, yc, col, strength):
    key = (yc, col)
    if key not in G.setdefault("hz", {}):
        G["hz"][key] = radial(W, H, 540, yc, 1100, 170, col, 1.3, 1.0)
    h = G["hz"][key]
    if strength < 0.999: h = h.copy(); h.putalpha(h.getchannel("A").point(lambda v: int(v * strength)))
    fr.alpha_composite(h)

def scene_march(t):
    """Siluet bergegas ke satu arah, kamera menyapu."""
    fr = G["land"].copy()
    k = fade(t, 46.4, 0.4)
    fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(110))))
    haze(fr, 1100, (190, 130, 95), 0.75)
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    rng = np.random.default_rng(31)
    pan = (t - 46.4) * 90
    for row, (yb, hh, n, col, sp) in enumerate([(1080, 56, 34, (40, 30, 30), 60), (1150, 88, 22, (18, 14, 14), 85), (1260, 130, 12, (4, 4, 6), 120)]):
        for i in range(n):
            x0 = rng.uniform(-300, W + 300); ph = rng.uniform(0, 6)
            x = (x0 + (t - 46.4) * sp - pan * (0.4 + row * 0.3)) % (W + 400) - 200
            person(d, x, yb + rng.uniform(-8, 8), hh, t * 6 + ph, "walk", 1, col)
    fr.alpha_composite(L)
    # debu dekat lensa
    D = Image.new("RGBA", (W, H), (0, 0, 0, 0)); dd = ImageDraw.Draw(D)
    for i in range(14):
        x = (rng.uniform(0, W) - (t - 46.4) * rng.uniform(300, 600)) % (W + 300) - 150
        y = rng.uniform(300, 1700); r = rng.uniform(20, 60)
        dd.ellipse((x - r, y - r, x + r, y + r), fill=(200, 170, 140, 60))
    fr.alpha_composite(D.filter(ImageFilter.GaussianBlur(12)))
    off = int((t * 200) % W)
    fog = rb.G["fog"].crop((off, 0, off + W, 700))
    fl = Image.new("RGBA", (W, 700), (160, 120, 100, 0)); fl.putalpha(fog.point(lambda v: int(v * 0.5)))
    fr.alpha_composite(fl, (0, 820))
    return fr

def scene_woe(t):
    fr = G["land"].copy()
    fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 10, 150)))
    haze(fr, 1130, (150, 120, 140), 0.6)
    fr.alpha_composite(G["crowd"], (0, 150))
    return zoom(fr, 1.0 + 0.04 * (t - 56.4) / 10, 540, 1100)

def scene_gather(t):
    cr = ease((t - 67.2) / 7.0)
    fr = scene_mountains(t, cr)
    # debu dari gunung yang runtuh
    off = int((t * 160) % W)
    fog = rb.G["fog"].crop((off, 0, off + W, 700))
    fl = Image.new("RGBA", (W, 700), (130, 110, 120, 0)); fl.putalpha(fog.point(lambda v: int(v * 0.9 * min(1, cr * 1.5))))
    fr.alpha_composite(fl, (0, 650))
    d = ImageDraw.Draw(fr)
    haze(fr, 1220, (160, 130, 150), 0.6)
    d = ImageDraw.Draw(fr)
    fr.paste(to_img(vgrad(H - 1240, [(0, (74, 62, 70)), (0.35, (44, 38, 44)), (1, (16, 14, 16))])), (0, 1240)); d = ImageDraw.Draw(fr)
    # barisan dari belakang
    for row in range(8):
        yb = 1300 + row ** 1.5 * 34; hh = 34 + row * 18; n = 26 - row * 2
        col = lerpc((40, 36, 44), (4, 4, 6), row / 7)
        for i in range(n):
            x = (i + 0.5 + (0.5 if row % 2 else 0)) / n * W
            person(d, x, yb, hh, 0, "stand", 1, col)
    # kamera cepat lalu melambat
    sp = 1 - ease((t - 73.0) / 2.5)
    x_off = (t - 67.0) * 60 * sp
    z = 1.25 - 0.2 * ease((t - 67) / 8)
    return zoom(fr, z, 540 + 120 * math.sin(x_off / 80), 1100)

def build_book():
    rng = np.random.default_rng(41)
    bg = to_img(vgrad(H, [(0, (6, 6, 8)), (1, (14, 12, 12))])).convert("RGBA")
    page = Image.new("RGBA", (440, 620), (0, 0, 0, 0)); pd = ImageDraw.Draw(page)
    pd.rectangle((0, 0, 440, 620), fill=(204, 190, 160, 255))
    for k in range(18):  # garis tulisan abstrak, tidak terbaca
        y = 50 + k * 30; x = 40
        while x < 400:
            ln = rng.uniform(20, 70)
            pts = [(x + i, y + 3 * math.sin(i / 4 + rng.uniform(0, 3))) for i in range(0, int(min(ln, 400 - x)), 4)]
            if len(pts) > 1: pd.line(pts, fill=(70, 58, 46, 200), width=2)
            x += ln + rng.uniform(8, 14)
    G["book_bg"], G["page"] = bg, page
    G["marks"] = [(rng.uniform(60, 820), rng.uniform(720, 1300)) for _ in range(40)]

def book_frame(t, open_p=1.0, write_p=1.0, flip=None, light=0.0):
    fr = G["book_bg"].copy(); d = ImageDraw.Draw(fr)
    cx, top = 540, 680
    fr.alpha_composite(radial(W, H, cx, 1000, 700, 520, (255, 240, 210), 1.4, 0.18 + light * 0.35))
    d.polygon([(cx - 470, top - 10), (cx + 470, top - 10), (cx + 480, top + 640), (cx - 480, top + 640)], fill=(40, 22, 16, 255))
    pg = G["page"]
    if write_p < 1:
        m = Image.new("L", pg.size, 255); md = ImageDraw.Draw(m)
        md.rectangle((0, int(40 + write_p * 560), 440, 620), fill=0)
        bare = Image.new("RGBA", pg.size, (204, 190, 160, 255)); bare.alpha_composite(Image.composite(pg, bare, m))
        pg_r = bare
    else: pg_r = pg
    fr.alpha_composite(pg, (cx - 450, top))
    w = int(440 * max(0.02, open_p))
    rp = pg_r.resize((w, 620))
    fr.alpha_composite(rp, (cx + 10, top))
    d.rectangle((cx - 12, top, cx + 12, top + 620), fill=(60, 44, 34, 255))
    if flip is not None:
        fw = int(440 * abs(math.cos(flip * math.pi)))
        if fw > 2:
            fp = Image.new("RGBA", (fw, 620), (226, 214, 186, 255))
            x = cx + 10 if flip < 0.5 else cx - 10 - fw
            fr.alpha_composite(fp, (x, top))
    return fr

def scene_book(t):
    if t < 81.7:
        fr = book_frame(t, open_p=ease((t - 78.2) / 1.6), write_p=1)
        return zoom(fr, 1.0 + 0.1 * (t - 78.2) / 3.5, 540, 1000)
    if t < 83.8:
        fr = book_frame(t, write_p=ease((t - 81.7) / 1.9))
        return zoom(fr, 1.9, 760, 900)
    if t < 86.5:
        fr = book_frame(t); d = ImageDraw.Draw(fr)
        for i, (x, y) in enumerate(G["marks"]):
            a = fade(t, 83.9 + i * 0.04, 0.3)
            fr.alpha_composite(radial(60, 60, 30, 30, 30, 30, (255, 220, 140), 1.5, 0.9 * a), (int(x - 30), int(y - 30)))
        return zoom(fr, 1.35, 540, 1000)
    if t < 89.3:
        fr = book_frame(t, light=0.3)
        return zoom(fr, 1.0 + 0.05 * (t - 86.5), 540, 1000)
    # halaman dibalik cepat
    fl = ((t - 89.3) * 2.6) % 1.0
    fr = book_frame(t, flip=fl)
    return zoom(fr, 1.15, 540, 1000)

def scene_light(t):
    fr = book_frame(t, light=fade(t, 93.5, 3.0))
    beam = radial(W, H, 540, 200, 500, 1300, (235, 240, 255), 1.3, 0.25 * fade(t, 94, 3))
    fr.alpha_composite(beam)
    rb.overlay_dust(fr, t, (240, 235, 220), 0.7, (150, 300, 930, 1500))
    z = 1.3 - 0.3 * ease((t - 93.2) / 12)
    fr = zoom(fr, z, 540, 1000)
    k = fade(t, 107.6, 2.4)
    if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(255 * k))))
    return fr

def zoom(fr, z, cx, cy):
    if abs(z - 1) < 0.002: return fr
    cw, ch = W / z, H / z
    x0 = max(0, min(W - cw, cx - cw / 2)); y0 = max(0, min(H - ch, cy - ch / 2))
    return fr.crop((int(x0), int(y0), int(x0 + cw), int(y0 + ch))).resize((W, H), Image.BILINEAR)

BLACK = None
def scene_black(t): return Image.new("RGBA", (W, H), (0, 0, 0, 255))

def scene_tremble(t):
    fr = scene_mountains(t)
    k = fade(t, 25.8, 3.6) * 0.96
    if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(255 * k))))
    return fr

SCENES = [(0.0, 7.5, scene_city), (7.4, 10.3, scene_clock), (10.2, 15.5, scene_dust), (15.4, 16.3, scene_black),
          (16.3, 31.3, scene_tremble), (31.3, 32.15, scene_black), (32.15, 46.6, scene_rise), (46.4, 56.6, scene_march),
          (56.4, 67.2, scene_woe), (67.0, 78.3, scene_gather), (78.2, 93.3, scene_book), (93.2, 110.6, scene_light)]

def compose(t):
    act = [(a, b, f) for (a, b, f) in SCENES if a <= t < b]
    if not act: return scene_black(t)
    if len(act) == 1: return act[0][2](t)
    (a1, b1, f1), (a2, b2, f2) = act[0], act[1]
    x = ease((t - a2) / max(0.01, b1 - a2))
    return Image.blend(f1(t).convert("RGB"), f2(t).convert("RGB"), x).convert("RGBA")

FLASHES = [(16.3, 0.9, 1.0), (32.15, 1.1, 1.0), (46.6, 0.25, 0.4), (67.0, 0.3, 0.35), (78.2, 0.25, 0.3)]
SHAKES = [(16.3, 2.0, 22), (19.0, 6.4, 9), (32.15, 2.2, 24), (42.2, 3.8, 5), (67.0, 8.0, 7), (101.8, 0.8, 5)]
CUT_FLASH = [81.7, 83.8, 89.3]

def shake(t):
    dx = dy = 0.0
    for (t0, dur, amp) in SHAKES:
        if t0 <= t < t0 + dur:
            k = amp * (1 - (t - t0) / dur) ** 1.3
            dx += k * math.sin(t * 59 + t0); dy += k * math.cos(t * 43 + t0)
    return int(dx), int(dy)

def render(fi):
    t = fi / FPS
    fr = compose(t)
    for (t0, d, s) in FLASHES:
        if t0 <= t < t0 + d:
            fr.alpha_composite(Image.new("RGBA", (W, H), (255, 252, 245, int(255 * s * (1 - (t - t0) / d) ** 1.6))))
    for t0 in CUT_FLASH:
        if t0 <= t < t0 + 0.12: fr.alpha_composite(Image.new("RGBA", (W, H), (255, 255, 255, 70)))
    vl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); vl.putalpha(rb.G["vig_a"].point(lambda a: int(a * 0.8)))
    fr.alpha_composite(vl)
    fr.alpha_composite(rb.G["grain"][fi % 6])
    dx, dy = shake(t)
    if dx or dy:
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 255)); sh.paste(fr, (dx, dy)); fr = sh
    fr.alpha_composite(G["topshade"])
    draw_text(fr, t)
    fr.alpha_composite(G["wm"], (0, 1440))
    g = min(fade(t, 0, 1.2), 1 - fade(t, TOTAL - 0.6, 0.6))
    rgb = fr.convert("RGB")
    if g < 0.999: rgb = Image.eval(rgb, lambda v: int(v * g))
    return rgb

def build():
    rb.build_extras()
    build_city(); build_clock(); build_land(); build_mountains(); build_ground(); build_book()
    G["text"] = build_text()
    G["topshade"] = to_img(np.dstack([np.zeros((H, W, 3)), np.repeat(np.interp(np.arange(H), [0, 200, 760, 900], [150, 120, 40, 0])[:, None], W, 1)])).convert("RGBA")
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

# ---------------- audio: VO + musik & SFX di bawahnya ----------------
def make_audio(path):
    from numpy.fft import rfft, irfft
    sr = 44100; n = int(TOTAL * sr); tt = np.arange(n) / sr
    rng = np.random.default_rng(2)
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
    mus = np.zeros(n); sfx = np.zeros(n)
    def add(bus, sig, t0, g=1.0):
        i0 = int(t0 * sr)
        if i0 >= n: return
        e = min(n, i0 + len(sig)); bus[i0:e] += g * sig[:e - i0]
    # dengung & pad tegang
    dr = (np.sin(2 * np.pi * 55 * tt) + 0.7 * np.sin(2 * np.pi * 58.27 * tt + 1) + 0.5 * np.sin(2 * np.pi * 82.4 * tt) + 0.3 * np.sin(2 * np.pi * 110 * tt))
    dr += 0.5 * filt(rng.standard_normal(n), 30, 180)
    dr *= 1 + 0.2 * np.sin(2 * np.pi * 0.1 * tt)
    mus += 0.13 * dr * env([(0, 0), (2, 0.5), (15, 0.7), (15.4, 0), (16.3, 1.0), (25.8, 0.8), (30, 0.2), (31.3, 0), (32.15, 1.0), (46, 1.0), (56.4, 0.8),
                           (57.0, 0), (59.4, 0), (60.5, 0.7), (67, 1.0), (78, 0.8), (86.4, 0.7), (86.5, 0), (88.5, 0), (89.3, 0.6), (93, 0.5), (110.6, 0)])
    pad = filt(sum(np.sin(2 * np.pi * f * tt + i) for i, f in enumerate([110.0, 130.8, 164.8, 220.0, 261.6])), None, 900)
    mus += 0.035 * pad * env([(0, 0), (93, 0), (96, 0.8), (108, 0.8), (110.6, 0)])
    strings = filt(sum(np.sin(2 * np.pi * f * tt * (1 + 0.003 * np.sin(2 * np.pi * 5 * tt))) for f in (220, 233.1, 329.6, 349.2)), None, 2500)
    mus += 0.02 * strings * env([(0, 0), (32, 0), (36, 0.6), (46, 0.9), (56.4, 0.9), (57, 0), (60, 0), (64, 0.5), (78, 0.8), (86.4, 0.8), (86.5, 0), (89.3, 0.6), (93, 0.3), (100, 0), (110.6, 0)])
    # denyut ritmis (makin cepat)
    for tb in list(np.arange(46.7, 56.3, 0.62)) + list(np.arange(67.2, 75.0, 0.55)) + list(np.arange(42.2, 46.0, 0.4)):
        lt = seg(0.35); add(mus, np.sin(2 * np.pi * (60 + 40 * np.exp(-lt / 0.02)) * lt) * np.exp(-lt / 0.08), tb, 0.35)
    # kota: dengung listrik + lalu lintas, padam bertahap
    city = 0.4 * np.sin(2 * np.pi * 60 * tt) + 0.2 * np.sin(2 * np.pi * 120 * tt) + norm(filt(rng.standard_normal(n), 100, 1500))
    sfx += 0.07 * city * env([(0, 0), (1, 1), (5.4, 0.8), (7.3, 0.0), (110.6, 0)])
    for t0 in (2.6, 3.8, 4.9, 5.6, 6.4, 7.0):
        lt = seg(0.8); s = np.sin(2 * np.pi * (120 * np.exp(-lt * 3)) * lt) * np.exp(-lt * 3) + 0.5 * rng.standard_normal(len(lt)) * np.exp(-lt / 0.01)
        add(sfx, s, t0, 0.12)
    # jam berdetak lalu berhenti
    for k in range(3):
        lt = seg(0.04); add(sfx, filt(rng.standard_normal(len(lt)), 2000, 7000) * np.exp(-lt / 0.005), 7.5 + k, 0.35)
    lt = seg(1.2); add(sfx, np.sin(2 * np.pi * 48 * lt) * np.exp(-lt * 3), 9.75, 0.3)
    # angin & debu
    wind = norm(filt(rng.standard_normal(n), 150, 2500))
    sfx += 0.2 * wind * env([(0, 0), (10, 0), (10.6, 1), (14.5, 0.8), (15.4, 0), (46.4, 0), (47, 0.6), (56.3, 0.6), (57, 0), (67, 0.3), (78, 0.4), (78.3, 0), (110.6, 0)])
    # dentuman besar (tiupan) - simbolis, bukan melodi sangkakala
    def blast(t0, g):
        lt = seg(7.0)
        s = np.sin(2 * np.pi * (38 * lt - 2 * lt ** 2)) * np.exp(-lt * 0.6) + 0.6 * np.tanh(3 * np.sin(2 * np.pi * 55 * lt)) * np.exp(-lt * 0.9)
        s += 0.6 * filt(rng.standard_normal(len(lt)), 40, 900) * np.exp(-lt * 1.0)
        add(sfx, norm(s) * np.clip(lt / 0.01, 0, 1), t0, g)
    def riser(t_end, d, g):
        lt = seg(d); s = filt(rng.standard_normal(len(lt)), 300, 7000) * (lt / d) ** 3 + 0.5 * np.sin(2 * np.pi * (150 * lt + 250 * lt ** 2 / d)) * (lt / d) ** 2
        add(sfx, norm(s), t_end - d, g)
    def boom(t0, g):
        lt = seg(3.0); s = np.sin(2 * np.pi * (46 * lt - 4 * lt ** 2)) * np.exp(-lt * 1.3) + 0.4 * filt(rng.standard_normal(len(lt)), 20, 150) * np.exp(-lt * 3)
        add(sfx, norm(s) * np.clip(lt / 0.005, 0, 1), t0, g)
    riser(16.3, 1.0, 0.25); blast(16.3, 0.9)
    riser(32.15, 0.9, 0.25); blast(32.15, 1.0)
    for t0, g in [(46.6, 0.4), (67.0, 0.45), (75.2, 0.4), (78.2, 0.35), (94.4, 0.25), (101.8, 0.4), (107.8, 0.3)]: boom(t0, g)
    riser(46.6, 1.5, 0.12); riser(67.0, 1.5, 0.12); riser(101.8, 2.5, 0.12)
    # gempa
    quake = norm(filt(rng.standard_normal(n), 20, 120)) + 0.3 * norm(filt(rng.standard_normal(n), 300, 2000)) * (rng.uniform(0, 1, n) > 0.995)
    sfx += 0.4 * quake * env([(0, 0), (18.8, 0), (19.5, 1), (25, 0.8), (29, 0.1), (30, 0), (67, 0), (68, 0.7), (74, 0.6), (76, 0), (110.6, 0)])
    # retakan tanah
    for t0 in rng.uniform(32.3, 35.5, 18):
        lt = seg(0.12); add(sfx, filt(rng.standard_normal(len(lt)), 600, 6000) * np.exp(-lt / 0.02), t0, 0.15)
    # langkah bergegas (tekstur kerumunan)
    steps = np.zeros(n)
    for t0 in rng.uniform(46.7, 56.3, 380):
        lt = seg(0.12); add(steps, filt(rng.standard_normal(len(lt) + 400), 80, 1200)[:len(lt)] * np.exp(-lt / 0.025), t0, 0.4)
    sfx += 0.35 * steps
    # halaman buku
    def page(t0, g, d=0.5):
        lt = seg(d); s = filt(rng.standard_normal(len(lt)), 1500, 9000) * np.sin(np.pi * lt / d) ** 2 * (0.6 + 0.4 * (rng.uniform(0, 1, len(lt)) > 0.5))
        add(sfx, norm(s), t0, g)
    page(78.3, 0.25, 1.2); page(81.7, 0.18); page(83.8, 0.18)
    for k in range(9): page(89.3 + k * 0.385, 0.16, 0.3)
    # lonceng tipis tanda halus (kecil-kecil tercatat)
    for k in range(10):
        lt = seg(1.0); add(sfx, np.sin(2 * np.pi * (1800 + 120 * k) * lt) * np.exp(-lt * 5), 83.9 + k * 0.16, 0.025)
    # duck musik di bawah narator
    vo_env = np.sqrt(np.maximum(filt(vo ** 2, None, 6), 0))
    vo_env = np.clip(vo_env / (vo_env.max() + 1e-9) * 6, 0, 1)
    duck = 1 - 0.6 * vo_env
    bed = (mus + sfx) * duck
    bed = np.tanh(bed * 1.2)
    bed = np.nan_to_num(bed)
    out = vo * 1.0 + bed * 0.3
    out *= env([(0, 0), (0.3, 1), (109.6, 1), (110.6, 0)])
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
        os.system(f"ffmpeg -v error -y -f concat -safe 0 -i {outdir}/list.txt -i {outdir}/audio.wav -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart {outdir}/ep2.mp4")
        print("done")
