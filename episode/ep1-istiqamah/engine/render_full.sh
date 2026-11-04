set -e
date
PAGE=ist.html node shot.js video part1.mp4 0 1730 1.5 > r1.log 2>&1 &
P1=$!
PAGE=ist.html node shot.js video part2.mp4 1730 3460 1.5 > r2.log 2>&1 &
P2=$!
PAGE=ist.html node shot.js video part3.mp4 3460 5190 1.5 > r3.log 2>&1 &
P3=$!
wait $P1 $P2 $P3
printf "file part1.mp4\nfile part2.mp4\nfile part3.mp4\n" > parts.txt
ffmpeg -v error -y -f concat -safe 0 -i parts.txt -c copy video_noaudio.mp4
ffmpeg -v error -y -i video_noaudio.mp4 -i audio/mix.m4a -map 0:v -map 1:a -c:v copy -c:a copy -movflags +faststart Istiqamah_EP1_FULL_v1.mp4
date
ffprobe -v error -show_entries stream=codec_type,width,height,nb_frames:format=duration,size -of compact Istiqamah_EP1_FULL_v1.mp4
