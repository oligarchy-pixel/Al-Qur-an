---
name: "video-tulis-tangan-quran"
description: "Membuat paket post Instagram seri kajian (Reels HD gaya kertas bergaris tulisan tangan, hook 3 detik, cover, carousel, caption sastera Melayu) plus e-book PDF per episode dari rekaman mp3 + transkrip bertimestamp."
---

# Video kajian gaya "kertas bergaris tulisan tangan" (Zamrud Kertas)

Gunakan saat pengguna mengunggah **rekaman suara (mp3)** + **transkrip .txt bertimestamp** dan minta video seperti seri Hurmatul Qur'an / Kehormatan Al-Qur'an. Video referensi TIDAK diperlukan. Seluruh kode siap pakai disimpan di artifact **Toolkit Video Kajian**: https://claude.ai/artifact/DwcjWquRgV7TUE8TkV6iNp — jangan menulis ulang mesinnya dari nol.

## Paket standar per episode (buat semuanya kecuali pengguna membatasi)
Folder `/home/claude/out/Post_<NN>_<Judul>/` berisi:
1. `Reels_<NN>_<Judul>_HD.mp4` — video HD dengan **gabungan semua animasi (v1 dasar + v2 + v3 + v4 + v5 pembawa pesan)** dan hook 3 detik di depan.
2. `Cover_<NN>_Terang.jpg` dan `Cover_<NN>_Gelap.jpg` — cover standar seri (lihat bagian Cover), pancingan sama dengan hook.
3. `Carousel_<NN>_slide1..6.jpg` — carousel feed 1080x1350.
4. Caption sastera Melayu + hashtag di balasan.
5. `/home/claude/out/ebook/Ebook_<NN>_<Judul>.pdf` — **e-book PDF A5** pendamping episode (wajib setiap episode, lihat bagian E-book).
- Nomor seri berlanjut: 01 = Hurmatul Qur'an Pembukaan (rekaman 001), 02 = Kehormatan Al-Qur'an, 03 = Perjalanan Al-Qur'an & Ummul Qur'an (rekaman 003; versi final = render pertama dengan suara asli); episode berikut 04, 05, dst. Semua label hook/cover/carousel/e-book memakai `"HURMATUL QUR'AN · <NN>"` (kecuali pengguna memberi nama seri lain).
- Urutan upload yang disarankan: Reels NN → Carousel NN; cover terang dan gelap bergantian antar post.

## Cara kerja yang diminta pengguna
- Kerjakan cepat dan langsung sampai hasil final; jangan bertanya bila permintaan jelas. Laporkan pilihan yang diambil di akhir.
- Pengguna adalah pelajar yang ingin hemat kredit: satu sesi per episode, hindari demo/uji coba yang tidak diminta, kirim hasil final.
- Pengguna sering berubah pikiran soal suara; jangan mengganti set suara bawaan tanpa diminta, dan simpan versi lama agar bisa dikembalikan.
- Bila pengguna mengirim rekaman versi lain (mis. "-VOKAL" yang dibersihkan) untuk episode yang sudah ada, cek kesamaan timing (korelasi amplop RMS + lag) terhadap rekaman lama; bila sama, pakai transkrip & naskah lama dan cukup ganti AUDIO.
- Contoh penerapan v2+v3 penuh pada video 02 (episode 03 di `script_ep03_contoh.py`): `kit/script_v3_ep02.py.txt` (simpan sebagai `script_v3.py`, berdiri sendiri) dirender lewat `SCRIPT=upgrade_v2 BASE=script_v3`.
- Hemat langkah yang perlu persetujuan: gabungkan perintah shell dalam sedikit panggilan; jalankan render panjang di background dan kerjakan cover/carousel/e-book sambil menunggu. Jangan pakai `pkill -f`/`pgrep -f` dengan pola yang juga muncul di perintah sendiri (bisa mematikan shell atau membuat loop tunggu tak pernah selesai); untuk menunggu render, tunggu file OUT muncul.
- Hasil dikirim dengan SendUserFile (per post: video, cover, slide, e-book); balasan singkat dalam bahasa Indonesia.
- Gaya warna tetap "Zamrud Kertas" (krem, biru tua, hijau zamrud, emas). Jangan membanjiri pengguna dengan daftar warna/kode.
- Bila menawarkan pilihan suara, buat video contoh berlabel nomor di layar dan minta pengguna mendengarkannya dulu sebelum memilih.

