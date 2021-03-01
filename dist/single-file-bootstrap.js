!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).singlefileBootstrap={})}(this,(function(e){"use strict";const t="single-filez-load-image",s="single-filez-image-loaded",o=globalThis.browser,n=e=>globalThis.dispatchEvent(e),i=globalThis.CustomEvent,r=globalThis.document,a=globalThis.HTMLDocument,l=globalThis.Blob;let d;if(d=window._singleFileZ_fontFaces?window._singleFileZ_fontFaces:window._singleFileZ_fontFaces=[],r instanceof a&&o&&o.runtime&&o.runtime.getURL){c="single-filez-new-font-face",m=e=>{const t=e.detail;d.find((e=>JSON.stringify(e)==JSON.stringify(t)))||d.push(e.detail)},globalThis.addEventListener(c,m,u);let e=r.createElement("script");e.textContent="("+function(){const e=globalThis.console,t=e=>globalThis.dispatchEvent(e),s=globalThis.CustomEvent,o=globalThis.FileReader,n=e&&e.warn&&((...t)=>e.warn(...t))||(()=>{}),i="single-filez-new-font-face",r={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const e=globalThis.FontFace;let a;globalThis.FontFace=function(){a||(n("SingleFileZ is hooking the FontFace constructor to get font URLs."),a=!0);const d={};d["font-family"]=arguments[0],d.src=arguments[1];const c=arguments[2];if(c&&Object.keys(c).forEach((e=>{r[e]&&(d[r[e]]=c[e])})),d.src instanceof ArrayBuffer){const e=new o;e.readAsDataURL(new l([d.src])),e.addEventListener("load",(()=>{d.src="url("+e.result+")",t(new s(i,{detail:d}))}))}else t(new s(i,{detail:d}));return new e(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"}}}.toString()+")()",(r.documentElement||r).appendChild(e),e.remove(),e=r.createElement("script"),e.src=o.runtime.getURL("/dist/web/hooks/hooks-frames-web.js"),e.async=!1,(r.documentElement||r).appendChild(e),e.remove()}var c,m,u;const f=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const g="single-filez-on-before-capture",h="single-filez-on-after-capture",p="data-single-filez-removed-content",E="data-single-filez-hidden-content",b="data-single-filez-kept-content",w="data-single-filez-hidden-frame",T="data-single-filez-preserved-space-element",y="data-single-filez-shadow-root-element",A="data-single-filez-image",I="data-single-filez-poster",v="data-single-filez-canvas",S="data-single-filez-import",R="data-single-filez-input-value",F="data-single-filez-lazy-loaded-src",_="data-single-filez-stylesheet",N="data-single-filez-disabled-noscript",C="data-single-filez-async-script",M="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",z=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],q=/^'(.*?)'$/,P=/^"(.*?)"$/,k={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},x="single-file-ui-element",L=(e,t,s)=>globalThis.addEventListener(e,t,s);function O(e,t,s){let o;return e.querySelectorAll("noscript:not([data-single-filez-disabled-noscript])").forEach((e=>{e.setAttribute(N,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(M).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+M+", html > body > "+M);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))})),o=t&&e.documentElement?D(t,e,e.documentElement,s):{canvases:[],images:[],posters:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:o.canvases,fonts:d,stylesheets:W(e),images:o.images,posters:o.posters,usedFonts:Array.from(o.usedFonts.values()),shadowRoots:o.shadowRoots,imports:o.imports,referrer:e.referrer,markedElements:o.markedElements}}function D(e,t,s,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],shadowRoots:[],imports:[],markedElements:[]},i){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let r,a,l;if((o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&o.removeHiddenElements&&(a=(i||s.closest("html > head"))&&z.includes(s.tagName)||s.closest("details"),a||(r=i||function(e,t){let s=!1;if(t){const o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(s="none"==o,!s&&("0"==n||"hidden"==i)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}(s,l),r&&(s.setAttribute(E,""),n.markedElements.push(s)))),!r)){if(o.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(T,""),n.markedElements.push(s))}o.removeUnusedFonts&&(U(l,o,n.usedFonts),U(e.getComputedStyle(s,":first-letter"),o,n.usedFonts),U(e.getComputedStyle(s,":before"),o,n.usedFonts),U(e.getComputedStyle(s,":after"),o,n.usedFonts))}!function(e,t,s,o,n,i,r){if("CANVAS"==s.tagName)try{const t=function(e,t,s){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){let i,r,a,l,d,c,m,u,f=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),o=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),f=t.clientWidth!=o,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}i=j("padding-left",s),r=j("padding-right",s),a=j("padding-top",s),l=j("padding-bottom",s),f?(d=j("border-left-width",s),c=j("border-right-width",s),m=j("border-top-width",s),u=j("border-bottom-width",s)):d=c=m=u=0,o=Math.max(0,t.clientWidth-i-r-d-c),n=Math.max(0,t.clientHeight-a-l-m-u)}return{pxWidth:o,pxHeight:n}}(e,s,r);n.canvases.push({dataURI:s.toDataURL("image/png",""),width:t.width,height:t.height}),s.setAttribute(v,n.canvases.length-1),n.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const e={currentSrc:i?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":o.loadDeferredImages&&s.getAttribute(F)||s.currentSrc};n.images.push(e),s.setAttribute(A,n.images.length-1),n.markedElements.push(s),s.removeAttribute(F)}if("VIDEO"==s.tagName&&!s.poster){const e=t.createElement("canvas"),o=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{o.drawImage(s,0,0,e.width,e.height),n.posters.push(e.toDataURL("image/png","")),s.setAttribute(I,n.posters.length-1),n.markedElements.push(s)}catch(e){}}"IFRAME"==s.tagName&&i&&o.removeHiddenElements&&(s.setAttribute(w,""),n.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(n.imports.push({content:J(s.import)}),s.setAttribute(S,n.imports.length-1),n.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(R,s.value),n.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(R,s.checked),n.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(R,s.value),n.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(R,""),n.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(C,""),n.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,o,n,r,l);const d=!(s instanceof e.SVGElement)&&V(s);if(d&&!s.classList.contains(x)){const i={};s.setAttribute(y,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(i),D(e,t,d,o,n,r),i.content=d.innerHTML,i.delegatesFocus=d.delegatesFocus,i.mode=d.mode,d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(i.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}D(e,t,s,o,n,r),!o.autoSaveExternalSave&&o.removeHiddenElements&&i&&(a||""==s.getAttribute(b)?s.parentElement&&(s.parentElement.setAttribute(b,""),n.markedElements.push(s.parentElement)):r&&(s.setAttribute(p,""),n.markedElements.push(s)))})),n}function U(e,t,s){if(e){const o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((n=>{if(n=B(n),!t.loadedFonts||t.loadedFonts.find((e=>B(e.family)==n&&e.style==o))){const t=(i=e.getPropertyValue("font-weight"),k[i.toLowerCase().trim()]||i),r=e.getPropertyValue("font-variant")||"normal",a=[n,t,o,r];s.set(JSON.stringify(a),[n,t,o,r])}var i}))}}function V(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function B(e=""){return function(e){e=e.match(q)?e.replace(q,"$1"):e.replace(P,"$1");return e.trim()}((t=e.trim(),t.replace(f,((e,t,s)=>{const o="0x"+t-65536;return o!=o||s?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)})))).toLowerCase();var t}function H(e,t){if(e.querySelectorAll("[data-single-filez-disabled-noscript]").forEach((t=>{t.textContent=t.getAttribute(N),t.removeAttribute(N),e.body.firstChild?e.body.insertBefore(t,e.body.firstChild):e.body.appendChild(t)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[p,w,E,T,A,I,v,R,y,S,_,C];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(p),e.removeAttribute(E),e.removeAttribute(b),e.removeAttribute(w),e.removeAttribute(T),e.removeAttribute(A),e.removeAttribute(I),e.removeAttribute(v),e.removeAttribute(R),e.removeAttribute(y),e.removeAttribute(S),e.removeAttribute(_),e.removeAttribute(C)}))}function W(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,o)=>{try{const n=e.createElement("style");n.textContent=s.textContent,e.body.appendChild(n);const i=n.sheet;n.remove(),i&&i.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(_,o),t[o]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function j(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function J(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}const Z=F,G=x,K="attributes",Y=globalThis.browser,$=globalThis.document,Q=globalThis.MutationObserver,X=(e,t,s)=>globalThis.addEventListener(e,t,s),ee=(e,t,s)=>globalThis.removeEventListener(e,t,s),te=new Map;async function se(e){if($.documentElement){te.clear();const o=Math.max($.documentElement.scrollHeight-1.5*$.documentElement.clientHeight,0),r=Math.max($.documentElement.scrollWidth-1.5*$.documentElement.clientWidth,0);if(globalThis.scrollY<=o&&globalThis.scrollX<=r)return function(e){return new Promise((async o=>{let r;const a=new Set,l=new Q((async t=>{if((t=t.filter((e=>e.type==K))).length){t.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute(Z,e.target.src),e.target.addEventListener("load",c)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains(G)})).length&&(r=!0,await ne(l,e,f),a.size||await oe(l,e,f))}}));async function d(t){await re("idleTimeout",(async()=>{r?(ae("idleTimeout"),await d(Math.max(500,t/2))):(ae("loadTimeout"),ae("maxTimeout"),ie(l,e,f))}),t)}function c(e){const t=e.target;t.removeAttribute(Z),t.removeEventListener("load",c)}async function m(t){r=!0,await ne(l,e,f),await oe(l,e,f),t.detail&&a.add(t.detail)}async function u(t){await ne(l,e,f),await oe(l,e,f),a.delete(t.detail),a.size||await oe(l,e,f)}function f(e){l.disconnect(),ee(t,m),ee(s,u),o(e)}await d(2*e.loadDeferredImagesMaxIdleTime),await ne(l,e,f),l.observe($,{subtree:!0,childList:!0,attributes:!0}),X(t,m),X(s,u),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-filez-block-cookies-start")),e.loadDeferredImagesBlockStorage&&n(new i("single-filez-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-filez-load-deferred-images-keep-zoom-level-start")):n(new i("single-filez-load-deferred-images-start"))}(e)}))}(e)}}async function oe(e,t,s){await re("loadTimeout",(()=>ie(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function ne(e,t,s){await re("maxTimeout",(async()=>{await ae("loadTimeout"),await ie(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function ie(e,t,s){await ae("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-filez-block-cookies-end")),e.loadDeferredImagesBlockStorage&&n(new i("single-filez-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-filez-load-deferred-images-keep-zoom-level-end")):n(new i("single-filez-load-deferred-images-end"))}(t),await re("endTimeout",(async()=>{await ae("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function re(e,t,s){if(Y&&Y.runtime&&Y.runtime.sendMessage){if(!te.get(e)||!te.get(e).pending){const o={callback:t,pending:!0};te.set(e,o),await Y.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:s}),o.pending=!1}}else{const o=te.get(e);o&&globalThis.clearTimeout(o),te.set(e,t),globalThis.setTimeout(t,s)}}async function ae(e){if(Y&&Y.runtime&&Y.runtime.sendMessage)await Y.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e});else{const t=te.get(e);te.delete(e),t&&globalThis.clearTimeout(t)}}Y&&Y.runtime&&Y.runtime.onMessage&&Y.runtime.onMessage.addListener&&Y.runtime.onMessage.addListener((e=>{if("singlefile.lazyTimeout.onTimeout"==e.method){const t=te.get(e.type);t&&(te.delete(e.type),t.callback())}}));const le={ON_BEFORE_CAPTURE_EVENT_NAME:g,ON_AFTER_CAPTURE_EVENT_NAME:h,WIN_ID_ATTRIBUTE_NAME:"data-single-filez-win-id",preProcessDoc:O,serialize:J,postProcessDoc:H,getShadowRoot:V},de="__sfz_frameTree__::",ce='iframe, frame, object[type="text/html"][data]',me="singlefile.frameTree.initRequest",ue="singlefile.frameTree.ackInitRequest",fe="singlefile.frameTree.cleanupRequest",ge="singlefile.frameTree.initResponse",he=".",pe=globalThis.window==globalThis.top,Ee=globalThis.browser,be=globalThis.top,we=globalThis.MessageChannel,Te=globalThis.document,ye=new Map;let Ae;function Ie(){return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("")}async function ve(e){const t=e.sessionId,s=globalThis._singleFileZ_waitForUserScript;pe||(Ae=globalThis.frameId=e.windowId),Fe(Te,e.options,Ae,t),pe||(e.options.userScriptEnabled&&s&&await s(le.ON_BEFORE_CAPTURE_EVENT_NAME),Me({frames:[qe(Te,globalThis,Ae,e.options)],sessionId:t,requestedFrameId:Te.documentElement.dataset.requestedFrameId&&Ae}),e.options.userScriptEnabled&&s&&await s(le.ON_AFTER_CAPTURE_EVENT_NAME),delete Te.documentElement.dataset.requestedFrameId)}function Se(e){const t=e.sessionId;Ce(Pe(Te),e.windowId,t)}function Re(e){e.frames.forEach((t=>_e("responseTimeouts",e.sessionId,t.windowId)));const t=ye.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.url=e.url,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(he).length-e.windowId.split(he).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function Fe(e,t,s,o){const n=Pe(e);!function(e,t,s,o,n){const i=[];let r;ye.get(n)?r=ye.get(n).requestTimeouts:(r={},ye.set(n,{requestTimeouts:r}));t.forEach(((e,t)=>{const s=o+he+t;e.setAttribute(le.WIN_ID_ATTRIBUTE_NAME,s),i.push({windowId:s})})),Me({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach(((e,t)=>{const i=o+he+t;try{ze(e.contentWindow,{method:me,windowId:i,sessionId:n,options:s})}catch(e){}r[i]=globalThis.setTimeout((()=>Me({frames:[{windowId:i,processed:!0}],sessionId:n})),750)})),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o),n.length&&function(e,t,s,o,n){const i=[];t.forEach(((e,t)=>{const r=o+he+t;let a;try{a=e.contentDocument}catch(e){}if(a)try{const t=e.contentWindow;t.stop(),_e("requestTimeouts",n,r),Fe(a,s,r,n),i.push(qe(a,t,r,s))}catch(e){i.push({windowId:r,processed:!0})}})),Me({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o)}function _e(e,t,s){const o=ye.get(t);if(o&&o[e]){const t=o[e][s];t&&(globalThis.clearTimeout(t),delete o[e][s])}}function Ne(e,t){const s=ye.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>Me({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Ce(e,t,s){e.forEach(((e,o)=>{const n=t+he+o;e.removeAttribute(le.WIN_ID_ATTRIBUTE_NAME);try{ze(e.contentWindow,{method:fe,windowId:n,sessionId:s})}catch(e){}})),e.forEach(((e,o)=>{const n=t+he+o;let i;try{i=e.contentDocument}catch(e){}if(i)try{Ce(Pe(i),n,s)}catch(e){}}))}function Me(e){e.method=ge;try{be.singlefile.processors.frameTree.initResponse(e)}catch(t){ze(be,e,!0)}}function ze(e,t,s){if(e==be&&Ee&&Ee.runtime&&Ee.runtime.sendMessage)Ee.runtime.sendMessage(t);else if(s){const s=new we;e.postMessage(de+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(de+JSON.stringify(t),"*")}function qe(e,t,s,o){const n=le.preProcessDoc(e,t,o),i=le.serialize(e);le.postProcessDoc(e,n.markedElements);return{windowId:s,content:i,baseURI:e.baseURI.split("#")[0],url:e.location.href,title:e.title,canvases:n.canvases,fonts:n.fonts,stylesheets:n.stylesheets,images:n.images,posters:n.posters,usedFonts:n.usedFonts,shadowRoots:n.shadowRoots,imports:n.imports,processed:!0}}function Pe(e){let t=Array.from(e.querySelectorAll(ce));return e.querySelectorAll("*").forEach((e=>{const s=le.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(ce)))})),t}pe&&(Ae="0",Ee&&Ee.runtime&&Ee.runtime.onMessage&&Ee.runtime.onMessage.addListener&&Ee.runtime.onMessage.addListener((e=>e.method==ge?(Re(e),Promise.resolve({})):e.method==ue?(_e("requestTimeouts",e.sessionId,e.windowId),Ne(e.sessionId,e.windowId),Promise.resolve({})):void 0))),((e,t,s)=>{globalThis.addEventListener(e,t,s)})("message",(async e=>{if("string"==typeof e.data&&e.data.startsWith(de)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(de.length));if(t.method==me)e.source&&ze(e.source,{method:ue,windowId:t.windowId,sessionId:t.sessionId}),pe||(globalThis.stop(),t.options.loadDeferredImages&&se(t.options),await ve(t));else if(t.method==ue)_e("requestTimeouts",t.sessionId,t.windowId),Ne(t.sessionId,t.windowId);else if(t.method==fe)Se(t);else if(t.method==ge&&ye.get(t.sessionId)){e.ports[0].onmessage=e=>Re(e.data)}}}),!0);const ke={frameTree:Object.freeze({__proto__:null,getAsync:function(e){const t=Ie();return e=JSON.parse(JSON.stringify(e)),new Promise((s=>{ye.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{},resolve:e=>{e.sessionId=t,s(e)}}),ve({windowId:Ae,sessionId:t,options:e})}))},getSync:function(e){const t=Ie();e=JSON.parse(JSON.stringify(e)),ye.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{}}),function(e){const t=e.sessionId,s=globalThis._singleFileZ_waitForUserScript;pe||(Ae=globalThis.frameId=e.windowId);Fe(Te,e.options,Ae,t),pe||(e.options.userScriptEnabled&&s&&s(le.ON_BEFORE_CAPTURE_EVENT_NAME),Me({frames:[qe(Te,globalThis,Ae,e.options)],sessionId:t,requestedFrameId:Te.documentElement.dataset.requestedFrameId&&Ae}),e.options.userScriptEnabled&&s&&s(le.ON_AFTER_CAPTURE_EVENT_NAME),delete Te.documentElement.dataset.requestedFrameId)}({windowId:Ae,sessionId:t,options:e});const s=ye.get(t).frames;return s.sessionId=t,s},cleanup:function(e){ye.delete(e),Se({windowId:Ae,sessionId:e,options:{sessionId:e}})},initResponse:Re,TIMEOUT_INIT_REQUEST_MESSAGE:750})},xe={ON_BEFORE_CAPTURE_EVENT_NAME:g,ON_AFTER_CAPTURE_EVENT_NAME:h,preProcessDoc:O,postProcessDoc:H,serialize:J};L("single-filez-user-script-init",(()=>globalThis._singleFileZ_waitForUserScript=async e=>{const t=new CustomEvent(e+"-request",{cancelable:!0}),s=new Promise((t=>L(e+"-response",t)));(e=>{globalThis.dispatchEvent(e)})(t),t.defaultPrevented&&await s})),e.helper=xe,e.processors=ke,Object.defineProperty(e,"__esModule",{value:!0})}));