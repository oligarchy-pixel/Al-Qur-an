import numpy as np, subprocess, wave, sys
SR=48000; DUR=173.0; N=int(SR*DUR); rng=np.random.default_rng(7)
def env(n,a,d): t=np.arange(n)/SR; return np.minimum(1,t/a)*np.exp(-np.maximum(0,t-a)/d)
def lp(x,k): return np.convolve(x,np.ones(k)/k,'same')
def whoosh():
    n=int(.8*SR); x=rng.standard_normal(n); x=lp(x,6)-lp(x,40); t=np.arange(n)/n; return x*np.sin(np.pi*t)**2*.35
def riser():
    n=int(.65*SR); t=np.arange(n)/SR; f=200+1400*(t/t[-1])**2; s=np.sin(2*np.pi*np.cumsum(f)/SR)*.15; x=lp(rng.standard_normal(n),3)*.12; return (s+x)*(t/t[-1])**2
def boom():
    n=int(1.4*SR); t=np.arange(n)/SR; return (np.sin(2*np.pi*(52+20*np.exp(-t*6))*t)*.7+lp(rng.standard_normal(n),30)*.5)*env(n,.005,.35)
def hit():
    n=int(.6*SR); t=np.arange(n)/SR; return (np.sin(2*np.pi*(95+60*np.exp(-t*20))*t)*.6+lp(rng.standard_normal(n),4)*.15*np.exp(-t*60))*env(n,.002,.12)
def tick():
    n=int(.08*SR); t=np.arange(n)/SR; return np.sin(2*np.pi*2400*t)*np.exp(-t*70)*.25
def click():
    n=int(.04*SR); t=np.arange(n)/SR; return (np.sin(2*np.pi*3800*t)+lp(rng.standard_normal(n),2)*.4)*np.exp(-t*160)*.35
def sparkle():
    n=int(1.0*SR); y=np.zeros(n); t=np.arange(n)/SR
    for k in range(7):
        o=int(rng.uniform(0,.45)*SR); f=rng.uniform(2200,5200); m=n-o; tt=np.arange(m)/SR; y[o:]+=np.sin(2*np.pi*f*tt)*np.exp(-tt*9)*.08
    return y
E={'whoosh':[8.2,16.2,20.6,28.2,43.9,57.9,64.6,76.8,92.9,98.2,118.4,135.6,150.9,162.6],
   'riser':[15.9,20.25,27.75],'boom':[16.55,20.9,28.4],'hit':[28.65,43.65,57.75,135.55],
   'tick':[33.6,36.7,38.0,73.2,74.0,85.6,87.0,88.8,90.4,122.6,125.0,128.0,132.2,132.5,132.8,142.6,143.0,145.0,146.8,148.6,154.7,155.9,157.0,158.7,160.1],
   'click':[1.25,2.25],'sparkle':[18.4,21.0,22.0,51.6,66.1,92.9,112.0,128.2,142.6,154.7,164.0,170.0]}
G={'whoosh':.5,'riser':.6,'boom':.55,'hit':.6,'tick':.5,'click':.7,'sparkle':.6}
F={'whoosh':whoosh,'riser':riser,'boom':boom,'hit':hit,'tick':tick,'click':click,'sparkle':sparkle}
sfx=np.zeros(N)
for k,ts in E.items():
    for t0 in ts:
        s=F[k]()*G[k]; o=int(t0*SR); m=min(len(s),N-o); sfx[o:o+m]+=s[:m]
w=wave.open('audio/sfx.wav','wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((np.clip(sfx,-1,1)*32767).astype(np.int16).tobytes()); w.close()
