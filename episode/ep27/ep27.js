// =====================================================================
// EPISODE 27 · LIMA AYAT AN-NISA | AUDIO ASLI DIPERTAHANKAN UTUH
// Semua subjek visual adalah grafis abstrak; tidak ada figur Allah, Nabi,
// Sahabat, individu, atau kelompok yang digambar / dijadikan sasaran.
const W = '#f2f0e7', N = '#11172b', YL = Y, CREAM = '#f7f2e7';
const line = (t0, t1, css, text, o = {}) => kin(
  node('', css + `;font:${o.w || 750} ${o.fs || 42}px Inter;color:${o.c || W};line-height:${o.lh || 1.28};text-align:${o.align || 'left'}`),
  text, t0, { iv: o.iv || .028, marks: o.m || [], t1 }
);
const card = (html, css, t0, t1, kind = 'up', sound = 'click') => {
  const n = node(html, css, 'dimmable'); show(n, t0, kind, t1); sfx(t0, sound, .55); return n;
};
const tile = (title, body, color = YL, w = 390) => `<div style="width:${w}px;min-height:190px;border:3px solid ${color};border-radius:12px;padding:22px 25px;background:rgba(8,13,29,.94)"><div style="font:700 18px 'DejaVu Sans Mono';letter-spacing:.1em;color:${color}">${title}</div><div style="font:800 34px Inter;line-height:1.18;margin-top:16px">${body}</div></div>`;
const arabic = (text, css, t0, dur, t1, marks = []) => arw(node(text, css + ';font-family:Amiri,serif;direction:rtl;unicode-bidi:isolate'), t0, dur, { t1, marks });
const fullW = 'left:0;top:0';

// 01 · pembuka · referensi lima ayat (frasa yang ditandai kurang pasti tidak ditampilkan)
scene(0, 24.5, { cut: 'none' });
label('FILE 27 · MENGENAL AL-QUR\'AN', .3, 'left:160px;top:278px', 24.5);
seg('LIMA AYAT', .55, 'left:160px;top:330px;width:1000px', { size: 100, iv: .04 });
seg('AN-NISA', 1.45, 'left:160px;top:455px;width:1000px', { size: 86, iv: .045, color: YL });
mePol('left:1390px;top:330px', .45, 24.45, -3, 350);
line(5.8, 24.5, 'left:160px;top:610px;width:1120px', 'Satu atsar menyebut lima ayat yang istimewa.', { fs: 40, m: [9.2] });
[31, 40, 48, 64, 110].forEach((v, i) => card(
  `<div style="width:176px;height:88px;border:3px solid ${i === 0 ? YL : W};border-radius:10px;display:flex;align-items:center;justify-content:center;font:800 30px Inter;color:${i === 0 ? YL : W}">4 : ${v}</div>`,
  `left:${160 + i * 200}px;top:760px`, 17.4 + i * .42, 24.45, 'up', 'tick'
));
chip('AN-NISA · 31 / 40 / 48 / 64 / 110', 19.4, 'left:160px;top:900px', 24.45, YL);

// 02 · ayat 31 · syarat dan janji dalam ayat
scene(24.5, 45.3, { cut: 'clean' });
label('AYAT PERTAMA · QS. AN-NISA : 31', 24.62, 'left:160px;top:278px', 45.3);
paper(24.75, 'left:160px;top:340px;width:1600px;height:250px', '', 45.3);
arabic('إِنْ تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ وَنُدْخِلْكُمْ مُدْخَلًا كَرِيمًا',
  'left:210px;top:390px;width:1500px;text-align:center;font-size:54px;line-height:1.75;color:#151515', 24.9, 12.0, 45.3, [30.8]);
line(29.7, 45.3, 'left:200px;top:650px;width:1520px;text-align:center', 'Bersungguh-sungguh menjauhi [dosa besar]…', { fs: 44, m: [33.0] });
steps(['JAUHI DOSA BESAR', 'KESALAHAN DIHAPUS', 'TEMPAT MULIA'], 35.0, 2.4, 'left:240px;top:800px', 45.3);

// 03 · ayat 40 · Allah tidak menzalimi sekecil zarrah
scene(45.3, 58.8, { cut: 'clean' });
label('AYAT KEDUA · QS. AN-NISA : 40', 45.42, 'left:160px;top:278px', 58.8);
paper(45.6, 'left:160px;top:345px;width:1600px;height:235px', '', 58.8);
arabic('إِنَّ اللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ وَإِنْ تَكُ حَسَنَةً يُضَاعِفْهَا وَيُؤْتِ مِنْ لَدُنْهُ أَجْرًا عَظِيمًا',
  'left:210px;top:390px;width:1500px;text-align:center;font-size:50px;line-height:1.8;color:#151515', 45.7, 11.6, 58.8, [51.5]);
chip('QS. AN-NISA : 40', 48.3, 'left:160px;top:650px', 58.8, YL);
line(52.0, 58.8, 'left:470px;top:675px;width:1260px;text-align:center', 'Tidak ada kebaikan yang dilupakan.', { fs: 39, m: [54.0] });

