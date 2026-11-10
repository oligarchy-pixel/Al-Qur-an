import math, os, random, sys, wave
import numpy as np
from multiprocessing import Pool
from PIL import Image, ImageDraw, ImageFont, ImageFilter

S = os.path.dirname(os.path.abspath(__file__))
FD = os.path.join(S, "fonts")
W, H, FPS = 1080, 1920, 30

def F(path, size):
    return ImageFont.truetype(os.path.join(FD, path), size)

AR = "fontsource-amiri-5.3.0/package/files/amiri-arabic-700-normal.woff"
LORA_B = "fontsource-lora-5.3.0/package/files/lora-latin-600-normal.woff"
LORA_I = "fontsource-lora-5.3.0/package/files/lora-latin-400-italic.woff"
LORA_R = "fontsource-lora-5.3.0/package/files/lora-latin-400-normal.woff"
MONO = "fontsource-space-mono-5.3.0/package/files/space-mono-latin-400-normal.woff"
MONT = "mont/package/files/montserrat-latin-500-normal.woff"

GOLD = (233, 196, 120)
GOLD_L = (250, 226, 160)
GOLD_D = (190, 140, 60)
TEAL = (110, 210, 190)
GREY = (150, 150, 150)
WHITE = (240, 238, 232)

# (latin, arabic, epithet, task, section)
ANGELS = [
    ("Jibril", "جِبْرِيلُ", "Pembawa Wahyu",
     "Menyampaikan wahyu dari Allah SWT kepada para nabi dan rasul.", 1),
    ("Mikail", "مِيكَائِيلُ", "Pengatur Rezeki & Hujan",
     "Mengatur pembagian rezeki bagi seluruh makhluk, serta mengatur fenomena alam seperti menurunkan hujan dan petir.", 1),
    ("Israfil", "إِسْرَافِيلُ", "Peniup Sangkakala",
     "Meniup sangkakala pada hari Kiamat dan hari kebangkitan.", 1),
    ("Izrail", "عِزْرَائِيلُ", "Malaikat Maut",
     "Mencabut nyawa seluruh makhluk yang bernyawa apabila telah tiba ajalnya.", 1),
    ("Munkar", "مُنْكَرٌ", "Penanya di Alam Kubur",
     "Menanyai manusia di alam kubur (barzakh) mengenai keimanan mereka setelah proses pemakaman selesai.", 1),
    ("Nakir", "نَكِيرٌ", "Penanya di Alam Kubur",
     "Menanyai manusia di alam kubur bersama Malaikat Munkar dengan pertanyaan yang sama.", 1),
    ("Raqib", "رَقِيبٌ", "Pencatat Amal Baik",
     "Mencatat setiap amal perbuatan baik dan kebajikan yang dilakukan manusia selama hidup di dunia.", 1),
    ("Atid", "عَتِيدٌ", "Pencatat Amal Buruk",
     "Mencatat setiap amal perbuatan buruk, maksiat, dan dosa yang dilakukan manusia selama hidup di dunia.", 1),
    ("Malik", "مَالِكٌ", "Penjaga Neraka",
     "Menjaga pintu neraka secara ketat, dikenal sangat tegas dan patuh pada perintah Allah.", 1),
    ("Ridwan", "رِضْوَانُ", "Penjaga Surga",
     "Menjaga pintu surga serta menyambut orang-orang beriman yang masuk ke dalamnya dengan ramah dan penuh kemuliaan.", 1),
    ("Kiraman Katibin", "كِرَامًا كَاتِبِينَ", "Para Pencatat yang Mulia",
     "Kelompok malaikat mulia yang merekam seluruh lembaran amal manusia tanpa terlewat. Raqib (pengawas) dan Atid (selalu hadir) melekat sebagai sifat mereka.", 2),
    ("Zabaniyah", "الزَّبَانِيَةُ", "Penyiksa di Neraka",
     "Malaikat penyiksa di dalam neraka, dipimpin 19 malaikat utama dengan pasukan yang sangat banyak. Sangat keras dan patuh tanpa celah kepada Allah.", 2),
    ("Harut & Marut", "هَارُوتُ وَمَارُوتُ", "Ujian di Negeri Babil",
     "Dua malaikat yang diturunkan ke negeri Babilonia sebagai fitnah (ujian) bagi manusia terkait ilmu sihir dan pembeda antara sihir dengan mukjizat.", 2),
    ("Darda'il", "دَرْدَائِيلُ", "Pencari Hamba yang Berdoa",
     "Berkeliling bumi mencari hamba yang berdoa, bertobat, menangis karena dosa, dan memohon ampunan, khususnya di bulan suci Ramadan.", 2),
    ("Hamalatul 'Arsy", "حَمَلَةُ الْعَرْشِ", "Para Pemikul 'Arsy",
     "Para malaikat penyangga 'Arsy (Singgasana Allah). Kini berjumlah 4 malaikat besar, dan pada hari Kiamat bertambah menjadi 8.", 2),
    ("Hafazhah", "الْحَفَظَةُ", "Mu'aqqibat · Para Penjaga",
     "Menjaga dan melindungi manusia dari marabahaya yang belum ditakdirkan, bergantian mengelilinginya siang dan malam.", 2),
    ("Jundallah", "جُنْدُ اللهِ", "Bala Tentara Allah",
     "Bala tentara Allah dari kalangan malaikat yang membantu para nabi dan orang beriman di medan perang, seperti ribuan malaikat pada Perang Badar.", 2),
    ("Arham", "مَلَكُ الْأَرْحَامِ", "Malaikat Rahim",
     "Mendatangi rahim ibu saat janin berusia 120 hari, meniupkan ruh dan mencatat empat ketetapan: rezeki, ajal, amal, dan celaka atau bahagia.", 2),
    ("Haffun", "الْحَافُّونَ", "Yang Mengelilingi 'Arsy",
     "Melingkari 'Arsy Allah dalam shaf yang rapi, senantiasa bertasbih, bertahmid, dan memuji keagungan Allah SWT.", 2),
    ("Khazanah", "الْخَزَنَةُ", "Para Penjaga Surga & Neraka",
     "Khazanat Al-Jannah (penjaga surga, dipimpin Ridwan) dan Khazanat Jahannam (penjaga neraka, dipimpin Malik).", 2),
]
N = len(ANGELS)