## Aturan konten pengguna (wajib)
- Alur & naskah mengikuti rekaman; animasi muncul pas dengan kata yang diucapkan (pakai `W(seg_start, 'kata')`).
- Lafaz Allah hanya kaligrafi Arab (`'اللَّه'` dengan fn='ar'), tanpa ikon. "Rasulullah ﷺ" ditulis sebagai teks (helper `rasul()` atau `label_sprite`), tanpa ikon/ilustrasi. Sahabat & ulama boleh ikon orang/buku. Ilustrasi orang selalu tanpa wajah.
- Nama Allah, nabi, rasul, sahabat, ulama ditulis lengkap.
- Subtitle kotak di bawah tapi dinaikkan sedikit (SUB_Y=1035, ±81% tinggi layar, aman dari caption/tombol Reels) dengan ruang kosong di atasnya; konten tersebar kiri-tengah-kanan, tidak terlalu ke bawah (y konten maks ~1040 di kanvas 720x1280; render.py menggeser konten 72px ke atas).
- Output akhir HD 1080x1920 untuk Instagram. Perbaiki salah ketik transkrip yang jelas dan laporkan ke pengguna.
- Jangan menebak perawi hadis yang tidak disebut di rekaman; tulis "Hadis" saja. Ucapan sahabat ditulis sebagai ucapan sahabat (mis. "kata Sayyidina Ali"), bukan hadis. Angka/data sejarah ditulis sesuai rekaman dan dilaporkan ke pengguna untuk dicek. Bila menambahkan lafaz Arab yang di rekaman hanya disebut terjemahannya, minta pengguna memeriksanya.
- **Efek suara = semuanya suara asli seperti video 01–03** (`sfx_synth.SFXSET='asli'`, `engine.WRITE_SFX='write'`, `engine.MARKER_SFX='marker'` termasuk suara stabilo lama, volume `make.sh` 0.72 tanpa ducking). Semua eksperimen suara ditolak pengguna: set `'ref'`/`write6` ("hasilnya terlalu jelek"), `marker1`–`marker5`, `write1`–`write5`, dan efek yang dikecilkan. Jangan dipakai lagi kecuali pengguna memintanya.
- Video contoh ke-5 (gaya gelap merah tua dengan teks diketik, ceklis, riak, bingkai siku) **ditolak pengguna**: jangan pakai animasi atau efek suara ketikan dari video itu. (Animasi v5 di bawah berasal dari video contoh ke-6 yang disukai.)
- Gaya font: tetap tulisan tangan Kalam + Amiri untuk Arab. Pengguna TIDAK suka gaya serif "premium" (Playfair/Montserrat).

## Langkah video utama
1. **Setup (±1 menit)**
```bash
mkdir -p /home/claude/vid /home/claude/fonts /home/claude/out/hooks /home/claude/out/feed /home/claude/out/covers /home/claude/out/ebook
GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 --filter=blob:none --sparse https://github.com/google/fonts /home/claude/google/fonts
cd /home/claude/google/fonts && git sparse-checkout set ofl/kalam ofl/amiri && cp ofl/kalam/*.ttf ofl/amiri/*.ttf /home/claude/fonts/
python3 -c "from PIL import features; assert features.check('raqm')"
```
   Jika clone ditolak, panggil add_repo owner=google repo=fonts lalu ulangi.
