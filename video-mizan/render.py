"""Episode 4: Mizan - Hari Perhitungan (97,56 detik), tersinkron dengan voice-over.
Simbol: zarah cahaya, garis keseimbangan, berkas cahaya. Tanpa bentuk Mizan literal, tanpa sosok gaib."""
import math, os, sys, wave, subprocess
import numpy as np
from multiprocessing import Pool
from PIL import Image, ImageDraw, ImageFilter, ImageOps

S = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(S), "ep3"))
import render_ep3 as e3
e2 = e3.e2; rb = e2.rb
from render_barzakh import (W, H, FPS, F, ease, fade, lerp, lerpc, vgrad, to_img, radial, person, GOLD, WHITE, MONT)

UP = "/root/.claude/uploads/06fbf1ed-987f-5f23-8ee6-ea05fd4d4a70"
VO = os.path.join(UP, [p for p in os.listdir(UP) if p.startswith("693f7f68")][0])
TOTAL = 97.56
NFRAMES = int(TOTAL * FPS)
G = e2.G

BLOCKS = [
    (9.4, 16.5, [("id", "Mizan — timbangan pada Hari Perhitungan.", 0)]),
    (17.7, 28.1, [("ar", "وَنَضَعُ الْمَوَازِينَ الْقِسْطَ", 0), ("tr", "“Kami tegakkan timbangan yang adil.”", 1.6), ("src", "SURAH AL-ANBIYA AYAT 47", 3.0)]),
    (36.8, 40.7, [("tr", "Tiada amal yang terlepas daripada pengetahuan Allah.", 0), ("src", "SURAH AL-ANBIYA AYAT 47", 1.6)]),
    (41.6, 50.0, [("ar", "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ", 0), ("ar", "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ", 4.3),
                  ("tr", "“Siapa berbuat kebaikan atau keburukan seberat zarah, dia akan melihatnya.”", 5.8), ("src", "SURAH AZ-ZALZALAH AYAT 7–8", 6.8)]),
    (51.0, 63.2, [("ar", "وَالْوَزْنُ يَوْمَئِذٍ الْحَقُّ", 0), ("id", "Pada hari itu, timbangan adalah benar.", 1.4), ("src", "SURAH AL-A’RAF AYAT 8", 2.6)]),
    (64.3, 73.3, [("trg", "Allah tidak menzalimi walau seberat zarah; kebaikan dilipatgandakan dengan karunia-Nya.", 1.0), ("src", "SURAH AN-NISA AYAT 40", 3.6)]),
    (78.0, 80.1, [("id", "Jangan remehkan kebaikan kecil.", 0)]),
    (80.3, 82.2, [("id", "Jangan membenarkan kesalahan.", 0)]),
    (83.2, 89.7, [("ar", "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", 3.6), ("id", "Jangan berputus asa daripada rahmat Allah.", 4.4), ("src", "SURAH AZ-ZUMAR AYAT 53", 5.2)]),
    (91.0, 97.2, [("trg", "Apa yang akan ditimbang daripada amal kita?", 4.9)]),
]
e2.BLOCKS[:] = BLOCKS

# ---------------- elemen ----------------
def build4():
    rng = np.random.default_rng(44)
    # dataran kosong (arang, biru kelabu)
    sky = to_img(vgrad(2 * H, [(0, (4, 5, 9)), (0.45, (14, 17, 26)), (0.6, (34, 38, 52)), (0.64, (64, 60, 66)), (0.66, (24, 24, 30)), (1, (8, 8, 11))])).convert("RGBA")
    sky.alpha_composite(rb.stars_layer(int(2 * H * 0.55), 380, 7)[0])
    d = ImageDraw.Draw(sky)
    hy = int(2 * H * 0.645)
    for _ in range(400):
        x, y = rng.uniform(0, W), rng.uniform(hy + 10, 2 * H)
        s = 1 + (y - hy) / 300
        d.ellipse((x - 2 * s, y - s, x + 2 * s, y + s), fill=(40, 40, 46, int(rng.uniform(80, 180))))
    G["plain"] = sky; G["plain_hy"] = hy
    G["dot"] = {}
    # tanah untuk tracking rendah (lebar 3x)
    g = to_img(vgrad(H, [(0, (8, 9, 14)), (0.55, (24, 26, 34)), (0.6, (40, 38, 42)), (1, (12, 12, 14))], 3 * W)).convert("RGBA")
    gd = ImageDraw.Draw(g)
    for _ in range(1600):
        x, y = rng.uniform(0, 3 * W), rng.uniform(H * 0.6, H)
        s = 1 + (y - H * 0.6) / 120
        gd.ellipse((x - 2 * s, y - s, x + 2 * s, y + s), fill=(54, 52, 56, int(rng.uniform(60, 200))))
    G["ground"] = g
    G["streaks4"] = [(rng.uniform(0, W), rng.uniform(300, 1700), rng.uniform(500, 1300), rng.uniform(1, 3), rng.uniform(20, 90)) for _ in range(200)]
    G["motes"] = [(rng.uniform(0, W), rng.uniform(300, 1600), rng.uniform(0, 6.28), rng.uniform(4, 14)) for _ in range(160)]
    G["corr"] = to_img(vgrad(H, [(0, (6, 6, 9)), (0.5, (14, 14, 18)), (1, (6, 6, 8))])).convert("RGBA")
    G["room"] = to_img(vgrad(H, [(0, (12, 13, 18)), (0.7, (22, 22, 28)), (0.72, (34, 30, 30)), (1, (16, 14, 14))])).convert("RGBA")

