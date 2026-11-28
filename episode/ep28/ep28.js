// =====================================================================
// EP28 · MENGENAL AL-QUR'AN · QS AN-NISA 1
// Audio asli dipertahankan. Visual 2D abstrak; tanpa gambar Allah, Nabi,
// Sahabat, malaikat, individu, janin yang menderita, atau kelompok sasaran.
const W = '#f2f0e7', YL = Y, CREAM = '#f7f2e7';
const fullW = 'left:0;top:0';
const line = (t0, t1, css, text, o = {}) => kin(
  node('', css + `;font:${o.w || 760} ${o.fs || 42}px Inter;color:${o.c || W};line-height:${o.lh || 1.25};text-align:${o.align || 'left'}`),
  text, t0, { iv: o.iv || .03, marks: o.m || [], t1 }
);
const card = (html, css, t0, t1, kind = 'up', sound = 'click') => {
  const n = node(html, css, 'dimmable'); show(n, t0, kind, t1); sfx(t0, sound, .48); return n;
};
const tile = (title, body, color = YL, w = 420, fs = 31) =>
  `<div style="width:${w}px;min-height:152px;border:3px solid ${color};border-radius:12px;padding:20px 23px;background:rgba(8,13,29,.96)"><div class="mono" style="font-size:16px;color:${color};letter-spacing:.1em">${title}</div><div style="font:800 ${fs}px Inter;line-height:1.15;margin-top:14px;color:${W}">${body}</div></div>`;
const arabic = (text, css, t0, dur, t1, marks = []) => arw(
  node(text, css + ';font-family:Amiri,serif;direction:rtl;unicode-bidi:isolate'), t0, dur, { t1, marks }
);
const halo = (cx, cy, r, col = YL, delay = 0) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${col}" stroke-width="3" data-d="${Math.ceil(2*Math.PI*r)}" data-del="${delay}"/>`;
const dot = (cx, cy, r = 8, col = YL, delay = 0) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${col}" data-f="${delay}"/>`;
const frame = (t0, t1, title, footer, extra = '') => {
  label(title, t0 + .05, 'left:160px;top:278px', t1);
  if (footer) chip(footer, t0 + .18, 'left:160px;top:900px', t1, YL);
};

