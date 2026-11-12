"""07 / Episode 5: Titian Sirat - Perjalanan di Atas Jahannam (106,08 dtk + 0,7 dtk hening).
Semua laluan, kabus, pengait bayangan dan cahaya = simbol sinematik. Tanpa nabi/malaikat, tanpa tubuh jatuh."""
import math, os, sys, wave, subprocess
import numpy as np
from multiprocessing import Pool
from PIL import Image, ImageDraw, ImageFilter, ImageOps

S = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(S), "ep4"))
import render_ep4 as e4
e2 = e4.e2; rb = e4.rb
from render_barzakh import (W, H, FPS, F, ease, fade, lerp, lerpc, vgrad, to_img, radial, person, GOLD, WHITE, MONT, LORA_R, LORA_I)

UP = "/root/.claude/uploads/06fbf1ed-987f-5f23-8ee6-ea05fd4d4a70"
VO = os.path.join(UP, [p for p in os.listdir(UP) if p.startswith("1b66721d")][0])
VO_LEN = 106.08
TOTAL = 106.8
NFRAMES = int(TOTAL * FPS)
G = e2.G
glow = e4.glow
LORA_B = "fontsource-lora-5.3.0/package/files/lora-latin-600-normal.woff"
MONO = "fontsource-space-mono-5.3.0/package/files/space-mono-latin-400-normal.woff"

BLOCKS = [
    (10.8, 15.2, [("ar", "وَإِن مِّنكُمْ إِلَّا وَارِدُهَا", 0), ("tr", "“Tidak seorang pun daripada kamu melainkan akan mendatanginya.”", 0.9), ("src", "SURAH MARYAM AYAT 71", 2.0)]),
    (16.1, 28.0, [("ar", "ثُمَّ نُنَجِّي الَّذِينَ اتَّقَوا", 0), ("tr", "“Kemudian Kami selamatkan orang-orang yang bertakwa.”", 1.0), ("src", "SURAH MARYAM AYAT 72", 2.2)]),
    (29.1, 38.8, [("id", "Jambatan di atas Jahannam; licin dan mempunyai pengait seperti duri.", 0.4), ("src", "SAHIH AL-BUKHARI NOMOR 6573", 3.6)]),
    (59.0, 70.0, [("ar", "اللَّهُمَّ سَلِّمْ سَلِّمْ", 3.4), ("tr", "“Ya Allah, selamatkanlah. Ya Allah, selamatkanlah.”", 4.2),
                  ("trs", "Pengait menyambar manusia menurut amal mereka.", 7.4), ("src", "SAHIH AL-BUKHARI NOMOR 6573", 8.2)]),
    (70.9, 76.0, [("id", "Jangan menghukum nasib sesiapa.", 0), ("trg", "Ambil peringatannya.", 3.4)]),
    (91.7, 101.4, [("ar", "ثُمَّ نُنَجِّي الَّذِينَ اتَّقَوا", 7.4), ("id", "Kita tidak menentukan nasib seseorang.", 0.2),
                   ("trg", "Harapan ada pada rahmat dan janji Allah.", 4.9), ("src", "SURAH MARYAM AYAT 72", 8.2)]),
    (102.0, 106.0, [("ar", "اللَّهُمَّ سَلِّمْ سَلِّمْ", 1.0), ("tr", "“Ya Allah, selamatkanlah.”", 2.0)]),
]
# teks berdenyut & kartu tunggal (dirender terpisah, gaya judul film)
PULSE = [(42.6, 44.7, "Secepat kilat."), (45.2, 46.6, "Angin."), (47.0, 47.9, "Burung."), (48.3, 50.0, "Kuda yang tangkas."),
         (83.8, 85.3, "Berpegang pada iman."), (85.4, 86.9, "Mohon ampun."), (87.0, 88.5, "Perbaiki yang mampu."), (88.7, 90.9, "Terus berbuat baik.")]

def build_text():
    out = []
    for (t0, t1, items) in BLOCKS:
        y = 230; elems = []
        for kind, content, delay in items:
            if kind == "ar":
                im = rb.arabic_layer(content, 66); elems.append(("img", im, y, delay)); y += im.height + 14
            elif kind == "src":
                im = rb.src_layer(content); elems.append(("img", im, y + 4, delay)); y += 68
            else:
                font = {"id": F(LORA_R, 48), "tr": F(LORA_I, 40), "trg": F(LORA_I, 46), "trs": F(LORA_I, 34)}[kind]
                col = {"id": WHITE, "tr": (225, 222, 214), "trg": GOLD, "trs": (200, 196, 186)}[kind]
                words, hh = rb.word_layers(content, font, col, 900)
                elems.append(("words", words, y, delay)); y += hh + 16
        out.append((t0, t1, elems))
    return out

