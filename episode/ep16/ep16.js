// ================================================================== ADEGAN EPISODE 16 · Jual Beli, Timbangan, Pendakwah & Penguasa
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
scene(0, 8.4, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label('FILE 16 · MELANJUTKAN SURAH AL-BAQARAH', .4, 'left:140px;top:260px');
seg('Jual Beli, Dakwah<br>& [Amanah Pejabat]', .9, 'left:140px;top:310px;width:1100px', { size: 92, iv: .04, marks: [3.4] });
line(4.0, 8.4, 'left:140px;top:620px;width:1050px', 'Allah masih memberi kita [kesempatan]…', { fs: 40, m: [5.6] });
mePol('left:1300px;top:150px', .3, 8.4, 4, 400);
meTag(1.2, 8.4, 'إِنَّ الْعَهْدَ كَانَ مَسْئُولًا');

// --- 02 /citation : Al-Baqarah 275
scene(8.4, 29.4, { cut: 'glitch' });
paper(8.5, 'left:160px;top:170px;width:1600px;height:330px', '', 29.4);
arw(node('وَأَحَلَّ اللَّهُ الْبَيْعَ [وَحَرَّمَ الرِّبَا]', 'left:220px;width:1480px;top:230px;text-align:center;font-size:96px;line-height:1.6;color:#151515'), 8.6, 5.0, { marks: [11.6] });
chip('QS. AL-BAQARAH : 275', 8.8, 'left:160px;top:530px', 29.4, Y);
line(13.9, 29.4, 'left:160px;top:620px;width:1600px', 'Allah [menghalalkan jual beli] dan mengharamkan riba', { fs: 40, m: [15.0] });
[['🤝 jual beli yang benar', 19.0, '#fff'], ['💚 jual beli yang diridai Allah', 24.0, CG], ['🌴 jual beli yang membawa ke surga', 26.6, Y]].forEach(([s, t, c], i) => crd(`<div style="font:900 36px Inter;color:${c}">${s}</div>`, `left:${160 + i * 540}px;top:760px`, t, 29.4, 'up', 'tick'));

// --- 03 /citation : An-Nur 37
scene(29.4, 56.1, { cut: 'glitch' });
paper(29.5, 'left:160px;top:160px;width:1600px;height:480px', '', 56.1);
arw(node('رِجَالٌ لَا تُلْهِيهِمْ تِجَارَةٌ وَلَا بَيْعٌ عَنْ ذِكْرِ اللَّهِ [وَإِقَامِ الصَّلَاةِ وَإِيتَاءِ الزَّكَاةِ] يَخَافُونَ يَوْمًا تَتَقَلَّبُ فِيهِ الْقُلُوبُ وَالْأَبْصَارُ', 'left:220px;width:1480px;top:200px;text-align:center;font-size:58px;line-height:1.8;color:#151515'), 29.6, 11.8, { marks: [35.5] });
chip("QS. AN-NUR : 37", 29.8, 'left:160px;top:670px', 56.1, Y);
line(41.6, 56.1, 'left:160px;top:760px;width:1600px', 'orang yang [tidak dilalaikan] oleh perdagangannya dari mengingat Allah', { fs: 38, m: [43.0] });
crd(`<div style="font:900 34px Inter">🕌 salat · 💰 zakat <span style="color:${Y}">tetap dikerjakan</span></div>`, 'left:160px;top:880px', 56.1 - 3.0, 56.1, 'up', 'beep');

// --- 04 /venn : tiga rida
scene(56.1, 83.5, { cut: 'glitch' });
line(56.2, 83.5, 'left:140px;top:130px;width:1640px', 'dalam berbisnis diperlukan [tiga rida]', { fs: 44, m: [60.0] });
sv(56.2, 83.5, `<circle cx="760" cy="520" r="220" fill="rgba(127,224,160,.08)" stroke="${CG}" stroke-width="5" data-f="3.0"/><circle cx="1160" cy="520" r="220" fill="rgba(127,214,255,.08)" stroke="${CB}" stroke-width="5" data-f="5.0"/><circle cx="960" cy="800" r="220" fill="rgba(233,242,58,.08)" stroke="${Y}" stroke-width="5" data-f="10.4"/>` +
  T(680, 470, '🛒 PENJUAL', { f: 3.2, fs: 34, fw: 900, c: CG }) + T(680, 520, 'rida', { f: 3.4, fs: 30, fw: 800 }) +
  T(1240, 470, '🧺 PEMBELI', { f: 5.2, fs: 34, fw: 900, c: CB }) + T(1240, 520, 'rida', { f: 5.4, fs: 30, fw: 800 }) +
  T(960, 900, '☝ ALLAH', { f: 10.6, fs: 34, fw: 900, c: Y }) + T(960, 950, 'rida', { f: 13.4, fs: 30, fw: 800 }) +
  T(960, 640, '✓', { f: 18.3, fs: 70, fw: 900, c: '#fff' }), 'left:0;top:0', 1920, 1080, .6);
crd(`<div style="font:900 32px Inter;color:#111;background:${Y};border-radius:12px;padding:10px 22px;white-space:nowrap">= sejalan dengan petunjuk Al-Qur'an</div>`, 'left:1240px;top:180px', 74.4, 83.5, 'scale', 'impact');

// --- 05 /checklist : jangan sampai
scene(83.5, 111.7, { cut: 'glitch' });
label('DALAM BERDAGANG · JANGAN SAMPAI…', 83.6, 'left:160px;top:130px', 111.7);
tick('berani melanggar hukum-hukum Allah', 84.4, 111.7, 'left:200px;top:210px', CR, '✕', 44);
tick('lalai dalam perintah-perintah Allah', 91.9, 111.7, 'left:200px;top:330px', CR, '✕', 44);
tick('meninggalkan salat, zakat, puasa', 94.6, 111.7, 'left:200px;top:450px', CR, '✕', 44);
tick('mengorbankan agama demi untung', 103.0, 111.7, 'left:200px;top:570px', CR, '✕', 44);
tick('asal untung sampai lupa kepada Allah', 107.6, 111.7, 'left:200px;top:690px', CR, '✕', 44);

// --- 06 /bar-chart : untung banyak, Allah tidak rida
scene(111.7, 124.6, { cut: 'glitch' });
line(111.8, 124.6, 'left:140px;top:130px;width:1640px', 'banyak untung · tapi di akhir [Allah tidak rida]', { fs: 44, m: [115.0] });
(() => { const n = node(`<svg width="1640" height="620" viewBox="0 0 1640 620"><path d="M80 540 H1560" stroke="#fff" stroke-width="4"/><rect class="u" x="320" width="260" rx="10" fill="rgba(233,242,58,.3)" stroke="${Y}" stroke-width="4"/><rect class="r" x="1060" width="260" rx="10" fill="rgba(255,138,92,.25)" stroke="${CR}" stroke-width="4"/><text x="450" y="590" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${Y}">💰 UNTUNG ↑</text><text x="1190" y="590" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${CR}">☝ RIDA ALLAH ↓</text></svg>`, 'left:140px;top:250px');
  item(112.0, 124.6, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const hu = 60 + 380 * eio(clamp((t - 112.4) / 2.5)), hr = 380 - 330 * eio(clamp((t - 115.0) / 2.5)); const u = n.querySelector('.u'), r = n.querySelector('.r'); u.setAttribute('y', 540 - hu); u.setAttribute('height', hu); r.setAttribute('y', 540 - hr); r.setAttribute('height', hr); }); })();
