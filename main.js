!function(t){var n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(r,a,function(n){return t[n]}.bind(null,a));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);const r=document.querySelector(".view"),a=[].slice.call(document.querySelectorAll(".fire")),o=70,i=0,s=window.innerWidth/2,l=window.innerHeight/2;function c(t,n){r.style=`transform: rotateX(${t}deg) rotateY(${n}deg)`}function d(){a.shift().classList.add("animation"),a.length&&setTimeout(d,300*Math.random())}document.addEventListener("mousemove",function(t,n){let e,r=!1;return function(){Array.prototype.slice.call(arguments);return r||(r=!0,e=t.apply(this,arguments),setTimeout((function(){r=!1}),n)),e}}((function(t){const n=t.pageX/s,e=t.pageY/l;c(o-100*(e-1),i+100*(n-1))})),200),setTimeout((function(){c(o,i),d()}),100)},function(t,n,e){var r=e(2),a=e(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},function(t,n,e){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),i=[];function s(t){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===t){n=e;break}return n}function l(t,n){for(var e={},r=[],a=0;a<t.length;a++){var o=t[a],l=n.base?o[0]+n.base:o[0],c=e[l]||0,d="".concat(l," ").concat(c);e[l]=c+1;var f=s(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:d,updater:m(u,n),references:1}),r.push(d)}return r}function c(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=e.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,f=(d=[],function(t,n){return d[t]=n,d.filter(Boolean).join("\n")});function u(t,n,e,r){var a=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,a);else{var o=document.createTextNode(a),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(o,i[n]):t.appendChild(o)}}function p(t,n,e){var r=e.css,a=e.media,o=e.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var g=null,h=0;function m(t,n){var e,r,a;if(n.singleton){var o=h++;e=g||(g=c(n)),r=u.bind(null,e,o,!1),a=u.bind(null,e,o,!0)}else e=c(n),r=p.bind(null,e,n),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else a()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var e=l(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var a=s(e[r]);i[a].references--}for(var o=l(t,n),c=0;c<e.length;c++){var d=s(e[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=o}}}},function(t,n,e){(n=e(4)(!1)).push([t.i,"* {\n  transition: all 0.3s ease-out;\n}\n.root {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  font-family: sans-serif;\n  background: radial-gradient(#294c84, #000) no-repeat center;\n  background-size: 100%;\n  perspective: 1000;\n  transform-style: preserve-3d;\n}\n.view {\n  transition-duration: 1s;\n  transform-style: preserve-3d;\n  margin-top: 200px;\n}\n.plate {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 500px;\n  width: 500px;\n  border: 30px dotted #b94c0a;\n  border-radius: 50%;\n  background: rgba(245,215,110,0.5);\n  color: #000;\n  font-weight: bold;\n  font-size: 80px;\n  text-align: center;\n  text-shadow: 3px 0 #fff, 0 3px #fff, -3px 0 #fff, 0 -3px #fff;\n  transform: rotateX(0deg);\n  transform-style: preserve-3d;\n}\n.plate.top {\n  -webkit-animation: radial 1s ease-out infinite alternate;\n          animation: radial 1s ease-out infinite alternate;\n  background-image: radial-gradient(#ff0, #f00);\n}\n.plate.bottom {\n  position: absolute;\n  top: 0;\n  transform: translateZ(200px);\n}\n.plate.bottom:before {\n  content: '';\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: radial-gradient(#8c3b09, #b94c0a);\n  border-radius: 50%;\n  transform: translateZ(-210px) rotateX(180deg) scale(1.15);\n}\n.wall {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 200px;\n  width: 250px;\n  background-color: rgba(245,215,110,0.5);\n  transform: rotateX(90deg) translateY(-50%);\n}\n.wall:nth-child(1) {\n  transform: rotateX(90deg) translateY(50%) rotateY(30deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(2) {\n  transform: rotateX(90deg) translateY(50%) rotateY(60deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(3) {\n  transform: rotateX(90deg) translateY(50%) rotateY(90deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(4) {\n  transform: rotateX(90deg) translateY(50%) rotateY(120deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(5) {\n  transform: rotateX(90deg) translateY(50%) rotateY(150deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(6) {\n  transform: rotateX(90deg) translateY(50%) rotateY(180deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(7) {\n  transform: rotateX(90deg) translateY(50%) rotateY(210deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(8) {\n  transform: rotateX(90deg) translateY(50%) rotateY(240deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(9) {\n  transform: rotateX(90deg) translateY(50%) rotateY(270deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(10) {\n  transform: rotateX(90deg) translateY(50%) rotateY(300deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(11) {\n  transform: rotateX(90deg) translateY(50%) rotateY(330deg) translateX(250px) rotateY(90deg);\n}\n.wall:nth-child(12) {\n  transform: rotateX(90deg) translateY(50%) rotateY(360deg) translateX(250px) rotateY(90deg);\n}\n.fire {\n  position: relative;\n  height: 100px;\n  width: 100px;\n  transform-origin: 0 0 0;\n  transform-style: preserve-3d;\n}\n.fire.animation {\n  -webkit-animation: flame 0.3s ease-out infinite alternate;\n          animation: flame 0.3s ease-out infinite alternate;\n}\n.fire > div {\n  border-top-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n.fire > div:nth-child(1) {\n  height: 100%;\n  width: 100%;\n  background-color: #f00;\n  box-shadow: 0 0 30px #f00;\n}\n.fire > div:nth-child(2) {\n  position: absolute;\n  top: 1%;\n  left: 1%;\n  height: 60%;\n  width: 60%;\n  background-image: radial-gradient(#ff0, #f00);\n  transform-origin: 0 0 0;\n}\n@-webkit-keyframes flame {\n  0% {\n    opacity: 0.7;\n    transform: translateY(150px) scaleX(0.5) scaleY(1.2) rotateZ(45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(150px) scaleX(0.5) scaleY(1) rotateZ(45deg);\n  }\n}\n@keyframes flame {\n  0% {\n    opacity: 0.7;\n    transform: translateY(150px) scaleX(0.5) scaleY(1.2) rotateZ(45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(150px) scaleX(0.5) scaleY(1) rotateZ(45deg);\n  }\n}\n@-webkit-keyframes radial {\n  0% {\n    background-color: #ff0;\n  }\n  100% {\n    background-color: #f00;\n  }\n}\n@keyframes radial {\n  0% {\n    background-color: #ff0;\n  }\n  100% {\n    background-color: #f00;\n  }\n}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var a=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([a]).join("\n")}var i,s,l;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}}]);