// 04 · zarrah dan amal baik · besar tanpa menghitung pahala
scene(58.8, 77.9, { cut: 'clean' });
label('KEBAIKAN KECIL · GANJARAN BESAR', 58.92, 'left:160px;top:278px', 77.9);
sv(59.05, 77.9, DEFS +
  `<circle cx="545" cy="585" r="14" fill="${YL}" data-f=".2"/>` +
  `<circle cx="545" cy="585" r="110" fill="none" stroke="${YL}" stroke-width="3" data-d="691" data-dur="1.2"/>` +
  `<circle cx="545" cy="585" r="205" fill="none" stroke="#fff" stroke-width="3" opacity=".8" data-d="1288" data-del=".7"/>` +
  `<circle cx="545" cy="585" r="300" fill="none" stroke="${YL}" stroke-width="3" opacity=".7" data-d="1885" data-del="1.2"/>` +
  T(545, 770, 'ذَرَّةٌ · ZARRAH', { f: .5, fs: 28, c: YL }) +
  T(1190, 475, 'كُنْ حَسَنَةً', { f: 1.1, fs: 48, c: W }) +
  T(1190, 575, 'يُضَاعِفْهَا', { f: 2.2, fs: 68, c: YL }) +
  T(1190, 685, 'أَجْرًا عَظِيمًا', { f: 3.6, fs: 43, c: W }), fullW, 1920, 1080, 1.0);
line(67.2, 77.9, 'left:360px;top:845px;width:1200px;text-align:center', 'Besarnya pahala tak dapat kita [perkirakan].', { fs: 41, m: [72.0] });

// 05 · ayat 48 dilafalkan selama jeda transkrip; visual tetap terisi
scene(77.9, 86.8, { cut: 'clean' });
label('AYAT KETIGA · QS. AN-NISA : 48', 78.02, 'left:160px;top:278px', 86.8);
paper(78.15, 'left:160px;top:345px;width:1600px;height:360px', '', 86.8);
arabic('إِنَّ اللَّهَ لَا يَغْفِرُ أَنْ يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَلِكَ لِمَنْ يَشَاءُ وَمَنْ يُشْرِكْ بِاللَّهِ فَقَدِ افْتَرَى إِثْمًا عَظِيمًا',
  'left:215px;top:400px;width:1490px;text-align:center;font-size:52px;line-height:1.8;color:#151515', 78.35, 7.9, 86.8, [82.2]);
chip('AYAT DIBACA · AN-NISA : 48', 79.1, 'left:160px;top:770px', 86.8, YL);

// 06 · makna ayat 48 · ampunan dengan kehendak Allah
scene(86.8, 116.4, { cut: 'clean' });
label('MAKNA AYAT · AN-NISA : 48', 86.92, 'left:160px;top:278px', 116.4);
line(87.0, 116.4, 'left:200px;top:350px;width:1520px;text-align:center', '“Allah tidak mengampuni syirik; selain itu bagi siapa yang Allah kehendaki.”', { fs: 42, m: [91.0, 99.0] });
card(tile('AYAT MENYEBUT', 'syirik kepada Allah', YL, 590), 'left:260px;top:535px', 96.2, 116.4, 'left', 'paper');
card(tile('AYAT MENYEBUT', 'ampunan bagi selainnya atas kehendak Allah', W, 590), 'left:1030px;top:535px', 101.5, 116.4, 'up', 'tick');
line(105.0, 116.4, 'left:300px;top:830px;width:1320px;text-align:center', 'Ayat tidak memberi izin untuk merasa lebih baik dari orang lain.', { fs: 34, m: [110.0] });

// 07 · contoh-contoh dosa dalam penjelasan penyampai; tanpa sasaran manusia
scene(116.4, 140.5, { cut: 'clean' });
label('CONTOH YANG DISEBUT DALAM CERAMAH', 116.52, 'left:160px;top:278px', 140.5);
[['ZINA', 116.8], ['MENCURI', 120.3], ['MINUM ARAK', 123.8], ['MEMBUNUH', 127.3]].forEach(([s, t], i) => card(
  `<div style="width:340px;height:160px;border:3px solid ${i % 2 ? W : YL};border-radius:10px;display:flex;align-items:center;justify-content:center;text-align:center;font:800 30px Inter;color:${i % 2 ? W : YL}">${s}</div>`,
  `left:${220 + i * 390}px;top:470px`, t, 140.5, i % 2 ? 'up' : 'left', 'tick'
));
card(tile('PENEKANAN', 'keputusan dan ampunan berada pada kehendak Allah', YL, 1120), 'left:400px;top:730px', 131.4, 140.5, 'up', 'paper');