def glow(fr, x, y, r, col, s=1.0):
    key = (int(r), col)
    if key not in G["dot"]:
        G["dot"][key] = radial(int(4 * r), int(4 * r), 2 * r, 2 * r, 2 * r, 2 * r, col, 1.8, 1.0)
    im = G["dot"][key]
    if s < 0.999: im = im.copy(); im.putalpha(im.getchannel("A").point(lambda v: int(v * s)))
    fr.alpha_composite(im, (int(x - 2 * r), int(y - 2 * r)))

def zoom(fr, z, cx, cy): return e2.zoom(fr, z, cx, cy)

# ---------------- adegan ----------------
def s_intro(t):
    if t < 8.3:   # makro halaman -> fokus ke setitik cahaya -> masuk ke dalamnya
        fr = e2.book_frame(t, light=0.4)
        focus = ease((t - 2.2) / 2.5)
        if focus < 1:
            b = fr.filter(ImageFilter.GaussianBlur(int(10 * (1 - focus)) + 0))
            fr = Image.blend(fr, b, 1 - focus) if focus > 0 else b
        glow(fr, 700, 980, 40, (255, 220, 150), fade(t, 2.0, 2.0))
        z = 3.0 * (1 + 4 * ease((t - 5.9) / 2.4) ** 2)
        fr = zoom(fr, z, 700, 980)
        k = fade(t, 7.3, 1.0)
        if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (255, 236, 200, int(255 * k))))
        return fr
    p = ease((t - 8.3) / 4.5)            # crane-up ke dataran kosong
    y0 = int(lerp(G["plain_hy"] - 200, G["plain_hy"] - 1250, p))
    fr = G["plain"].crop((0, y0, W, y0 + H))
    off = int((t * 30) % W); fog = rb.G["fog"].crop((off, 0, off + W, 700))
    fl = Image.new("RGBA", (W, 700), (110, 115, 140, 0)); fl.putalpha(fog.point(lambda v: int(v * 0.45)))
    fr.alpha_composite(fl, (0, G["plain_hy"] - y0 - 350))
    fr.alpha_composite(Image.new("RGBA", (W, H), (255, 236, 200, int(255 * (1 - fade(t, 8.3, 1.2))))))
    return zoom(fr, 1.0 + 0.08 * ease((t - 12.5) / 4.2), 540, 1000)

