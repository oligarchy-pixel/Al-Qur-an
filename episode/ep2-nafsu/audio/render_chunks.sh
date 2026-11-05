# render tahan restart: potongan 300 frame, yang sudah lengkap dilewati
cd "$(dirname "$0")"
export PAGE="ep2.html?cfg=ep2_nafsu.json"
TOTAL=5190; STEP=300
worker() {
  for ((s=$1*STEP; s<TOTAL; s+=3*STEP)); do
    e=$((s+STEP)); [ $e -gt $TOTAL ] && e=$TOTAL
    f=chunks/c_$(printf %05d $s).mp4
    if [ -f "$f.ok" ]; then continue; fi
    node shot.js video "$f" $s $e 1.5 > chunks/log_$s.txt 2>&1 && touch "$f.ok"
  done
}
date
worker 0 & worker 1 & worker 2 & wait
n=$(ls chunks/*.ok | wc -l); echo "chunks ok: $n"
ls chunks/c_*.mp4 | sort | sed 's/^/file /' > chunks/list.txt
ffmpeg -v error -y -f concat -safe 0 -i chunks/list.txt -c copy video_ep2_noaudio.mp4
ffmpeg -v error -y -i video_ep2_noaudio.mp4 -i audio/mix_ep2.m4a -map 0:v -map 1:a -c:v copy -c:a copy -movflags +faststart Nafsu_EP2_FULL_v1.mp4
date
ffprobe -v error -show_entries stream=codec_type,width,height,nb_frames:format=duration,size -of compact Nafsu_EP2_FULL_v1.mp4
