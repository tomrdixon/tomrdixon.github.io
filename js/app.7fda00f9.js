(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-10f4b777":"98fbfeeb","chunk-2d0cebe9":"b460a8b9","chunk-7e82afc6":"4b8ea6bb"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-10f4b777":1,"chunk-7e82afc6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-10f4b777":"c00fbf80","chunk-2d0cebe9":"31d6cfe0","chunk-7e82afc6":"f4b3b51a"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav_content_wrapper"}},[n("navigation",{attrs:{sidebar_closed:e.sidebar_closed},on:{toggle:function(t){return e.toggle()}}}),n("router-view",{class:{active:!e.sidebar_closed},attrs:{id:"rv"}})],1),n("Footer")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"side_container"}},[n("nav",{staticClass:"navbar navbar-default"},[n("button",{staticClass:"navbar-btn",class:{active:e.sidebar_closed},attrs:{type:"button",id:"sidebarCollapse"},on:{click:function(t){return e.toggle()}}},[n("span"),n("span"),n("span")])]),n("nav",{class:{active:e.sidebar_closed},attrs:{id:"sidebar"}},[e._m(0)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-unstyled components"},[n("li",[n("a",{attrs:{href:"/"}},[e._v("About")])]),n("li",[n("a",{attrs:{href:"/test"}},[e._v("test")])]),n("li",{staticClass:"active"},[n("a",{attrs:{href:"#expSubmenu","data-toggle":"collapse","aria-expanded":"false"}},[e._v("Experience")]),n("ul",{staticClass:"collapse list-unstyled",attrs:{id:"expSubmenu"}},[n("li",[n("a",{attrs:{href:"#"}},[e._v("Overview")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("DevOps")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("GameDev")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Other")])])])]),n("li",[n("a",{attrs:{href:"#homeSubmenu","data-toggle":"collapse","aria-expanded":"false"}},[e._v("Tech")]),n("ul",{staticClass:"collapse list-unstyled",attrs:{id:"homeSubmenu"}},[n("li",[n("a",{attrs:{href:"#"}},[e._v("Overview")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("DevOps")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("GameDev")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Other")])])])]),n("li",[n("a",{attrs:{href:"/cv"}},[e._v("CURRICULUM VITAE ")])]),n("li",[n("a",{attrs:{href:"/contact"}},[e._v("Contact")])])])}],c={props:{sidebar_closed:Boolean},methods:{toggle:function(){this.$emit("toggle")}}},l=c,u=(n("9613"),n("2877")),d=Object(u["a"])(l,s,i,!1,null,"759856bc",null),f=d.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("footer",{staticClass:"container py-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md"},[n("small",{staticClass:"d-block mb-3 text-muted"},[e._v("© 2020")])]),n("div",{staticClass:"col-6 col-md"}),n("div",{staticClass:"col-6 col-md"}),n("div",{staticClass:"col-6 col-md"}),n("div",{staticClass:"col-6 col-md"})])])])}],h={},b=Object(u["a"])(h,p,v,!1,null,null,null),m=b.exports,g={name:"App",data:function(){return{sidebar_closed:!1}},methods:{toggle:function(){this.sidebar_closed=!this.sidebar_closed}},components:{Navigation:f,Footer:m}},_=g,y=(n("034f"),Object(u["a"])(_,a,o,!1,null,null,null)),C=y.exports,w=(n("d3b7"),n("5f2b"));r["a"].use(w["a"]);var k=new w["a"]({mode:"history",routes:[{path:"/",name:"Landing",component:function(){return n.e("chunk-7e82afc6").then(n.bind(null,"5f82"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-2d0cebe9").then(n.bind(null,"6180"))}},{path:"*",name:"unknown",component:function(){return n.e("chunk-10f4b777").then(n.bind(null,"e095"))}}]}),O=k,S=n("2f62");r["a"].use(S["a"]);var x=new S["a"].Store({state:{count:12},mutations:{increment:function(e){e.count++}},strict:!0});r["a"].config.productionTip=!1;var E=new r["a"]({router:O,store:x,render:function(e){return e(C)},created:function(){if(sessionStorage.redirect){var e=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(e)}}});E.$mount("#app")},"85ec":function(e,t,n){},9613:function(e,t,n){"use strict";var r=n("d706"),a=n.n(r);a.a},d706:function(e,t,n){}});
//# sourceMappingURL=app.7fda00f9.js.map