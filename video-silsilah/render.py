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

# (latin, arabic, subtitle, catatan, bagian)
ITEMS = [
    ("Baginda Rasulullah shalallahu alaihi wasallam (Muhammad)", "مُحَمَّدٌ\nصَلَّى اللهُ عَلَيْهِ وَسَلَّمَ", "", "Nama lengkap: Muhammad bin Abdullah bin Abdul Mutthalib.", 2),
    ("Abdullah", "عَبْدُ اللهِ", "Ayah Baginda Rasulullah shalallahu alaihi wasallam", "Wafat saat Baginda Rasulullah shalallahu alaihi wasallam masih di dalam kandungan.", 2),
    ("Abdul Mutthalib", "عَبْدُ الْمُطَّلِبِ", "Kakek · nama asli Syaibah", "", 2),
    ("Hasyim", "هَاشِمٌ", "Nama asli Amr", "", 2),
    ("Abdu Manaf", "عَبْدُ مَنَافٍ", "Nama asli Al-Mughirah", "", 2),
    ("Qushay", "قُصَيٌّ", "Nama asli Zaid", "", 2),
    ("Kilab", "كِلَابٌ", "Nama asli Hakim", "", 2),
    ("Murrah", "مُرَّةُ", "", "", 2),
    ("Ka'ab", "كَعْبٌ", "", "", 2),
    ("Lu'ay", "لُؤَيٌّ", "", "", 2),
    ("Ghalib", "غَالِبٌ", "", "", 2),
    ("Fihr", "فِهْرٌ", "Dijuluki \u201cQuraisy\u201d", "Cikal bakal suku Quraisy.", 2),
    ("Malik", "مَالِكٌ", "", "", 2),
    ("An-Nadhr", "النَّضْرُ", "Nama asli Qais", "", 2),
    ("Kinanah", "كِنَانَةُ", "", "", 2),
    ("Khuzaimah", "خُزَيْمَةُ", "", "", 2),
    ("Mudrikah", "مُدْرِكَةُ", "Nama asli Amir", "", 2),
    ("Ilyas", "إِلْيَاسُ", "Sakha / Ilyas", "", 2),
    ("Mudhar", "مُضَرُ", "", "", 2),
    ("Nizar", "نِزَارٌ", "", "", 2),
    ("Ma'ad", "مَعَدٌّ", "", "", 2),
    ("Adnan", "عَدْنَانُ", "Leluhur Arab Adnaniyah", "Nasab hingga Adnan mutawatir dan disepakati seluruh ulama.", 2),
    ("Udd", "أُدٌّ", "", "", 3),
    ("Muqawwam", "مُقَوَّمٌ", "", "", 3),
    ("Nahur", "نَاحُورُ", "", "", 3),
    ("Tairah", "تَيْرَحُ", "", "", 3),
    ("Ya'rub", "يَعْرُبُ", "", "", 3),
    ("Yasyjub", "يَشْجُبُ", "", "", 3),
    ("Nabit", "نَابِتٌ", "", "", 3),
    ("Nabi Ismail", "إِسْمَاعِيلُ\nعَلَيْهِ السَّلَامُ", "alaihissalam", "Baginda Rasulullah shalallahu alaihi wasallam adalah keturunan Nabi Ibrahim alaihissalam melalui Nabi Ismail alaihissalam.", 3),
    ("Nabi Ibrahim", "إِبْرَاهِيمُ\nعَلَيْهِ السَّلَامُ", "alaihissalam", "Khalilullah, kekasih Allah.", 3),
    ("Tarah", "تَارَحُ", "Dikenal juga Azar", "", 4),
    ("Nahur", "نَاحُورُ", "", "", 4),
    ("Sarug", "سَارُوغُ", "", "", 4),
    ("Ra'u", "رَاعُو", "", "", 4),
    ("Falij", "فَالِغُ", "", "", 4),
    ("Abir", "عَابِرُ\nعَلَيْهِ السَّلَامُ", "Nabi Hud alaihissalam", "", 4),
    ("Syalih", "شَالِخُ", "", "", 4),
    ("Arfakhsyad", "أَرْفَخْشَذُ", "", "", 4),
    ("Sam", "سَامٌ", "", "", 4),
    ("Nabi Nuh", "نُوحٌ\nعَلَيْهِ السَّلَامُ", "alaihissalam", "", 4),
    ("Lamik", "لَامَكُ", "", "", 4),
    ("Matusyalakh", "مَتُوشَلَخُ", "", "", 4),
    ("Nabi Idris", "إِدْرِيسُ\nعَلَيْهِ السَّلَامُ", "alaihissalam · dikenal juga Akhnukh", "", 4),
    ("Yarid", "يَرْدُ", "", "", 4),
    ("Mahlail", "مَهْلَائِيلُ", "", "", 4),
    ("Qainan", "قَيْنَانُ", "", "", 4),
    ("Anusy", "أَنُوشُ", "", "", 4),
    ("Nabi Syits", "شِيثٌ\nعَلَيْهِ السَّلَامُ", "alaihissalam", "", 4),
    ("Nabi Adam", "آدَمُ\nعَلَيْهِ السَّلَامُ", "alaihissalam", "Bapak seluruh umat manusia.", 4),
]
N = len(ITEMS)
SECTION_LABEL = {2: "BAGIAN 2 · AYAH HINGGA ADNAN · DISEPAKATI ULAMA",
                 3: "BAGIAN 3 · ADNAN HINGGA NABI IBRAHIM ALAIHISSALAM",
                 4: "BAGIAN 4 · NABI IBRAHIM ALAIHISSALAM HINGGA NABI ADAM ALAIHISSALAM"}
