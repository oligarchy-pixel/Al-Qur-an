import sys
sys.argv = ["x"]
import render as r
from PIL import Image, ImageDraw, ImageFilter
r.build()
W, H = r.W, r.H
fr = r.BG.copy()
fr.alpha_composite(r.DECO)
fr.alpha_composite(r.WHEELS[r.N], (int(r.CX - r.WC), int(r.CY - r.WC)))
fr.alpha_composite(r.PTR)
header = r.layer(lambda d: (
    r.draw_spaced(d, (540, 40), "AL-MALA'IKAH", r.F(r.MONO, 44), r.WHITE, 14),
    r.draw_spaced(d, (540, 92), "THE ANGELS & THEIR DUTIES", r.F(r.MONO, 22), r.GOLD, 7)), h=130)
fr.alpha_composite(header, (0, 152))
# progress bar penuh (label bahasa Inggris)
d = ImageDraw.Draw(fr)
x0, x1, y0, y1 = 140, 940, 322, 358
fl = r.F(r.MONO, 22)
r.draw_spaced(d, (x0, 304), "FAITH IN THE ANGELS", fl, (200, 198, 190), 4, anchor="l")
r.draw_spaced(d, (x1, 304), "100%", fl, r.TEAL, 2, anchor="r")
d.rounded_rectangle((x0, y0, x1, y1), radius=7, outline=(80, 80, 82), width=2, fill=(10, 11, 13))
sw = (x1 - x0 - 10) / r.N
for k in range(r.N):
    xa = x0 + 5 + k * sw + 2
    d.rectangle((xa, y0 + 6, xa + sw - 4, y1 - 6), fill=r.TEAL if k < 10 else (226, 200, 120))
ar = r.gold_text_layer(["الْمَلَائِكَةُ"], r.fit_arabic(["الْمَلَائِكَةُ"], 290, 110))
r.put_c(fr, ar, r.CX, r.CY - 12)
cnt = r.layer(lambda d: r.draw_spaced(d, (540, 30), "20 NAMES", r.F(r.MONO, 27), (200, 196, 186), 10), h=60)
r.put_c(fr, cnt, r.CX, r.CY + 92)
fr.alpha_composite(r.WM, (0, r.CY + 126 - 30))
d = ImageDraw.Draw(fr)
BOT = r.CY + r.R_OUT + 40
t1, t2 = r.F(r.LORA_B, 92), r.F(r.LORA_I, 58)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glow).text((540, BOT + 60), "Names of the Angels", font=t1, fill=(230, 180, 90, 160), anchor="mm")
fr.alpha_composite(glow.filter(ImageFilter.GaussianBlur(14)))
d.text((540, BOT + 60), "Names of the Angels", font=t1, fill=r.WHITE, anchor="mm")
d.text((540, BOT + 150), "and Their Duties", font=t2, fill=r.GOLD, anchor="mm")
r.draw_spaced(d, (540, BOT + 240), "10 TO BELIEVE IN · 10 OTHER GROUPS", r.F(r.MONO, 24), (200, 196, 186), 5)
fr.convert("RGB").save("/home/user/Al-Qur-an/video-malaikat/cover_malaikat_en.png")
