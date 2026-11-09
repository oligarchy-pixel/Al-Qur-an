const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1350}});await p.goto('file:///home/claude/proj3/carousel.html?s=8');await p.waitForTimeout(800);await p.screenshot({path:'/home/claude/proj3/one.png'});await b.close();})();
