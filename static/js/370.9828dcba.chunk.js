"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{6840:function(t,n,e){e.d(n,{Bt:function(){return v},E3:function(){return l},m4:function(){return f},t5:function(){return p},yw:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u),i="https://api.themoviedb.org/3/",o="489c503ccf1d5d4070a54da171b2b283",p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"trending/all/day?api_key=").concat(o,"&page=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n,"&page=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},9370:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),s=e(7689),i=e(2791),o=e(6840),p=e(184);function f(t){var n=t.actorsList.map((function(t){var n=t.cast_id,e=t.name;return(0,p.jsx)("li",{children:e},n)}));return(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:n})})}var l=e(5243);function d(){var t=(0,i.useState)(null),n=(0,a.Z)(t,2),e=n[0],c=n[1],d=(0,i.useState)(!1),v=(0,a.Z)(d,2),h=v[0],g=v[1],w=(0,i.useState)(""),x=(0,a.Z)(w,2),m=x[0],k=x[1],y=(0,s.UO)().id;return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.prev=1,t.next=4,(0,o.yw)(y);case 4:n=t.sent,c(n.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),k(t.t0);case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[y]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Actors list"}),h?(0,p.jsx)(l.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):(0,p.jsx)("p",{}),e&&(0,p.jsx)(f,{actorsList:e}),m&&(0,p.jsx)("p",{children:"Something went wrong. Try later, please."})]})}}}]);
//# sourceMappingURL=370.9828dcba.chunk.js.map