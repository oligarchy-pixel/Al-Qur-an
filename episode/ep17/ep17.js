// ================================================================== ADEGAN EPISODE 17 · Amanah Pejabat & Buah Takwa
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
function meTag(t0, t1, topik) { const n = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">${topik}</span></div></div>`, 'left:1270px;top:720px'); show(n, t0, 'left', t1); sfx(t0, 'beep', .5); }
function doa(t0, t1, lab, ar, tr, o = {}) {
  label(lab, t0 + .05, 'left:160px;top:140px', t1);
  paper(t0, `left:160px;top:190px;width:1600px;height:${o.h || 620}px`, '', t1);
  arw(node(ar, `left:220px;width:1480px;top:${o.at || 240}px;text-align:center;font-size:${o.fs || 70}px;line-height:1.75;color:#151515`), o.a0 || t0 + .1, o.ad || 2.6, { marks: o.am || [], t1 });
  if (tr) kin(node('', `left:260px;top:${o.tt || 560}px;width:1400px;font:700 ${o.tfs || 38}px Inter;color:#222;text-align:center;line-height:1.3`), tr, o.tr0 || t0 + 2.6, { iv: .024, marks: o.tm || [], t1 });
  if (o.chip) chip(o.chip, o.c0 || t0 + 1.2, `left:160px;top:${(o.h || 620) + 215}px`, t1, Y);
}
function bgFill(t0, t1, css) { const n = node('', 'left:-160px;top:-120px;width:2240px;height:1320px;' + css); show(n, t0, 'fade', t1, .3); return n; }
const NIGHT = 'background:radial-gradient(1.5px 1.5px at 12% 18%,#fff,transparent),radial-gradient(1.5px 1.5px at 32% 8%,#fff,transparent),radial-gradient(2px 2px at 58% 22%,#fff,transparent),radial-gradient(1.5px 1.5px at 76% 12%,#fff,transparent),radial-gradient(1.5px 1.5px at 88% 30%,#fff,transparent),radial-gradient(1.5px 1.5px at 22% 40%,#fff,transparent),radial-gradient(1.5px 1.5px at 66% 46%,#fff,transparent),linear-gradient(#050b2a,#0c1c4f 60%,#1b2f6b)';
const line = (t0, t1, css, s, o = {}) => kin(node('', css + `;font:${o.w || 800} ${o.fs || 42}px Inter;color:${o.c || '#fff'};line-height:1.3`), s, t0, { iv: o.iv || .026, marks: o.m || [], t1 });
const crd = (html, css, t0, t1, kind = 'up', snd = 'click') => { const n = node(html, css, 'dimmable'); show(n, t0, kind, t1); sfx(t0, snd, .7); return n; };
const CR = '#ff8a5c', CG = '#7fe0a0', CB = '#7fd6ff';
const box = (w, col, inner, extra = '') => `<div style="width:${w}px;border:4px solid ${col};border-radius:16px;padding:18px 24px;background:rgba(255,255,255,.03);${extra}">${inner}</div>`;


// ================================================================== EP 16 · Jual Beli, Timbangan, Pendakwah & Penguasa
const vcard = (w, c, inner, bg = 'transparent') => `<div style="width:${w}px;border:4px solid ${c};border-radius:18px;padding:22px 26px;background:${bg}">${inner}</div>`;
const xcard = (e, s, t, t1, css, c = CR, mark = '✕') => crd(`<div style="width:500px;height:250px;border:4px solid ${c};border-radius:18px;padding:22px;background:rgba(255,138,92,.06)"><div style="display:flex;justify-content:space-between"><span style="font-size:70px">${e}</span><span style="font:900 60px Inter;color:${c}">${mark}</span></div><div style="font:900 32px Inter;margin-top:10px;line-height:1.2">${s}</div></div>`, css, t, t1, 'drop', 'stamp');
const tick = (s, t, t1, css, c = Y, m = '✓', fs = 50) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:78px;height:78px;flex:none;border-radius:12px;background:${c};display:flex;align-items:center;justify-content:center;font:900 50px Inter;color:#111">${m}</div><div style="font:900 ${fs}px Inter">${s}</div></div>`, css, t, t1, 'scale', 'tick');
const pill = (s, c, fg = '#111') => `<div style="font:900 40px Inter;color:${fg};background:${c};border-radius:12px;padding:10px 26px;display:inline-block">${s}</div>`;

// --- 01 /kinetic-type : pembuka
scene(0, 4.9, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label('FILE 17 · MELANJUTKAN SURAH AL-BAQARAH', .3, 'left:140px;top:260px');
seg('Amanah &<br>[Buah Takwa]', .6, 'left:140px;top:310px;width:1100px', { size: 100, iv: .04, marks: [2.4] });
mePol('left:1300px;top:150px', .2, 4.9, 4, 400);
meTag(.8, 4.9, 'وَمَنْ يَتَّقِ اللَّهَ');

// --- 02 /citation : Al-Isra 34 (ulasan)
scene(4.9, 31.8, { cut: 'glitch' });
line(5.0, 21.7, 'left:160px;top:130px;width:1600px', 'sebelumnya: petunjuk bagi [penguasa & pejabat] yang mengurusi rakyat', { fs: 42, m: [9.0] });
paper(16.2, 'left:160px;top:240px;width:1600px;height:330px', '', 31.8);
arw(node('وَأَوْفُوا بِالْعَهْدِ [إِنَّ الْعَهْدَ كَانَ مَسْئُولًا]', 'left:220px;width:1480px;top:300px;text-align:center;font-size:84px;line-height:1.6;color:#151515'), 21.7, 3.0, { marks: [23.0] });
chip("QS. AL-ISRA' : 34", 16.6, 'left:160px;top:600px', 31.8, Y);
line(24.9, 31.8, 'left:160px;top:700px;width:1600px', 'tepatilah janji · akan [dimintai pertanggungjawaban] di akhirat', { fs: 40, m: [28.0] });

// --- 03 /citation : An-Nisa 58
scene(31.8, 51.2, { cut: 'glitch' });
paper(31.9, 'left:160px;top:160px;width:1600px;height:520px', '', 51.2);
arw(node('إِنَّ اللَّهَ يَأْمُرُكُمْ [أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا] وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُمْ بِهِ إِنَّ اللَّهَ كَانَ سَمِيعًا بَصِيرًا', 'left:220px;width:1480px;top:200px;text-align:center;font-size:54px;line-height:1.8;color:#151515'), 32.0, 12.8, { marks: [35.5] });
chip("QS. AN-NISA' : 58", 32.2, 'left:160px;top:710px', 51.2, Y);
line(45.2, 51.2, 'left:160px;top:800px;width:1600px', 'siapa saja yang beriman · hendaklah [amanah]', { fs: 42, m: [49.5] });

// --- 04 /diagram : uang negara = amanat rakyat
scene(51.2, 79.6, { cut: 'glitch' });
line(51.3, 56.5, 'left:140px;top:130px;width:1640px', 'amanah kepada [Allah] · amanah kepada [manusia] · termasuk para pemimpin', { fs: 40, m: [52.5, 54.0] });
sv(56.6, 79.6, DEFS + BOX(160, 420, 440, 200, { s: CG, sw: 5 }) + T(380, 505, '👥 RAKYAT', { f: .1, fs: 40, fw: 900, c: CG }) + T(380, 560, 'pemilik harta', { f: .3, fs: 28, fw: 800 }) +
  '<g data-f="5.8">' + LN([[600, 480], [740, 480]], { s: Y, sw: 5, arrow: 1 }) + '</g>' +
  BOX(740, 380, 440, 280, { s: Y, sw: 5, del: 5.8 }) + T(960, 470, '🏛️ KAS NEGARA', { f: 6.0, fs: 38, fw: 900, c: Y }) + T(960, 530, 'duit & harta negara', { f: 6.2, fs: 28, fw: 800 }) + T(960, 590, '= AMANAT RAKYAT', { f: 9.8, fs: 32, fw: 900, c: Y }) +
  '<g data-f="11.0">' + LN([[1180, 560], [1320, 560]], { s: CG, sw: 5, arrow: 1 }) + '</g>' +
  BOX(1320, 420, 440, 200, { s: CG, sw: 5, del: 11.0 }) + T(1540, 505, '↩ DISAMPAIKAN', { f: 11.2, fs: 36, fw: 900, c: CG }) + T(1540, 560, 'kembali kepada rakyat', { f: 11.4, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(1600, CR, `<div style="font:900 36px Inter;line-height:1.35">✕ tidak disampaikan kepada rakyat → <span style="color:${CR}">jelas menentang Allah & petunjuk Al-Qur'an</span></div>`), 'left:160px;top:760px', 72.8, 79.6, 'up', 'impact');

// --- 05 /split-screen : menentang vs mengikuti
scene(79.6, 92.9, { cut: 'glitch' });
crd(`<div style="width:780px;height:520px;border:5px solid ${CR};border-radius:20px;padding:30px;text-align:center;background:rgba(255,138,92,.05)"><div class="mono" style="font-size:26px;color:${CR}">MENENTANG AL-QUR'AN</div><div style="font-size:120px;margin-top:20px">🔥</div><div style="font:900 50px Inter;color:${CR};margin-top:16px">neraka tempatnya</div></div>`, 'left:140px;top:220px', 79.7, 92.9, 'up', 'stamp');
crd(`<div style="width:780px;height:520px;border:5px solid ${CG};border-radius:20px;padding:30px;text-align:center;background:rgba(127,224,160,.05)"><div class="mono" style="font-size:26px;color:${CG}">MENGIKUTI PETUNJUKNYA</div><div style="font-size:120px;margin-top:20px">🌴</div><div style="font:900 50px Inter;color:${CG};margin-top:16px">rida Allah · surga</div></div>`, 'left:1000px;top:220px', 83.0, 92.9, 'up', 'stamp');

// --- 06 /citation : An-Nisa 58 (adil)
scene(92.9, 110.9, { cut: 'glitch' });
paper(93.0, 'left:160px;top:160px;width:1600px;height:520px', '', 110.9);
arw(node('إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا [وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ] إِنَّ اللَّهَ نِعِمَّا يَعِظُكُمْ بِهِ إِنَّ اللَّهَ كَانَ سَمِيعًا بَصِيرًا', 'left:220px;width:1480px;top:200px;text-align:center;font-size:54px;line-height:1.8;color:#151515'), 93.1, 9.6, { marks: [97.0] });
chip("QS. AN-NISA' : 58", 93.3, 'left:160px;top:710px', 110.9, Y);
line(102.9, 110.9, 'left:160px;top:800px;width:1600px', 'memberi keputusan kepada manusia · berilah [keputusan yang adil]', { fs: 42, m: [107.0] });

// --- 07 /checklist : tidak ada alasan
scene(110.9, 131.4, { cut: 'glitch' });
label('TIDAK ADA ALASAN KEKURANGAN PETUNJUK', 111.0, 'left:160px;top:130px', 131.4);
tick('Al-Qur\'an pedoman menjadi orang takwa', 116.3, 131.4, 'left:200px;top:230px', Y, '✓', 46);
tick('pedoman menjadi penguasa yang baik', 124.1, 131.4, 'left:200px;top:360px', Y, '✓', 46);
tick('datang langsung dari Allah', 126.2, 131.4, 'left:200px;top:490px', Y, '✓', 46);

// --- 08 /search : hadis borgol
scene(131.4, 154.9, { cut: 'glitch', light: 1 });
searchFind(131.4, 154.9, {
  q: 'ما من أمير عشرة إلا يؤتى به يوم القيامة مغلولا', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 },
  shelf: [['Musnad Ahmad', 'مسند أحمد'], ['Jam\'ul Jawami\' · as-Suyuthi', 'جمع الجوامع'], ['Fath al-Qarib al-Mujib', 'فتح القريب المجيب'], ['Al-Musnad al-Maudhu\'i', 'المسند الموضوعي'], ['At-Targhib wa at-Tarhib', 'الترغيب والترهيب']],
  results: [
    { title: "Musnad Ahmad · ar-Risalah · j. 15 hlm. 352", tag: 'HADIS', ar: 'مَا مِنْ أَمِيرِ عَشَرَةٍ إِلَّا يُؤْتَى بِهِ', sub: 'dari Abu Hurairah radhiyallahu \'anhu' },
    { title: "Fath al-Qarib al-Mujib · j. 9 hlm. 547", tag: 'JAYYID', ar: 'يَوْمَ الْقِيَامَةِ مَغْلُولًا', sub: 'riwayat Ahmad dengan sanad jayyid' },
    { title: "Jam'ul Jawami' · as-Suyuthi · no. 19251", tag: 'HADIS', ar: 'حَتَّى يَفُكَّهُ الْعَدْلُ', sub: 'keadilan yang melepaskannya' },
    { title: "Musnad Ahmad · no. 22456 · tahqiq al-Arna'uth", tag: 'SHAHIH LI GHAIRIHI', ar: 'أَوْ يُوبِقَهُ الْجَوْرُ', sub: 'dari Sa\'d bin \'Ubadah' }],
  det: { title: 'Hadis tentang pemimpin', ar: 'أَمِيرُ عَشَرَةٍ', rows: [['DIRIWAYATKAN', 'Ahmad bin Hanbal'], ['PERAWI SAHABAT', "Abu Hurairah · Sa'd bin 'Ubadah"], ['SIAPA', 'pemimpin walau atas 10 orang'], ['HARI KIAMAT', 'didatangkan dalam keadaan terbelenggu'], ['ADIL', 'belenggunya dilepaskan'], ['ZALIM', 'kezaliman membinasakannya'], ['DERAJAT', 'sanad jayyid (Fath al-Qarib)']], quote: 'لَا يَفُكُّهُ إِلَّا الْعَدْلُ أَوْ يُوبِقُهُ الْجَوْرُ' }
});
camTour(131.4, 154.9, { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 });

// --- 09 /badge : 100 kali takwa
scene(154.9, 178.5, { cut: 'glitch' });
line(155.0, 168.8, 'left:140px;top:130px;width:1640px', 'menjadi takwa · [tidak ada jalan lain] selain Al-Qur\'an sebagai pedoman hidup', { fs: 40, m: [158.0] });
sv(168.8, 178.5, `<g data-f=".2"><circle cx="960" cy="560" r="240" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="8"/><circle cx="960" cy="560" r="205" fill="none" stroke="${Y}" stroke-width="3" stroke-dasharray="6 10"/></g>` + T(960, 560, '100×', { f: .4, fs: 130, fw: 900, c: Y }) + T(960, 640, 'Allah mengajarkan TAKWA', { f: .9, fs: 32, fw: 900 }), 'left:0;top:0', 1920, 1080, .8);
line(173.0, 178.5, 'left:140px;top:870px;width:1640px;text-align:center', 'tujuan Al-Qur\'an: [mengajak manusia bertakwa]', { fs: 40, m: [176.0] });

// --- 10 /decision-matrix : takwa? apa ganjarannya?
scene(178.5, 191.4, { cut: 'glitch' });
line(178.6, 191.4, 'left:140px;top:130px;width:1640px', 'apa [keuntungannya] menjadi orang yang takwa?', { fs: 46, m: [180.5] });
crd(vcard(780, CG, `<div style="font:900 44px Inter;color:${CG}">✓ kalau TAKWA</div><div style="font:900 120px Inter;margin-top:10px;text-align:center">🎁 ?</div><div style="font:800 32px Inter;text-align:center">apa ganjarannya?</div>`), 'left:140px;top:250px', 181.6, 191.4, 'up', 'stamp');
crd(vcard(780, CR, `<div style="font:900 44px Inter;color:${CR}">✕ kalau TIDAK TAKWA</div><div style="font:900 120px Inter;margin-top:10px;text-align:center">⚠️ ?</div><div style="font:800 32px Inter;text-align:center">apa balasannya?</div>`), 'left:1000px;top:250px', 184.4, 191.4, 'up', 'stamp');

// --- 11 /citation : At-Talaq 2-3
scene(191.4, 208.8, { cut: 'glitch' });
paper(191.5, 'left:160px;top:180px;width:1600px;height:380px', '', 208.8);
arw(node('وَمَنْ يَتَّقِ اللَّهَ [يَجْعَلْ لَهُ مَخْرَجًا] وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ', 'left:220px;width:1480px;top:240px;text-align:center;font-size:76px;line-height:1.7;color:#151515'), 191.6, 5.4, { marks: [194.0] });
chip('QS. ATH-THALAQ : 2–3', 191.8, 'left:160px;top:590px', 208.8, Y);
line(197.1, 208.8, 'left:160px;top:690px;width:1600px', 'Allah beri [jalan keluar] dari setiap kesulitan · rezeki [tak terduga]', { fs: 40, m: [201.0, 206.0] });

// --- 12 /flowchart : buah takwa
scene(208.8, 222.6, { cut: 'glitch' });
sv(208.9, 222.6, DEFS + BOX(760, 170, 400, 120, { s: Y, sw: 5 }) + T(960, 245, '🤲 TAKWA', { f: .1, fs: 44, fw: 900, c: Y }) +
  '<g data-f="1.4">' + LN([[860, 290], [560, 430]], { s: CG, sw: 5, arrow: 1 }) + '</g>' + BOX(260, 440, 600, 190, { s: CG, sw: 5, del: 1.6 }) + T(560, 520, '🚪 hidupnya tidak sulit', { f: 1.8, fs: 38, fw: 900, c: CG }) + T(560, 580, 'selalu ada jalan keluar', { f: 2.2, fs: 28, fw: 800 }) +
  '<g data-f="5.4">' + LN([[1060, 290], [1360, 430]], { s: CG, sw: 5, arrow: 1 }) + '</g>' + BOX(1060, 440, 600, 190, { s: CG, sw: 5, del: 5.6 }) + T(1360, 520, '💰 rezeki penuh', { f: 5.8, fs: 38, fw: 900, c: CG }) + T(1360, 580, 'tak terkira-kira datangnya', { f: 6.2, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, .6);
crd(pill('demikianlah ganjaran orang yang takwa', Y), 'left:560px;top:760px', 211.0, 222.6, 'scale', 'impact');

// --- 13 /citation : Al-Baqarah 282
scene(222.6, 248.4, { cut: 'glitch' });
paper(222.7, 'left:160px;top:180px;width:1600px;height:360px', '', 248.4);
arw(node('وَاتَّقُوا اللَّهَ [وَيُعَلِّمُكُمُ اللَّهُ] وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:80px;line-height:1.7;color:#151515'), 222.8, 6.6, { marks: [225.5] });
chip('QS. AL-BAQARAH : 282', 223.0, 'left:160px;top:570px', 248.4, Y);
[['✅ jalankan perintah Allah', 230.0, CG], ['⛔ jauhi larangan-Nya', 232.0, CR], ['📖 Allah ajarkan kebaikan dunia & akhirat', 236.2, Y], ['👁️ tak ada yang luput dari ilmu Allah', 242.4, '#fff']].forEach(([s, t, c], i) => crd(`<div style="font:900 34px Inter;color:${c}">${s}</div>`, `left:${160 + (i % 2) * 820}px;top:${680 + Math.floor(i / 2) * 90}px`, t, 248.4, 'up', 'tick'));

// --- 14 /citation : Al-Maidah 27
scene(248.4, 266.3, { cut: 'glitch' });
line(248.5, 251.0, 'left:160px;top:130px;width:1600px', 'Allah melanjutkan firman-Nya…', { fs: 42 });
paper(250.0, 'left:160px;top:210px;width:1600px;height:320px', '', 266.3);
arw(node('إِنَّمَا [يَتَقَبَّلُ اللَّهُ] مِنَ الْمُتَّقِينَ', 'left:220px;width:1480px;top:270px;text-align:center;font-size:96px;line-height:1.6;color:#151515'), 250.2, 4.0, { marks: [252.0] });
chip("QS. AL-MA'IDAH : 27", 250.4, 'left:160px;top:560px', 266.3, Y);
line(252.0, 258.0, 'left:160px;top:660px;width:1600px', 'Allah hanya menerima amal ibadah [orang yang takwa]', { fs: 40, m: [255.0] });
crd(pill('⚠ tidak takwa → ibadah dikhawatirkan tidak diterima', CR), 'left:160px;top:780px', 258.1, 266.3, 'scale', 'impact');

// --- 15 /infographic : emas bagi laki-laki
scene(266.3, 293.3, { cut: 'glitch' });
label('CONTOH: LAKI-LAKI MEMAKAI EMAS LALU SALAT', 266.4, 'left:160px;top:130px', 293.3);
xcard('💍', 'laki-laki memakai emas · lalu salat', 266.6, 293.3, 'left:160px;top:220px');
crd(`<div style="font:900 36px Inter;color:${CR};width:520px">→ salatnya tidak diterima Allah</div>`, 'left:160px;top:520px', 273.0, 293.3, 'up', 'beep');
xcard('👖', 'emas dimasukkan ke kantong · lalu salat', 276.5, 293.3, 'left:760px;top:220px');
crd(`<div style="font:900 36px Inter;color:${CR};width:520px">→ niat dipakai lagi selesai salat</div>`, 'left:760px;top:520px', 281.0, 293.3, 'up', 'beep');
crd(pill('= mengolah-olah peraturan Allah', CR), 'left:160px;top:700px', 283.5, 293.3, 'scale', 'impact');

// --- 16 /tree : mewarnai rambut
scene(293.3, 324.7, { cut: 'glitch' });
sv(293.4, 324.7, DEFS + BOX(660, 140, 600, 110, { s: Y, sw: 5 }) + T(960, 208, '💇 MEWARNAI RAMBUT', { f: .1, fs: 40, fw: 900, c: Y }) +
  '<g data-f="4.3">' + LN([[860, 250], [520, 360]], { s: CG, sw: 4, arrow: 1 }) + '</g>' + BOX(180, 370, 680, 300, { s: CG, sw: 5, del: 4.4 }) + T(520, 430, '👴 RAMBUT BERUBAN ✓', { f: 4.6, fs: 36, fw: 900, c: CG }) + T(520, 490, 'boleh diwarnai', { f: 5.0, fs: 30, fw: 800 }) + T(520, 545, 'SELAIN warna hitam', { f: 5.6, fs: 30, fw: 900, c: Y }) + T(520, 610, 'syarat: ubannya lebih banyak', { f: 15.6, fs: 28, fw: 800 }) +
  '<g data-f="25.2">' + LN([[1060, 250], [1400, 360]], { s: CR, sw: 4, arrow: 1 }) + '</g>' + BOX(1060, 370, 680, 300, { s: CR, sw: 5, del: 25.3 }) + T(1400, 430, '👩 RAMBUT MASIH BAIK ✕', { f: 25.4, fs: 36, fw: 900, c: CR }) + T(1400, 490, 'diwarna-warnai', { f: 25.6, fs: 30, fw: 800 }) + T(1400, 545, 'tak berterima kasih', { f: 26.0, fs: 30, fw: 900, c: CR }) + T(1400, 600, 'kepada Allah', { f: 26.2, fs: 30, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, .6);
line(293.5, 304.0, 'left:180px;top:760px;width:1560px', 'rambut diwarnai lalu salat · [tidak suka pemberian Allah]', { fs: 38, m: [298.0] });

// --- 17 /callout : kufur nikmat
scene(324.7, 344.6, { cut: 'glitch' });
crd(`<div style="font:900 44px Inter">sama seperti perempuan yang <span style="color:${CR}">mengukir-ngukir alis</span></div>`, 'left:180px;top:200px', 324.8, 344.6, 'left', 'stamp');
crd(vcard(1560, Y, `<div class="mono" style="font-size:24px;color:${Y}">💡 KEWAJIBAN KITA</div><div style="font:900 44px Inter;margin-top:10px">keluarga · kawan · anak → <span class="mk">wajib memberitahu</span> bahwa itu tidak boleh</div>`, 'rgba(233,242,58,.06)'), 'left:180px;top:340px', 328.3, 344.6, 'up', 'impact');
crd(`<div style="font:900 56px Inter;color:#111;background:${CR};border-radius:14px;padding:12px 30px">= KUFUR NIKMAT</div>`, 'left:180px;top:640px', 335.4, 344.6, 'scale', 'stamp');
line(340.4, 344.6, 'left:180px;top:800px;width:1560px', 'sangat penting ibadah kita [diterima Allah]', { fs: 40, m: [342.5] });

// --- 18 /roadmap : taubat
scene(344.6, 364.5, { cut: 'glitch' });
line(344.7, 364.5, 'left:140px;top:130px;width:1640px', 'semoga kita [benar-benar bertaubat]', { fs: 44, m: [347.0] });
sv(346.0, 364.5, DEFS + `<path d="M220 560 C 600 420, 900 700, 1240 540 S 1640 440, 1720 520" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1700" data-dur="1.6"/>` +
  [['😔', 'menyesali perbuatan', 320, 520, 0], ['🚫', 'jangan ulangi yang buruk', 860, 590, 6.1], ['🔥', 'sungguh-sungguh takwa', 1460, 470, 14.2]].map(([e, s, x, y, d], i) => `<circle cx="${x}" cy="${y}" r="56" fill="#000" stroke="${Y}" stroke-width="5" data-f="${d}"/>` + T(x, y + 18, e, { f: d, fs: 50 }) + T(x, y + (i % 2 ? -90 : 120), s, { f: d + .2, fs: 34, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, 1.0);

// --- 19 /layers : bertaubat → ibadah diterima → menang
scene(364.5, 382.4, { cut: 'glitch' });
[['🤲 beribadah dalam keadaan bertaubat', '#fff', 364.6], ['✅ Allah menerima ibadah kita', CG, 374.9], ['🏆 orang takwa selalu MENANG · dunia & akhirat', Y, 376.9]].forEach(([s, c, t], i) => crd(`<div style="width:${1100 + i * 200}px;border:4px solid ${c};border-radius:16px;padding:26px 30px;background:#000;font:900 44px Inter;color:${c}">${s}</div>`, `left:${420 - i * 100}px;top:${220 + i * 190}px`, t, 382.4, 'up', 'tick'));

// --- 20 /citation : Al-Baqarah 194
scene(382.4, 396.5, { cut: 'glitch' });
paper(382.5, 'left:160px;top:180px;width:1600px;height:340px', '', 396.5);
arw(node('وَاتَّقُوا اللَّهَ وَاعْلَمُوا [أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ]', 'left:220px;width:1480px;top:250px;text-align:center;font-size:80px;line-height:1.7;color:#151515'), 384.0, 6.4, { marks: [388.0] });
chip('QS. AL-BAQARAH : 194', 382.8, 'left:160px;top:550px', 396.5, Y);
line(390.4, 396.5, 'left:160px;top:650px;width:1600px', 'Allah [beserta] orang-orang yang takwa · selalu dapat kemenangan', { fs: 40, m: [391.5] });

// --- 21 /citation : Ali Imran 133
scene(396.5, 415.2, { cut: 'glitch' });
line(396.6, 397.6, 'left:160px;top:130px;width:1600px', 'puncak tujuan takwa…', { fs: 42 });
paper(397.5, 'left:160px;top:210px;width:1600px;height:440px', '', 415.2);
arw(node('وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ [وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ] أُعِدَّتْ لِلْمُتَّقِينَ', 'left:220px;width:1480px;top:270px;text-align:center;font-size:64px;line-height:1.8;color:#151515'), 397.6, 10.0, { marks: [402.0] });
chip("QS. ALI 'IMRAN : 133", 397.8, 'left:160px;top:680px', 415.2, Y);
line(407.9, 415.2, 'left:160px;top:780px;width:1600px', '[surga seluas langit & bumi] · disediakan bagi orang yang takwa', { fs: 40, m: [409.0] });

// --- 22 /exploded-view : iman saja tidak cukup
scene(415.2, 439.9, { cut: 'glitch' });
line(415.3, 420.1, 'left:140px;top:130px;width:1640px', 'mengandalkan iman saja [tidak cukup] · mesti bertakwa', { fs: 44, m: [417.5] });
crd(`<div style="text-align:center;width:420px;height:420px;border-radius:50%;border:6px solid ${Y};padding-top:120px;background:rgba(233,242,58,.06)"><div style="font:900 64px Inter;color:${Y}">IMAN</div><div style="font:800 28px Inter;margin-top:8px">"tidak berpakaian"</div></div>`, 'left:750px;top:240px', 420.1, 439.9, 'scale', 'stamp');
[['👕', 'pakaiannya', 'TAKWA', 427.5, 'left:160px;top:330px', Y], ['💎', 'perhiasannya', 'MALU', 429.2, 'left:1300px;top:330px', CB], ['🍎', 'buahnya', 'ILMU', 431.2, 'left:760px;top:720px', CG]].forEach(([e, a, b, t, css, c]) => crd(`<div style="width:420px;border:4px solid ${c};border-radius:18px;padding:18px 24px;text-align:center"><div style="font-size:60px">${e}</div><div style="font:800 28px Inter">${a}</div><div style="font:900 50px Inter;color:${c}">${b}</div></div>`, css, t, 439.9, 'up', 'tick'));
crd(`<div class="mono" style="font-size:22px;color:${Y}">UNGKAPAN</div>`, 'left:160px;top:260px', 427.0, 439.9, 'fade');

// --- 23 /teaser : penutup
scene(439.9, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 440.0, TOTAL, -4, 400);
crd(`<div style="font:900 38px Inter;line-height:1.35">cara menjadi takwa: <span class="mk">Al-Qur'an sebagai pedoman hidup</span></div>`, 'left:760px;top:180px;width:1000px', 440.0, TOTAL, 'left', 'tick');
crd(`<div class="mono" style="font-size:26px;color:${Y}">▶ BERIKUTNYA: AYAT KE-3 SURAH AL-BAQARAH</div>`, 'left:760px;top:330px', 446.0, TOTAL, 'fade', 'beep');
arw(node('أَفْضَلُ الذِّكْرِ فَاعْلَمْ أَنَّهُ [لَا إِلَٰهَ إِلَّا اللَّهُ]', 'left:760px;top:410px;width:1000px;text-align:right;font-size:52px;color:#fff'), 446.1, 4.0, { marks: [449.0] });
arw(node('مُحَمَّدٌ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ', 'left:760px;top:520px;width:1000px;text-align:right;font-size:46px;color:#fff'), 466.7, 3.0);
sub2('left:760px;top:660px', 452.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 4.9, '/kinetic-type'], [4.9, 31.8, '/citation'], [31.8, 51.2, '/citation'], [51.2, 79.6, '/diagram'], [79.6, 92.9, '/split-screen'], [92.9, 110.9, '/citation'], [110.9, 131.4, '/checklist'], [131.4, 154.9, '/search'],
 [154.9, 178.5, '/badge'], [178.5, 191.4, '/decision-matrix'], [191.4, 208.8, '/citation'], [208.8, 222.6, '/flowchart'], [222.6, 248.4, '/citation'], [248.4, 266.3, '/citation'], [266.3, 293.3, '/infographic'], [293.3, 324.7, '/tree'],
 [324.7, 344.6, '/callout'], [344.6, 364.5, '/roadmap'], [364.5, 382.4, '/layers'], [382.4, 396.5, '/citation'], [396.5, 415.2, '/citation'], [415.2, 439.9, '/exploded-view'], [439.9, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
