// ================================================================== ADEGAN EPISODE 10 · Minta Bantuan & Pertolongan dari Allah (إِيَّاكَ نَسْتَعِينُ)
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


// ================================================================== EP 13 · Rahasia Sapi Betina (Surah Al-Baqarah · ayat 1–2)
// sapi garis (line-art); fill = warna badan
const cow = (x, y, s, o = {}) => `<g transform="translate(${x} ${y}) scale(${s})" data-f="${o.f ?? 0}"><path d="M-170 -40 Q-170 -100 -100 -100 H90 Q150 -100 150 -40 V30 Q150 60 120 60 H-140 Q-170 60 -170 30 Z" fill="${o.fill || 'none'}" stroke="${o.c || '#fff'}" stroke-width="6"/>
  <path d="M150 -70 Q190 -110 230 -90 Q260 -60 250 -20 Q240 10 205 10 Q170 10 160 -20" fill="${o.fill || 'none'}" stroke="${o.c || '#fff'}" stroke-width="6"/><path d="M200 -98 Q195 -135 215 -140 M232 -92 Q245 -128 268 -124" fill="none" stroke="${o.c || '#fff'}" stroke-width="6" stroke-linecap="round"/><circle cx="222" cy="-60" r="6" fill="${o.c || '#fff'}"/>
  <path d="M-140 60 V140 M-100 60 V140 M80 60 V140 M120 60 V140" stroke="${o.c || '#fff'}" stroke-width="10" stroke-linecap="round"/><path d="M-170 -60 Q-215 -40 -205 20" fill="none" stroke="${o.c || '#fff'}" stroke-width="5" stroke-linecap="round"/></g>`;
const kanji = (t0, t1, css, html, snd = 'tick') => crd(html, css, t0, t1, 'up', snd);

// --- 01 pembuka (/kinetic-type)
scene(0, 6.3, { cut: 'none' });
arw(node(BSM, 'left:140px;top:130px;width:1000px;font-size:62px;color:#fff;text-align:left'), .1, 1.1);
label('FILE 13 · SURAH KEDUA DALAM AL-QUR\'AN', 1.3, 'left:140px;top:285px');
seg('Rahasia<br>Sapi [Betina]', 1.6, 'left:140px;top:335px;width:1100px', { size: 110, iv: .05, marks: [3.4] });
arw(node('[سُورَةُ الْبَقَرَةِ]', 'left:140px;top:620px;width:1000px;font-size:70px;color:#fff;text-align:left'), 5.0, 1.0, { marks: [5.6] });
mePol('left:1300px;top:150px', .4, 6.3, 4, 400);
meTag(1.4, 6.3, 'سُورَةُ الْبَقَرَةِ');

