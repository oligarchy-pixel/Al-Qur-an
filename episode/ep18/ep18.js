// ================================================================== ADEGAN EPISODE 18 · 5 Kunci Petunjuk & Iman Naik Turun
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
scene(0, 5.2, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label('FILE 18 · SURAH AL-BAQARAH AYAT 3–5', .3, 'left:140px;top:260px');
seg('5 Kunci Petunjuk &<br>[Iman Naik Turun]', .6, 'left:140px;top:310px;width:1100px', { size: 92, iv: .04, marks: [2.6] });
mePol('left:1300px;top:150px', .2, 5.2, 4, 400);
meTag(.8, 5.2, 'يُؤْمِنُونَ بِالْغَيْبِ');

// --- 02 /citation : Al-Baqarah 3 (ringkas)
scene(5.2, 20.2, { cut: 'glitch' });
paper(5.3, 'left:160px;top:170px;width:1600px;height:320px', '', 20.2);
arw(node('الَّذِينَ [يُؤْمِنُونَ بِالْغَيْبِ] وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ', 'left:220px;width:1480px;top:230px;text-align:center;font-size:64px;line-height:1.8;color:#151515'), 5.4, 5.0, { marks: [7.5] });
chip('QS. AL-BAQARAH : 3', 5.6, 'left:160px;top:520px', 20.2, Y);
[['👁️ beriman kepada yang ghaib', 7.6, '#fff'], ['🕌 menegakkan salat', 11.0, Y], ['🤲 menafkahkan rezeki di jalan Allah', 15.2, CG]].forEach(([s, t, c], i) => crd(`<div style="font:900 36px Inter;color:${c}">${s}</div>`, `left:160px;top:${630 + i * 80}px`, t, 20.2, 'up', 'tick'));

// --- 03 /split-screen : aqim vs shalli
scene(20.2, 47.9, { cut: 'glitch' });
crd(`<div style="width:780px;height:640px;border:5px solid ${CG};border-radius:20px;padding:30px;background:rgba(127,224,160,.05)"><div class="ar" style="font-size:64px;color:${CG};text-align:center">وَيُقِيمُونَ الصَّلَاةَ</div><div style="font:900 40px Inter;color:${CG};text-align:center;margin-top:6px">DIRIKANLAH · MENEGAKKAN</div><div style="font:800 32px Inter;margin-top:22px;line-height:1.6">✓ sempurna rukunnya<br>✓ batasannya<br>✓ khusyuk & tuma'ninah<br>✓ adabnya</div></div>`, 'left:140px;top:200px', 20.3, 47.9, 'up', 'stamp');
crd(`<div style="width:780px;height:640px;border:5px solid ${CR};border-radius:20px;padding:30px;background:rgba(255,138,92,.05)"><div class="ar" style="font-size:64px;color:${CR};text-align:center">صَلِّ</div><div style="font:900 40px Inter;color:${CR};text-align:center;margin-top:6px">SEKADAR "SEMBAHYANGLAH"</div><div style="font:800 32px Inter;margin-top:22px;line-height:1.6">· di luar waktu pun disebut sembahyang<br>· tak khusyuk, tak tuma'ninah<br>&nbsp;&nbsp;tetap disebut sembahyang</div></div>`, 'left:1000px;top:200px', 33.2, 47.9, 'up', 'stamp');
crd(pill('"dirikanlah salat" = mesti benar-benar', Y), 'left:560px;top:880px', 44.6, 47.9, 'scale', 'impact');

// --- 04 /citation : Al-Baqarah 3-5
scene(47.9, 64.0, { cut: 'glitch' });
paper(48.0, 'left:160px;top:150px;width:1600px;height:620px', '', 64.0);
arw(node('الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ۝ وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ ۝ أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ [وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ]', 'left:220px;width:1480px;top:180px;text-align:center;font-size:50px;line-height:1.8;color:#151515'), 48.1, 15.4, { marks: [62.6] });
chip('QS. AL-BAQARAH : 3–5', 48.3, 'left:160px;top:800px', 64.0, Y);

// --- 05 /layers : kitab-kitab & akhirat
scene(64.0, 85.1, { cut: 'glitch' });
line(64.1, 85.1, 'left:140px;top:130px;width:1640px', 'beriman kepada kitab yang diturunkan [kepadamu] & [sebelummu]', { fs: 42, m: [66.0, 70.0] });
[['📗', 'AL-QUR\'AN', Y, 66.5], ['📜', 'TAURAT', '#fff', 71.0], ['📜', 'ZABUR', '#fff', 72.4], ['📜', 'INJIL', '#fff', 73.4]].forEach(([e, s, c, t], i) => crd(`<div style="width:380px;height:220px;border:4px solid ${c};border-radius:18px;text-align:center;padding-top:22px"><div style="font-size:76px">${e}</div><div style="font:900 36px Inter;color:${c}">${s}</div></div>`, `left:${140 + i * 420}px;top:250px`, t, 85.1, 'up', 'tick'));
crd(`<div style="font:900 40px Inter">🌅 + yakin adanya <span style="color:${Y}">hari akhirat</span></div>`, 'left:140px;top:540px', 74.3, 85.1, 'left', 'beep');
crd(`<div style="text-align:center;border:4px solid ${CG};border-radius:18px;padding:16px 30px;background:#000"><div class="ar" style="font-size:60px;color:${CG}">أُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div><div style="font:900 32px Inter">mengikuti petunjuk Allah · merekalah orang yang beruntung</div></div>`, 'left:340px;top:680px', 78.0, 85.1, 'scale', 'stamp');

// --- 06 /mindmap : 5 kunci petunjuk & keberuntungan
scene(85.1, 140.3, { cut: 'glitch' });
line(85.2, 107.9, 'left:140px;top:130px;width:1640px', 'kesimpulan ulama tafsir: kunci petunjuk & keberuntungan dunia akhirat ada [lima perkara]', { fs: 38, m: [93.0] });
sv(85.3, 140.3, [['01 · iman kepada yang ghaib', 400, 300, 22.6], ['02 · menegakkan salat', 1520, 300, 29.4], ['03 · infak harta halal', 300, 650, 30.9], ['04 · iman kepada kitab-kitab', 1620, 650, 38.9], ['05 · yakin hari akhirat', 960, 900, 46.5]].map(([s, x, y, d]) => `<path d="M960 560 L${x} ${y}" stroke="#fff" stroke-width="3" stroke-dasharray="8 8" data-f="${d}"/>` + `<rect x="${x - 230}" y="${y - 45}" width="460" height="90" rx="45" fill="#000" stroke="#fff" stroke-width="4" data-f="${d}"/>` + T(x, y + 12, s, { f: d + .1, fs: 30, fw: 900 })).join('') + `<circle cx="960" cy="560" r="180" fill="#000" stroke="${Y}" stroke-width="6"/>` + T(960, 490, '🔑', { f: .2, fs: 60 }) + T(960, 580, 'مِفْتَاحُ الْهُدَى', { f: .4, ff: 'Amiri', fs: 40, c: Y }) + T(960, 650, 'وَالْفَلَاحِ خَمْسَةٌ', { f: .6, ff: 'Amiri', fs: 36, c: Y }), 'left:0;top:0', 1920, 1080, .8);

// --- 07 /exploded-view : iman & ghaib
scene(140.3, 168.6, { cut: 'glitch' });
line(140.4, 146.8, 'left:140px;top:130px;width:1640px', 'apa itu [iman]? apa itu [ghaib]?', { fs: 46, m: [141.5, 158.0] });
crd(vcard(780, Y, `<div class="mono" style="font-size:26px;color:${Y}">IMAN</div><div class="ar" style="font-size:66px;color:${Y};text-align:center;margin-top:6px">التَّصْدِيقُ بِالْقَلْبِ</div><div style="font:900 36px Inter;text-align:center">membenarkannya hati · perkara hati ❤️</div>`), 'left:140px;top:260px', 146.9, 168.6, 'up', 'stamp');
crd(vcard(780, CB, `<div class="mono" style="font-size:26px;color:${CB}">GHAIB</div><div class="ar" style="font-size:58px;color:${CB};text-align:center;margin-top:6px">مَا غَابَ عَنِ الْحَوَاسِّ الْخَمْسِ</div><div style="font:900 36px Inter;text-align:center">tak terjangkau panca indera 👁️👂👃👅✋</div>`), 'left:1000px;top:260px', 158.3, 168.6, 'up', 'stamp');

// --- 08 /checklist : yang termasuk ghaib
scene(168.6, 201.8, { cut: 'glitch' });
label('MAKA TERMASUK MEMBENARKAN DENGAN HATI…', 168.7, 'left:160px;top:130px', 201.8);
[['بِاللَّهِ', 'kepada Allah', 174.9], ['وَمَلَائِكَتِهِ', 'malaikat-Nya', 177.3], ['وَكُتُبِهِ', 'kitab-kitab-Nya', 179.7], ['وَرُسُلِهِ', 'rasul-rasul-Nya', 181.6], ['وَخَيْرِهِ وَشَرِّهِ مِنَ اللَّهِ', 'baik & buruk dari Allah', 183.1]].forEach(([ar, s, t], i) => crd(`<div style="display:flex;align-items:center;gap:26px;width:1500px;border-left:8px solid ${Y};background:rgba(233,242,58,.05);padding:10px 22px"><div style="font:900 30px 'DejaVu Sans Mono';color:${Y}">0${i + 1}</div><div class="ar" style="font-size:46px;color:${Y};width:520px;text-align:right">${ar}</div><div style="font:900 38px Inter">${s}</div></div>`, `left:200px;top:${210 + i * 112}px`, t, 201.8, 'left', 'tick'));
line(188.7, 201.8, 'left:200px;top:800px;width:1500px', 'percaya semua itu → termasuk [الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ]', { fs: 40, m: [192.0] });

// --- 09 /citation : Imam al-Bukhari
scene(201.8, 226.5, { cut: 'glitch' });
crd(vcard(1600, Y, `<div class="mono" style="font-size:26px;color:${Y}">📚 IMAM AL-BUKHARI · AL-JAMI' ASH-SHAHIH · KITAB AL-IMAN</div><div class="ar" style="font-size:96px;text-align:center;margin-top:10px">الْإِيمَانُ يَزِيدُ وَيَنْقُصُ</div><div style="font:900 40px Inter;text-align:center">iman itu bertambah dan berkurang</div>`, 'rgba(233,242,58,.05)'), 'left:160px;top:200px', 201.9, 226.5, 'scale', 'stamp');
[['⬆ bertambah', CG, 211.0], ['⬇ berkurang', CR, 212.6], ['💪 menguat · lemah', '#fff', 214.0], ['🔪 tajam · tumpul', '#fff', 216.5]].forEach(([s, c, t], i) => crd(`<div style="font:900 38px Inter;color:${c}">${s}</div>`, `left:${160 + i * 420}px;top:680px`, t, 226.5, 'up', 'tick'));

// --- 10 /bar-chart : sinyal iman
scene(226.5, 261.5, { cut: 'glitch' });
line(226.6, 261.5, 'left:140px;top:130px;width:1640px', 'iman kita naik turun · [macam sinyal HP] 📶', { fs: 46, m: [229.5] });
arw(node('[يَزِيدُ بِالطَّاعَةِ] وَيَنْقُصُ بِالْمَعْصِيَةِ', 'left:140px;width:1640px;top:220px;text-align:center;font-size:66px;color:#fff'), 232.0, 2.8, { marks: [233.0] });
(() => { const n = node(`<svg width="700" height="420" viewBox="0 0 700 420">${[0, 1, 2, 3, 4].map(i => `<rect class="b" data-i="${i}" x="${40 + i * 130}" y="${380 - (i + 1) * 70}" width="90" height="${(i + 1) * 70}" rx="8"/>`).join('')}</svg>`, 'left:160px;top:420px');
  item(234.8, 261.5, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const lv = t < 244.4 ? 3 : t < 255.7 ? 3 + 2 * clamp((t - 244.4) / 5) : 5 - 4 * clamp((t - 255.7) / 3); n.querySelectorAll('.b').forEach(b => { const on = +b.dataset.i < lv; b.setAttribute('fill', on ? (lv > 3.5 ? CG : lv < 2 ? CR : Y) : 'rgba(233,242,58,.12)'); }); }); })();