def s_balance(t):
    y0 = G["plain_hy"] - 1300
    fr = G["plain"].crop((0, y0, W, y0 + H))
    hy = G["plain_hy"] - y0
    orbit = math.sin((t - 16.7) / 11.6 * math.pi) * 120          # setengah orbit: paralaks
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0)); sd = ImageDraw.Draw(sh)
    rng = np.random.default_rng(2)
    for _ in range(90):
        x, y = rng.uniform(-200, W + 200), rng.uniform(hy + 40, H)
        par = (y - hy) / (H - hy)
        xx = x + orbit * par * 2.0; s = 2 + par * 8
        sd.ellipse((xx - s, y - s * 0.5, xx + s, y + s * 0.5), fill=(60, 58, 62, 160))
    fr.alpha_composite(sh)
    settle = ease((t - 24.5) / 2.0)
    ang = math.radians(7 * math.sin((t - 16.7) * 1.3) * (1 - settle))
    cx, cy = 540 + orbit * 0.3, hy - 60
    L = 470
    x1, y1 = cx - L * math.cos(ang), cy - L * math.sin(ang); x2, y2 = cx + L * math.cos(ang), cy + L * math.sin(ang)
    a = fade(t, 17.0, 1.5)
    ln = Image.new("RGBA", (W, H), (0, 0, 0, 0)); ld = ImageDraw.Draw(ln)
    ld.line((x1, y1, x2, y2), fill=(240, 205, 130, int(230 * a)), width=4)
    fr.alpha_composite(ln.filter(ImageFilter.GaussianBlur(6))); fr.alpha_composite(ln)
    glow(fr, cx, cy, 50, (255, 220, 150), a)
    # cahaya & bayang bergerak berlawanan, lalu berhenti seimbang
    side = 260 * math.sin((t - 16.7) * 1.3) * (1 - settle)
    glow(fr, cx + side, cy - 20, 160, (255, 210, 140), 0.45 * a)
    glow(fr, cx - side, cy + 40, 160, (60, 70, 100), 0.6 * a)
    return zoom(fr, 1.0 + 0.05 * ease((t - 16.7) / 11.6), 540, hy)

def s_dust(t):
    if t < 32.78:   # tracking rendah menyusuri tanah, debu melintas lensa
        off = int((t - 28.3) * 260) % (2 * W)
        fr = G["ground"].crop((off, 0, off + W, H))
        L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
        for (x, y, sp, r, ln) in G["streaks4"]:
            xx = (x + t * sp) % (W + 200) - 100
            d.line((xx, y, xx - ln, y + 4), fill=(200, 196, 190, 110), width=int(r))
        fr.alpha_composite(L)
        return zoom(fr, 1.15, 540, 1250)
    if t < 36.79:   # satu zarah berkilau (close-up ekstrem)
        fr = Image.new("RGBA", (W, H), (8, 9, 13, 255))
        glow(fr, 540, 1000, 220, (255, 214, 150), 0.55)
        glow(fr, 540, 1000, 60, (255, 240, 210), 1.0)
        r = 10 + 2 * math.sin(t * 6)
        ImageDraw.Draw(fr).ellipse((540 - r, 1000 - r, 540 + r, 1000 + r), fill=(255, 250, 235, 255))
        for k in range(6):
            a = t * 0.6 + k * math.pi / 3
            ImageDraw.Draw(fr).line((540, 1000, 540 + 220 * math.cos(a), 1000 + 220 * math.sin(a)), fill=(255, 230, 180, 40), width=2)
        return fr
    # speed-ramp keluar ke panorama
    p = ease((t - 36.79) / 1.2)
    y0 = G["plain_hy"] - 1300
    fr = G["plain"].crop((0, y0, W, y0 + H))
    hy = G["plain_hy"] - y0
    glow(fr, 540, hy - 30, 30, (255, 230, 180), 1.0)
    return zoom(fr, lerp(8.0, 1.0, p), 540, hy - 30)

def s_atoms(t):
    y0 = G["plain_hy"] - 1300
    fr = G["plain"].crop((0, y0, W, y0 + H)); hy = G["plain_hy"] - y0
    fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, 90)))
    orb = (t - 40.9) * 0.55 * (1 - ease((t - 44.5) / 1.5))
    for k in range(2):     # dua zarah bercahaya
        a = orb + k * math.pi
        x, y = 540 + 170 * math.cos(a), 1150 + 40 * math.sin(a)
        glow(fr, x, y, 70, (255, 214, 150), 0.8); glow(fr, x, y, 16, (255, 245, 220), 1.0)
    d = ImageDraw.Draw(fr)
    for k in range(2):     # dua bayang jatuh ke tanah
        x = 540 + (k - 0.5) * 520 * math.cos(orb)
        fall = ease((t - 42.0 - k * 0.4) / 1.6)
        y = lerp(980, hy + 30, fall)
        glow(fr, x, y, 60, (0, 0, 0), 0.9)
        if fall >= 1: d.ellipse((x - 70, hy + 20, x + 70, hy + 44), fill=(0, 0, 0, 160))
    return fr

