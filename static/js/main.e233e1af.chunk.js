(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),a=n(6),i=n(8),r=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.default=0]="default",t[t.length=1]="length",t[t.asc=2]="asc"}(c||(c={}));var d=function(){var t=Object(r.useState)(c.default),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(!1),l=Object(a.a)(o,2),d=l[0],j=l[1],f=function(t,e,n){var s=Object(i.a)(t);switch(e){case c.asc:s.sort((function(t,e){return t.localeCompare(e)}));break;case c.length:s.sort((function(t,e){return t.length-e.length}));break;default:return s}return n&&s.reverse(),s}(h,n,d);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==c.asc}),onClick:function(){return s(c.asc)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==c.length}),onClick:function(){return s(c.length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!d}),onClick:function(){j(!d)},children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.default),j(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:f.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},"#id-".concat(t))}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e233e1af.chunk.js.map