// 08 · renungan · jangan merasa lebih baik
scene(140.5, 156.0, { cut: 'clean' });
label('RENUNGAN DARI AYAT', 140.62, 'left:160px;top:278px', 156.0);
seg('JANGAN MERASA', 141.0, 'left:230px;top:410px;width:1460px;text-align:center', { size: 64, iv: .035 });
seg('LEBIH BAIK DARI ORANG LAIN', 142.3, 'left:210px;top:500px;width:1500px;text-align:center', { size: 58, iv: .028, color: YL, marks: [147.0] });
sv(143.5, 156, DEFS +
  `<path d="M960 955 V855 M960 855 L660 760 M960 855 L1260 760" fill="none" stroke="${YL}" stroke-width="4" data-d="920"/>` +
  `<circle cx="960" cy="960" r="72" fill="rgba(233,242,58,.06)" stroke="${YL}" stroke-width="4" data-d="452" data-del=".8"/>` +
  T(960, 970, 'REFLEKSI', { f: 1.2, fs: 22, c: YL }) +
  T(660, 740, 'DIRI', { f: 1.4, fs: 22 }) + T(1260, 740, 'ORANG LAIN', { f: 1.7, fs: 22 }), fullW, 1920, 1080, .8);

// 09 · syirik tampak dan samar · taubat sebagai jalan kembali
scene(156.0, 180.0, { cut: 'clean' });
label('HATI-HATI · TERBUKA ATAU TERSEMBUNYI', 156.12, 'left:160px;top:278px', 180.0);
sv(156.25, 180, DEFS +
  `<rect x="340" y="430" width="560" height="260" rx="18" fill="none" stroke="${YL}" stroke-width="4" data-d="1640"/>` +
  `<rect x="1020" y="430" width="560" height="260" rx="18" fill="none" stroke="#fff" stroke-width="4" data-d="1640" data-del=".8"/>` +
  T(620, 535, 'TAMPAK', { f: .4, fs: 35, c: YL }) + T(620, 600, 'JELAS', { f: 1.1, fs: 28 }) +
  T(1300, 535, 'TERSEMBUNYI', { f: 1.4, fs: 34 }) + T(1300, 600, 'SAMAR', { f: 2.1, fs: 28, c: YL }) +
  T(960, 830, 'TAUBAT · KEMBALI MENGESAKAN ALLAH', { f: 3.2, fs: 31, c: W }), fullW, 1920, 1080, 1.0);
line(164.0, 180, 'left:300px;top:850px;width:1320px;text-align:center', 'Kembali mengesakan Allah · kembali mengagungkan-Nya.', { fs: 39, m: [170.0] });

// 10 · bahaya memberi label · visual generik tanpa individu/kelompok
scene(180.0, 202.1, { cut: 'clean' });
label('PERINGATAN · JANGAN GEGABAH MELABELI', 180.12, 'left:160px;top:278px', 202.1);
line(180.3, 202.1, 'left:240px;top:365px;width:1440px;text-align:center', 'Jangan mudah menyebut orang yang bertauhid sebagai musyrik.', { fs: 43, m: [184.0, 192.0] });
card(tile('UCAPAN', 'butuh kehati-hatian', YL, 520), 'left:320px;top:570px', 189.6, 202.1, 'left', 'paper');
card(tile('PENILAIAN', 'jangan ditujukan serampangan', W, 520), 'left:1080px;top:570px', 195.1, 202.1, 'up', 'tick');

// 11 · ucapan dan akibatnya · tak ada kutipan hadis yang ditambahkan
scene(202.1, 222.1, { cut: 'clean' });
label('UCAPAN MEMBAWA TANGGUNG JAWAB', 202.22, 'left:160px;top:278px', 222.1);
sv(202.35, 222.1, DEFS +
  `<circle cx="500" cy="585" r="115" fill="none" stroke="${YL}" stroke-width="4" data-d="724"/>` +
  `<circle cx="1420" cy="585" r="115" fill="none" stroke="#fff" stroke-width="4" data-d="724" data-del="1.1"/>` +
  `<path d="M620 585 H1298" stroke="${YL}" stroke-width="5" marker-end="url(#ah)" data-d="690" data-del="1.8"/>` +
  T(500, 575, 'UCAPAN', { f: .5, fs: 30, c: YL }) + T(1420, 575, 'PENGUCAP', { f: 2.0, fs: 28 }) +
  T(960, 790, 'PENEKANAN DALAM CERAMAH', { f: 3.1, fs: 26, c: YL }), fullW, 1920, 1080, .9);
line(212.0, 222.1, 'left:300px;top:850px;width:1320px;text-align:center', 'Kehati-hatian dalam perkara ini sangat besar.', { fs: 40, m: [216.0] });

// 12 · kehati-hatian berulang · visual label kosong, bukan menunjuk pihak
scene(222.1, 240.3, { cut: 'clean' });
label('JEDA SEBELUM MENILAI', 222.22, 'left:160px;top:278px', 240.3);
sv(222.35, 240.3, DEFS + [0, 1, 2].map((i) =>
  BOX(360 + i * 440, 430, 310, 160, { s: i === 1 ? YL : W, sw: 4, del: i * .7 }) +
  T(515 + i * 440, 520, '…', { f: 1.0 + i * .8, fs: 66, c: i === 1 ? YL : W })
).join('') + T(960, 770, 'TELITI · JANGAN TERGESA-GESA', { f: 3.4, fs: 30, c: YL }), fullW, 1920, 1080, 1.0);
line(228.0, 240.3, 'left:280px;top:850px;width:1360px;text-align:center', 'Jangan sampai berani mengatakan hal yang demikian.', { fs: 39, m: [233.0] });