def s_weigh(t):
    if t < 51.2:    # whip-pan
        p = (t - 50.1) / 1.1
        y0 = G["plain_hy"] - 1300
        fr = G["plain"].crop((0, y0, W, y0 + H))
        off = int(ease(p) * 900)
        fr2 = Image.new("RGBA", (W, H), (0, 0, 0, 255)); fr2.paste(fr, (-off, 0)); fr2.paste(fr, (W - off, 0))
        bl = fr2.filter(ImageFilter.BoxBlur(int(40 * math.sin(math.pi * min(1, p)))))
        return bl
    fr = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    fr.alpha_composite(to_img(vgrad(H, [(0, (6, 7, 11)), (1, (16, 18, 24))])).convert("RGBA"))
    heavy = ease((t - 54.5) / 2.5); light = ease((t - 59.1) / 2.5)
    # berkas berat (emas, tebal) turun
    yb = lerp(200, 700, heavy)
    for w_, a_ in ((220, 0.25), (110, 0.5), (40, 0.9)):
        col = Image.new("RGBA", (w_, H), (255, 206, 130, 0)); m = np.zeros((H, w_), np.float32)
        xs = np.linspace(-1, 1, w_); prof = np.exp(-(xs / 0.45) ** 2)
        ys = np.arange(H)[:, None]; m = prof[None, :] * np.clip((ys - (yb - 600)) / 600, 0, 1) * np.clip((yb + 900 - ys) / 300, 0, 1)
        col.putalpha(Image.fromarray((m * 255 * a_).astype(np.uint8), "L"))
        fr.alpha_composite(col, (int(340 - w_ / 2), 0))
    # berkas ringan (biru kelabu, tipis) naik
    yl = lerp(1500, 600, light)
    for w_, a_ in ((80, 0.2), (24, 0.6)):
        col = Image.new("RGBA", (w_, H), (140, 160, 200, 0))
        xs = np.linspace(-1, 1, w_); prof = np.exp(-(xs / 0.45) ** 2)
        ys = np.arange(H)[:, None]; m = prof[None, :] * np.clip((ys - yl) / 400, 0, 1) * np.clip((yl + 700 - ys) / 300, 0, 1)
        col.putalpha(Image.fromarray((m * 255 * a_).astype(np.uint8), "L"))
        fr.alpha_composite(col, (int(740 - w_ / 2), 0))
    cy = 1000 + 120 * heavy - 200 * light     # kamera turun lalu berlawanan
    return zoom(fr, 1.15, 540, cy)

def s_grace(t):
    fr = to_img(vgrad(H, [(0, (14, 12, 12)), (0.5, (40, 32, 24)), (1, (12, 10, 10))])).convert("RGBA")
    fr.alpha_composite(radial(W, H, 540, 1000, 700, 900, (255, 214, 150), 1.3, 0.45 * fade(t, 63.6, 3)))
    n = int(20 + 140 * ease((t - 64.5) / 7.5))
    for i, (x, y, ph, r) in enumerate(G["motes"][:n]):
        yy = y - (t - 63.4) * 12 + 10 * math.sin(t + ph)
        glow(fr, x, yy, r, (255, 226, 170), 0.35 + 0.3 * math.sin(t * 1.5 + ph))
    return zoom(fr, 1.0 + 0.06 * ease((t - 63.4) / 10), 540, 1000)

def hand_shape(d, x, y, s, col, open_=1.0):
    d.ellipse((x - 70 * s, y - 50 * s, x + 70 * s, y + 60 * s), fill=col)
    for k in range(4):
        fx = x - 60 * s + k * 38 * s
        d.line((fx, y - 30 * s, fx - 30 * s * open_, y - 30 * s - 90 * s), fill=col, width=int(30 * s))
        d.ellipse((fx - 30 * s * open_ - 15 * s, y - 120 * s - 15 * s, fx - 30 * s * open_ + 15 * s, y - 120 * s + 15 * s), fill=col)
    d.line((x + 60 * s, y, x + 110 * s, y - 70 * s), fill=col, width=int(34 * s))