crd(vcard(640, CR, `<div style="font:900 30px Inter;line-height:1.35">sebabnya: <span style="color:${CR}">lalai tanggung jawab</span> & berani melanggar hukum Allah</div>`, '#000'), 'left:600px;top:250px', 118.3, 124.6, 'down', 'beep');

// --- 07 /decision-matrix : beli buah di pohon
scene(124.6, 170.8, { cut: 'glitch' });
label('CONTOH: MEMBELI BUAH YANG MASIH DI POHON', 124.7, 'left:160px;top:130px', 170.8);
crd(vcard(1600, '#fff', `<div style="font:900 36px Inter;line-height:1.35">🌳 pohon rambutan · buahnya <span style="color:${CG}">masih hijau, belum masak</span> → "berapa harga buah sepohon?" → "sekian ratus ribu" 🤝</div>`), 'left:160px;top:200px', 131.7, 170.8, 'up', 'stamp');
crd(vcard(500, CG, `<div style="font:900 32px Inter;color:${CG}">✓ BOLEH</div><div style="font:800 28px Inter;margin-top:10px;line-height:1.35">saat itu juga langsung dipetik semua & dibawa pulang</div>`), 'left:160px;top:440px', 144.0, 170.8, 'up', 'tick');
crd(vcard(500, CR, `<div style="font:900 32px Inter;color:${CR}">✕ ALLAH TIDAK RIDA</div><div style="font:800 28px Inter;margin-top:10px;line-height:1.35">ditunggu sampai masak baru dipetik · melanggar peraturan Allah</div>`), 'left:710px;top:440px', 150.0, 170.8, 'up', 'beep');
crd(vcard(500, CG, `<div style="font:900 32px Inter;color:${CG}">✓ BOLEH</div><div style="font:800 28px Inter;margin-top:10px;line-height:1.35">buah sudah masak dibeli semua · dipetik beberapa minggu lagi</div>`), 'left:1260px;top:440px', 157.7, 170.8, 'up', 'tick');
line(166.0, 170.8, 'left:160px;top:800px;width:1600px;text-align:center', 'demikianlah [hukum Allah] & petunjuk Al-Qur\'an', { fs: 40, m: [168.0] });