// --- 02 /timeline : Madaniyyah + 286 ayat
scene(6.3, 21.0, { cut: 'glitch' });
line(6.4, 21.0, 'left:140px;top:130px;width:1640px', 'surah [Madaniyyah] · turun sesudah Rasulullah ﷺ hijrah', { fs: 44, m: [7.4] });
sv(8.0, 21.0, DEFS + `<path d="M260 560 H1660" stroke="#fff" stroke-width="5" data-d="1400" data-dur="2"/>` + `<circle cx="260" cy="560" r="26" fill="#000" stroke="#fff" stroke-width="5"/>` + T(260, 640, 'MAKKAH', { fs: 40, fw: 900 }) +
  `<circle cx="960" cy="560" r="20" fill="${Y}" data-f="1.6"/>` + T(960, 510, 'HIJRAH', { f: 1.6, fs: 34, fw: 900, c: Y }) + `<circle cx="1660" cy="560" r="30" fill="${Y}" data-f="2.8"/>` + T(1660, 640, 'MADINAH', { f: 2.8, fs: 40, fw: 900, c: Y }) + T(1660, 690, 'Al-Baqarah turun di sini', { f: 3.2, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, 1.0);
counter(17.4, 21.0, 286, 'left:760px;top:760px', 'AYAT', Y, 1.6);

// --- 03 /search : hadis rumah & Al-Baqarah
scene(21.0, 35.0, { cut: 'glitch', light: 1 });
searchFind(21.0, 35.0, {
  q: 'لا تجعلوا بيوتكم مقابر وإن البيت الذي تقرأ فيه البقرة لا يدخله الشيطان', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.8, res: 2.6, click: 3.6, det: 4.0 },
  shelf: [['Sunan at-Tirmidzi', 'سنن الترمذي'], ['Shahih Muslim', 'صحيح مسلم'], ['Mausu\'ah Fadhail Suwar', 'موسوعة فضائل السور'], ['Riyadh ash-Shalihin', 'رياض الصالحين'], ['Majallah al-Buhuts', 'مجلة البحوث']],
  results: [
    { title: 'Sunan at-Tirmidzi · no. 2877 · j. 5 hlm. 157', tag: 'COCOK', ar: 'لَا تَجْعَلُوا بُيُوتَكُمْ مَقَابِرَ', sub: 'jangan jadikan rumah kalian seperti kuburan' },
    { title: 'Shahih Muslim · no. 780', tag: 'SHAHIH', ar: 'إِنَّ الشَّيْطَانَ يَنْفِرُ مِنَ الْبَيْتِ', sub: 'syaitan lari dari rumah yang dibacakan Al-Baqarah' },
    { title: "Mausu'ah Fadhail Suwar wa Ayat al-Qur'an", tag: 'DINUKIL', ar: 'لَا يَدْخُلُهُ الشَّيْطَانُ', sub: 'keutamaan surah Al-Baqarah' },
    { title: "Majallah al-Buhuts al-Islamiyyah · j. 33 hlm. 166", tag: 'TERKAIT', ar: 'قِرَاءَةُ سُورَةِ الْبَقَرَةِ', sub: 'membaca Al-Baqarah sebagai pelindung rumah' }],
  det: { title: 'Sunan at-Tirmidzi', ar: 'سُنَنُ التِّرْمِذِيِّ', rows: [['NOMOR', '2877 · bab Fadhail al-Qur\'an'], ['PERAWI SAHABAT', "Abu Hurairah radhiyallahu 'anhu"], ['ISI 1', 'jangan jadikan rumah seperti kuburan'], ['ISI 2', 'rumah yang dibacakan Al-Baqarah tidak dimasuki syaitan'], ['DERAJAT', 'at-Tirmidzi: hasan shahih'], ['RIWAYAT LAIN', 'Shahih Muslim no. 780 (syaitan lari)'], ['PELAJARAN', 'rajin bacakan Al-Baqarah di rumah']], quote: 'وَإِنَّ الْبَيْتَ الَّذِي تُقْرَأُ فِيهِ الْبَقَرَةُ لَا يَدْخُلُهُ الشَّيْطَانُ' }
});
camTour(21.0, 35.0, { type: .4, scan: 1.8, res: 2.6, click: 3.6, det: 4.0 });

// --- 04 /diagram : rumah terlindung
scene(35.0, 53.9, { cut: 'glitch' });
line(35.1, 39.7, 'left:140px;top:130px;width:1640px', 'rumah yang dibacakan Al-Baqarah · [tidak dimasuki syaitan]', { fs: 44, m: [37.0] });
sv(35.6, 53.9, `<path d="M660 520 L960 300 L1260 520 V860 H660 Z" fill="rgba(233,242,58,.08)" stroke="${Y}" stroke-width="6" data-d="1700"/><rect x="900" y="700" width="120" height="160" fill="none" stroke="${Y}" stroke-width="5" data-d="560" data-del=".6"/>` +
  T(960, 620, 'سُورَةُ الْبَقَرَةِ', { f: 1.0, ff: 'Amiri', fs: 56, fw: 700, c: Y }) + `<circle cx="960" cy="600" r="430" fill="none" stroke="${CG}" stroke-width="6" stroke-dasharray="18 14" data-d="2700" data-del="3.0"/>` +
  [[300, 380], [1620, 420], [320, 860], [1600, 860]].map(([x, y], i) => `<g data-f="${(9.0 + i * .5).toFixed(1)}">` + T(x, y, '👻', { fs: 70 }) + `<path d="M${x + (x < 960 ? 60 : -60)} ${y - 20} L${x + (x < 960 ? 150 : -150)} ${y - 20}" stroke="${CR}" stroke-width="6"/>` + T(x + (x < 960 ? 105 : -105), y - 40, '✕', { fs: 40, c: CR }) + '</g>').join(''), 'left:0;top:0', 1920, 1080, 1.0);
crd(`<div style="font:800 34px Inter;width:420px">"macam hantu-hantu yang mengganggu di rumah · itu termasuk <span style="color:${CR}">syaitan</span> juga"</div>`, 'left:1400px;top:180px', 39.8, 53.9, 'left', 'tick');
crd(`<div style="font:900 40px Inter;color:#111;background:${Y};border-radius:12px;padding:10px 22px">rajin bacakan Al-Baqarah di rumah ✓</div>`, 'left:600px;top:930px', 44.7, 53.9, 'scale', 'impact');

// --- 05 /exploded-view : arti Al-Baqarah
scene(53.9, 73.1, { cut: 'glitch' });
arw(node('[الْبَقَرَةُ]', 'left:0;right:0;top:150px;text-align:center;font-size:150px;color:#fff'), 54.0, 1.0, { marks: [54.8] });
[['الْ', 'kata sandang', '#fff', 54.8], ['بَقَرَ', 'sapi', Y, 55.4], ['ـةُ', 'tanda BETINA', CR, 56.0]].forEach(([a, s, c, t], i) => crd(`<div style="width:420px;height:230px;border:4px solid ${c};border-radius:18px;text-align:center;padding-top:16px"><div class="ar" style="font-size:90px;color:${c}">${a}</div><div style="font:900 32px Inter">${s}</div></div>`, `left:${1290 - i * 520}px;top:440px`, t, 73.1, 'drop', 'stamp'));
line(57.1, 73.1, 'left:140px;top:740px;width:1640px;text-align:center', 'kenapa dinamakan Al-Baqarah? → karena ada [kisah Nabi Musa ʿalaihissalam] dengan seekor sapi betina', { fs: 40, m: [61.6] });
sv(66.0, 73.1, cow(960, 950, .55, { c: Y }), 'left:0;top:0', 1920, 1080, .8);

// --- 06 /sketchnotes : awal kisah (pembunuhan misterius)
scene(73.1, 112.4, { cut: 'glitch' });
label('DISEBUTKAN DALAM BERBAGAI KITAB TAFSIR', 73.2, 'left:140px;top:130px', 112.4);
[['01', '🗡️', 'seorang saudagar terbunuh', 'pembunuhnya tidak diketahui', 81.0], ['02', '🗣️', 'cekcok · tuduh-menuduh', 'Bani Israil bertengkar', 88.3], ['03', '🙋', 'datang kepada Nabi Musa ʿalaihissalam', '"bagaimana mengatasinya?"', 93.4], ['04', '☁️', 'Nabi Musa meminta wahyu', 'Allah menurunkan wahyu', 104.3]].forEach(([n, e, s, d, t], i) =>
  crd(`<div style="width:390px;height:560px;border:3px dashed ${Y};border-radius:18px;padding:26px;background:rgba(233,242,58,.04);transform:rotate(${i % 2 ? 1 : -1}deg)"><div class="mono" style="font-size:28px;color:${Y}">${n}</div><div style="font-size:110px;margin-top:20px;text-align:center">${e}</div><div style="font:700 40px Kalam;color:#fff8d0;margin-top:20px;line-height:1.15">${s}</div><div style="font:700 30px Kalam;color:${Y};margin-top:14px">${d}</div></div>`, `left:${130 + i * 425}px;top:220px`, t, 112.4, 'drop', 'paper'));
line(96.9, 104.2, 'left:140px;top:840px;width:1640px;text-align:center', '"ada seseorang yang mati, namun [pembunuhnya tidak diketahui]"', { fs: 38, w: 700, m: [100.6] });

// --- 07 /citation : perintah menyembelih sapi (QS. Al-Baqarah 67)
scene(112.4, 131.6, { cut: 'glitch' });
paper(112.5, 'left:160px;top:180px;width:1600px;height:420px', '', 131.6);
arw(node('إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ [تَذْبَحُوا بَقَرَةً]', 'left:220px;width:1480px;top:240px;text-align:center;font-size:96px;line-height:1.7;color:#151515'), 112.8, 5.0, { marks: [117.0] });
kin(node('', 'left:260px;top:460px;width:1400px;font:700 40px Inter;color:#222;text-align:center'), '"Allah menyuruh kalian [menyembelih seekor sapi]"', 121.9, { iv: .03, marks: [123.6], t1: 131.6 });
chip('QS. AL-BAQARAH : 67', 113.0, 'left:160px;top:630px', 131.6, Y);
crd(`<div style="display:flex;align-items:center;gap:30px"><div style="font:900 130px Inter;color:${CR}">?</div><div style="font:900 44px Inter;line-height:1.25">"apa hubungannya orang mati<br>yang tak diketahui pembunuhnya · <span style="color:${CR}">dengan sapi?</span>"</div></div>`, 'left:300px;top:760px', 126.9, 131.6, 'scale', 'impact');

// --- 08 /split-screen : dialog olok-olok
scene(131.6, 150.0, { cut: 'glitch' });
[['BANI ISRAIL', '"wahai Musa, apakah engkau hendak <span style="color:' + CR + '">mengolok-olok</span> kami?"', CR, 131.7, '', ''], ['NABI MUSA ʿalaihissalam', '"aku berlindung kepada Allah dari golongan orang yang mengolok-olok"', CG, 137.7, 'أَعُوذُ بِاللَّهِ أَنْ أَكُونَ مِنَ الْجَاهِلِينَ', 'aku tidak mengolok-olok kalian']].forEach(([h, s, c, t, ar, d], i) =>
  crd(`<div style="width:780px;height:560px;border:5px solid ${c};border-radius:20px;padding:30px"><div class="mono" style="font-size:26px;color:${c}">${h}</div><div style="font:800 40px Inter;margin-top:16px;line-height:1.3">${s}</div>${ar ? `<div class="ar" style="font-size:46px;color:${c};margin-top:20px;text-align:right">${ar}</div>` : ''}</div>`, `left:${140 + i * 860}px;top:180px`, t, 150.0, 'up', 'stamp'));
crd(`<div style="font:900 44px Inter;color:#111;background:${Y};border-radius:12px;padding:10px 24px">akhirnya mereka percaya ✓</div>`, 'left:700px;top:820px', 148.4, 150.0, 'scale', 'beep');

// --- 09 /balance : cukup sapi apa saja vs banyak bertanya
scene(150.0, 171.0, { cut: 'glitch' });
line(150.1, 155.6, 'left:140px;top:130px;width:1640px', 'mereka bertanya lagi: "sapi anak · atau [sapi tua]?"', { fs: 44, m: [153.0] });
(() => { const n = node(`<svg width="1400" height="560" viewBox="0 0 1400 560"><path d="M700 80 V480 M540 520 H860" stroke="#fff" stroke-width="6"/><g class="bm"><path d="M240 100 H1160" stroke="#fff" stroke-width="6"/><g><path d="M240 100 L150 260 H330 Z" fill="rgba(127,224,160,.15)" stroke="${CG}" stroke-width="4"/><text x="240" y="310" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${CG}">TAAT LANGSUNG</text><text x="240" y="372" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">sapi apa saja · cukup</text></g><g><path d="M1160 100 L1070 260 H1250 Z" fill="rgba(255,138,92,.15)" stroke="${CR}" stroke-width="4"/><text x="1160" y="310" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${CR}">BANYAK BERTANYA</text><text x="1160" y="372" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">makin dipersulit</text></g></g></svg>`, 'left:260px;top:280px');
  item(155.6, 171.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const a = eio((t - 162.0) / 1.4) * 6; n.querySelector('.bm').setAttribute('transform', `rotate(${a} 700 100)`); }); sfx(162.0, 'impact', .6); })();