def s_kind(t):
    fr = G["room"].copy(); d = ImageDraw.Draw(fr)
    col = (5, 5, 7, 255)
    if t < 78.03:   # tangan membantu mengangkat barang yang jatuh
        floor = int(H * 0.72)
        d.rectangle((0, floor, W, H), fill=(30, 26, 26, 255))
        glow(fr, 540, floor - 120, 340, (255, 210, 150), 0.35)
        down = ease((t - 73.6) / 2.0); up = ease((t - 76.0) / 1.8)
        by = floor - 50 - 300 * up
        d = ImageDraw.Draw(fr)
        if up < 0.02:
            sl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); ImageDraw.Draw(sl).ellipse((380, floor - 14, 700, floor + 16), fill=(0, 0, 0, 140))
            fr.alpha_composite(sl); d = ImageDraw.Draw(fr)
        d.rounded_rectangle((390, by - 40, 690, by + 50), radius=8, fill=(150, 98, 58, 255))
        d.rectangle((400, by + 30, 680, by + 46), fill=(236, 226, 206, 255))
        d.line((400, by - 10, 680, by - 10), fill=(196, 150, 80, 255), width=4)
        hx = 640; hy_ = lerp(-250, by - 90, down)
        d.polygon([(W + 120, -300), (W + 240, 60), (hx + 90, hy_ + 30), (hx + 10, hy_ - 60)], fill=col)
        d.ellipse((hx - 90, hy_ - 70, hx + 90, hy_ + 60), fill=col)
        for k in range(4): d.ellipse((hx - 110 + k * 46, hy_ + 30, hx - 60 + k * 46, hy_ + 90), fill=col)
        d.line((hx - 80, hy_ + 10, hx - 120, hy_ + 80), fill=col, width=38)
        return fr
    # ponsel: pesan yang menyakitkan dihapus lalu diperbaiki
    fr.alpha_composite(radial(W, H, 540, 1050, 420, 520, (120, 160, 220), 1.6, 0.35))
    d = ImageDraw.Draw(fr)
    d.rounded_rectangle((300, 620, 780, 1500), radius=48, fill=(14, 14, 18, 255), outline=(60, 60, 70, 255), width=4)
    d.rounded_rectangle((322, 660, 758, 1460), radius=30, fill=(28, 32, 42, 255))
    d.rounded_rectangle((340, 700, 640, 780), radius=24, fill=(52, 56, 70, 255))
    for k in range(2): d.line((365, 725 + k * 26, 600 - k * 80, 725 + k * 26), fill=(150, 156, 170, 255), width=8)
    if t < 80.25:
        p = ease((t - 78.1) / 1.4); w_ = 330 * p
        d.rounded_rectangle((740 - w_ - 20, 1300, 740, 1380), radius=24, fill=(150, 46, 46, 255))
        for k in range(2): d.line((740 - w_, 1325 + k * 26, 740 - w_ + max(0, w_ - 40 - k * 60), 1325 + k * 26), fill=(240, 200, 200, 255), width=8)
    else:
        er = ease((t - 80.3) / 0.8); w_ = 330 * (1 - er)
        if w_ > 10:
            d.rounded_rectangle((740 - w_ - 20, 1300, 740, 1380), radius=24, fill=(110, 40, 40, 255))
        nw = 300 * ease((t - 81.2) / 0.9)
        if nw > 10:
            d.rounded_rectangle((740 - nw - 20, 1300, 740, 1380), radius=24, fill=(196, 160, 84, 255))
            d.line((740 - nw, 1340, 740 - nw + max(0, nw - 60), 1340), fill=(40, 30, 14, 255), width=8)
    return fr

def s_walk(t):
    fr = G["corr"].copy(); d = ImageDraw.Draw(fr)
    p = ease((t - 82.3) / 7.5)
    vx, vy = 540, 980
    for k in range(-6, 7):   # garis perspektif koridor
        d.line((vx + k * 20, vy, vx + k * 260, H), fill=(30, 30, 36, 255), width=2)
    for k in range(10):
        yy = vy + (k / 10) ** 2 * (H - vy)
        d.line((0, yy, W, yy), fill=(22, 22, 26, 255), width=1)
    light = 0.3 + 0.7 * p
    fr.alpha_composite(radial(W, H, vx, vy - 60, 260 + 300 * p, 420 + 300 * p, (255, 226, 180), 1.4, light))
    d = ImageDraw.Draw(fr)
    d.rectangle((vx - 70 - 60 * p, vy - 260 - 80 * p, vx + 70 + 60 * p, vy + 20), fill=(255, 240, 210, int(200 * light)))
    hh = lerp(620, 420, p); yf = lerp(1700, 1460, p)
    person(d, 540 + 30 * math.sin(t * 0.5), yf, hh, t * 4.2, "walk", 1, (4, 4, 6))
    return zoom(fr, 1.0 + 0.12 * ease((t - 86.8) / 3.0), 540, 1100)

