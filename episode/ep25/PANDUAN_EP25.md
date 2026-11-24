# Panduan Ep25 — Mengenal Al-Qur'an (@alurziyadahku)

Disalin dari standar Ep24 (cabang `claude/greeting-c94nj2`, repo `oligarchy-pixel/Al-Qur-an`).
Aturan lengkap: `~/oligarki/PROMPT_DAN_ATURAN.md` + `~/oligarki/skills/`.

## Bahan yang dibutuhkan dari pengguna
1. MP3 rekaman Ep25
2. Transkrip bertimestamp (boleh per detik)

## Standar yang dipakai (sama dengan Ep24)
- 16:9, 1920×1080, 30 fps, crf 27, tune grain. Latar hitam + kuning `#e9f23a`, tanpa abu-abu.
- Gaya Ep10 2D + `ref.js` (bar bab di atas tengah, latar astrolab samar, garis bercahaya hanya pada ilustrasi garis). Tanpa 3D.
- 20–30 kode visual, minimal ±18 dari daftar sepakat; visual baru tiap 2–4 dtk, sinkron kata per kata.
- Dilarang: /scene-illustration /cartoon-diagram /chalkboard /world-map /coin-dial.
- 1–2 tab pencarian "◆ pustaka kitab" (Gading & Emas, 5 rak, 4 hasil, rincian 7 poin, camTour). Nama Syamilah tidak tampil.
- Ucapan penyampai tidak dikoreksi di layar; derajat hadis ditampilkan; hasil cek sumber dilaporkan di chat.
- Pembuka polaroid PENYAMPAI; penutup polaroid + avatar + @alurziyadahku + SUBSCRIBE → SUBSCRIBED ✓.
- Nabi/sahabat/Maryam tidak digambar.
- Audio: suara loudnorm I=-15, TP=-1.5 + SFX (fxonly) × 1.6 + alimiter 0.84, TANPA musik latar/dengungan.
- `overlap.js` seluruh durasi = 0 baris + cek foto preview; tidak ada layar kosong > 2 dtk.

## Yang diubah untuk Ep25
| File | Ubah |
|---|---|
| `engine.js` | `TOTAL = <durasi mp3>`; judul tab "Kajian · <topik>" |
| `index.html` | `<script src="ep25.js">`; HUD "FILE 25 · <topik Arab>" |
| `helpers.js` | `FILE N° 25` di polaroid |
| `ref.js` | judul bar bab + 6–8 segmen bab `CH` + rentang `GLOW` sesuai transkrip |
| `full.sh` | folder proj25, `D=<durasi>`, `ep25.mp3`, `afade st=<durasi-1.5>`, output `FINAL_Ep25_<Judul>_FULL_HD.mp4` |
| `ep25.js` | naskah adegan baru (contoh: `ep24.js`) |
| Cover | config `'25'` di `/home/claude/covers/cover_ep.html`, `shot25.js`, `shot_peny25.js` (judul 2 baris) |

## Urutan kerja
1. Cek durasi MP3 → cek sumber semua hadis/atsar.
2. (Opsional) sheet-by-sheet + foto storyboard bila diminta "jangan render dulu".
3. Tulis `ep25.js` → cek sintaks → `overlap.js` 4 paralel → preview.
4. `bash full.sh` → cek durasi/volume/frame.
5. Cover dosier YT + Reel, post seri IG, caption SEO (judul kata kunci | …, hook, ✅ poin + sumber, AAMIIN, 5 hashtag `#fyp #islam #kajianislam #<topik> #mengenalalquran`, 6–8 tag YouTube).
6. Simpan ke repo: `episode/ep25`, `hasil/Ep25_Dokumen`, `transkrip/`, riwayat di PROMPT_DAN_ATURAN.md, video ke cabang `arsip-video`.

## Konteks lanjutan
Ep24 (9:34) membahas Surah An-Nisa: 5 ayat emas, ayat 31, definisi dan 6 tanda dosa besar, zina/mencuri/qadzf/membunuh, 8 golongan, taubat; ditutup "insya Allah di lain kesempatan kita akan melanjutkan kembali".
