#!/bin/bash
# Render penuh Ep15 — audio TANPA dengungan (hanya suara + SFX)
cd /home/claude/proj15
mkdir -p out/full
D=593.7
node render.js sfx out/sfx.json
BK=0 FK=1 python3 sfx_split.py $D out/fxonly.wav out/sfx.json
segs=(); t=0; while (( $(echo "$t < $D" | bc) )); do e=$(echo "$t+30" | bc); if (( $(echo "$e > $D" | bc) )); then e=$D; fi; segs+=("$t $e"); t=$e; done
i=0; for s in "${segs[@]}"; do set -- $s; f=$(printf "out/full/c%02d.mp4" $i); node render.js vid $1 $2 $f > /dev/null 2>&1 & i=$((i+1)); if (( i % 4 == 0 )); then wait; fi; done; wait
ls out/full/c*.mp4 | sort | sed 's#out/full/#file #' > out/full/list.txt
cd out/full && ffmpeg -v error -y -f concat -i list.txt -c copy v.mp4
ffmpeg -v error -y -i ../../ep15.mp3 -i ../fxonly.wav -filter_complex "[0:a]loudnorm=I=-15:TP=-1.5:LRA=11,aresample=44100,aformat=channel_layouts=stereo[v];[1:a]volume=1.6[f];[v][f]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.84:level=0:attack=5:release=50,afade=t=out:st=592.2:d=1.4[a]" -map "[a]" -c:a aac -b:a 192k a.m4a
O=/tmp/claude-0/-home-user-Al-Qur-an/04f46f5c-82fc-5981-8a9a-e782a75b2548/scratchpad/Ep15_Dokumen; mkdir -p $O
ffmpeg -v error -y -i v.mp4 -i a.m4a -map 0:v -map 1:a -c:v libx264 -preset medium -crf 27 -tune grain -pix_fmt yuv420p -c:a copy -shortest -movflags +faststart $O/FINAL_Ep15_Riba_Khulu_Adab_Bermasyarakat_FULL_HD.mp4
echo SELESAI