2. **Unduh toolkit** (satu panggilan): Artifact `action: read`, `url` di atas, `paths`: `kit/engine.py.txt`, `kit/subs.py.txt`, `kit/sfx_synth.py.txt`, `kit/render.py.txt`, `kit/build_audio.py.txt`, `kit/make.sh.txt`, `kit/sheet.py.txt`, `kit/ep_template.py.txt`, `kit/demo_v2_contoh.py.txt`, `kit/demo_v3_contoh.py.txt`, `kit/script_v3_ep02.py.txt`, `kit/demo_v4_contoh.py.txt`, `kit/demo_v5_contoh.py.txt`, `kit/script_ep03_contoh.py.txt`, `kit/clean_transkrip_ep03.py.txt`, `kit/upgrade_v2.py.txt`, `kit/hookgen.py.txt`, `kit/make_hook.sh.txt`, `kit/empty_tr.txt`, `kit/cover_ep.py.txt`, `kit/cover_ep_contoh.py.txt`, `kit/cover_variants.py.txt`, `kit/cover_hook.py.txt`, `kit/cover_template.py.txt`, `kit/feed.py.txt`, `kit/carousel_contoh_01.py.txt`, `kit/carousel_contoh_02.py.txt`, `kit/carousel_contoh_03.py.txt`, `kit/cover_ep03_contoh.py.txt`, `kit/ebook_build.py.txt`, `kit/ebook_ep01_contoh.py.txt`, `kit/ebook_ep02_contoh.py.txt`, `kit/ebook_ep03_contoh.py.txt`, dengan `out_dir` di scratchpad. Salin SEMUA ke `/home/claude/vid/`, buang akhiran `.txt` kecuali `empty_tr.txt`: `for f in <out_dir>/kit/*; do b=$(basename "$f"); case $b in empty_tr.txt) cp "$f" /home/claude/vid/;; *) cp "$f" /home/claude/vid/${b%.txt};; esac; done`. Pastikan `build_audio.py` yang dipakai adalah versi toolkit (membaca env SCRIPT).
3. **Transkrip**: baris `[mm:ss.s - mm:ss.s] teks`. Bila pengguna mengirim **.docx** dengan baris `[jj:mm:dd.ddd – jj:mm:dd.ddd]` dan istilah Arab tanpa harakat di dalam kalimat Latin (القرآن, سورة, nama sahabat), ubah dulu dengan pola `clean_transkrip_ep03.py` (pandoc docx→txt, konversi waktu, peta istilah Arab→transliterasi khusus baris Latin; ayat berharakat dibiarkan Arab; pastikan `أَعُوذُ.../بِسْمِ...` di baris Latin ditransliterasi utuh). Kata Arab di dalam kalimat Latin diganti transliterasi lewat daftar `REPL` di subs.py (tambahkan nama perawi/ulama baru bila perlu). Segmen murni Arab tetap Arab. Lihat segmen:
```bash
cd /home/claude/vid && TR=<txt> python3 -c "from subs import SEGS;[print(f'{a:6.1f} {b:6.1f} {t}') for a,b,t in SEGS]"
```
4. **Naskah adegan**: `cp ep_template.py ep.py`, set `TOTAL` = durasi mp3 (ffprobe). Satu `scene(t0,t1)` per gagasan (3–25 dtk; t1 = awal adegan berikut − 0.05), elemen diberi waktu `W(seg_start,'kata')` (kata harus ada di teks segmen yang sudah dibersihkan; W mencari satu kata, bukan frasa; untuk segmen Arab pakai kata Arab berharakat). `DIM(t)` meredupkan elemen lama saat fokus pindah. Poin bernomor: `head(t, n)` (atur `total` Ticks = jumlah poin). Adegan terakhir `scene(t, TOTAL)`, baris terakhir `register_sub_sfx()`. Gunakan **gabungan semua animasi v1–v5** secara manual di momen penting: setiap adegan sebaiknya punya minimal satu visual "bercerita" (gambar garis, orang berjalan, angka berubah, timbangan, perbandingan, sorotan, gerbang, celah kata, garis tanpa perantara) — lihat bagian Animasi v2/v3/v4/v5 dan `demo_v2_contoh.py`, `demo_v3_contoh.py`, `demo_v4_contoh.py`, `demo_v5_contoh.py`, `script_ep03_contoh.py` (contoh terbaru episode penuh).
5. **Pratinjau akhir tiap adegan** (beberapa detik):
```bash
export TR=<txt> SCRIPT=ep; rm -rf prev
python3 -c "import ep;print(' '.join(f'{s[\"t1\"]-0.45:.2f}' for s in ep.SCENES))" > t.txt
python3 render.py png $(cat t.txt); F=($(ls prev/*.png|sort)); python3 sheet.py s1.png ${F[@]:0:15}; python3 sheet.py s2.png ${F[@]:15:15}
```
   Lihat sheet: teks yang terpotong di akhir adegan (W terlalu telat → pakai kata lebih awal), tumpang tindih, label menimpa ikon. Perbaiki sekali.
