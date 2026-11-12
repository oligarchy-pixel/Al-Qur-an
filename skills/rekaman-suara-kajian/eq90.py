import sys, numpy as np
T = {25:-6.9,31:-7.3,40:-7.2,50:-6.3,63:-4.7,79:-1.1,100:9.6,126:20.0,159:14.2,200:12.2,252:15.5,317:12.0,400:11.2,504:10.1,635:3.8,800:-1.3,1008:-2.5,1270:-3.4,1600:-5.4,2016:-11.6,2540:-12.9,3200:-16.4,4032:-17.9,5080:-23.3,6400:-26.6,8063:-26.0,10159:-30.4,12800:-36.1}
sr=44100; frac=float(sys.argv[3])
x=np.fromfile(sys.argv[1],np.float32).reshape(-1,2).astype(np.float64)
c=np.array(list(T)); tv=np.array(list(T.values()))
def curve(y):
    w=2048; n=len(y)//w; fr=y[:n*w].reshape(n,w); e=(fr**2).mean(1); a=fr[e>np.percentile(e,40)].ravel()
    N=8192; m=len(a)//(N//2)-1; win=np.hanning(N); P=np.zeros(N//2+1)
    for i in range(m): P+=np.abs(np.fft.rfft(a[i*N//2:i*N//2+N]*win))**2
    f=np.fft.rfftfreq(N,1/sr); d=10*np.log10(P/m+1e-20)
    v=np.array([d[(f>=k/2**(1/6))&(f<=k*2**(1/6))].mean() for k in c]); return v-v[(c>=300)&(c<=3000)].mean()
d0=tv-curve(x.mean(1))
diff=np.clip(d0*frac,-6,6); diff[c<45]=np.minimum(diff[c<45],0); diff[c>11000]=np.minimum(diff[c>11000],0)
# EQ domain frekuensi (blok 2^16 overlap-add, gain halus interpolasi log-frekuensi)
B=65536; H=B//2; win=np.hanning(B+1)[:-1]
f=np.fft.rfftfreq(B,1/sr); lf=np.log10(np.maximum(f,1))
gdb=np.interp(lf,np.log10(c),diff); G=10**(gdb/20)
L=len(x); pad=np.zeros((L+2*B,2)); pad[B:B+L]=x; out=np.zeros_like(pad); ws=np.zeros(len(pad))
for i in range(0,len(pad)-B,H):
    seg=pad[i:i+B]*win[:,None]
    out[i:i+B]+=np.fft.irfft(np.fft.rfft(seg,axis=0)*G[:,None],n=B,axis=0); ws[i:i+B]+=win
y=out[B:B+L]/np.maximum(ws[B:B+L],1e-6)[:,None]
d1=tv-curve(y.mean(1)); m=(c>=63)&(c<=8063)
print('selisih per pita awal :',dict(zip(c.astype(int),d0.round(1))))
print('selisih per pita akhir:',dict(zip(c.astype(int),d1.round(1))))
print('rata2 |selisih| 63Hz-8kHz: %.2f -> %.2f dB'%(np.abs(d0[m]).mean(),np.abs(d1[m]).mean()))
y.astype(np.float32).tofile(sys.argv[2])
