parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OmCM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sceneInfo=void 0,exports.sceneInfo=[{type:"sticky",heightNum:5,scrollHeight:0,objs:{container:document.querySelector("#scroll-section-0"),messageA:document.querySelector("#scroll-section-0 .main-message.a"),messageB:document.querySelector("#scroll-section-0 .main-message.b"),messageC:document.querySelector("#scroll-section-0 .main-message.c"),messageD:document.querySelector("#scroll-section-0 .main-message.d"),canvas:document.querySelector("#video-canvas-0"),context:document.querySelector("#video-canvas-0").getContext("2d"),videoImages:[]},values:{videoImageCount:181,imageSequence:{in:0,out:180,start:0,end:1},canvas_opacity:{in:1,out:0,start:.9,end:1},messageA_opacity_in:{in:0,out:1,start:.1,end:.2},messageA_opacity_out:{in:1,out:0,start:.25,end:.3},messageA_translateY_in:{in:20,out:0,start:.1,end:.2},messageA_translateY_out:{in:0,out:-20,start:.25,end:.3},messageB_opacity_in:{in:0,out:1,start:.3,end:.4},messageB_opacity_out:{in:1,out:0,start:.45,end:.5},messageB_translateY_in:{in:20,out:0,start:.3,end:.4},messageB_translateY_out:{in:0,out:-20,start:.45,end:.5},messageC_opacity_in:{in:0,out:1,start:.5,end:.6},messageC_opacity_out:{in:1,out:0,start:.65,end:.7},messageC_translateY_in:{in:20,out:0,start:.5,end:.6},messageC_translateY_out:{in:0,out:-20,start:.65,end:.7},messageD_opacity_in:{in:0,out:1,start:.7,end:.8},messageD_opacity_out:{in:1,out:0,start:.85,end:.9},messageD_translateY_in:{in:20,out:0,start:.7,end:.8},messageD_translateY_out:{in:0,out:-20,start:.85,end:.9}}},{type:"normal",heightNum:5,scrollHeight:0,objs:{container:document.querySelector("#scroll-section-1")},values:null},{type:"sticky",heightNum:5,scrollHeight:0,objs:{container:document.querySelector("#scroll-section-2"),messageA:document.querySelector("#scroll-section-2 .a"),messageB:document.querySelector("#scroll-section-2 .b"),messageC:document.querySelector("#scroll-section-2 .c"),pinB:document.querySelector("#scroll-section-2 .b .pin"),pinC:document.querySelector("#scroll-section-2 .c .pin"),canvas:document.querySelector("#video-canvas-1"),context:document.querySelector("#video-canvas-1").getContext("2d"),videoImages:[]},values:{videoImageCount:58,imageSequence:{in:0,out:57,start:0,end:1},canvas_opacity_in:{in:0,out:1,start:0,end:.1},canvas_opacity_out:{in:1,out:0,start:.95,end:1},messageA_translateY_in:{in:20,out:0,start:.15,end:.2},messageB_translateY_in:{in:30,out:0,start:.6,end:.65},messageC_translateY_in:{in:30,out:0,start:.87,end:.92},messageA_opacity_in:{in:0,out:1,start:.25,end:.3},messageB_opacity_in:{in:0,out:1,start:.6,end:.65},messageC_opacity_in:{in:0,out:1,start:.87,end:.92},messageA_translateY_out:{in:0,out:-20,start:.4,end:.45},messageB_translateY_out:{in:0,out:-20,start:.68,end:.73},messageC_translateY_out:{in:0,out:-20,start:.95,end:1},messageA_opacity_out:{in:1,out:0,start:.4,end:.45},messageB_opacity_out:{in:1,out:0,start:.68,end:.73},messageC_opacity_out:{in:1,out:0,start:.95,end:1},pinB_opacity_in:{in:0,out:1,start:.6,end:.65},pinB_opacity_out:{in:1,out:0,start:.68,end:.73},pinB_scaleY:{in:.5,out:1,start:.6,end:.65},pinC_opacity_in:{in:0,out:1,start:.87,end:.92},pinC_opacity_out:{in:1,out:0,start:.95,end:1},pinC_scaleY:{in:.5,out:1,start:.87,end:.92}}},{type:"sticky",heightNum:5,scrollHeight:0,objs:{container:document.querySelector("#scroll-section-3"),canvasCaption:document.querySelector(".canvas-caption"),canvas:document.querySelector(".image-blend-canvas"),context:document.querySelector(".image-blend-canvas").getContext("2d"),imagesPath:["./images/EPAS.JPG","./images/MullaeInstant.png"],images:[]},values:{rect1X:{in:0,out:0,start:0,end:0},rect2X:{in:0,out:0,start:0,end:0},imageBlendHeight:{in:0,out:0,start:0,end:0},canvas_scale:{in:0,out:0,start:0,end:0},canvasCaption_opacity:{in:0,out:1,start:0,end:0},canvasCaption_translateY:{in:20,out:0,start:0,end:0},rectStartY:0}}];
},{}],"hDOa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calcValues=void 0;var e=require("./sceneInfo");function t(t,r,n){if(!t)return 0;var o,i=e.sceneInfo[n].scrollHeight,s=r/i,u=0,c=0,a=0;return void 0!==t.start&&void 0!==t.end?(u=t.start*i,a=(c=t.end*i)-u,o=r<u?t.in:r>c?t.out:(r-u)/a*(t.out-t.in)+t.in):o=(t.out-t.in)*s+t.in,o}exports.calcValues=t;
},{"./sceneInfo":"OmCM"}],"Sokq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scene1=void 0;var a=require("../init"),e=require("../calcValue"),t=!0;function s(s,c,l,n,o,r){var i=s-c,y=o.messageA_opacity_in,u=o.messageA_opacity_out,_=o.messageA_translateY_in,m=o.messageA_translateY_out,g=o.messageB_opacity_in,p=o.messageB_opacity_out,d=o.messageB_translateY_in,V=o.messageB_translateY_out,f=o.messageC_opacity_in,v=o.messageC_opacity_out,Y=o.messageC_translateY_in,A=o.messageC_translateY_out,B=o.messageD_opacity_in,C=o.messageD_opacity_out,D=o.messageD_translateY_in,x=o.messageD_translateY_out,q=o.imageSequence,b=o.canvas_opacity,h=n.messageA,j=n.messageB,I=n.messageC,M=n.messageD,O=n.canvas,P=n.context,S=n.videoImages,k=((y.end||0)+(u.start||0))/2,w=((g.end||0)+(p.start||0))/2,z=((f.end||0)+(v.start||0))/2,E=(((null==B?void 0:B.end)||0)+((null==C?void 0:C.start)||0))/2;t&&(a.smoothingVideo(c,q,S,O,P),t=!1),O.style.opacity="".concat(e.calcValues(b,i,l)),r<=k?(h.style.opacity="".concat(e.calcValues(y,i,l)),h.style.transform="translate3d(0, ".concat(e.calcValues(_,i,l),"%, 0)")):(h.style.opacity="".concat(e.calcValues(u,i,l)),h.style.transform="translate3d(0, ".concat(e.calcValues(m,i,l),"%, 0)")),r<=w?(j.style.opacity="".concat(e.calcValues(g,i,l)),j.style.transform="translate3d(0, ".concat(e.calcValues(d,i,l),"%, 0)")):(j.style.opacity="".concat(e.calcValues(p,i,l)),j.style.transform="translate3d(0, ".concat(e.calcValues(V,i,l),"%, 0)")),r<=z?(I.style.opacity="".concat(e.calcValues(f,i,l)),I.style.transform="translate3d(0, ".concat(e.calcValues(Y,i,l),"%, 0)")):(I.style.opacity="".concat(e.calcValues(v,i,l)),I.style.transform="translate3d(0, ".concat(e.calcValues(A,i,l),"%, 0)")),r<=E?(M.style.opacity="".concat(e.calcValues(B,i,l)),M.style.transform="translate3d(0, ".concat(e.calcValues(D,i,l),"%, 0)")):(M.style.opacity="".concat(e.calcValues(C,i,l)),M.style.transform="translate3d(0, ".concat(e.calcValues(x,i,l),"%, 0)"))}exports.scene1=s;
},{"../init":"meeF","../calcValue":"hDOa"}],"SqiS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scene2=void 0;var a=require("../sceneInfo"),e=require("../init"),t=require("../calcValue"),s=!0;function c(c,n,o,l,i,r){var _=c-n,u=i.messageA_opacity_in,y=i.messageA_opacity_out,m=i.messageA_translateY_in,p=i.messageA_translateY_out,d=i.messageB_opacity_in,g=i.messageB_opacity_out,f=i.messageB_translateY_in,V=i.messageB_translateY_out,h=i.messageC_opacity_in,v=i.messageC_opacity_out,w=i.messageC_translateY_in,Y=i.messageC_translateY_out,B=(i.pinB_opacity_in,i.pinB_opacity_out,i.pinB_scaleY),C=(i.pinC_opacity_in,i.pinC_opacity_out,i.pinC_scaleY),x=i.imageSequence,A=i.canvas_opacity_in,I=i.canvas_opacity_out,q=l.messageA,M=l.messageB,b=l.messageC,j=l.pinB,H=l.pinC,R=l.context,S=l.canvas,W=l.videoImages,X=((u.end||0)+(y.start||0))/2,O=((d.end||0)+(g.start||0))/2,P=((h.end||0)+(v.start||0))/2;if(s&&(e.smoothingVideo(n,x,W,S,R),s=!1),S.style.opacity="".concat(r<=.5?t.calcValues(A,_,o):t.calcValues(I,_,o)),r<=X?(q.style.opacity="".concat(t.calcValues(u,_,o)),q.style.transform="translate3d(0, ".concat(t.calcValues(m,_,o),"%, 0)")):(q.style.opacity="".concat(t.calcValues(y,_,o)),q.style.transform="translate3d(0, ".concat(t.calcValues(p,_,o),"%, 0)")),r<=O?(M.style.opacity="".concat(t.calcValues(d,_,o)),M.style.transform="translate3d(0, ".concat(t.calcValues(f,_,o),"%, 0)"),j.style.transform="scaleY(".concat(t.calcValues(B,_,o),")")):(M.style.opacity="".concat(t.calcValues(g,_,o)),M.style.transform="translate3d(0, ".concat(t.calcValues(V,_,o),"%, 0)")),r<=P?(b.style.opacity="".concat(t.calcValues(h,_,o)),b.style.transform="translate3d(0, ".concat(t.calcValues(w,_,o),"%, 0)"),H.style.transform="scaleY(".concat(t.calcValues(C,_,o),")")):(b.style.opacity="".concat(t.calcValues(v,_,o)),b.style.transform="translate3d(0, ".concat(t.calcValues(Y,_,o),"%.0 )")),r>=.9){var k=a.sceneInfo[3].objs,z=a.sceneInfo[3].values,D=k.canvas,E=k.context,F=k.images,G=z.rect1X,J=z.rect2X,K=window.innerWidth/D.width,L=window.innerHeight/D.height,N=Math.max(K,L);D.style.transform="scale(".concat(N,")"),E.fillStyle="white",E.drawImage(F[0],0,0);var Q=document.body.offsetWidth/N,T=window.innerHeight/N,U=.15*Q;G.in=(D.width-Q)/2,G.out=G.in-U,J.in=G.in+Q-U,J.out=J.in+U,E.fillRect(G.in,0,Math.floor(U),T),E.fillRect(J.in,0,Math.floor(U),T)}}exports.scene2=c;
},{"../sceneInfo":"OmCM","../init":"meeF","../calcValue":"hDOa"}],"leJ8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scene3=void 0;var t=require("../calcValue");function e(e,a,n,i,c,s,r){var o=e-a,d=i.canvas,l=i.context,h=i.images,g=i.canvasCaption,f=c.rect1X,u=c.rect2X,w=c.rectStartY,y=c.imageBlendHeight,p=c.canvas_scale,m=c.canvasCaption_opacity,v=c.canvasCaption_translateY,x=window.innerWidth/d.width,V=window.innerHeight/d.height,H=Math.max(x,V);d.style.transform="scale(".concat(H,")"),l.fillStyle="white",l.drawImage(h[0],0,0);var M=document.body.offsetWidth/H,S=window.innerHeight/H;0===w&&(c.rectStartY=d.offsetTop+(d.height-d.height*H)/2,f.start=window.innerHeight/2/s,u.start=window.innerHeight/2/s,f.end=c.rectStartY/s,u.end=c.rectStartY/s);var Y=.15*M;if(f.in=(d.width-M)/2,f.out=f.in-Y,u.in=f.in+M-Y,u.out=u.in+Y,l.fillRect(Math.floor(t.calcValues(f,o,n)),0,Math.floor(Y),S),l.fillRect(t.calcValues(u,o,n),0,Math.floor(Y),S),r<f.end)d.classList.remove("sticky");else{y.out=d.height,y.start=f.end,y.end=y.start+.2;var _=t.calcValues(y,o,n);l.drawImage(h[1],0,d.height-_,d.width,_,0,d.height-_,d.width,_),d.classList.add("sticky"),d.style.top="".concat(-(d.height-d.height*H)/2,"px"),r>y.end&&(p.in=H,p.out=document.body.offsetWidth/(1.5*d.width),p.start=y.end,p.end=y.end+.2,d.style.transform="scale(".concat(t.calcValues(p,o,n),")"),d.style.marginTop="0"),r>p.end&&p.end>0&&(d.classList.remove("sticky"),d.style.marginTop="".concat(.4*s,"px"),m.start=p.end,m.end=p.end+.1,v.start=p.end,v.end=p.end+.1,g.style.opacity="".concat(t.calcValues(m,o,n)),g.style.transform="translate3d(0, ".concat(t.calcValues(v,o,n),"%, 0)"))}}exports.scene3=e;
},{"../calcValue":"hDOa"}],"t4Zq":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),t=this&&this.__exportStar||function(t,r){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(r,i)||e(r,t,i)};Object.defineProperty(exports,"__esModule",{value:!0}),t(require("./scene1"),exports),t(require("./scene2"),exports),t(require("./scene3"),exports);
},{"./scene1":"Sokq","./scene2":"SqiS","./scene3":"leJ8"}],"RGUf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.playAnimation=void 0;var e=require("./sceneInfo"),s=require("./scenes");function n(n,c,r){var a=e.sceneInfo[r].objs,o=e.sceneInfo[r].values,i=n-c,t=e.sceneInfo[r].scrollHeight,l=i/t;switch(r){case 0:s.scene1(n,c,r,a,o,l);break;case 1:break;case 2:s.scene2(n,c,r,a,o,l);break;case 3:s.scene3(n,c,r,a,o,t,l)}}exports.playAnimation=n;
},{"./sceneInfo":"OmCM","./scenes":"t4Zq"}],"crbO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setLayout=void 0;var e=require("./sceneInfo");function t(t,n){e.sceneInfo.map(function(e){"sticky"===e.type?e.scrollHeight=e.heightNum*window.innerHeight:e.scrollHeight=e.objs.container.offsetHeight,e.objs.container.style.height="".concat(e.scrollHeight,"px")});for(var o=0,s=0;s<e.sceneInfo.length;s++)if((o+=e.sceneInfo[s].scrollHeight)>=t){n=s;break}document.body.setAttribute("id","show-scene-".concat(n));var c=Math.max(window.innerHeight/1080,window.innerWidth/1920);e.sceneInfo[0].objs.canvas.style.transform="translate3d(-50%, -50%, 0) scale(".concat(c,")"),e.sceneInfo[2].objs.canvas.style.transform="translate3d(-50%, -50%, 0) scale(".concat(c,")")}exports.setLayout=t;
},{"./sceneInfo":"OmCM"}],"Ji7b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setCanvasImages=void 0;var e=require("./sceneInfo");function s(){for(var s,a,o=e.sceneInfo[0].objs,n=e.sceneInfo[0].values,r=0;r<n.videoImageCount;r++)(s=new Image).src="./video/001/IMG_".concat(String(1+r).padStart(3,"0"),".JPG"),o.videoImages.push(s);for(var t,I=e.sceneInfo[2].objs,c=e.sceneInfo[2].values,v=0;v<c.videoImageCount;v++)(a=new Image).src="./video/002/IMG-".concat(156+v,".JPG"),I.videoImages.push(a);for(var i=e.sceneInfo[3].objs,g=0;g<i.imagesPath.length;g++)(t=new Image).src=i.imagesPath[g],i.images.push(t)}exports.setCanvasImages=s;
},{"./sceneInfo":"OmCM"}],"meeF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.smoothingVideo=void 0;var e=require("./sceneInfo"),n=require("./main"),o=require("./setLayout"),t=require("./setCanvasImages"),i=require("./calcValue"),a=0,s=0;function r(e){e>44?document.body.classList.add("local-nav-sticky"):document.body.classList.remove("local-nav-sticky")}function c(o){a=0;for(var t=!1,i=0;i<s;i++)a+=e.sceneInfo[i].scrollHeight;if(o<a+e.sceneInfo[s].scrollHeight&&document.body.classList.remove("scroll-effect-end"),o>a+e.sceneInfo[s].scrollHeight&&(t=!0,s===e.sceneInfo.length-1&&document.body.classList.add("scroll-effect-end"),s<e.sceneInfo.length-1&&s++,document.body.setAttribute("id","show-scene-".concat(s))),o<a){if(t=!0,0===s)return;s--,document.body.setAttribute("id","show-scene-".concat(s))}t||n.playAnimation(o,a,s)}function d(e,n,o,t,a){var r,c,d=.1,l=0;function f(){var t=(l+=(pageYOffset-l)*d)-e;if(0===s||2===s){var u=Math.round(i.calcValues(n,t,s));o[u]&&a.drawImage(o[u],0,0)}r=requestAnimationFrame(f),Math.abs(pageYOffset-l)<1&&(cancelAnimationFrame(r),c=!1)}window.addEventListener("scroll",function(){c||(r=requestAnimationFrame(f),c=!0)})}function l(){window.addEventListener("resize",function(){window.innerWidth>900&&window.location.reload()}),window.addEventListener("orientationchange",function(){window.scrollTo(0,0),setTimeout(function(){window.location.reload()},500)}),window.addEventListener("scroll",function(){c(window.pageYOffset),r(window.pageYOffset)}),document.querySelector(".loading").addEventListener("transitionend",function(e){document.body.removeChild(e.currentTarget)})}exports.smoothingVideo=d,window.addEventListener("load",function(){document.body.classList.remove("before-load"),o.setLayout(window.pageYOffset,s);var n=e.sceneInfo[0].objs;n.context.drawImage(n.videoImages[0],0,0);var t=pageYOffset,i=0;if(t>0)var a=setInterval(function(){window.scrollTo(0,t),t+=2,i++>10&&clearInterval(a)},20);l()}),t.setCanvasImages(),o.setLayout(window.pageYOffset,s);
},{"./sceneInfo":"OmCM","./main":"RGUf","./setLayout":"crbO","./setCanvasImages":"Ji7b","./calcValue":"hDOa"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./js/init");
},{"./js/init":"meeF"}]},{},["QCba"], null)
//# sourceMappingURL=/underscore-page/src.69be6842.js.map