def s_end(t):
    fr = to_img(vgrad(H, [(0, (8, 8, 11)), (1, (18, 16, 18))])).convert("RGBA")
    fr.alpha_composite(radial(W, H, 540, 1200, 500, 500, (255, 214, 150), 1.6, 0.3))
    d = ImageDraw.Draw(fr); col = (5, 5, 7, 255)
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); ld = ImageDraw.Draw(L)
    for sx in (-1, 1):   # dua tangan terbuka dan kosong
        hl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); hd = ImageDraw.Draw(hl)
        hand_shape(hd, 640, 1300, 1.6, col, 0.6)
        hd.polygon([(600, 1340), (720, 1340), (820, H + 100), (560, H + 100)], fill=col)
        if sx < 0: hl = ImageOps.mirror(hl)
        L.alpha_composite(hl, (sx * 70, 0))
    fr.alpha_composite(L)
    px = lerp(-60, W + 60, ease((t - 92.0) / 4.0))   # satu zarah melintas
    glow(fr, px, 1050 - 80 * math.sin((t - 92) * 0.8), 40, (255, 230, 180), 0.9)
    fr = zoom(fr, lerp(1.5, 1.0, ease((t - 89.8) / 7.0)), 540, 1250)
    if t >= 97.25: fr = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    return fr

SCENES = [(0.0, 16.7, s_intro), (16.6, 28.4, s_balance), (28.3, 40.95, s_dust), (40.9, 50.1, s_atoms), (50.1, 63.5, s_weigh),
          (63.4, 73.5, s_grace), (73.5, 82.3, s_kind), (82.3, 89.85, s_walk), (89.8, TOTAL + 0.1, s_end)]
HARD = {28.3, 40.9, 50.1, 73.5}

def compose(t):
    act = [(a, b, f) for (a, b, f) in SCENES if a <= t < b]
    if not act: return Image.new("RGBA", (W, H), (0, 0, 0, 255))
    if len(act) == 1 or act[1][0] in HARD: return act[-1][2](t)
    (a1, b1, f1), (a2, b2, f2) = act[0], act[1]
    x = ease((t - a2) / max(0.01, b1 - a2))
    return Image.blend(f1(t).convert("RGB"), f2(t).convert("RGB"), x).convert("RGBA")

def render(fi):
    t = fi / FPS
    fr = compose(t)
    vl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); vl.putalpha(rb.G["vig_a"].point(lambda a: int(a * 0.75)))
    fr.alpha_composite(vl)
    fr.alpha_composite(rb.G["grain"][fi % 6])
    fr.alpha_composite(G["topshade"])
    e2.draw_text(fr, t)
    if t < 97.25: fr.alpha_composite(G["wm"], (0, 1640))
    g = min(fade(t, 0, 0.8), 1.0)
    rgb = fr.convert("RGB")
    if g < 0.999: rgb = Image.eval(rgb, lambda v: int(v * g))
    return rgb