// --- 08 /citation : Al-Muthaffifin 1-3
scene(170.8, 189.7, { cut: 'glitch' });
line(170.9, 177.9, 'left:160px;top:130px;width:1600px', 'Al-Qur\'an juga memberi [peringatan] bagi orang yang berusaha', { fs: 42, m: [174.0] });
paper(177.8, 'left:160px;top:210px;width:1600px;height:520px', '', 189.7);
arw(node('[وَيْلٌ لِلْمُطَفِّفِينَ] الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ وَإِذَا كَالُوهُمْ أَوْ وَزَنُوهُمْ يُخْسِرُونَ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:62px;line-height:1.8;color:#151515'), 178.0, 11.0, { marks: [179.4] });
chip('QS. AL-MUTHAFFIFIN : 1–3', 178.2, 'left:160px;top:760px', 189.7, Y);

// --- 09 /split-screen : mutaffifin
scene(189.7, 215.0, { cut: 'glitch' });
line(189.8, 215.0, 'left:140px;top:130px;width:1640px', 'mutaffifin ini [apa]?', { fs: 46, m: [190.6] });
crd(`<div style="width:780px;height:560px;border:5px solid ${CG};border-radius:20px;padding:30px;text-align:center;background:rgba(127,224,160,.05)"><div class="mono" style="font-size:26px;color:${CG}">KETIKA MEMBELI 🧺</div><div style="font-size:100px;margin-top:6px">⚖️</div><div style="font:900 40px Inter;color:${CG};margin-top:6px">minta disempurnakan</div><div style="font:800 30px Inter;margin-top:14px;line-height:1.35">beli beras sangat teliti · kurang sedikit minta ditambah · takut dicurangi</div></div>`, 'left:140px;top:240px', 190.8, 215.0, 'up', 'stamp');
crd(`<div style="width:780px;height:560px;border:5px solid ${CR};border-radius:20px;padding:30px;text-align:center;background:rgba(255,138,92,.05)"><div class="mono" style="font-size:26px;color:${CR}">KETIKA MENJUAL 🛒</div><div style="font-size:100px;margin-top:6px">📉</div><div style="font:900 40px Inter;color:${CR};margin-top:6px">dikurangi</div><div style="font:800 30px Inter;margin-top:14px;line-height:1.35">mengurangi takaran · timbangan · ukuran</div></div>`, 'left:1000px;top:240px', 195.1, 215.0, 'up', 'stamp');

