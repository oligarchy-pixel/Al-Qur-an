# Mengenal Al-Qur'an · @alurziyadahku — Arsip Produksi

Semua skill, aturan, prompt, kode, dan aset untuk membuat video kajian seri **Mengenal Al-Qur'an** (Ep1–Ep13 dan seterusnya).
Untuk episode baru: kirim **MP3 + transkrip bertimestamp**, lalu minta "lanjut ep14 sampai final". Claude membaca folder ini dan `PROMPT_DAN_ATURAN.md`.

## Isi folder

| Folder | Isi |
|---|---|
| `PROMPT_DAN_ATURAN.md` | **Semua aturan tetap + riwayat permintaan pengguna.** Baca ini dulu. |
| `skills/` | 5 skill: `video-kajian-dokumen-investigasi` (gaya utama Ep2–Ep9), `video-sinematik-quran`, `video-tulis-tangan-quran`, `video-youtube-kinetik-ui`, `rekaman-suara-kajian`. |
| `kit/engine/` | Mesin video terbaru (versi Ep11, termasuk `ref.js`): `index.html`, `engine.js`, `codes.js`, `helpers.js`, `render.js`, `sfx.py`, `full.sh`, `overlap.js`, `user_photo.jpg`. |
| `kit/shared/` | `overlap.js` (cek tabrakan teks), `cap_shamela.js` / `shamela.js` (verifikasi sumber, belakang layar saja). |
| `kit/covers/` | Template cover: `cover_ep.html` (dosier lama, config per episode), `seri_latin_peny.html` (post seri IG PENYAMPAI), `cover_new.html`, `islamic.html`, `vlog*.html`, `air.html`, `kucing.html`, `hitam_ar.html`, `seri_*.html` + skrip `shot*.js` + `bg/`. |
| `kit/fonts/` | Amiri, Kalam, Bebas Neue. |
| `kit/toolkit_tulis_tangan/`, `kit/toolkit_sinematik/` | Kit skill gaya lain (tulisan tangan, sinematik). |
| `episode/ep2` … `episode/ep13` | Naskah adegan tiap episode (`epN.js`) + konfigurasi render — contoh untuk episode berikutnya. |
| `transkrip/` | Semua transkrip yang pernah dikirim. |
| `hasil/` | Semua cover, thumbnail, post IG, caption yang sudah jadi (tanpa video/MP3 karena ukurannya besar). |

## Cara membuat episode baru (ringkas)

```bash
mkdir -p /home/claude/proj10 && cp kit/engine/* /home/claude/proj10/ && cp -r kit/fonts /home/claude/fonts
cd /home/claude/proj10 && cp <rekaman>.mp3 ep10.mp3
# 1. engine.js: TOTAL = <durasi mp3>; judul tab "Kajian · <topik>"
# 2. index.html: <script src="ep10.js">; HUD "FILE 10 · <topik arab>"
# 3. helpers.js: FILE N° 10
# 4. full.sh: folder proj10, D=<durasi>, ep10.mp3, afade st=<durasi-1.5>, Ep10_Dokumen, nama output baru
# 5. tulis ep10.js (lihat episode/ep9/ep9.js sebagai contoh), 20–30 kode visual, sinkron kata per kata
node -e "new Function(['codes.js','helpers.js','ep10.js'].map(f=>require('fs').readFileSync(f,'utf8')).join(''))"
node overlap.js 0 150 0.5 > ov1.txt & node overlap.js 150.5 300 0.5 > ov2.txt & node overlap.js 300.5 450 0.5 > ov3.txt & node overlap.js 450.5 <END> 0.5 > ov4.txt & wait; cat ov?.txt   # HARUS kosong
node render.js preview 5,30,60,... pv     # cek visual
bash full.sh                               # render final
```

Cover: tambahkan config `'10'` di `kit/covers/cover_ep.html`, lalu `sed "s/\['9'\]/['10']/" shot9.js > shot10.js && node shot10.js`.
Post seri IG: `sed "s/\['09','PERBANYAKLAH','BERTAUBAT.'\]/['10','JUDUL','BARIS2.']/" shot_peny9.js > shot_peny10.js && node shot_peny10.js`.
