# Blueprint video referensi: "Urutan Wahyu 3D" (Reels 9:16, 59 dtk)

Hasil bedah video referensi: struktur, aset, gaya visual, animasi, transisi, audio, dan cara
membangunnya ulang dengan kit render @alurziyadahku (HTML `render(t)`, Playwright, ffmpeg).

> **Penting soal hak cipta:** video referensi ini iklan aplikasi Qur'an pihak lain. Yang kita ambil
> adalah **teknik, struktur dan gaya**. Logo, nama merek, UI aplikasi, suara narator dan musiknya
> **tidak** dipakai ulang. Semua aset untuk video kita dibuat sendiri (mushaf QPC, kitab 3D,
> batang surah, suara pengguna).

## Isi folder

| Path | Isi |
|---|---|
| `surah114.json` | Data 114 surah: nama, jumlah ayat, halaman mulai (Mushaf Madinah), Makkiyah/Madaniyah, urutan turun (sudah divalidasi) |
| `timeline.json` | 18 adegan dengan waktu mulai/selesai, judul, kata emas, visual, widget, sumber di layar, data teknis & palet |
| `naskah.md` | Naskah asli (rekonstruksi dari teks layar) + adaptasi Melayu/Indonesia gaya @alurziyadahku |
| `stills/per-detik/` | 59 frame (1 per detik, 360 px), `detik_00.jpg` s/d `detik_58.jpg` |
| `stills/kunci/` | 15 frame resolusi penuh 720x1280 di momen kunci (`t_005.5.jpg` = detik 5.5) |
| `stills/lembar-kontak/` | `sheet_1-5.jpg` (12 frame per lembar), `transisi_bloom.png`, `spektrogram_audio.png` |
| `../../.claude/skills/video-3d-urutan-wahyu/SKILL.md` | Skill/perintah siap pakai untuk membuat episode bergaya ini |

## 1. Data teknis

- 720x1280, 30 fps, 59.0 dtk, H.264 ~1.15 Mbps; audio AAC 44.1 kHz stereo.
- Loudness **-14.1 LUFS** terintegrasi, LRA 3.1 LU (sangat rata, dikompres), true peak -0.9 dBFS.
- Audio: narasi bahasa Inggris + pad musik bernada panjang (terlihat sebagai garis horizontal
  0.4-2 kHz di spektrogram). Jeda narasi: 14.5, 20.2, 27.1, 29.5, 31.8, 40.9, 54.8, 58.2 dtk.
  Setiap jeda jatuh tepat sebelum judul berganti, jadi **judul = kalimat narasi**.
- Tidak ada potongan keras (hard cut). Semua perpindahan adalah gerak kamera kontinu atau bloom cahaya.
- Audio hanya diukur, belum didengar. Transkripsi otomatis tidak bisa jalan (model Whisper tidak
  dapat diunduh di lingkungan ini).

## 2. Struktur cerita (18 adegan, 4 babak)

| Babak | Waktu | Inti |
|---|---|---|
| **Hook: paradoks** | 0-6 dtk | "Wahyu pertama bukan di halaman 1" → penghitung halaman bergulir ke 597 |
| **Bukti** | 6-18 dtk | Iqra' di Gua Hira (96:1) → wahyu terakhir di halaman 47 (2:278) → "Lalu kenapa tidak urut?" |
| **Penjelasan visual** | 18-47 dtk | Kitab pecah jadi 114 batang di cincin waktu 610-632 M → susun ulang ke urutan mushaf → penempatan oleh Nabi → muraja'ah Jibril setiap Ramadan, dua kali di tahun terakhir |
| **Penutup + CTA** | 47-59 dtk | "Diturunkan untuk saatnya. Disusun untuk sepanjang masa." → HP/aplikasi → ajakan komentar |

Pola hook: **pernyataan yang bertentangan dengan asumsi + angka konkret** ("bukan halaman 1" → "597").
Setiap klaim diberi **sumber kecil di layar** (QURAN 96:1 · SAHIH AL-BUKHARI 3), dan itulah yang membuatnya terasa kredibel.

Detail per adegan ada di `timeline.json`.

## 3. Sistem visual

### Palet
| Peran | Warna |
|---|---|
| Latar | hitam hangat `#050506` → `#0C0906`, vignette, debu bintang putih kecil yang berkedip pelan |
| Teks utama | putih `#EBEBED`-`#F3F2F0` |
| Aksen emas (kata kunci, angka penting) | `#E4C47B` terang, `#AF9A69` redup |
| Kertas mushaf | krem `#FBEDCC`, bingkai halaman emas pucat |
| Label kecil | abu `~#7A7A7A` atau emas, HURUF KAPITAL, tracking lebar (~0.12em), 9-10 px |
| Makkiyah / Madaniyah | batang putih gading / batang emas-coklat gelap |

Hanya emas hangat. Tidak ada biru atau ungu, sesuai aturan seri Anda.

### Tipografi
- **Judul**: sans grotesk tebal (gaya SF Pro Display/Inter Semibold), ~30 px pada 720 lebar,
  tracking rapat (-0.02em), 2 baris, **rata kiri di x≈28, y≈100-150**. Baris ke-2 sering berisi kata emas.
  Penutup (adegan 16) rata tengah.