line(155.6, 162.0, 'left:140px;top:200px;width:1640px', 'sabda Nabi ﷺ: andai mereka menyembelih [seekor sapi apa saja] · cukup', { fs: 38, m: [159.0] });
line(162.0, 171.0, 'left:140px;top:200px;width:1640px', 'tapi Bani Israil dikenal [keras & cerewet]', { fs: 42, c: CR, m: [165.0] });

// --- 10 /blueprint : spesifikasi sapi
scene(171.0, 206.2, { cut: 'glitch' });
show(node('', 'left:120px;top:150px;width:1680px;height:820px;border:3px solid #7fa0ff;border-radius:12px', 'bp'), 171.0, 'fade', 206.2);
label('SPESIFIKASI SAPI · WAHYU KEPADA NABI MUSA', 171.1, 'left:160px;top:170px', 206.2);
(() => { const n = node(`<svg width="900" height="600" viewBox="0 0 900 600">${cow(430, 330, 1.1, { c: '#fff' })}</svg>`, 'left:180px;top:250px'); const b = n.querySelector('path');
  item(171.2, 206.2, n, (lt, t, it) => { n.style.opacity = clamp(lt / .4) * clamp((it.t1 - t) / .3); const k = clamp((t - 179.1) / .8); n.querySelectorAll('path')[0].setAttribute('fill', `rgba(233,242,58,${(k * .85).toFixed(2)})`); n.querySelectorAll('path')[1].setAttribute('fill', `rgba(233,242,58,${(k * .85).toFixed(2)})`); }); sfx(179.1, 'beep', .8); })();