# ---------------- timeline ----------------
INTRO = 6.0
OUTRO = 9.0
durs = [min(9.0, max(6.0, 3.2 + len(a[3]) / 40.0)) for a in ANGELS]
starts = []
t = INTRO
for d in durs:
    starts.append(t); t += d
OUTRO_START = t
TOTAL = t + OUTRO
NFRAMES = int(round(TOTAL * FPS))

# ---------------- geometry ----------------
CX, CY = 540, 795
R_OUT = 385
R_RING_IN = 196
R_INNER = 178
STEP = 360.0 / N

def ease(x):
    x = max(0.0, min(1.0, x))
    return x * x * (3 - 2 * x)

def spaced(text, sp):
    return (" " * 0).join(text)

def draw_spaced(d, xy, text, font, fill, tracking, anchor="m"):
    # draw letter-spaced text centered (anchor m) or left (l) / right (r)
    widths = [d.textlength(c, font=font) for c in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x, y = xy
    if anchor == "m": x -= total / 2
    elif anchor == "r": x -= total
    for c, w in zip(text, widths):
        d.text((x, y), c, font=font, fill=fill, anchor="lm")
        x += w + tracking
    return total

# ---------------- static background ----------------
def make_bg():
    rng = np.random.default_rng(7)
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    base = np.zeros((H, W, 3), np.float32)
    base[:] = (6, 7, 10)
    # soft vignette glow behind wheel
    d = np.sqrt((xx - CX) ** 2 + ((yy - CY) * 0.75) ** 2)
    g = np.exp(-(d / 620.0) ** 2)
    base += g[..., None] * np.array([16, 15, 13], np.float32)
    img = Image.fromarray(np.clip(base, 0, 255).astype(np.uint8))
    dr = ImageDraw.Draw(img)
    for _ in range(420):
        x, y = rng.uniform(0, W), rng.uniform(0, H)
        b = int(rng.uniform(60, 200)); r = rng.choice([0.6, 0.9, 1.3], p=[.6, .3, .1])
        dr.ellipse((x - r, y - r, x + r, y + r), fill=(b, b, b))
    return img

TWINKLE = [(random.Random(i).uniform(0, W), random.Random(i + 999).uniform(0, H),
            random.Random(i + 5).uniform(0, 6.28), random.Random(i + 9).uniform(0.4, 1.2)) for i in range(60)]

def make_static_wheel_deco():
    """non-rotating deco: inner circle, star pattern, center glow, pointer"""
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(L)
    # dark disk for wheel band
    d.ellipse((CX - R_OUT, CY - R_OUT, CX + R_OUT, CY + R_OUT), fill=(14, 14, 16, 235))
    d.ellipse((CX - R_OUT, CY - R_OUT, CX + R_OUT, CY + R_OUT), outline=(70, 68, 64, 255), width=3)
    d.ellipse((CX - R_OUT - 14, CY - R_OUT - 14, CX + R_OUT + 14, CY + R_OUT + 14), outline=(40, 40, 42, 255), width=2)
    d.ellipse((CX - R_INNER, CY - R_INNER, CX + R_INNER, CY + R_INNER), fill=(9, 9, 11, 255), outline=(60, 58, 54, 255), width=2)
    # 12-point star pattern
    pts = []
    for k in range(24):
        a = math.radians(k * 15 - 90)
        r = 162 if k % 2 == 0 else 112
        pts.append((CX + r * math.cos(a), CY + r * math.sin(a)))
    d.polygon(pts, outline=(52, 48, 40, 255))
    for k in range(12):
        a1 = math.radians(k * 30 - 90); a2 = math.radians(k * 30 + 150 - 90)
        d.line((CX + 162 * math.cos(a1), CY + 162 * math.sin(a1), CX + 162 * math.cos(a2), CY + 162 * math.sin(a2)),
               fill=(34, 32, 28, 255), width=1)
    d.ellipse((CX - 112, CY - 112, CX + 112, CY + 112), outline=(40, 38, 34, 255))
    # center glow
    gl = Image.new("L", (W, H), 0)
    ImageDraw.Draw(gl).ellipse((CX - 145, CY - 145, CX + 145, CY + 145), fill=70)
    gl = gl.filter(ImageFilter.GaussianBlur(70))
    glow = Image.new("RGBA", (W, H), (120, 92, 40, 0)); glow.putalpha(gl)
    L = Image.alpha_composite(L, glow)
    return L

def make_pointer():
    L = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(L)
    top = CY - R_OUT - 14
    gl = Image.new("L", (W, H), 0)
    ImageDraw.Draw(gl).rectangle((CX - 4, top, CX + 4, top + 95), fill=160)
    gl = gl.filter(ImageFilter.GaussianBlur(8))
    glow = Image.new("RGBA", (W, H), GOLD + (0,)); glow.putalpha(gl)
    L = Image.alpha_composite(L, glow)
    d = ImageDraw.Draw(L)
    d.line((CX, top + 10, CX, top + 85), fill=GOLD_L + (255,), width=2)
    d.polygon([(CX - 16, top - 14), (CX + 16, top - 14), (CX, top + 16)], fill=GOLD + (255,))
    return L

# ---------------- rotating wheel (labels + ticks) ----------------
WS = 2 * R_OUT + 40
WC = WS / 2
FONT_RING = None

def label_img(text, color, font):
    tw = int(font.getlength(text)) + 6
    im = Image.new("RGBA", (tw, 40), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((3, 20), text, font=font, fill=color, anchor="lm")
    return im

def make_wheel(cur):
    """cur: index of current angel; -1 = none read; N = all read"""
    font = F(MONT, 27)
    L = Image.new("RGBA", (WS, WS), (0, 0, 0, 0))
    d = ImageDraw.Draw(L)
    # ticks: 120
    for k in range(120):
        th = k * 3.0
        item_pos = th / STEP
        done = cur >= 0 and item_pos <= cur + 0.5
        a = math.radians(th - 90)
        r1 = R_OUT - 10; r2 = R_OUT - (24 if k % 6 == 0 else 16)
        col = (GOLD + (230,)) if done else (90, 88, 84, 255)
        d.line((WC + r1 * math.cos(a), WC + r1 * math.sin(a), WC + r2 * math.cos(a), WC + r2 * math.sin(a)),
               fill=col, width=2)
    d.ellipse((WC - (R_OUT - 34), WC - (R_OUT - 34), WC + (R_OUT - 34), WC + (R_OUT - 34)), outline=(40, 40, 40, 255), width=1)
    d.ellipse((WC - R_RING_IN + 8, WC - R_RING_IN + 8, WC + R_RING_IN - 8, WC + R_RING_IN - 8), outline=(45, 44, 42, 255), width=1)
    for i, a_ in enumerate(ANGELS):
        name = a_[0]
        if cur >= N or i < cur: col = GOLD + (235,)
        elif i == cur: col = GOLD_L + (255,)
        else: col = GREY + (170,)
        fs = 23
        while F(MONT, fs).getlength(name) > R_OUT - 46 - R_RING_IN - 8: fs -= 1
        im = label_img(name, col, F(MONT, fs))
        th = i * STEP
        rot = 90 - th
        if 180 < th < 360: rot += 180
        rim = im.rotate(rot, resample=Image.BICUBIC, expand=True)
        r_c = R_RING_IN + 6 + im.width / 2
        a = math.radians(th - 90)
        x = WC + r_c * math.cos(a); y = WC + r_c * math.sin(a)
        L.alpha_composite(rim, (int(round(x - rim.width / 2)), int(round(y - rim.height / 2))))
        # small dot at inner end
        rd = R_RING_IN - 4
        dc = col if (cur >= N or i <= cur) else (110, 110, 110, 255)
        d.ellipse((WC + rd * math.cos(a) - 3, WC + rd * math.sin(a) - 3, WC + rd * math.cos(a) + 3, WC + rd * math.sin(a) + 3), fill=dc)
    return L

# ---------------- text layers ----------------
def gold_text_layer(lines, font, line_gap=1.05, max_w=None):
    """render Arabic (or any) lines with gold gradient + glow; return RGBA cropped"""
    tmp = Image.new("L", (1, 1)); td = ImageDraw.Draw(tmp)
    boxes = [td.textbbox((0, 0), ln, font=font, anchor="ls") for ln in lines]
    asc, desc = font.getmetrics()
    lh = int((asc + desc) * line_gap)
    w = max(b[2] - b[0] for b in boxes) + 120
    h = lh * len(lines) + 120
    m = Image.new("L", (w, h), 0); md = ImageDraw.Draw(m)
    for k, ln in enumerate(lines):
        md.text((w / 2, 60 + asc + k * lh), ln, font=font, fill=255, anchor="ms")
    bb = m.getbbox()
    grad = np.linspace(0, 1, h)[:, None]
    top = np.array(GOLD_L, np.float32); bot = np.array(GOLD_D, np.float32)
    rgb = (top * (1 - grad[..., None]) + bot * grad[..., None]) * np.ones((h, w, 1))
    rgb = Image.fromarray(rgb.astype(np.uint8))
    txt = rgb.convert("RGBA"); txt.putalpha(m)
    glow = Image.new("RGBA", (w, h), (230, 170, 70, 0))
    glow.putalpha(m.filter(ImageFilter.GaussianBlur(18)).point(lambda v: int(v * 0.55)))
    out = Image.alpha_composite(glow, txt)
    return out

def fit_arabic(text_lines, max_w, start=128):
    s = start
    while s > 40:
        f = F(AR, s)
        if max(f.getlength(l) for l in text_lines) <= max_w: return f
        s -= 4
    return F(AR, s)

def wrap(text, font, max_w, d):
    words = text.split(); lines = []; cur = ""
    for w_ in words:
        t = (cur + " " + w_).strip()
        if d.textlength(t, font=font) <= max_w: cur = t
        else: lines.append(cur); cur = w_
    if cur: lines.append(cur)
    return lines

def text_block(lines, font, fill, lh, width=W):
    h = lh * len(lines) + 20
    im = Image.new("RGBA", (width, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    for k, l in enumerate(lines):
        d.text((width / 2, 10 + lh * k + lh / 2), l, font=font, fill=fill, anchor="mm")
    return im

def layer(fn, w=W, h=200):
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0)); fn(ImageDraw.Draw(im)); return im

# ---------------- precompute ----------------
def build():
    global BG, DECO, PTR, WHEELS, ANG_L, INTRO_L, OUTRO_L, HEADER, WM
    # watermark @alurziyadahku: tanda tangan kecil di dalam lingkaran tengah roda
    WM = Image.new("RGBA", (W, 60), (0, 0, 0, 0))
    wd = ImageDraw.Draw(WM)
    wf = F(MONO, 21)
    tw = draw_spaced(wd, (W / 2, 30), "@alurziyadahku", wf, GOLD + (200,), 3)
    BG = make_bg().convert("RGBA")
    DECO = make_static_wheel_deco()
    PTR = make_pointer()
    WHEELS = {c: make_wheel(c) for c in range(-1, N + 1)}
    HEADER = layer(lambda d: (
        draw_spaced(d, (540, 40), "AL-MALA'IKAH", F(MONO, 44), WHITE, 14),
        draw_spaced(d, (540, 92), "NAMA-NAMA MALAIKAT & TUGASNYA", F(MONO, 22), GOLD, 7)), h=130)
    fname = F(LORA_B, 80); fepi = F(LORA_I, 46); ftask = F(LORA_R, 37); fmono = F(MONO, 27)
    flab = F(MONO, 21)
    dd = ImageDraw.Draw(Image.new("L", (1, 1)))
    ANG_L = []
    for i, (lat, ar, epi, task, sec) in enumerate(ANGELS):
        arf = fit_arabic([ar], 280, 104)
        arl = gold_text_layer([ar], arf)
        cnt = layer(lambda d, i=i: draw_spaced(d, (540, 30), f"{i+1:02d} / {N}", fmono, (190, 186, 178), 10), h=60)
        nm = layer(lambda d: d.text((540, 55), lat, font=fname, fill=WHITE, anchor="mm"), h=110)
        ep = layer(lambda d: d.text((540, 35), epi, font=fepi, fill=GOLD, anchor="mm"), h=75)
        tl = wrap(task, ftask, 920, dd)
        tk = text_block(tl, ftask, (222, 219, 212), 52)
        lab = "BAGIAN 1 · 10 MALAIKAT WAJIB DIIMANI" if sec == 1 else "BAGIAN 2 · KELOMPOK MALAIKAT LAINNYA"
        lb = layer(lambda d: draw_spaced(d, (540, 20), lab, flab, (120, 118, 112), 5), h=40)
        ANG_L.append(dict(ar=arl, cnt=cnt, nm=nm, ep=ep, tk=tk, lb=lb))
    # intro
    fi = F(LORA_B, 50)
    INTRO_L = dict(
        c=layer(lambda d: (d.text((540, 70), "Allah menciptakan", font=fi, fill=WHITE, anchor="mm"),
                           d.text((540, 132), "para malaikat.", font=fi, fill=WHITE, anchor="mm")), h=200),
        q=text_block(["“Malaikat diciptakan dari cahaya.”"], F(LORA_I, 46), GOLD, 60),
        s=layer(lambda d: draw_spaced(d, (540, 20), "HR. MUSLIM 2996", flab, (130, 128, 120), 6), h=40),
        k=layer(lambda d: draw_spaced(d, (540, 20), "IMAN KEPADA MALAIKAT · RUKUN IMAN KE-2", flab, (120, 118, 112), 5), h=40),
    )
    oq = wrap("“Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya.”",
              F(LORA_I, 44), 920, dd)
    oar = ["كُلٌّ آمَنَ بِاللَّهِ", "وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ"]
    OUTRO_L = dict(
        ar=gold_text_layer(oar, fit_arabic(oar, 300, 58), line_gap=1.0),
        q=text_block(oq, F(LORA_I, 44), WHITE, 58),
        s=layer(lambda d: draw_spaced(d, (540, 20), "QS. AL-BAQARAH 2:285", flab, GOLD, 6), h=40),
        c=layer(lambda d: draw_spaced(d, (540, 20), "SIMPAN & BAGIKAN SEBAGAI PENGINGAT", flab, TEAL, 5), h=40),
    )

def put(frame, im, cx, top, alpha=1.0, dy=0.0):
    if alpha <= 0.01: return
    if alpha < 0.999:
        im = im.copy()
        a = im.getchannel("A").point(lambda v: int(v * alpha))
        im.putalpha(a)
    frame.alpha_composite(im, (int(cx - im.width / 2), int(top + dy)))

def put_c(frame, im, cx, cy, alpha=1.0, scale=1.0):
    if alpha <= 0.01: return
    if abs(scale - 1) > 0.002:
        im = im.resize((max(1, int(im.width * scale)), max(1, int(im.height * scale))), Image.BICUBIC)
    put(frame, im, cx, cy - im.height / 2, alpha)

def fade(t, t0, dur=0.6):
    return ease((t - t0) / dur)

def progress_bar(frame, frac, t):
    d = ImageDraw.Draw(frame)
    x0, x1, y0, y1 = 140, 940, 322, 358
    fl = F(MONO, 22)
    draw_spaced(d, (x0, 304), "IMAN KEPADA MALAIKAT", fl, (200, 198, 190), 4, anchor="l")
    pct = f"{int(round(frac * 100))}%"
    draw_spaced(d, (x1, 304), pct, fl, TEAL, 2, anchor="r")
    d.rounded_rectangle((x0, y0, x1, y1), radius=7, outline=(80, 80, 82), width=2, fill=(10, 11, 13))
    segs = N
    sw = (x1 - x0 - 10) / segs
    filled = frac * segs
    for k in range(segs):
        f = max(0.0, min(1.0, filled - k))
        if f <= 0: break
        xa = x0 + 5 + k * sw + 2; xb = xa + (sw - 4) * f
        col = TEAL if k < 10 else (226, 200, 120)
        d.rectangle((xa, y0 + 6, xb, y1 - 6), fill=col)

def state_at(t):
    if t < INTRO: return -1
    for i in range(N - 1, -1, -1):
        if t >= starts[i]:
            return i if t < OUTRO_START else N
    return -1

def wheel_angle(t):
    # rotation so that current item is at top; smooth transition at start of each segment
    if t < starts[0]: return 0.0
    if t >= OUTRO_START:
        return (N - 1) * STEP + ease((t - OUTRO_START) / 2.0) * STEP * 0.5 + max(0, t - OUTRO_START - 2.0) * 2.0
    i = state_at(t)
    p = ease((t - starts[i]) / 0.9)
    return (i - 1 + p) * STEP if i > 0 else 0.0

def render(fi):
    t = fi / FPS
    frame = BG.copy()
    # twinkles
    d = ImageDraw.Draw(frame)
    for (x, y, ph, sp) in TWINKLE:
        b = int(120 + 120 * math.sin(t * sp * 2 + ph))
        if b > 150:
            r = 1.0 + (b - 150) / 120
            d.ellipse((x - r, y - r, x + r, y + r), fill=(b, b, b, 255))
    frame.alpha_composite(HEADER, (0, 152))
    st = state_at(t)
    # progress
    if st < 0: frac = 0.0
    elif st >= N: frac = 1.0
    else: frac = (st + ease((t - starts[st]) / 0.9)) / N
    progress_bar(frame, frac, t)
    frame.alpha_composite(DECO)
    # wheel
    wk = st if st >= 0 else -1
    wl = WHEELS[wk].rotate(wheel_angle(t), resample=Image.BICUBIC)
    frame.alpha_composite(wl, (int(CX - WC), int(CY - WC)))
    frame.alpha_composite(PTR)
    BOT = CY + R_OUT + 30
    if st < 0:
        a = fade(t, 0.3, 0.8) * (1 - fade(t, INTRO - 0.5, 0.5))
        put_c(frame, INTRO_L["c"], CX, CY, a)
        put(frame, INTRO_L["q"], CX, BOT + 40, fade(t, 2.0, 0.8) * (1 - fade(t, INTRO - 0.5, 0.5)), dy=(1 - fade(t, 2.0, 0.8)) * 20)
        put(frame, INTRO_L["s"], CX, BOT + 120, fade(t, 2.6, 0.8) * (1 - fade(t, INTRO - 0.5, 0.5)))
        put(frame, INTRO_L["k"], CX, 1660, fade(t, 3.0, 0.8) * (1 - fade(t, INTRO - 0.5, 0.5)))
    elif st < N:
        L = ANG_L[st]; t0 = starts[st]; t1 = t0 + durs[st]
        out = 1 - fade(t, t1 - 0.35, 0.35)
        a1 = fade(t, t0 + 0.25, 0.5) * out
        put_c(frame, L["ar"], CX, CY - 18, a1, 0.94 + 0.06 * fade(t, t0 + 0.25, 0.7))
        put_c(frame, L["cnt"], CX, CY + 86, a1)
        a2 = fade(t, t0 + 0.45, 0.5) * out
        put(frame, L["nm"], CX, BOT, a2, dy=(1 - a2) * 16 if out > .99 else 0)
        a3 = fade(t, t0 + 0.65, 0.5) * out
        put(frame, L["ep"], CX, BOT + 92, a3)
        a4 = fade(t, t0 + 1.0, 0.7) * out
        put(frame, L["tk"], CX, BOT + 168, a4, dy=(1 - fade(t, t0 + 1.0, 0.7)) * 14)
        put(frame, L["lb"], CX, BOT + 178 + L["tk"].height, a2)
    else:
        t0 = OUTRO_START
        a = fade(t, t0 + 0.3, 0.9)
        put_c(frame, OUTRO_L["ar"], CX, CY, a, 0.95 + 0.05 * a)
        put(frame, OUTRO_L["q"], CX, BOT + 20, fade(t, t0 + 1.4, 0.9), dy=(1 - fade(t, t0 + 1.4, 0.9)) * 18)
        put(frame, OUTRO_L["s"], CX, BOT + 30 + OUTRO_L["q"].height, fade(t, t0 + 2.2, 0.8))
        put(frame, OUTRO_L["c"], CX, 1660, fade(t, t0 + 3.2, 0.8))
    frame.alpha_composite(WM, (0, CY + 126 - 30))
    # global fade in/out
    g = min(fade(t, 0, 0.6), 1 - fade(t, TOTAL - 0.8, 0.8))
    rgb = frame.convert("RGB")
    if g < 0.999:
        rgb = Image.eval(rgb, lambda v: int(v * g))
    return rgb

def worker(args):
    a, b, out = args
    build()
    import subprocess
    p = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                          "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-preset", "medium", "-crf", "17",
                          "-pix_fmt", "yuv420p", out], stdin=subprocess.PIPE)
    for fi in range(a, b):
        p.stdin.write(render(fi).tobytes())
    p.stdin.close(); p.wait()
    return out