def pulse_layer(txt):
    f = F(LORA_B, 92)
    im = Image.new("RGBA", (W, 200), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    g = Image.new("RGBA", (W, 200), (0, 0, 0, 0)); ImageDraw.Draw(g).text((540, 100), txt, font=f, fill=(255, 210, 140, 200), anchor="mm")
    im.alpha_composite(g.filter(ImageFilter.GaussianBlur(14)))
    d.text((540, 100), txt, font=f, fill=WHITE + (255,), anchor="mm")
    return im

def title_card():
    im = Image.new("RGBA", (W, 420), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    f1 = F(MONO, 26); t1 = "SETELAH MIZAN"
    x = 540 - (sum(d.textlength(c, font=f1) for c in t1) + 10 * (len(t1) - 1)) / 2
    for c in t1: d.text((x, 90), c, font=f1, fill=GOLD + (255,), anchor="lm"); x += d.textlength(c, font=f1) + 10
    g = Image.new("RGBA", (W, 420), (0, 0, 0, 0)); ImageDraw.Draw(g).text((540, 200), "Titian Sirat", font=F(LORA_B, 120), fill=(255, 200, 120, 220), anchor="mm")
    im.alpha_composite(g.filter(ImageFilter.GaussianBlur(18)))
    d.text((540, 200), "Titian Sirat", font=F(LORA_B, 120), fill=WHITE + (255,), anchor="mm")
    d.line((400, 290, 680, 290), fill=GOLD + (180,), width=2)
    rb_ar = rb.arabic_layer("الصِّرَاط", 70); im.alpha_composite(rb_ar, (0, 305))
    return im

# ---------------- elemen dunia ----------------
VY = 860   # garis ufuk

def build5():
    rng = np.random.default_rng(55)
    sky = vgrad(H, [(0, (3, 4, 8)), (0.35, (10, 12, 20)), (0.44, (26, 30, 42)), (0.448, (40, 34, 36)), (0.47, (14, 12, 16)), (0.75, (22, 10, 8)), (1, (52, 18, 10))])
    img = to_img(sky).convert("RGBA")
    img.alpha_composite(rb.stars_layer(VY - 60, 220, 21)[0])
    img.alpha_composite(radial(W, H, 540, H + 200, 900, 700, (170, 60, 24), 1.5, 0.45))   # bara jauh di dasar
    G["abyss"] = img
    # pengait abstrak (siluet)
    hk = Image.new("RGBA", (400, 700), (0, 0, 0, 0)); d = ImageDraw.Draw(hk)
    pts = [(200 + 60 * math.sin(a / 18 * math.pi) * (1 - a / 30), 700 - a * 22) for a in range(30)]
    d.line(pts, fill=(2, 2, 4, 255), width=34)
    d.arc((90, 20, 330, 260), 180, 360, fill=(2, 2, 4, 255), width=30)
    d.polygon([(90, 140), (60, 210), (130, 160)], fill=(2, 2, 4, 255))
    for k in range(6):
        y = 640 - k * 100; s = 1 if k % 2 else -1
        d.polygon([(200 + s * 18, y), (200 + s * 70, y - 40), (200 + s * 20, y - 30)], fill=(2, 2, 4, 255))
    G["hook"] = hk
    G["hook_soft"] = hk.filter(ImageFilter.GaussianBlur(10))
    G["sun_st"] = to_img(vgrad(H, [(0, (40, 46, 70)), (0.35, (150, 120, 120)), (0.5, (250, 190, 130)), (0.55, (120, 92, 80)), (1, (36, 30, 30))])).convert("RGBA")
    G["dust5"] = [(rng.uniform(0, W), rng.uniform(0, H), rng.uniform(0, 6.28), rng.uniform(1, 3)) for _ in range(120)]
    G["pulse"] = {txt: pulse_layer(txt) for (_, _, txt) in PULSE}
    G["title"] = title_card()

def mist(fr, t, y, speed, alpha, col=(120, 125, 150), h=700):
    off = int((t * speed) % W) if speed >= 0 else int((-t * speed) % W)
    fog = rb.G["fog"].crop((off, 0, off + W, 700))
    if h != 700: fog = fog.resize((W, h))
    fl = Image.new("RGBA", (W, h), col + (0,)); fl.putalpha(fog.point(lambda v: int(v * alpha)))
    fr.alpha_composite(fl, (0, int(y)))

def flare(fr, x, y, s, col=(255, 230, 190)):
    """kilau lensa anamorfik horizontal"""
    key = ("fl", col)
    if key not in G:
        a = np.zeros((40, 900), np.float32)
        xs = np.linspace(-1, 1, 900); ys = np.linspace(-1, 1, 40)
        a = np.exp(-(ys[:, None] / 0.18) ** 2) * np.exp(-np.abs(xs[None, :]) * 3.0)
        arr = np.zeros((40, 900, 4), np.uint8); arr[..., 0], arr[..., 1], arr[..., 2] = col
        arr[..., 3] = (a * 255).astype(np.uint8); G[key] = Image.fromarray(arr, "RGBA")
    im = G[key]
    if s < 0.999: im = im.copy(); im.putalpha(im.getchannel("A").point(lambda v: int(v * s)))
    fr.alpha_composite(im, (int(x - 450), int(y - 20)))

def hblur(fr, k):
    """blur gerak horizontal murah"""
    if k < 2: return fr
    sm = fr.resize((max(1, W // k), H), Image.BILINEAR)
    return sm.resize((W, H), Image.BILINEAR)

def path_scene(t, travel=0.0, sway=0.0, far_light=0.0, path_a=1.0, hooks=0.0, blur=0, ember=1.0):
    fr = G["abyss"].copy()
    mist(fr, t, VY + 120, 25, 0.35, (90, 60, 60))
    vx = 540 + sway
    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    bx = 540 - sway * 1.6
    for k in range(40):           # laluan sebagai garis cahaya meruncing
        u0, u1 = k / 40, (k + 1) / 40
        y0, y1 = VY + (H + 60 - VY) * u0 ** 1.6, VY + (H + 60 - VY) * u1 ** 1.6
        x0, x1 = lerp(vx, bx, u0 ** 1.6), lerp(vx, bx, u1 ** 1.6)
        w_ = 1.5 + 22 * u1 ** 1.6
        d.line((x0, y0, x1, y1), fill=(235, 220, 190, int(230 * path_a)), width=int(w_))
    for k in range(14):           # denyut cahaya bergerak ke arah kamera (dolly)
        u = ((k / 14) + travel) % 1.0; uu = u ** 1.6
        y = VY + (H + 60 - VY) * uu; x = lerp(vx, bx, uu)
        r = 2 + 18 * uu
        d.ellipse((x - r, y - r * 0.4, x + r, y + r * 0.4), fill=(255, 245, 220, int(200 * path_a * (1 - u * 0.3))))
    fr.alpha_composite(lay.filter(ImageFilter.GaussianBlur(9)))
    fr.alpha_composite(lay)
    if hooks > 0:                 # pengait bayangan di sisi laluan
        for k in range(8):
            u = ((k / 8) + travel * 0.9) % 1.0; uu = u ** 1.6
            y = VY + (H + 60 - VY) * uu; xc = lerp(vx, bx, uu)
            side = 1 if k % 2 else -1
            sc = 0.1 + 0.9 * uu
            hk = G["hook"].resize((max(2, int(400 * sc)), max(2, int(700 * sc))))
            if side < 0: hk = ImageOps.mirror(hk)
            hk.putalpha(hk.getchannel("A").point(lambda v: int(v * hooks)))
            fr.alpha_composite(hk, (int(xc + side * (60 + 360 * uu) - hk.width / 2), int(y - hk.height * 0.55)))
    if far_light > 0:
        glow(fr, vx, VY - 4, 140, (255, 226, 180), far_light * 0.8); glow(fr, vx, VY - 4, 30, (255, 250, 235), far_light)
        flare(fr, vx, VY - 4, far_light * 0.8)
    mist(fr, t, VY - 250, -40, 0.25, (110, 115, 140))
    mist(fr, t * 1.7, 1300, 70, 0.3, (80, 70, 80))
    return hblur(fr, blur)

def side_scene(t, speed=300, hooks=1.0, blur=0):
    """tracking rendah sejajar permukaan jambatan"""
    fr = G["abyss"].copy()
    fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, 70)))
    mist(fr, t, 1250, 60, 0.4, (90, 60, 60))
    d = ImageDraw.Draw(fr)
    by = 1120
    d.rectangle((0, by, W, by + 34), fill=(14, 14, 18, 255))
    d.line((0, by, W, by), fill=(200, 196, 190, 255), width=2)
    rng = np.random.default_rng(3)
    for k in range(26):           # kilau licin bergerak
        x = (rng.uniform(0, W * 2) - t * speed) % (W + 300) - 150
        ln = rng.uniform(40, 160)
        d.line((x, by + 6 + rng.uniform(0, 20), x + ln, by + 6 + rng.uniform(0, 20)), fill=(170, 180, 210, 120), width=2)
    if hooks > 0:
        for k in range(5):
            x = (k * 380 - t * speed * 1.8) % (W + 600) - 300
            hk = G["hook_soft"].resize((260, 455)); hk = hk if k % 2 else ImageOps.mirror(hk)
            hk.putalpha(hk.getchannel("A").point(lambda v: int(v * hooks)))
            fr.alpha_composite(hk, (int(x), by - 300 + (k % 2) * 520))
    return hblur(fr, blur)

def horse(d, x, y, s, ph, col):
    d.ellipse((x - 70 * s, y - 34 * s, x + 70 * s, y + 30 * s), fill=col)
    d.polygon([(x + 50 * s, y - 20 * s), (x + 95 * s, y - 85 * s), (x + 125 * s, y - 80 * s), (x + 80 * s, y - 10 * s)], fill=col)
    d.ellipse((x + 100 * s, y - 98 * s, x + 145 * s, y - 70 * s), fill=col)
    d.line((x - 68 * s, y - 20 * s, x - 110 * s, y + 10 * s), fill=col, width=int(8 * s))
    for k, (lx, o) in enumerate([(-50, 0), (-35, 1.6), (40, 3.1), (55, 4.6)]):
        a = math.sin(ph + o) * 0.7
        d.line((x + lx * s, y + 15 * s, x + lx * s + math.sin(a) * 60 * s, y + 15 * s + math.cos(a) * 60 * s), fill=col, width=int(10 * s))

def crossing_scene(t):
    if t < 42.6:   # penyeberangan bermula
        return path_scene(t, travel=(t - 39) * 0.35, far_light=0.8, hooks=0.4)
    if t < 45.2:   # kilat
        fr = path_scene(t, travel=(t - 39) * 0.35, far_light=0.8, hooks=0.4)
        p = ((t - 42.6) * 1.6) % 1.0
        lay = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
        for k in range(12):
            u = 1 - p + k * 0.02; uu = max(0, u) ** 1.6
            y = VY + (H + 60 - VY) * uu; x = 540
            r = 6 + 40 * uu
            d.ellipse((x - r, y - r * 0.5, x + r, y + r * 0.5), fill=(230, 240, 255, int(255 * (1 - k / 12))))
        fr.alpha_composite(lay.filter(ImageFilter.GaussianBlur(6))); fr.alpha_composite(lay)
        if p < 0.12: fr.alpha_composite(Image.new("RGBA", (W, H), (220, 230, 255, 90)))
        return fr
    if t < 47.0:   # angin
        fr = side_scene(t, speed=900, hooks=0.0, blur=6)
        d = ImageDraw.Draw(fr); rng = np.random.default_rng(8)
        for k in range(90):
            x = (rng.uniform(0, W * 3) - t * 2600) % (W + 400) - 200; y = rng.uniform(400, 1500)
            d.line((x, y, x + rng.uniform(120, 400), y - 10), fill=(200, 210, 230, 110), width=2)
        return fr
    if t < 48.3:   # burung
        fr = side_scene(t, speed=600, hooks=0.0, blur=3)
        d = ImageDraw.Draw(fr)
        for k in range(9):
            x = -100 + (t - 47.0) * 1100 + k * 55 - (k % 3) * 40; y = 700 + (k % 4) * 45 - (k // 3) * 30
            rb.draw_bird(d, x, y, 16, t * 22 + k, (4, 4, 8))
        return fr
    fr = side_scene(t, speed=700, hooks=0.0, blur=2)   # kuda yang tangkas
    d = ImageDraw.Draw(fr)
    for k in range(3):
        x = -300 + (t - 48.3) * 900 + k * 260; horse(d, x, 1100 - 20 * k, 1.5 - 0.2 * k, t * 18 + k, (3, 3, 6, 255))
    return hblur(fr, 3)

def outcome_scene(t):
    if t < 53.36:   # selamat
        fr = path_scene(t, travel=(t - 50) * 0.3, far_light=1.0, hooks=0.5)
        p = ease((t - 50.9) / 1.6); uu = (1 - p) ** 1.6
        glow(fr, 540, VY + (H - VY) * uu, 20 + 50 * uu, (255, 230, 190), 1.0)
        return fr
    if t < 57.4:    # tersangkut lalu terlepas
        fr = path_scene(t, travel=0.2, far_light=0.7, hooks=0.8)
        stop = 54.1; jit = 0
        if t < stop: p = ease((t - 53.36) / 0.7) * 0.4
        elif t < 55.2: p = 0.4; jit = 10 * math.sin(t * 70) * (1 - (t - stop) / 1.1)
        else: p = 0.4 + ease((t - 55.2) / 1.6) * 0.6
        uu = (1 - p) ** 1.6
        x, y = 540 + jit, VY + (H - VY) * uu
        glow(fr, x, y, 18 + 40 * uu, (255, 226, 180), 0.9)
        if stop <= t < stop + 0.5:
            d = ImageDraw.Draw(fr)
            for k in range(10):
                a = k * 0.6; r = (t - stop) * 260
                d.line((x, y, x + r * math.cos(a), y + r * math.sin(a)), fill=(255, 220, 160, int(200 * (1 - (t - stop) / 0.5))), width=2)
        return zoom(fr, 1.0 + 0.15 * (1 if stop <= t < 55.2 else 0), 540, y)
    # sebagian jatuh: cahaya meredup & lenyap di balik kabus (tanpa tubuh)
    fr = path_scene(t, travel=0.2, far_light=0.5, hooks=0.6)
    p = ease((t - 57.4) / 0.8)
    glow(fr, 600 + 40 * p, 1200 + 380 * p, 30, (200, 180, 160), 1 - p)
    mist(fr, t, 1200, 30, 0.7, (40, 30, 34))
    tilt = 120 * ease((t - 57.4) / 0.4)
    fr = zoom(fr, 1.1, 540, 960 + tilt)
    if t > 58.15: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(200 * fade(t, 58.15, 0.3)))))
    return fr

