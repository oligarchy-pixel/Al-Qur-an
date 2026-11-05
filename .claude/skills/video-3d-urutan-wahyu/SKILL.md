---
name: video-3d-urutan-wahyu
description: "Bikin Reels 9:16 ±60 dtk @alurziyadahku gaya 'Urutan Wahyu 3D': hook paradoks + penghitung halaman mushaf, bloom cahaya emas, kaligrafi tergambar, kitab hitam bintang 8 sudut, cincin waktu 610-632 M dengan 114 batang surah yang tumbuh lalu disusun ulang, kartu kaca, kad follow. Pakai dari rekaman suara + transkrip bertimestamp."
---

# Video "Urutan Wahyu 3D" (seri @alurziyadahku)

Acuan lengkap: `referensi/urutan-wahyu-3d/` (README.md = blueprint, timeline.json = 18 adegan
bertimestamp, naskah.md = naskah asli + adaptasi, surah114.json = data 114 surah, stills/ = frame acuan).
Baca README.md dan lihat `stills/lembar-kontak/sheet_1-5.jpg` dulu sebelum mulai.

Gaya dan teknik saja yang diambil dari referensi. Jangan pakai logo, nama merek, UI aplikasi,
suara atau musik video referensi.

## Masukan
- Rekaman suara (mp3/wav) + transkrip bertimestamp dari pengguna. Kalau belum ada, tawarkan naskah
  `naskah.md` bagian B untuk direkam (±60 dtk).
- Bila suara perlu dibersihkan, pakai skill `rekaman-suara-kajian` dulu.

## Keluaran
- `Urutan_Wahyu_3D_v1.mp4` 1080x1920, 30 fps, ±60 dtk + kad follow 3 dtk. Jangan timpa versi lama.
- Tawarkan (jangan langsung buat) cover 9:16 dan caption.

## Pipeline (pakai kit yang sama dengan `video-sinematik-quran`)
1. Ekstrak `Kit_Kod_Video_alurziyadahku_v2_latar-bintang.zip` ke scratchpad/kit (minta pengguna melampirkan bila tidak ada).
2. Satu halaman HTML 720x1280 dengan `render(t)` murni (Canvas 2D atau Three.js dari cdnjs, versi dipatok),
   Playwright Chromium dsf 1.5 → PNG/pipe → ffmpeg libx264 crf 16, render 2 proses paralel, concat, mux.
3. Petakan setiap kalimat transkrip ke satu judul (lihat tabel `naskah.md`). Pergantian judul jatuh di jeda suara.
4. Still dulu (contact sheet 6-12 frame) → contoh 10 dtk bila perlu → render penuh setelah pengguna setuju.

## Adegan & komponen (lihat timeline.json untuk waktu acuan)
1. **Hook paradoks (0-6 dtk)**: mushaf terjilid 3D (buildSpreads/drawSpreads), balik halaman cepat bermotion blur,
   penghitung `HALAMAN n/604` bergulir 1→597 (ease-in-out, ikut whoosh). Angka jawaban berubah emas.
2. **Bloom-through**: zoom ke baris ayat yang disorot stabilo (hl) → glow emas radial membesar → layar krem
   `#FBEDCC` ±0.3 dtk → larut ke adegan berikut. SFX riser + boom lembut.
3. **Kaligrafi**: lafaz besar emas, stroke-draw (strokeDashoffset/progress path) 1 dtk lalu isi gradien + glow,
   ayat berharakat + terjemahan, siluet gunung bertepi emas + titik cahaya berlabel, sumber kecil di bawah.
4. **Mushaf → kitab**: lembaran terbang dalam pita spiral, tinggal kitab hitam bersampul bintang 8 sudut emas
   di atas piringan gelap + cincin dial ~120 tick.
5. **Cincin waktu 114 batang**: dari `surah114.json`. Sudut = urutan_turun; tinggi ∝ sqrt(ayat) (atau halaman);
   Makkiyah putih gading, Madaniyah emas-coklat. Bola cahaya memutari cincin, batang tumbuh di belakangnya;
   penghitung tahun 610→632 M; penanda HIJRAH 622 M; label مَكَّة / الْمَدِينَة atau MAKKAH / MADINAH.
