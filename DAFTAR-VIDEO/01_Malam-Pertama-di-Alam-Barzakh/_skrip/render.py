"""Malam Pertama di Alam Barzakh - video 9:16 bergaya ilustrasi siluet datar.
Teks layar mengikuti naskah; tanpa rupa malaikat, ruh, atau mayit duduk."""
import math, os, sys, wave, subprocess
import numpy as np
from multiprocessing import Pool
from PIL import Image, ImageDraw, ImageFont, ImageFilter

S = os.path.dirname(os.path.abspath(__file__))
FD = os.path.join(os.path.dirname(S), "fonts")
W, H, FPS = 1080, 1920, 30
TOTAL = 170.0
SPEED = 1.3
NFRAMES = int(TOTAL / SPEED * FPS)

def F(p, s): return ImageFont.truetype(os.path.join(FD, p), s)
AR = "fontsource-amiri-5.3.0/package/files/amiri-arabic-700-normal.woff"
AR_R = "fontsource-amiri-5.3.0/package/files/amiri-arabic-400-normal.woff"
LORA_R = "fontsource-lora-5.3.0/package/files/lora-latin-400-normal.woff"
LORA_I = "fontsource-lora-5.3.0/package/files/lora-latin-400-italic.woff"
MONO = "fontsource-space-mono-5.3.0/package/files/space-mono-latin-400-normal.woff"
MONT = "mont/package/files/montserrat-latin-500-normal.woff"

GOLD = (222, 190, 120)
WHITE = (238, 236, 230)
SIL = (3, 3, 5)

def ease(x):
    x = max(0.0, min(1.0, x)); return x * x * (3 - 2 * x)
def fade(t, t0, d=0.6): return ease((t - t0) / d)
def lerp(a, b, x): return a + (b - a) * x
def lerpc(a, b, x): return tuple(int(lerp(a[i], b[i], x)) for i in range(len(a)))

def vgrad(h, stops, w=W):
    """stops: list of (pos0..1, rgb)"""
    ys = np.linspace(0, 1, h)
    out = np.zeros((h, 3), np.float32)
    for c in range(3):
        out[:, c] = np.interp(ys, [s[0] for s in stops], [s[1][c] for s in stops])
    return np.repeat(out[:, None, :], w, axis=1)

def to_img(a): return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))

def radial(w, h, cx, cy, rx, ry, color, power=2.0, strength=1.0):
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    d = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)
    a = np.clip(1 - d, 0, 1) ** power * strength
    L = np.zeros((h, w, 4), np.float32); L[..., :3] = color; L[..., 3] = a * 255
    return Image.fromarray(L.astype(np.uint8), "RGBA")

# ---------------- geometri potongan melintang ----------------
SURF = 640
SH_X0, SH_X1 = 420, 660
CH_X0, CH_X1, CH_Y0, CH_Y1 = 385, 695, 1020, 1215
BODY_W, BODY_H = 230, 40
BODY_Y_CH = CH_Y1 - 30

# ---------------- elemen gambar ----------------
def cypress(d, x, base, h, w, col=SIL):
    pts = []
    for k in range(21):
        a = k / 20 * math.pi
        yy = base - h * (1 - math.cos(a)) / 2
        ww = w * math.sin(a) ** 0.8 * (1 - 0.15 * (k / 20))
        pts.append((x - ww / 2, yy))
    pts2 = [(2 * x - px, py) for px, py in pts[::-1]]
    d.polygon([(x, base)] + pts + [(x, base - h)] + pts2, fill=col)
    d.polygon([(x - w / 2, base), (x + w / 2, base), (x, base - h)], fill=col)

def moon_layer(cx, cy, r, halo=1.0):
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    L = Image.alpha_composite(L, radial(W, H, cx, cy, r * 6, r * 6, (180, 190, 220), 2.2, 0.35 * halo))
    m = Image.new("L", (W, H), 0); md = ImageDraw.Draw(m)
    md.ellipse((cx - r, cy - r, cx + r, cy + r), fill=255)
    md.ellipse((cx - r + r * 0.45, cy - r - r * 0.2, cx + r + r * 0.45, cy + r - r * 0.2), fill=0)
    c = Image.new("RGBA", (W, H), (240, 240, 235, 0)); c.putalpha(m)
    return Image.alpha_composite(L, c)