[['UMUR', '❓ sapi anak atau tua?', 'tidak tua · tidak anak · PERTENGAHAN', 170.9, 172.8], ['WARNA', '❓ warnanya apa?', 'KUNING menyala · jelas tampak di mata', 175.9, 179.1], ['FUNGSI', '❓ ternak atau pekerja?', 'sapi TERNAK · bukan pembajak sawah', 193.1, 201.1]].forEach(([h, q, a, tq, ta], i) => {
  crd(`<div style="width:700px;border-left:6px solid #7fa0ff;padding:10px 20px"><div class="mono" style="font-size:22px;color:#7fa0ff">${h}</div><div style="font:800 30px Inter;margin-top:4px">${q}</div></div>`, `left:1060px;top:${250 + i * 230}px`, tq, 206.2, 'left', 'tick');
  crd(`<div style="font:900 32px Inter;color:#111;background:${Y};border-radius:10px;padding:8px 16px;width:fit-content">→ ${a}</div>`, `left:1060px;top:${355 + i * 230}px`, ta, 206.2, 'left', 'stamp'); });
crd(`<div style="font:800 30px Inter;width:700px">jarang ada sapi berwarna ini · biasanya coklat atau putih</div>`, 'left:200px;top:880px', 186.0, 193.0, 'up', 'tick');

// --- 11 /kinetic-type : mencari ke seluruh kota
scene(206.2, 211.6, { cut: 'hard' });
seg('dicari ke seluruh pelosok kota…<br>[tidak ketemu]', 206.3, 'left:140px;top:300px;width:1640px', { size: 86, iv: .03, marks: [209.6] });

// --- 12 /infographic : pemuda yang taat & berbakti
scene(211.6, 250.3, { cut: 'glitch' });
line(211.7, 219.3, 'left:140px;top:130px;width:1640px', 'di pelosok kampung ada seorang pemuda · [taat kepada Allah] & [berbakti kepada orang tuanya]', { fs: 38, m: [215.6, 217.8] });
(() => { const pie = (cx, cy, L, t0, ttl) => { let g = '', a0 = -Math.PI / 2; L.forEach(([s, c, d], i) => { const a1 = a0 + Math.PI * 2 / 3, x0 = cx + Math.cos(a0) * 200, y0 = cy + Math.sin(a0) * 200, x1 = cx + Math.cos(a1) * 200, y1 = cy + Math.sin(a1) * 200, am = (a0 + a1) / 2;
    g += `<path d="M${cx} ${cy} L${x0.toFixed(0)} ${y0.toFixed(0)} A200 200 0 0 1 ${x1.toFixed(0)} ${y1.toFixed(0)} Z" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="5" data-f="${d}"/>` + T(cx + Math.cos(am) * 290, cy + Math.sin(am) * 290 + 10, s, { f: d, fs: 32, fw: 900, c }); a0 = a1; });
    return g + T(cx, cy - 250, ttl, { fs: 36, fw: 900, c: Y }); };
  sv(219.3, 250.3, pie(520, 600, [['dirinya', '#fff', 3.2], ['ibunya', CG, 4.6], ['sedekah', Y, 7.4]], 0, '🪵 HASIL JUAL KAYU ÷ 3') + `<g data-f="11.0">${pie(1400, 600, [['bakti ibu', CG, 11.4], ['tidur', CB, 15.0], ['ibadah', Y, 17.0]], 0, '🌙 MALAM HARI ÷ 3')}</g>`, 'left:0;top:0', 1920, 1080, .6); })();
crd(`<div style="font:900 38px Inter;color:#111;background:${Y};border-radius:12px;padding:10px 22px">warisan ayahnya: seekor sapi KUNING · persis seperti petunjuk Allah</div>`, 'left:300px;top:930px', 245.0, 250.3, 'scale', 'impact');