6. **Render final HD dengan animasi v2** (±20–30 menit untuk video 9–10 menit; jalankan run_in_background):
```bash
cd /home/claude/vid && SCRIPT=upgrade_v2 BASE=ep TR=<txt> AUDIO=<mp3> OUT=/home/claude/out/<Judul>_HD_1080.mp4 bash make.sh
```
   `upgrade_v2.py` membungkus naskah BASE dan otomatis menambah: transisi balik halaman di setiap pergantian adegan, kamera zoom/geser lembut per adegan, ikon & kartu hidup (beat/wiggle/float/twinkle/drip), stabilo pada kata Arab terakhir, percikan bintang di setiap centang. Sambil menunggu render, kerjakan hook (setelah `mix.m4a` selesai, karena make_hook menimpa `sfx.wav`), cover, carousel, caption dan e-book. Ambil 3–5 frame dengan ffmpeg untuk dicek.

## Animasi v2 (disetujui pengguna, pakai di setiap episode)
- `Icon2(t, nama, cx, cy, size, fx='beat'|'wiggle'|'float'|'twinkle'|'drip')`, `Card2(..., fx=...)` — ikon/kartu hidup.
- `Marker(t, x0, x1, cy, h, col=(250,222,90), snd=None)` — sapuan stabilo (kuning; hijau `(150,220,160)`), sinkron dengan ucapan; bunyinya `MARKER_SFX` (marker, suara asli).
- `Burst(t, cx, cy, n, r)` — percikan bintang + ding.
- `PageTurn(t)` — lembar kertas menyapu layar saat pergantian adegan.
- `Counter(t, cx, cy, n, suffix)` — angka menghitung naik.
- Kamera: daftar `CAM = [(t, zoom, fx, fy), ...]` di naskah (zoom 1.0–1.3; fx, fy koordinat kanvas). `upgrade_v2.py` membuatnya otomatis.
- Ilustrasi tanpa wajah & ikon baru: reader, reader_g, ablution, tap, hands_dua, lamp, magnifier, hourglass, tasbih, sajadah, calendar, scale, tree, rain, key, gift, bell, trophy, door.
- Kartu "Kesimpulan" di akhir bagian: Box kuning muda + judul + ikon beat + Mark check (contoh di `demo_v2_contoh.py`).