SEC_COL = {2: TEAL, 3: (226, 200, 120), 4: (240, 226, 196)}

FAMILY = [("AYAH", "Abdullah bin Abdul Mutthalib"), ("IBU", "Aminah binti Wahb"),
          ("KAKEK (AYAH)", "Abdul Mutthalib (Syaibah)"), ("KAKEK (IBU)", "Wahb bin Abdu Manaf"),
          ("NENEK (AYAH)", "Fatimah binti Amr"), ("NENEK (IBU)", "Barrah binti Abdul Uzza")]

# ---------------- timeline ----------------
HOOK = 7.0          # pembuka + hadis
FAM = 11.0          # kartu keluarga inti
INTRO = HOOK + FAM
OUTRO = 9.0
def _dur(it):
    d = 2.4
    if it[2]: d += 0.5
    if it[3]: d = max(d, 2.2 + len(it[3]) / 30.0)
    return d
durs = [_dur(it) for it in ITEMS]
durs[0] += 1.2
starts = []
t = INTRO
for d in durs:
    starts.append(t); t += d
OUTRO_START = t
TOTAL = t + OUTRO
NFRAMES = int(round(TOTAL * FPS))
FAM_ROW_T = [HOOK + 1.6 + k * 0.7 for k in range(len(FAMILY))]

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
    # ticks: 150
    for k in range(150):
        th = k * 2.4
        item_pos = th / STEP
        done = cur >= 0 and item_pos <= cur + 0.5
        a = math.radians(th - 90)
        r1 = R_OUT - 10; r2 = R_OUT - (24 if k % 3 == 0 else 15)
        col = (GOLD + (230,)) if done else (90, 88, 84, 255)
        d.line((WC + r1 * math.cos(a), WC + r1 * math.sin(a), WC + r2 * math.cos(a), WC + r2 * math.sin(a)),
               fill=col, width=2)
    d.ellipse((WC - (R_OUT - 34), WC - (R_OUT - 34), WC + (R_OUT - 34), WC + (R_OUT - 34)), outline=(40, 40, 40, 255), width=1)
    d.ellipse((WC - R_RING_IN + 8, WC - R_RING_IN + 8, WC + R_RING_IN - 8, WC + R_RING_IN - 8), outline=(45, 44, 42, 255), width=1)
    for i, a_ in enumerate(ITEMS):
        name = "Baginda Rasulullah" if i == 0 else a_[0]
        if cur >= N or i < cur: col = GOLD + (235,)
        elif i == cur: col = GOLD_L + (255,)
        else: col = GREY + (170,)
        fs = 19
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
        d.ellipse((WC + rd * math.cos(a) - 2, WC + rd * math.sin(a) - 2, WC + rd * math.cos(a) + 2, WC + rd * math.sin(a) + 2), fill=dc)
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
        draw_spaced(d, (540, 40), "NASAB AN-NABI", F(MONO, 44), WHITE, 14),
        draw_spaced(d, (540, 86), "SILSILAH BAGINDA RASULULLAH SHALALLAHU ALAIHI WASALLAM", F(MONO, 18), GOLD, 3),
        draw_spaced(d, (540, 112), "HINGGA NABI ADAM ALAIHISSALAM", F(MONO, 18), GOLD, 3)), h=130)
    fname = F(LORA_B, 80); fepi = F(LORA_I, 46); ftask = F(LORA_R, 37); fmono = F(MONO, 27)
    flab = F(MONO, 20)
    dd = ImageDraw.Draw(Image.new("L", (1, 1)))
    ANG_L = []
    for i, (lat, ar, sub, note, sec) in enumerate(ITEMS):
        arlines = ar.split("\n")
        if len(arlines) > 1:
            l1 = gold_text_layer([arlines[0]], fit_arabic([arlines[0]], 260, 80))
            l2 = gold_text_layer([arlines[1]], fit_arabic([arlines[1]], 290, 46))
            b1 = l1.getchannel("A").point(lambda v: 255 if v > 120 else 0).getbbox()
            b2 = l2.getchannel("A").point(lambda v: 255 if v > 120 else 0).getbbox()
            gap = 4
            w_ = max(l1.width, l2.width)
            y2 = b1[3] + gap - b2[1]
            arl = Image.new("RGBA", (w_, y2 + l2.height), (0, 0, 0, 0))
            arl.alpha_composite(l1, ((w_ - l1.width) // 2, 0))
            arl.alpha_composite(l2, ((w_ - l2.width) // 2, y2))
            arl = arl.crop((0, max(0, b1[1] - 40), w_, y2 + b2[3] + 40))
        else:
            arl = gold_text_layer(arlines, fit_arabic(arlines, 290, 104))
        cnt = layer(lambda d, i=i: draw_spaced(d, (540, 30), f"{i+1:02d} / {N}", fmono, (190, 186, 178), 10), h=60)
        prefix = "" if i == 0 else "bin "
        if i == 0:
            nm = layer(lambda d: (
                d.text((540, 45), "Baginda Rasulullah", font=F(LORA_B, 70), fill=WHITE, anchor="mm"),
                d.text((540, 112), "shalallahu alaihi wasallam", font=F(LORA_I, 44), fill=GOLD, anchor="mm"),
                d.text((540, 172), "(Muhammad)", font=F(LORA_B, 50), fill=WHITE, anchor="mm")), h=210)
        else:
          nm = layer(lambda d, lat=lat, prefix=prefix: (
            d.text((540, 55), lat, font=fname, fill=WHITE, anchor="mm"),
            prefix and d.text((540 - fname.getlength(lat) / 2 - 14, 62), prefix.strip(), font=F(LORA_I, 34), fill=(150, 146, 138), anchor="rm")), h=110)
        sub_ = "" if i == 0 else (sub or f"Leluhur ke-{i}")
        fe = fepi
        if sub_:
            fsz = 46
            while F(LORA_I, fsz).getlength(sub_) > 980: fsz -= 2
            fe = F(LORA_I, fsz)
        ep = layer(lambda d, sub_=sub_, fe=fe: d.text((540, 35), sub_, font=fe, fill=GOLD, anchor="mm"), h=75) if sub_ else None
        tl = wrap(note, ftask, 920, dd) if note else []
        tk = text_block(tl, ftask, (222, 219, 212), 52) if tl else Image.new("RGBA", (W, 4), (0, 0, 0, 0))
        lfs, ltr = 20, 4
        while True:
            fl_ = F(MONO, lfs)
            if sum(dd.textlength(c, font=fl_) for c in SECTION_LABEL[sec]) + ltr * len(SECTION_LABEL[sec]) <= 1000 or lfs <= 14: break
            lfs -= 1; ltr = 3 if lfs < 19 else ltr
        lb = layer(lambda d, sec=sec, fl_=fl_, ltr=ltr: draw_spaced(d, (540, 20), SECTION_LABEL[sec], fl_, (125, 122, 116), ltr), h=40)
        ANG_L.append(dict(ar=arl, cnt=cnt, nm=nm, ep=ep, tk=tk, lb=lb))
    # pembuka
    fi = F(LORA_B, 50)
    hq = wrap("\u201cSesungguhnya Allah memilih Kinanah dari keturunan Ismail alaihissalam, memilih Quraisy dari Kinanah, "
              "memilih Bani Hasyim dari Quraisy, dan memilihku dari Bani Hasyim.\u201d", F(LORA_I, 40), 900, dd)
    fam_ar = ["مُحَمَّدُ بْنُ عَبْدِ اللهِ", "بْنِ عَبْدِ الْمُطَّلِبِ", "صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ"]
    flv = F(LORA_R, 34)
    rows = []
    for lab_, val in FAMILY:
        rows.append(layer(lambda d, lab_=lab_, val=val: (
            draw_spaced(d, (408, 26), lab_, F(MONO, 19), GOLD, 3, anchor="r"),
            d.text((436, 26), val, font=flv, fill=WHITE, anchor="lm")), h=52))
    INTRO_L = dict(
        c=layer(lambda d: (d.text((540, 42), "Silsilah mulia", font=F(LORA_B, 40), fill=WHITE, anchor="mm"),
                           d.text((540, 94), "Baginda Rasulullah", font=F(LORA_B, 42), fill=WHITE, anchor="mm"),
                           d.text((540, 148), "shalallahu alaihi wasallam", font=F(LORA_B, 31), fill=GOLD_L, anchor="mm")), h=200),
        q=text_block(hq, F(LORA_I, 40), GOLD, 54),
        s=layer(lambda d: draw_spaced(d, (540, 20), "HADIS RIWAYAT MUSLIM NOMOR 2276", flab, (140, 136, 128), 6), h=40),
        k=layer(lambda d: draw_spaced(d, (540, 20), "BAGIAN 1 · KELUARGA INTI", flab, (125, 122, 116), 5), h=40),
        far=gold_text_layer(fam_ar, fit_arabic(fam_ar, 300, 52), line_gap=0.95),
        ft=layer(lambda d: d.text((540, 45), "Keluarga Inti", font=F(LORA_B, 64), fill=WHITE, anchor="mm"), h=90),
        rows=rows,
        fn=text_block(wrap("Ayah wafat saat Baginda Rasulullah shalallahu alaihi wasallam masih dalam kandungan, ibu wafat saat beliau berusia 6 tahun.",
                           F(LORA_I, 30), 900, dd), F(LORA_I, 30), (200, 196, 186), 40),
    )
    oq = wrap("\u201cSesungguhnya Allah dan para malaikat-Nya bershalawat untuk Nabi (Baginda Rasulullah shalallahu alaihi wasallam).\u201d", F(LORA_I, 44), 920, dd)
    oar = ["إِنَّ اللَّهَ وَمَلَائِكَتَهُ", "يُصَلُّونَ عَلَى النَّبِيِّ"]
    OUTRO_L = dict(
        ar=gold_text_layer(oar, fit_arabic(oar, 300, 58), line_gap=1.0),
        q=text_block(oq, F(LORA_I, 44), WHITE, 58),
        s=layer(lambda d: draw_spaced(d, (540, 20), "SURAH AL-AHZAB AYAT 56", flab, GOLD, 6), h=40),
        c=layer(lambda d: draw_spaced(d, (540, 20), "PERBANYAK SHALAWAT · SIMPAN DAN BAGIKAN", flab, TEAL, 4), h=40),
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
    draw_spaced(d, (x0, 304), "MENELUSURI NASAB", fl, (200, 198, 190), 4, anchor="l")
    pct = f"{int(round(frac * 100))}%"
    draw_spaced(d, (x1, 304), pct, fl, TEAL, 2, anchor="r")
    d.rounded_rectangle((x0, y0, x1, y1), radius=7, outline=(80, 80, 82), width=2, fill=(10, 11, 13))
    segs = N
    sw = (x1 - x0 - 10) / segs
    filled = frac * segs
    for k in range(segs):
        f = max(0.0, min(1.0, filled - k))
        if f <= 0: break
        xa = x0 + 5 + k * sw + 1; xb = xa + (sw - 2) * f
        col = SEC_COL[ITEMS[k][4]]
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
    p = ease((t - starts[i]) / 0.5)
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
    else: frac = (st + ease((t - starts[st]) / 0.5)) / N
    progress_bar(frame, frac, t)
    frame.alpha_composite(DECO)
    # wheel
    wk = st if st >= 0 else -1
    wl = WHEELS[wk].rotate(wheel_angle(t), resample=Image.BICUBIC)
    frame.alpha_composite(wl, (int(CX - WC), int(CY - WC)))
    frame.alpha_composite(PTR)
    BOT = CY + R_OUT + 30
    if st < 0:
        if t < HOOK:
            a = fade(t, 0.3, 0.8) * (1 - fade(t, HOOK - 0.5, 0.5))
            put_c(frame, INTRO_L["c"], CX, CY, a)
            ao = 1 - fade(t, HOOK - 0.5, 0.5)
            put(frame, INTRO_L["q"], CX, BOT + 10, fade(t, 1.6, 0.8) * ao, dy=(1 - fade(t, 1.6, 0.8)) * 20)
            put(frame, INTRO_L["s"], CX, BOT + 30 + INTRO_L["q"].height, fade(t, 2.4, 0.8) * ao)
        else:
            ao = 1 - fade(t, INTRO - 0.45, 0.45)
            put_c(frame, INTRO_L["far"], CX, CY - 10, fade(t, HOOK + 0.2, 0.8) * ao)
            put(frame, INTRO_L["ft"], CX, BOT - 10, fade(t, HOOK + 0.6, 0.6) * ao)
            for k, r in enumerate(INTRO_L["rows"]):
                ar_ = fade(t, FAM_ROW_T[k], 0.4) * ao
                put(frame, r, CX, BOT + 92 + k * 54, ar_, dy=(1 - fade(t, FAM_ROW_T[k], 0.4)) * 10)
            put(frame, INTRO_L["fn"], CX, BOT + 92 + 6 * 54 + 14, fade(t, FAM_ROW_T[-1] + 0.8, 0.7) * ao)
            put(frame, INTRO_L["k"], CX, BOT + 92 + 6 * 54 + 30 + INTRO_L["fn"].height, fade(t, HOOK + 0.6, 0.6) * ao)
    elif st < N:
        L = ANG_L[st]; t0 = starts[st]; t1 = t0 + durs[st]
        out = 1 - fade(t, t1 - 0.25, 0.25)
        a1 = fade(t, t0 + 0.15, 0.35) * out
        put_c(frame, L["ar"], CX, CY - (46 if "\n" in ITEMS[st][1] else 18), a1, 0.94 + 0.06 * fade(t, t0 + 0.15, 0.5))
        put_c(frame, L["cnt"], CX, CY + 86, a1)
        a2 = fade(t, t0 + 0.25, 0.35) * out
        put(frame, L["nm"], CX, BOT, a2, dy=(1 - a2) * 16 if out > .99 else 0)
        a3 = fade(t, t0 + 0.4, 0.35) * out
        nh = L["nm"].height
        if L["ep"] is not None:
            put(frame, L["ep"], CX, BOT + nh - 18, a3)
        tky = BOT + nh + (58 if L["ep"] is not None else 0)
        a4 = fade(t, t0 + 0.6, 0.5) * out
        put(frame, L["tk"], CX, tky, a4, dy=(1 - fade(t, t0 + 0.6, 0.5)) * 14)
        put(frame, L["lb"], CX, tky + 10 + L["tk"].height, a2)
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
    # 1) dengung bass A1 (55 Hz) + harmonik 110/165 seperti referensi
    fade_in = np.clip(tt / 2.5, 0, 1)
    lfo = 1 + 0.08 * np.sin(2 * np.pi * 0.07 * tt)
    out += fade_in * lfo * (0.30 * np.sin(2 * np.pi * 55 * tt) + 0.11 * np.sin(2 * np.pi * 110 * tt + 1.0)
                            + 0.06 * np.sin(2 * np.pi * 165 * tt + 2.0) + 0.012 * np.sin(2 * np.pi * 220 * tt))
    # 2) pad lembut A minor (nada D3, E4, A4, B4, D5, E5 seperti spektrum referensi), sangat pelan
    pad_notes = [146.8, 220.0, 329.6, 440.0, 493.9, 587.3, 659.3]
    for k, f in enumerate(pad_notes):
        env = 0.5 + 0.5 * np.sin(2 * np.pi * (0.021 + 0.007 * k) * tt + k * 1.7)
        out += 0.010 * fade_in * env * (np.sin(2 * np.pi * f * tt + k) + 0.3 * np.sin(2 * np.pi * f * 1.003 * tt))
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
    for ft in FAM_ROW_T:
        add(tick, ft, 0.30)
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
    outdir = os.path.join(S, "out_silsilah"); os.makedirs(outdir, exist_ok=True)
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
        os.system(f"ffmpeg -v error -y -f concat -safe 0 -i {outdir}/list.txt -i {outdir}/audio.wav -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart {outdir}/silsilah.mp4")
        print("done")