[['📿 berzikir', CG, 244.5], ['🌹 berselawat kepada Nabi ﷺ', CG, 247.0], ['📖 majelis ilmu', CG, 250.0]].forEach(([s, c, t], i) => crd(`<div style="font:900 38px Inter;color:${c}">⬆ ${s}</div>`, `left:1000px;top:${460 + i * 90}px`, t, 255.6, 'left', 'tick'));
crd(`<div style="font:900 42px Inter;color:${CR}">⬇ maksiat → iman turun</div>`, 'left:1000px;top:520px', 255.8, 261.5, 'left', 'beep');

// --- 11 /callout : sinyal hilang
scene(261.5, 289.1, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${CR};border-radius:20px;padding:30px 40px;background:rgba(255,138,92,.08)"><div class="mono" style="font-size:24px;color:${CR}">⚠ ADA MAKSIAT YANG…</div><div style="font:900 56px Inter;margin-top:12px">membuat iman <span style="color:${CR}">hilang sama sekali</span> saat itu 📵</div></div>`, 'left:180px;top:200px', 261.6, 289.1, 'scale', 'impact');
crd(vcard(760, '#fff', `<div style="font:900 34px Inter;line-height:1.35">📱 HP secanggih apa pun · tanpa sinyal <span style="color:${CR}">tak bisa dipakai</span></div>`), 'left:180px;top:520px', 270.2, 289.1, 'up', 'stamp');
crd(vcard(760, '#fff', `<div style="font:900 34px Inter;line-height:1.35">🙉 tanpa iman · diberi nasihat <span style="color:${CR}">tidak akan masuk</span></div>`), 'left:980px;top:520px', 277.7, 289.1, 'up', 'stamp');

// --- 12 /search : hadis zina & khamr
scene(289.1, 315.3, { cut: 'glitch', light: 1 });
searchFind(289.1, 315.3, {
  q: 'من زنى أو شرب الخمر نزع الله منه الإيمان', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 },
  shelf: [['Al-Mustadrak · al-Hakim', 'المستدرك'], ['At-Targhib wa at-Tarhib', 'الترغيب والترهيب'], ["Jam'ul Jawami'", 'جمع الجوامع'], ["Al-Jami' ash-Shaghir", 'الجامع الصغير'], ["Dha'if al-Jami' · al-Albani", 'ضعيف الجامع']],
  results: [
    { title: "Jam'ul Jawami' · as-Suyuthi · no. 21652", tag: 'HADIS', ar: 'مَنْ زَنَى أَوْ شَرِبَ الْخَمْرَ', sub: '(ك) al-Hakim dari Abu Hurairah' },
    { title: 'At-Targhib wa at-Tarhib · al-Mundziri · j. 3 hlm. 252', tag: 'HADIS', ar: 'نَزَعَ اللَّهُ مِنْهُ الْإِيمَانَ', sub: 'Allah mencabut iman darinya' },
    { title: "Al-Jami' ash-Shaghir · no. 12385", tag: 'HADIS', ar: 'كَمَا يَخْلَعُ الْإِنْسَانُ الْقَمِيصَ مِنْ رَأْسِهِ', sub: 'seperti melepas baju dari kepala' },
    { title: "Dha'if al-Jami' · al-Albani · no. 5610", tag: "DHA'IF", ar: 'مَنْ زَنَى أَوْ شَرِبَ الْخَمْرَ', sub: 'penilaian al-Albani' }],
  det: { title: 'Hadis Abu Hurairah', ar: 'أَبُو هُرَيْرَةَ', rows: [['DIRIWAYATKAN', 'al-Hakim · al-Mustadrak (Kitab al-Iman)'], ['PERAWI SAHABAT', "Abu Hurairah radhiyallahu 'anhu"], ['PERBUATAN', 'berzina · minum khamr'], ['AKIBAT', 'Allah cabut iman darinya'], ['PERUMPAMAAN', 'seperti melepas baju dari kepala'], ['AL-HAKIM', 'shahih atas syarat Muslim'], ['AL-ALBANI', "dha'if (Dha'if al-Jami' 5610)"]], quote: 'نَزَعَ اللَّهُ مِنْهُ الْإِيمَانَ كَمَا يَخْلَعُ الْإِنْسَانُ الْقَمِيصَ مِنْ رَأْسِهِ' }
});
camTour(289.1, 315.3, { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 });