// 13 · topik tawassul · tetap netral dan jelas sebagai paparan pembicara
scene(240.3, 261.3, { cut: 'clean' });
label('TOPIK YANG DIBAHAS · TAWASSUL', 240.42, 'left:160px;top:278px', 261.3);
chip('URAIAN PENYAMPAI · BUKAN KESIMPULAN TAB SUMBER', 241.0, 'left:160px;top:340px', 261.3, YL);
card(tile('PERTANYAAN DALAM CERAMAH', 'bagaimana menilai tawassul?', YL, 650), 'left:240px;top:510px', 243.0, 261.3, 'left', 'paper');
card(tile('RESPONS PENYAMPAI', 'jangan mudah menetapkan label syirik', W, 650), 'left:1030px;top:510px', 248.6, 261.3, 'up', 'tick');
line(253.5, 261.3, 'left:350px;top:805px;width:1220px;text-align:center', 'Tidak menampilkan atau menyasar kelompok masa kini.', { fs: 31, m: [257.0] });

// 14 · penjelasan tawassul dalam audio · tidak memutuskan perbedaan hukum
scene(261.3, 280.7, { cut: 'clean' });
label('PENJELASAN NARASUMBER', 261.42, 'left:160px;top:278px', 280.7);
sv(261.55, 280.7, DEFS +
  `<rect x="330" y="430" width="570" height="250" rx="16" fill="none" stroke="${YL}" stroke-width="4" data-d="1640"/>` +
  `<rect x="1020" y="430" width="570" height="250" rx="16" fill="none" stroke="#fff" stroke-width="4" data-d="1640" data-del=".8"/>` +
  T(615, 525, 'WASILAH', { f: .4, fs: 38, c: YL }) + T(615, 590, 'dalam uraian pembicara', { f: 1.1, fs: 24 }) +
  T(1305, 525, 'KEYAKINAN', { f: 1.4, fs: 35 }) + T(1305, 590, 'hanya kepada Allah', { f: 2.1, fs: 28, c: YL }) +
  `<path d="M910 555 H1000" stroke="${YL}" stroke-width="4" marker-end="url(#ah)" data-d="90" data-del="2.7"/>`, fullW, 1920, 1080, .9);
line(268.0, 280.7, 'left:270px;top:800px;width:1380px;text-align:center', 'Audio tetap utuh; tab sumber tidak menetapkan hukum tawassul.', { fs: 33, m: [273.0] });

// 15 · ayat 64 · petikan Arab yang benar-benar dibaca
scene(280.7, 304.5, { cut: 'clean' });
label('AYAT KEEMPAT · QS. AN-NISA : 64', 280.82, 'left:160px;top:278px', 304.5);
paper(281.0, 'left:160px;top:365px;width:1600px;height:245px', '', 304.5);
arabic('وَلَوْ أَنَّهُمْ إِذْ ظَلَمُوا أَنْفُسَهُمْ',
  'left:210px;top:430px;width:1500px;text-align:center;font-size:74px;line-height:1.8;color:#151515', 281.2, 8.7, 304.5, [286.0]);
line(290.0, 304.5, 'left:260px;top:690px;width:1400px;text-align:center', '“Kalau mereka berbuat zalim terhadap diri mereka…”', { fs: 42, m: [296.0] });
chip('PETIKAN AYAT · AN-NISA : 64', 299.2, 'left:160px;top:835px', 304.5, YL);

// 16 · hubungan permohonan ampun pada pembacaan penyampai
scene(304.5, 346.0, { cut: 'clean' });
label('URAIAN AYAT · AMPUNAN DAN DOA', 304.62, 'left:160px;top:278px', 346.0);
chip('ALUR YANG DIJELASKAN DALAM CERAMAH', 305.0, 'left:160px;top:340px', 346.0, YL);
steps(['BERTAUBAT', 'MEMOHON AMPUN', 'DOA RASUL', 'AMPUNAN ALLAH'], 308.0, 4.0, 'left:140px;top:515px', 346.0);
line(321.0, 346.0, 'left:260px;top:760px;width:1400px;text-align:center', 'Narasumber menyampaikan pengertian ayatnya dengan redaksi berikutnya.', { fs: 34, m: [329.0] });