// --- 13 /flowchart : mayat hidup kembali
scene(250.3, 290.7, { cut: 'glitch' });
[['🤝', 'sapi dibeli Bani Israil', 255.8], ['🔪', 'disembelih', 260.8], ['✋', 'bagian tubuhnya dipukulkan ke mayat', 262.5], ['🗣️', 'mayat hidup: "siapa yang membunuhku?"', 266.0], ['⚰️', 'mati lagi · lalu dikubur', 274.4], ['✓', 'fitnah hilang · pelakunya jelas', 279.7]].forEach(([e, s, t], i) =>
  crd(`<div style="width:520px;height:250px;border:${i === 5 ? 6 : 3}px solid ${i === 5 ? CG : Y};border-radius:18px;padding:22px;background:${i === 5 ? 'rgba(127,224,160,.1)' : 'transparent'}"><div style="display:flex;gap:18px;align-items:center"><div class="mono" style="font-size:28px;color:${Y}">0${i + 1}</div><div style="font-size:70px">${e}</div></div><div style="font:900 34px Inter;margin-top:12px;line-height:1.2">${s}</div></div>`, `left:${150 + (i % 3) * 560}px;top:${170 + Math.floor(i / 3) * 300}px`, t, 290.7, 'left', 'click'));
line(284.8, 290.7, 'left:140px;top:790px;width:1640px;text-align:center', 'itulah kenapa surah ini dinamakan [Al-Baqarah · seekor sapi betina]', { fs: 42, m: [287.4] });

// --- 14 /tree : makna Alif Lam Mim
scene(290.7, 336.9, { cut: 'glitch' });
arw(node('[الٓمٓ]', 'left:0;right:0;top:120px;text-align:center;font-size:120px;color:#fff'), 293.3, 2.0, { marks: [294.8] });
sv(295.7, 336.9, DEFS + LN([[960, 330], [960, 380]], { s: Y, sw: 4 }) + LN([[400, 380], [1520, 380]], { s: Y, sw: 4, del: .2 }) +
  [[400, 'AHLI TASAWUF', 3.0], [960, 'PENDAPAT LAIN', 22.0], [1520, 'PALING KUAT ✓', 30.3]].map(([x, s, d]) => LN([[x, 380], [x, 430]], { s: Y, sw: 4, del: d }) + BOX(x - 250, 430, 500, 80, { s: x === 1520 ? CG : '#fff', sw: 4, del: d }) + T(x, 482, s, { f: d + .2, fs: 32, fw: 900, c: x === 1520 ? CG : '#fff' })).join(''), 'left:0;top:0', 1920, 1080, .6);
[['Alif', 'اللَّهُ', '', 298.7], ['Lam', 'لِلَّهِ', '· karena Allah', 300.6], ['Mim', 'مِنَ اللَّهِ', '· dari Allah', 302.6]].forEach(([h, ar, d, t], i) => crd(`<div style="font:900 32px Inter;width:520px">${h} → <span class="ar" style="font-size:40px;color:${Y}">${ar}</span> ${d}</div>`, `left:150px;top:${550 + i * 70}px`, t, 336.9, 'left', 'tick'));
crd(`<div style="font:700 30px Kalam;color:#fff8d0;width:500px">ibadah kita bisa karena dari Allah · amal kita untuk Allah → Allah menerima ibadah kita</div>`, 'left:150px;top:770px', 305.3, 336.9, 'up', 'tick');
[['Alif → Allah', 317.9], ['Lam → Jibril', 319.6], ['Mim → Muhammad ﷺ', 321.2]].forEach(([s, t], i) => crd(`<div style="font:900 34px Inter">${s}</div>`, `left:740px;top:${550 + i * 70}px`, t, 336.9, 'left', 'tick'));
crd(`<div style="width:500px;border:5px solid ${CG};border-radius:16px;padding:18px;background:rgba(127,224,160,.08)"><div class="ar" style="font-size:44px;color:${CG};text-align:right">اللَّهُ أَعْلَمُ بِمُرَادِهِ بِذَٰلِكَ</div><div style="font:900 30px Inter;margin-top:8px">hanya Allah yang tahu maksudnya</div></div>`, 'left:1270px;top:550px', 330.0, 336.9, 'scale', 'impact');

// --- 15 /citation : ayat 2
scene(336.9, 351.7, { cut: 'glitch' });
paper(336.9, 'left:160px;top:180px;width:1600px;height:440px', '', 351.7);
arw(node('ذَٰلِكَ الْكِتَابُ [لَا رَيْبَ فِيهِ] هُدًى لِلْمُتَّقِينَ', 'left:220px;width:1480px;top:230px;text-align:center;font-size:90px;line-height:1.7;color:#151515'), 337.0, 4.6, { marks: [339.4] });
kin(node('', 'left:260px;top:450px;width:1400px;font:700 38px Inter;color:#222;text-align:center'), 'kitab Al-Qur\'an itu [tidak diragukan lagi] padanya', 342.2, { iv: .03, marks: [344.6], t1: 351.7 });
chip('QS. AL-BAQARAH : 2', 337.4, 'left:160px;top:650px', 351.7, Y);
crd(`<div style="display:flex;gap:24px;align-items:center"><div style="font:900 36px Inter">ulama tafsir:</div><div class="ar" style="font-size:56px;color:#111;background:${Y};border-radius:12px;padding:0 22px">أَنَّهُ مِنْ عِنْدِ اللَّهِ</div><div style="font:900 34px Inter">= langsung dari Allah</div></div>`, 'left:200px;top:800px', 347.1, 351.7, 'up', 'impact');

