const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});await p.goto('file:///home/claude/covers/seri_ep1_arab.html?ep=01');await p.waitForTimeout(1200);
await p.screenshot({path:'/home/claude/covers/seri1_arab_hd.png'});await b.close();})();