def prayer_scene(t):
    orbit = 140 * math.sin((t - 59.0) / 11 * math.pi)
    fr = path_scene(t, travel=(t - 59) * 0.05, sway=orbit, far_light=0.6, path_a=0.8, hooks=0.25)
    fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(110 * fade(t, 59.0, 2)))))
    return fr

def judge_scene(t):
    fr = path_scene(t, travel=(t - 70) * 0.03, far_light=0.9, path_a=0.9, hooks=0.0)
    p = ease((t - 71.0) / 2.5)
    hk = G["hook"] if p < 0.5 else G["hook_soft"]   # tarik fokus dari pengait ke cahaya jauh
    big = hk.resize((700, 1225)); big.putalpha(big.getchannel("A").point(lambda v: int(v * (1 - 0.6 * p))))
    if p > 0.3: big = big.filter(ImageFilter.GaussianBlur(int(14 * p)))
    fr.alpha_composite(big, (-220, 700))
    if p < 0.5: fr = Image.blend(fr, fr.filter(ImageFilter.GaussianBlur(6)), 0.6 * (1 - p * 2))
    return zoom(fr, lerp(1.2, 1.0, ease((t - 73.5) / 2.6)), 540, 900)

# ----- montase kehidupan (siang) -----
def street(t, z=1.0, cx=540):
    fr = G["sun_st"].copy()
    fr.alpha_composite(radial(W, H, 760, int(H * 0.5), 600, 600, (255, 220, 160), 1.5, 0.5))
    d = ImageDraw.Draw(fr)
    gy = int(H * 0.74)
    rng = np.random.default_rng(12)
    x = -20
    while x < W:
        bw, bh = rng.uniform(90, 200), rng.uniform(150, 420)
        d.rectangle((x, gy - bh, x + bw, gy), fill=(60, 48, 50, 255)); x += bw + rng.uniform(4, 30)
    d.rectangle((0, gy, W, H), fill=(70, 56, 52, 255))
    for k in range(8):
        flare(fr, 760, int(H * 0.5), 0.3)
    return fr, gy

