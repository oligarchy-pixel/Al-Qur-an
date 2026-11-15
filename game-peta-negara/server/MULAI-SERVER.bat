@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Menginstal paket pertama kali...
  call npm install
)
set /p TTUSER=Masukkan username TikTok kamu (tanpa @): 
node server.js %TTUSER%
pause
