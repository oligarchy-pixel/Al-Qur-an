// ================================================================== ADEGAN EPISODE 19 · Menegakkan Salat, Harta Halal & 104 Kitab
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
scene(0, 5.8, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label('FILE 19 · 5 KUNCI PETUNJUK (LANJUTAN)', .3, 'left:140px;top:260px');
seg('Menegakkan Salat &<br>[Harta Halal]', .6, 'left:140px;top:310px;width:1100px', { size: 92, iv: .04, marks: [2.8] });
mePol('left:1300px;top:150px', .2, 5.8, 4, 400);
meTag(.8, 5.8, 'وَيُقِيمُونَ الصَّلَاةَ');

// --- 02 /checklist : ulasan 5 kunci
scene(5.8, 23.1, { cut: 'glitch' });
crd(`<div style="text-align:center"><div class="ar" style="font-size:72px;color:${Y}">مِفْتَاحُ الْهُدَى وَالْفَلَاحِ خَمْسَةٌ</div><div style="font:900 34px Inter">kunci keberuntungan dunia & akhirat ada pada 5 perkara</div></div>`, 'left:360px;top:130px;width:1200px', 5.9, 23.1, 'scale', 'stamp');
[['01', 'iman kepada yang ghaib', 17.4, CG, '✓ sudah'], ['02', 'menegakkan salat', 23.0, Y, '▶ hari ini'], ['03', 'infak harta halal', 23.0, Y, '▶ hari ini'], ['04', 'iman kepada kitab samawi', 23.0, Y, '▶ hari ini'], ['05', 'yakin akhirat', 23.0, '#fff', 'berikutnya']].forEach(([n, s, t, c, tag], i) => crd(`<div style="width:300px;height:250px;border:4px solid ${c};border-radius:18px;padding:18px;text-align:center"><div style="font:900 56px 'DejaVu Sans Mono';color:${c}">${n}</div><div style="font:900 30px Inter;margin-top:10px;line-height:1.2">${s}</div><div class="mono" style="font-size:20px;color:${c};margin-top:10px">${tag}</div></div>`, `left:${140 + i * 330}px;top:420px`, i ? 10.9 + i * 1.2 : 17.4, 23.1, 'up', 'tick'));

// --- 03 /split-screen : memasang tiang vs menegakkan tiang
scene(23.1, 46.4, { cut: 'glitch' });
line(23.2, 31.8, 'left:140px;top:130px;width:1640px', 'kunci 02 · [إِقَامُ الصَّلَاةِ] · lain dengan sekadar mengerjakan salat', { fs: 42, m: [25.0] });
(() => { const n = node(`<svg width="1640" height="560" viewBox="0 0 1640 560"><rect x="20" y="20" width="760" height="520" rx="20" fill="rgba(255,138,92,.05)" stroke="${CR}" stroke-width="5"/><rect x="860" y="20" width="760" height="520" rx="20" fill="rgba(127,224,160,.05)" stroke="${CG}" stroke-width="5"/>
  <path d="M120 470 H680" stroke="#fff" stroke-width="6"/><g class="p1"><rect x="380" y="140" width="40" height="330" fill="rgba(255,138,92,.4)" stroke="${CR}" stroke-width="4"/></g>
  <path d="M960 470 H1520" stroke="#fff" stroke-width="6"/><g class="p2"><rect x="1220" y="140" width="40" height="330" fill="rgba(127,224,160,.4)" stroke="${CG}" stroke-width="4"/></g>
  <text x="400" y="90" text-anchor="middle" font-family="Inter" font-weight="900" font-size="36" fill="${CR}">ASAL PASANG TIANG</text><text x="1240" y="90" text-anchor="middle" font-family="Inter" font-weight="900" font-size="36" fill="${CG}">MENEGAKKAN TIANG</text></svg>`, 'left:140px;top:230px');
  item(31.8, 46.4, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelector('.p1').setAttribute('transform', `rotate(${14 * eio(lt / 1.2)} 400 470)`); const p2 = n.querySelector('.p2'); p2.style.opacity = t > 36 ? 1 : 0; p2.setAttribute('transform', `rotate(${t > 36 ? -10 * (1 - eio((t - 36) / 1.2)) : -10} 1240 470)`); }); sfx(31.8, 'whoosh', .6); sfx(36.0, 'impact', .6); })();
crd(pill('Allah mencela "orang yang salat" · memuji yang MENEGAKKAN salat', Y), 'left:200px;top:850px', 39.3, 46.4, 'scale', 'beep');