# ---------------- audio (SFX meniru referensi) ----------------
def make_audio(path):
    sr = 44100
    n = int(TOTAL * sr)
    tt = np.arange(n) / sr
    out = np.zeros(n, np.float64)
    rng = np.random.default_rng(3)
    # dengung & pad dihapus: hanya bunyi ting
    # 3) "tik" per nama: 1800 Hz + 3400 Hz, peluruhan ~11 ms, plus klik transien
    L = int(0.12 * sr); lt = np.arange(L) / sr
    tick = (1.0 * np.sin(2 * np.pi * 1800 * lt) + 0.5 * np.sin(2 * np.pi * 3400 * lt)) * np.exp(-lt / 0.011)
    click = rng.standard_normal(L) * np.exp(-lt / 0.0012) * 0.35
    tick = (tick + click) * np.clip(lt / 0.0004, 0, 1)
    def add(sig, t0, g):
        i0 = int(t0 * sr); e = min(n, i0 + len(sig))
        if i0 < n: out[i0:e] += g * sig[:e - i0]
    for st in starts:
        add(tick, st + 0.02, 0.42)
    # 4) nada "selesai" C5 523 Hz (+ harmonik 2,3,4) di awal penutup, ~1 detik
    L2 = int(1.6 * sr); lt2 = np.arange(L2) / sr
    tone = sum(a * np.sin(2 * np.pi * 523.25 * h * lt2) for h, a in ((1, 1.0), (2, 0.45), (3, 0.18), (4, 0.07)))
    tone *= np.clip(lt2 / 0.01, 0, 1) * np.exp(-lt2 / 0.9) * np.clip((1.6 - lt2) / 0.25, 0, 1)
    add(tone, OUTRO_START + 0.05, 0.22)
    out *= np.clip((n - np.arange(n)) / (2.5 * sr), 0, 1)
    out = out / (np.abs(out).max() + 1e-9) * 0.89
    st_ = np.stack([out, out], 1)
    with wave.open(path, "wb") as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr)
        w.writeframes((st_ * 32767).astype(np.int16).tobytes())

if __name__ == "__main__":
    mode = sys.argv[1]
    outdir = os.path.join(S, "out"); os.makedirs(outdir, exist_ok=True)
    if mode == "audio":
        make_audio(os.path.join(outdir, "audio.wav"))
    elif mode == "still":
        build()
        for tt_ in map(float, sys.argv[2:]):
            render(int(tt_ * FPS)).save(os.path.join(outdir, f"still_{tt_:06.1f}.png"))
    elif mode == "full":
        print("TOTAL", TOTAL, "frames", NFRAMES)
        make_audio(os.path.join(outdir, "audio.wav"))
        P = 4; ch = math.ceil(NFRAMES / P)
        jobs = [(k * ch, min(NFRAMES, (k + 1) * ch), os.path.join(outdir, f"part{k}.mp4")) for k in range(P)]
        with Pool(P) as pool:
            parts = pool.map(worker, jobs)
        with open(os.path.join(outdir, "list.txt"), "w") as f:
            for p in parts: f.write(f"file '{p}'\n")
        os.system(f"ffmpeg -v error -y -f concat -safe 0 -i {outdir}/list.txt -i {outdir}/audio.wav -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart {outdir}/malaikat.mp4")
        print("done")
