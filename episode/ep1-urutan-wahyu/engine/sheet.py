import sys,glob
from PIL import Image,ImageDraw
fs=sorted(glob.glob(sys.argv[1]+'/s_*.png'),key=lambda f:float(f.split('s_')[1][:-4]))
cols=int(sys.argv[3]) if len(sys.argv)>3 else 6; w=240;h=427
rows=(len(fs)+cols-1)//cols; S=Image.new('RGB',(cols*w,rows*h),'black'); d=ImageDraw.Draw(S)
for i,f in enumerate(fs):
    im=Image.open(f).convert('RGB').resize((w,h)); S.paste(im,((i%cols)*w,(i//cols)*h)); d.text(((i%cols)*w+5,(i//cols)*h+5),f.split('s_')[1][:-4],fill='red')
S.save(sys.argv[2],quality=88)