// --- 04 /citation : Al-Ma'un 4 & Al-Baqarah 3
scene(46.4, 62.4, { cut: 'glitch' });
paper(46.5, 'left:160px;top:170px;width:760px;height:300px', '', 62.4);
arw(node('[وَيْلٌ لِلْمُصَلِّينَ]', 'left:200px;width:680px;top:240px;text-align:center;font-size:80px;line-height:1.6;color:#151515'), 46.6, 1.6, { marks: [47.6] });
chip("QS. AL-MA'UN : 4", 46.8, 'left:160px;top:500px', 62.4, CR);
crd(`<div style="font:900 34px Inter;color:${CR}">celakalah orang-orang yang (sekadar) salat</div>`, 'left:160px;top:590px;width:760px', 48.0, 62.4, 'up', 'beep');
paper(55.0, 'left:1000px;top:170px;width:760px;height:300px', '', 62.4);
arw(node('الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ [وَيُقِيمُونَ الصَّلَاةَ]', 'left:1040px;width:680px;top:230px;text-align:center;font-size:58px;line-height:1.7;color:#151515'), 57.8, 4.4, { marks: [60.5] });
chip('QS. AL-BAQARAH : 3', 57.9, 'left:1000px;top:500px', 62.4, CG);
crd(`<div style="font:900 34px Inter;color:${CG}">yang dipuji: menegakkan salat</div>`, 'left:1000px;top:590px', 60.3, 62.4, 'up', 'tick');