## Animasi v3 (dari video contoh pengguna, disetujui; pakai di semua video)
Gaya "bercerita dengan gambar garis" seperti video contoh (Ashab al-Kahf / 300–309, Al-Insan 76:1):
- `LineArt(t, kind, cx, cy, s, color, width, dur)` — ilustrasi garis tergambar perlahan: cave, stick (orang lidi tanpa wajah), buildings, house, mosque, mountains, waves, tree, bird, sun (fill=YEL), moon, paper, ground.
- `Walker(t, path, dur, s)` — orang lidi berjalan sepanjang lintasan dengan jejak titik (mis. dari rumah ke pengajian).
- `NumberMorph(t, cx, cy, a, b, tswap, size, new_col)` — angka/teks berubah bagian akhirnya (300 → 309, "juz 30" → "juz 1"), bagian baru berwarna & memantul.
- `Brace(t, x0, x1, y, label, color, up)` — kurung kurawal berlabel di bawah/atas sekelompok elemen ("one sentence").
- `PinNote(t, cx, cy, teks, sub, size)` — catatan kertas berpenjepit di pojok kanan atas yang tetap tampil sebagai pengingat ayat/hadis kunci (beri `out=` lebih panjang dari adegan; hindari bertabrakan dengan Ticks di y≈196).
- `CompareBars(t, x0, x1, y, rows=[(ikon, label, frac, warna)], diff='≈ 11 hari')` — batang perbandingan bertumpuk + kurung selisih merah.
- `IconRow(t, ikon, n, x0, x1, y, size, gap, rows)` — deretan ikon muncul satu per satu (9 bulan, 20 sajadah).
- `Balance(t, cx, cy, kiri, kanan, ttilt, side='left')` — timbangan miring ke sisi yang lebih utama.
- `SunArc(t, cx, cy, r, dur, green_from, labels)` — lengkung langit, matahari bergerak terbit→terbenam dengan jejak hijau.
- `Spotlight(t, cx, cy, r, label)` — lingkaran sorotan hijau bersinar + label ("kita", "kamu").
- `Tape(t, x0, x1, y, label)` — meteran kuning memanjang + angka.
- `Night(t0, t1, alpha)` — layar menggelap sesaat (tidur, malam); jangan dipakai untuk teks penting.
- Helper: `big_word(t, kata_arab, cx, cy, size, sub=)` — kata Arab besar ditulis lalu dilingkari hijau (penutup kuat); `guess(t, teks, cx, cy, tstrike)` — tebakan yang lalu dicoret merah.
- Pola cerita dari contoh: pertanyaan besar "?" → tebakan dicoret → ayat/hadis jawaban; angka/fakta → visual perbandingan; penutup dengan pemandangan garis + Spotlight "kita" atau satu kata Arab besar dilingkari. Saat adegan berganti fokus, hapus elemen lama (`for e in CUR['els']: e.out = t`) agar layar lega, kecuali PinNote.

## Animasi v4 (infografis dari video contoh ke-4, disetujui; pakai di semua video)
Bentuk datar sederhana (koin emas, toples zamrud) untuk tema rezeki, pahala, pertumbuhan, angka dan hubungan. Gunakan saat isi rekaman cocok, bukan dipaksakan:
- `CoinBars(t, x0, x1, ybase, n=7, maxc=11, dur)` — tumpukan koin bernomor 1..n tumbuh + panah tren hijau (daftar amalan/poin bertingkat).
- `CoinJar(t, cx, cy, s, n=6, gap)` — toples, koin melayang masuk kiri-kanan lalu bertumpuk (pahala/rezeki terkumpul).
- `RainGrow(t, cx, ybase, s, dur, bloom=True)` — awan menurunkan hujan, tunas tumbuh, berbunga koin (istighfar, ilmu yang tumbuh).
- `JarFill(t, cx, cy, s, frac, dur)` — toples terisi cairan emas + gelembung tanda tambah (syukur → ditambah).
- `CoinScale(t, cx, cy, s, tdrop, side, labels=(kiri, kanan))` — timbangan berisi koin, satu koin jatuh lalu miring (sedekah, perbandingan amal).
- `NestArc(t, cx, cy, r, dur, n)` — matahari bergerak di lengkung putus-putus, burung pulang ke sarang (tawakal, pagi-petang).
- `Network(t, cx, cy, r, n, labels=[...], center=None|'ikon')` — koin/ikon di tengah, cabang ke simpul berlabel lalu cincin (silaturahim, sanad, rantai sahabat-ulama).
- `BarChart(t, x0, ybase, w, h, vals, dur, labels)` — sumbu, batang naik, garis tren oranye, koin di ujung (perkembangan dari masa ke masa).
- `Reveal(t, teks, cx, cy, size, maxw, per, hl=[kata], times=[...])` — kalimat muncul kata demi kata (abu-abu → tinta), kata kunci hijau; cocok untuk terjemahan ayat/hadis di layar (subtitle tetap ada).
- Penanda poin gaya pil: `Chip(t, 360, 230, 'poin 1 / 7', fill=(32,96,88), col=WHITE, border=(32,96,88), size=20)`.

