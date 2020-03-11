(this["webpackJsonpreact-ts-exchange-rates"]=this["webpackJsonpreact-ts-exchange-rates"]||[]).push([[0],{218:function(e,a,n){e.exports=n(420)},415:function(e,a,n){},416:function(e,a,n){},420:function(e,a,n){"use strict";n.r(a);n(219),n(228);var t=n(0),o=n.n(t),l=n(18),r=n.n(l),c=(n(415),n(416),n(140)),s=n.n(c),m=n(206),i=n(34),u=n(207),d=n(40),C=n(456),h=n(463),b=n(464),y=n(468),E=n(467),R=n(465),g=n(466),N=n(462),S=n(459),p=n(472),K=n(471),f=n(461),D=n(474),v=n(469),B=n(475),P={GBP:{isoCode:"GBP",symbol:"\xa3",name:"British Pound"},EUR:{isoCode:"EUR",symbol:"\u20ac",name:"Euro"},USD:{isoCode:"USD",symbol:"$",name:"US Dollar"},AUD:{isoCode:"AUD",symbol:"$",name:"Australian Dollar"},BGN:{isoCode:"BGN",symbol:"\u043b\u0432.",name:"Bulgarian Lev"},BRL:{isoCode:"BRL",symbol:"R$",name:"Brazilian Real"},CAD:{isoCode:"CAD",symbol:"$",name:"Canadian Dollar"},CHF:{isoCode:"CHF",symbol:"CHF",name:"Swiss Franc"},CNY:{isoCode:"CNY",symbol:"\xa5",name:"Chinese Yuan"},CZK:{isoCode:"CZK",symbol:"K\u010d",name:"Czech Koruna"},DKK:{isoCode:"DKK",symbol:"kr.",name:"Danish Krone"},HKD:{isoCode:"HKD",symbol:"$",name:"Hong Kong Dollar"},HRK:{isoCode:"HRK",symbol:"kn",name:"Croatian Kuna"},HUF:{isoCode:"HUF",symbol:"Ft",name:"Hungarian Forint"},IDR:{isoCode:"IDR",symbol:"Rp",name:"Indonesian Rupiah"},ILS:{isoCode:"ILS",symbol:"\u20aa",name:"Israeli New Shekel"},INR:{isoCode:"INR",symbol:"\u20b9",name:"Indian Rupee"},ISK:{isoCode:"ISK",symbol:"kr",name:"Icelandic Kr\xf3na"},JPY:{isoCode:"JPY",symbol:"\xa5",name:"Japanese Yen"},KRW:{isoCode:"KRW",symbol:"\u20a9",name:"South Korean Won"},MXN:{isoCode:"MXN",symbol:"$",name:"Mexican Peso"},MYR:{isoCode:"MYR",symbol:"RM",name:"Malaysian Ringgit"},NOK:{isoCode:"NOK",symbol:"kr",name:"Norwegian Krone"},NZD:{isoCode:"NZD",symbol:"$",name:"New Zealand Dollar"},PHP:{isoCode:"PHP",symbol:"\u20b1",name:"Philippine Piso"},PLN:{isoCode:"PLN",symbol:"z\u0142",name:"Polish Zloty"},RON:{isoCode:"RON",symbol:"lei",name:"Romanian Leu"},RUB:{isoCode:"RUB",symbol:"\u20bd",name:"Russian Ruble"},SEK:{isoCode:"SEK",symbol:"kr",name:"Swedish Krona"},SGD:{isoCode:"SGD",symbol:"$",name:"Singapore Dollar"},THB:{isoCode:"THB",symbol:"\u0e3f",name:"Thai Baht"},TRY:{isoCode:"TRY",symbol:"\u20ba",name:"Turkish Lira"},ZAR:{isoCode:"ZAR",symbol:"R",name:"South African Rand"}},w=Object(C.a)({root:{width:"100%",overflowX:"auto"},table:{},th:{fontWeight:900},formControl:{minWidth:120},selectEmpty:{}}),I=function(e){console.log("ExchangeRatesForm.props",e);var a=w(),n=Object(t.useState)(e.sourceCurrencyIsoCode||"GBP"),l=Object(d.a)(n,2),r=l[0],c=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{row:!0,style:{margin:10}},o.a.createElement(f.a,{className:a.formControl},o.a.createElement(D.a,{id:"demo-simple-select-label"},"Source Currency"),o.a.createElement(v.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,onChange:function(a){c(a.target.value),e.handleSourceCurrencyChange(a)}},["GBP","EUR","USD","AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","ZAR"].map((function(e){return o.a.createElement(B.a,{value:e},function(e){var a=P[e],n=a?a.symbol:"",t=a?a.name:"";return"".concat(e," - ").concat(n," - ").concat(t)}(e))}))))))},O=Object(C.a)({root:{width:"100%",overflowX:"auto"},table:{},th:{fontWeight:900},formControl:{minWidth:120},selectEmpty:{}}),H=function(e){var a,n=e.data,t=O(),l=o.a.useState({checkedAll:!1}),r=Object(d.a)(l,2),c=r[0],s=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{component:N.a},o.a.createElement(b.a,{className:t.table,size:"small","aria-label":"Source Currency"},o.a.createElement(R.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,{className:t.th},"Source Currency"),o.a.createElement(E.a,{className:t.th},"Date"))),o.a.createElement(y.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,{component:"th",scope:"row"},n.base),o.a.createElement(E.a,null,n.date))))),o.a.createElement(S.a,{row:!0,style:{margin:10}},o.a.createElement(p.a,{control:o.a.createElement(K.a,{checked:c.checkedAll,onChange:(a="checkedAll",function(e){s(Object(u.a)({},c,Object(i.a)({},a,e.target.checked)))}),value:"checkedAll",color:"primary"}),label:"Show All"})),o.a.createElement(h.a,{component:N.a},o.a.createElement(b.a,{className:t.table,size:"small","aria-label":"Exchange Rates"},o.a.createElement(R.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,{className:t.th},"Target Currency"),o.a.createElement(E.a,{className:t.th},"Symbol"),o.a.createElement(E.a,{className:t.th},"Name"),o.a.createElement(E.a,{className:t.th,align:"right"},"Rate"))),o.a.createElement(y.a,null,Object.entries(n.rates).sort().map((function(e){var a=e[0];if(!(c.checkedAll||"GBP"===a||"EUR"===a||"USD"===a))return null;var n=P[a],t=n?n.symbol:"",l=n?n.name:"";return o.a.createElement(g.a,{key:e[0]},o.a.createElement(E.a,null,e[0]),o.a.createElement(E.a,null,t),o.a.createElement(E.a,null,l),o.a.createElement(E.a,{align:"right"},e[1].toFixed(4)))}))))))},k=function(e){var a=Object(t.useState)(void 0),n=Object(d.a)(a,2),l=n[0],r=n[1],c=Object(t.useState)(!0),i=Object(d.a)(c,2),u=i[0],C=i[1],h=Object(t.useState)(e.sourceCurrencyIsoCode||"GBP"),b=Object(d.a)(h,2),y=b[0],E=b[1];function R(){return(R=Object(m.a)(s.a.mark((function e(){var a,n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.exchangeratesapi.io/latest?base=".concat(y),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,r(t),C(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(t.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[y]),o.a.createElement("div",null,u?o.a.createElement("div",null,"...loading"):o.a.createElement("div",null,l&&o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{sourceCurrencyIsoCode:y,handleSourceCurrencyChange:function(e){console.log("ExchangeRate: handleSourceCurrencyChange : START"),E(e.target.value),console.log("ExchangeRate: handleSourceCurrencyChange : END")}}),o.a.createElement(H,{data:l}))))};var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{sourceCurrencyIsoCode:"GBP"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.6d355589.chunk.js.map