def arm(d, x0, y0, x1, y1, col, w=16):
    d.line((x0, y0, x1, y1), fill=col, width=w); d.ellipse((x1 - w * 0.7, y1 - w * 0.7, x1 + w * 0.7, y1 + w * 0.7), fill=col)

def life_scene(t):
    col = (16, 12, 14, 255)
    if t < 80.24:   # lorong kehidupan: steadicam mengikuti langkah
        fr, gy = street(t)
        person(ImageDraw.Draw(fr), 470 + (t - 76.1) * 20, gy + 40, 520, t * 4.2, "walk", 1, col)
        return zoom(fr, 1.08, 520, 1100)
    if t < 83.8:    # memulangkan barang yang bukan miliknya
        fr, gy = street(t); d = ImageDraw.Draw(fr)
        p = ease((t - 80.4) / 1.6)
        person(d, 330, gy + 40, 560, 0, "stand", 1, col); person(d, 760, gy + 40, 540, 0, "stand", -1, col)
        hx = lerp(380, 600, p); arm(d, 360, gy - 380, hx, gy - 300, col)
        d.rounded_rectangle((hx - 10, gy - 330, hx + 50, gy - 290), radius=6, fill=(150, 100, 60, 255))
        if p > 0.6: arm(d, 730, gy - 380, hx + 60, gy - 300, col)
        return zoom(fr, 1.12, 540, gy - 300)
    if t < 85.43:   # berpegang pada iman: sujud
        fr, gy = street(t); d = ImageDraw.Draw(fr)
        fr.alpha_composite(Image.new("RGBA", (W, H), (20, 12, 10, 90)))
        d = ImageDraw.Draw(fr)
        d.rectangle((260, gy + 10, 820, gy + 40), fill=(120, 60, 50, 255))
        # sujud (tampak samping): kaki & lutut di kanan, pinggul tinggi, kepala di tanah
        d.polygon([(760, gy + 10), (770, gy - 20), (700, gy - 30), (690, gy - 175), (640, gy - 205), (560, gy - 170),
                   (470, gy - 105), (420, gy - 70), (400, gy + 10)], fill=col)
        d.ellipse((350, gy - 80, 450, gy + 12), fill=col)
        d.line((470, gy - 95, 455, gy + 6), fill=col, width=26); d.line((455, gy + 6, 380, gy + 6), fill=col, width=20)
        return zoom(fr, 1.2, 540, gy - 120)
    if t < 87.0:    # mohon ampun: duduk, tangan terangkat
        fr, gy = street(t); d = ImageDraw.Draw(fr)
        fr.alpha_composite(Image.new("RGBA", (W, H), (10, 8, 14, 120))); d = ImageDraw.Draw(fr)
        d.ellipse((480, gy - 420, 600, gy - 300), fill=col)
        d.polygon([(440, gy - 300), (640, gy - 300), (700, gy + 20), (380, gy + 20)], fill=col)
        for s in (-1, 1):
            arm(d, 540 + s * 80, gy - 270, 540 + s * 130, gy - 300, col, 24)
            d.line((540 + s * 130, gy - 300, 540 + s * 125, gy - 360), fill=col, width=24)
            d.ellipse((540 + s * 125 - 18, gy - 380, 540 + s * 125 + 18, gy - 340), fill=col)
        return zoom(fr, 1.25, 540, gy - 250)
    if t < 88.67:   # perbaiki yang mampu: membantu orang berdiri
        fr, gy = street(t); d = ImageDraw.Draw(fr)
        p = ease((t - 87.0) / 1.5)
        person(d, 680, gy + 40, 560, 0, "stand", -1, col)
        arm(d, 650, gy - 380, 520, lerp(gy - 200, gy - 330, p), col)
        hh = lerp(330, 520, p)
        person(d, 450, gy + 40, hh, 0, "stand", 1, col)
        arm(d, 470, gy + 40 - hh * 0.75, 520, lerp(gy - 200, gy - 330, p), col)
        return zoom(fr, 1.1, 560, gy - 260)
    # terus berbuat baik walau tiada yang melihat: meletakkan bungkusan di pintu
    fr = to_img(vgrad(H, [(0, (10, 12, 22)), (1, (24, 22, 28))])).convert("RGBA"); d = ImageDraw.Draw(fr)
    gy = int(H * 0.74)
    d.rectangle((560, gy - 560, 900, gy), fill=(40, 30, 28, 255)); d.rectangle((600, gy - 500, 860, gy), fill=(26, 20, 20, 255))
    glow(fr, 730, gy - 600, 120, (255, 210, 140), 0.8)
    d.rectangle((0, gy, W, H), fill=(30, 26, 26, 255))
    p = ease((t - 88.67) / 1.2)
    d.rounded_rectangle((620, gy - 70, 720, gy), radius=10, fill=(170, 130, 80, 255))
    person(d, lerp(560, 300, ease((t - 89.9) / 1.0)), gy + 40, 540, t * 4 if t > 89.9 else 0, "walk" if t > 89.9 else "stand", -1, (6, 6, 8, 255))
    return zoom(fr, 1.1, 560, gy - 250)

