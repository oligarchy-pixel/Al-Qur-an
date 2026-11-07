# pakai: CFG=ep3_doa.json OUT=Doa_EP3_FULL_v1.mp4 AUDIO=audio/mix_ep3.m4a CH=chunks3 bash render_ep.sh
cd "$(dirname "$0")"
export PAGE="ep2.html?cfg=$CFG"
TOTAL=5190; STEP=300; mkdir -p $CH
worker() {
  for ((s=$1*STEP; s<TOTAL; s+=3*STEP)); do
    e=$((s+STEP)); [ $e -gt $TOTAL ] && e=$TOTAL
    f=$CH/c_$(printf %05d $s).mp4
    [ -f "$f.ok" ] && continue
    node shot.js video "$f" $s $e 1.5 > $CH/log_$s.txt 2>&1 && touch "$f.ok"
  done
}
date
worker 0 & worker 1 & worker 2 & wait
echo "chunks ok: $(ls $CH/*.ok | wc -l)"
(cd $CH && ls c_*.mp4 | sort | sed "s/^/file /" > list.txt)
ffmpeg -v error -y -f concat -safe 0 -i $CH/list.txt -c copy $CH/video_noaudio.mp4
ffmpeg -v error -y -i $CH/video_noaudio.mp4 -i $AUDIO -map 0:v -map 1:a -c:v copy -c:a copy -movflags +faststart $OUT
date
ffprobe -v error -show_entries stream=codec_type,width,height,nb_frames:format=duration,size -of compact $OUT
