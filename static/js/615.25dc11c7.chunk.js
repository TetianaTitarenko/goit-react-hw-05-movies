"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[615],{615:function(t,n,e){e.r(n),e.d(n,{default:function(){return It}});var r=e(861),o=e(439),a=e(757),i=e.n(a),s=e(791),c=e(87),u=e(689),l=e(243);function f(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var d=e(433);function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function m(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?m(Object(e),!0).forEach((function(n){p(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g={data:""},h=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||g},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,w=function t(n,e){var r="",o="",a="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},j={},O=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},k=function(t,n,e,r,o){var a=O(t),i=j[a]||(j[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!j[i]){var s=a!==t?t:function(t){for(var n,e,r=[{}];n=b.exec(t.replace(y,""));)n[4]?r.shift():n[3]?(e=n[3].replace(x," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(x," ").trim();return r[0]}(t);j[i]=w(o?p({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&j.g?j.g:null;return e&&(j.g=j[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(j[i],n,r,c),i},E=function(t,n,e){return t.reduce((function(t,r,o){var a=n[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":w(i,""):!1===i?"":i}return t+r+(null==a?"":a)}),"")};function P(t){var n=this||{},e=t.call?t(n.p):t;return k(e.unshift?e.raw?E(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,h(n.target),n.g,n.o,n.k)}P.bind({g:1});var C,D,z,N,A,S,Z,I,_,M,T,H,L,F,q,U,$,B,R,Y=P.bind({k:1});function G(t,n){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:D&&D()},s),e.o=/ *go\d+/.test(c),s.className=P.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),z&&u[0]&&z(s),C(u,s)}return n?n(o):o}}var J=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},K=function(){var t=0;return function(){return(++t).toString()}}(),Q=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),V=new Map,W=function(t){if(!V.has(t)){var n=setTimeout((function(){V.delete(t),et({type:4,toastId:t})}),1e3);V.set(t,n)}},X=function t(n,e){switch(e.type){case 0:return v(v({},n),{},{toasts:[e.toast].concat((0,d.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=V.get(t);n&&clearTimeout(n)}(e.toast.id),v(v({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?v(v({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var o=e.toastId;return o?W(o):n.toasts.forEach((function(t){W(t.id)})),v(v({},n),{},{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?v(v({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?v(v({},n),{},{toasts:[]}):v(v({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return v(v({},n),{},{pausedAt:e.time});case 6:var a=e.time-(n.pausedAt||0);return v(v({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return v(v({},t),{},{pauseDuration:t.pauseDuration+a})}))})}},tt=[],nt={toasts:[],pausedAt:void 0},et=function(t){nt=X(nt,t),tt.forEach((function(t){t(nt)}))},rt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ot=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return v(v({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||K()})}(n,t,e);return et({type:2,toast:r}),r.id}},at=function(t,n){return ot("blank")(t,n)};at.error=ot("error"),at.success=ot("success"),at.loading=ot("loading"),at.custom=ot("custom"),at.dismiss=function(t){et({type:3,toastId:t})},at.remove=function(t){return et({type:4,toastId:t})},at.promise=function(t,n,e){var r=at.loading(n.loading,v(v({},e),null==e?void 0:e.loading));return t.then((function(t){return at.success(J(n.success,t),v(v({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){at.error(J(n.error,t),v(v({id:r},e),null==e?void 0:e.error))})),t};var it=function(t,n){et({type:1,toast:{id:t,height:n}})},st=function(){et({type:5,time:Date.now()})},ct=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,s.useState)(nt),e=(0,o.Z)(n,2),r=e[0],a=e[1];(0,s.useEffect)((function(){return tt.push(a),function(){var t=tt.indexOf(a);t>-1&&tt.splice(t,1)}}),[r]);var i=r.toasts.map((function(n){var e,r;return v(v(v(v({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||rt[n.type],style:v(v(v({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return v(v({},r),{},{toasts:i})}(t),e=n.toasts,r=n.pausedAt;(0,s.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return at.dismiss(n.id)}),e);n.visible&&at.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var a=(0,s.useCallback)((function(){r&&et({type:6,time:Date.now()})}),[r]),i=(0,s.useCallback)((function(t,n){var r,o=n||{},a=o.reverseOrder,i=void 0!==a&&a,s=o.gutter,c=void 0===s?8:s,u=o.defaultPosition,l=e.filter((function(n){return(n.position||u)===(t.position||u)&&n.height})),f=l.findIndex((function(n){return n.id===t.id})),p=l.filter((function(t,n){return n<f&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,d.Z)(i?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:it,startPause:st,endPause:a,calculateOffset:i}}},ut=Y(N||(N=f(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),lt=Y(A||(A=f(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ft=Y(S||(S=f(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),dt=G("div")(Z||(Z=f(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),ut,lt,(function(t){return t.secondary||"#fff"}),ft),pt=Y(I||(I=f(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),mt=G("div")(_||(_=f(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),pt),vt=Y(M||(M=f(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),gt=Y(T||(T=f(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),ht=G("div")(H||(H=f(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),vt,gt,(function(t){return t.secondary||"#fff"})),bt=G("div")(L||(L=f(["\n  position: absolute;\n"]))),yt=G("div")(F||(F=f(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),xt=Y(q||(q=f(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),wt=G("div")(U||(U=f(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),xt),jt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?s.createElement(wt,null,e):e:"blank"===r?null:s.createElement(yt,null,s.createElement(mt,v({},o)),"loading"!==r&&s.createElement(bt,null,"error"===r?s.createElement(dt,v({},o)):s.createElement(ht,v({},o))))},Ot=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},kt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Et=G("div")($||($=f(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Pt=G("div")(B||(B=f(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Ct=s.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,i=n.height?function(t,n){var e=t.includes("top")?1:-1,r=Q()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Ot(e),kt(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:n?"".concat(Y(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(Y(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},c=s.createElement(jt,{toast:n}),u=s.createElement(Pt,v({},n.ariaProps),J(n.message,n));return s.createElement(Et,{className:n.className,style:v(v(v({},i),r),n.style)},"function"==typeof a?a({icon:c,message:u}):s.createElement(s.Fragment,null,c,u))}));!function(t,n,e,r){w.p=n,C=t,D=e,z=r}(s.createElement);var Dt=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,a=t.children,i=s.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return s.createElement("div",{ref:i,className:e,style:r},a)},zt=P(R||(R=f(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Nt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,i=t.children,c=t.containerStyle,u=t.containerClassName,l=ct(o),f=l.toasts,d=l.handlers;return s.createElement("div",{style:v({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:d.startPause,onMouseLeave:d.endPause},f.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return v(v({left:0,right:0,display:"flex",position:"absolute",transition:Q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),o)}(e,d.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:r}));return s.createElement(Dt,{id:t.id,key:t.id,onHeightUpdate:d.updateHeight,className:t.visible?zt:"",style:o},"custom"===t.type?J(t.message,t):i?i(t):s.createElement(Ct,{toast:t,position:e}))})))},At=at,St=e(923),Zt=e(184),It=function(){var t,n=(0,s.useState)([]),e=(0,o.Z)(n,2),a=e[0],f=e[1],d=(0,u.TH)(),p=(0,c.lr)(),m=(0,o.Z)(p,2),v=m[0],g=m[1],h=null!==(t=v.get("q"))&&void 0!==t?t:"",b=a.filter((function(t){return t.title.toLowerCase().includes(h.toLowerCase())}));return(0,Zt.jsxs)("div",{children:[(0,Zt.jsx)("h1",{children:"Movie"}),(0,Zt.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=new AbortController;function e(){return(e=(0,r.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="".concat(St._n,"search/movie?query=").concat(h,"&").concat(St.$h,"&page=1"),t.next=4,l.Z.get(e,{signal:n.signal});case 4:0===(r=t.sent).data.results.length&&At.error("No results found for ".concat(h)),f(r.data.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){n.abort()}},children:[(0,Zt.jsx)("input",{type:"text",value:h,onChange:function(t){if(""===t.target.value)return g({});g({q:t.target.value})}}),(0,Zt.jsx)("button",{type:"submit",children:"Search"})]}),(0,Zt.jsx)(Nt,{}),(0,Zt.jsx)("ul",{children:b.map((function(t){return(0,Zt.jsx)("li",{children:(0,Zt.jsx)(c.rU,{to:"".concat(t.id),state:{from:d},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=615.25dc11c7.chunk.js.map