def hope_scene(t):
    fr, gy = street(t)
    fr.alpha_composite(Image.new("RGBA", (W, H), (60, 70, 100, 70)))
    p = ease((t - 92.0) / 8.0)
    rays = rb.G["rays"].point(lambda v: int(v * 0.55 * p))
    rl = Image.new("RGBA", (W, H), (255, 225, 175, 0)); rl.putalpha(rays); fr.alpha_composite(rl)
    mist(fr, t, gy - 500, 20, 0.6 * (1 - 0.5 * p), (200, 200, 210))
    person(ImageDraw.Draw(fr), 540, gy + 40, 600, 0, "stand", 1, (14, 12, 14, 255))
    return zoom(fr, lerp(1.35, 1.0, p), 540, lerp(gy - 300, 960, p))

def end_scene(t):
    fr = path_scene(t, travel=(t - 101) * 0.1, far_light=1.0, path_a=0.7)
    fr.alpha_composite(radial(W, H, 540, VY, 700, 700, (255, 236, 200), 1.4, 0.4 * fade(t, 101.6, 2.5)))
    fr = zoom(fr, lerp(1.0, 1.6, ease((t - 101.5) / 4.6)), 540, VY)
    k = fade(t, 104.8, 1.3)
    if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(255 * k))))
    return fr