// --- 10 /callout : neraka Wail
scene(215.0, 230.3, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${CR};border-radius:20px;padding:30px 40px;background:rgba(255,138,92,.08);text-align:center"><div class="mono" style="font-size:24px;color:${CR}">⚠ ANCAMAN AL-QUR'AN</div><div class="ar" style="font-size:96px;color:${CR};margin-top:6px">وَيْلٌ لِلْمُطَفِّفِينَ</div><div style="font:900 44px Inter;margin-top:4px">neraka Wail · celakalah orang-orang seperti itu</div></div>`, 'left:180px;top:200px', 215.1, 230.3, 'scale', 'impact');
line(224.2, 230.3, 'left:180px;top:700px;width:1560px;text-align:center', 'carilah kehidupan dunia dengan [jual beli yang baik]', { fs: 42, m: [227.0] });

// --- 11 /citation : Al-Baqarah 44
scene(230.3, 256.3, { cut: 'glitch' });
line(230.4, 239.1, 'left:160px;top:130px;width:1600px', 'petunjuk bagi [ilmuwan · da\'i · pendakwah] agar takwa', { fs: 42, m: [233.0] });
paper(239.0, 'left:160px;top:210px;width:1600px;height:460px', '', 256.3);
arw(node('أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ [وَتَنْسَوْنَ أَنْفُسَكُمْ] وَأَنْتُمْ تَتْلُونَ الْكِتَابَ أَفَلَا تَعْقِلُونَ', 'left:220px;width:1480px;top:260px;text-align:center;font-size:66px;line-height:1.8;color:#151515'), 239.2, 9.4, { marks: [243.0] });
chip('QS. AL-BAQARAH : 44', 239.4, 'left:160px;top:700px', 256.3, Y);
line(248.8, 256.3, 'left:160px;top:800px;width:1600px', 'menyuruh manusia berbuat baik · tapi [melupakan diri sendiri]?', { fs: 40, m: [251.0] });

// --- 12 /infographic : menyampaikan vs mengamalkan
scene(256.3, 311.6, { cut: 'glitch' });
line(256.4, 271.0, 'left:140px;top:130px;width:1640px', 'peringatan untuk [muballighin] · jangan lupakan diri sendiri', { fs: 42, m: [260.0] });
[['🌙', 'salat witir 11 rakaat', 271.2, 277.0], ['☀️', 'salat Dhuha · hafal fadilatnya', 279.7, 286.2], ['🤲', 'sedekah · wakaf · menolong fakir miskin', 292.4, 302.0]].forEach(([e, s, t0, t2], i) => {
  crd(`<div style="width:500px;height:330px;border:4px solid #fff;border-radius:18px;padding:22px"><div style="font-size:70px">${e}</div><div style="font:900 32px Inter;margin-top:8px;line-height:1.25">${s}</div><div style="font:800 28px Inter;color:${CG};margin-top:14px">✓ disampaikan kepada orang</div></div>`, `left:${160 + i * 550}px;top:230px`, t0, 311.6, 'up', 'tick');
  crd(`<div style="width:500px;border:4px solid ${CR};border-radius:14px;padding:14px 22px;background:rgba(255,138,92,.08);font:900 28px Inter;color:${CR}">✕ dirinya sendiri tak mengamalkan</div>`, `left:${160 + i * 550}px;top:600px`, t2, 311.6, 'drop', 'stamp'); });
crd(pill('hanya mengajak orang berbuat baik · tapi melupakan dirinya', CR), 'left:160px;top:780px', 307.7, 311.6, 'scale', 'impact');

// --- 13 /handwritten : nasihat Al-Qur'an
scene(311.6, 324.4, { cut: 'glitch' });
crd(`<div style="font:700 66px Kalam;color:#fff8d0;line-height:1.3">nasihat dari Al-Qur'an: <span style="color:${Y}">jangan sampai demikian…</span></div>`, 'left:200px;top:200px;width:1520px', 311.7, 324.4, 'up', 'paper');
arw(node('وَتَأْمُرُونَ النَّاسَ بِالْبِرِّ [وَتَنْسَوْنَ أَنْفُسَكُمْ] وَأَنْتُمْ تَتْلُونَ الْكِتَابَ أَفَلَا تَعْقِلُونَ', 'left:200px;width:1520px;top:520px;text-align:center;font-size:60px;line-height:1.8;color:#fff'), 316.4, 7.8, { marks: [319.0] });

// --- 14 /balance : sedekah terang-terangan vs sembunyi
scene(324.4, 356.9, { cut: 'glitch' });
line(324.5, 356.9, 'left:140px;top:130px;width:1640px', 'contoh: [sedekah] · terang-terangan atau sembunyi?', { fs: 44, m: [326.0] });
(() => { const n = node(`<svg width="1400" height="300" viewBox="0 0 1400 300"><path d="M700 40 V260 M560 290 H840" stroke="#fff" stroke-width="6"/><g class="bm"><path d="M240 60 H1160" stroke="#fff" stroke-width="6"/><path d="M240 60 L150 200 H330 Z" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="4"/><path d="M1160 60 L1070 200 H1250 Z" fill="rgba(127,224,160,.15)" stroke="${CG}" stroke-width="4"/></g></svg>`, 'left:260px;top:210px');
  item(324.6, 356.9, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const a = t < 350 ? -5 : 5; n.querySelector('.bm').setAttribute('transform', `rotate(${a * eio(clamp((t - (t < 350 ? 326 : 350)) / .8))} 700 60)`); }); })();