// --- 13 /citation : hadis Bukhari-Muslim
scene(315.3, 332.3, { cut: 'glitch' });
paper(315.4, 'left:160px;top:160px;width:1600px;height:520px', '', 332.3);
arw(node('لَا يَزْنِي الزَّانِي حِينَ يَزْنِي [وَهُوَ مُؤْمِنٌ] وَلَا يَشْرَبُ الْخَمْرَ حِينَ يَشْرَبُهَا وَهُوَ مُؤْمِنٌ وَلَا يَسْرِقُ السَّارِقُ حِينَ يَسْرِقُ وَهُوَ مُؤْمِنٌ', 'left:220px;width:1480px;top:200px;text-align:center;font-size:58px;line-height:1.8;color:#151515'), 315.5, 9.6, { marks: [318.0] });
chip('HR. AL-BUKHARI & MUSLIM', 315.7, 'left:160px;top:710px', 332.3, Y);

// --- 14 /infographic : 3 penghilang iman
scene(332.3, 368.5, { cut: 'glitch' });
label('SAAT SEDANG MELAKUKANNYA · TIDAK ADA IMAN', 332.4, 'left:160px;top:130px', 368.5);
xcard('💔', 'berzina', 332.4, 368.5, 'left:160px;top:220px');
xcard('🏃', 'mencuri', 335.9, 368.5, 'left:710px;top:220px');
xcard('🍷', 'minum minuman keras', 340.3, 368.5, 'left:1260px;top:220px');
line(343.7, 358.6, 'left:160px;top:560px;width:1600px', 'pada saat melakukannya · imannya [telah dicabut]', { fs: 44, m: [350.0] });
crd(pill('penyakit masyarakat · kelas bawah, menengah, atas', CR), 'left:160px;top:680px', 358.7, 368.5, 'scale', 'impact');