// 17 · pertanyaan yang diangkat dalam ceramah tentang masa berlakunya
scene(346.0, 366.2, { cut: 'clean' });
label('PERTANYAAN YANG DIANGKAT', 346.12, 'left:160px;top:278px', 366.2);
card(tile('KONTEKS PEMBACAAN', 'masa Rasulullah masih hidup', YL, 610), 'left:250px;top:440px', 347.0, 366.2, 'left', 'paper');
card(tile('PERTANYAAN', 'apakah hanya berlaku pada masa itu?', W, 610), 'left:1060px;top:440px', 352.7, 366.2, 'up', 'tick');
line(357.0, 366.2, 'left:300px;top:760px;width:1320px;text-align:center', 'Berikutnya, penyampai menuturkan jawabannya dan menyebut sumber kisah.', { fs: 32, m: [361.0] });

// 18 · satu tab pencarian sumber · klaim sanad dipisah dari bacaan pembicara
scene(366.2, 377.4, { cut: 'clean' });
const ST27 = { type: .5, scan: 2.0, res: 3.8, click: 4.65, det: 5.15 };
searchFind(366.2, 377.4, {
  tabTitle: 'Kisah al-‘Utbi · An-Nisa 64', css: 'left:250px;top:150px',
  q: 'الحكاية المشهورة عن العتبي', count: 4, pick: 0, shelfPick: 0, scroll: 35,
  times: ST27,
  shelf: [
    ['Tafsir Ibn Kathir', 'ابن كثير'],
    ['Al-Adhkar · al-Nawawi', 'الأذكار'],
    ['Al-Sarim al-Munki', 'الصارم'],
    ['Shu\'ab al-Iman · al-Bayhaqi', 'البيهقي'],
    ['An-Nisa : 64', 'النساء']
  ],
  results: [
    { title: 'Tafsir Ibn Kathir · An-Nisa 64', tag: 'HIKAYAT', ar: 'الحكاية المشهورة عن العتبي', sub: 'Ibn Kathir menamainya hikayat masyhur; sanad tidak tercantum pada kutipan ini.' },
    { title: 'Al-Adhkar · no. 574', tag: 'DINUKIL', ar: 'وَعَنِ الْعُتْبِيِّ قَالَ', sub: 'Al-Nawawi juga menuturkannya sebagai cerita dari al-‘Utbi.' },
    { title: 'Al-Sarim al-Munki · Ibn ‘Abd al-Hadi', tag: 'KRITIK TERATRIBUSI', ar: 'لَيْسَتْ بِصَحِيحَةٍ وَلَا ثَابِتَةٍ', sub: 'Penilaian Ibn ‘Abd al-Hadi: tidak sahih/terbukti sampai al-‘Utbi.' },
    { title: 'Shu‘ab al-Iman · no. 3880', tag: 'VARIAN LAIN · LEMAH', ar: 'إِسْنَادُهُ ضَعِيفٌ', sub: 'Jalur berbeda; bukan sanad bagi kisah mimpi al-‘Utbi.' }
  ],
  det: {
    title: 'Bentuk transmisi · al-‘Utbi', ar: 'حِكَايَةٌ · لَا إِسْنَادَ فِي النَّقْلِ',
    rows: [
      ['1 · AYAT', 'QS An-Nisa:64 ialah teks Al-Qur’an; dibedakan dari cerita sesudahnya.'],
      ['2 · IBN KATHIR', 'Menyebut “hikayat terkenal” dari al-‘Utbi.'],
      ['3 · SUMBER AWAL', 'Ibn al-Sabbagh disebut melalui nukilan Ibn Kathir; al-Shamil tidak diperiksa langsung.'],
      ['4 · AL-NAWAWI', 'Al-Adhkar no. 574 juga menuturkan kisah dari al-‘Utbi.'],
      ['5 · BENTUK CERITA', 'Ucapan seorang Arab dan mimpi al-‘Utbi; sanad tidak terlihat pada nukilan itu.'],
      ['6 · KRITIK', 'Ibn ‘Abd al-Hadi menilai atribusinya tidak terbukti; itu pendapat beliau.'],
      ['7 · VARIAN', 'Jalur al-Bayhaqi berbeda dan dinilai lemah; tidak dipindahkan ke kisah mimpi.']
    ], quote: 'الحكاية المشهورة عن العتبي'
  }
});
camTour(366.2, 377.4, ST27);

// 19 · hikayat yang dinukil · tanpa visual tokoh sakral atau individu
scene(377.4, 390.5, { cut: 'clean' });
label('HIKAYAT AL-‘UTBI · NARASI YANG DINUKIL', 377.52, 'left:160px;top:278px', 390.5);
card(`<div style="width:990px;border:3px solid ${YL};border-radius:14px;padding:30px;background:rgba(8,13,29,.96)"><div class="mono" style="font-size:18px;color:${YL}">KUTIPAN DALAM TAFSIR</div><div style="font:800 48px Inter;margin-top:20px">Kisah al-‘Utbi</div><div style="font:600 27px Inter;line-height:1.4;margin-top:18px">Ditampilkan sebagai hikayat yang dinukil, bukan hadis bersanad pada halaman yang diperiksa.</div></div>`, 'left:460px;top:435px', 378.0, 390.5, 'left', 'paper');
chip('UCAPAN PEMBICARA TETAP DIPERTAHANKAN', 384.0, 'left:460px;top:795px', 390.5, YL);

