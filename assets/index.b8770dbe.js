import{i as R,j as F,n as D,k as M,l as U,u as H,m as N,q as y,r as i,w as j,d as V,o as $,c as G,a as I,s as q,p as z,f as K,_ as J}from"./index.35ee51fa.js";var X;const g=typeof window<"u",Z=e=>typeof e=="string",P=()=>{};g&&((X=window==null?void 0:window.navigator)==null?void 0:X.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ee(e){return typeof e=="function"?e():H(e)}function te(e){return e}function ne(e){return M()?(U(e),!0):!1}function oe(e,t=!0){R()?F(e):t?e():D(e)}function k(e){var t;const n=ee(e);return(t=n==null?void 0:n.$el)!=null?t:n}const w=g?window:void 0;g&&window.document;g&&window.navigator;g&&window.location;function O(...e){let t,n,s,l;if(Z(e[0])?([n,s,l]=e,t=w):[t,n,s,l]=e,!t)return P;let u=P;const r=j(()=>k(t),c=>{u(),c&&(c.addEventListener(n,s,l),u=()=>{c.removeEventListener(n,s,l),u=P})},{immediate:!0,flush:"post"}),a=()=>{r(),u()};return ne(a),a}function ae(e,t=!1){const n=i(),s=()=>n.value=Boolean(e());return s(),oe(s,t),n}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C="__vueuse_ssr_handlers__";T[C]=T[C]||{};T[C];function se(e={}){const{window:t=w}=e,n=ae(()=>t&&"DeviceOrientationEvent"in t),s=i(!1),l=i(null),u=i(null),r=i(null);return t&&n.value&&O(t,"deviceorientation",a=>{s.value=a.absolute,l.value=a.alpha,u.value=a.beta,r.value=a.gamma}),{isSupported:n,isAbsolute:s,alpha:l,beta:u,gamma:r}}function ue(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:l={x:0,y:0},window:u=w,eventFilter:r}=e,a=i(l.x),c=i(l.y),v=i(null),d=o=>{t==="page"?(a.value=o.pageX,c.value=o.pageY):t==="client"&&(a.value=o.clientX,c.value=o.clientY),v.value="mouse"},f=()=>{a.value=l.x,c.value=l.y},p=o=>{if(o.touches.length>0){const h=o.touches[0];t==="page"?(a.value=h.pageX,c.value=h.pageY):t==="client"&&(a.value=h.clientX,c.value=h.clientY),v.value="touch"}},_=o=>r===void 0?d(o):r(()=>d(o),{}),m=o=>r===void 0?p(o):r(()=>p(o),{});return u&&(O(u,"mousemove",_,{passive:!0}),O(u,"dragover",_,{passive:!0}),n&&(O(u,"touchstart",m,{passive:!0}),O(u,"touchmove",m,{passive:!0}),s&&O(u,"touchend",f,{passive:!0}))),{x:a,y:c,sourceType:v}}function le(e,t={}){const{handleOutside:n=!0,window:s=w}=t,{x:l,y:u,sourceType:r}=ue(t),a=i(e!=null?e:s==null?void 0:s.document.body),c=i(0),v=i(0),d=i(0),f=i(0),p=i(0),_=i(0),m=i(!0);let o=()=>{};return s&&(o=j([a,l,u],()=>{const h=k(a);if(!h)return;const{left:A,top:L,width:x,height:b}=h.getBoundingClientRect();d.value=A+s.pageXOffset,f.value=L+s.pageYOffset,p.value=b,_.value=x;const E=l.value-d.value,S=u.value-f.value;m.value=x===0||b===0||E<0||S<0||E>x||S>b,(n||!m.value)&&(c.value=E,v.value=S)},{immediate:!0})),{x:l,y:u,sourceType:r,elementX:c,elementY:v,elementPositionX:d,elementPositionY:f,elementHeight:p,elementWidth:_,isOutside:m,stop:o}}function ie(e,t={}){const{deviceOrientationTiltAdjust:n=o=>o,deviceOrientationRollAdjust:s=o=>o,mouseTiltAdjust:l=o=>o,mouseRollAdjust:u=o=>o,window:r=w}=t,a=N(se({window:r})),{elementX:c,elementY:v,elementWidth:d,elementHeight:f}=le(e,{handleOutside:!1,window:r}),p=y(()=>a.isSupported&&(a.alpha!=null&&a.alpha!==0||a.gamma!=null&&a.gamma!==0)?"deviceOrientation":"mouse"),_=y(()=>{if(p.value==="deviceOrientation"){const o=-a.beta/90;return s(o)}else{const o=-(v.value-f.value/2)/f.value;return u(o)}}),m=y(()=>{if(p.value==="deviceOrientation"){const o=a.gamma/90;return n(o)}else{const o=(c.value-d.value/2)/d.value;return l(o)}});return{roll:_,tilt:m,source:p}}var Y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Y||(Y={}));var re=Object.defineProperty,Q=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,W=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&W(e,n,t[n]);if(Q)for(var n of Q(t))de.call(t,n)&&W(e,n,t[n]);return e};const ve={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};pe({linear:te},ve);const B=e=>(z("data-v-a6e64314"),e=e(),K(),e),fe=B(()=>I("div",null,"Welcome!",-1)),me=B(()=>I("div",null,"I'm Luckept",-1)),_e=B(()=>I("div",null,"\u9875\u9762\u968F\u7F18\u5B8C\u5584\u4E2D...",-1)),he=[fe,me,_e],Oe=V({__name:"index",setup(e){const t=i(),n=N(ie(t)),s={position:"absolute",transition:".3s ease-out all"},l={perspective:"300px"},u=y(()=>({...s,transform:`rotateX(${n.roll*10}deg) rotateY(${n.tilt*10}deg) scale(1.2)`}));return(r,a)=>($(),G("div",{style:l,class:"about-me"},[I("div",{style:q(H(u)),class:"card",ref_key:"card",ref:t},he,4)]))}});const we=J(Oe,[["__scopeId","data-v-a6e64314"]]);export{we as default};
