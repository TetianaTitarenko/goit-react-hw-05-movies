"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{630:function(e,t,n){n.r(t);var r=n(861),a=n(439),o=n(757),i=n.n(o),s=n(791),u=n(689),c=n(87),l=n(243),f=n(184);t.default=function(){var e,t=(0,s.useState)([]),n=(0,a.Z)(t,2),o=n[0],p=n[1],h=(0,u.TH)(),v=(0,c.lr)(),m=(0,a.Z)(v,2),d=m[0],g=m[1],b=null!==(e=d.get("name"))&&void 0!==e?e:"";(0,s.useEffect)((function(){var e=new AbortController;function t(){return(t=(0,r.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://api.themoviedb.org/3/search/movie?query=".concat(b,"&api_key=88e770eb9f81181b32f3aee56f617fc7&page=1"),t.next=4,l.Z.get(n,{signal:e.signal});case 4:r=t.sent,p(r.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[b]);var x=o.filter((function(e){return e.title.toLowerCase().includes(b.toLowerCase())}));return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Movie"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(b)},children:[(0,f.jsx)("input",{type:"text",value:b,onChange:function(e){if(""===e.target.value)return g({});g({name:e.target.value})}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),x.map((function(e){return(0,f.jsx)("ul",{children:(0,f.jsx)(c.rU,{to:"/movies/:movieId",state:{from:h},children:e.title})},e.id)}))]})}}}]);
//# sourceMappingURL=630.b09d7a58.chunk.js.map