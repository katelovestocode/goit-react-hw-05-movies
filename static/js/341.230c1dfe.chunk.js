"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[341],{341:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,u,i,o=e(885),s=e(791),p=e(585),f=e(689),l=e(498),h=e(168),d=e(444),m=d.ZP.div(r||(r=(0,h.Z)(["\n  max-width: 1200px;\n  padding: ","px;\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(n){return n.theme.space[2]})),v=d.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ","px;\n  list-style: none;\n  gap: 10px;\n"])),(function(n){return n.theme.space[0]})),x=d.ZP.li(c||(c=(0,h.Z)(["\n flex-basis: calc((100% - 20px) / 3);\n display: flex;\n align-items: center;\n justify-content: center;\n flex-direction: column;\n\n"]))),g=d.ZP.img(u||(u=(0,h.Z)(["\nmargin-bottom: 10px;\n\n"]))),b=d.ZP.h3(i||(i=(0,h.Z)(["\nmargin-bottom: 10px;\n\n"]))),w=e(184),y=function(){var n=(0,f.TH)(),t=(0,f.UO)().movieId,e=(0,s.useState)([]),r=(0,o.Z)(e,2),a=r[0],c=r[1];return(0,s.useEffect)((function(){(0,p.uV)(t).then((function(n){return n})).then((function(n){c(n.cast)})).catch((function(n){return n}))}),[t]),(0,w.jsx)(w.Fragment,{children:a&&(0,w.jsx)(m,{children:(0,w.jsx)(v,{children:a.map((function(t,e){var r,a;return(0,w.jsxs)(x,{to:null!==(r=null===(a=n.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/movies",children:[t.profile_path?(0,w.jsx)(g,{src:l.Y+t.profile_path,alt:t.name,width:"150"}):(0,w.jsx)(g,{src:"https://via.placeholder.com/150x225?text=Placeholder",alt:t.name,width:"150"}),(0,w.jsxs)(b,{children:["  ",t.name," "]}),(0,w.jsxs)("p",{children:[" Character: ",t.character," "]})]},e)}))})})})}},498:function(n,t,e){e.d(t,{Y:function(){return r}});var r="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"},585:function(n,t,e){e.d(t,{HI:function(){return s},Hx:function(){return m},Y5:function(){return f},uV:function(){return h},wr:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(44);function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("https://api.themoviedb.org/3/trending/all/day?api_key=67021554df73ceabb07c793f51310845");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=67021554df73ceabb07c793f51310845&language=en-US&page=1&include_adult=false&query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=67021554df73ceabb07c793f51310845&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=67021554df73ceabb07c793f51310845&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=67021554df73ceabb07c793f51310845&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=341.230c1dfe.chunk.js.map