// --- 16 /versus : dari Allah vs tuduhan Quraisy
scene(351.7, 371.3, { cut: 'glitch' });
[['✓', 'DARI ALLAH', 'bukan dari manusia · bukan pula dari Rasulullah ﷺ', CG, 351.8], ['✕', 'TUDUHAN QURAISY', '"Al-Qur\'an itu pikiran Muhammad · pikiran manusia"', CR, 359.6]].forEach(([e, s, d, c, t], i) => crd(`<div style="width:760px;height:500px;border:5px solid ${c};border-radius:20px;text-align:center;padding:36px"><div style="font:900 120px Inter;color:${c}">${e}</div><div style="font:900 54px Inter;color:${c};margin-top:6px">${s}</div><div style="font:800 34px Inter;margin-top:16px;line-height:1.35">${d}</div></div>`, `left:${140 + i * 880}px;top:200px`, t, 371.3, 'up', 'stamp'));
crd('<div style="font:900 70px Inter">VS</div>', 'left:910px;top:400px', 359.4, 371.3, 'scale');
line(369.0, 371.3, 'left:140px;top:780px;width:1640px;text-align:center', 'maka Allah [menurunkan ayat]…', { fs: 44, m: [370.2] });

// --- 17 /citation : tantangan (QS. Al-Baqarah 23)
scene(371.3, 390.0, { cut: 'glitch' });
paper(371.3, 'left:160px;top:180px;width:1600px;height:460px', '', 390.0);
arw(node('وَإِنْ كُنْتُمْ فِي رَيْبٍ مِمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا [فَأْتُوا بِسُورَةٍ مِنْ مِثْلِهِ]', 'left:220px;width:1480px;top:220px;text-align:center;font-size:68px;line-height:1.8;color:#151515'), 371.5, 7.0, { marks: [376.6] });
kin(node('', 'left:260px;top:480px;width:1400px;font:700 36px Inter;color:#222;text-align:center;line-height:1.3'), 'jika kalian ragu terhadap Al-Qur\'an yang Kami turunkan · [buatlah satu surah saja] yang seperti itu', 379.7, { iv: .025, marks: [386.0], t1: 390.0 });
chip('QS. AL-BAQARAH : 23', 372.0, 'left:160px;top:670px', 390.0, Y);