crd(vcard(760, Y, `<div class="mono" style="font-size:24px;color:${Y}">PANUTAN · DIIKUTI ORANG BANYAK</div><div style="font:900 36px Inter;margin-top:8px">📢 lebih baik terang-terangan</div><div style="font:800 28px Inter;margin-top:10px;line-height:1.35">① supaya diikuti orang banyak<br>② menghindarkan orang dari prasangka "pelit"</div>`, '#000'), 'left:140px;top:540px', 328.0, 356.9, 'up', 'stamp');
crd(vcard(760, CG, `<div class="mono" style="font-size:24px;color:${CG}">ORANG UMUM · AWAM</div><div style="font:900 36px Inter;margin-top:8px">🤫 lebih baik sembunyi</div><div style="font:800 28px Inter;margin-top:10px;line-height:1.35">itu lebih baik bagi kita</div>`, '#000'), 'left:1020px;top:540px', 350.1, 356.9, 'up', 'stamp');

// --- 15 /citation : As-Saff 3
scene(356.9, 375.8, { cut: 'glitch' });
paper(357.0, 'left:160px;top:180px;width:1600px;height:360px', '', 375.8);
arw(node('[كَبُرَ مَقْتًا عِنْدَ اللَّهِ] أَنْ تَقُولُوا مَا لَا تَفْعَلُونَ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:84px;line-height:1.7;color:#151515'), 357.2, 7.4, { marks: [359.0] });
chip('QS. ASH-SHAFF : 3', 357.4, 'left:160px;top:570px', 375.8, Y);
line(364.7, 375.8, 'left:160px;top:670px;width:1600px', 'kemarahan yang besar dari Allah · [mengatakan yang tidak diperbuat]', { fs: 40, m: [369.0] });