def zoom(fr, z, cx, cy): return e2.zoom(fr, z, cx, cy)

def open_scene(t):
    if t < 3.47:    # sambungan Mizan: garis keseimbangan meredup, push-in
        fr = e4.s_balance(28.0 + t * 0.2)
        k = fade(t, 1.0, 2.0) * 0.6
        if k > 0: fr.alpha_composite(Image.new("RGBA", (W, H), (0, 0, 0, int(255 * k))))
        return zoom(fr, 1.0 + 0.5 * ease(t / 3.47), 540, 940)
    p = ease((t - 3.47) / 5.0)       # crane-back membuka hamparan gelap
    fr = path_scene(t, travel=t * 0.05, far_light=0.6 * p, path_a=fade(t, 3.6, 1.5))
    return zoom(fr, lerp(2.6, 1.0, p), 540, lerp(VY, 960, p))

SCENES = [(0.0, 9.6, open_scene), (9.5, 15.4, lambda t: path_scene(t, travel=(t - 9.5) * 0.25, far_light=0.4)),
          (15.3, 28.2, lambda t: path_scene(t, travel=(t - 15) * 0.2, far_light=fade(t, 16.1, 3.0), blur=0)),
          (28.1, 39.1, None), (39.0, 50.0, crossing_scene), (50.0, 59.0, outcome_scene), (58.9, 70.2, prayer_scene),
          (70.1, 76.2, judge_scene), (76.1, 90.95, life_scene), (90.9, 101.6, hope_scene), (101.5, TOTAL + 0.1, end_scene)]