// --- 18 /bar-chart : tantangan tak terjawab
scene(390.0, 404.6, { cut: 'glitch' });
line(390.1, 404.6, 'left:140px;top:130px;width:1640px', 'Allah [menantang] · kumpulkan orang-orang pintar Quraisy', { fs: 44, m: [391.0] });
sv(392.0, 404.6, `<path d="M300 860 H1620 M300 860 V300" stroke="#fff" stroke-width="4" data-d="1880"/>` + [['ahli syair', .78], ['ahli bahasa', .66], ['tokoh pintar', .9]].map(([s, h], i) => `<rect x="${400 + i * 300}" y="${860 - h * 500}" width="180" height="${h * 500}" rx="8" fill="rgba(255,255,255,.25)" stroke="#fff" stroke-width="3" data-f="${(1 + i * .6).toFixed(1)}"/>` + T(490 + i * 300, 900, s, { f: 1 + i * .6, fs: 28, fw: 800 })).join('') + T(820, 290, 'usaha mereka', { f: 2.6, fs: 30, fw: 900 }) +
  `<rect x="1320" y="852" width="200" height="8" fill="${CR}" data-f="9.6"/>` + T(1420, 900, 'surah yang mirip', { f: 9.6, fs: 28, fw: 900, c: CR }) + T(1420, 800, '0', { f: 10.0, fs: 140, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, .6);
crd(`<div style="font:900 40px Inter;color:#111;background:${CR};border-radius:12px;padding:10px 22px">mereka tidak bisa menirukan Al-Qur'an</div>`, 'left:1000px;top:330px', 402.4, 404.6, 'scale', 'impact');

// --- 19 /mindmap : isi Al-Qur'an
scene(404.6, 433.8, { cut: 'glitch' });
sv(404.7, 433.8, DEFS + `<circle cx="960" cy="580" r="130" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="6" data-d="820"/>` + T(960, 595, "AL-QUR'AN", { f: .2, fs: 40, fw: 900, c: Y }) +
  [['📚 berbagai macam cerita', 420, 330, .5], ['🧠 sumber segala ilmu', 1500, 330, 3.0], ['🌳🔥 surga · neraka · mahsyar', 420, 830, 6.0], ['📜 masa lalu: Adam · Nuh…', 1500, 830, 9.6], ['🔮 kejadian masa depan', 960, 980, 14.6]].map(([s, x, y, d]) => LN([[960, 580], [x, y]], { s: Y, sw: 3, del: d - .2 }) + BOX(x - 230, y - 45, 460, 90, { s: '#fff', del: d }) + T(x, y + 12, s, { f: d + .2, fs: 30, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, .5);
line(419.6, 433.8, 'left:140px;top:130px;width:1640px', 'coba · siapa manusia yang bisa [membuat seperti Al-Qur\'an]?', { fs: 44, m: [422.0] });

// --- 20 /timeline : Romawi & Persia (QS. Ar-Rum 2–4)
scene(433.8, 457.5, { cut: 'glitch' });
arw(node('غُلِبَتِ الرُّومُ ۝ فِي أَدْنَى الْأَرْضِ وَهُمْ مِنْ بَعْدِ غَلَبِهِمْ [سَيَغْلِبُونَ]', 'left:0;right:0;top:130px;text-align:center;font-size:60px;color:#fff;line-height:1.6'), 434.0, 5.0, { marks: [438.6] });
chip('QS. AR-RUM : 2–4', 434.4, 'left:160px;top:280px', 457.5, Y);
sv(439.4, 457.5, DEFS + `<path d="M220 640 H1700" stroke="#fff" stroke-width="5" data-d="1480" data-dur="1.6"/>` + `<circle cx="300" cy="640" r="26" fill="${CR}"/>` + T(300, 560, 'ROMAWI KALAH', { fs: 36, fw: 900, c: CR }) + T(300, 720, 'oleh Persia · wahyu turun', { fs: 28, fw: 800 }) +
  `<path d="M360 600 Q960 420 1560 600" fill="none" stroke="${Y}" stroke-width="5" stroke-dasharray="14 12" data-d="1300" data-del="4.0" data-dur="6"/>` + T(960, 470, '± 7 tahun', { f: 6.0, fs: 46, fw: 900, c: Y }) +
  `<circle cx="1620" cy="640" r="30" fill="${CG}" data-f="11.4"/>` + T(1620, 560, 'ROMAWI MENANG ✓', { f: 11.6, fs: 36, fw: 900, c: CG }) + T(1620, 720, 'mengalahkan Persia', { f: 11.8, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, 1.0);
line(454.5, 457.5, 'left:140px;top:850px;width:1640px;text-align:center', 'Al-Qur\'an menceritakan [kejadian yang akan terjadi]', { fs: 42, m: [455.6] });

// --- 21 /badge : min 'indillah
scene(457.5, 479.6, { cut: 'glitch' });
line(457.6, 466.4, 'left:140px;top:130px;width:1640px', 'tidak sanggup seorang manusia pun · [kecuali Allah ﷻ]', { fs: 46, m: [462.6] });
sv(460.0, 479.6, `<g data-f=".3"><circle cx="960" cy="560" r="230" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="8"/><circle cx="960" cy="560" r="200" fill="none" stroke="${Y}" stroke-width="3" stroke-dasharray="6 10"/></g>` + T(960, 530, 'مِنْ عِنْدِ اللَّهِ', { f: .6, ff: 'Amiri', fs: 70, fw: 700, c: Y }) + T(960, 610, '100% DARI ALLAH', { f: 1.0, fs: 40, fw: 900 }), 'left:0;top:0', 1920, 1080, .8);
arw(node('ذَٰلِكَ الْكِتَابُ [لَا رَيْبَ فِيهِ]', 'left:0;right:0;top:850px;text-align:center;font-size:66px;color:#fff'), 466.4, 2.4, { marks: [468.0] });

// --- 22 /venn : takwa lebih khusus dari iman
scene(479.6, 491.1, { cut: 'glitch' });
line(479.7, 491.1, 'left:140px;top:130px;width:1640px', 'هُدًى لِلْمُتَّقِينَ · petunjuk bagi [orang-orang yang takwa]', { fs: 44, m: [481.0] });
sv(482.2, 491.1, `<circle cx="960" cy="600" r="330" fill="rgba(127,214,255,.08)" stroke="${CB}" stroke-width="5" data-d="2075"/>` + T(960, 360, 'ORANG BERIMAN', { f: .4, fs: 40, fw: 900, c: CB }) +
  `<circle cx="960" cy="650" r="170" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="6" data-d="1070" data-del="1.6"/>` + T(960, 645, 'BERTAKWA', { f: 2.0, fs: 44, fw: 900, c: Y }) + T(960, 695, 'lebih khusus', { f: 2.2, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, 1.0);
crd(`<div style="font:700 34px Kalam;color:#fff8d0;width:440px">setiap orang takwa pasti beriman · tapi orang beriman belum tentu takwa</div>`, 'left:1370px;top:500px', 485.8, 491.1, 'left', 'tick');

// --- 23 /decision-matrix : mukmin vs muttaqin
scene(491.1, 511.9, { cut: 'glitch' });
(() => { const H = ['', 'BERIMAN', 'BERTAKWA'], RW = [['berbuat maksiat?', 'bisa terjadi · مُؤْمِنٌ عَاصٍ', 'tidak mungkin', 491.2, 496.3], ['Al-Qur\'an pedoman hidup?', 'banyak yang tidak', 'hanya Al-Qur\'an ✓', 503.6, 507.6]];
  H.forEach((h, j) => j && crd(`<div style="width:520px;text-align:center;font:900 44px Inter;color:${j === 1 ? CB : Y}">${h}</div>`, `left:${500 + (j - 1) * 600}px;top:180px`, 491.2, 511.9, 'fade'));
  RW.forEach(([q, a, b, t1, t2], i) => { crd(`<div style="width:330px;font:900 34px Inter;line-height:1.2">${q}</div>`, `left:140px;top:${300 + i * 260}px`, t1, 511.9, 'left', 'tick');
    crd(`<div style="width:520px;height:200px;border:4px solid ${CR};border-radius:16px;display:flex;align-items:center;justify-content:center;text-align:center;font:900 36px Inter;color:${CR};padding:10px">${a}</div>`, `left:500px;top:${280 + i * 260}px`, t1 + .6, 511.9, 'scale', 'stamp');
    crd(`<div style="width:520px;height:200px;border:4px solid ${CG};border-radius:16px;display:flex;align-items:center;justify-content:center;text-align:center;font:900 36px Inter;color:${CG};padding:10px">${b}</div>`, `left:1100px;top:${280 + i * 260}px`, t2, 511.9, 'scale', 'stamp'); }); })();
line(507.8, 511.9, 'left:140px;top:850px;width:1640px;text-align:center', 'kalau ia berbuat maksiat · maka [ia tidak takwa] namanya', { fs: 40, m: [509.6] });

// --- 24 /roadmap : iman → takwa lewat Al-Qur'an
scene(511.9, 534.6, { cut: 'glitch' });
sv(512.0, 534.6, DEFS + `<path d="M260 640 C 600 460, 1000 820, 1660 560" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1700" data-dur="2"/>` +
  `<circle cx="260" cy="640" r="60" fill="#0a1a22" stroke="${CB}" stroke-width="5"/>` + T(260, 652, 'IMAN', { fs: 34, fw: 900, c: CB }) + `<g data-f="2.6"><rect x="800" y="550" width="320" height="140" rx="16" fill="#1c1c06" stroke="${Y}" stroke-width="5"/></g>` + T(960, 607, "AL-QUR'AN", { f: 2.8, fs: 34, fw: 900, c: Y }) + T(960, 650, 'petunjuk & pedoman', { f: 3.0, fs: 24, fw: 800 }) +
  `<circle cx="1660" cy="560" r="84" fill="#0a1f14" stroke="${CG}" stroke-width="6" data-f="5.0"/>` + T(1660, 572, 'TAKWA', { f: 5.2, fs: 36, fw: 900, c: CG }), 'left:0;top:0', 1920, 1080, 1.0);
line(512.0, 525.6, 'left:140px;top:130px;width:1640px', 'ingin dari beriman menjadi bertakwa → [tidak ada jalan lain] selain Al-Qur\'an sebagai pedoman hidup', { fs: 38, m: [519.0] });
line(525.7, 534.6, 'left:140px;top:130px;width:1640px', 'Al-Qur\'an [mencukupi] semua yang kita perlukan · petunjuk apa pun ada di dalamnya', { fs: 38, m: [527.0] });

// --- 25 /citation : Al-An'am 38
scene(534.6, 553.9, { cut: 'glitch' });
paper(534.6, 'left:160px;top:180px;width:1600px;height:380px', '', 553.9);
arw(node('مَا فَرَّطْنَا فِي الْكِتَابِ [مِنْ شَيْءٍ]', 'left:220px;width:1480px;top:230px;text-align:center;font-size:96px;line-height:1.7;color:#151515'), 534.8, 2.4, { marks: [536.4] });
kin(node('', 'left:260px;top:430px;width:1400px;font:700 36px Inter;color:#222;text-align:center'), 'tidak Kami tinggalkan di dalam Al-Qur\'an satu pun · [cukup semua yang kita butuhkan]', 537.4, { iv: .025, marks: [542.6], t1: 553.9 });
chip("QS. AL-AN'AM : 38", 535.0, 'left:160px;top:590px', 553.9, Y);
crd(`<div style="font:900 44px Inter">🙋 kalau tidak tahu → <span class="mk">bertanyalah kepada yang tahu</span></div>`, 'left:200px;top:740px', 544.6, 553.9, 'up', 'beep');

// --- 26 penutup
scene(553.9, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 554.0, TOTAL, -4, 400);
label('3 PELAJARAN EP 13', 554.1, 'left:760px;top:180px', TOTAL);
[['01', 'bacakan Al-Baqarah di rumah · syaitan tak masuk'], ['02', 'taat langsung · jangan banyak mempersulit'], ['03', "Al-Qur'an pedoman hidup → derajat TAKWA"]].forEach(([n, s], i) => crd(`<div style="width:1000px;border-left:8px solid ${Y};background:rgba(233,242,58,.06);padding:12px 22px;font:900 34px Inter"><span class="mono" style="color:${Y}">${n}</span> · ${s}</div>`, `left:760px;top:${250 + i * 100}px`, 554.4 + i * 1.0, TOTAL, 'left', 'tick'));
sub2('left:760px;top:620px', 556.6, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 6.3, '/kinetic-type'], [6.3, 21.0, '/timeline'], [21.0, 35.0, '/search'], [35.0, 53.9, '/diagram'], [53.9, 73.1, '/exploded-view'], [73.1, 112.4, '/sketchnotes'], [112.4, 131.6, '/citation'], [131.6, 150.0, '/split-screen'],
 [150.0, 171.0, '/balance'], [171.0, 206.2, '/blueprint'], [206.2, 211.6, '/kinetic-type'], [211.6, 250.3, '/infographic'], [250.3, 290.7, '/flowchart'], [290.7, 336.9, '/tree'], [336.9, 351.7, '/citation'], [351.7, 371.3, '/versus'],
 [371.3, 390.0, '/citation'], [390.0, 404.6, '/bar-chart'], [404.6, 433.8, '/mindmap'], [433.8, 457.5, '/timeline'], [457.5, 479.6, '/badge'], [479.6, 491.1, '/venn'], [491.1, 511.9, '/decision-matrix'], [511.9, 534.6, '/roadmap'],
 [534.6, 553.9, '/citation'], [553.9, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