// --- 15 /badge : peringkat dosa besar
scene(368.5, 388.7, { cut: 'glitch' });
line(368.6, 381.6, 'left:140px;top:130px;width:1640px', 'kenapa [zina] mencabut iman? · ancamannya sangat keras', { fs: 44, m: [377.5] });
sv(381.7, 388.7, `<g data-f=".1"><circle cx="640" cy="560" r="190" fill="rgba(255,138,92,.12)" stroke="${CR}" stroke-width="8"/></g>` + T(640, 540, '#1', { f: .2, fs: 90, fw: 900, c: CR }) + T(640, 610, 'SYIRIK', { f: .3, fs: 40, fw: 900 }) +
  `<g data-f="1.4"><circle cx="1280" cy="560" r="190" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="8"/></g>` + T(1280, 540, '#2', { f: 1.5, fs: 90, fw: 900, c: Y }) + T(1280, 610, 'ZINA', { f: 1.6, fs: 40, fw: 900 }), 'left:0;top:0', 1920, 1080, .6);
line(382.0, 388.7, 'left:140px;top:820px;width:1640px;text-align:center', 'menurut [sebagian ulama] · peringkat dosa besar', { fs: 38, m: [384.0] });

// --- 16 /citation : Al-Isra 32
scene(388.7, 398.2, { cut: 'glitch' });
paper(388.8, 'left:160px;top:180px;width:1600px;height:320px', '', 398.2);
arw(node('[وَلَا تَقْرَبُوا الزِّنَىٰ] إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا', 'left:220px;width:1480px;top:240px;text-align:center;font-size:76px;line-height:1.7;color:#151515'), 388.9, 3.4, { marks: [390.0] });
chip("QS. AL-ISRA' : 32", 389.1, 'left:160px;top:530px', 398.2, Y);
line(392.5, 398.2, 'left:160px;top:630px;width:1600px', 'janganlah [mendekati zina] · perbuatan keji & jalan yang buruk', { fs: 40, m: [393.0] });

