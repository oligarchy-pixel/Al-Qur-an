# Engine Ep1 "Urutan Wahyu 3D"

Halaman HTML 720x1280 dengan `window.renderFrame(t)` murni (Three.js + overlay Canvas 2D).

```bash
npm i three@0.170.0 quran-json@3.1.2 @fontsource/scheherazade-new@5.1.0
mkdir -p pub && cp index.html engine.js pages.json pub/ && cp node_modules/three/build/three.module.js pub/
cp node_modules/@fontsource/scheherazade-new/files/scheherazade-new-arabic-{400,700}-normal.woff2 pub/
cp ../../../referensi/urutan-wahyu-3d/surah114.json pub/
python3 mkpages.py                       # (opsional) bangun ulang pages.json
node shot.js stills st 0.8 5.3 22 37.5   # still (PNG 720x1280)
python3 sheet.py st sheet.jpg 5          # lembar kontak
node shot.js video out.mp4 0 1650 1.5    # video 1080x1920, 30 fps (tanpa suara)
```

Timing adegan ada di `engine.js` (TITLES, CAM, FWD/BWD, GROW0/1, sapuan). Saat rekaman suara masuk,
geser waktu ini mengikuti transkrip bertimestamp, lalu mux suara + SFX dengan ffmpeg.
