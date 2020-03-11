(this["webpackJsonpreact-ts-exchange-rates"]=this["webpackJsonpreact-ts-exchange-rates"]||[]).push([[0],{218:function(e,a,t){e.exports=t(420)},415:function(e,a,t){},416:function(e,a,t){},420:function(e,a,t){"use strict";t.r(a);t(219),t(228);var n=t(0),c=t.n(n),r=t(18),l=t.n(r),o=(t(415),t(416),t(140)),s=t.n(o),u=t(206),m=t(34),i=t(207),h=t(40),E=t(456),d=t(463),g=t(464),b=t(468),f=t(467),p=t(465),v=t(466),C=t(462),y=t(459),w=t(472),j=t(471),S=t(461),O=t(474),k=t(469),x=t(475),R=Object(E.a)({root:{width:"100%",overflowX:"auto"},table:{},th:{fontWeight:900},formControl:{minWidth:120},selectEmpty:{}}),B=function(e){console.log("ExchangeRatesForm.props",e);var a=R(),t=Object(n.useState)(e.sourceCurrencyIsoCode||"GBP"),r=Object(h.a)(t,2),l=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{row:!0,style:{margin:10}},c.a.createElement(S.a,{className:a.formControl},c.a.createElement(O.a,{id:"demo-simple-select-label"},"Source"),c.a.createElement(k.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(a){o(a.target.value),e.handleSourceCurrencyChange(a)}},c.a.createElement(x.a,{value:"GBP"},"GBP"),c.a.createElement(x.a,{value:"EUR"},"EUR"),c.a.createElement(x.a,{value:"USD"},"USD")))))},N=Object(E.a)({root:{width:"100%",overflowX:"auto"},table:{},th:{fontWeight:900},formControl:{minWidth:120},selectEmpty:{}}),A=function(e){var a,t=e.data,n=N(),r=c.a.useState({checkedAll:!1}),l=Object(h.a)(r,2),o=l[0],s=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{component:C.a},c.a.createElement(g.a,{className:n.table,size:"small","aria-label":"Source Currency"},c.a.createElement(p.a,null,c.a.createElement(v.a,null,c.a.createElement(f.a,{className:n.th},"Source Currency"),c.a.createElement(f.a,{className:n.th},"Date"))),c.a.createElement(b.a,null,c.a.createElement(v.a,null,c.a.createElement(f.a,{component:"th",scope:"row"},t.base),c.a.createElement(f.a,null,t.date))))),c.a.createElement(y.a,{row:!0,style:{margin:10}},c.a.createElement(w.a,{control:c.a.createElement(j.a,{checked:o.checkedAll,onChange:(a="checkedAll",function(e){s(Object(i.a)({},o,Object(m.a)({},a,e.target.checked)))}),value:"checkedAll",color:"primary"}),label:"Show All"})),c.a.createElement(d.a,{component:C.a},c.a.createElement(g.a,{className:n.table,size:"small","aria-label":"Exchange Rates"},c.a.createElement(p.a,null,c.a.createElement(v.a,null,c.a.createElement(f.a,{className:n.th},"Target Currency"),c.a.createElement(f.a,{className:n.th,align:"right"},"Rate"))),c.a.createElement(b.a,null,Object.entries(t.rates).sort().map((function(e){var a=e[0];return o.checkedAll||"GBP"===a||"EUR"===a||"USD"===a?c.a.createElement(v.a,{key:e[0]},c.a.createElement(f.a,null,e[0]),c.a.createElement(f.a,{align:"right"},e[1].toFixed(2))):null}))))))},F=function(e){var a=Object(n.useState)(void 0),t=Object(h.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(!0),m=Object(h.a)(o,2),i=m[0],E=m[1],d=Object(n.useState)(e.sourceCurrencyIsoCode||"GBP"),g=Object(h.a)(d,2),b=g[0],f=g[1];function p(){return(p=Object(u.a)(s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.exchangeratesapi.io/latest?base=".concat(b),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l(n),E(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[b]),c.a.createElement("div",null,i?c.a.createElement("div",null,"...loading"):c.a.createElement("div",null,r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(B,{sourceCurrencyIsoCode:b,handleSourceCurrencyChange:function(e){console.log("ExchangeRate: handleSourceCurrencyChange : START"),f(e.target.value),console.log("ExchangeRate: handleSourceCurrencyChange : END")}}),c.a.createElement(A,{data:r}))))};var G=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{sourceCurrencyIsoCode:"GBP"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.bbb1fc39.chunk.js.map