// 20 · latar cerita ziarah · ruang abstrak, tidak menggambarkan makam tertentu
scene(390.5, 410.4, { cut: 'clean' });
label('LATAR DALAM HIKAYAT · ZIARAH', 390.62, 'left:160px;top:278px', 410.4);
sv(390.75, 410.4, DEFS +
  `<path d="M270 760 H1650" stroke="${YL}" stroke-width="4" data-d="1380"/>` +
  [0, 1, 2, 3, 4].map(i => `<path d="M${400 + i * 280} 760 V${500 - (i % 2) * 60} Q${540 + i * 280} ${360 - (i % 2) * 60} ${680 + i * 280} ${500 - (i % 2) * 60} V760" fill="none" stroke="${i === 2 ? YL : W}" stroke-width="3" opacity=".65" data-d="640" data-del="${i * .35}"/>`).join('') +
  T(960, 860, 'RUANG SIMBOLIK · BUKAN REKONSTRUKSI LOKASI', { f: 2.7, fs: 24, c: YL }), fullW, 1920, 1080, 1.2);
line(390.5, 393.4, 'left:330px;top:330px;width:1260px;text-align:center', 'Seorang lelaki datang ke lokasi dalam alur cerita.', { fs: 35, m: [391.8] });
arabic('السَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ', 'left:285px;top:445px;width:1350px;text-align:center;font-size:68px;color:#fff', 393.4, 6.8, 410.4);
chip('KUTIPAN DALAM HIKAYAT · BUKAN PENGGAMBARAN', 399.0, 'left:410px;top:790px', 410.4, YL);

// 21 · makna ayat yang dikutip tokoh cerita; tanpa figur Nabi
scene(410.4, 432.9, { cut: 'clean' });
label('AYAT DALAM UCAPAN TOKOH CERITA', 410.52, 'left:160px;top:278px', 432.9);
paper(410.7, 'left:220px;top:390px;width:1480px;height:330px', '', 432.9);
line(411.2, 432.9, 'left:300px;top:455px;width:1320px;text-align:center', '“Siapa yang berbuat zalim, datang memohon ampun, lalu Rasul memohonkan ampun baginya…”', { fs: 41, c: '#151515', m: [418.0] });
chip('DIALOG DALAM HIKAYAT · QS. AN-NISA : 64', 423.0, 'left:320px;top:795px', 432.9, YL);

// 22 · permohonan ampun yang diceritakan dalam hikayat
scene(432.9, 450.8, { cut: 'clean' });
label('UCAPAN TOKOH CERITA', 433.02, 'left:160px;top:278px', 450.8);
line(433.1, 450.8, 'left:250px;top:415px;width:1420px;text-align:center', '“Aku datang hendak meminta ampun atas dosa-dosaku…”', { fs: 44, m: [439.0] });
card(tile('PERMOHONAN', 'ampun atas dosa', YL, 540), 'left:320px;top:600px', 439.8, 450.8, 'left', 'paper');
card(tile('DOA', 'meminta syafaat', W, 540), 'left:1060px;top:600px', 444.5, 450.8, 'up', 'tick');

// 23 · perbandingan emosi menurut ujaran tokoh; tanpa gambar Nabi atau syaitan
scene(450.8, 460.9, { cut: 'clean' });
label('UCAPAN DALAM CERITA', 450.92, 'left:160px;top:278px', 460.9);
card(tile('JIKA DIAMPUNI', 'kegembiraan', YL, 560), 'left:330px;top:505px', 451.0, 460.9, 'left', 'paper');
card(tile('JIKA TIDAK', 'kesedihan', W, 560), 'left:1030px;top:505px', 455.0, 460.9, 'up', 'tick');

// 24 · syair disebut; teksnya tidak tersedia sehingga tidak ditebak
scene(460.9, 475.3, { cut: 'clean' });
label('SYAIR DISEBUT · TEKS TIDAK DITAMPILKAN', 461.02, 'left:160px;top:278px', 475.3);
sv(461.15, 475.3, DEFS +
  Array.from({ length: 20 }, (_, i) => `<path d="M${330 + i * 65} ${800 - (i % 6) * 8} v${28 + (i % 5) * 8}" stroke="${i % 4 === 0 ? YL : W}" stroke-width="4" data-d="${28 + (i % 5) * 8}" data-del="${(i * .08).toFixed(2)}"/>`).join('') +
  T(960, 700, 'SYAIR DISEBUT DALAM KISAH', { f: .2, fs: 30, c: YL }) + T(960, 880, 'TEKS SYAIR TIDAK DITAMBAHKAN', { f: 2.3, fs: 24, c: W }), fullW, 1920, 1080, .8);

