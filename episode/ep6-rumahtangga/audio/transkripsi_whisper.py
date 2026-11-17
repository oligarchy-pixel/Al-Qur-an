import sys, subprocess, numpy as np
from faster_whisper import WhisperModel
m = WhisperModel(sys.argv[1], device="cpu", compute_type="int8")
pcm = subprocess.run(["ffmpeg","-v","error","-i",sys.argv[2],"-ac","1","-ar","16000","-f","f32le","-"],capture_output=True).stdout
aud = np.frombuffer(pcm, np.float32)
segs, info = m.transcribe(aud, language="ms", vad_filter=True, beam_size=5,
    initial_prompt="Kajian Al-Quran. Surah Al-Baqarah, nusyuz, khulu', riba, Allah subhanahu wa ta'ala, Rasulullah.")
for s in segs: print(f"[{s.start:06.1f}–{s.end:06.1f}] {s.text.strip()}", flush=True)