## Animasi v5 "pembawa pesan" (dari video contoh ke-6, gaya kertas yang sama, disetujui; pakai di semua video)
- `Gateway(t, cx, cy, label='Rasulullah ﷺ', qin='?', qout='قُلْ', n=3, gap)` — gerbang lengkung; kartu tanya masuk dari kiri, keluar di kanan menjadi kartu jawaban (pertanyaan → wahyu lewat Rasulullah).
- `DotTrail(t, x0, x1, y, label, size)` — jejak titik bergerak menuju label berbingkai elips (orang-orang datang bertanya/belajar).
- `Tally(t, x0, x1, y, n, dur, suffix=' kali')` — pensil menggores turus satu per satu, angka ikut bertambah (hitungan kata/ayat; angkanya harus dari rekaman atau dicek).
- `Slider(t, x0, x1, y, kiri, kanan, dur, p0, p1)` — garis berlabel dengan titik bergerak (jauh → dekat, sedikit → banyak).
- `GapMark(t, cx, cy, rx, ry, jump=True)` — elips merah putus-putus menandai kata yang tidak ada + panah lengkung melompatinya (tulis ayat dalam 2 potongan `Txt` dengan celah di antaranya).
- `RollNumber(t, cx, cy, a, b, dur, suffix, size, sub)` — angka bergulir dari a ke b (mis. tahun sekarang → wafat ulama), cocok dengan `Ruler`.
- `Link(t, x0, x1, y, left='kamu', right='اللَّه', mid='perantara', tremove, tshrink)` — garis dua ujung dengan simpul perantara yang dihapus penghapus lalu garis memendek & menghijau (dekat, tanpa perantara).
- `Slot(t, cx, cy, kata, tfill)` — kotak putus-putus berisi '?' lalu terisi kata + garis sinar (penutup "kecuali satu: kamu").
- `CrossOut(t, x0, y0, x1, y1)` — coretan silang merah tipis di atas kartu (bukan ini jawabannya).
- `Crowd(t, cx, cy, n, w)` — titik-titik orang muncul berkelompok (umat, hamba-hamba).
- `label_sprite(teks)` — label Kalam yang otomatis menempelkan ﷺ dengan huruf Arab (dipakai Gateway/DotTrail).
- Pola cerita dari contoh: pernyataan umum → pola berulang (turus/kartu) → satu pengecualian ditandai (GapMark/Stamp) → ulama terdahulu (RollNumber + buku + sticky) → makna untuk kita (Link/Slot).

## Pembuka 3 detik (hook)
- Tambahkan entri di dict `H` dalam `hookgen.py`: `l1`, `l2` (kalimat pancingan; `saw=True` bila l2 diakhiri Rasulullah agar ﷺ ditambahkan), `big` (kata kunci besar yang dilingkari), `bigc`, `ell`, `bs` (ukuran), `ar` (lafaz ayat/hadis), `ars`, `src` ("QS. ..." / "HR. ..." / "Hadis"), `foot` (mis. "simak sampai akhir"), `label` ("HURMATUL QUR'AN · NN").
- Pancingan terbaik: pertanyaan dekat kehidupan sehari-hari atau perbandingan mengejutkan dari ayat/hadis yang benar-benar ada di video (jawabannya harus ada di video, jangan menyesatkan). Bila pengguna ingin memilih, buat 3–4 klip pilihan dulu tanpa menempel.
- Pratinjau: `SCRIPT=hookgen TR=empty_tr.txt HOOK=<id> python3 render.py png 3.1`.
- Buat klip lalu tempel: `HOOK=<id> CLIP=/home/claude/out/hooks/Hook<NN>.mp4 MAIN=<video_HD> OUT=<Post folder>/Reels_<NN>_<Judul>_HD.mp4 bash make_hook.sh`.