- **Masuk/keluar judul**: blur 8→0 px + opacity 0→1 + naik 6 px, ~0.3 dtk (keluar kebalikannya).
  Antar judul ada jeda kosong 0.3-1 dtk (terlihat sebagai frame blur di lembar kontak).
- **Penghitung**: label `PAGE` kecil di atas, angka besar ~64 px putih, akhiran `/604` atau `CE` kecil abu
  di kanan bawah angka. Angka bergulir (count-up/down) mengikuti balikan halaman; angka "jawaban" berubah emas.
- **Arab**: kaligrafi besar emas dengan efek garis-luar-lalu-isi + glow; ayat berharakat di bawahnya.

### Komponen yang perlu dibangun
1. **Mushaf 3D terjilid**: dua halaman, punggung tengah, tebal kertas, balik halaman cepat bermotion blur,
   zoom ke baris, sorot stabilo kuning bercahaya per baris. Kit Anda sudah punya: `buildSpreads/drawSpreads` + `hl`.
2. **Penghitung halaman/tahun** dengan count-up dan kata emas.
3. **Adegan kaligrafi**: stroke-draw lalu fill, siluet gunung bergaris emas, titik cahaya berlabel kecil.
4. **Kitab hitam bersampul bintang 8 sudut emas** (rub el hizb), bingkai garis emas, di atas piringan gelap.
5. **Cincin waktu**: dial dengan ~120 tick, label tahun (610 CE, HIJRAH 622 CE, 632 CE), label tempat (MAKKAH/MADINAH).
6. **114 batang surah 3D** melingkar: tinggi ∝ jumlah ayat/halaman, warna Makkiyah/Madaniyah, tumbuh
   berurutan menurut **urutan turun** sementara bola cahaya berjalan memutari cincin.
7. **Animasi susun ulang**: batang terlempar dan berjungkir ke posisi **urutan mushaf** (interpolasi posisi
   sudut + rotasi acak + easing), callout pil berganti teks ("1st revealed" → "96th in the mushaf").
8. **Makro "penempatan ayat"**: lempeng bercahaya turun dan masuk ke batang + kutipan atsar.
9. **Sapuan Ramadan**: cahaya mengelilingi cincin dan menyalakan batang (1x, lalu 2x).
10. **Kartu kaca**: persegi bulat gelap transparan, garis tepi 1 px putih 12%, label emas kecil + kutipan ayat.
11. **Lipat penutup**: batang rebah seperti domino masuk ke kitab → tampak atas sampul + orb cahaya.
12. **Kad akhir** (ganti CTA merek dengan kad follow @alurziyadahku).

### Kamera & transisi
- Kamera selalu bergerak pelan (dolly/orbit), tidak pernah diam total.
- **Bloom-through**: kamera mendorong ke baris yang disorot → glow emas membesar → layar krem penuh
  (~0.3 dtk) → larut ke adegan baru. Dipakai 2x (6.0 dtk masuk, 10.4 dtk keluar). Lihat `stills/lembar-kontak/transisi_bloom.png`.
- **Mushaf → kitab 3D**: lembaran terbang membentuk pita spiral (18-20 dtk); dunia mushaf berubah jadi data-viz.
- **Pull-back/push-in** antara makro batang dan cincin penuh (34.8 & 40.1 dtk).
- **Tampak atas**: pada penutup kamera naik ke atas kitab.

## 4. Audio
- Narasi tenang, padat, kalimat pendek 2-6 kata; tiap kalimat = satu judul.
- Musik pad ambient (akord panjang) di bawah narasi, ikut turun saat jeda.
- Target master seperti referensi: **-14 LUFS, true peak ≤ -1 dBFS** untuk Reels.
  (Kit Anda memakai -16 LUFS; untuk Reels pendek gaya ini boleh dinaikkan ke -14.)
- SFX yang cocok dari pustaka Anda: whoosh (balik halaman cepat), riser + boom lembut (bloom),
  tick (penghitung), sparkle (sorot ayat / sapuan Ramadan), hit kecil (batang mendarat saat susun ulang).

## 5. Fakta & sumber yang dipakai referensi (cek ulang sebelum dipakai)
- Wahyu pertama: Al-'Alaq 96:1-5, Mushaf Madinah **halaman 597**. Sahih al-Bukhari no. 3.
- Wahyu terakhir: ayat riba 2:278 menurut Ibnu 'Abbas radhiyallahu 'anhuma, **halaman 47**. Sahih al-Bukhari no. 4544.
  (Ada pendapat lain, misalnya 2:281. Sebutkan "menurut Ibnu 'Abbas".)
- Turun berangsur-angsur untuk meneguhkan hati: Al-Furqan 25:32.
- Al-Fatihah: surah ke-5 yang turun menurut sebagian riwayat urutan nuzul, ke-1 di mushaf. Al-'Alaq: ke-1 turun, ke-96 di mushaf.
- 'Utsman radhiyallahu 'anhu: "Aku tidak akan memindahkan sesuatu pun darinya dari tempatnya" (Sahih al-Bukhari, kitab Tafsir, tentang ayat Al-Baqarah).
- Jibril 'alaihissalam memuraja'ah Al-Qur'an bersama Rasulullah sallallahu 'alaihi wa sallam setiap Ramadan, dua kali di tahun wafatnya. Sahih al-Bukhari no. 4998.
- Rentang waktu: 610-632 M (23 tahun), Hijrah 622 M.