// 23 · bagian mimpi dalam hikayat · tak menampilkan Nabi atau figur mimpi
scene(475.3, 499.1, { cut: 'clean' });
label('BAGIAN MIMPI DALAM HIKAYAT', 475.42, 'left:160px;top:278px', 499.1);
sv(475.55, 499.1, DEFS +
  `<circle cx="960" cy="570" r="220" fill="none" stroke="${YL}" stroke-width="4" data-d="1382" data-dur="1.3"/>` +
  `<circle cx="960" cy="570" r="145" fill="rgba(233,242,58,.04)" stroke="#fff" stroke-width="3" data-d="911" data-del=".8"/>` +
  T(960, 555, 'رُؤْيَا', { f: .6, fs: 58, c: YL, ff: 'Amiri' }) +
  T(960, 635, 'KABAR DALAM MIMPI · MENURUT CERITA', { f: 1.5, fs: 25, c: W }) +
  T(960, 890, 'BUKAN SANAD HADIS PADA NUKILAN YANG DIPERIKSA', { f: 3.0, fs: 22, c: YL }), fullW, 1920, 1080, 1.0);
line(481.0, 499.1, 'left:300px;top:355px;width:1320px;text-align:center', 'Bagian mimpi ditandai sebagai isi hikayat yang dinukil.', { fs: 37, m: [486.0] });

// 24 · kesimpulan yang diceritakan narasumber · bukan status sumber
scene(499.1, 521.7, { cut: 'clean' });
label('KESIMPULAN YANG DISAMPAIKAN NARASUMBER', 499.22, 'left:160px;top:278px', 521.7);
chip('URAIAN PEMBICARA · TERPISAH DARI PENILAIAN SUMBER', 499.6, 'left:160px;top:345px', 521.7, YL);
line(501.0, 521.7, 'left:240px;top:480px;width:1440px;text-align:center', 'Kisah itu kemudian digunakan dalam penjelasan mengenai taubat dan ampunan.', { fs: 42, m: [509.0] });
sv(510.0, 521.7, DEFS +
  `<path d="M390 740 H1530" stroke="${YL}" stroke-width="4" data-d="1140"/>` +
  [390, 770, 1150, 1530].map((x, i) => `<circle cx="${x}" cy="740" r="19" fill="${i === 3 ? YL : W}" data-f="${.2 + i * .7}"/>`).join('') +
  T(390, 690, 'CERITA', { f: .4, fs: 24, c: W }) + T(1150, 690, 'PENJELASAN', { f: 1.8, fs: 23, c: YL }), fullW, 1920, 1080, .9);

// 25 · pendengar yang jauh · tanpa peta dunia / representasi tempat tertentu
scene(521.7, 532.9, { cut: 'clean' });
label('BAGI YANG BERADA JAUH', 521.82, 'left:160px;top:278px', 532.9);
sv(521.95, 532.9, DEFS +
  `<circle cx="420" cy="600" r="70" fill="none" stroke="${YL}" stroke-width="4" data-d="440"/>` +
  `<circle cx="1500" cy="600" r="70" fill="none" stroke="#fff" stroke-width="4" data-d="440" data-del=".7"/>` +
  `<path d="M500 600 H1420" stroke="${YL}" stroke-width="4" stroke-dasharray="18 15" marker-end="url(#ah)" data-d="930" data-del="1.3"/>` +
  T(420, 735, 'KAMPUNG', { f: .5, fs: 24, c: YL }) + T(1500, 735, 'JAUH', { f: 1.2, fs: 24, c: W }) +
  T(960, 490, 'PERTANYAAN DALAM CERAMAH', { f: 2.1, fs: 29, c: W }), fullW, 1920, 1080, .9);

// 26 · ajakan taubat bagi yang berbuat dosa
scene(532.9, 551.8, { cut: 'clean' });
label('KABAR GEMBIRA · AJAKAN BERTAUBAT', 533.02, 'left:160px;top:278px', 551.8);
steps(['BERBUAT DOSA', 'MEMOHON AMPUN', 'BERTAUBAT'], 534.0, 4.5, 'left:300px;top:500px', 551.8);
line(539.0, 551.8, 'left:300px;top:760px;width:1320px;text-align:center', 'Narasumber kembali mengingatkan untuk meminta ampun kepada Allah.', { fs: 38, m: [545.0] });

// 27 · penutup isi · ampunan dan rahmat, tanpa menambah kutipan ayat baru
scene(551.8, 562.2, { cut: 'clean' });
label('PENUTUP PESAN · AMPUNAN & RAHMAT', 551.92, 'left:160px;top:278px', 562.2);
sv(552.05, 562.2, DEFS +
  `<path d="M960 760 C690 610 700 420 960 530 C1220 420 1230 610 960 760Z" fill="none" stroke="${YL}" stroke-width="5" data-d="1190" data-dur="1.3"/>` +
  T(960, 585, 'غَفُورٌ · رَحِيمٌ', { f: .8, fs: 55, c: YL, ff: 'Amiri' }) +
  T(960, 845, 'AMPUNAN · RAHMAT', { f: 2.3, fs: 30, c: W }), fullW, 1920, 1080, .9);

