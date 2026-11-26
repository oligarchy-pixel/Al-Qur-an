#!/usr/bin/env bash
set -euo pipefail
cd /home/claude/proj27

D=596.82
FADE_AUDIO=595.42
FADE_VIDEO=595.42
OUT_DIR=/home/claude/proj27/out/Ep27_Dokumen
mkdir -p out/full "$OUT_DIR"

# Ambil seluruh SFX deterministik dari timeline. BK=0 menghapus bed/musik/dengung.
node render.js sfx out/sfx_ep27.json
BK=0 FK=1 python3 sfx_split.py "$D" out/fxonly_ep27.wav out/sfx_ep27.json

# Render gambar sekali sebagai rentang 30 detik, paling banyak empat proses bersamaan.
mapfile -t RANGES < <(python3 - <<'PY'
D=596.82
start=0.0
while start < D-1e-9:
    end=min(start+30.0,D)
    print(f'{start:.3f} {end:.3f}')
    start=end
PY
)
PIDS=()
for i in "${!RANGES[@]}"; do
  read -r A B <<< "${RANGES[$i]}"
  printf -v F 'out/full/c%02d.mp4' "$i"
  node render.js vid "$A" "$B" "$F" >"out/full/c$(printf '%02d' "$i").log" 2>&1 &
  PIDS+=("$!")
  if (( ${#PIDS[@]} == 4 )); then
    for PID in "${PIDS[@]}"; do wait "$PID"; done
    PIDS=()
  fi
done
for PID in "${PIDS[@]}"; do wait "$PID"; done

printf '%s\n' out/full/c*.mp4 | sort | sed 's#^#file #; s#^file out/full/#file #' > out/full/list.txt
(cd out/full && ffmpeg -v error -y -f concat -safe 0 -i list.txt -c copy v.mp4)

# Audio asli + SFX saja. Tidak ada musik atau ambience.
ffmpeg -v error -y -i ep27.mp3 -i out/fxonly_ep27.wav \
  -filter_complex "[0:a]loudnorm=I=-15:TP=-1.5:LRA=11,aresample=44100,aformat=channel_layouts=stereo[v];[1:a]volume=1.6[f];[v][f]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.84:level=0:attack=5:release=50,afade=t=out:st=${FADE_AUDIO}:d=1.4[a]" \
  -map "[a]" -c:a aac -b:a 192k out/a_ep27.m4a

ffmpeg -v error -y -i out/full/v.mp4 -i out/a_ep27.m4a \
  -map 0:v -map 1:a -vf "fade=t=out:st=${FADE_VIDEO}:d=1.4" \
  -c:v libx264 -preset medium -crf 27 -tune grain -pix_fmt yuv420p \
  -c:a copy -shortest -movflags +faststart \
  "$OUT_DIR/FINAL_Ep27_Lima_Ayat_An_Nisa_HD.mp4"

echo "SELESAI: $OUT_DIR/FINAL_Ep27_Lima_Ayat_An_Nisa_HD.mp4"
