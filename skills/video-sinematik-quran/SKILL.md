---
name: "video-sinematik-quran"
description: "Bikin video Reels Qur'an sinematik @alurziyadahku (gelap + emas, Qur'an 3D, mushaf asli terjilid, latar langit 114 bintang, klik Subscribe & Follow, SFX referensi) dari rekaman suara dan transkrip bertimestamp, tanpa menimpa file lama."
---

# Video sinematik Qur'an (seri @alurziyadahku) — PERINTAH TERBARU (2026-10-31)

Acuan gaya: EP1 v6 latar bintang (Adab_Membaca_Al-Quran_EP1_FULL_v6_latar-bintang.mp4). Perintah lama (latar kota batang, gaya UI biru alurhadis) SUDAH DIHAPUS dan tidak dipakai lagi.

Bahasa Melayu/Indonesia santai. Output 1080x1920, 30 fps, 173 dtk (170 dtk narasi + kad follow). Jangan janjikan 4K.

## Kit kod (mulai dari sini)
Semua kod ada dalam Kit_Kod_Video_alurziyadahku_v2_latar-bintang.zip (sudah dikirim ke pengguna; kalau tiada di workspace, minta pengguna melampirkannya). Ekstrak ke scratchpad/kit lalu ikut README.md:
- engine/head.html + engine/tail_base.js (asas EP4) + engine/common.js; engine/build_ep.py <folder> <out.js>.
- engine/gen_sky.py <tail.js> <nama.html> = halaman video dengan LATAR LANGIT 114 BINTANG (engine/sky_stars.js menimpa drawBg/drawCity). Ini yang dipakai sekarang.
- tools/subfollow/: kad putih kecil (foto pengguna, alurziyadahku) dengan kursor klik Subscribe -> "Subscribed" lalu Follow -> "Following" (0.2-3.5 dtk), dirender PNG lutsinar lalu ditindih di atas video; bunyi klik + kilau di 1.25 dan 2.25 dtk.
- Episode baru: salin episodes/ep1 ke episodes/epN, tulis semula head.js (EBS + TITLES ikut timestamp transkrip), k.js, rows.js, heroes.js, widgets.js, spreads.js, rise.js, cam.js, lit.js, conf.js.
- Still dulu: `python3 engine/build_ep.py episodes/epN work/t.js && python3 engine/gen_sky.py work/t.js vid_epN.html && (cd tools && node frameF.js vid_epN.html 3 20 60 120 168)` + sheet.py.
- Penuh: `bash run_ep.sh episodes/epN suara.wav Nama_EPN_FULL_v1.mp4` (build + latar bintang, EQ suara, SFX dari peristiwa + klik, render 2 proses, tindih Subscribe/Follow, mux; ±15 minit).
- Cover 9:16: tools/covbg.js + covmk.js. Thumbnail YouTube 16:9: thbg.js + thumb/t.html + thshot.js. Thumbnail Shorts: thumb/s.html + sshot.js. JPG < 2 MB.

## Aturan pengguna (wajib)
- LATAR LANGIT 114 BINTANG (menggantikan kota batang): galaksi 114 bintang surah berpusar yang berputar perlahan dan makin dekat (kamera maju), zarah bintang mengalir keluar dari tengah, bulan sabit kanan atas, siluet kubah/menara bertepi emas di kaki langit. Tiap seksyen (EBS) ada satu BINTANG POIN yang datang dari jauh, menyala + label penjelasan, lalu melepasi kamera. Kecerahan bintang surah ikut riseAt/litAt episode (gelombang; Madaniyah putih, Makkiyah emas); ringkasan/penutup: semua 114 bintang menyala satu demi satu.
- ANIMASI KLIK SUBSCRIBE & FOLLOW di awal setiap video.
- Tiada garis cahaya yang menyambung antar bintang/poin. Cincin gelombang hanya di hook dan penutup.
- Mushaf terjilid seperti asli (dua halaman, punggung tengah, ketebalan kertas, lembaran dibalik); saat ayat dibahas kamera langsung zoom ke baris ayat dan disorot.
- 4 gaya animasi: pertanyaan berjeda + kata kunci/angka membesar (hentak); ikon garis tergambar sendiri + sorotan stabilo; kartu kaca 3D ✓/✕; teks/ayat tersingkap + angka bergulir. Dipadukan SFX referensi (tick, riser, boom, hit, sparkle, whoosh).
- Warna emas hangat sahaja. Judul kinetik putih kiri atas dengan kata kunci emas; hook 3 dtk.
- Lafaz Arab (ayat, Ummul Quran, basmalah, Lauh Mahfuz, Makkiyah/Madaniyah, dll.) ditulis huruf Arab berharakat; kata umum (Al-Quran, Al-Fatihah, surah, Allah, Rasulullah) tetap Latin. Token Arab berbilang kata dalam judul disambung NBSP; fon 'Sch'.
- Nama ditulis lengkap: Rasulullah sallallahu 'alaihi wa sallam (bukan SAW), radhiyallahu 'anhu/'anhum/'anhuma (bukan RA), rahimahullah, Imam Ahmad bin Hanbal.
- Kad akhir: "Jangan lupa follow ya @alurziyadahku" + pil Follow / Simpan / Kongsi.
- Jangan timpa fail lama: selalu nama versi baru. Hapus fail lama hanya bila pengguna minta.
- Alur: still dulu, contoh pendek bila perlu, render penuh setelah setuju. Pengguna tidak sabar: kabar ringkas + ETA jujur (cek `date`). Katakan jujur audio hanya diukur, belum didengar.
- Tawarkan cover/thumbnail/caption, jangan kerjakan tanpa diminta. Hindari gambar makhluk bernyawa.

## Teknik penting
- Satu halaman HTML 720x1280 dengan render(t) murni; Playwright Chromium dsf 1.5 -> ffmpeg libx264 crf16; dua proses render paralel (0-2595, 2595-5190), concat, mux.
- Fail dilayani lewat Playwright page.route('http://vid.local/**'); tiada server statik.
- sky_stars.js: drawCity diganti drawSky (kanvas #city 1080x1920 skala 1.5; MESTI set city.style.opacity=1 kerana drawCity asal yang mengaturnya); drawBg dikosongkan.
- Mushaf: buildSpreads/drawSpreads di common.js, konfigurasi {R, win, flip, hl:[[t,'R'|'L',baris,jumlah]]}; fon QPC1 per halaman.
- Audio: rantai voicechain.txt (EQ + loudnorm -16) apad 173; SFX dari sfx/lib via evtF.js + mkev.py + sfx3.py; mix voice + sfx*0.9, amix normalize=0, alimiter.

## Jebakan teknis
- Jangan pakai mix-blend-mode/filter/opacity<1/overflow:hidden pada pembungkus bidang 3D.
- Proses panjang mesti run_in_background; jangan pkill -f dengan pola yang ada dalam perintah sendiri (kill ikut PID); pastikan tiada render ganda.
- Semak dengan contact sheet still, bukan render penuh.