## Cover (1080x1920) — gaya standar yang disukai pengguna
- Pakai `cover_ep.py`: `make(theme, label, l1, l2, big, scene, ar, tr, src, out, saw=False, ars=.., bigs=.., wide=True)`.
  - `theme`: `'light'` (putih bersih, titik halus, hijau zamrud) atau `'dark'` (hijau zamrud gelap, krem & emas). Buat keduanya per episode/pancingan.
  - `wide=True` WAJIB: ukuran sedang, tulisan dan kartu melebar ke samping, kotak hadis hampir selebar layar.
  - `scene`: adegan kartu ikon dari video, mis. `[('book','belajar 1 ayat'), '>', ('house','salat 100 rakaat')]`; simbol '>', '+', '='; kartu kaligrafi: `(None, 'hak Allah', 'اللَّه')`.
  - `ar`: list baris Arab (1–2 baris); `tr`: list baris terjemahan (1–2 baris); `src`: label sumber pada sticky.
  - Lihat `cover_ep_contoh.py` (5 contoh Episode 01) dan `cover_ep03_contoh.py` (pasangan terang + gelap episode 03).
- Bila diminta "beberapa cover dari isi video": ambil 4–5 hadis/ayat/kutipan terkuat dari episode itu, tema terang & gelap bergantian.
- Isi penting di y 285–1635 agar aman di grid profil 3:4.

## Carousel feed (1080x1350, 6 slide)
- Salin `carousel_contoh_01.py` (format: 1 sampul pancingan + kotak ayat, 4 slide satu poin per slide dengan nomor, ikon besar, lafaz Arab, 3 poin centang, 1 penutup hadis + rangkuman + stempel SIMPAN & BAGIKAN + ajakan tonton video), `carousel_contoh_02.py` (format daftar) atau `carousel_contoh_03.py` (contoh terbaru). Ganti `LAB`, isi, dan nama file output; hindari glyph yang tidak ada di font Kalam (→ ▶ ✓): pakai ">>" atau gambar garis.
- Simpan ke folder Post_<NN>.