// --- 17 /callout : daging dari yang haram
scene(398.2, 422.7, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${Y};border-radius:20px;padding:26px 40px;background:rgba(233,242,58,.06);text-align:center"><div class="mono" style="font-size:24px;color:${Y}">PESAN RASULULLAH ﷺ</div><div class="ar" style="font-size:72px;margin-top:6px">لَا يَدْخُلُ الْجَنَّةَ لَحْمٌ نَبَتَ مِنْ سُحْتٍ</div><div style="font:900 40px Inter">tidak masuk surga daging yang tumbuh dari yang haram</div></div>`, 'left:180px;top:180px', 398.3, 422.7, 'scale', 'stamp');
chip('ATH-THABARANI · DARI IBNU ‘ABBAS', 399.0, 'left:180px;top:520px', 422.7, Y);
crd(`<div style="font:900 36px Inter">🍗 nafkah dari cara haram → <span style="color:${CR}">neraka lebih patut baginya</span></div>`, 'left:180px;top:620px', 408.4, 422.7, 'left', 'beep');
crd(pill('apalagi perbuatan zina · lebih parah', CR), 'left:180px;top:740px', 415.7, 422.7, 'scale', 'impact');

// --- 18 /citation : Al-Baqarah 219
scene(422.7, 437.3, { cut: 'glitch' });
paper(422.8, 'left:160px;top:160px;width:1600px;height:560px', '', 437.3);
arw(node('يَسْأَلُونَكَ عَنِ الْخَمْرِ وَالْمَيْسِرِ قُلْ فِيهِمَا إِثْمٌ كَبِيرٌ وَمَنَافِعُ لِلنَّاسِ [وَإِثْمُهُمَا أَكْبَرُ مِنْ نَفْعِهِمَا] وَيَسْأَلُونَكَ مَاذَا يُنْفِقُونَ قُلِ الْعَفْوَ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمُ الْآيَاتِ لَعَلَّكُمْ تَتَفَكَّرُونَ', 'left:220px;width:1480px;top:190px;text-align:center;font-size:50px;line-height:1.8;color:#151515'), 422.9, 14.0, { marks: [428.5] });
chip('QS. AL-BAQARAH : 219', 423.1, 'left:160px;top:750px', 437.3, Y);

// --- 19 /flowchart : mencuri · korupsi
scene(437.3, 464.6, { cut: 'glitch' });
line(437.4, 443.0, 'left:140px;top:130px;width:1640px', 'penghilang iman berikutnya: [mencuri]', { fs: 46, m: [439.0] });
sv(443.0, 464.6, DEFS + BOX(160, 330, 460, 180, { s: '#fff', sw: 5 }) + T(390, 410, '🏃 MENCURI', { f: .1, fs: 40, fw: 900 }) + T(390, 465, 'contoh: korupsi', { f: .4, fs: 30, fw: 800, c: Y }) +
  '<g data-f="2.0">' + LN([[620, 420], [740, 420]], { s: Y, sw: 5, arrow: 1 }) + '</g>' + BOX(740, 330, 460, 180, { s: CR, sw: 5, del: 2.2 }) + T(970, 410, '😢 RATUSAN JUTA', { f: 2.4, fs: 36, fw: 900, c: CR }) + T(970, 465, 'orang sengsara', { f: 2.6, fs: 30, fw: 800 }) +
  '<g data-f="9.8">' + LN([[1200, 420], [1320, 420]], { s: Y, sw: 5, arrow: 1 }) + '</g>' + BOX(1320, 330, 460, 180, { s: CR, sw: 5, del: 10.0 }) + T(1550, 410, '📵 IMAN DICABUT', { f: 10.2, fs: 36, fw: 900, c: CR }) + T(1550, 465, 'saat melakukannya', { f: 10.4, fs: 30, fw: 800 }), 'left:0;top:0', 1920, 1080, .6);
line(446.2, 453.3, 'left:160px;top:600px;width:1600px', 'apakah ada iman pada saat ia [hendak melakukannya]?', { fs: 40, m: [449.0] });

// --- 20 /iceberg : topeng ibadah
scene(464.6, 495.2, { cut: 'glitch' });
line(464.7, 478.5, 'left:140px;top:120px;width:1640px', 'bertahun-tahun tak bertaubat · mengira [Allah tidak mengetahui]', { fs: 40, m: [472.0] });
sv(478.5, 495.2, `<defs><linearGradient id="sea18" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1c4f"/><stop offset="1" stop-color="#050b2a"/></linearGradient></defs><rect x="0" y="560" width="1920" height="520" fill="url(#sea18)" data-f=".1"/><path d="M0 560 H1920" stroke="${CB}" stroke-width="4" data-f=".1"/>` +
  `<path d="M760 560 L860 420 L960 360 L1060 430 L1160 560 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="4" data-f=".3"/>` + T(960, 320, '🕌 salat · 🤲 sedekah · 🕋 haji', { f: .5, fs: 34, fw: 900, c: Y }) +
  `<path d="M760 560 L600 760 L700 960 L1220 960 L1340 760 L1160 560 Z" fill="rgba(255,138,92,.12)" stroke="${CR}" stroke-width="4" data-f="5.7"/>` + T(970, 720, 'korupsi bertahun-tahun', { f: 5.9, fs: 34, fw: 900, c: CR }) + T(970, 790, 'ibadah hanya untuk makhluk', { f: 6.3, fs: 32, fw: 800 }) + T(970, 860, '= MUNAFIK', { f: 6.8, fs: 44, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, .8);
crd(vcard(520, Y, `<div style="font:900 30px Inter;line-height:1.35">bisa menipu manusia · <span style="color:${CR}">tak bisa menipu Allah</span></div>`, '#000'), 'left:1340px;top:200px', 490.7, 495.2, 'down', 'impact');

// --- 21 /spectrum : naik turun habis
scene(495.2, 514.6, { cut: 'glitch' });
line(495.3, 514.6, 'left:140px;top:130px;width:1640px', 'jadi iman bisa [bertambah] · bisa [berkurang] · bisa [habis]', { fs: 44, m: [497.0, 499.5, 503.0] });
(() => { let g = `<defs><linearGradient id="imn18" x1="0" x2="1"><stop offset="0" stop-color="${CR}"/><stop offset=".5" stop-color="${Y}"/><stop offset="1" stop-color="${CG}"/></linearGradient></defs><rect x="200" y="460" width="1520" height="36" rx="18" fill="url(#imn18)" data-f=".1"/>`;
  g += T(380, 580, '📵 HABIS', { f: 7.0, fs: 40, fw: 900, c: CR }) + T(380, 640, 'suka maksiat · anggap enteng dosa', { f: 7.4, fs: 26, fw: 800 }) + T(380, 685, 'tak malu · tak takut · tak bertaubat', { f: 10.0, fs: 26, fw: 800 }) + T(1540, 580, '📶 BERTAMBAH', { f: .4, fs: 40, fw: 900, c: CG }) + T(1540, 640, 'seiring taat kepada Allah', { f: 1.0, fs: 28, fw: 800 });
  sv(495.4, 514.6, g, 'left:0;top:0', 1920, 1080, .5); })();

// --- 22 /teaser : penutup
scene(514.6, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 514.7, TOTAL, -4, 400);
crd(`<div style="font:900 38px Inter;line-height:1.35">demikianlah perihal <span class="mk">iman kepada yang ghaib</span></div>`, 'left:760px;top:180px;width:1000px', 514.7, TOTAL, 'left', 'tick');
crd(`<div class="mono" style="font-size:26px;color:${Y}">▶ BERIKUTNYA: KUNCI KE-2</div><div class="ar" style="font-size:66px;color:${Y};margin-top:6px">إِقَامُ الصَّلَاةِ</div>`, 'left:760px;top:330px', 516.5, TOTAL, 'up', 'beep');
sub2('left:760px;top:620px', 517.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 5.2, '/kinetic-type'], [5.2, 20.2, '/citation'], [20.2, 47.9, '/split-screen'], [47.9, 64.0, '/citation'], [64.0, 85.1, '/layers'], [85.1, 140.3, '/mindmap'], [140.3, 168.6, '/exploded-view'], [168.6, 201.8, '/checklist'],
 [201.8, 226.5, '/citation'], [226.5, 261.5, '/bar-chart'], [261.5, 289.1, '/callout'], [289.1, 315.3, '/search'], [315.3, 332.3, '/citation'], [332.3, 368.5, '/infographic'], [368.5, 388.7, '/badge'], [388.7, 398.2, '/citation'],
 [398.2, 422.7, '/callout'], [422.7, 437.3, '/citation'], [437.3, 464.6, '/flowchart'], [464.6, 495.2, '/iceberg'], [495.2, 514.6, '/spectrum'], [514.6, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
