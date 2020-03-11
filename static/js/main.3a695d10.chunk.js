(this["webpackJsonpreact-ts-exchange-rates"]=this["webpackJsonpreact-ts-exchange-rates"]||[]).push([[0],{218:function(e,a,t){e.exports=t(420)},415:function(e,a,t){},416:function(e,a,t){},420:function(e,a,t){"use strict";t.r(a);t(219),t(228);var n=t(0),l=t.n(n),o=t(18),r=t.n(o),c=(t(415),t(416),t(140)),m=t.n(c),s=t(206),i=t(34),u=t(207),E=t(40),d=t(456),C=t(463),h=t(464),b=t(468),R=t(467),y=t(465),v=t(466),g=t(462),N=t(459),K=t(472),S=t(471),D=t(461),p=t(474),f=t(469),B=t(475),P=Object(d.a)({root:{width:"100%",overflowX:"auto"},table:{},th:{fontWeight:900},formControl:{minWidth:120},selectEmpty:{}}),H=function(e){console.log("ExchangeRatesForm.props",e);var a=P(),t=Object(n.useState)(e.sourceCurrencyIsoCode||"GBP"),o=Object(E.a)(t,2),r=o[0],c=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{row:!0,style:{margin:10}},l.a.createElement(D.a,{className:a.formControl},l.a.createElement(p.a,{id:"demo-simple-select-label"},"Source"),l.a.createElement(f.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,onChange:function(a){c(a.target.value),e.handleSourceCurrencyChange(a)}},l.a.createElement(B.a,{value:"GBP"},"GBP"),l.a.createElement(B.a,{value:"EUR"},"EUR"),l.a.createElement(B.a,{value:"USD"},"USD"),l.a.createElement(B.a,{value:"AUD"},"AUD"),l.a.createElement(B.a,{value:"BGN"},"BGN"),l.a.createElement(B.a,{value:"BRL"},"BRL"),l.a.createElement(B.a,{value:"CAD"},"CAD"),l.a.createElement(B.a,{value:"CHF"},"CHF"),l.a.createElement(B.a,{value:"CNY"},"CNY"),l.a.createElement(B.a,{value:"CZK"},"CZK"),l.a.createElement(B.a,{value:"DKK"},"DKK"),l.a.createElement(B.a,{value:"HKD"},"HKD"),l.a.createElement(B.a,{value:"HRK"},"HRK"),l.a.createElement(B.a,{value:"HUF"},"HUF"),l.a.createElement(B.a,{value:"IDR"},"IDR"),l.a.createElement(B.a,{value:"ILS"},"ILS"),l.a.createElement(B.a,{value:"INR"},"INR"),l.a.createElement(B.a,{value:"ISK"},"ISK"),l.a.createElement(B.a,{value:"JPY"},"JPY"),l.a.createElement(B.a,{value:"KRW"},"KRW"),l.a.createElement(B.a,{value:"MXN"},"MXN"),l.a.createElement(B.a,{value:"MYR"},"MYR"),l.a.createElement(B.a,{value:"NOK"},"NOK"),l.a.createElement(B.a,{value:"NZD"},"NZD"),l.a.createElement(B.a,{value:"PHP"},"PHP"),l.a.createElement(B.a,{value:"PLN"},"PLN"),l.a.createElement(B.a,{value:"RON"},"RON"),l.a.createElement(B.a,{value:"RUB"},"RUB"),l.a.createElement(B.a,{value:"SEK"},"SEK"),l.a.createElement(B.a,{value:"SGD"},"SGD"),l.a.createElement(B.a,{value:"THB"},"THB"),l.a.createElement(B.a,{value:"TRY"},"TRY"),l.a.createElement(B.a,{value:"ZAR"},"ZAR")))))},I={GBP:{isoCode:"GBP",symbol:"\xa3",name:"British Pound"},EUR:{isoCode:"EUR",symbol:"\u20ac",name:"Euro"},USD:{isoCode:"USD",symbol:"$",name:"US Dollar"},AUD:{isoCode:"AUD",symbol:"$",name:"Australian Dollar"},BGN:{isoCode:"BGN",symbol:"\u043b\u0432.",name:"Bulgarian Lev"},BRL:{isoCode:"BRL",symbol:"R$",name:"Brazilian Real"},CAD:{isoCode:"CAD",symbol:"$",name:"Canadian Dollar"},CHF:{isoCode:"CHF",symbol:"CHF",name:"Swiss Franc"},CNY:{isoCode:"CNY",symbol:"\xa5",name:"Chinese Yuan"},CZK:{isoCode:"CZK",symbol:"K\u010d",name:"Czech Koruna"},DKK:{isoCode:"DKK",symbol:"kr.",name:"Danish Krone"},HKD:{isoCode:"HKD",symbol:"$",name:"Hong Kong Dollar"},HRK:{isoCode:"HRK",symbol:"kn",name:"Croatian Kuna"},HUF:{isoCode:"HUF",symbol:"Ft",name:"Hungarian Forint"},IDR:{isoCode:"IDR",symbol:"Rp",name:"Indonesian Rupiah"},ILS:{isoCode:"ILS",symbol:"\u20aa",name:"Israeli New Shekel"},INR:{isoCode:"INR",symbol:"\u20b9",name:"Indian Rupee"},ISK:{isoCode:"ISK",symbol:"kr",name:"Icelandic Kr\xf3na"},JPY:{isoCode:"JPY",symbol:"\xa5",name:"Japanese Yen"},KRW:{isoCode:"KRW",symbol:"\u20a9",name:"South Korean Won"},MXN:{isoCode:"MXN",symbol:"$",name:"Mexican Peso"},MYR:{isoCode:"MYR",symbol:"RM",name:"Malaysian Ringgit"},NOK:{isoCode:"NOK",symbol:"kr",name:"Norwegian Krone"},NZD:{isoCode:"NZD",symbol:"$",name:"New Zealand Dollar"},PHP:{isoCode:"PHP",symbol:"\u20b1",name:"Philippine Piso"},PLN:{isoCode:"PLN",symbol:"z\u0142",name:"Polish Zloty"},RON:{isoCode:"RON",symbol:"lei",name:"Romanian Leu"},RUB:{isoCode:"RUB",symbol:"\u20bd",name:"Russian Ruble"},SEK:{isoCode:"SEK",symbol:"kr",name:"Swedish Krona"},SGD:{isoCode:"SGD",symbol:"$",name:"Singapore Dollar"},THB:{isoCode:"THB",symbol:"\u0e3f",name:"Thai Baht"},TRY:{isoCode:"TRY",symbol:"\u20ba",name:"Turkish Lira"},ZAR:{isoCode:"ZAR",symbol:"R",name:"South African Rand"}},O=Object(d.a)({root:{width:"100%",overflowX:"auto"},table:{},th:{fontWeight:900},formControl:{minWidth:120},selectEmpty:{}}),w=function(e){var a,t=e.data,n=O(),o=l.a.useState({checkedAll:!1}),r=Object(E.a)(o,2),c=r[0],m=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{component:g.a},l.a.createElement(h.a,{className:n.table,size:"small","aria-label":"Source Currency"},l.a.createElement(y.a,null,l.a.createElement(v.a,null,l.a.createElement(R.a,{className:n.th},"Source Currency"),l.a.createElement(R.a,{className:n.th},"Date"))),l.a.createElement(b.a,null,l.a.createElement(v.a,null,l.a.createElement(R.a,{component:"th",scope:"row"},t.base),l.a.createElement(R.a,null,t.date))))),l.a.createElement(N.a,{row:!0,style:{margin:10}},l.a.createElement(K.a,{control:l.a.createElement(S.a,{checked:c.checkedAll,onChange:(a="checkedAll",function(e){m(Object(u.a)({},c,Object(i.a)({},a,e.target.checked)))}),value:"checkedAll",color:"primary"}),label:"Show All"})),l.a.createElement(C.a,{component:g.a},l.a.createElement(h.a,{className:n.table,size:"small","aria-label":"Exchange Rates"},l.a.createElement(y.a,null,l.a.createElement(v.a,null,l.a.createElement(R.a,{className:n.th},"Target Currency"),l.a.createElement(R.a,{className:n.th},"Symbol"),l.a.createElement(R.a,{className:n.th},"Name"),l.a.createElement(R.a,{className:n.th,align:"right"},"Rate"))),l.a.createElement(b.a,null,Object.entries(t.rates).sort().map((function(e){var a=e[0];if(!(c.checkedAll||"GBP"===a||"EUR"===a||"USD"===a))return null;var t=I[a],n=t?t.symbol:"",o=t?t.name:"";return l.a.createElement(v.a,{key:e[0]},l.a.createElement(R.a,null,e[0]),l.a.createElement(R.a,null,n),l.a.createElement(R.a,null,o),l.a.createElement(R.a,{align:"right"},e[1].toFixed(2)))}))))))},U=function(e){var a=Object(n.useState)(void 0),t=Object(E.a)(a,2),o=t[0],r=t[1],c=Object(n.useState)(!0),i=Object(E.a)(c,2),u=i[0],d=i[1],C=Object(n.useState)(e.sourceCurrencyIsoCode||"GBP"),h=Object(E.a)(C,2),b=h[0],R=h[1];function y(){return(y=Object(s.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.exchangeratesapi.io/latest?base=".concat(b),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),d(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[b]),l.a.createElement("div",null,u?l.a.createElement("div",null,"...loading"):l.a.createElement("div",null,o&&l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{sourceCurrencyIsoCode:b,handleSourceCurrencyChange:function(e){console.log("ExchangeRate: handleSourceCurrencyChange : START"),R(e.target.value),console.log("ExchangeRate: handleSourceCurrencyChange : END")}}),l.a.createElement(w,{data:o}))))};var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,{sourceCurrencyIsoCode:"GBP"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.3a695d10.chunk.js.map