def bridge_scene(t):
    if t < 32.7: return side_scene(t, speed=320, hooks=0.9)
    if t < 36.17:   # makro bayang pengait
        fr = side_scene(t, speed=60, hooks=0.0)
        fr = fr.filter(ImageFilter.GaussianBlur(8))
        hk = G["hook"].resize((640, 1120)); fr.alpha_composite(hk, (220, 420))
        glow(fr, 540, 600, 260, (120, 140, 190), 0.25)
        return zoom(fr, 1.0 + 0.04 * (t - 32.7), 540, 900)
    p = ease((t - 36.17) / 2.0)     # rack-focus kembali ke ruang luas
    fr = path_scene(t, travel=(t - 36) * 0.15, far_light=0.6, hooks=0.6)
    if p < 1: fr = Image.blend(fr.filter(ImageFilter.GaussianBlur(10)), fr, p)
    return fr
SCENES[3] = (28.1, 39.1, bridge_scene)
HARD = {28.1, 39.0, 50.0, 76.1}
CUT_SUB = [42.6, 45.2, 47.0, 48.3, 53.36, 57.4, 80.24, 83.8, 85.43, 87.0, 88.67]   # cut tajam di dalam adegan

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
    for c in CUT_SUB + [39.0, 50.0]:
        if c <= t < c + 0.08: fr.alpha_composite(Image.new("RGBA", (W, H), (255, 250, 240, 60)))
    vl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); vl.putalpha(rb.G["vig_a"].point(lambda a: int(a * 0.8)))
    fr.alpha_composite(vl)
    fr.alpha_composite(rb.G["grain"][fi % 6])
    fr.alpha_composite(G["topshade"])
    # kartu judul
    if 7.0 <= t < 10.6:
        a = fade(t, 7.0, 0.6) * (1 - fade(t, 10.0, 0.6))
        tc = G["title"].copy(); tc.putalpha(tc.getchannel("A").point(lambda v: int(v * a)))
        fr.alpha_composite(tc, (0, 160 + int((1 - fade(t, 7.0, 0.8)) * 20)))
    e2.draw_text(fr, t)
    for (t0, t1, txt) in PULSE:
        if t0 <= t < t1:
            k = (t - t0); sc = 1.0 + 0.08 * math.exp(-k * 6)
            a = min(1, k / 0.12) * (1 - fade(t, t1 - 0.2, 0.2))
            im = G["pulse"][txt]
            if abs(sc - 1) > 0.003: im = im.resize((int(W * sc), int(200 * sc)))
            im = im.copy(); im.putalpha(im.getchannel("A").point(lambda v: int(v * a)))
            fr.alpha_composite(im, (int((W - im.width) / 2), int(300 - (im.height - 200) / 2)))
    if t < VO_LEN: fr.alpha_composite(G["wm"], (0, 1640))
    g = fade(t, 0, 0.6)
    rgb = fr.convert("RGB")
    if g < 0.999: rgb = Image.eval(rgb, lambda v: int(v * g))
    return rgb

def build():
    e4.build(); build5()
    e2.BLOCKS[:] = BLOCKS
    G["text"] = build_text()

def worker(args):
    a, b, out = args
    build()
    p = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                          "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-maxrate", "5500k", "-bufsize", "11000k", "-pix_fmt", "yuv420p", out], stdin=subprocess.PIPE)
    for fi in range(a, b): p.stdin.write(render(fi).tobytes())
    p.stdin.close(); p.wait(); return out

