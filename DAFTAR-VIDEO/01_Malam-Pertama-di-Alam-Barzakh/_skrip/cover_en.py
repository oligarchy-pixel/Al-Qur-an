import sys
sys.argv = ["x"]
import render_barzakh as rb
from PIL import Image, ImageDraw, ImageFilter
rb.build()
W, H = rb.W, rb.H
LORA_B = "fontsource-lora-5.3.0/package/files/lora-latin-600-normal.woff"
LORA_BI = "fontsource-lora-5.3.0/package/files/lora-latin-600-italic.woff"
cs = rb.cs_frame(103.9)
# berkas cahaya & cahaya biru di liang (koordinat potongan melintang)
bm = rb.G["beam"]
for bx in (rb.CH_X0 + 26, rb.CH_X1 - 26):
    cs.alpha_composite(bm, (int(bx - bm.width / 2), rb.CH_Y1 - bm.height))
bl = rb.G["blue"].copy(); bl.putalpha(bl.getchannel("A").point(lambda v: int(min(255, v * 0.9)))); cs.alpha_composite(bl)
rb.overlay_dust(cs, 3.0, (200, 215, 255), 1.0, (rb.CH_X0, rb.SURF, rb.CH_X1, rb.CH_Y1))
# geser adegan ke bawah, isi langit di atas
SH = 150
fr = Image.new("RGBA", (W, H), (0, 0, 0, 255))
fr.paste(rb.G["ext_sky"].crop((0, H - SH, W, H)), (0, 0))
fr.paste(cs.crop((0, 0, W, H - SH)), (0, SH))
vl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); vl.putalpha(rb.G["vig_a"].point(lambda a: int(a * 0.85))); fr.alpha_composite(vl)
fr.alpha_composite(rb.G["grain"][0])
fr.alpha_composite(rb.G["topshade"])
d = ImageDraw.Draw(fr)
def spaced(y, txt, size, col, tr=4):
    f = rb.F(rb.MONO, size)
    x = 540 - (sum(d.textlength(c, font=f) for c in txt) + tr * (len(txt) - 1)) / 2
    for c in txt:
        d.text((x, y), c, font=f, fill=col, anchor="lm"); x += d.textlength(c, font=f) + tr
spaced(150, "BARZAKH SERIES · EPISODE 1", 22, (200, 196, 186, 255), 6)
d.line((470, 178, 610, 178), fill=rb.GOLD + (160,), width=2)
ar = rb.arabic_layer("الْبَرْزَخ", 96)
fr.alpha_composite(ar, (0, 190))
t1 = rb.F(LORA_B, 104); t2 = rb.F(LORA_BI, 112)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
gd.text((540, 440), "The First Night", font=t1, fill=(0, 0, 0, 230), anchor="mm")
gd.text((540, 560), "in the Grave", font=t2, fill=(230, 170, 70, 200), anchor="mm")
fr.alpha_composite(glow.filter(ImageFilter.GaussianBlur(16)))
d = ImageDraw.Draw(fr)
d.text((540, 440), "The First Night", font=t1, fill=rb.WHITE, anchor="mm")
d.text((540, 560), "in the Grave", font=t2, fill=(236, 200, 120), anchor="mm")
spaced(650, "WHAT HAPPENS AFTER THEY WALK AWAY", 22, (220, 216, 206, 255), 4)
# kalimat pemancing di bawah
hk = rb.F(rb.LORA_I, 50)
g2 = Image.new("RGBA", (W, H), (0, 0, 0, 0)); ImageDraw.Draw(g2).text((540, 1560), "3 questions. Are you ready?", font=hk, fill=(0, 0, 0, 255), anchor="mm")
fr.alpha_composite(g2.filter(ImageFilter.GaussianBlur(8)))
d = ImageDraw.Draw(fr)
d.text((540, 1560), "3 questions. Are you ready?", font=hk, fill=(225, 230, 245), anchor="mm")
fr.alpha_composite(rb.G["wm"], (0, 1460))
fr.convert("RGB").save("/home/user/Al-Qur-an/video-barzakh/cover_barzakh_en.png")