// --- 05 /blueprint : salat sebagai benteng
scene(62.4, 77.3, { cut: 'glitch' });
show(node('', 'left:140px;top:120px;width:1640px;height:820px', 'bp'), 62.5, 'fade', 77.3);
label('SALAT YANG DITEGAKKAN = BENTENG', 62.6, 'left:180px;top:150px', 77.3);
sv(63.0, 77.3, DEFS + `<path d="M760 760 V520 H800 V480 H860 V520 H920 V480 H1000 V520 H1060 V480 H1120 V520 H1160 V760 Z" fill="rgba(255,255,255,.08)" stroke="#fff" stroke-width="5" data-d="2200" data-dur="1.4"/>` + T(960, 660, '🕌 SALAT', { f: 1.2, fs: 44, fw: 900 }) +
  [['dosa kepada Allah', 360, 380, 9.0], ['dosa kepada manusia', 1560, 380, 11.0]].map(([s, x, y, d], i) => `<g data-f="${d}">` + LN([[x, y + 40], [i ? 1190 : 730, 560]], { s: CR, sw: 5, arrow: 1 }) + `</g>` + T(x, y, '✕ ' + s, { f: d, fs: 32, fw: 900, c: CR })).join('') +
  T(960, 840, 'terhindar dari segala macam perbuatan dosa', { f: 6.0, fs: 32, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, .8);

// --- 06 /exploded-view : definisi iqamah
scene(77.3, 127.9, { cut: 'glitch' });
line(77.4, 87.9, 'left:140px;top:130px;width:1640px', 'seperti apa [mendirikan salat] itu? · seperti apa salat jadi benteng?', { fs: 42, m: [80.0] });
crd(`<div style="text-align:center"><div class="mono" style="font-size:24px;color:${Y}">MENURUT ULAMA SULUK</div><div class="ar" style="font-size:50px;line-height:1.7;margin-top:6px">فِعْلُ الشُّرُوطِ وَالْأَرْكَانِ وَالسُّنَنِ وَتَرْكُ الْمُبْطِلَاتِ وَالْمُحَرَّمَاتِ وَالْمَكْرُوهَاتِ ظَاهِرًا وَبَاطِنًا</div></div>`, 'left:200px;top:210px;width:1520px', 88.0, 127.9, 'scale', 'stamp');
[['✓ LAKUKAN', ['syarat', 'rukun', 'sunah'], CG, 102.5], ['✕ TINGGALKAN', ['yang membatalkan', 'yang haram (tak membatalkan)', 'yang makruh'], CR, 107.0]].forEach(([h, L, c, t], i) => crd(vcard(760, c, `<div style="font:900 40px Inter;color:${c}">${h}</div>${L.map((s, j) => `<div style="font:900 32px Inter;margin-top:10px">${j + 1}. ${s}</div>`).join('')}`), `left:${160 + i * 840}px;top:500px`, t, 127.9, 'up', 'stamp'));
crd(pill('= menegakkan salat', Y), 'left:760px;top:880px', 119.5, 127.9, 'scale', 'impact');

// --- 07 /checklist : syarat · rukun · sunah
scene(127.9, 154.1, { cut: 'glitch' });
[['SYARAT', CB, [['💧', 'berwudu'], ['👕', 'menutup aurat'], ['🕋', 'menghadap kiblat'], ['📖', 'tahu cara salat']], 129.0], ['RUKUN', Y, [['✅', 'dilaksanakan baik & benar']], 138.0], ['SUNAH', CG, [['🧎', 'tasyahud awal'], ['🤲', 'qunut'], ['📿', 'doa iftitah'], ['📖', 'surah sesudah Al-Fatihah']], 142.3]].forEach(([h, c, L, t], i) => crd(`<div style="width:520px;height:620px;border:4px solid ${c};border-radius:18px;padding:22px"><div style="font:900 44px Inter;color:${c}">${h}</div>${L.map(([e, s]) => `<div style="display:flex;gap:14px;align-items:center;margin-top:18px"><span style="font-size:44px">${e}</span><span style="font:900 30px Inter">${s}</span></div>`).join('')}</div>`, `left:${140 + i * 560}px;top:200px`, t, 154.1, 'up', 'stamp'));

// --- 08 /decision-matrix : batal · haram · makruh
scene(154.1, 217.7, { cut: 'glitch' });
label('YANG HARUS DITINGGALKAN DI DALAM SALAT', 154.2, 'left:160px;top:130px', 217.7);
crd(vcard(500, CR, `<div class="mono" style="font-size:22px;color:${CR}">01</div><div style="font:900 36px Inter;color:${CR}">MEMBATALKAN</div><div style="font:800 28px Inter;margin-top:10px">ditinggalkan</div>`), 'left:160px;top:200px', 154.2, 217.7, 'up', 'stamp');
crd(vcard(500, Y, `<div class="mono" style="font-size:22px;color:${Y}">02</div><div style="font:900 36px Inter;color:${Y}">HARAM · TAK MEMBATALKAN</div><div style="font:800 28px Inter;margin-top:10px">mis. mentasydidkan yang tak bertasydid</div><div style="display:flex;gap:20px;margin-top:14px;align-items:center"><span class="ar" style="font-size:46px;color:${CG}">مَالِكِ ✓</span><span class="ar" style="font-size:46px;color:${CR}">مَالِّكِ ✕</span></div>`), 'left:710px;top:200px', 163.3, 217.7, 'up', 'stamp');
crd(vcard(500, CB, `<div class="mono" style="font-size:22px;color:${CB}">03</div><div style="font:900 36px Inter;color:${CB}">MAKRUH</div><div style="font:800 28px Inter;margin-top:10px;line-height:1.4">mis. meninggalkan ta'awwudz<br>meninggalkan tasyahud awal</div>`), 'left:1260px;top:200px', 190.5, 217.7, 'up', 'stamp');
crd(`<div style="font:900 40px Inter">tinggalkan semuanya · <span class="mk">zahir maupun batin</span></div>`, 'left:160px;top:640px', 201.6, 217.7, 'left', 'beep');
crd(`<div style="text-align:center;border:4px solid ${Y};border-radius:18px;padding:14px 30px;background:#000"><div class="ar" style="font-size:60px;color:${Y}">وَيُقِيمُونَ الصَّلَاةَ</div><div style="font:800 28px Inter">barulah disebut menegakkan salat</div></div>`, 'left:610px;top:760px', 209.6, 217.7, 'scale', 'impact');

// --- 09 /spectrum : sempurna · mendekati
scene(217.7, 237.7, { cut: 'glitch' });
line(217.8, 225.6, 'left:140px;top:130px;width:1640px', 'susah menegakkan salat? paling tidak · [berusaha mendekatinya]', { fs: 42, m: [222.0] });
(() => { let g = `<defs><linearGradient id="qrb19" x1="0" x2="1"><stop offset="0" stop-color="${CR}"/><stop offset=".6" stop-color="${Y}"/><stop offset="1" stop-color="${CG}"/></linearGradient></defs><rect x="200" y="470" width="1520" height="36" rx="18" fill="url(#qrb19)" data-f=".1"/>`;
  g += T(360, 590, 'asal-asalan', { f: .3, fs: 34, fw: 900, c: CR }) + T(1100, 590, 'وَقَارِبُوا', { f: 2.0, ff: 'Amiri', fs: 54, fw: 700, c: Y }) + T(1100, 650, 'mendekati sempurna', { f: 2.4, fs: 30, fw: 800 }) + T(1600, 590, 'sempurna', { f: .6, fs: 34, fw: 900, c: CG });
  g += `<path class="pt" d="M0 0 L-24 -46 H24 Z" fill="#fff"/>`;
  const n = sv(225.6, 237.7, g, 'left:0;top:0', 1920, 1080, .5);
  item(225.6, 237.7, node('', 'left:0;top:0'), (lt, t) => { n.querySelector('.pt').setAttribute('transform', `translate(${360 + 740 * eio(clamp((t - 226) / 3))} 460)`); }); })();
crd(`<div style="font:900 32px Inter">sabda Rasulullah ﷺ: <span class="ar" style="font-size:44px;color:${Y}">وَقَارِبُوا</span> · tak bisa sempurna, dekatilah</div>`, 'left:200px;top:780px', 230.0, 237.7, 'up', 'tick');

// --- 10 /search : kam min qa'im
scene(237.7, 253.5, { cut: 'glitch', light: 1 });
searchFind(237.7, 253.5, {
  q: 'كم من قائم حظه من صلاته التعب والنصب', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.2, click: 3.0, det: 3.4 },
  shelf: [["Ihya' 'Ulum ad-Din · al-Ghazali", 'إحياء علوم الدين'], ["Takhrij al-Ihya' · al-'Iraqi", 'تخريج أحاديث الإحياء'], ["Sunan an-Nasa'i al-Kubra", 'السنن الكبرى'], ['Al-Khusyu\' fi ash-Shalah', 'الخشوع في الصلاة'], ["Mau'izhah al-Mu'minin", 'موعظة المؤمنين']],
  results: [
    { title: "Ihya' 'Ulum ad-Din · j. 1 hlm. 159", tag: 'DINUKIL', ar: 'كَمْ مِنْ قَائِمٍ حَظُّهُ مِنْ صَلَاتِهِ', sub: 'al-Ghazali menyebutnya sebagai sabda Nabi ﷺ' },
    { title: "Takhrij al-Ihya' · al-'Iraqi · hlm. 189", tag: 'CATATAN', ar: 'رُبَّ قَائِمٍ لَيْسَ لَهُ مِنْ قِيَامِهِ إِلَّا السَّهَرُ', sub: 'yang semakna: riwayat an-Nasa\'i dari Abu Hurairah' },
    { title: 'Al-Khusyu\' fi ash-Shalah · ash-Shabbagh', tag: 'DINUKIL', ar: 'التَّعَبُ وَالنَّصَبُ', sub: 'letih & payah saja' },
    { title: "Mau'izhah al-Mu'minin · al-Qasimi · hlm. 34", tag: 'DINUKIL', ar: 'كَمْ مِنْ قَائِمٍ', sub: 'ringkasan Ihya\'' }],
  det: { title: 'Letih tanpa pahala', ar: 'التَّعَبُ وَالنَّصَبُ', rows: [['DINUKIL', "al-Ghazali · Ihya' 'Ulum ad-Din"], ['MAKNA', 'yang didapat hanya letih & payah'], ['SEBAB', 'salatnya tidak diterima'], ['SEMAKNA', "an-Nasa'i: hanya mendapat begadang"], ['PERAWI', "Abu Hurairah radhiyallahu 'anhu"], ['CATATAN', "al-'Iraqi: lafaz ini tak ditemukan persis"], ['PESAN', 'tegakkan salat, bukan sekadar salat']], quote: 'كَمْ مِنْ قَائِمٍ حَظُّهُ مِنْ صَلَاتِهِ التَّعَبُ وَالنَّصَبُ' }
});
camTour(237.7, 253.5, { type: .4, scan: 1.4, res: 2.2, click: 3.0, det: 3.4 });

// --- 11 /sketchnotes : tiang miring
scene(253.5, 264.1, { cut: 'glitch' });
crd(`<div style="width:900px;border:3px dashed #fff;border-radius:30px 30px 30px 4px;padding:24px 30px;font:700 44px Kalam;color:#fff8d0">"disuruh pasang tiang… tapi tiangnya <span style="color:${CR}">miring</span>"</div>`, 'left:160px;top:200px', 253.6, 264.1, 'up', 'paper');
sv(254.0, 264.1, `<path d="M1200 860 H1700" stroke="#fff" stroke-width="6" data-d="500"/><rect x="1420" y="480" width="40" height="380" fill="rgba(255,138,92,.3)" stroke="${CR}" stroke-width="4" transform="rotate(12 1440 860)" data-f=".4"/>` + T(1450, 440, '🏠 tidak diterima', { f: 3.0, fs: 36, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, .6);
crd(pill('↺ terpaksa diulang', CR), 'left:160px;top:600px', 262.0, 264.1, 'scale', 'impact');

// --- 12 /callout : yang ditulis hanya yang disadari
scene(264.1, 291.8, { cut: 'glitch' });
crd(`<div style="text-align:center;border:4px solid ${Y};border-radius:18px;padding:20px 30px;background:rgba(233,242,58,.05)"><div class="ar" style="font-size:52px;line-height:1.7">إِنَّ الْعَبْدَ لَيُصَلِّي الصَّلَاةَ لَا يُكْتَبُ لَهُ سُدُسُهَا وَلَا عُشْرُهَا <span style="color:#e9f23a">وَإِنَّمَا يُكْتَبُ لِلْعَبْدِ مِنْ صَلَاتِهِ مَا عَقَلَ مِنْهَا</span></div></div>`, 'left:160px;top:160px;width:1600px', 264.2, 291.8, 'scale', 'stamp');
chip("HR. ABU DAWUD · AN-NASA'I · IBNU HIBBAN (SEMAKNA)", 274.9, 'left:160px;top:470px', 291.8, Y);
[['1/6', 'tidak ditulis', CR, 278.0], ['1/10', 'tidak ditulis', CR, 280.4], ['✓', 'yang ditulis: yang DISADARI', CG, 283.6]].forEach(([a, b, c, t], i) => crd(`<div style="width:${i < 2 ? 420 : 700}px;height:200px;border:4px solid ${c};border-radius:18px;text-align:center;padding-top:20px"><div style="font:900 76px Inter;color:${c}">${a}</div><div style="font:900 30px Inter">${b}</div></div>`, `left:${160 + i * 460}px;top:580px`, t, 291.8, 'drop', 'stamp'));

// --- 13 /timeline : sadar di setiap gerakan
scene(291.8, 315.8, { cut: 'glitch' });
line(291.9, 315.8, 'left:140px;top:130px;width:1640px', 'contoh: [sadar] di setiap gerakan salat', { fs: 46, m: [293.0] });
sv(291.9, 315.8, DEFS + `<path d="M200 470 H1720" stroke="#fff" stroke-width="5" data-d="1520" data-dur="1.6"/>` +
  [['🙇', 'rukuk', 300, 0], ['🧍', "i'tidal", 680, 3.3], ['🙏', 'sujud', 1060, 6.3], ['1️⃣', 'rakaat pertama', 1460, 9.3]].map(([e, s, x, d]) => `<circle cx="${x}" cy="470" r="60" fill="#000" stroke="${Y}" stroke-width="5" data-f="${d}"/>` + T(x, 492, e, { f: d, fs: 56 }) + T(x, 590, s, { f: d + .2, fs: 34, fw: 900 }) + T(x, 640, '"aku sadar"', { f: d + .4, fs: 26, fw: 800, c: Y })).join(''), 'left:0;top:0', 1920, 1080, .6);
crd(pill('itulah yang ditulis & diterima Allah = mendirikan salat', CG), 'left:300px;top:760px', 306.3, 315.8, 'scale', 'impact');

// --- 14 /tree : infak wajib & sunah
scene(315.8, 333.4, { cut: 'glitch' });
sv(315.9, 333.4, DEFS + BOX(560, 130, 800, 150, { s: Y, sw: 5 }) + T(960, 195, 'KUNCI 03 · إِنْفَاقُ الْمَالِ الْحَلَالِ', { f: .1, fs: 38, fw: 900, c: Y }) + T(960, 250, 'menafkahkan harta halal di jalan yang disyariatkan', { f: 1.5, fs: 26, fw: 800 }) +
  '<g data-f="7.5">' + LN([[760, 280], [520, 380]], { s: CB, sw: 4, arrow: 1 }) + '</g>' + BOX(200, 390, 640, 300, { s: CB, sw: 5, del: 7.6 }) + T(520, 450, 'WAJIB', { f: 7.8, fs: 40, fw: 900, c: CB }) + T(520, 520, '💰 zakat', { f: 8.4, fs: 34, fw: 900 }) + T(520, 580, '👨‍👩‍👧 menafkahi keluarga', { f: 9.4, fs: 34, fw: 900 }) +
  '<g data-f="10.6">' + LN([[1160, 280], [1400, 380]], { s: CG, sw: 4, arrow: 1 }) + '</g>' + BOX(1080, 390, 640, 300, { s: CG, sw: 5, del: 10.7 }) + T(1400, 450, 'SUNAH', { f: 10.9, fs: 40, fw: 900, c: CG }) + T(1400, 510, '🤝 bantu fakir miskin', { f: 11.4, fs: 30, fw: 900 }) + T(1400, 560, '🫶 menolong orang · sedekah', { f: 12.4, fs: 30, fw: 900 }) + T(1400, 610, '🕌 wakaf', { f: 14.0, fs: 30, fw: 900 }), 'left:0;top:0', 1920, 1080, .6);

// --- 15 /flowchart : harta haram dikembalikan
scene(333.4, 359.2, { cut: 'glitch' });
line(333.5, 343.4, 'left:140px;top:130px;width:1640px', 'perhatikan: yang dinafkahkan adalah [harta yang halal]', { fs: 44, m: [336.0] });
sv(338.9, 359.2, DEFS + BOX(160, 330, 520, 160, { s: CR, sw: 5 }) + T(420, 400, '💸 HARTA HARAM', { f: .1, fs: 38, fw: 900, c: CR }) + T(420, 455, 'jangan dinafkahkan', { f: 1.0, fs: 28, fw: 800 }) +
  '<g data-f="5.2">' + LN([[680, 410], [800, 410]], { s: CG, sw: 5, arrow: 1 }) + '</g>' + BOX(800, 330, 520, 160, { s: CG, sw: 5, del: 5.3 }) + T(1060, 400, '↩ DIKEMBALIKAN', { f: 5.5, fs: 38, fw: 900, c: CG }) + T(1060, 455, 'kepada pemiliknya', { f: 5.8, fs: 28, fw: 800 }) +
  BOX(1400, 330, 360, 160, { s: CR, sw: 5, del: 9.5 }) + T(1580, 400, '🕌 wakaf masjid?', { f: 9.7, fs: 30, fw: 900 }) + T(1580, 455, '✕ JANGAN', { f: 15.4, fs: 36, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, .6);
crd(pill('cocoknya: kembalikan kepada yang punya harta', CG), 'left:160px;top:640px', 354.8, 359.2, 'scale', 'impact');

// --- 16 /search : hadis harta dari jalan dosa
scene(359.2, 394.9, { cut: 'glitch', light: 1 });
searchFind(359.2, 394.9, {
  q: 'من أصاب مالا من مأثم فوصل به رحمه', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 2.0, res: 3.0, click: 4.0, det: 4.4 },
  shelf: [["Jami' al-'Ulum wa al-Hikam", 'جامع العلوم والحكم'], ["Al-Marasil · Abu Dawud", 'المراسيل'], ["Jam'ul Jawami' · as-Suyuthi", 'جمع الجوامع'], ['Shahih Ibni Hibban', 'صحيح ابن حبان'], ['Musnad Ahmad', 'مسند أحمد']],
  results: [
    { title: "Jami' al-'Ulum wa al-Hikam · Ibnu Rajab · hlm. 245", tag: 'MURSAL', ar: 'مَنْ أَصَابَ مَالًا مِنْ مَأْثَمٍ', sub: 'dari al-Qasim bin Mukhaimirah' },
    { title: "Jam'ul Jawami' · as-Suyuthi · no. 20558", tag: 'HADIS', ar: 'فَوَصَلَ بِهِ رَحِمَهُ أَوْ تَصَدَّقَ بِهِ', sub: 'disambung ke kerabat / disedekahkan' },
    { title: 'Musnad Ahmad · dari Ibnu Mas\'ud', tag: 'TERKAIT', ar: 'إِنَّ الْخَبِيثَ لَا يَمْحُو الْخَبِيثَ', sub: 'yang buruk tak menghapus yang buruk' },
    { title: 'Shahih Ibni Hibban · dari Abu Hurairah', tag: 'TERKAIT', ar: 'لَمْ يَكُنْ لَهُ فِيهِ أَجْرٌ', sub: 'tak ada pahala baginya' }],
  det: { title: 'Harta dari jalan dosa', ar: 'مَالٌ مِنْ مَأْثَمٍ', rows: [['RIWAYAT', 'mursal al-Qasim bin Mukhaimirah'], ['DINUKIL', "Ibnu Rajab · Jami' al-'Ulum wa al-Hikam"], ['PERBUATAN', 'disambung ke kerabat · disedekahkan · diinfakkan'], ['AKIBAT', 'semuanya dikumpulkan'], ['LALU', 'dilemparkan ke dalam neraka'], ['TERKAIT', 'Ibnu Hibban: tak ada pahala, dosanya tetap'], ['DERAJAT', 'mursal']], quote: 'جَمَعَ اللَّهُ ذَلِكَ جَمِيعًا ثُمَّ قَذَفَ بِهِ فِي نَارِ جَهَنَّمَ' }
});
camTour(359.2, 394.9, { type: .4, scan: 2.0, res: 3.0, click: 4.0, det: 4.4 });

// --- 17 /bar-chart : contoh riba
scene(394.9, 412.4, { cut: 'glitch' });
line(394.95, 412.4, 'left:140px;top:130px;width:1640px', 'contoh: [riba] · menghutangi orang', { fs: 46, m: [396.5] });
sv(398.6, 412.4, `<path d="M300 820 H1620" stroke="#fff" stroke-width="4" data-d="1320"/>` +
  `<rect x="480" y="320" width="300" height="500" rx="10" fill="rgba(127,214,255,.25)" stroke="${CB}" stroke-width="4" data-f=".2"/>` + T(630, 870, 'dipinjamkan', { f: .3, fs: 30, fw: 900, c: CB }) + T(630, 300, 'Rp 1.000.000', { f: .4, fs: 36, fw: 900 }) +
  `<rect x="1100" y="320" width="300" height="500" rx="10" fill="rgba(127,214,255,.25)" stroke="${CB}" stroke-width="4" data-f="2.0"/><rect x="1100" y="220" width="300" height="100" rx="10" fill="rgba(255,138,92,.45)" stroke="${CR}" stroke-width="4" data-f="2.4"/>` + T(1250, 870, 'dibayar', { f: 2.1, fs: 30, fw: 900, c: CB }) + T(1250, 200, 'Rp 1.200.000', { f: 2.3, fs: 36, fw: 900 }) + T(1250, 285, '+200.000 = RIBA', { f: 4.4, fs: 30, fw: 900, c: '#111' }), 'left:0;top:0', 1920, 1080, .6);

// --- 18 /roadmap : cara bertaubat dari riba
scene(412.4, 466.8, { cut: 'glitch' });
line(412.5, 434.6, 'left:140px;top:130px;width:1640px', 'Allah bukakan hati · ingin bertaubat · [seperti apa caranya]?', { fs: 42, m: [430.0] });
sv(414.0, 466.8, DEFS + `<path d="M200 560 C 500 420, 760 700, 1060 540 S 1560 420, 1740 520" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1800" data-dur="1.6"/>` +
  [['✋', '01 · berhenti', 'jangan lagi buat', 300, 520, 20.7], ['💵', '02 · tagih modal saja', "رَأْسُ الْمَالِ", 700, 590, 22.9], ['🧮', '03 · hitung kelebihan', 'kembalikan ke pemiliknya', 1120, 540, 31.8], ['🤝', '04 · temui & minta maaf', 'minta rida · "ini bukan hakku"', 1580, 470, 38.9]].map(([e, a, b, x, y, d], i) => `<circle cx="${x}" cy="${y}" r="54" fill="#000" stroke="${Y}" stroke-width="5" data-f="${d}"/>` + T(x, y + 18, e, { f: d, fs: 48 }) + T(x, y + (i % 2 ? -110 : 110), a, { f: d + .2, fs: 30, fw: 900, c: Y }) + T(x, y + (i % 2 ? -70 : 150), b, { f: d + .4, fs: i === 1 ? 34 : 24, fw: 800, ff: i === 1 ? 'Amiri' : 'Inter' })).join(''), 'left:0;top:0', 1920, 1080, 1.0);

// --- 19 /callout : salah kaprah
scene(466.8, 479.4, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${CR};border-radius:20px;padding:30px 40px;background:rgba(255,138,92,.08)"><div class="mono" style="font-size:24px;color:${CR}">⚠ SALAH KAPRAH</div><div style="font:900 52px Inter;margin-top:12px">uang bunga <span style="color:${CR}">disedekahkan · disumbangkan</span> ke jalan Allah</div></div>`, 'left:180px;top:220px', 466.9, 479.4, 'scale', 'impact');
crd(pill('agama sudah mengatur: dipulangkan kepada yang punya', CG), 'left:180px;top:560px', 474.0, 479.4, 'scale', 'beep');

// --- 20 /flowchart : jika pemilik tiada
scene(479.4, 501.7, { cut: 'glitch' });
line(479.5, 501.7, 'left:140px;top:130px;width:1640px', 'kalau [pemiliknya sudah tiada]?', { fs: 46, m: [481.0] });
sv(479.6, 501.7, DEFS + [['👤 PEMILIK', 'sudah meninggal', '#fff', 0], ['👨‍👧 ANAK · WARIS', 'tidak ada lagi', '#fff', 1.2], ['👪 KELUARGA', 'tak diketahui di mana', '#fff', 5.8], ['🕌 KEPENTINGAN UMAT', 'pahalanya untuk pemilik uang', CG, 9.2]].map(([a, b, c, d], i) => BOX(140 + i * 440, 400, 400, 200, { s: c, sw: 5, del: d }) + T(340 + i * 440, 480, a, { f: d + .1, fs: 30, fw: 900, c }) + T(340 + i * 440, 540, b, { f: d + .3, fs: 24, fw: 800 }) + (i ? '<g data-f="' + d + '">' + LN([[100 + i * 440, 500], [140 + i * 440, 500]], { s: Y, sw: 5, arrow: 1 }) + '</g>' : '')).join(''), 'left:0;top:0', 1920, 1080, .6);
crd(pill('+ mohon ampun & bertaubat kepada Allah', Y), 'left:560px;top:720px', 496.0, 501.7, 'scale', 'impact');

// --- 21 /citation : kunci 4 · pertanyaan Abu Dzar
scene(501.7, 516.6, { cut: 'glitch' });
line(501.8, 509.4, 'left:140px;top:130px;width:1640px', 'kunci 04 · beriman dengan [Al-Qur\'an] & [kitab-kitab samawi]', { fs: 42, m: [503.5, 506.5] });
crd(`<div style="width:1100px;border:3px dashed #fff;border-radius:30px 30px 30px 4px;padding:24px 30px"><div class="mono" style="font-size:22px;color:${Y}">ABU DZAR BERTANYA</div><div class="ar" style="font-size:60px;margin-top:6px">كَمْ كِتَابًا أَنْزَلَ اللَّهُ؟</div><div style="font:900 34px Inter">"berapa kitab yang Allah turunkan?"</div></div>`, 'left:160px;top:240px', 509.5, 516.6, 'up', 'paper');
crd(`<div style="width:700px;border:3px dashed ${Y};border-radius:30px 30px 4px 30px;padding:24px 30px"><div class="mono" style="font-size:22px;color:${Y}">RASULULLAH ﷺ MENJAWAB</div><div class="ar" style="font-size:56px;margin-top:6px;color:${Y}">مِائَةُ كِتَابٍ وَأَرْبَعَةُ كُتُبٍ</div></div>`, 'left:1060px;top:560px', 513.0, 516.6, 'up', 'beep');

// --- 22 /bar-chart : 104 kitab
scene(516.6, 563.8, { cut: 'glitch' });
label('104 KITAB SAMAWI · SEJAK NABI ADAM SAMPAI RASULULLAH ﷺ', 516.7, 'left:160px;top:130px', 563.8);
sv(516.8, 563.8, `<path d="M220 800 H1700" stroke="#fff" stroke-width="4" data-d="1480"/>` +
  [['Nabi Syits', 50, Y, 21.0], ['Nabi Idris', 30, Y, 29.3], ['Nabi Ibrahim', 10, Y, 32.0], ['Nabi Musa', 10, Y, 35.3], ['Taurat', 1, CG, 43.0], ['Zabur', 1, CG, 43.6], ['Injil', 1, CG, 44.2], ["Al-Qur'an", 1, CG, 44.8]].map(([s, v, c, d], i) => { const h = Math.max(24, v * 10), x = 260 + i * 180; return `<rect x="${x}" y="${800 - h}" width="120" height="${h}" rx="8" fill="${c === Y ? 'rgba(233,242,58,.35)' : 'rgba(127,224,160,.45)'}" stroke="${c}" stroke-width="4" data-f="${d}"/>` + T(x + 60, 790 - h, v + (v > 1 ? ' lembar' : ''), { f: d + .1, fs: 26, fw: 900, c }) + T(x + 60, 850, s, { f: d, fs: 24, fw: 900 }); }).join(''), 'left:0;top:0', 1920, 1080, .5);
counter(560.0, 563.8, 104, 'left:1300px;top:180px', 'SEMUANYA', Y);
crd(pill('wajib kita percayai', Y), 'left:160px;top:900px', 560.5, 563.8, 'scale', 'impact');

// --- 23 /teaser : penutup
scene(563.8, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 563.9, TOTAL, -4, 400);
crd(`<div class="mono" style="font-size:26px;color:${Y}">▶ BERIKUTNYA · KUNCI 05</div><div class="ar" style="font-size:72px;color:${Y};margin-top:6px">الْيَقِينُ بِالْآخِرَةِ</div><div style="font:900 32px Inter">yakin dengan adanya hari akhirat</div>`, 'left:760px;top:180px', 564.0, TOTAL, 'up', 'beep');
crd(`<div style="font:900 34px Inter;line-height:1.35">semoga Allah beri hidayah, taufik & inayah · <span class="mk">menjadi hamba yang takwa</span> 🤲</div>`, 'left:760px;top:450px;width:1000px', 576.9, TOTAL, 'left', 'tick');
sub2('left:760px;top:640px', 579.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 5.8, '/kinetic-type'], [5.8, 23.1, '/checklist'], [23.1, 46.4, '/split-screen'], [46.4, 62.4, '/citation'], [62.4, 77.3, '/blueprint'], [77.3, 127.9, '/exploded-view'], [127.9, 154.1, '/infographic'], [154.1, 217.7, '/decision-matrix'],
 [217.7, 237.7, '/spectrum'], [237.7, 253.5, '/search'], [253.5, 264.1, '/sketchnotes'], [264.1, 291.8, '/callout'], [291.8, 315.8, '/timeline'], [315.8, 333.4, '/tree'], [333.4, 359.2, '/flowchart'], [359.2, 394.9, '/search'],
 [394.9, 412.4, '/bar-chart'], [412.4, 466.8, '/roadmap'], [466.8, 479.4, '/callout'], [479.4, 501.7, '/flowchart'], [501.7, 516.6, '/handwritten'], [516.6, 563.8, '/bar-chart'], [563.8, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