// 28 · rangkuman atsar dan doa
scene(562.2, 575.7, { cut: 'clean' });
label('LIMA AYAT · ATSAR IBNU MAS‘UD', 562.32, 'left:160px;top:278px', 575.7);
[31, 40, 48, 64, 110].forEach((v, i) => card(
  `<div style="width:176px;height:88px;border:3px solid ${i === 2 ? YL : W};border-radius:10px;display:flex;align-items:center;justify-content:center;font:800 30px Inter;color:${i === 2 ? YL : W}">4 : ${v}</div>`,
  `left:${260 + i * 280}px;top:450px`, 562.5 + i * .62, 575.7, 'up', 'tick'
));
line(567.0, 575.7, 'left:260px;top:620px;width:1400px;text-align:center', 'Semoga Allah mengampuni dosa-dosa kita.', { fs: 43, m: [570.0] });
line(572.8, 575.7, 'left:260px;top:710px;width:1400px;text-align:center', 'InsyaAllah, di lain kesempatan kita berjumpa kembali.', { fs: 34, m: [573.2] });
chip('ATSAR · BUKAN HADIS MARFU‘', 573.7, 'left:700px;top:840px', 575.7, YL);

// 29 · jeda panjang tetap berisi outro visual, tanpa menambah narasi
scene(575.7, 589.8, { cut: 'clean' });
label('MENGENAL AL-QUR’AN · EP27', 575.82, 'left:160px;top:278px', 589.8);
sv(575.95, 589.8, DEFS +
  `<circle cx="960" cy="660" r="110" fill="none" stroke="${YL}" stroke-width="3" data-d="691"/>` +
  `<circle cx="960" cy="660" r="205" fill="none" stroke="#fff" stroke-width="2" opacity=".7" data-d="1288" data-del="1.2"/>` +
  `<circle cx="960" cy="660" r="300" fill="none" stroke="${YL}" stroke-width="2" opacity=".55" data-d="1885" data-del="2.2"/>` +
  Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; const x = 960 + Math.cos(a) * 340, y = 660 + Math.sin(a) * 340; return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${i % 3 === 0 ? 7 : 4}" fill="${i % 2 ? W : YL}" data-f="${(1 + i * .24).toFixed(2)}"/>`; }).join('') +
  T(960, 675, '27', { f: 1.8, fs: 50, c: YL }) +
  T(960, 940, 'DOA · AMAL · TAUBAT', { f: 4.1, fs: 26, c: W }), fullW, 1920, 1080, 1.1);

// 30 · salam penutup pasti; fragmen Arab tidak pasti dibiarkan tanpa teks
scene(589.8, TOTAL, { cut: 'none' });
label('EP27 · PENUTUP', 589.92, 'left:160px;top:278px', TOTAL);
mePol('left:255px;top:365px', 590.0, TOTAL, -3, 310);
line(590.3, TOTAL, 'left:690px;top:440px;width:1080px', 'MENGENAL AL-QUR’AN', { fs: 38, c: YL });
line(590.8, TOTAL, 'left:690px;top:520px;width:1080px', 'AMPUNAN · TAUBAT · KEHATI-HATIAN', { fs: 31 });
arabic('السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ', 'left:650px;top:640px;width:1120px;text-align:center;font-size:54px;color:#fff', 593.1, 2.7, TOTAL);
sub2('left:695px;top:825px', 593.3, TOTAL);

// 27 kode visual unik dari kosakata seri; satu tag aktif pada satu waktu.
[
  [0,24.5,'/kinetic-type'],[24.5,45.3,'/scripture'],[45.3,58.8,'/quote'],[58.8,77.9,'/counter'],
  [77.9,86.8,'/night-timeline'],[86.8,116.4,'/scripture'],[116.4,140.5,'/balance'],[140.5,156,'/layers'],
  [156,180,'/iceberg'],[180,202.1,'/callout'],[202.1,222.1,'/checklist'],[222.1,240.3,'/versus'],
  [240.3,261.3,'/split-screen'],[261.3,280.7,'/decision-matrix'],[280.7,304.5,'/scripture'],[304.5,346,'/flowchart'],
  [346,366.2,'/roadmap'],[366.2,377.4,'/search'],[377.4,390.5,'/citation'],[390.5,410.4,'/blueprint'],
  [410.4,432.9,'/timeline'],[432.9,450.8,'/quote'],[450.8,460.9,'/versus'],[460.9,475.3,'/soundwave'],
  [475.3,499.1,'/poetry'],[499.1,521.7,'/dossier'],
  [521.7,532.9,'/wind'],[532.9,551.8,'/checklist'],[551.8,562.2,'/mindmap'],[562.2,575.7,'/mosaic'],
  [575.7,589.8,'/night-sky'],[589.8,TOTAL,'/teaser']
].reduce((a, [t0, t1, c]) => { if (!a.ids[c]) a.ids[c] = String(++a.n).padStart(2, '0'); codeTag(t0, t1, a.ids[c], c); return a; }, { n: 0, ids: {} });