// 01 · pembuka, foto penyampai, dan bismillah
scene(0, 11.0, { cut: 'none' });
label('MENGENAL AL-QUR\'AN · EPISODE 28', .18, 'left:160px;top:285px', 11.0);
seg('DARI SATU JIWA', .55, 'left:160px;top:365px;width:980px', { size: 78, iv: .035 });
seg('MENUJU IKATAN KELUARGA', 1.55, 'left:160px;top:470px;width:1000px', { size: 55, iv: .032, color: YL });
chip('SURAH AN-NISA · AYAT 1', 3.3, 'left:160px;top:600px', 11.0, YL);
mePol('left:1320px;top:330px', .5, 11.0, -3, 300);
arabic('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 'left:220px;top:730px;width:900px;text-align:left;font-size:44px;color:#fff', 4.8, 2.2, 11.0);

// 02 · ayat dibaca utuh, panel kertas krem
scene(11.0, 27.5, { cut: 'clean' });
frame(11.0, 27.5, 'QS AN-NISA · AYAT 1', 'TEKS AYAT · BUKAN TAFSIR');
paper(11.15, 'left:160px;top:350px;width:1600px;height:480px;padding:34px 46px', '<div class="hd">سورة النساء · ١</div>', 27.5);
arabic('يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا', 'left:215px;top:420px;width:1490px;text-align:center;font-size:47px;line-height:1.75;color:#151515', 11.4, 7.6, 27.5, [15.2, 18.1, 23.0]);

// 03 · terjemah dan perintah yang dibacakan
scene(27.5, 45.7, { cut: 'none' });
frame(27.5, 45.7, 'PANGGILAN AYAT · KEPADA MANUSIA', 'RINGKASAN MAKNA DALAM CERAMAH');
line(27.8, 45.7, 'left:205px;top:350px;width:1510px;text-align:center', '“Bertakwalah kepada Tuhanmu; junjung perintah-Nya dan jauhi larangan-Nya.”', { fs: 40, m: [31.0, 38.0] });
[
  ['01 · TAKWA', 31.0], ['02 · JUNJUNG PERINTAH', 35.0], ['03 · JAUHI LARANGAN', 39.0]
].forEach(([s,t],i)=>card(tile(s, s.split(' · ')[1], i===1?W:YL, 410, 28), `left:${190+i*500}px;top:560px`, t, 45.7, i===1?'left':'up', 'tick'));

// 04 · ayat sebagai peringatan dan ajakan
scene(45.7, 57.4, { cut: 'none' });
frame(45.7, 57.4, 'PERINGATAN · PERINTAH LANGSUNG', 'PENJELASAN NARASUMBER');
sv(45.85, 57.4, DEFS + halo(960,590,215,YL,0) + halo(960,590,300,W,.5) +
  `<path d="M960 390 V760 M770 575 H1150" fill="none" stroke="${YL}" stroke-width="4" data-d="750" data-del="1"/>` +
  T(960,535,'TAKWA',{f:.2,fs:44,c:YL}) + T(960,650,'PERINTAH',{f:1.0,fs:29,c:W}) + T(960,705,'LARANGAN',{f:1.8,fs:29,c:W}), fullW,1920,1080,1.0);
line(46.2,57.4,'left:340px;top:810px;width:1240px;text-align:center','Ajakan untuk bertakwa kepada Tuhan yang menciptakan kita.',{fs:34,m:[51.3]});

// 05 · frasa ayat tentang pasangan
scene(57.4, 63.7, { cut: 'none' });
frame(57.4, 63.7, 'FRASA AYAT · PASANGAN', 'QS AN-NISA:1');
paper(57.6,'left:330px;top:420px;width:1260px;height:245px;padding:38px 50px','',63.7);
arabic('وَخَلَقَ مِنْهَا زَوْجَهَا','left:390px;top:465px;width:1140px;text-align:center;font-size:66px;color:#151515',57.7,1.2,63.7,[58.6]);
line(59.0,63.7,'left:440px;top:600px;width:1040px;text-align:center','“Pasangannya, istrinya.”',{fs:38,c:'#151515',m:[60.0]});

// 06 · narasi tentang Adam dan Hawa, ruang kosong tanpa tokoh
scene(63.7, 78.7, { cut: 'clean' });
frame(63.7,78.7,'KISAH YANG DINUKIL DALAM CERAMAH','PENUTURAN · TANPA REKONSTRUKSI TOKOH');
sv(63.9,78.7,DEFS +
  LN([[380,610],[700,610],[960,610],[1220,610],[1540,610]],{s:YL,sw:4,del:.3}) +
  [0,1,2,3,4].map((i)=>dot(380+i*290,610,9,i===2?W:YL,.4+i*.55)).join('') +
  T(380,510,'SENDIRIAN',{f:.6,fs:23,c:W}) + T(700,510,'TERTIDUR',{f:1.2,fs:23,c:YL}) + T(960,510,'RUSUK KIRI',{f:1.8,fs:23,c:W}) + T(1220,510,'HAWA',{f:2.4,fs:23,c:YL}) + T(1540,510,'PASANGAN',{f:3.0,fs:23,c:W}), fullW,1920,1080,.9);
line(64.0,78.7,'left:360px;top:760px;width:1200px;text-align:center','Audio menuturkan Adam sendirian, lalu kisah penciptaan Hawa.',{fs:36,m:[70.2]});

// 07 · klaim hubungan komando diberi sumber ucapan
scene(78.7,89.6,{cut:'none'});
frame(78.7,89.6,'PENJELASAN NARASUMBER','BUKAN KUTIPAN LANGSUNG AYAT');
line(78.9,89.6,'left:260px;top:385px;width:1400px;text-align:center','“Perempuan mesti berada di bawah komando, di bawah pengawasan laki-laki.”',{fs:40,m:[80.0,84.5]});
sv(79.0,89.6,DEFS + BOX(460,595,1000,145,{s:YL,sw:4}) +
  T(960,655,'PANDANGAN YANG DIUCAPKAN DALAM AUDIO',{f:.6,fs:24,c:YL}) + T(960,700,'DIPISAHKAN DARI TEKS AYAT',{f:1.7,fs:22,c:W}),fullW,1920,1080,.9);

// 08 · alasan yang dipaparkan, tidak dibuat sebagai diagram kuasa
scene(89.6,101.7,{cut:'none'});
frame(89.6,101.7,'ALASAN YANG DISEBUT PEMBICARA','KLAIM DALAM CERAMAH');
card(tile('UCAPAN', '“bagian dari tubuh laki-laki”', YL, 660, 36),'left:610px;top:430px',90.2,101.7,'left','paper');
sv(90.4,101.7,DEFS + halo(960,735,82,YL,0) + halo(960,735,132,W,.8) +
  T(960,755,'ASAL PENCIPTAAN',{f:1.5,fs:24,c:W}),fullW,1920,1080,.9);

// 09 · banyaknya keturunan, dibaca dari ayat
scene(101.7,117.6,{cut:'none'});
frame(101.7,117.6,'وَبَثَّ مِنْهُمَا · KETURUNAN','QS AN-NISA:1');
arabic('وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً','left:330px;top:350px;width:1260px;text-align:center;font-size:58px;color:#fff',101.9,2.6,117.6,[104.0]);
sv(102.1,117.6,DEFS +
  `<path d="M960 560 V660 M960 660 L570 785 M960 660 L1350 785" fill="none" stroke="${YL}" stroke-width="4" data-d="830" data-del=".3"/>` +
  BOX(330,770,480,100,{s:W,sw:3}) + BOX(1110,770,480,100,{s:YL,sw:3,del:.8}) +
  T(570,835,'رِجَالًا كَثِيرًا',{f:.9,fs:27,c:W,ff:'Amiri'}) + T(1350,835,'وَنِسَاءً',{f:1.5,fs:30,c:YL,ff:'Amiri'}),fullW,1920,1080,.9);

// 10 · nama Qabil dan Habil, tanpa kekerasan visual
scene(117.6,122.0,{cut:'none'});
frame(117.6,122.0,'NAMA DALAM PENUTURAN','TANPA REKONSTRUKSI KEKERASAN');
card(tile('HABIL','dibunuh oleh Qabil',W,510,33),'left:700px;top:470px',118.0,122.0,'up','paper');
chip('QABIL · HABIL',118.2,'left:820px;top:690px',122.0,YL);

// 11 · Syits dan rantai nasab yang disebut narasumber
scene(122.0,134.2,{cut:'none'});
frame(122.0,134.2,'NASAB YANG DISEBUT DALAM CERAMAH','PENUTURAN SEJARAH · BUKAN TEKS AYAT');
sv(122.15,134.2,DEFS +
  LN([[300,630],[1620,630]],{s:YL,sw:4,del:.3}) +
  [0,1,2,3,4].map(i=>dot(330+i*315,630,8,i===0?YL:W,.5+i*.5)).join('') +
  T(330,550,'SYITS',{f:.5,fs:26,c:YL}) + T(645,550,'IDRIS',{f:1.0,fs:26,c:W}) + T(960,550,'NUH',{f:1.5,fs:26,c:W}) + T(1275,550,'IBRAHIM',{f:2,fs:26,c:W}) + T(1590,550,'BERIKUTNYA',{f:2.5,fs:21,c:YL}),fullW,1920,1080,.9);
line(122.3,134.2,'left:320px;top:770px;width:1280px;text-align:center','Penyampai menghubungkan nasab dari Syits ke para nabi berikutnya.',{fs:34,m:[127.3]});

// 12 · transisi ke nutfah
scene(134.2,140.1,{cut:'none'});
frame(134.2,140.1,'DARI KETURUNAN MENUJU HADIS','KATA KUNCI · نُطْفَة');
sv(134.4,140.1,DEFS + halo(960,590,100,YL,0) + dot(960,590,12,YL,.6) + T(960,770,'نُطْفَة',{f:1.2,fs:63,c:W,ff:'Amiri'}),fullW,1920,1080,.8);

// 13 · sanad pengantar hadis Ibn Mas'ud
scene(140.1,154.1,{cut:'clean'});
frame(140.1,154.1,'HADIS · ABDULLAH BIN MAS‘UD','SAHIH AL-BUKHARI 3208 · SAHIH MUSLIM 2643a');
card(tile('PERAWI','عبد الله بن مسعود رضي الله عنه',YL,780,36),'left:570px;top:440px',141.1,154.1,'left','paper');
line(141.4,154.1,'left:360px;top:680px;width:1200px;text-align:center','Diriwayatkan oleh Abdullah bin Mas‘ud radhiyallahu ‘anhu.',{fs:36,m:[145.0]});

// 14 · frasa sanad yang dibacakan
scene(154.1,159.6,{cut:'none'});
frame(154.1,159.6,'PENGANTAR MATAN HADIS','KUTIPAN YANG TERDENGAR');
arabic('حَدَّثَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَهُوَ الصَّادِقُ الْمَصْدُوقُ','left:260px;top:430px;width:1400px;text-align:center;font-size:48px;line-height:1.7;color:#fff',154.3,2.5,159.6,[156.5]);

// 15 · empat puluh hari pertama
scene(159.6,172.9,{cut:'none'});
frame(159.6,172.9,'مِنْ نُطْفَةٍ · EMPAT PULUH HARI','MATAN HADIS · SAHIHAYN');
arabic('إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً','left:300px;top:350px;width:1320px;text-align:center;font-size:50px;line-height:1.7;color:#fff',159.8,3.3,172.9,[164.0]);
sv(160.0,172.9,DEFS + halo(960,690,120,YL,0) + dot(960,690,12,W,.5) + T(960,860,'٤٠ · يَوْمًا',{f:.8,fs:34,c:YL,ff:'Amiri'}),fullW,1920,1080,.9);

// 16 · keterangan nutfah dalam uraian
scene(172.9,183.0,{cut:'none'});
frame(172.9,183.0,'PENJELASAN NARASUMBER','VISUAL ABSTRAK · TANPA ANATOMI JANIN');
sv(173.05,183.0,DEFS +
  halo(650,590,55,YL,0) + halo(1270,590,55,W,.6) +
  LN([[710,590],[880,590],[1040,590],[1210,590]],{s:YL,sw:4,del:.8}) + halo(960,590,90,YL,1.3) +
  T(650,735,'نُطْفَةٌ',{f:.4,fs:32,c:YL,ff:'Amiri'}) + T(1270,735,'نُطْفَةٌ',{f:1.0,fs:32,c:W,ff:'Amiri'}) + T(960,800,'RAHIM · MENURUT URAIAN AUDIO',{f:1.6,fs:22,c:W}),fullW,1920,1080,.9);

// 17 · tanah pemakaman: ditandai sebagai tambahan uraian, bukan kutipan hadis tersebut
scene(183.0,192.0,{cut:'none'});
frame(183.0,192.0,'TAMBAHAN DALAM URAIAN PEMBICARA','TIDAK DITAMPILKAN SEBAGAI MATAN HADIS');
sv(183.2,192.0,DEFS +
  BOX(550,470,820,220,{s:YL,sw:4}) +
  [0,1,2,3,4,5,6].map(i=>dot(700+i*95,565+(i%2)*48,5,i%2?W:YL,.4+i*.25)).join('') +
  T(960,765,'TANAH TEMPAT PEMAKAMAN',{f:1.1,fs:27,c:W}),fullW,1920,1080,.9);
line(184.0,192.0,'left:400px;top:780px;width:1120px;text-align:center','Bagian tentang tanah dipertahankan hanya sebagai uraian narasumber.',{fs:31,m:[189.8]});

// 18 · alaqah
scene(192.0,197.9,{cut:'none'});
frame(192.0,197.9,'TAHAP BERIKUTNYA · عَلَقَة','MATAN HADIS · ٤٠ HARI');
paper(192.15,'left:350px;top:420px;width:1220px;height:270px;padding:34px', '',197.9);
arabic('ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ','left:390px;top:450px;width:1140px;text-align:center;font-size:58px;color:#151515',192.2,1.5,197.9,[193.5]);
line(195.0,197.9,'left:420px;top:610px;width:1080px;text-align:center','“Kemudian menjadi ‘alaqah selama masa yang sama.”',{fs:32,c:'#151515'});

// 19 · mudghah
scene(197.9,205.2,{cut:'none'});
frame(197.9,205.2,'TAHAP KETIGA · مُضْغَة','MATAN HADIS · ٤٠ HARI');
arabic('ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ','left:350px;top:385px;width:1220px;text-align:center;font-size:62px;color:#fff',198.0,1.3,205.2,[199.0]);
sv(198.2,205.2,DEFS + [0,1,2].map(i=>halo(720+i*240,700,46,i===1?W:YL,.3+i*.55)).join('') + T(960,825,'مُضْغَةٌ · MASA YANG SAMA',{f:1.9,fs:27,c:W,ff:'Amiri'}),fullW,1920,1080,.8);

// 20 · tiga tahap sebagai urutan dalam matan hadis
scene(205.2,216.7,{cut:'clean'});
frame(205.2,216.7,'TIGA MASA · ٤٠ + ٤٠ + ٤٠','RINGKASAN MATAN HADIS');
steps(['نُطْفَة · ٤٠','عَلَقَة · ٤٠','مُضْغَة · ٤٠'],206.0,3.0,'left:240px;top:490px',216.7);
sv(206.2,216.7,DEFS + LN([[370,755],[960,755],[1550,755]],{s:YL,sw:4,del:.5}) + T(960,850,'ثَلَاثَةُ مَرَاحِلَ · ١٢٠ يَوْمًا',{f:1.5,fs:28,c:W,ff:'Amiri'}),fullW,1920,1080,.8);

// 21 · tahap perkembangan selanjutnya
scene(216.7,221.6,{cut:'none'});
frame(216.7,221.6,'ALUR BERLANJUT','PENJELASAN PEMBICARA');
sv(216.9,221.6,DEFS +
  LN([[440,650],[760,650],[960,650],[1160,650],[1480,650]],{s:YL,sw:4,del:.3}) +
  [0,1,2,3,4].map(i=>dot(440+i*260,650,8,i===4?YL:W,.4+i*.35)).join('') +
  T(960,780,'TAHAP BERIKUTNYA',{f:1.4,fs:31,c:W}),fullW,1920,1080,.8);

// 22 · malaikat dan peniupan ruh: teks, bukan ilustrasi malaikat
scene(221.6,229.6,{cut:'none'});
frame(221.6,229.6,'FRASA MATAN · RANGKAIAN HADIS','TANPA PENGGAMBARAN MALAIKAT');
arabic('ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ','left:300px;top:420px;width:1320px;text-align:center;font-size:54px;line-height:1.75;color:#fff',221.8,2.8,229.6,[224.0,226.0]);
sv(222.0,229.6,DEFS + halo(960,760,88,YL,1.2) + T(960,775,'الرُّوحُ',{f:1.5,fs:44,c:W,ff:'Amiri'}),fullW,1920,1080,.8);

// 23 · angka waktu yang diucapkan pembicara, dilabeli sebagai uraian
scene(229.6,235.1,{cut:'none'});
frame(229.6,235.1,'ANGKA WAKTU DALAM URAIAN PEMBICARA','TIDAK DITAMBAHKAN KE KUTIPAN MATAN');
line(229.8,235.1,'left:420px;top:430px;width:1080px;text-align:center','“Empat bulan atau lebih sehari.”',{fs:44,m:[230.8]});
chip('٤ أَشْهُر · MENURUT UCAPAN',231.0,'left:680px;top:620px',235.1,YL);

// 24 · peralihan menuju fikih dan tasawuf
scene(235.1,242.5,{cut:'clean'});
frame(235.1,242.5,'HIKMAH YANG DISEBUT PEMBICARA','FIQIH · TASAWUF');
sv(235.3,242.5,DEFS +
  BOX(310,470,560,230,{s:YL,sw:4}) + BOX(1050,470,560,230,{s:W,sw:4,del:.7}) +
  T(590,565,'FIQIH',{f:.4,fs:41,c:YL}) + T(590,625,'HUKUM',{f:1.0,fs:25,c:W}) + T(1330,565,'TASAWUF',{f:1.2,fs:39,c:W}) + T(1330,625,'TAHAPAN',{f:1.8,fs:25,c:YL}) +
  LN([[870,585],[1050,585]],{s:YL,sw:4,del:2.2}),fullW,1920,1080,.9);

// 25 · pertanyaan fikih
scene(242.5,251.0,{cut:'none'});
frame(242.5,251.0,'PERTANYAAN FIKIH · KEGUGURAN','URAIAN NARASUMBER');
line(242.8,251.0,'left:300px;top:390px;width:1320px;text-align:center','Bagaimana memperlakukan kandungan yang gugur?',{fs:43,m:[245.0]});
card(tile('DASAR PEMBAGIAN', 'bentuk keguguran', YL, 620, 36),'left:650px;top:570px',247.2,251.0,'up','paper');

// 26 · pengantar empat kategori
scene(251.0,256.6,{cut:'none'});
frame(251.0,256.6,'EMPAT KATEGORI','MENURUT PENJELASAN DALAM AUDIO');
[0,1,2,3].forEach(i=>card(`<div style="width:106px;height:106px;border:3px solid ${i===0?YL:W};border-radius:50%;display:flex;align-items:center;justify-content:center;color:${i===0?YL:W};font:800 34px Inter">0${i+1}</div>`,`left:${540+i*220}px;top:510px`,251.4+i*.7,256.6,'scale','tick'));
line(252.0,256.6,'left:360px;top:690px;width:1200px;text-align:center','Poin hukum ini dipertahankan sebagai ringkasan ucapan pembicara.',{fs:30});

// 27 · kategori pertama
scene(256.6,263.7,{cut:'none'});
frame(256.6,263.7,'01 · مُضْغَة','URAIAN FIKIH YANG DIBACAKAN');
card(tile('MENURUT AUDIO','dikuburkan bila dikehendaki; tidak wajib',YL,760,31),'left:580px;top:450px',257.0,263.7,'left','paper');
chip('1 / 4',257.4,'left:920px;top:690px',263.7,YL);

// 28 · kategori kedua
scene(263.7,271.1,{cut:'none'});
frame(263.7,271.1,'02 · BELUM EMPAT BULAN, SUDAH BERBENTUK','MENURUT UCAPAN PEMBICARA');
steps(['BERBENTUK','DIKAFANKAN','DIKUBURKAN'],264.0,2.2,'left:250px;top:520px',271.1);
chip('2 / 4 · “WAJIB” MENURUT NARASUMBER',264.4,'left:500px;top:760px',271.1,YL);

// 29 · kategori ketiga
scene(271.1,280.0,{cut:'none'});
frame(271.1,280.0,'03 · SESUDAH EMPAT BULAN','TANPA TANDA KEHIDUPAN · MENURUT AUDIO');
steps(['DIMANDIKAN','DIKAFANKAN','DIKUBURKAN'],271.5,2.5,'left:250px;top:510px',280.0);
chip('3 / 4 · RINGKASAN CERAMAH',272.0,'left:630px;top:760px',280.0,YL);

// 30 · kategori keempat
scene(280.0,289.0,{cut:'none'});
frame(280.0,289.0,'04 · ADA TANDA KEHIDUPAN','SESUDAH EMPAT BULAN · MENURUT AUDIO');
sv(280.2,289.0,DEFS + halo(960,580,115,YL,0) +
  T(960,575,'4 / 4',{f:.5,fs:56,c:YL}) + T(960,665,'DIPERLAKUKAN SEPERTI ORANG WAFAT',{f:1.2,fs:26,c:W}),fullW,1920,1080,.8);
chip('BUKAN PANDUAN MEDIS / FATWA KASUS PRIBADI',281.0,'left:450px;top:805px',289.0,YL);

// 31 · konsep bertahap dalam tasawuf
scene(289.0,299.1,{cut:'clean'});
frame(289.0,299.1,'TASAWUF · TAHAPAN','ANALOGI YANG DISEBUT NARASUMBER');
steps(['TAHAP 1','TAHAP 2','TAHAP 3'],289.3,2.7,'left:350px;top:500px',299.1);
line(290.0,299.1,'left:380px;top:730px;width:1160px;text-align:center','Empat puluh hari, empat puluh hari, empat puluh hari.',{fs:35,m:[292.0,295.4]});

// 32 · jalan makrifat sebagai tahapan; bukan grafik biologis
scene(299.1,307.9,{cut:'none'});
frame(299.1,307.9,'TAHAPAN MENUJU MA‘RIFAT','ANALOGI DALAM CERAMAH');
sv(299.3,307.9,DEFS +
  [0,1,2,3,4].map(i=>`<path d="M${430+i*265} 760 L${500+i*265} ${690-i*60}" fill="none" stroke="${i===4?YL:W}" stroke-width="4" data-d="${Math.ceil(Math.hypot(70,70+i*60))}" data-del="${i*.55}"/>`).join('') +
  T(960,520,'مَعْرِفَةٌ',{f:.4,fs:45,c:YL,ff:'Amiri'}) + T(960,845,'TAHAPAN · ANALOGI TASAWUF',{f:2.1,fs:24,c:W}),fullW,1920,1080,.9);
line(299.5,307.9,'left:400px;top:590px;width:1120px;text-align:center','Tahapan itu disamakan dengan perjalanan mengenal Allah.',{fs:34,m:[303.0]});

// 33 · contoh penghayatan yang disebut penyampai
scene(307.9,321.3,{cut:'none'});
frame(307.9,321.3,'CONTOH RENUNGAN YANG DIUCAPKAN','TIGA TEMA · IKHLAS · KEDERKATAN · IBADAH');
[
  ['IKHLAS','قُلْ هُوَ اللَّهُ أَحَدٌ',308.2],
  ['KEDERKATAN','حَبْلِ الْوَرِيدِ',312.4],
  ['IBADAH','لِيَعْبُدُونِ',316.3]
].forEach(([h,ar,t],i)=>card(`<div style="width:420px;min-height:210px;padding:22px;border:3px solid ${i===1?W:YL};background:rgba(8,13,29,.96);border-radius:12px;text-align:center"><div class="mono" style="font-size:16px;color:${i===1?W:YL}">${h}</div><div class="ar" style="font-size:34px;margin-top:25px;color:#fff">${ar}</div></div>`,`left:${210+i*500}px;top:470px`,t,321.3,'up','paper'));
line(309.0,321.3,'left:350px;top:760px;width:1220px;text-align:center','Contoh frasa disebut untuk menghadirkan keyakinan di dalam hati.',{fs:30,m:[318.0]});

// 34 · pembicara menyebut hukum atas pengguguran dengan sengaja
scene(321.3,333.3,{cut:'none'});
frame(321.3,333.3,'KLAIM HUKUM DALAM CERAMAH','PENJELASAN NARASUMBER · BUKAN FATWA PRIBADI');
line(321.5,333.3,'left:280px;top:390px;width:1360px;text-align:center','Pembicara menyebut pengguguran kandungan yang sudah hidup dengan sengaja sebagai dosa besar.',{fs:38,m:[325.0,329.0]});
card(tile('STATUS DALIL', 'riwayat yang dikutip belum dipastikan',YL,690,31),'left:615px;top:600px',328.0,333.3,'left','paper');

// 35 · satu tab pustaka kitab berisi pemeriksaan empat kelompok sumber
scene(333.3,359.7,{cut:'clean'});
const ST28={type:1.0,scan:4.3,res:8.0,click:10.0,det:11.4};
searchFind(333.3,359.7,{
  tabTitle:'Ep28 · pemeriksaan empat dalil',css:'left:210px;top:110px',
  q:'مصادر حديث الجنين والرحم',count:4,pick:2,shelfPick:2,scroll:22,times:ST28,
  shelf:[
    ['QS An-Nisa · 1','النساء'],
    ['Sahih al-Bukhari · 3208','البخاري'],
    ['Syarh Sunan Ibn Majah · 259','شرح ابن ماجه'],
    ['Al-Adab al-Mufrad · 63','الأدب المفرد'],
    ['Sunan Ibn Majah · 1609','سنن ابن ماجه']
  ],
  results:[
    {title:'QS An-Nisa 4:1 · Tafsir al-Tabari',tag:'AYAT · TERVERIFIKASI',ar:'وَالْأَرْحَامَ',sub:'Ayat menyebut hubungan kekerabatan; tafsir dipisahkan dari teks ayat.'},
    {title:'Ibn Mas‘ud · Bukhari 3208 / Muslim 2643a',tag:'SAHIH',ar:'أَرْبَعِينَ يَوْمًا · رِزْقَهُ · أَجَلَهُ',sub:'Tiga masa dan empat ketetapan; tanah pemakaman tidak terlihat pada redaksi yang diperiksa.'},
    {title:'Jubb al-Huzn · riwayat yang berbeda',tag:'LEMAH · BUKAN KISAH JANIN',ar:'تَعَوَّذُوا بِاللَّهِ مِنْ جُبِّ الْحَزَنِ',sub:'Penjelasan Shamela menilai jalur yang dibahas lemah; bukan dialog janin dalam audio.'},
    {title:'“Rahmat tidak turun…” · Al-Adab al-Mufrad 63',tag:'SANAD SANGAT LEMAH',ar:'إِنَّ الرَّحْمَةَ لَا تَنْزِلُ عَلَى قَوْمٍ',sub:'Tercatat di Al-Adab al-Mufrad; Dorar menilai sanadnya daif jiddan.'}
  ],
  det:{
    title:'PEMERIKSAAN SUMBER · EP28',ar:'مُرَاجَعَةُ الْمَصَادِرِ',
    rows:[
      ['01 · AYAT','An-Nisa:1 diverifikasi; teks ayat dipisah dari tafsir.'],
      ['02 · TAFSIR','Al-Tabari menekankan hak kerabat dan larangan memutus rahim.'],
      ['03 · HADIS','Bukhari 3208 dan Muslim 2643a: tiga masa 40 hari dan empat catatan.'],
      ['04 · TAMBAHAN','Tanah pemakaman dan tambahan “sehari” tidak ada pada dua matan yang dibuka.'],
      ['05 · JUBB','Jubb al-Huzn adalah riwayat lain; halaman syarah menilai sanad yang dibahas lemah.'],
      ['06 · JANIN','Ibn Majah 1609 berisi redaksi berbeda; pada halaman tertulis daif.'],
      ['07 · RAHIM','Al-Adab al-Mufrad 63 tercatat; Dorar menilai sanad sangat lemah.']
    ],quote:'تَحْقِيقُ الْمَصَادِرِ · STATUS RIWAYAT DITAMPILKAN TERPISAH'
  }
});
camTour(333.3,359.7,ST28);

// 36 · cerita diteruskan, tanpa menyalin frasa Arab yang tidak pasti
scene(359.7,369.9,{cut:'none'});
frame(359.7,369.9,'RIWAYAT YANG DIBACAKAN','KUTIPAN ARAB TIDAK DITEBAK');
sv(359.9,369.9,DEFS +
  [0,1,2,3,4,5,6,7].map(i=>`<path d="M${390+i*160} ${650+(i%2)*40} v${55+(i%3)*25}" stroke="${i%2?W:YL}" stroke-width="4" data-d="${55+(i%3)*25}" data-del="${i*.2}"/>`).join('') +
  T(960,500,'NARASI DALAM AUDIO',{f:.5,fs:29,c:YL}) + T(960,825,'STATUS SUMBER · BELUM TERVERIFIKASI',{f:2.2,fs:22,c:W}),fullW,1920,1080,.9);

// 37 · alur cerita, tanpa gambaran hukuman atau makhluk gaib
scene(369.9,387.5,{cut:'none'});
frame(369.9,387.5,'CERITA BERLANJUT DALAM AUDIO','RIWAYAT SPESIFIK · SUMBER BELUM DITEMUKAN');
line(370.2,387.5,'left:330px;top:390px;width:1260px;text-align:center','Narator meneruskan kisah dan dialog yang dinisbatkan kepada janin.',{fs:37,m:[377.4]});
sv(370.3,387.5,DEFS +
  BOX(570,560,780,200,{s:YL,sw:4}) + T(960,635,'DIALOG DALAM RIWAYAT',{f:.6,fs:27,c:YL}) + T(960,700,'TIDAK DITAMPILKAN SEBAGAI HADIS SAHIH',{f:1.4,fs:21,c:W}),fullW,1920,1080,.8);

// 38 · nama Jubb al-Ahzan, tanpa ilustrasi neraka/binatang
scene(387.5,402.8,{cut:'none'});
frame(387.5,402.8,'NAMA TEMPAT DALAM CERITA','TIDAK DIREKONSTRUKSI SECARA VISUAL');
card(tile('LAFAZ DALAM AUDIO','جُبُّ الْأَحْزَانِ',YL,600,38),'left:660px;top:430px',388.0,402.8,'up','paper');
line(390.0,402.8,'left:340px;top:680px;width:1240px;text-align:center','Sumber yang ditemukan tentang Jubb al-Huzn adalah riwayat berbeda dan lemah.',{fs:31,m:[392.7]});
chip('JUBB AL-HUZN ≠ KISAH JANIN INI',394.0,'left:560px;top:800px',402.8,YL);

// 39 · transisi kembali ke hadis
scene(402.8,409.9,{cut:'none'});
frame(402.8,409.9,'KEMBALI KE MATAN HADIS','TRANSISI · DARI CERITA KE EMPAT CATATAN');
sv(403.0,409.9,DEFS + LN([[420,690],[750,690],[960,690],[1170,690],[1500,690]],{s:YL,sw:4,del:.4}) +
  [0,1,2,3,4].map(i=>dot(420+i*270,690,8,i===4?YL:W,.5+i*.35)).join('') + T(960,820,'أَرْبَعِ كَلِمَاتٍ',{f:2.0,fs:35,c:W,ff:'Amiri'}),fullW,1920,1080,.8);

// 40 · empat perkara yang ditulis
scene(409.9,419.9,{cut:'clean'});
frame(409.9,419.9,'وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ','RINGKASAN HADIS · EMPAT CATATAN');
[
  ['01','REZEKI',410.1],['02','UMUR',412.3],['03','AMAL',414.5],['04','SA‘ID / SYAQI',416.7]
].forEach(([n,t,at],i)=>card(`<div style="width:335px;height:168px;border:3px solid ${i===3?YL:W};border-radius:12px;padding:18px;background:rgba(8,13,29,.96);display:flex;flex-direction:column;justify-content:space-between"><span class="mono" style="font-size:18px;color:${YL}">${n}</span><strong style="font:800 29px Inter;color:${W}">${t}</strong></div>`,`left:${155+i*405}px;top:500px`,at,419.9,'up','tick'));

// 41 · bahagia atau celaka di akhirat
scene(419.9,424.6,{cut:'none'});
frame(419.9,424.6,'CATATAN KEEMPAT','سَعِيدٌ أَوْ شَقِيٌّ');
sv(420.1,424.6,DEFS + BOX(390,500,500,185,{s:W,sw:4}) + BOX(1030,500,500,185,{s:YL,sw:4,del:.6}) +
  T(640,610,'سَعِيدٌ',{f:.4,fs:48,c:W,ff:'Amiri'}) + T(1280,610,'شَقِيٌّ',{f:1.0,fs:48,c:YL,ff:'Amiri'}) +
  T(960,785,'STATUS AKHIRAT · DALAM MATAN HADIS',{f:1.6,fs:23,c:W}),fullW,1920,1080,.8);

// 42 · nasihat tentang rezeki; frasa Arab tak pasti tidak ditampilkan
scene(424.6,430.9,{cut:'none'});
frame(424.6,430.9,'NASIHAT YANG DIAMBIL PEMBICARA','FRASA ARAB KURANG PASTI · TIDAK DITAMPILKAN');
line(424.9,430.9,'left:350px;top:420px;width:1220px;text-align:center','“Jangan risau dengan rezeki.”',{fs:48,m:[427.6]});
chip('REZEKI · TEMA NASIHAT',426.0,'left:755px;top:640px',430.9,YL);

// 43 · tertulis banyak atau sedikit
scene(430.9,436.2,{cut:'none'});
frame(430.9,436.2,'REZEKI · BANYAK ATAU SEDIKIT','PENJELASAN NARASUMBER');
sv(431.0,436.2,DEFS +
  BOX(470,520,430,150,{s:W,sw:4}) + BOX(1020,520,430,150,{s:YL,sw:4,del:.6}) +
  T(685,610,'قَلِيلٌ',{f:.5,fs:39,c:W,ff:'Amiri'}) + T(1235,610,'كَثِيرٌ',{f:1.0,fs:39,c:YL,ff:'Amiri'}) +
  LN([[900,595],[1020,595]],{s:YL,sw:4,del:1.1}),fullW,1920,1080,.8);
line(431.2,436.2,'left:440px;top:760px;width:1040px;text-align:center','Pembicara mengaitkan rezeki dengan ketetapan Allah.',{fs:31});

// 44 · takdir dan usaha, tidak menyimpulkan untuk meninggalkan ikhtiar
scene(436.2,452.6,{cut:'none'});
frame(436.2,452.6,'TAKDIR · USAHA','JANGAN DIBACA SEBAGAI AJAKAN BERHENTI BERUSAHA');
sv(436.4,452.6,DEFS +
  LN([[340,700],[770,700],[960,570],[1150,700],[1580,700]],{s:YL,sw:4,del:.3,arrow:true}) +
  BOX(260,485,420,120,{s:W,sw:3}) + BOX(1240,485,420,120,{s:YL,sw:3,del:.6}) +
  T(470,560,'IKHTIAR',{f:.6,fs:31,c:W}) + T(1450,560,'KETETAPAN',{f:1.2,fs:29,c:YL}) +
  T(960,830,'USAHA DILAKUKAN · HASIL DISERAHKAN',{f:2.0,fs:24,c:W}),fullW,1920,1080,.9);
line(437.0,452.6,'left:380px;top:370px;width:1160px;text-align:center','Pembicara mengingatkan bahwa takdir tidak melampaui ketetapan Allah.',{fs:33,m:[444.9]});

// 45 · jeda frasa Arab yang tak pasti, hanya kata tema yang jelas
scene(452.6,462.9,{cut:'none'});
frame(452.6,462.9,'LANJUTAN NASIHAT TENTANG REZEKI','KUTIPAN ARAB TIDAK DIREKA');
sv(452.8,462.9,DEFS + halo(960,610,145,YL,0) + halo(960,610,220,W,.8) +
  T(960,600,'الرِّزْقُ',{f:.4,fs:48,c:YL,ff:'Amiri'}) + T(960,690,'REZEKI',{f:1.2,fs:25,c:W}),fullW,1920,1080,.8);

// 46 · rezeki sampai, tetap berusaha dan tawakal
scene(462.9,477.8,{cut:'clean'});
frame(462.9,477.8,'REZEKI · USAHA · TAWAKAL','TERJEMAHAN DALAM AUDIO');
line(463.0,477.8,'left:320px;top:370px;width:1280px;text-align:center','“Rezeki yang ditakdirkan kepadamu pasti akan sampai.”',{fs:42,m:[465.0,470.0]});
steps(['REZEKI','JALAN DIBUKAKAN','BERUSAHA'],464.0,4.3,'left:260px;top:570px',477.8);
line(473.3,477.8,'left:400px;top:820px;width:1120px;text-align:center','Lalu serahkan sisanya kepada Allah.',{fs:31});

// 47 · kehati-hatian tentang akhirat
scene(477.8,484.8,{cut:'none'});
frame(477.8,484.8,'KETETAPAN AKHIRAT','NASIHAT PEMBICARA');
sv(478.0,484.8,DEFS +
  BOX(540,480,840,210,{s:YL,sw:4}) + T(960,565,'مَصِيرٌ',{f:.5,fs:42,c:YL,ff:'Amiri'}) + T(960,640,'CELAKA ATAU BERUNTUNG',{f:1.1,fs:27,c:W}) +
  T(960,800,'HIDUP DENGAN HATI-HATI',{f:1.8,fs:23,c:W}),fullW,1920,1080,.8);

// 48 · jangan menambah teks Arab yang transkripsinya kurang pasti
scene(484.8,497.8,{cut:'none'});
frame(484.8,497.8,'PESAN KEHATI-HATIAN','ARAB KURANG PASTI · MAKNA INDONESIA SAJA');
line(484.9,497.8,'left:330px;top:400px;width:1260px;text-align:center','“Jangan bergembira berlebihan sebelum tahu keadaan di akhirat.”',{fs:42,m:[494.9]});
sv(485.0,497.8,DEFS + halo(960,735,95,YL,.4) + halo(960,735,165,W,1.0) + T(960,745,'تَوَازُنٌ',{f:1.8,fs:36,c:W,ff:'Amiri'}),fullW,1920,1080,.8);

// 49 · dunia dan akhirat
scene(497.8,518.0,{cut:'clean'});
frame(497.8,518.0,'DUNIA · AKHIRAT','KEGEMBIRAAN SEJATI MENURUT NASIHAT');
card(tile('DI DUNIA','yang kita miliki sekarang',W,560,30),'left:350px;top:445px',498.0,518.0,'left','paper');
card(tile('DI AKHIRAT','keberuntungan yang diharapkan',YL,560,30),'left:1010px;top:445px',503.0,518.0,'up','tick');
line(508.0,518.0,'left:360px;top:715px;width:1200px;text-align:center','Berhati-hati dalam hidup dan senantiasa meminta kepada Allah.',{fs:34,m:[510.6,515.0]});

// 50 · doa keselamatan
scene(518.0,521.7,{cut:'none'});
frame(518.0,521.7,'DOA PENUTUP BAGIAN','DUNIA · AKHIRAT');
arabic('اللَّهُمَّ سَلِّمْنَا فِي الدُّنْيَا وَالْآخِرَةِ','left:350px;top:470px;width:1220px;text-align:center;font-size:52px;color:#fff',518.2,1.5,521.7);
line(518.2,521.7,'left:360px;top:650px;width:1200px;text-align:center','Semoga Allah menyelamatkan kita di dunia dan akhirat.',{fs:33});

// 51 · ayat kembali ke hubungan keluarga
scene(521.7,532.2,{cut:'clean'});
frame(521.7,532.2,'KEMBALI KE PENUTUP QS AN-NISA:1','TEKS AYAT · HUBUNGAN KELUARGA');
paper(521.9,'left:250px;top:380px;width:1420px;height:360px;padding:34px','<div class="hd">وَالْأَرْحَامَ · صِلَةُ الرَّحِمِ</div>',532.2);
arabic('وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا','left:310px;top:460px;width:1300px;text-align:center;font-size:48px;line-height:1.7;color:#151515',522.1,3.2,532.2,[527.0]);

// 52 · makna silaturahim yang dijelaskan
scene(532.2,541.8,{cut:'none'});
frame(532.2,541.8,'MAKNA SILATURAHIM','PENJELASAN PEMBICARA');
sv(532.4,541.8,DEFS +
  LN([[450,620],[760,620],[960,620],[1160,620],[1470,620]],{s:YL,sw:4,del:.3}) +
  [0,1,2,3,4].map(i=>dot(450+i*255,620,9,i===2?YL:W,.5+i*.4)).join('') +
  T(960,790,'IKATAN · HAK · KEBAIKAN',{f:1.8,fs:25,c:W}),fullW,1920,1080,.8);
line(532.5,541.8,'left:350px;top:400px;width:1220px;text-align:center','Hubungan keluarga memiliki makna luas menurut uraian ulama.',{fs:34,m:[537.0]});

// 53 · dua perilaku yang disebut pembicara
scene(541.8,553.8,{cut:'none'});
frame(541.8,553.8,'CONTOH PEMUTUSAN SILATURAHIM','PENJELASAN NARASUMBER');
card(tile('01','berbuat jahat kepada keluarga',W,560,31),'left:350px;top:455px',542.0,553.8,'left','paper');
card(tile('02','tidak berbuat baik kepada kerabat',YL,560,31),'left:1010px;top:455px',547.0,553.8,'up','tick');
line(547.5,553.8,'left:370px;top:710px;width:1180px;text-align:center','Pembicara menyebut hubungan yang lebih dekat memiliki tuntutan lebih besar.',{fs:30,m:[550.0]});

// 54 · orang tua sebagai kerabat terdekat
scene(553.8,558.3,{cut:'none'});
frame(553.8,558.3,'KERABAT TERDEKAT · MENURUT AUDIO','TANPA FOTO ATAU REKONSTRUKSI KELUARGA');
sv(554.0,558.3,DEFS + halo(960,590,95,YL,.2) + T(960,600,'الْوَالِدَانِ',{f:.7,fs:40,c:W,ff:'Amiri'}) + T(960,710,'ABAH · MAMA',{f:1.4,fs:28,c:YL}),fullW,1920,1080,.8);

// 55 · uraian tentang berbuat baik kepada orang tua
scene(558.3,568.7,{cut:'none'});
frame(558.3,568.7,'PESAN TENTANG KEDUA ORANG TUA','PENJELASAN NARASUMBER');
line(558.5,568.7,'left:320px;top:390px;width:1280px;text-align:center','Berbuat jahat atau tidak berbuat baik kepada orang tua.',{fs:41,m:[561.0,564.5]});
sv(558.7,568.7,DEFS +
  BOX(520,600,880,145,{s:YL,sw:4}) + T(960,690,'JAGA · SAMBUNG · BERBUAT BAIK',{f:1.0,fs:28,c:W}),fullW,1920,1080,.8);

// 56 · riwayat rahmat dengan status derajat ditampilkan terpisah dari audio
scene(568.7,576.9,{cut:'clean'});
frame(568.7,576.9,'RIWAYAT TENTANG SILATURAHIM','AL-ADAB AL-MUFRAD 63 · SANAD SANGAT LEMAH');
arabic('إِنَّ الرَّحْمَةَ لَا تَنْزِلُ عَلَى قَوْمٍ فِيهِمْ قَطِيعَةُ رَحِمٍ','left:300px;top:430px;width:1320px;text-align:center;font-size:47px;line-height:1.75;color:#fff',568.9,2.6,576.9,[572.0]);
chip('DA‘IF JIDDAN · PENILAIAN DORAR',574.0,'left:610px;top:720px',576.9,YL);

// 57 · kisah tentang majelis Ibn Mas'ud, atribusi dibatasi
scene(576.9,585.1,{cut:'none'});
frame(576.9,585.1,'KISAH DINISBATKAN KEPADA IBN MAS‘UD','REDAKSI / SANAD BELUM DIPASTIKAN');
sv(577.1,585.1,DEFS +
  BOX(540,470,840,220,{s:W,sw:4}) +
  T(960,555,'MAJELIS',{f:.5,fs:37,c:YL}) + T(960,620,'ATSAR? · BUKAN HADIS MARFU‘',{f:1.2,fs:23,c:W}) +
  T(960,800,'STATUS PENISBATAN DIPISAHKAN DARI CERAMAH',{f:2.1,fs:20,c:YL}),fullW,1920,1080,.8);

// 58 · ajakan keluar, meminta maaf, lalu kembali; tanpa menggambar hadirin
scene(585.1,598.0,{cut:'none'});
frame(585.1,598.0,'ISI KISAH YANG DIBAWAKAN NARASUMBER','TIDAK DITAMPILKAN SEBAGAI RIWAYAT SAHIH');
steps(['KELUAR','MEMINTA MAAF','KEMBALI'],585.4,3.6,'left:300px;top:500px',598.0);
sv(585.6,598.0,DEFS + LN([[410,780],[760,780],[1160,780],[1510,780]],{s:YL,sw:4,del:.4}) + T(960,865,'PESAN SILATURAHIM · KISAH BELUM TERVERIFIKASI',{f:2.0,fs:23,c:W}),fullW,1920,1080,.8);

// 59 · penutup ayat dan outro kanal
scene(598.0,TOTAL,{cut:'none'});
label('EP28 · PENUTUP',598.05,'left:160px;top:278px',TOTAL);
mePol('left:250px;top:370px',598.1,TOTAL,-3,300);
line(598.15,TOTAL,'left:650px;top:430px;width:1100px','MENGENAL AL-QUR\'AN · SURAH AN-NISA 1',{fs:35,c:YL});
line(598.3,TOTAL,'left:650px;top:530px;width:1100px','TAKWA · ASAL PENCIPTAAN · SILATURAHIM',{fs:31});
arabic('إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا','left:650px;top:660px;width:1100px;text-align:center;font-size:48px;color:#fff',598.35,1.0,TOTAL);
sub2('left:690px;top:830px',598.4,TOTAL);

// 29 kode visual unik, satu kode aktif dalam satu rentang.
[
  [0,11.0,'/kinetic-type'],[11.0,27.5,'/scripture'],[27.5,45.7,'/quote'],[45.7,57.4,'/checklist'],
  [57.4,63.7,'/scripture'],[63.7,78.7,'/dossier'],[78.7,89.6,'/callout'],[89.6,101.7,'/layers'],
  [101.7,117.6,'/lineage'],[117.6,122.0,'/quote'],[122.0,134.2,'/lineage'],[134.2,140.1,'/water'],
  [140.1,154.1,'/citation'],[154.1,159.6,'/quote'],[159.6,172.9,'/scripture'],[172.9,183.0,'/water'],
  [183.0,192.0,'/exploded-view'],[192.0,197.9,'/scripture'],[197.9,205.2,'/layers'],[205.2,216.7,'/timeline'],
  [216.7,221.6,'/blueprint'],[221.6,229.6,'/light-ray'],[229.6,235.1,'/quote'],[235.1,242.5,'/split-screen'],
  [242.5,251.0,'/decision-matrix'],[251.0,256.6,'/counter'],[256.6,263.7,'/flowchart'],[263.7,271.1,'/flowchart'],
  [271.1,280.0,'/flowchart'],[280.0,289.0,'/checklist'],[289.0,299.1,'/ladder'],[299.1,307.9,'/poetry'],
  [307.9,321.3,'/scripture'],[321.3,333.3,'/dossier'],[333.3,359.7,'/search'],[359.7,369.9,'/quote'],
  [369.9,387.5,'/dossier'],[387.5,402.8,'/callout'],[402.8,409.9,'/timeline'],[409.9,419.9,'/checklist'],
  [419.9,424.6,'/counter'],[424.6,430.9,'/quote'],[430.9,436.2,'/counter'],[436.2,452.6,'/balance'],
  [452.6,462.9,'/night-timeline'],[462.9,477.8,'/roadmap'],[477.8,484.8,'/versus'],[484.8,497.8,'/quote'],
  [497.8,518.0,'/mosaic'],[518.0,521.7,'/scripture'],[521.7,532.2,'/scripture'],[532.2,541.8,'/network'],
  [541.8,553.8,'/wind'],[553.8,558.3,'/lineage'],[558.3,568.7,'/dossier'],[568.7,576.9,'/callout'],
  [576.9,585.1,'/citation'],[585.1,598.0,'/flowchart'],[598.0,TOTAL,'/teaser']
].reduce((a,[t0,t1,c])=>{if(!a.ids[c])a.ids[c]=String(++a.n).padStart(2,'0');codeTag(t0,t1,a.ids[c],c);return a;},{n:0,ids:{}});