# ---------------- audio: di bawah narator, tanpa nuansa horor ----------------
def make_audio(path):
    from numpy.fft import rfft, irfft
    sr = 44100; n = int(TOTAL * sr); tt = np.arange(n) / sr
    rng = np.random.default_rng(15)
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
    # dengung Mizan terputus, lalu dengung rendah lembut
    low = filt(np.sin(2 * np.pi * 55 * tt) + 0.6 * np.sin(2 * np.pi * 82.4 * tt) + 0.3 * np.sin(2 * np.pi * 110 * tt), None, 380)
    bed += 0.07 * low * env([(0, 0.7), (2.5, 0.0), (3.5, 0.0), (6, 0.4), (28, 0.5), (39, 0.6), (50, 0.7), (58.1, 0.7), (58.2, 0), (59.0, 0), (61, 0.2),
                            (70, 0.3), (76, 0.0), (91, 0.0), (101, 0.0), (106.8, 0)])
    pad = filt(sum(np.sin(2 * np.pi * f * tt + i) for i, f in enumerate([220.0, 277.2, 329.6, 440.0])), None, 1200)
    bed += 0.035 * pad * env([(0, 0), (58, 0), (61, 0.4), (70, 0.4), (76, 0.6), (91, 0.8), (101, 1.0), (105.7, 0.4), (106.1, 0), (106.8, 0)])
    wind = norm(filt(rng.standard_normal(n), 150, 1800))
    bed += 0.12 * wind * env([(0, 0), (3.5, 0.3), (9.5, 0.6), (28, 0.5), (39, 0.6), (45.2, 1.6), (47.0, 0.6), (58.1, 0.4), (58.2, 0), (59, 0), (61, 0.25),
                             (70, 0.3), (76, 0), (90.9, 0), (92, 0.3), (101, 0.2), (106, 0), (106.8, 0)])
    def riser(t_end, d, g):
        lt = seg(d); s = filt(rng.standard_normal(len(lt)), 300, 7000) * (lt / d) ** 3 + 0.5 * np.sin(2 * np.pi * (150 * lt + 250 * lt ** 2 / d)) * (lt / d) ** 2
        add(norm(s), t_end - d, g)
    def whoosh(t0, d, g, lo=300, hi=6000):
        lt = seg(d); add(norm(filt(rng.standard_normal(len(lt)), lo, hi)) * np.sin(np.pi * lt / d) ** 2, t0, g)
    def hit(t0, g, f0=50):
        lt = seg(2.0); s = np.sin(2 * np.pi * (f0 - 6 * lt) * lt) * np.exp(-lt * 2.4) + 0.3 * filt(rng.standard_normal(len(lt)), 30, 200) * np.exp(-lt * 3)
        add(norm(s) * np.clip(lt / 0.004, 0, 1), t0, g)
    riser(7.2, 2.5, 0.12); hit(7.2, 0.3)
    for t0 in (28.1, 39.0, 50.0): whoosh(t0 - 0.3, 0.6, 0.18); hit(t0, 0.2)
    # kilat: retak terang + guruh lembut
    lt = seg(0.6); add(norm(filt(rng.standard_normal(len(lt)), 1500, 12000)) * np.exp(-lt * 14), 42.6, 0.25)
    lt = seg(3.0); add(norm(filt(rng.standard_normal(len(lt)), 25, 150)) * np.exp(-lt * 1.4) * (1 - np.exp(-lt * 8)), 42.7, 0.35)
    whoosh(45.1, 1.6, 0.22, 400, 4000)                                            # angin
    for k in range(10):                                                           # kepak burung
        lt = seg(0.08); add(filt(rng.standard_normal(len(lt)), 500, 3000) * np.exp(-lt / 0.02), 47.0 + k * 0.09, 0.08)
    for k in range(int((50.0 - 48.3) / 0.11)):                                    # derap kuda
        lt = seg(0.12); add(np.sin(2 * np.pi * 90 * lt) * np.exp(-lt / 0.03), 48.3 + k * 0.11 + (0.03 if k % 2 else 0), 0.25)
    whoosh(50.9, 1.6, 0.12)                                                       # selamat
    lt = seg(0.5); add(norm(filt(rng.standard_normal(len(lt)), 1500, 6000)) * np.exp(-lt * 8), 54.1, 0.14)   # tersangkut
    hit(54.1, 0.18, 70); whoosh(55.2, 1.0, 0.1)
    lt = seg(1.2); add(np.sin(2 * np.pi * (400 * np.exp(-lt * 2)) * lt) * np.exp(-lt * 2.5) * 0.4 + norm(filt(rng.standard_normal(len(lt)), 200, 2000)) * np.exp(-lt * 3) * 0.3, 57.4, 0.15)
    for t0 in (83.8, 85.43, 87.0, 88.67): whoosh(t0 - 0.2, 0.4, 0.06)
    for k in range(int((80.2 - 76.4) / 0.55)):                                    # langkah siang
        lt = seg(0.16); add(norm(filt(rng.standard_normal(len(lt)), 80, 1000) * np.exp(-lt / 0.03)), 76.4 + k * 0.55, 0.08)
    for t0 in rng.uniform(76.5, 101, 18):                                        # burung pagi
        lt = seg(0.18); f = 2600 + 1600 * np.sin(np.pi * lt / 0.18)
        add(np.sin(2 * np.pi * np.cumsum(f) / sr) * np.sin(np.pi * lt / 0.18), t0, 0.02)
    def bell(t0, f, g):
        lt = seg(3.5); add((np.sin(2 * np.pi * f * lt) + 0.3 * np.sin(2 * np.pi * f * 2.01 * lt)) * np.exp(-lt * 1.3) * np.clip(lt / 0.01, 0, 1), t0, g)
    for t0, f in [(10.8, 523.3), (16.1, 659.3), (62.4, 587.3), (99.0, 659.3), (103.0, 523.3)]: bell(t0, f, 0.04)
    vo_env = np.sqrt(np.maximum(filt(vo ** 2, None, 6), 0))
    vo_env = np.clip(vo_env / (vo_env.max() + 1e-9) * 6, 0, 1)
    bed = np.nan_to_num(np.tanh(bed * (1 - 0.6 * vo_env) * 1.2))
    out = vo + bed * 0.3
    out *= env([(0, 0), (0.2, 1), (105.9, 1), (106.4, 0), (106.8, 0)])
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
        os.system(f"ffmpeg -v error -y -f concat -safe 0 -i {outdir}/list.txt -i {outdir}/audio.wav -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart {outdir}/ep5.mp4")
        print("done")
