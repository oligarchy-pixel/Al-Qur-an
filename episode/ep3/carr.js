const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1350}});
for(let s=1;s<=7;s++){await p.goto('file:///home/claude/proj3/carousel.html?s='+s);await p.waitForTimeout(700);await p.screenshot({path:'/tmp/claude-0/-home-user-Al-Qur-an/04f46f5c-82fc-5981-8a9a-e782a75b2548/scratchpad/Ep3_Dokumen/Carousel_Quotes_Ep3/Slide_0'+s+'.png'});}
await b.close();})();