// --- 16 /roadmap : tetap mengingatkan
scene(375.8, 404.0, { cut: 'glitch' });
line(375.9, 385.0, 'left:140px;top:130px;width:1640px', 'belum mampu melakukannya [tidaklah menghalangi] kita mengingatkan orang', { fs: 40, m: [380.0] });
sv(384.9, 404.0, DEFS + `<path d="M200 560 C 500 420, 760 700, 1060 540 S 1560 420, 1740 520" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1800" data-dur="1.6"/>` +
  [['📢', 'mengingatkan orang', 280, 520, 0], ['🤲', 'Allah bantu · tolong', 640, 560, 2.4], ['🗝️', 'taufik · hidayah · inayah', 1000, 560, 6.6], ['✅', 'bisa mengamalkan', 1360, 480, 12.0], ['⭐', 'menjadi takwa', 1700, 510, 14.6]].map(([e, s, x, y, d], i) => `<circle cx="${x}" cy="${y}" r="48" fill="#000" stroke="${Y}" stroke-width="5" data-f="${d}"/>` + T(x, y + 16, e, { f: d, fs: 44 }) + T(x, y + (i % 2 ? -80 : 110), s, { f: d + .2, fs: 30, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, 1.0);
crd(pill('آمِينَ يَا رَبَّ الْعَالَمِينَ 🤲', Y), 'left:700px;top:820px', 402.3, 404.0, 'scale', 'impact');

// --- 17 /citation : Al-Isra 34
scene(404.0, 436.4, { cut: 'glitch' });
line(404.1, 421.8, 'left:160px;top:130px;width:1600px', 'petunjuk bagi [penguasa & pejabat] yang mengurusi rakyat', { fs: 42, m: [408.0] });
paper(421.7, 'left:160px;top:210px;width:1600px;height:360px', '', 436.4);
arw(node('وَأَوْفُوا بِالْعَهْدِ [إِنَّ الْعَهْدَ كَانَ مَسْئُولًا]', 'left:220px;width:1480px;top:270px;text-align:center;font-size:84px;line-height:1.7;color:#151515'), 421.9, 3.8, { marks: [424.0] });
chip("QS. AL-ISRA' : 34", 422.1, 'left:160px;top:600px', 436.4, Y);
line(425.9, 436.4, 'left:160px;top:700px;width:1600px', 'tepatilah janji-janjimu · akan [dimintai pertanggungjawaban] di akhirat', { fs: 40, m: [432.0] });

// --- 18 /tree : janji kampanye
scene(436.4, 463.8, { cut: 'glitch' });
sv(436.5, 463.8, DEFS + BOX(660, 140, 600, 110, { s: Y, sw: 5 }) + T(960, 208, '📣 JANJI KAMPANYE', { f: .1, fs: 42, fw: 900, c: Y }) +
  [['DPR', 330, 0.6], ['PRESIDEN', 750, 1.2], ['BUPATI', 1170, 6.0], ['GUBERNUR', 1590, 6.8]].map(([s, x, d]) => '<g data-f="' + d + '">' + LN([[960, 250], [x, 360]], { s: '#fff', sw: 3 }) + '</g>' + BOX(x - 170, 370, 340, 100, { s: '#fff', sw: 4, del: d + .1 }) + T(x, 432, s, { f: d + .2, fs: 36, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, .5);
crd(`<div style="text-align:center;border:4px solid ${Y};border-radius:18px;padding:14px 30px;background:#000"><div class="ar" style="font-size:62px;color:${Y}">إِنَّ الْعَهْدَ كَانَ مَسْئُولًا</div><div style="font:800 30px Inter">di hadapan Allah · janji itu akan dimintai pertanggungjawaban</div></div>`, 'left:410px;top:540px', 446.8, 463.8, 'scale', 'stamp');
crd(`<div style="font:900 34px Inter;color:${CR}">⚠ tak ditunaikan → berat pertanggungjawabannya di akhirat</div>`, 'left:300px;top:820px', 453.8, 463.8, 'up', 'beep');

// --- 19 /sketchnotes : atsar Sayyidina Umar
scene(463.8, 483.3, { cut: 'glitch' });
label("SAYYIDINA UMAR · KETIKA MENJADI KHALIFAH", 463.9, 'left:160px;top:130px', 483.3);
crd(`<div style="width:1100px;border:3px dashed ${Y};border-radius:30px 30px 30px 4px;padding:30px 36px;font:700 46px/1.35 Kalam;color:#fff8d0">"Andai seekor hewan mati kelaparan di negeri yang kupimpin, aku takut akan <span style="color:${Y}">tanggung jawabku di hadapan Allah</span>."</div>`, 'left:160px;top:210px', 464.0, 483.3, 'up', 'paper');
crd(`<div style="text-align:center;width:420px"><div style="font-size:150px">🐐</div><div style="font:900 32px Inter;color:${CR}">hewan kelaparan…</div></div>`, 'left:1340px;top:220px', 472.0, 483.3, 'scale', 'tick');
crd(pill('apalagi MANUSIA yang kelaparan', CR), 'left:160px;top:660px', 481.7, 483.3, 'scale', 'impact');

// --- 20 /spectrum : taat vs curang
scene(483.3, 514.9, { cut: 'glitch' });
line(483.4, 500.0, 'left:140px;top:130px;width:1640px', 'agar pejabat mendapat [kemuliaan] · jalankan hukum Allah · ikuti petunjuk Al-Qur\'an', { fs: 38, m: [487.0] });
(() => { let g = `<defs><linearGradient id="amn16" x1="0" x2="1"><stop offset="0" stop-color="${CR}"/><stop offset=".5" stop-color="${Y}"/><stop offset="1" stop-color="${CG}"/></linearGradient></defs><rect x="200" y="460" width="1520" height="36" rx="18" fill="url(#amn16)" data-f=".1"/>`;
  g += T(380, 580, '✕ CURANG', { f: 9.8, fs: 40, fw: 900, c: CR }) + T(380, 640, 'dosanya sangat amat besar', { f: 10.2, fs: 30, fw: 800 }) + T(1540, 580, '✓ TAAT & AMANAH', { f: .4, fs: 40, fw: 900, c: CG }) + T(1540, 640, 'rahmat melimpah · pahala besar', { f: 1.0, fs: 30, fw: 800 });
  sv(500.0, 514.9, g, 'left:0;top:0', 1920, 1080, .5); })();
crd(pill('⚠ hati-hati yang hendak menjadi pejabat', Y), 'left:560px;top:780px', 512.0, 514.9, 'scale', 'beep');

// --- 21 /search : hadis Abu Hurairah
scene(514.9, 537.2, { cut: 'glitch', light: 1 });
searchFind(514.9, 537.2, {
  q: 'إنكم ستحرصون على الإمارة', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.6, res: 2.4, click: 3.4, det: 3.8 },
  shelf: [['Shahih al-Bukhari', 'صحيح البخاري'], ['As-Sunan al-Kubra · an-Nasa\'i', 'السنن الكبرى'], ['Al-Jami\' ash-Shaghir', 'الجامع الصغير'], ['Al-Ihsan · Shahih Ibni Hibban', 'الإحسان'], ['Shahih al-Jami\' · al-Albani', 'صحيح الجامع']],
  results: [
    { title: "Al-Jami' ash-Shaghir · as-Suyuthi · no. 4068", tag: 'SHAHIH', ar: 'إِنَّكُمْ سَتَحْرِصُونَ عَلَى الْإِمَارَةِ', sub: '(خ ن) al-Bukhari & an-Nasa\'i dari Abu Hurairah' },
    { title: "As-Sunan al-Kubra · an-Nasa'i · j. 5 hlm. 399", tag: 'HADIS', ar: 'وَإِنَّهَا سَتَكُونُ نَدَامَةً', sub: 'kitab tentang jabatan' },
    { title: 'Al-Ihsan · Shahih Ibni Hibban · j. 10 hlm. 334', tag: 'HADIS', ar: 'وَحَسْرَةً يَوْمَ الْقِيَامَةِ', sub: 'penyesalan di hari kiamat' },
    { title: "Shahih al-Jami' · al-Albani · no. 2304", tag: 'SHAHIH', ar: 'فَنِعْمَ الْمُرْضِعَةُ وَبِئْسَتِ الْفَاطِمَةُ', sub: 'derajat: shahih' }],
  det: { title: 'Hadis Abu Hurairah', ar: 'أَبُو هُرَيْرَةَ', rows: [['DIRIWAYATKAN', 'al-Bukhari · an-Nasa\'i'], ['PERAWI SAHABAT', "Abu Hurairah radhiyallahu 'anhu"], ['TEMA', 'ambisi memegang jabatan'], ['LAFAZ', 'سَتَحْرِصُونَ عَلَى الْإِمَارَةِ'], ['AKIBAT', 'penyesalan di hari kiamat'], ['PESAN', 'jabatan adalah amanah'], ['DERAJAT', "shahih (Shahih al-Jami' 2304)"]], quote: 'وَإِنَّهَا سَتَكُونُ نَدَامَةً يَوْمَ الْقِيَامَةِ' }
});
camTour(514.9, 537.2, { type: .4, scan: 1.6, res: 2.4, click: 3.4, det: 3.8 });

// --- 22 /teaser : penutup
scene(537.2, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 537.3, TOTAL, -4, 400);
arw(node('وَأَوْفُوا بِالْعَهْدِ', 'left:760px;top:170px;width:1000px;text-align:right;font-size:70px;color:#fff'), 539.2, 2.0);
crd(`<div style="font:900 36px Inter;line-height:1.35">tunaikan janji kepada rakyat · janji kampanye, <span class="mk">sumpah dengan Al-Qur'an di atas kepala</span></div>`, 'left:760px;top:300px;width:1000px', 541.0, TOTAL, 'left', 'tick');
crd(`<div class="ar" style="font-size:54px;color:${Y};text-align:right;width:1000px">إِنَّ الْعَهْدَ كَانَ مَسْئُولًا</div>`, 'left:760px;top:470px', 549.6, TOTAL, 'fade', 'beep');
sub2('left:760px;top:620px', 550.2, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 8.4, '/kinetic-type'], [8.4, 29.4, '/citation'], [29.4, 56.1, '/citation'], [56.1, 83.5, '/venn'], [83.5, 111.7, '/checklist'], [111.7, 124.6, '/bar-chart'], [124.6, 170.8, '/decision-matrix'], [170.8, 189.7, '/citation'],
 [189.7, 215.0, '/split-screen'], [215.0, 230.3, '/callout'], [230.3, 256.3, '/citation'], [256.3, 311.6, '/infographic'], [311.6, 324.4, '/handwritten'], [324.4, 356.9, '/balance'], [356.9, 375.8, '/citation'], [375.8, 404.0, '/roadmap'],
 [404.0, 436.4, '/citation'], [436.4, 463.8, '/tree'], [463.8, 483.3, '/sketchnotes'], [483.3, 514.9, '/spectrum'], [514.9, 537.2, '/search'], [537.2, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