def stars_layer(h, n, seed, y1=None):
    rng = np.random.default_rng(seed)
    L = Image.new("RGBA", (W, h), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    y1 = y1 or h
    pts = []
    for _ in range(n):
        x, y = rng.uniform(0, W), rng.uniform(0, y1) ** 1.0
        b = int(rng.uniform(90, 230)); r = rng.choice([0.7, 1.0, 1.5], p=[.6, .3, .1])
        d.ellipse((x - r, y - r, x + r, y + r), fill=(b, b, min(255, b + 15), 255))
        pts.append((x, y))
    return L, pts

def person(d, x, yf, h=120, phase=0.0, pose="stand", facing=-1, col=SIL):
    r = h * 0.085
    hy = yf - h + r
    d.ellipse((x - r, hy - r, x + r, hy + r), fill=col)
    ys = hy + r + h * 0.03; yh = yf - h * 0.43
    sw, hw = h * 0.13, h * 0.11
    # badan (jubah sedikit melebar)
    d.polygon([(x - sw, ys), (x + sw, ys), (x + hw + 3, yh + h * 0.18), (x - hw - 3, yh + h * 0.18)], fill=col)
    d.ellipse((x - sw, ys - h * 0.03, x + sw, ys + h * 0.06), fill=col)
    # kaki
    sa = math.sin(phase) * (0.42 if pose == "walk" else 0.0)
    lw = max(3, int(h * 0.065))
    for s in (1, -1):
        ang = s * sa
        fx = x + math.sin(ang) * (yf - yh); fy = yh + math.cos(ang) * (yf - yh)
        d.line((x + s * h * 0.035, yh + h * 0.1, fx, min(yf, fy)), fill=col, width=lw)
        d.ellipse((fx - lw * 0.9 + facing * 2, min(yf, fy) - lw * 0.5, fx + lw * 0.9 + facing * 2, min(yf, fy) + lw * 0.4), fill=col)
    aw = max(3, int(h * 0.05))
    sx_ = sw * 0.85
    if pose == "walk":
        for s in (1, -1):
            ang = -s * sa * 0.8
            d.line((x + s * sx_ * 0.6, ys + 4, x + s * sx_ * 0.6 + math.sin(ang) * h * 0.3, ys + 4 + math.cos(ang) * h * 0.3), fill=col, width=aw)
    elif pose == "carry":
        d.line((x, ys + 4, x + facing * h * 0.05, ys - h * 0.02), fill=col, width=aw)
    elif pose == "pray":
        for s in (1, -1):
            ex = x + facing * h * 0.12 + s * h * 0.04
            d.line((x + s * sx_ * 0.5, ys + 6, ex, ys + h * 0.12), fill=col, width=aw)
            d.line((ex, ys + h * 0.12, ex + facing * h * 0.05, ys - h * 0.02), fill=col, width=aw)
    elif pose == "shovel":
        sw_ = math.sin(phase) * 0.5
        hx, hy_ = x + facing * h * 0.22, ys + h * 0.22 + sw_ * h * 0.08
        d.line((x, ys + 4, hx, hy_), fill=col, width=aw)
        tipx, tipy = hx + facing * h * 0.32, hy_ + h * (0.28 + 0.2 * sw_)
        d.line((x - facing * h * 0.08, ys - h * 0.05, tipx, tipy), fill=col, width=max(2, aw - 1))
        d.polygon([(tipx - 9, tipy - 4), (tipx + 9, tipy - 4), (tipx + facing * 4, tipy + 14)], fill=col)
    elif pose == "rope":
        d.line((x - facing * 2, ys + 4, x + facing * h * 0.2, ys + h * 0.2), fill=col, width=aw)
    else:
        for s in (1, -1):
            d.line((x + s * sx_ * 0.7, ys + 4, x + s * sx_ * 0.8, ys + h * 0.32), fill=col, width=aw)

def body_img(scale=1.0):
    w, h = int(BODY_W * scale), int(BODY_H * scale)
    pad = 30
    im = Image.new("RGBA", (w + 2 * pad, h + 2 * pad), (0, 0, 0, 0))
    m = Image.new("L", im.size, 0); md = ImageDraw.Draw(m)
    md.rounded_rectangle((pad, pad, pad + w, pad + h), radius=h // 2, fill=255)
    md.ellipse((pad - 4, pad - 3, pad + h * 0.95, pad + h + 3), fill=255)  # kepala
    grad = vgrad(im.size[1], [(0, (226, 224, 216)), (0.5, (205, 203, 196)), (1, (160, 158, 152))], im.size[0])
    c = to_img(grad).convert("RGBA"); c.putalpha(m)
    d = ImageDraw.Draw(c)
    for fx in (0.22, 0.5, 0.78):  # ikatan kafan
        xx = pad + w * fx
        d.line((xx, pad + 2, xx, pad + h - 2), fill=(150, 148, 142, 255), width=max(2, int(3 * scale)))
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    sm = m.filter(ImageFilter.GaussianBlur(8)).point(lambda v: int(v * 0.5))
    shc = Image.new("RGBA", im.size, (0, 0, 0, 0)); shc.putalpha(sm)
    out = Image.alpha_composite(im, shc.transform(im.size, Image.AFFINE, (1, 0, 0, 0, 1, -6)))
    return Image.alpha_composite(out, c)

def keranda_img():
    w, h = 250, 110
    im = Image.new("RGBA", (w + 80, h + 20), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    x0 = 40
    d.rectangle((x0 - 38, h - 14, x0 + w + 38, h - 6), fill=(30, 24, 18, 255))  # tandu
    d.rectangle((x0, h - 52, x0 + w, h - 10), fill=(26, 58, 40, 255))
    d.chord((x0, h - 110, x0 + w, h - 10), 180, 360, fill=(30, 68, 46, 255))
    d.line((x0, h - 52, x0 + w, h - 52), fill=(180, 160, 90, 200), width=3)
    d.rectangle((x0, h - 18, x0 + w, h - 12), fill=(150, 130, 70, 200))
    return im

# ---------------- latar statis ----------------
def build_cs():
    """Potongan melintang: langit, permukaan, tanah, liang terbuka."""
    sky_n = vgrad(SURF, [(0, (10, 14, 28)), (0.6, (20, 22, 36)), (0.9, (48, 32, 30)), (1, (70, 42, 30))])
    sky_d = vgrad(SURF, [(0, (40, 62, 98)), (0.55, (120, 120, 140)), (0.85, (226, 160, 110)), (1, (240, 186, 120))])
    soil = vgrad(H - SURF, [(0, (52, 40, 30)), (0.15, (38, 29, 22)), (0.6, (24, 18, 14)), (1, (13, 10, 8))])
    rng = np.random.default_rng(4)
    soil += rng.normal(0, 2.2, soil.shape[:2])[..., None]
    for k in range(9):  # lapisan tanah
        yy = int(rng.uniform(40, H - SURF - 40))
        soil[yy:yy + int(rng.uniform(2, 6))] *= 0.88
    soil_img = to_img(soil).convert("RGBA")
    d = ImageDraw.Draw(soil_img)
    for _ in range(260):  # kerikil
        x, y = rng.uniform(0, W), rng.uniform(10, H - SURF)
        a, b = rng.uniform(3, 9), rng.uniform(2, 6)
        g = int(rng.uniform(60, 110))
        d.ellipse((x - a, y - b, x + a, y + b), fill=(g, g - 8, g - 18, int(rng.uniform(70, 170))))
    for _ in range(14):  # akar
        x = rng.uniform(0, W); y = 0; pts = [(x, y)]
        for k in range(int(rng.uniform(5, 12))):
            x += rng.uniform(-14, 14); y += rng.uniform(10, 22); pts.append((x, y))
        d.line(pts, fill=(70, 54, 36, 140), width=2)
    # liang terbuka
    shaft = vgrad(CH_Y0 - SURF, [(0, (18, 16, 16)), (1, (8, 8, 9))], SH_X1 - SH_X0)
    open_l = soil_img.copy()
    open_l.paste(to_img(shaft), (SH_X0, 0))
    od = ImageDraw.Draw(open_l)
    od.rectangle((CH_X0, CH_Y0 - SURF, CH_X1, CH_Y1 - SURF), fill=(6, 6, 7, 255))
    # tanah urug (untuk menimbun liang)
    fill = soil[0:CH_Y0 - SURF, SH_X0:SH_X1] * 1.22 + 6
    fill_img = to_img(fill).convert("RGBA"); fd = ImageDraw.Draw(fill_img)
    for _ in range(60):
        x, y = rng.uniform(0, SH_X1 - SH_X0), rng.uniform(0, CH_Y0 - SURF)
        a = rng.uniform(2, 6); fd.ellipse((x - a, y - a * .7, x + a, y + a * .7), fill=(96, 78, 58, 150))
    # dinding pemisah lahad (papan) di atas ruang
    fg = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    fg.paste(open_l, (0, SURF))
    fd2 = ImageDraw.Draw(fg)
    # garis permukaan + rumput tipis
    fd2.rectangle((0, SURF - 3, W, SURF + 2), fill=(30, 26, 22, 255))
    for x in range(0, W, 6):
        if SH_X0 - 4 < x < SH_X1 + 4: continue
        hh = rng.uniform(3, 10)
        fd2.line((x, SURF - 1, x + rng.uniform(-2, 2), SURF - hh), fill=(14, 16, 14, 255), width=2)
    # siluet horizon: pepohonan + nisan
    hz = Image.new("RGBA", (W, H), (0, 0, 0, 0)); hd = ImageDraw.Draw(hz)
    for x, hh, ww in [(30, 300, 80), (95, 230, 66), (160, 170, 50), (930, 200, 58), (990, 300, 84), (1060, 240, 70)]:
        cypress(hd, x, SURF, hh, ww, col=(26, 28, 40))
    for x, hh in [(240, 34), (300, 26), (800, 30), (850, 24)]:
        hd.rounded_rectangle((x - 9, SURF - hh, x + 9, SURF), radius=7, fill=(70, 72, 82, 255))
    return dict(sky_n=to_img(sky_n).convert("RGBA"), sky_d=to_img(sky_d).convert("RGBA"),
                fg=fg, hz=hz, fill=fill_img)

def build_cem(dawn):
    """Pemakaman lebar (adegan pembuka/penutup)."""
    if not dawn:
        sky = vgrad(H, [(0, (8, 12, 26)), (0.3, (16, 20, 38)), (0.43, (52, 36, 40)), (0.5, (84, 48, 34)), (0.56, (30, 26, 34)), (1, (10, 10, 16))])
    else:
        sky = vgrad(H, [(0, (44, 70, 110)), (0.3, (120, 126, 150)), (0.43, (232, 170, 120)), (0.5, (246, 196, 132)), (0.56, (92, 78, 82)), (1, (30, 28, 34))])
    img = to_img(sky).convert("RGBA")
    hy = int(H * 0.5)
    glow = radial(W, H, 540, hy, 700, 220, (255, 170, 100) if dawn else (190, 90, 50), 1.6, 0.55 if dawn else 0.35)
    img = Image.alpha_composite(img, glow)
    if dawn:
        img = Image.alpha_composite(img, radial(W, H, 540, hy, 140, 140, (255, 236, 190), 1.2, 0.9))
    d = ImageDraw.Draw(img)
    gcol = (24, 22, 26) if not dawn else (46, 40, 42)
    d.rectangle((0, hy, W, H), fill=gcol + (255,))
    land = vgrad(H - hy, [(0, gcol), (1, (12, 12, 16) if not dawn else (26, 24, 28))])
    img.paste(to_img(land), (0, hy))
    d = ImageDraw.Draw(img)
    rng = np.random.default_rng(11)
    # jalan setapak (penutup)
    if dawn:
        poly = [(300, H), (820, H), (600, hy + 260), (552, hy + 4), (528, hy + 4), (470, hy + 260)]
        d.polygon(poly, fill=(120, 100, 86, 255))
    # nisan dengan perspektif
    for row in range(7):
        yy = hy + 40 + row ** 1.7 * 26
        s = 0.5 + row * 0.3
        n = 3 + row
        for k in range(n):
            x = (k + rng.uniform(0.1, 0.9)) / n * W
            if dawn and abs(x - 540) < 70 + row * 18: continue
            hh, ww = 40 * s * rng.uniform(0.8, 1.2), 22 * s
            g = int(48 + row * 7) if not dawn else int(80 + row * 6)
            d.rounded_rectangle((x - ww / 2, yy - hh, x + ww / 2, yy), radius=int(ww / 2.2), fill=(g, g, g + 6, 255))
    mist = radial(W, H, 540, hy + 60, 900, 90, (120, 120, 140) if not dawn else (240, 210, 180), 1.4, 0.18)
    img = Image.alpha_composite(img, mist); d = ImageDraw.Draw(img)
    # pohon cemara
    for x, hh, ww in [(40, 760, 150), (150, 560, 110), (250, 380, 80), (860, 420, 90), (960, 720, 150), (1050, 560, 110)]:
        cypress(d, x, hy + 40, hh, ww, col=(6, 7, 10) if not dawn else (20, 20, 26))
    # makam baru di depan
    d.chord((150, 1440, 760, 1600), 180, 360, fill=(70, 52, 36, 255) if not dawn else (96, 74, 54, 255))
    for _ in range(80):
        x, y = rng.uniform(190, 720), rng.uniform(1470, 1520)
        d.ellipse((x - 2, y - 2, x + 2, y + 2), fill=(140, 110, 70, 200))
    d.rounded_rectangle((150, 1300, 205, 1520), radius=24, fill=(150, 150, 156, 255) if not dawn else (176, 172, 170, 255))
    return img

def build_house():
    """Rumah dengan jendela menyala (adegan 2), di bawah langit tinggi."""
    tall = vgrad(2 * H, [(0, (4, 6, 14)), (0.5, (10, 14, 28)), (0.72, (18, 20, 34)), (0.8, (40, 30, 34)), (0.84, (22, 20, 26)), (1, (10, 10, 14))])
    img = to_img(tall).convert("RGBA")
    st, _ = stars_layer(int(2 * H * 0.8), 520, 21)
    img.alpha_composite(st, (0, 0))
    d = ImageDraw.Draw(img)
    gy = int(2 * H * 0.83)
    d.rectangle((0, gy, W, 2 * H), fill=(12, 12, 16, 255))
    # rumah
    hx0, hx1, hy0 = 250, 830, gy - 420
    d.rectangle((hx0, hy0, hx1, gy), fill=(14, 14, 20, 255))
    d.polygon([(hx0 - 50, hy0 + 4), (540, hy0 - 230), (hx1 + 50, hy0 + 4)], fill=(10, 10, 15, 255))
    d.rectangle((640, hy0 - 170, 690, hy0 - 60), fill=(10, 10, 15, 255))
    for x, hh, ww in [(80, 640, 130), (180, 420, 90), (960, 560, 120), (1040, 380, 80)]:
        cypress(d, x, gy, hh, ww)
    win = (470, hy0 + 140, 610, hy0 + 300)
    door = (330, hy0 + 200, 410, gy)
    d.rectangle(door, fill=(8, 8, 12, 255))
    return img, win, gy

def build_wall():
    a = vgrad(H, [(0, (20, 24, 34)), (0.78, (26, 30, 42)), (0.8, (12, 13, 18)), (1, (8, 8, 11))])
    rng = np.random.default_rng(5)
    a[:int(H * 0.79)] += rng.normal(0, 1.6, (int(H * 0.79), W))[..., None]
    img = to_img(a).convert("RGBA")
    d = ImageDraw.Draw(img)
    d.rectangle((0, int(H * 0.79), W, int(H * 0.79) + 10), fill=(36, 36, 44, 255))
    return img

def light_patch(progress):
    """Bias cahaya jendela yang merambat di dinding kosong."""
    L = Image.new("L", (W, H), 0); d = ImageDraw.Draw(L)
    x = lerp(860, 300, progress); y = 640; w = lerp(180, 340, progress); h = lerp(300, 520, progress)
    sk = lerp(40, 120, progress)
    poly = [(x, y), (x + w, y + sk * 0.3), (x + w + sk, y + h), (x + sk, y + h - sk * 0.2)]
    d.polygon(poly, fill=255)
    # kusen jendela
    cx = (poly[0][0] + poly[2][0]) / 2
    d.line(((poly[0][0] + poly[1][0]) / 2, (poly[0][1] + poly[1][1]) / 2, (poly[3][0] + poly[2][0]) / 2, (poly[3][1] + poly[2][1]) / 2), fill=0, width=10)
    d.line(((poly[0][0] + poly[3][0]) / 2, (poly[0][1] + poly[3][1]) / 2, (poly[1][0] + poly[2][0]) / 2, (poly[1][1] + poly[2][1]) / 2), fill=0, width=10)
    return L

# ---------------- teks ----------------
def word_layers(text, font, color, max_w=900, lh=None, italic=False):
    tmp = ImageDraw.Draw(Image.new("L", (1, 1)))
    words = text.split(); lines = []; cur = []
    for w_ in words:
        t = " ".join(cur + [w_])
        if tmp.textlength(t, font=font) <= max_w or not cur: cur.append(w_)
        else: lines.append(cur); cur = [w_]
    if cur: lines.append(cur)
    lh = lh or int(font.size * 1.42)
    items = []; sp = tmp.textlength(" ", font=font)
    for li, ln in enumerate(lines):
        widths = [tmp.textlength(w_, font=font) for w_ in ln]
        tw = sum(widths) + sp * (len(ln) - 1)
        x = W / 2 - tw / 2
        for w_, ww in zip(ln, widths):
            im = Image.new("RGBA", (int(ww) + 20, lh + 20), (0, 0, 0, 0))
            ImageDraw.Draw(im).text((10, 10 + lh / 2), w_, font=font, fill=color, anchor="lm")
            items.append((im, int(x) - 10, li * lh - 10))
            x += ww + sp
    return items, len(lines) * lh

def arabic_layer(text, size, max_w=940):
    lines = text.split("\n")
    s = size
    while s > 30:
        f = F(AR, s)
        if max(f.getlength(l) for l in lines) <= max_w: break
        s -= 2
    asc, desc = f.getmetrics(); lh = int((asc + desc) * 1.0)
    h = lh * len(lines) + 40
    m = Image.new("L", (W, h), 0); md = ImageDraw.Draw(m)
    for k, l in enumerate(lines):
        md.text((W / 2, 20 + asc + k * lh), l, font=f, fill=255, anchor="ms")
    c = Image.new("RGBA", (W, h), GOLD + (0,)); c.putalpha(m)
    g = Image.new("RGBA", (W, h), (220, 160, 70, 0)); g.putalpha(m.filter(ImageFilter.GaussianBlur(10)).point(lambda v: int(v * 0.35)))
    out = Image.alpha_composite(g, c)
    bb = m.getbbox()
    out = out.crop((0, max(0, bb[1] - 14), W, min(h, bb[3] + 14)))
    return out

def src_layer(text):
    f = F(MONO, 20)
    tmp = ImageDraw.Draw(Image.new("L", (1, 1)))
    tw = sum(tmp.textlength(c, font=f) for c in text) + 4 * (len(text) - 1)
    im = Image.new("RGBA", (W, 60), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.line((W / 2 - 14, 8, W / 2 + 14, 8), fill=GOLD + (150,), width=2)
    x = W / 2 - tw / 2
    for c in text:
        d.text((x, 38), c, font=f, fill=GOLD + (230,), anchor="lm"); x += tmp.textlength(c, font=f) + 4
    return im

# Blok teks: (mulai, selesai, [item]) ; item = (jenis, isi, tunda)
BLOCKS = [
    (0.9, 11.4, [("id", "Malam tiba. Satu perjalanan dunia telah berakhir.", 0)]),
    (12.7, 24.4, [("ar", "وَجَاءَتْ سَكْرَةُ الْمَوْتِ بِالْحَقِّ", 0),
                  ("tr", "“Dan datanglah sakaratul maut dengan sebenar-benarnya.”", 1.6),
                  ("src", "SURAH QAF AYAT 19", 3.6)]),
    (25.7, 36.2, [("ar", "قُلْ يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ الَّذِي وُكِّلَ بِكُمْ", 0),
                  ("id", "Malaikat Maut ditugaskan mengambil jiwa.", 1.8),
                  ("id", "Hakikatnya hanya Allah yang mengetahui.", 4.6),
                  ("src", "SURAH AS-SAJDAH AYAT 11", 6.4)]),
    (39.7, 57.4, [("id", "Dalam hadis al-Bara’ bin ‘Azib radhiyallahu ‘anhu, Rasulullah shalallahu alaihi wasallam mengabarkan:", 0),
                  ("trg", "bagi seorang mukmin, datang kabar ampunan dan keridaan Allah.", 6.2),
                  ("src", "RIWAYAT ABU DAWUD, AN-NASA’I, DAN AHMAD", 9.5)]),
    (58.8, 71.4, [("id", "Ruh diangkat.", 0), ("id", "Catatannya ditulis.", 2.4),
                  ("arx", "عِلِّيِّينَ", 4.2, 4.0),
                  ("id", "Kemudian ia dikembalikan ke bumi—sebagaimana disebut dalam riwayat.", 6.6)]),
    (72.7, 80.2, [("id", "Jenazah dimandikan, dikafani, disalatkan, lalu diantarkan dengan hormat.", 0)]),
    (80.9, 89.5, [("ar", "أَسْرِعُوا بِالْجِنَازَةِ", 0),
                  ("tr", "“Segerakanlah pengurusan jenazah…”", 1.4),
                  ("src", "SAHIH AL-BUKHARI NOMOR 1315", 3.0)]),
    (90.7, 96.6, [("id", "Tanah menutup liang.", 0), ("id", "Para pengantar mulai pulang.", 2.2)]),
    (97.2, 104.6, [("ar", "وَمِن وَرَائِهِم بَرْزَخٌ إِلَىٰ يَوْمِ يُبْعَثُونَ", 0),
                   ("tr", "“Di belakang mereka ada barzakh hingga hari mereka dibangkitkan.”", 1.6),
                   ("src", "SURAH AL-MU’MINUN AYAT 100", 3.6)]),
    (105.7, 119.4, [("id", "Saat mereka berpaling, hadis sahih menyebut mayit mendengar langkah sandal mereka.", 0),
                    ("src", "SAHIH AL-BUKHARI NOMOR 1338", 4.2)]),
    (120.7, 124.9, [("id", "Lalu dua malaikat datang dan bertanya.", 0)]),
    (125.5, 129.5, [("ar", "مَنْ رَبُّكَ؟", 0), ("q", "“Siapa Tuhanmu?”", 0.9)]),
    (130.1, 134.1, [("ar", "مَا دِينُكَ؟", 0), ("q", "“Apa agamamu?”", 0.9)]),
    (134.7, 139.7, [("ar", "مَا هَذَا الرَّجُلُ الَّذِي بُعِثَ فِيكُمْ؟", 0), ("q", "“Siapa rasul yang diutus kepadamu?”", 1.0)]),
    (140.7, 145.6, [("id", "Iman yang benar menjadi keteguhan dengan izin Allah.", 0)]),
    (146.1, 154.6, [("ar", "اسْتَغْفِرُوا لِأَخِيكُمْ وَسَلُوا لَهُ التَّثْبِيتَ\nفَإِنَّهُ الْآنَ يُسْأَلُ", 0),
                    ("tr", "“Mohonkan ampun dan keteguhan bagi saudaramu, karena ia sedang ditanya.”", 1.8),
                    ("src", "SUNAN ABI DAWUD NOMOR 3221", 4.4)]),
    (155.7, 163.0, [("id", "Jangan sibuk menebak keadaan mereka.", 0), ("id", "Doakan yang telah pergi.", 1.8),
                    ("id", "Siapkan bekal untuk perjalanan kita sendiri.", 3.4)]),
    (163.6, 169.2, [("trg", "Semoga Allah melimpahkan rahmat dan mengurniakan keteguhan.", 0)]),
]
TEXT_TOP = 230

def build_text():
    out = []
    for (t0, t1, items) in BLOCKS:
        y = TEXT_TOP; elems = []
        for it in items:
            kind, content, delay = it[0], it[1], it[2]
            dur = it[3] if len(it) > 3 else None
            if kind in ("ar", "arx"):
                im = arabic_layer(content, 64 if kind == "ar" else 96)
                elems.append(("img", im, y, delay, dur)); y += im.height + 16
            elif kind == "src":
                im = src_layer(content); elems.append(("img", im, y + 6, delay, dur)); y += 70
            else:
                font = {"id": F(LORA_R, 46), "tr": F(LORA_I, 40), "trg": F(LORA_I, 44), "q": F(LORA_R, 52)}[kind]
                col = {"id": WHITE, "tr": (225, 222, 214), "trg": GOLD, "q": WHITE}[kind]
                words, hh = word_layers(content, font, col, 900 if kind != "tr" else 880)
                elems.append(("words", words, y, delay, dur)); y += hh + 18
        out.append((t0, t1, elems))
    return out

# ---------------- precompute ----------------
G = {}
def build():
    G["cs"] = build_cs()
    G["cem_n"] = build_cem(False); G["cem_d"] = build_cem(True)
    G["moon_cem"] = moon_layer(780, 560, 26)
    G["moon_cs"] = moon_layer(840, 330, 20, 0.8)
    st, pts = stars_layer(SURF, 140, 3, SURF - 120); G["stars_cs"] = st
    st2, _ = stars_layer(int(H * 0.45), 260, 9); G["stars_cem"] = st2
    G["house"], G["win"], G["house_gy"] = build_house()
    G["wall"] = build_wall()
    ext = vgrad(H, [(0, (3, 4, 10)), (1, (10, 14, 28))])
    ei = to_img(ext).convert("RGBA"); s3, _ = stars_layer(H, 420, 17); ei.alpha_composite(s3)
    G["ext_sky"] = ei
    G["dark"] = Image.alpha_composite(to_img(vgrad(H, [(0, (4, 5, 10)), (0.6, (8, 10, 20)), (1, (3, 3, 6))])).convert("RGBA"),
                                      stars_layer(H, 120, 33)[0].point(lambda v: v // 2))
    G["body"] = body_img()
    G["keranda"] = keranda_img()
    wg = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    G["blue"] = radial(W, H, 540, CH_Y0 + 20, 260, 260, (110, 150, 230), 1.6, 0.85)
    G["blue_dim"] = radial(W, H, 540, CH_Y0 + 80, 200, 150, (110, 150, 230), 1.8, 0.4)
    G["warm_win"] = radial(W, 2 * H, (G["win"][0] + G["win"][2]) / 2, (G["win"][1] + G["win"][3]) / 2, 260, 260, (255, 190, 110), 1.8, 0.55) if False else None
    G["text"] = build_text()
    G["topshade"] = to_img(np.dstack([np.zeros((H, W, 3)), np.repeat(np.interp(np.arange(H), [0, 200, 760, 900], [150, 120, 40, 0])[:, None], W, 1)])).convert("RGBA")
    wm = Image.new("RGBA", (W, 60), (0, 0, 0, 0))
    ImageDraw.Draw(wm).text((W / 2, 30), "@alurziyadahku", font=F(MONT, 24), fill=(235, 232, 225, 150), anchor="mm")
    G["wm"] = wm
    build_extras()

# ---------------- adegan ----------------
def scene_cem(t, dawn):
    base = G["cem_d"] if dawn else G["cem_n"]
    fr = base.copy()
    if not dawn:
        fr.alpha_composite(G["stars_cem"], (0, 0))
        fr.alpha_composite(G["moon_cem"])
    z = 1.0 + 0.05 * (t / 12.0 if not dawn else (t - 155) / 15.0)
    if z > 1.001:
        cw, ch = int(W / z), int(H / z)
        x0, y0 = (W - cw) // 2, int((H - ch) * 0.55)
        fr = fr.crop((x0, y0, x0 + cw, y0 + ch)).resize((W, H), Image.BILINEAR)
    cem_extra(fr, t, dawn)
    return fr

def scene_house(t):
    img, win, gy = G["house"], G["win"], G["house_gy"]
    p = ease((t - 18.0) / 6.0)            # kamera naik ke langit
    y0 = int(lerp(H, 0, p))
    fr = img.crop((0, y0, W, y0 + H))
    lit = 1.0 - ease((t - 13.5) / 4.5) * 0.92   # cahaya jendela meredup
    lit *= 1 + 0.12 * math.sin(t * 17) * math.sin(t * 5.3)
    if 16.6 < t < 17.4: lit *= 0.3 + 0.7 * (int(t * 18) % 2)
    lit = max(0.0, min(1.0, lit))
    wl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(wl)
    wx0, wy0, wx1, wy1 = win; oy = -y0
    c = lerpc((40, 34, 30), (250, 196, 120), lit)
    d.rectangle((wx0, wy0 + oy, wx1, wy1 + oy), fill=c + (255,))
    d.line(((wx0 + wx1) / 2, wy0 + oy, (wx0 + wx1) / 2, wy1 + oy), fill=(14, 14, 20, 255), width=8)
    d.line((wx0, (wy0 + wy1) / 2 + oy, wx1, (wy0 + wy1) / 2 + oy), fill=(14, 14, 20, 255), width=8)
    fr.alpha_composite(wl)
    if lit > 0.05:
        g = radial(W, H, (wx0 + wx1) / 2, (wy0 + wy1) / 2 + oy, 320, 320, (255, 180, 100), 2.0, 0.45 * lit) if -400 < (wy0 + oy) < H + 400 else None
        if g is not None: fr.alpha_composite(g)
    house_extra(fr, t)
    return fr

def scene_dark(t):
    fr = G["dark"].copy()
    k = 1 - 0.5 * ease((t - 33) / 4)
    if k < 0.999: fr = Image.eval(fr.convert("RGB"), lambda v: int(v * k)).convert("RGBA")
    ecg_overlay(fr, t)
    return fr

def scene_wall(t):
    fr = G["wall"].copy()
    p = ease((t - 39) / 19)
    m = light_patch(p)
    sway = int(14 * math.sin(t * 0.9) + 6 * math.sin(t * 2.3))
    m = ImageChops.subtract(m, G["branch"].crop((100 + sway, 0, 100 + sway + W, H)).point(lambda v: int(v * 0.8)))
    m = m.filter(ImageFilter.GaussianBlur(10))
    a = 0.25 + 0.4 * ease((t - 40) / 8)
    lay = Image.new("RGBA", (W, H), (236, 200, 140, 0)); lay.putalpha(m.point(lambda v: int(v * a)))
    fr.alpha_composite(lay)
    wall_extra(fr, t)
    return fr

# ----- potongan melintang (58-155 detik) -----
CARRY_PEOPLE = [-112, -94, 94, 112]
FOLLOWERS = [(200, 0.0), (250, 0.4), (300, 0.8)]
STAND_X = [330, 362, 718, 750]
FOLLOW_STAND = [800, 842, 884]

def keranda_x(t):
    return lerp(1300, 540, ease((t - 72.0) / 7.2)) if t < 79.2 else 540

def cs_people(d, t, oy):
    """Siluet pengantar di permukaan (koordinat CS, ditambah offset oy)."""
    yf = SURF + oy
    if t < 72 or t > 109: return
    if t < 79.2:
        xc = keranda_x(t); ph = t * 5.2
        for k, dx in enumerate(CARRY_PEOPLE):
            person(d, xc + dx, yf, 140, ph + k * 1.3, "walk", -1)
        for k, (dx, pd) in enumerate(FOLLOWERS):
            person(d, xc + dx + 60, yf, 132, ph + pd * 3, "walk", -1)
        return
    # berdiri di tepi liang lalu pulang
    pos = []
    for k, sx in enumerate(STAND_X):
        x0 = 540 + CARRY_PEOPLE[k]
        x = lerp(x0, sx, ease((t - 79.2) / 1.6))
        pos.append((x, "L" if sx < 540 else "R", k * 0.6))
    for k, sx in enumerate(FOLLOW_STAND):
        x0 = 540 + FOLLOWERS[k][0] + 60
        pos.append((lerp(x0, sx, ease((t - 79.2) / 2.0)), "R", 1.2 + k * 0.7))
    for k, (x, side, stg) in enumerate(pos):
        tl = t - (97.4 + stg)
        if tl > 0:
            x = x + (-1 if side == "L" else 1) * tl * 70
            if x < -80 or x > W + 80: continue
            person(d, x, yf, 136, tl * 5.0, "walk", -1 if side == "L" else 1)
        else:
            pose = "rope" if (81 <= t <= 87.5 and k in (1, 2)) else "stand"
            if 90.6 <= t <= 97.2 and k in (1, 2): pose = "shovel"
            person(d, x, yf, 136, t * 4.2 + k, pose, 1 if side == "L" else -1)

def cs_frame(t):
    cs = G["cs"]
    dawn = ease((t - 141) / 13) if t > 140 else 0.0
    fr = cs["sky_n"].copy() if dawn <= 0 else Image.blend(cs["sky_n"], cs["sky_d"], dawn)
    fr = fr.crop((0, 0, W, SURF)); full = Image.new("RGBA", (W, H), (0, 0, 0, 255)); full.paste(fr, (0, 0))
    fr = full
    if dawn < 1:
        st = G["stars_cs"] if dawn <= 0 else Image.blend(G["stars_cs"], Image.new("RGBA", G["stars_cs"].size, (0, 0, 0, 0)), dawn)
        fr.alpha_composite(st, (0, 0))
        mo = G["moon_cs"]
        if dawn > 0: mo = mo.copy(); mo.putalpha(mo.getchannel("A").point(lambda v: int(v * (1 - dawn))))
        fr.alpha_composite(mo)
    if dawn > 0:
        fr.alpha_composite(radial(W, H, 540, SURF, 620, 260, (255, 190, 120), 1.5, 0.6 * dawn))
    fr.alpha_composite(cs["hz"])
    fr.alpha_composite(cs["fg"])
    # timbunan liang
    ff = ease((t - 90.6) / 6.8) if t > 90.6 else 0.0
    if ff > 0:
        hh = CH_Y0 - SURF
        rows = int(hh * ff)
        if rows > 0:
            part = cs["fill"].crop((0, hh - rows, SH_X1 - SH_X0, hh))
            fr.alpha_composite(part, (SH_X0, CH_Y0 - rows))
        d = ImageDraw.Draw(fr)
        mh = 34 * ease((t - 95.5) / 2.5)
        if mh > 1:
            d.chord((SH_X0 - 50, SURF - mh, SH_X1 + 50, SURF + mh), 180, 360, fill=(74, 58, 42, 255))
        if ff < 1:  # butiran tanah jatuh
            rng = np.random.default_rng(int(t * 30))
            for _ in range(26):
                x = rng.uniform(SH_X0 + 10, SH_X1 - 10); y = rng.uniform(SURF, CH_Y0 - rows)
                d.ellipse((x - 3, y - 3, x + 3, y + 3), fill=(92, 72, 52, 230))
    # jenazah
    d = ImageDraw.Draw(fr)
    if 72 <= t < 79.8:
        kx = keranda_x(t); kr = G["keranda"]
        bob = math.sin(t * 5.2) * 2
        a = 1 - fade(t, 79.2, 0.6)
        k_ = kr if a > 0.99 else kr.copy()
        if a <= 0.99: k_.putalpha(kr.getchannel("A").point(lambda v: int(v * a)))
        fr.alpha_composite(k_, (int(kx - kr.width / 2), int(SURF - 140 * 0.80 - kr.height + 16 + bob)))
    if t >= 79.4:
        b = G["body"]
        p = ease((t - 81.0) / 6.2)
        by = lerp(SURF - 70, BODY_Y_CH - BODY_H, p)
        a = fade(t, 79.4, 0.8)
        b_ = b if a > 0.99 else b.copy()
        if a <= 0.99: b_.putalpha(b.getchannel("A").point(lambda v: int(v * a)))
        if 81 <= t <= 87.6:  # tali
            for ex, hx in ((SH_X0 + 30, 362 + 26), (SH_X1 - 30, 718 - 26)):
                d.line((hx, SURF - 136 * 0.62, ex, by + 18), fill=(150, 140, 120, 200), width=2)
        fr.alpha_composite(b_, (int(540 - b.width / 2), int(by - 30)))
    cs_people(ImageDraw.Draw(fr), t, 0)
    # doa di sisi makam (fajar)
    if t > 141:
        a = fade(t, 141.5, 1.5)
        pl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); pd_ = ImageDraw.Draw(pl)
        person(pd_, 760, SURF, 146, 0, "pray", -1)
        pl.putalpha(pl.getchannel("A").point(lambda v: int(v * a)))
        fr.alpha_composite(pl)
    # cahaya biru samar saat pertanyaan (tanpa sosok)
    if 120 < t < 141:
        lvl = 0.25 * fade(t, 121, 2.5)
        for q0 in (125.5, 130.1, 134.7):
            lvl += 0.55 * math.exp(-((t - q0 - 0.6) / 1.4) ** 2)
        lvl *= 1 - fade(t, 139.4, 1.4)
        if lvl > 0.01:
            bl = G["blue"].copy(); bl.putalpha(bl.getchannel("A").point(lambda v: int(min(255, v * lvl))))
            fr.alpha_composite(bl)
    fr = cs_extra(fr, t)
    # kamera
    z = 1.0
    if t > 111: z = lerp(1.0, 1.25, ease((t - 111) / 8))
    if t > 119: z = lerp(1.25, 2.0, ease((t - 119) / 2.5))
    if t > 138.8: z = lerp(2.0, 1.0, ease((t - 138.8) / 2.6))
    if z > 1.001:
        cy = lerp(H / 2, CH_Y0 + 60, min(1, (z - 1) / 0.25) if z <= 1.25 else 1.0)
        cw, ch = W / z, H / z
        y0 = max(0, min(H - ch, cy - ch / 2)); x0 = (W - cw) / 2
        fr = fr.crop((int(x0), int(y0), int(x0 + cw), int(y0 + ch))).resize((W, H), Image.BILINEAR)
    return fr

def scene_cs(t):
    if t < 72:  # kamera turun dari langit ke bumi
        p = ease((t - 58.6) / 12.0)
        shift = int((1 - p) * H)
        base = cs_frame(72.0 - 0.001) if False else cs_frame(60.0)
        fr = Image.new("RGBA", (W, H), (0, 0, 0, 255))
        if shift < H: fr.paste(base.crop((0, 0, W, H - shift)), (0, shift))
        if shift > 0: fr.paste(G["ext_sky"].crop((0, H - shift, W, H)), (0, 0))
        return fr
    return cs_frame(t)

SCENES = [(0, 12.4, lambda t: scene_cem(t, False)),
          (11.6, 25.4, scene_house),
          (24.6, 39.4, scene_dark),
          (38.6, 58.4, scene_wall),
          (57.6, 155.4, scene_cs),
          (154.6, 170.0, lambda t: scene_cem(t, True))]

def compose(t):
    act = [(a, b, f) for (a, b, f) in SCENES if a <= t < b]
    if len(act) == 1: fr = act[0][2](t)
    else:
        (a1, b1, f1), (a2, b2, f2) = act[0], act[1]
        x = ease((t - a2) / (b1 - a2))
        fr = Image.blend(f1(t).convert("RGB"), f2(t).convert("RGB"), x).convert("RGBA")
    return fr

def draw_text(fr, t):
    for (t0, t1, elems) in G["text"]:
        if t < t0 - 0.1 or t > t1 + 0.1: continue
        out = 1 - fade(t, t1 - 0.6, 0.6)
        for kind, obj, y, delay, dur in elems:
            ts = t0 + delay
            local_out = out
            if dur is not None: local_out = min(out, 1 - fade(t, ts + dur - 0.5, 0.5))
            if kind == "img":
                a = fade(t, ts, 0.8) * local_out
                if a > 0.01:
                    im = obj if a > 0.99 else obj.copy()
                    if a <= 0.99: im.putalpha(obj.getchannel("A").point(lambda v: int(v * a)))
                    fr.alpha_composite(im, (int((W - obj.width) / 2), int(y + (1 - fade(t, ts, 0.8)) * 8)))
            else:
                for k, (im, x, yy) in enumerate(obj):
                    a = fade(t, ts + k * 0.13, 0.45) * local_out
                    if a <= 0.01: continue
                    im2 = im if a > 0.99 else im.copy()
                    if a <= 0.99: im2.putalpha(im.getchannel("A").point(lambda v: int(v * a)))
                    fr.alpha_composite(im2, (x, int(y + yy)))


# ======================= EFEK TAMBAHAN (versi mencekam) =======================
from PIL import ImageChops

# detak jantung: melambat lalu berhenti (dipakai visual EKG + audio)
def _heartbeats():
    out = []; t = 12.9; iv = 0.85
    while t < 34.2:
        out.append(t); iv = min(2.6, iv * 1.075); t += iv
    return out
HEARTBEATS = _heartbeats()
FLATLINE = HEARTBEATS[-1] + 1.0

QUESTIONS = (125.5, 130.1, 134.7)
SHAKES = [(121.2, 1.4, 16), (125.5, 0.9, 12), (130.1, 0.9, 12), (134.7, 1.1, 15), (90.8, 6.5, 2.5), (99.0, 1.6, 5), (112.0, 1.4, 4)]
THUNDER = (76.0, 99.0, 112.0)
STEP_RIPPLES = [97.6 + k * 0.42 for k in range(int((113 - 97.6) / 0.42))]

def build_extras():
    rng = np.random.default_rng(77)
    # kabut bergerak
    fog = Image.new("L", (2 * W, 700), 0); fd = ImageDraw.Draw(fog)
    for _ in range(70):
        x, y = rng.uniform(0, 2 * W), rng.uniform(120, 580)
        rx, ry = rng.uniform(120, 320), rng.uniform(30, 70)
        fd.ellipse((x - rx, y - ry, x + rx, y + ry), fill=int(rng.uniform(40, 110)))
    fog = fog.filter(ImageFilter.GaussianBlur(40))
    G["fog"] = fog
    # bayangan ranting
    br = Image.new("L", (W + 200, H), 0); bd = ImageDraw.Draw(br)
    for k in range(7):
        x, y = rng.uniform(300, W + 100), rng.uniform(500, 1100); pts = [(x, y)]
        for j in range(9):
            x -= rng.uniform(30, 70); y += rng.uniform(-30, 40); pts.append((x, y))
            if rng.uniform() < 0.5:
                bd.line((x, y, x - rng.uniform(20, 60), y - rng.uniform(20, 60)), fill=255, width=5)
        bd.line(pts, fill=255, width=int(rng.uniform(7, 14)))
    G["branch"] = br
    # berkas cahaya (abstrak) untuk liang lahad
    bh = CH_Y1 - SURF + 40; bw = 140
    xs = np.linspace(-1, 1, bw)
    prof = np.exp(-(xs / 0.32) ** 2) * 0.95 + np.exp(-(xs / 0.08) ** 2) * 0.6
    a = np.repeat(prof[None, :], bh, 0) * np.linspace(0.55, 1.0, bh)[:, None]
    arr = np.zeros((bh, bw, 4), np.float32); arr[..., 0] = 140; arr[..., 1] = 180; arr[..., 2] = 255
    arr[..., 3] = np.clip(a, 0, 1) * 235
    beam = Image.fromarray(arr.astype(np.uint8), "RGBA")
    bdr = ImageDraw.Draw(beam)
    for _ in range(140):
        x, y = rng.normal(bw / 2, 12), rng.uniform(0, bh)
        bdr.ellipse((x - 1.2, y - 1.2, x + 1.2, y + 1.2), fill=(230, 240, 255, 200))
    G["beam"] = beam
    # sinar matahari fajar
    rays = Image.new("L", (W, H), 0); rd = ImageDraw.Draw(rays)
    cx, cy = 540, int(H * 0.5)
    for k in range(26):
        a0 = math.radians(180 + k * 7 + rng.uniform(-2, 2)); a1 = a0 + math.radians(rng.uniform(1.5, 3.5))
        rd.polygon([(cx, cy), (cx + 2000 * math.cos(a0), cy + 2000 * math.sin(a0)), (cx + 2000 * math.cos(a1), cy + 2000 * math.sin(a1))], fill=int(rng.uniform(60, 140)))
    G["rays"] = rays.filter(ImageFilter.GaussianBlur(6))
    # vignet + butiran film
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    dv = np.sqrt(((xx - W / 2) / (W * 0.62)) ** 2 + ((yy - H * 0.52) / (H * 0.6)) ** 2)
    G["vig_a"] = Image.fromarray((np.clip((dv - 0.35) / 0.75, 0, 1) ** 1.6 * 255).astype(np.uint8), "L")
    grains = []
    for k in range(6):
        n = rng.normal(0, 1, (H // 2, W // 2))
        L = np.zeros((H // 2, W // 2, 4), np.uint8)
        L[..., :3] = np.where(n[..., None] > 0, 255, 0)
        L[..., 3] = np.clip(np.abs(n) * 9, 0, 22).astype(np.uint8)
        grains.append(Image.fromarray(L, "RGBA").resize((W, H), Image.NEAREST))
    G["grain"] = grains
    # debu melayang
    G["dust"] = [(rng.uniform(0, W), rng.uniform(0, H), rng.uniform(-6, 6), rng.uniform(-14, -3), rng.uniform(0.6, 2.0), rng.uniform(0, 6.28)) for _ in range(110)]
    G["lantern"] = radial(260, 260, 130, 130, 130, 130, (255, 190, 110), 1.8, 0.7)
    G["clods"] = [(90.7 + k * 0.22 + rng.uniform(0, 0.15), rng.uniform(SH_X0 + 20, SH_X1 - 20), rng.uniform(5, 11)) for k in range(30)]

def draw_bat(d, x, y, s, flap):
    w = s * (0.6 + 0.4 * abs(math.sin(flap)))
    up = s * 0.5 * math.sin(flap)
    d.polygon([(x - s, y - up), (x - s * 0.45, y + s * 0.15), (x, y - s * 0.1), (x + s * 0.45, y + s * 0.15), (x + s, y - up), (x + s * 0.3, y + s * 0.35), (x, y + s * 0.2), (x - s * 0.3, y + s * 0.35)], fill=(2, 2, 4, 255))

def draw_bird(d, x, y, s, flap, col):
    up = s * 0.45 * math.sin(flap)
    d.line((x - s, y - up, x, y, x + s, y - up), fill=col, width=3)

def overlay_dust(fr, t, col, amount, region=None):
    if amount <= 0.01: return
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    for (x0, y0, vx, vy, r, ph) in G["dust"]:
        x = (x0 + vx * t + 14 * math.sin(t * 0.4 + ph)) % W
        y = (y0 + vy * t) % H
        if region and not (region[0] <= x <= region[2] and region[1] <= y <= region[3]): continue
        a = int(amount * (110 + 80 * math.sin(t * 1.3 + ph)))
        if a > 6: d.ellipse((x - r, y - r, x + r, y + r), fill=col + (a,))
    fr.alpha_composite(L)

def ecg_overlay(fr, t):
    """Garis detak jantung yang melambat lalu datar."""
    if t < 12.0 or t > 39.4: return
    strip_h = 260; y0 = 1180
    L = Image.new("RGBA", (W, strip_h), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    speed = 260.0
    pts = []
    beats = [b for b in HEARTBEATS if b < t + 0.1]
    for x in range(0, W + 1, 4):
        tau = t - (W - x) / speed
        v = 0.0
        for b in beats[-6:]:
            dt = tau - b
            amp = 1.0 - 0.06 * HEARTBEATS.index(b)
            v += amp * (-0.25 * math.exp(-((dt + 0.04) / 0.018) ** 2) + 1.0 * math.exp(-(dt / 0.02) ** 2) - 0.35 * math.exp(-((dt - 0.05) / 0.025) ** 2) + 0.18 * math.exp(-((dt - 0.26) / 0.06) ** 2))
        pts.append((x, strip_h / 2 - v * 95))
    a = fade(t, 12.6, 1.5) * (1 - fade(t, 38.0, 1.2))
    col = (130, 235, 200)
    d.line(pts, fill=col + (int(220 * a),), width=3)
    glow = L.filter(ImageFilter.GaussianBlur(7))
    fr.alpha_composite(glow, (0, y0)); fr.alpha_composite(L, (0, y0))
    # titik kepala garis
    hx, hy = pts[-1]
    hd = ImageDraw.Draw(fr)
    hd.ellipse((hx - 6, y0 + hy - 6, hx + 2, y0 + hy + 2), fill=(200, 255, 230, int(255 * a)))

def cem_extra(fr, t, dawn):
    # kabut bergerak
    off = int((t * 22) % W)
    fog = G["fog"].crop((off, 0, off + W, 700))
    col = (130, 130, 150) if not dawn else (250, 220, 190)
    fl = Image.new("RGBA", (W, 700), col + (0,)); fl.putalpha(fog.point(lambda v: int(v * 0.55)))
    fr.alpha_composite(fl, (0, int(H * 0.5) - 200))
    d = ImageDraw.Draw(fr)
    if not dawn:  # kelelawar melintas bulan
        for k, (s0, y, sp) in enumerate([(2.0, 520, 210), (3.1, 600, 260), (6.5, 470, 190)]):
            x = 1150 - (t - s0) * sp
            if -60 < x < 1150: draw_bat(d, x, y + 30 * math.sin(t * 2 + k), 22 - k * 3, t * 14 + k)
    else:
        rays = G["rays"].point(lambda v: int(v * 0.35 * fade(t, 156, 3)))
        rl = Image.new("RGBA", (W, H), (255, 220, 170, 0)); rl.putalpha(rays)
        fr.alpha_composite(rl)
        for k, (s0, y) in enumerate([(157.0, 700), (157.4, 740), (157.8, 680), (160.5, 620), (160.8, 650)]):
            x = -40 + (t - s0) * 150
            if -40 < x < W + 40: draw_bird(d, x, y + 6 * math.sin(t * 3 + k), 12, t * 12 + k, (30, 26, 30))
        overlay_dust(fr, t, (255, 230, 190), 0.6)

def house_extra(fr, t):
    overlay_dust(fr, t, (210, 210, 230), 0.25)
    ecg_overlay(fr, t)

def wall_extra(fr, t):
    overlay_dust(fr, t, (255, 225, 170), 0.9, (150, 500, 1050, 1300))

def cs_extra(fr, t):
    d = ImageDraw.Draw(fr)
    # hujan rintik (di atas tanah)
    rain = 0.0
    if 70 < t < 120: rain = fade(t, 70.5, 3) * (1 - fade(t, 116, 3))
    if rain > 0.01:
        L = Image.new("RGBA", (W, SURF), (0, 0, 0, 0)); rd = ImageDraw.Draw(L)
        rng = np.random.default_rng(5)
        xs = rng.uniform(0, W + 200, 260); ys = rng.uniform(0, SURF + 200, 260); sp = rng.uniform(1300, 1900, 260)
        for x, y, s in zip(xs, ys, sp):
            yy = (y + t * s) % (SURF + 200) - 100; xx = (x - t * s * 0.18) % (W + 200) - 100
            rd.line((xx, yy, xx - 7, yy + 34), fill=(170, 180, 205, int(110 * rain)), width=2)
        fr.alpha_composite(L, (0, 0))
    # kilat jauh
    for th in THUNDER:
        if th <= t < th + 0.5:
            k = (1 - (t - th) / 0.5) * (0.6 if int((t - th) * 20) % 3 else 1.0)
            fl = Image.new("RGBA", (W, SURF), (200, 210, 240, int(70 * k)))
            fr.alpha_composite(fl, (0, 0))
    # lentera pengantar
    if 72 <= t < 104:
        if t < 79.2:
            lx = keranda_x(t) + FOLLOWERS[0][0] + 60 - 22
        else:
            lx = lerp(keranda_x(79.2) + FOLLOWERS[0][0] + 38, FOLLOW_STAND[0] - 22, ease((t - 79.2) / 2.0))
            if t > 98.6: lx += (t - 98.6) * 70
        if lx < W + 60:
            fr.alpha_composite(G["lantern"], (int(lx - 130), int(SURF - 70 - 130)))
            d.rectangle((lx - 7, SURF - 82, lx + 7, SURF - 62), fill=(255, 214, 140, 255))
    # gumpalan tanah jatuh
    if 90.6 < t < 97.8:
        ff = ease((t - 90.6) / 6.8); top = CH_Y0 - int((CH_Y0 - SURF) * ff)
        for (s, x, r) in G["clods"]:
            if t < s: continue
            y = SURF + 0.5 * 2600 * (t - s) ** 2
            if y < top - r:
                d.ellipse((x - r, y - r * 0.8, x + r, y + r * 0.8), fill=(88, 68, 48, 255))
            elif t - s < 0.9:
                k = 1 - (t - s - math.sqrt(2 * max(1, top - SURF) / 2600)) / 0.4
                if k > 0:
                    pr = 14 + (1 - k) * 26
                    d.ellipse((x - pr, top - pr * 0.4, x + pr, top + pr * 0.25), outline=(140, 116, 86, int(160 * k)), width=2)
    # gelombang langkah sandal merambat ke dalam tanah
    if 104 < t < 117:
        L = Image.new("RGBA", (W, H), (0, 0, 0, 0)); ld = ImageDraw.Draw(L)
        for k, ts in enumerate(STEP_RIPPLES):
            dt = t - ts
            if 0 < dt < 1.6 and ts > 103:
                r = 40 + dt * 420; a = int(90 * (1 - dt / 1.6) * (1 - fade(ts, 108, 5)))
                sx = 200 if k % 2 == 0 else 900
                sx = sx - (ts - 97.4) * 70 if k % 2 == 0 else sx + (ts - 97.4) * 70 * 0.3
                if a > 3: ld.arc((sx - r, SURF - r * 0.75, sx + r, SURF + r * 0.75), 10, 170, fill=(220, 205, 175, a), width=3)
        fr.alpha_composite(L)
    # berkas cahaya turun ke liang (abstrak, tanpa sosok)
    if 120.9 < t < 140.5:
        grow = ease((t - 120.9) / 1.1); a = 1 - fade(t, 139.0, 1.4)
        fl_ = 0.85 + 0.15 * math.sin(t * 23) * math.sin(t * 7)
        bh = int(G["beam"].height * grow)
        if bh > 4:
            bm = G["beam"].crop((0, G["beam"].height - bh, G["beam"].width, G["beam"].height))
            bm.putalpha(bm.getchannel("A").point(lambda v: int(v * a * fl_)))
            for bx in (CH_X0 + 26, CH_X1 - 26):
                fr.alpha_composite(bm, (int(bx - bm.width / 2), CH_Y1 - bh))
        # debu runtuh di dalam liang
        rng = np.random.default_rng(9)
        for k in range(40):
            x = rng.uniform(CH_X0 + 10, CH_X1 - 10); s0 = rng.uniform(0, 4); sp = rng.uniform(60, 140)
            y = CH_Y0 + ((t - 121 + s0) * sp) % (CH_Y1 - CH_Y0)
            d.ellipse((x - 1.5, y - 1.5, x + 1.5, y + 1.5), fill=(170, 160, 150, int(150 * a)))
    # burung fajar
    if 145 < t < 156:
        for k, (s0, y) in enumerate([(145.5, 260), (145.8, 300), (146.1, 240), (149.0, 330)]):
            x = W + 40 - (t - s0) * 140
            if -40 < x < W + 40: draw_bird(d, x, y + 5 * math.sin(t * 3 + k), 11, t * 12 + k, (30, 28, 34))
    return fr

def shake_offset(t):
    dx = dy = 0.0
    for (t0, dur, amp) in SHAKES:
        if t0 <= t < t0 + dur:
            k = amp * (1 - (t - t0) / dur) ** 1.5
            dx += k * math.sin(t * 61.0 + t0); dy += k * math.cos(t * 47.0 + t0 * 2)
    return int(dx), int(dy)

def vignette_level(t):
    v = 0.55
    v += 0.25 * fade(t, 25, 2) * (1 - fade(t, 37, 2))
    v += 0.3 * fade(t, 90.6, 7) * (1 - fade(t, 139, 2.5))
    v += 0.15 * fade(t, 119, 2) * (1 - fade(t, 139, 2.5))
    return min(1.0, v)

def post_fx(fr, t):
    fi = int(t * FPS)
    # kilatan tiap pertanyaan
    for q in QUESTIONS:
        if q <= t < q + 0.45:
            k = 1 - (t - q) / 0.45
            fr.alpha_composite(Image.new("RGBA", (W, H), (190, 210, 255, int(55 * k))))
    v = vignette_level(t)
    vl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); vl.putalpha(G["vig_a"].point(lambda a: int(a * v)))
    fr.alpha_composite(vl)
    fr.alpha_composite(G["grain"][fi % 6])
    dx, dy = shake_offset(t)
    if dx or dy:
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 255)); sh.paste(fr, (dx, dy)); fr = sh
    return fr

def render(fi):
    t = fi / FPS * SPEED
    fr = compose(t)
    fr = post_fx(fr, t)
    fr.alpha_composite(G["topshade"])
    draw_text(fr, t)
    fr.alpha_composite(G["wm"], (0, 1440))
    g = min(fade(t, 0, 2.2), 1 - fade(t, TOTAL - 1.6, 1.4))
    rgb = fr.convert("RGB")
    if g < 0.999: rgb = Image.eval(rgb, lambda v: int(v * g))
    return rgb

def worker(args):
    a, b, out = args
    build()
    p = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                          "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-maxrate", "4500k", "-bufsize", "9000k",
                          "-pix_fmt", "yuv420p", out], stdin=subprocess.PIPE)
    for fi in range(a, b): p.stdin.write(render(fi).tobytes())
    p.stdin.close(); p.wait(); return out

# ---------------- audio: desain suara mencekam ----------------
def make_audio(path):
    from numpy.fft import rfft, irfft
    sr = 44100; n = int(TOTAL * sr); tt = np.arange(n) / sr
    rng = np.random.default_rng(1)
    surf = np.zeros(n)   # bus permukaan (diredam saat kamera di dalam kubur)
    mus = np.zeros(n)    # bus nada & efek
    def env(points): return np.interp(tt, [p[0] for p in points], [p[1] for p in points])
    def filt(x, lo=None, hi=None):
        X = rfft(x); f = np.fft.rfftfreq(len(x), 1 / sr); g = np.ones_like(f)
        if hi: g *= 1 / np.sqrt(1 + (f / hi) ** 4)
        if lo: g *= 1 / np.sqrt(1 + (lo / np.maximum(f, 1e-3)) ** 4)
        return irfft(X * g, len(x))
    def add(bus, sig, t0, g=1.0):
        i0 = int(t0 * sr)
        if i0 >= n: return
        e = min(n, i0 + len(sig)); bus[i0:e] += g * sig[:e - i0]
    def norm(x): return x / (np.abs(x).max() + 1e-9)
    def seg(d): return np.arange(int(d * sr)) / sr

    # --- angin dengan hembusan ---
    wind = norm(filt(rng.standard_normal(n), 60, 700))
    gust = np.zeros(n)
    for g0 in rng.uniform(0, TOTAL, 26):
        gust += np.exp(-((tt - g0) / 1.8) ** 2)
    whistle = norm(filt(rng.standard_normal(n), 900, 1400)) * gust * 0.25
    wlev = env([(0, 0), (2, 0.8), (12, 1.0), (24, 0.9), (26, 0.3), (38, 0.2), (40, 0.3), (57, 0.3), (60, 0.6), (72, 0.9), (118, 0.9),
                (121, 0.2), (139, 0.2), (142, 0.6), (155, 0.6), (168, 0.5), (170, 0)])
    surf += 0.2 * (wind * (0.55 + 0.6 * gust) + whistle) * wlev
    # --- jangkrik ---
    crk = np.zeros(n)
    for k in range(3):
        gate = (np.sin(2 * np.pi * (2.6 + k * 0.7) * tt + k) > 0.55).astype(float)
        crk += np.sin(2 * np.pi * (4300 + k * 260) * tt) * gate * (0.5 + 0.5 * np.sin(2 * np.pi * 48 * tt))
    surf += 0.02 * crk * env([(0, 0), (2, 1), (24, 0.8), (26, 0), (62, 0), (66, 0.4), (72, 0.2), (118, 0.2), (121, 0), (146, 0), (150, 0.3), (158, 0), (170, 0)])
    # --- burung hantu ---
    def owl(t0, g):
        s = np.zeros(int(2.2 * sr)); lt = seg(2.2)
        for o, d_ in ((0.0, 0.35), (0.55, 0.9)):
            m = (lt >= o) & (lt < o + d_); x = lt[m] - o
            f = 390 - 40 * x / d_ + 6 * np.sin(2 * np.pi * 7 * x)
            s[m] += np.sin(2 * np.pi * np.cumsum(f) / sr) * np.sin(np.pi * x / d_) ** 1.5
        add(surf, filt(s, 200, 1500), t0, g)
    for t0 in (3.2, 9.0, 66.0, 109.5): owl(t0, 0.09)
    # --- jam berdetak lalu berhenti (rumah) ---
    for k in range(int((17.3 - 12.2) / 1.0) + 1):
        c = rng.standard_normal(int(0.03 * sr)) * np.exp(-seg(0.03) / 0.004)
        add(mus, filt(c, 2500, 7000), 12.2 + k * 1.0, 0.18)
    # --- detak jantung melambat lalu berhenti ---
    for k, b in enumerate(HEARTBEATS):
        g = 0.55 * (1 - 0.035 * k)
        for off, gg in ((0.0, 1.0), (0.26, 0.7)):
            lt = seg(0.4)
            add(mus, np.sin(2 * np.pi * (52 + 30 * np.exp(-lt / 0.03)) * lt) * np.exp(-lt / 0.09) * np.clip(lt / 0.004, 0, 1), b + off, g * gg)
    # --- dengung mencekam (cluster sekon kecil) ---
    dr = (np.sin(2 * np.pi * 55 * tt) + 0.8 * np.sin(2 * np.pi * 58.27 * tt + 1) + 0.5 * np.sin(2 * np.pi * 82.4 * tt + 2)
          + 0.35 * np.sin(2 * np.pi * 110 * tt) + 0.25 * np.sin(2 * np.pi * 116.5 * tt + 3))
    dr += 0.4 * filt(rng.standard_normal(n), 30, 160)
    dr *= 1 + 0.25 * np.sin(2 * np.pi * 0.11 * tt)
    dlev = env([(0, 0), (3, 0.35), (12, 0.4), (25, 0.6), (26, 0.9), (34.5, 1.0), (36.5, 0.0), (39.5, 0.0), (41, 0.3), (57, 0.35), (60, 0.3), (72, 0.45),
                (90, 0.6), (104, 0.75), (112, 0.9), (120.5, 1.0), (121, 1.3), (139, 1.3), (141, 0.4), (155, 0.3), (166, 0.25), (170, 0)])
    mus += 0.11 * dr * dlev
    # --- nada tinggi bergetar (ketegangan) ---
    tens = np.sin(2 * np.pi * 1760 * tt + 3 * np.sin(2 * np.pi * 5.5 * tt)) + 0.6 * np.sin(2 * np.pi * 1864.7 * tt)
    mus += 0.006 * tens * env([(0, 0), (26, 0), (29, 1), (36, 1), (37, 0), (112, 0), (118, 0.7), (121, 1), (139, 1), (141, 0), (170, 0)])
    # --- pad hangat (kabar ampunan, fajar) ---
    pad = filt(sum(np.sin(2 * np.pi * f * tt + i) for i, f in enumerate([220.0, 277.2, 329.6, 440.0, 554.4])), None, 1000)
    mus += 0.03 * pad * env([(0, 0), (40, 0), (45, 0.7), (57, 0.8), (60, 0.5), (68, 0.2), (72, 0), (142, 0), (148, 0.5), (156, 0.8), (167, 0.6), (170, 0)])
    # --- lonceng lembut ---
    def bell(t0, f, g):
        lt = seg(4.0)
        s = (np.sin(2 * np.pi * f * lt) + 0.3 * np.sin(2 * np.pi * f * 2.01 * lt) + 0.15 * np.sin(2 * np.pi * f * 2.76 * lt)) * np.exp(-lt * 1.2)
        add(mus, s * np.clip(lt / 0.008, 0, 1), t0, g)
    for t0, f in [(0.9, 293.7), (12.7, 523.3), (44.0, 659.3), (47.5, 587.3), (51.0, 784.0), (58.8, 523.3), (62.8, 659.3),
                  (80.9, 440.0), (97.2, 392.0), (146.1, 523.3), (150.0, 659.3), (163.6, 587.3)]:
        bell(t0, f, 0.05)
    # --- riser (suara naik) & dentuman ---
    def riser(t_end, d, g):
        lt = seg(d); nz = filt(rng.standard_normal(len(lt)), 300, 6000)
        s = nz * (lt / d) ** 3 + 0.6 * np.sin(2 * np.pi * (200 * lt + 300 * lt ** 2 / d)) * (lt / d) ** 2
        add(mus, s / (np.abs(s).max() + 1e-9), t_end - d, g)
    def boom(t0, g, f0=46):
        lt = seg(4.0)
        s = np.sin(2 * np.pi * (f0 * lt - 4 * lt ** 2)) * np.exp(-lt * 1.1) + 0.5 * filt(rng.standard_normal(len(lt)), 20, 120) * np.exp(-lt * 2.5)
        add(mus, s * np.clip(lt / 0.006, 0, 1), t0, g)
    for t_, d_, g_ in [(25.6, 3.0, 0.10), (58.6, 2.5, 0.07), (72.5, 2.0, 0.06), (90.6, 2.0, 0.07), (120.9, 5.0, 0.16),
                       (125.5, 1.8, 0.10), (130.1, 1.8, 0.10), (134.7, 2.2, 0.12)]:
        riser(t_, d_, g_)
    for t_, g_ in [(25.6, 0.30), (39.6, 0.12), (58.6, 0.18), (72.5, 0.2), (90.6, 0.22), (120.9, 0.38), (121.4, 0.30),
                   (125.5, 0.4), (130.1, 0.4), (134.7, 0.45), (139.8, 0.2), (168.2, 0.3)]:
        boom(t_, g_)
    # dengung telinga sesudah tiap pertanyaan
    for q in (125.5, 130.1, 134.7):
        lt = seg(3.0); add(mus, np.sin(2 * np.pi * 6200 * lt) * np.exp(-lt * 1.2) * np.clip(lt / 0.3, 0, 1), q + 0.2, 0.012)
    # gesekan logam saat cahaya turun
    lt = seg(2.6)
    scr = np.sin(2 * np.pi * np.cumsum(900 + 500 * np.sin(2 * np.pi * 0.7 * lt) + 80 * rng.standard_normal(len(lt))) / sr)
    add(mus, filt(scr * rng.uniform(0.6, 1, len(lt)), 500, 4000) * np.sin(np.pi * lt / 2.6) ** 2, 120.9, 0.05)
    # --- hujan & guruh ---
    rain = norm(filt(rng.standard_normal(n), 1200, 9000)) * (0.7 + 0.3 * filt(rng.standard_normal(n), None, 3))
    drops = np.zeros(n)
    for t0 in rng.uniform(70, 120, 700):
        lt = seg(0.02); add(drops, rng.standard_normal(len(lt)) * np.exp(-lt / 0.003), t0, 0.5)
    rlev = env([(0, 0), (70, 0), (74, 1), (115, 1), (119, 0), (170, 0)])
    surf += (0.07 * rain + 0.05 * filt(drops, 1500, 8000)) * rlev
    for th in THUNDER:
        lt = seg(6.0); s = filt(rng.standard_normal(len(lt)), 20, 160) * (np.exp(-lt * 0.8) * (1 - np.exp(-lt * 6)))
        s += 0.4 * filt(rng.standard_normal(len(lt)), 200, 2500) * np.exp(-lt * 6) * (lt < 0.5)
        add(surf, norm(s), th + 0.6, 0.35)
    # --- langkah kaki & sandal ---
    def step(t0, g, sandal=False):
        lt = seg(0.18)
        s = filt(rng.standard_normal(len(lt)), 80, 900) * np.exp(-lt / 0.035)
        if sandal: s += 0.8 * filt(rng.standard_normal(len(lt)), 1500, 5000) * np.exp(-lt / 0.012)
        add(surf, norm(s), t0, g)
    for k in range(int((79.2 - 72.5) / 0.55)):
        step(72.5 + k * 0.55, 0.10 * fade(72.5 + k * 0.55, 72.5, 2))
    for k, tk in enumerate(STEP_RIPPLES):
        step(tk, 0.16 * (1 - fade(tk, 106, 7)) + 0.01, True)
    # --- kayu: papan lahad ditutup ---
    for t0 in (88.2, 88.8, 89.3):
        lt = seg(0.5); s = (np.sin(2 * np.pi * 170 * lt) + 0.6 * np.sin(2 * np.pi * 410 * lt) + 0.3 * np.sin(2 * np.pi * 980 * lt)) * np.exp(-lt * 14)
        add(surf, s, t0, 0.22)
    # --- sekop & tanah ---
    for k in range(10):
        t0 = 90.8 + k * 0.7
        lt = seg(0.3); sc = filt(rng.standard_normal(len(lt)), 1500, 5000) * np.sin(np.pi * lt / 0.3) ** 2
        add(surf, norm(sc), t0 - 0.3, 0.06)
        lt = seg(0.9); th_ = filt(rng.standard_normal(len(lt)), 40, 600) * np.exp(-lt / 0.15) * (1 + (rng.uniform(0, 1, len(lt)) > 0.8))
        add(surf, norm(th_), t0, 0.22 * (1 - 0.06 * k))
    # --- redam saat kamera di dalam kubur ---
    mu = env([(0, 0), (103, 0), (108, 0.6), (113, 0.9), (121, 1.0), (139, 1.0), (141.5, 0), (170, 0)])
    surf_m = filt(surf, None, 380) * 1.6
    surf_mix = surf * (1 - mu) + surf_m * mu
    # --- burung pagi ---
    for t0 in rng.uniform(146, 167, 22):
        lt = seg(0.18); f = 2600 + 1800 * np.sin(np.pi * lt / 0.18) + rng.uniform(-300, 300)
        add(mus, np.sin(2 * np.pi * np.cumsum(f) / sr) * np.sin(np.pi * lt / 0.18), t0, 0.025)
    out = surf_mix + mus
    out *= env([(0, 0), (1.2, 1), (167.5, 1), (170, 0)])
    # kompresi lembut
    out = np.tanh(out / (np.abs(out).max() + 1e-9) * 1.6)
    out = out / (np.abs(out).max() + 1e-9) * 0.9
    st = np.stack([out, np.roll(out, 260)], 1)
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
        os.system(f"ffmpeg -v error -y -i {outdir}/audio.wav -af atempo={SPEED} {outdir}/audio_fast.wav")
        os.system(f"ffmpeg -v error -y -f concat -safe 0 -i {outdir}/list.txt -i {outdir}/audio_fast.wav -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart {outdir}/barzakh.mp4")
        print("done")
