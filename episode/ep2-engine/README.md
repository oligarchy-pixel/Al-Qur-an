# Engine Ep2: mushaf otomatis + bangunan poin

Digerakkan sepenuhnya oleh `ep.json` (contoh demo memakai isi Ep1). Untuk episode baru cukup isi config dari transkrip.

## Mekanisme
- **Mushaf berjalan (laju, acak)**: `intro {t0, path:[[t_selesai, halaman, jumlah_balikan], ...]}`. Standar Ep2: `[[2.6, 499, 12], [3.7, 201, 6]]` = halaman acak 1 → ±500 (±0,17 dtk/balikan), mundur ke ±200, lalu langsung ke halaman ayat pertama.
- **Ayat otomatis**: tiap entri `ayahs[] {t, page, hl:['s:a'], until, label, trans[]}` → halaman otomatis dibalik
  dari halaman sekarang ke `page` (jumlah balikan menyesuaikan jarak), lalu kamera zoom ke baris ayat yang di-highlight,
  label sumber + kartu terjemahan muncul. Halaman tepat Mushaf Madinah (data `quran-meta`, `mkpages_all.mjs` → `pages_all.json`).
- **Bangunan poin**: 96 bangunan (gading bersudut bulat + perunggu bertepi emas) melingkari kitab. Tiap `points[] {t, until, idx, no, kicker, title[], sub}`
  → kamera terbang ke bangunan `idx` (sudut rendah, bangunan di kanan frame, orb cahaya), bangunan naik + puncak menyala,
  kartu besar "01 / judul poin" muncul. Bangunan poin yang sudah dibahas tetap menyala.
- **Mode** `modes [[t,'mushaf'|'ring'|'follow']]`: tiap pergantian mode = transisi bloom emas.
- `titles`, `labels`, `cards` sama formatnya dengan Ep1; `follow` = waktu kad follow (bangunan terlipat ke kitab).

## Jalankan (dari folder engine Ep1, dengan pub/ berisi ep2.js, ep2.html, ep.json, pages_all.json, addons/, profile.jpg)
`PAGE=ep2.html node shot.js stills st 1 10 20` · `PAGE=ep2.html node shot.js video out.mp4 0 <frames> 1.5`