6. **Kartu kaca**: rgba(20,18,14,.55), border 1px rgba(255,255,255,.12), radius 14, label emas kecil + kutipan ayat.
7. **Susun ulang**: interpolasi tiap batang dari sudut urutan_turun ke sudut nomor mushaf, plus lompatan
   parabola + rotasi acak, stagger 0-0.8 dtk, ease-out-back. Callout pil berganti ("ke-1 turun" → "ke-96 di mushaf"). SFX hit kecil berderet.
8. **Makro penempatan ayat**: kamera dekat ke batang tinggi, lempeng bercahaya turun dan masuk ke batang + kutipan atsar.
9. **Sapuan Ramadan**: gelombang cahaya memutari cincin menyalakan batang (1x, lalu 2x untuk "dua kali"). SFX sparkle.
10. **Penutup**: batang rebah seperti domino masuk ke kitab, kamera naik ke tampak atas sampul + orb cahaya;
    judul 2 baris rata tengah dengan 2 kata emas.
11. **Kad follow** (ganti CTA merek): "Jangan lupa follow ya @alurziyadahku" + pil Follow / Simpan / Kongsi.
    Animasi klik Subscribe & Follow di awal tetap dipakai (tools/subfollow) sesuai aturan seri.

## Gaya (wajib)
- Latar hitam hangat `#050506`→`#0C0906` + vignette + debu bintang. Emas hangat sahaja: `#E4C47B`, `#AF9A69`. Putih `#F0EEEC`.
- Judul: sans tebal, tracking rapat, 2 baris rata kiri (x≈28, y≈100-150 pada 720 lebar); kata kunci emas.
  Masuk/keluar: blur 8→0 px + fade + naik 6 px, 0.3 dtk.
- Label kecil: HURUF KAPITAL, tracking 0.12em, abu/emas, 9-10 px. Setiap klaim diberi sumber kecil (QS./Sahih al-Bukhari no.).
- Kamera tidak pernah diam; tanpa potongan keras, hanya gerak kontinu / bloom.
- Aturan seri: lafaz Arab berharakat (fon 'Sch'), gelar ditulis lengkap (Rasulullah sallallahu 'alaihi wa sallam,
  radhiyallahu 'anhu/'anhuma, 'alaihissalam). Hindari gambar makhluk bernyawa. Jangan pakai simbol ﷺ sebagai ganti tulisan lengkap.

## Audio
- Suara pengguna: rantai voicechain (EQ) → loudnorm. Untuk Reels gaya ini target -14 LUFS, TP -1 dBFS.
- Pad ambient lembut di bawah suara (atau tanpa musik bila pengguna minta), SFX dari sfx/lib sesuai peristiwa.
- Jujur: audio hanya diukur, belum didengar.

## Jebakan
- Fakta: wahyu terakhir 2:278 adalah pendapat Ibnu 'Abbas radhiyallahu 'anhuma; sebut sumbernya. Urutan turun di
  surah114.json adalah urutan Mesir/Al-Azhar, ada khilaf di beberapa surah.
- Proses render panjang: run_in_background, kill ikut PID, jangan render ganda. Kabar ringkas + ETA jujur (cek `date`).

## Mulai Ep2: engine berbasis config (WAJIB untuk episode baru)
Engine: `episode/ep2-engine/` (ep2.js + ep.json). Dari transkrip bertimestamp isi `ep.json`:
- `intro`: mushaf berjalan LAJU dan acak: `path: [[2.6, 499, 12], [3.7, 201, 6]]` = 1 → ±500 → balik ke ±200, lalu fokus ke halaman ayat yang dibahas (penghitung HALAMAN n/604).
- `ayahs[]`: setiap ayat yang dibahas → `{t: waktu ayat disebut, page: halaman Mushaf Madinah (quran-meta findPage), hl:['surah:ayat'], until, label:'QS. ...', trans:[terjemahan]}`.
  Halaman otomatis dibalik ke halaman ayat, kamera zoom ke ayat yang di-highlight.
- `points[]`: setiap poin (pertama, kedua, ...) → `{t, until, idx: bangunan 0-95 (beri jarak ±24), no:'01', kicker:'Poin pertama', title:[..], sub}`.
  Kamera zoom ke bangunan poin, bangunan naik + menyala, kartu nomor + judul poin muncul.
- `modes`: 'mushaf' saat membahas ayat, 'ring' saat membahas poin, 'follow' di akhir; pergantian = bloom emas.
- Foto profil (`profile.jpg`, bingkai lebar/"jauh") dipakai di kad Subscribe/Follow dan kad follow akhir.
