(()=>{"use strict";addEventListener("fetch",(e=>{e.respondWith(async function(e){const s=e.url,c=new URL(s),i=c.href.substr(c.origin.length),a=s.split("/")[2];switch(t(i)){case"/":const t=`<li class="current">\n    <a href="#0">\n        <img src="https://cdn.jsdelivr.net/npm/chenyfan-acg-pic@0.0.11/166.jpg" alt="project image">\n        <div class="project-info">\n            <h2>ALL FILES IN OUR CLOUD</h2>\n            <p>右边是别人愿意共享出来的图片</p>\n        </div>\n    </a>\n</li>${(()=>{const t=KV.get("PHOTOSHARE",{type:"json"});let e="";for(var s of t)e+='<li> <a href="#0"> <img hash="\x3c!--HASH--\x3e" data-src="\x3c!--URL--\x3e" src="https://ipfs.cyfan.top/ipfs/QmQDMMVwfeXbia2UwTuqbBtDV24eVzqbcFogFngKkfj4Dv" alt="project image " style="margin:0 auto;max-height:40vh;width:unset"> <div class="project-info"> <h2></h2> <p></p> </div> </a> </li>'.replace(/<!--HASH-->/g,`https://${a}/get?hash=${s.hash}`);return e})()}`;return"html"==(n={ctx:'<!doctype html> <html lang="zh" class="no-js"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> <meta name="viewport" content="width=device-width,initial-scale=1"> <title>IPFS PHOTO SHARE</title> <link href="https://fonts.geekzu.org/css?family=Source+Sans+Pro:400,300,700,400italic" rel="stylesheet"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChenYFan-Tester/ipfscloud/css/style.css"> <script src="https://cdn.jsdelivr.net/gh/ChenYFan-Tester/ipfscloud/js/modernizr.js"><\/script> </head> <body> <div style="position:fixed;top:0;left:0;width:100%;height:100%;min-width:1000px;z-index:-10;zoom:1;background-color:#fff;background-repeat:no-repeat;background-size:cover;-webkit-background-size:cover;-o-background-size:cover;background-position:center 0;background-image:url(https://api.cyfan.top/acg?type=bg&restype=cdn)"></div> <div class="cd-intro-block"> <div class="content-wrapper"> <div class="htmleaf-header"> <h1>IPFS PHOTO SHARE <span>最大100MB · 无限制 · 开放 · 共享的图片分享</span></h1> <a class="cd-btn">上传文件</a> </div> <a href="javascript:void(0)" data-action="show-projects">查看分享</a> </div> </div> <div class="cd-projects-wrapper"> <ul class="cd-slider"> </ul> <ul class="cd-slider-navigation cd-img-replace"> <li><a href="#0" class="prev inactive">上一个</a></li> <li><a href="#0" class="next">下一个</a></li> </ul> </div> <script src="https://cdn.jsdelivr.net/npm/jquery@2.1.1"><\/script> <script src="https://cdn.jsdelivr.net/gh/ChenYFan-Tester/ipfscloud/js/jquery.mobile.custom.min.js"><\/script> <script src="https://cdn.jsdelivr.net/gh/ChenYFan-Tester/ipfscloud/js/main.js"><\/script> </body> </html>'.replace(/<ul class="cd-slider">/g,`<ul class="cd-slider">${t}`),type:"html"}).type?new Response(n.ctx,{status:n.status?n.status:200,headers:{"Content-Type":"text/html; charset=utf-8"}}):(n.type="json")?new Response(JSON.stringify({ctx:n.ctx,status:0===n.status?0:n.status,msg:n.msg?n.msg:"没有额外的消息",timestmp:(new Date).valueOf()}),{status:n.status?n.status:200,headers:{"Content-Type":"text/html; charset=utf-8"}}):new Response(n.ctx)}var n}(e.request))}));const t=t=>t.split("?")[0]})();