const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:2});
await p.goto('file:///home/claude/covers/short_cover.html');await p.waitForTimeout(1200);
await p.screenshot({path:'/home/claude/covers/short_ep2_cover.png'});await b.close();})();
