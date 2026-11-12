import sys, inspect
sys.argv = ["x"]
import render_silsilah as r
from PIL import Image, ImageDraw, ImageFilter
# label roda versi Inggris: "Nabi X" -> "Prophet X"
r.ITEMS = [((it[0].replace("Nabi ", "Prophet ")),) + tuple(it[1:]) for it in r.ITEMS]
src = inspect.getsource(r.make_wheel).replace('"Baginda Rasulullah" if i == 0', '"Rasulullah" if i == 0')
exec(src, r.__dict__)
r.build()
W, H = r.W, r.H
fr = r.BG.copy()
fr.alpha_composite(r.DECO)
fr.alpha_composite(r.WHEELS[r.N], (int(r.CX - r.WC), int(r.CY - r.WC)))
fr.alpha_composite(r.PTR)
header = r.layer(lambda d: (
    r.draw_spaced(d, (540, 40), "NASAB AN-NABI", r.F(r.MONO, 44), r.WHITE, 14),
    r.draw_spaced(d, (540, 92), "THE LINEAGE OF THE FINAL MESSENGER", r.F(r.MONO, 20), r.GOLD, 5)), h=130)
fr.alpha_composite(header, (0, 152))
d = ImageDraw.Draw(fr)
x0, x1, y0, y1 = 140, 940, 322, 358
fl = r.F(r.MONO, 22)
r.draw_spaced(d, (x0, 304), "TRACING THE LINEAGE", fl, (200, 198, 190), 4, anchor="l")
r.draw_spaced(d, (x1, 304), "100%", fl, r.TEAL, 2, anchor="r")
d.rounded_rectangle((x0, y0, x1, y1), radius=7, outline=(80, 80, 82), width=2, fill=(10, 11, 13))
sw = (x1 - x0 - 10) / r.N
for k in range(r.N):
    xa = x0 + 5 + k * sw + 1
    d.rectangle((xa, y0 + 6, xa + sw - 2, y1 - 6), fill=r.SEC_COL[r.ITEMS[k][4]])
# tengah roda: Muhammad + shalawat lengkap
r.put_c(fr, r.ANG_L[0]["ar"], r.CX, r.CY - 46)
cnt = r.layer(lambda d: r.draw_spaced(d, (540, 30), "50 GENERATIONS", r.F(r.MONO, 24), (200, 196, 186), 6), h=60)
r.put_c(fr, cnt, r.CX, r.CY + 86)
fr.alpha_composite(r.WM, (0, r.CY + 126 - 30))
# judul
d = ImageDraw.Draw(fr)
BOT = r.CY + r.R_OUT + 40
t1 = r.F(r.LORA_B, 80); t2 = r.F(r.LORA_I, 46)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
for y, txt in ((BOT + 50, "The Lineage of"), (BOT + 140, "Prophet Muhammad")):
    gd.text((540, y), txt, font=t1, fill=(230, 180, 90, 150), anchor="mm")
fr.alpha_composite(glow.filter(ImageFilter.GaussianBlur(14)))
d.text((540, BOT + 50), "The Lineage of", font=t1, fill=r.WHITE, anchor="mm")
d.text((540, BOT + 140), "Prophet Muhammad", font=t1, fill=r.WHITE, anchor="mm")
d.text((540, BOT + 215), "shalallahu alaihi wasallam", font=t2, fill=r.GOLD, anchor="mm")
r.draw_spaced(d, (540, BOT + 295), "FROM HIS FATHER TO PROPHET ADAM ALAIHISSALAM", r.F(r.MONO, 20), (200, 196, 186), 3)
fr.convert("RGB").save("/home/user/Al-Qur-an/video-silsilah/cover_silsilah_en.png")