## Caption
- Bahasa sastera Melayu yang sopan (sapaan "Wahai…", "junjungan besar kita", "moga-moga", "tatkala"), buka dengan pantun karangan sendiri (rima a-b-a-b), lafaz hadis/ayat dalam Arab + terjemahan, ringkasan poin dengan ▫️, doa penutup, ajakan simpan & kongsi, lalu 12–16 hashtag (#HurmatulQuran #AdabAlQuran #KehormatanAlQuran #KalamAllah #TadabburQuran #HadisNabi #DakwahIslam #MuslimMalaysia #MuslimNusantara #ReelsIslami dll.). Tulis di balasan agar mudah disalin.
- Ingatkan: aktifkan "Unggah dengan kualitas tertinggi" di Instagram dan pilih cover lewat Edit sampul → Tambahkan dari galeri.

## E-book per episode (PDF A5, wajib setiap episode)
- Alat: `ebook_build.py` (HTML + CSS halaman A5 gaya Zamrud Kertas → PDF lewat Playwright Chromium, `print_background`). Helper: `dalil(arab|[baris], terjemah, sumber, size)`, `card(judul, isi, ''|'g'|'r'|'y')`, `ck([butir], x=False)`, `chead(no, judul, ikon)`, `icon(nama, 'ico'|'icoS')`, `page(isi, label, no)`; kelas `.hl` stabilo kuning, `.hlg` hijau, `.label`, `.orn`, `.box` (kotak ceklis), `.note-lines`.
- Ikon: buat dulu PNG dari mesin video ke folder `icons/` di samping `ebook_build.py`: `python3 -c "import sys; sys.path.insert(0,'/home/claude/vid'); from engine import icon_sprite, NAVY; [icon_sprite(n,160,NAVY).save(f'icons/{n}.png') for n in [...]]"`.
- Isi dari transkrip episode, setia pada rekaman (jangan menambah klaim fikih/perawi). Struktur: sampul terang (label "HURMATUL QUR'AN · NN", judul kaligrafi dilingkari, 4 ikon) → muqaddimah/pengantar + daftar isi → bab per poin (ikon bulat bernomor, kotak dalil Arab + terjemah + sticky sumber, kartu hijau anjuran/merah larangan/kuning catatan) → ringkasan/ceklis → halaman catatan + doa → sampul belakang gelap (dalil kunci + ajakan + episode berikutnya). Poin yang pendek digabung 2 per halaman agar tidak kosong; pastikan nomor halaman di daftar isi sesuai.
- Font: Kalam (semua teks Latin), Amiri (Arab). Contoh lengkap: `ebook_ep01_contoh.py` (14 hlm + sampul), `ebook_ep02_contoh.py` (16 hlm), `ebook_ep03_contoh.py` (15 hlm, bab sejarah + tabel isi Al-Fatihah). Ikon baru yang belum ada di `icons/` dibuat dengan perintah ikon di atas. Jalankan: `python3 ebook_build.py ebook_epNN /home/claude/out/ebook/Ebook_NN_<Judul>.pdf` lalu cek dengan `pdftoppm -r 40 -png` + lembar kontak.

## API elemen dasar (kanvas 720x1280)
- `Txt(t, teks, cx, cy, size, fn='kb'|'kr'|'ar', color, maxw, mode='write'|'pop'|'fade', dur, ax='c'|'l'|'r', rot)`; teks Arab otomatis ditulis kanan→kiri; mode write berbunyi `WRITE_SFX` (write, goresan pensil asli).
- `Card(t, cx, cy, w, h, icon=, label='baris1\nbaris2', arabic=, ar_size, fill, isize, lsize)`, `Icon(t, nama, cx, cy, size, rot)`, `Chip(t, cx, cy, teks, fill, col, border, size)` (preset `**G` hijau, `**R` merah), `Sticky(t, cx, cy, teks, sub, rot)`, `Stamp(t, cx, cy, TEKS, col, size, rot)`, `Box(t, x0, y0, x1, y1, fill, col)`.
- Garis: `arrow(t, x0, y0, x1, y1, color, bend, dashed, dur)`, `Line(t, pts, color, width, dur, dashed, snd)`, `Ellipse(t, cx, cy, rx, ry, color, width, dur)`, `strike`, `underline`, `Wave`, `Mark(t, 'check'|'cross', cx, cy, s)`, `Ticks`, `Bar`, `Ruler`, `Dots`.
- Ikon dasar: kaaba book mushaf face shield speech person person_g person_r people ear eye house mosque star flame trash drop drop_r board foot pen market cloud heart warning music rehal up sparkle paper torn mound moon pause loop wave coin compass clock quote bulb scroll hand cabinet siwak shirt lock brain (+ ikon v2 di atas). Catatan: ikon `wave` berbentuk speaker, jangan dipakai untuk "roh".
- Warna: NAVY GREEN RED YEL GOLD GRAY LGRAY WHITE BLUE ORANGE; latar kartu LGREEN LRED LBLUE LYEL.

## Jika toolkit diperbarui
Setelah memperbaiki kode di sesi mana pun, publikasikan ulang file yang berubah ke artifact yang sama (Artifact publish dengan `url` di atas dan `files` berisi `kit/<nama>.txt`, contentType text/plain) agar episode berikutnya memakai versi terbaru. Artifact tidak menerima .zip; ikon e-book dibuat ulang dari mesin.