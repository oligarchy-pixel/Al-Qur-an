import sys
sys.argv = ["x"]
import render_barzakh as rb
from PIL import Image, ImageDraw, ImageFilter
rb.build()
W, H = rb.W, rb.H
fr = rb.cs_frame(103.9)
bl = rb.G["blue"].copy(); bl.putalpha(bl.getchannel("A").point(lambda v: int(v * 0.55))); fr.alpha_composite(bl)
vl = Image.new("RGBA", (W, H), (0, 0, 0, 0)); vl.putalpha(rb.G["vig_a"].point(lambda a: int(a * 0.75))); fr.alpha_composite(vl)
fr.alpha_composite(rb.G["grain"][0])
fr.alpha_composite(rb.G["topshade"])
ar = rb.arabic_layer("الْبَرْزَخ", 110)
fr.alpha_composite(ar, (0, 170))
d = ImageDraw.Draw(fr)
t1 = rb.F(rb.LORA_R, 96); t2 = rb.F(rb.LORA_I, 60)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
gd.text((540, 400), "The First Night", font=t1, fill=(0, 0, 0, 220), anchor="mm")
gd.text((540, 490), "in the Grave", font=t1, fill=(0, 0, 0, 220), anchor="mm")
fr.alpha_composite(glow.filter(ImageFilter.GaussianBlur(10)))
d.text((540, 400), "The First Night", font=t1, fill=rb.WHITE, anchor="mm")
d.text((540, 490), "in the Grave", font=t1, fill=rb.WHITE, anchor="mm")
tw = 0
f3 = rb.F(rb.MONO, 22); txt = "WHAT HAPPENS AFTER THEY WALK AWAY"
x = 540 - (sum(d.textlength(c, font=f3) for c in txt) + 4 * (len(txt) - 1)) / 2
for c in txt:
    d.text((x, 572), c, font=f3, fill=rb.GOLD + (255,), anchor="lm"); x += d.textlength(c, font=f3) + 4
fr.alpha_composite(rb.G["wm"], (0, 1440))
fr.convert("RGB").save("/home/user/Al-Qur-an/video-barzakh/cover_barzakh_en.png")
