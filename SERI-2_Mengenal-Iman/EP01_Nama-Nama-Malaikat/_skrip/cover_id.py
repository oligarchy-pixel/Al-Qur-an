import sys, os
sys.argv = ["x"]
import render as r
from PIL import Image, ImageDraw, ImageFilter
r.build()
W, H = r.W, r.H
fr = r.BG.copy()
fr.alpha_composite(r.DECO)
wl = r.WHEELS[r.N].rotate(-r.STEP * 0.0, resample=Image.BICUBIC)
fr.alpha_composite(wl, (int(r.CX - r.WC), int(r.CY - r.WC)))
fr.alpha_composite(r.PTR)
fr.alpha_composite(r.HEADER, (0, 152))
# progress penuh
r.progress_bar(fr, 1.0, 0)
# arab di tengah roda
ar = r.gold_text_layer(["الْمَلَائِكَةُ"], r.fit_arabic(["الْمَلَائِكَةُ"], 290, 110))
r.put_c(fr, ar, r.CX, r.CY - 12)
cnt = r.layer(lambda d: r.draw_spaced(d, (540, 30), "20 NAMA", r.F(r.MONO, 27), (200, 196, 186), 10), h=60)
r.put_c(fr, cnt, r.CX, r.CY + 92)
fr.alpha_composite(r.WM, (0, r.CY + 126 - 30))
# judul besar di bawah roda
d = ImageDraw.Draw(fr)
BOT = r.CY + r.R_OUT + 40
title1 = r.F(r.LORA_B, 92); title2 = r.F(r.LORA_I, 58)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
gd.text((540, BOT + 60), "Nama-Nama Malaikat", font=title1, fill=(230, 180, 90, 160), anchor="mm")
fr.alpha_composite(glow.filter(ImageFilter.GaussianBlur(14)))
d.text((540, BOT + 60), "Nama-Nama Malaikat", font=title1, fill=r.WHITE, anchor="mm")
d.text((540, BOT + 150), "dan Tugasnya", font=title2, fill=r.GOLD, anchor="mm")
r.draw_spaced(d, (540, BOT + 240), "10 WAJIB DIIMANI · 10 KELOMPOK LAINNYA", r.F(r.MONO, 24), (200, 196, 186), 5)
fr.convert("RGB").save(sys.argv[1] if len(sys.argv) > 1 else "cover_malaikat.png")
