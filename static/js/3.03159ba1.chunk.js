(this.webpackJsonpfui=this.webpackJsonpfui||[]).push([[3],{39:function(t,e,n){},40:function(t,e,n){t.exports=n.p+"static/media/arti.921c8bee.jpg"},41:function(t,e,n){},46:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e);var c=n(0),o=n.n(c),i=n(19),l=n(7),u=(n(39),n(40)),s=n.n(u);function f(t){var e=t.data,n=e.title,a=e.author,r=e.content,c=e.date;return o.a.createElement("div",{className:"article-item"},o.a.createElement("div",{className:"image-wrap"},o.a.createElement("img",{src:s.a,alt:""})),o.a.createElement("div",{className:"content-wrap"},o.a.createElement("div",{className:"content-item title"},n),o.a.createElement("div",{className:"content-item"},a," / ",c),o.a.createElement("div",{className:"content-item"},r)))}var m=n(18);n(41);var d={fetchArticle:m.b};e.default=Object(i.b)((function(t){return{list:t.article.list}}),d)((function(t){var e=t.list,n=t.fetchArticle;console.log("rerender home");var a=r(Object(c.useState)(!1),2),i=a[0],u=a[1],s=function(){n([{title:"\u6807\u9898",author:"\u4f5c\u8005",content:"\u8fd9\u662f\u7b80\u77ed\u7684\u6587\u7ae0\u7b80\u4ecb\uff5e\uff5e",date:"2021-12-12"},{title:"\u6807\u9898",author:"\u4f5c\u8005",content:"\u8fd9\u662f\u7b80\u77ed\u7684\u6587\u7ae0\u7b80\u4ecb\uff5e\uff5e",date:"2021-12-12"},{title:"\u6807\u9898",author:"\u4f5c\u8005",content:"\u8fd9\u662f\u7b80\u77ed\u7684\u6587\u7ae0\u7b80\u4ecb\uff5e\uff5e",date:"2021-12-12"},{title:"\u6807\u9898",author:"\u4f5c\u8005",content:"\u8fd9\u662f\u7b80\u77ed\u7684\u6587\u7ae0\u7b80\u4ecb\uff5e\uff5e",date:"2021-12-12"},{title:"\u6807\u9898",author:"\u4f5c\u8005",content:"\u8fd9\u662f\u7b80\u77ed\u7684\u6587\u7ae0\u7b80\u4ecb\uff5e\uff5e",date:"2021-12-12"},{title:"\u6807\u9898",author:"\u4f5c\u8005",content:"\u8fd9\u662f\u7b80\u77ed\u7684\u6587\u7ae0\u7b80\u4ecb\uff5e\uff5e",date:"2021-12-12"},{title:"\u6807\u9898",author:"\u4f5c\u8005",content:"\u8fd9\u662f\u7b80\u77ed\u7684\u6587\u7ae0\u7b80\u4ecb\uff5e\uff5e",date:"2021-12-12"}])};return Object(c.useEffect)((function(){0===e.length&&s()})),function(t){var e=t.callback,n=t.offset,a=r(Object(c.useState)(!1),2),o=a[0],i=a[1],l=function(){window.scrollY+window.innerHeight>=document.body.offsetHeight-n&&(!o&&e().then((function(t){t&&i(!1)})),i(!0))};Object(c.useEffect)((function(){return document.addEventListener("scroll",l),function(){document.removeEventListener("scroll",l)}}))}({offset:80,callback:function(){return new Promise((function(t,e){u(!0),setTimeout((function(){s(),u(!1),t(!0)}),3e3)}))}}),o.a.createElement("div",{className:"article-list"},e&&e.map((function(t,e){return o.a.createElement(l.b,{key:"".concat(t.title,"-").concat(e),to:{pathname:"/article",state:t}},o.a.createElement(f,{data:t}))})),i&&o.a.createElement("div",{className:"loading"},"Loading..."))}))}}]);
//# sourceMappingURL=3.03159ba1.chunk.js.map