def build():
    e3.build(); build4()
    G["text"] = e2.build_text()

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
    rng = np.random.default_rng(9)
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
    # halaman perlahan hilang
    lt = seg(2.5); add(norm(filt(rng.standard_normal(len(lt)), 1500, 9000)) * np.sin(np.pi * lt / 2.5) ** 2, 0.2, 0.18)
    # dengung rendah lembut (tegang -> hangat), tidak terus-menerus
    low = filt(np.sin(2 * np.pi * 55 * tt) + 0.6 * np.sin(2 * np.pi * 82.4 * tt) + 0.4 * np.sin(2 * np.pi * 110 * tt), None, 400)
    bed += 0.07 * low * env([(0, 0), (6, 0.4), (16.7, 0.6), (28.3, 0.6), (32, 0.3), (40.9, 0.7), (63.4, 0.8), (66, 0.0), (89.8, 0.0), (91, 0.3), (96.5, 0.2), (97.25, 0), (97.56, 0)])
    warm = filt(sum(np.sin(2 * np.pi * f * tt + i) for i, f in enumerate([220.0, 277.2, 329.6, 440.0])), None, 1200)
    bed += 0.035 * warm * env([(0, 0), (63.4, 0), (66, 0.9), (73.5, 0.8), (74, 0.5), (82.3, 0.5), (86.8, 0.9), (89.8, 0.7), (96.8, 0.3), (97.25, 0), (97.56, 0)])
    # denyut halus
    for tb in list(np.arange(12.5, 16.7, 1.05)) + list(np.arange(41.6, 50.1, 0.9)) + list(np.arange(51.0, 63.4, 0.8)):
        lt = seg(0.35); add(np.sin(2 * np.pi * (58 + 30 * np.exp(-lt / 0.02)) * lt) * np.exp(-lt / 0.09), tb, 0.3)
    # angin
    wind = norm(filt(rng.standard_normal(n), 200, 2500))
    bed += 0.12 * wind * env([(0, 0), (8.3, 0), (9.5, 0.6), (16.7, 0.4), (28.3, 0.5), (29.2, 1.0), (32.7, 1.0), (32.8, 0.1), (36.8, 0.1), (38, 0.5), (40.9, 0.2), (50, 0.1), (63.4, 0), (97.56, 0)])
    # kilau zarah & masuk ke cahaya
    def shimmer(t0, g, base=1046.5):
        for i, f in enumerate([base, base * 1.26, base * 1.5]):
            lt = seg(2.5); add(np.sin(2 * np.pi * f * lt) * np.exp(-lt * 1.6) * np.clip(lt / 0.01, 0, 1), t0 + i * 0.06, g)
    for t0 in (2.2, 32.8, 41.6, 45.9, 64.5, 92.0): shimmer(t0, 0.03)
    def riser(t_end, d, g):
        lt = seg(d); s = filt(rng.standard_normal(len(lt)), 300, 7000) * (lt / d) ** 3 + 0.5 * np.sin(2 * np.pi * (150 * lt + 250 * lt ** 2 / d)) * (lt / d) ** 2
        add(norm(s), t_end - d, g)
    def whoosh(t0, d, g):
        lt = seg(d); add(norm(filt(rng.standard_normal(len(lt)), 300, 6000)) * np.sin(np.pi * lt / d) ** 2, t0, g)
    def hit(t0, g):
        lt = seg(2.0); s = np.sin(2 * np.pi * (52 - 6 * lt) * lt) * np.exp(-lt * 2.2) + 0.3 * filt(rng.standard_normal(len(lt)), 30, 200) * np.exp(-lt * 3)
        add(norm(s) * np.clip(lt / 0.004, 0, 1), t0, g)
    riser(8.3, 2.0, 0.12); hit(8.3, 0.25)
    whoosh(36.8, 1.2, 0.14); whoosh(50.1, 1.1, 0.2); hit(54.6, 0.3); hit(59.2, 0.22)
    whoosh(40.9, 0.6, 0.1); whoosh(73.5, 0.6, 0.1)
    # bunyi kecil kehidupan sehari-hari
    lt = seg(0.4); add(filt(rng.standard_normal(len(lt)), 100, 800) * np.exp(-lt / 0.05), 76.0, 0.15)  # barang diangkat
    for k in range(10):
        lt = seg(0.05); add(filt(rng.standard_normal(len(lt)), 2000, 6000) * np.exp(-lt / 0.01), 78.2 + k * 0.14, 0.05)  # mengetik
    lt = seg(0.8); add(norm(filt(rng.standard_normal(len(lt)), 800, 4000)) * np.exp(-lt * 5), 80.3, 0.06)  # hapus
    for k in range(int((89.7 - 82.6) / 0.62)):
        lt = seg(0.18); add(norm(filt(rng.standard_normal(len(lt)), 80, 900) * np.exp(-lt / 0.035)), 82.6 + k * 0.62, 0.09)  # langkah
    # duck di bawah narator
    vo_env = np.sqrt(np.maximum(filt(vo ** 2, None, 6), 0))
    vo_env = np.clip(vo_env / (vo_env.max() + 1e-9) * 6, 0, 1)
    bed = np.nan_to_num(np.tanh(bed * (1 - 0.6 * vo_env) * 1.2))
    out = vo + bed * 0.3
    out *= env([(0, 0), (0.2, 1), (97.0, 1), (97.56, 0)])
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
        os.system(f"ffmpeg -v error -y -f concat -safe 0 -i {outdir}/list.txt -i {outdir}/audio.wav -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart {outdir}/ep4.mp4")
        print("done")
