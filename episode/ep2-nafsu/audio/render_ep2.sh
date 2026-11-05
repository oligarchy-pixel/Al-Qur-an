set -e
date
export PAGE="ep2.html?cfg=ep2_nafsu.json"
node shot.js video q1.mp4 0 1730 1.5 > q1.log 2>&1 &
P1=$!
node shot.js video q2.mp4 1730 3460 1.5 > q2.log 2>&1 &
P2=$!
node shot.js video q3.mp4 3460 5190 1.5 > q3.log 2>&1 &
P3=$!
wait $P1 $P2 $P3
printf "file q1.mp4\nfile q2.mp4\nfile q3.mp4\n" > q.txt
ffmpeg -v error -y -f concat -safe 0 -i q.txt -c copy video_ep2_noaudio.mp4
ffmpeg -v error -y -i video_ep2_noaudio.mp4 -i audio/mix_ep2.m4a -map 0:v -map 1:a -c:v copy -c:a copy -movflags +faststart Nafsu_EP2_FULL_v1.mp4
date
ffprobe -v error -show_entries stream=codec_type,width,height,nb_frames:format=duration,size -of compact Nafsu_EP2_FULL_v1.mp4
