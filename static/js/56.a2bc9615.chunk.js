"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[56],{6840:function(n,e,t){t.d(e,{Bt:function(){return h},E3:function(){return d},m4:function(){return l},t5:function(){return p},yw:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),s=t.n(i),o="https://api.themoviedb.org/3/",u="489c503ccf1d5d4070a54da171b2b283",p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(o,"trending/all/day?api_key=").concat(u,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(o,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(o,"search/movie?api_key=").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e,"&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6056:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,c,i,s,o,u,p,l=t(5861),d=t(885),f=t(7757),h=t.n(f),x=t(2791),v=t(6731),g=t(7689),m=t(6840),w=t(5243),b=t(168),j=t(6444),Z=j.ZP.div(r||(r=(0,b.Z)(["\n    margin-top: 20px;\n    margin-left: 10px;\n    display: flex;\n    justify-content: center;\n"]))),k=j.ZP.button(a||(a=(0,b.Z)(["\n    margin: 10px 10px;\n    background-color: #F4A460;\n    border-radius: 12px;\n    border: transparent;\n    color: #000;\n    cursor: pointer;\n    font-weight: bold;\n    padding: 5px 10px;\n    text-align: center;\n    transition: 200ms;\n    width: 100px;\n\n    &:hover,\n    &:focus {\n        outline: 0;\n        border-color: #808080;\n        background: #BC8F8F;\n        box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);\n}"]))),y=j.ZP.div(c||(c=(0,b.Z)(["\n    margin-left: 10px;\n"]))),_=j.ZP.span(i||(i=(0,b.Z)(["\n    margin-left: 5px;\n    font-weight: bold;\n    font-size: 22px;\n"]))),S=j.ZP.h3(s||(s=(0,b.Z)(["\n    padding: 0;\n    margin: 0;\n"]))),O=j.ZP.div(o||(o=(0,b.Z)(["\n    display:flex;\n    align-items: baseline;\n"]))),P=j.ZP.div(u||(u=(0,b.Z)(["\n    display: flex;\n    align-items: center;\n"]))),C=j.ZP.p(p||(p=(0,b.Z)(["\n    padding: 0;\n    margin-right: 10px;\n\n"]))),U=t(184);function E(){var n=(0,x.useState)(null),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(!1),c=(0,d.Z)(a,2),i=c[0],s=c[1],o=(0,x.useState)(""),u=(0,d.Z)(o,2),p=u[0],f=u[1],b=(0,x.useState)([]),j=(0,d.Z)(b,2),E=j[0],F=j[1],z=(0,g.UO)().id,G=(0,g.TH)(),L=G.pathname.includes("cast")?"/movies/".concat(z):"/movies/".concat(z,"/cast"),M=G.pathname.includes("reviews")?"/movies/".concat(z):"/movies/".concat(z,"/reviews"),A=(0,g.s0)("/");(0,x.useEffect)((function(){var n=function(){var n=(0,l.Z)(h().mark((function n(){var e,t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.prev=1,n.next=4,(0,m.m4)(z);case 4:e=n.sent,t=e.genres.map((function(n){var e=n.name,t=n.id;return(0,U.jsx)(C,{children:e},t)})),r(e),F(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),f(n.t0);case 13:return n.prev=13,s(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[z]);return(0,U.jsxs)("div",{children:[(0,U.jsx)(k,{type:"button",onClick:function(){return A("/")},children:"Go back HOME"}),(0,U.jsx)(k,{type:"button",onClick:function(){return A("/movies")},children:"Go back to MOVIES"}),i&&(0,U.jsx)(w.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),p&&(0,U.jsx)("p",{children:"Something went wrong. Try later, please."}),t&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(Z,{children:[(0,U.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.poster_path),alt:t.tagline,width:"300",height:"370"}),(0,U.jsxs)(y,{children:[(0,U.jsxs)(O,{children:[(0,U.jsx)("h2",{children:t.title?t.title:t.name}),(0,U.jsxs)(_,{children:["(",t.release_date.substr(0,4),")"]})]}),(0,U.jsx)(S,{children:"User score:"}),(0,U.jsxs)("p",{children:[Math.round(10*t.vote_average)," %"]}),(0,U.jsx)(S,{children:"Overview"}),(0,U.jsx)("p",{children:t.overview}),(0,U.jsx)(S,{children:"Genres"}),(0,U.jsx)(P,{children:E})]})]}),(0,U.jsx)("h2",{children:"Additional information"}),(0,U.jsxs)("ul",{children:[(0,U.jsx)("li",{children:(0,U.jsx)(v.OL,{to:L,children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(v.OL,{to:M,children:"Reviews"})})]}),(0,U.jsx)(g.j3,{})]})]})}},168:function(n,e,t){function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=56.a2bc9615.chunk.js.map