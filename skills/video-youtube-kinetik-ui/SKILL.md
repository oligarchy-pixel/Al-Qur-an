---
name: "video-youtube-kinetik-ui"
description: "Bikin video YouTube 16:9 HD kajian Al-Quran @alurziyadahku dari audio + transkrip: teks kinetik v2 + jendela UI penjelasan v1, hook subscribe, cover 16:9 dan Reel 9:16, judul/deskripsi/hashtag."
---

# Video YouTube kajian (gaya gabungan v1 UI + v2 kinetik)

## Masukan
- Audio (wav/mp3) dan transkrip bertimestamp `[mm:ss.s–mm:ss.s] teks`. Kalau file ada di Google Drive dan terlalu besar untuk konektor, minta pengguna melampirkan audio langsung di chat.
- Foto profil pengguna (bingkai jauh, tampak duduk penuh) dan screenshot channel untuk hook subscribe.

## Alur kerja (wajib)
1. Parse transkrip, gabungkan potongan kalimat yang terpotong, simpan sebagai segmen [mulai, akhir, teks].
2. Olah suara: highpass 45 Hz, EQ +7 dB @90, +1,5 @170, -1,5 @2,8k, -1 @5,2k, -2,5 @7,5k, treble -1 @9k, deesser 0,3, acompressor 2,2, loudnorm -16 LUFS TP -1,5, mono 48 kHz.
3. Buat CONTOH 1 menit dulu. Jangan render penuh sebelum pengguna setuju.
4. Setelah setuju, render penuh, beri nama versi baru (jangan menimpa file lama).
5. Beri judul bagus, deskripsi ringkas padat, hashtag, dan cover.

## Gaya
- Format 1920x1080, 30 fps. Hook awal 3,6 detik: animasi kursor mengklik Subscribe di atas screenshot channel pengguna, loceng, confetti.
- Penjelasan (referensi v1): jendela browser UI dengan tiga titik, kartu, pill, toggle, bilah progres, daftar centang, notifikasi, kursor klik, subtitle putih dengan kata kunci oranye bergaris bawah. Tema jendela gelap dan terang bergantian.
- Animasi teks (referensi v2): kata besar kondens menghentak dan menimpa tepi jendela, tulisan tangan Caveat, coretan/lingkaran/panah yang digambar, neon, kartu miring, kata dicoret.
- Kamera: zoom perlahan, geser, getaran tangan, hentakan zoom di kata penting, transisi bergantian (geser cepat berkabur, zoom masuk, jatuh dari atas, kilat putih), vinyet dan butiran film.
- Foto pengguna kecil di pojok kanan atas, bingkai jauh. Tanpa karakter AI.
- Lafaz Arab ditampilkan dengan font Amiri atau mushaf asli (font QPC), bukan huruf Latin.
- Efek suara disintesis (pop, tick, ding, sparkle, hit, boom, whoosh, swipe, riser, swell), dicampur 0,55 di bawah suara.

## Teknik render
- Fungsi render(t) murni yang menghasilkan HTML/SVG; Playwright Chromium viewport 1280x720 dengan device_scale_factor 1,5; JPEG ke ffmpeg libx264 (veryfast, crf 18); dua proses paralel untuk dua bagian lalu concat dan mux AAC 192k.
- Waktu kata diperkirakan dari proporsi jumlah karakter per segmen; kata kunci per adegan ditarik dengan cue(segmen, regex).
- Font kondens Anton/Bebas tidak bisa diunduh; tiru dengan Plus Jakarta Sans 800 yang diskala (scaleX 0,62 dan scaleY 1,28).
- Hindari teks besar menimpa subtitle (subtitle di y 566-690 dari 720).
- Batas kirim file 500 MB: kecilkan dengan crf 23 dan maxrate 6M (sekitar 150 MB untuk 8 menit).

## Cover
- YouTube 16:9 1920x1080 di bawah 2 MB: judul besar (kata kunci emas), stempel merah, badge oranye, mushaf asli miring, empat ikon topik, tombol SUBSCRIBE, foto kecil jauh di pojok kanan atas.
- Reel 9:16 1080x1920: judul bertumpuk di atas, mushaf di tengah, subscribe di bawah, tanpa ikon topik.