(function(){"use strict";var e={6504:function(e,n,t){var r=t(6369),o=t(70),i=t(6423),u=t(3752),a=t.n(u),c=t(5708),s=t(5522),l=t(8815),d=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},f=[],p=t(1001),h={},m=(0,p.Z)(h,d,f,!1,null,null,null),v=m.exports,b=t(2631);r.ZP.use(b.ZP);const g=[{path:"*",redirect:"/login"},{path:"/admin",name:"Dashboard",component:()=>t.e(264).then(t.bind(t,6264)),children:[{path:"products",name:"Products",component:()=>Promise.all([t.e(873),t.e(471)]).then(t.bind(t,7471)),meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:()=>Promise.all([t.e(873),t.e(138)]).then(t.bind(t,5138)),meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:()=>Promise.all([t.e(873),t.e(664)]).then(t.bind(t,664)),meta:{requiresAuth:!0}}]},{path:"/",name:"user",component:()=>t.e(264).then(t.bind(t,6264)),children:[{path:"customer_order",name:"CustomerOrders",component:()=>Promise.all([t.e(873),t.e(451)]).then(t.bind(t,6451))},{path:"customer_checkout/:orderId",name:"CustomerCheckout",component:()=>t.e(818).then(t.bind(t,818))}]},{path:"/login",name:"Login",component:()=>t.e(364).then(t.bind(t,7364))}],y=new b.ZP({routes:g,linkActiveClass:"active"});var P=y;function w(e){const n=Number(e);return`$${n.toFixed(0).replace(/./g,((e,n,t)=>{const r=n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e;return r}))}`}function O(e){const n=new Date(1e3*e);return n.toLocaleDateString()}r.ZP.prototype.$bus=new r.ZP,r.ZP.config.productionTip=!1,r.ZP.use(i.Z,o.ZP),Object.keys(l).forEach((e=>{(0,c.l7)(e,l[e])})),(0,c.NC)("zh_TW",s),(0,c.NC)({zh_TW:{names:{email:"電子信箱",name:"姓名",tel:"電話",address:"地址"},fields:{}}}),r.ZP.component("ValidationProvider",c.d_),r.ZP.component("ValidationObserver",c._j),(0,c.jQ)({classes:{valid:"is-valid",invalid:"is-invalid"}}),r.ZP.component("Loading",a()),r.ZP.filter("currency",w),r.ZP.filter("date",O),new r.ZP({router:P,render:e=>e(v)}).$mount("#app"),P.beforeEach(((e,n,t)=>{if(e.meta.requiresAuth){const e="https://vue-course-api.hexschool.io/api/user/check";o.ZP.post(e).then((e=>{e.data.success?t():t({path:"/login"})}))}else t()}))}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{138:"18de8c0f",264:"918eb852",364:"c48a0056",451:"c97caf79",471:"b87afad1",664:"736a0704",818:"17420b21",873:"7c6b29fc"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{264:"25de0065",364:"6464215c",451:"2a3a82f9"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="project:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var f=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Vue_Project/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={264:1,364:1,451:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkproject"]=self["webpackChunkproject"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6504)}));r=t.O(r)})();
//# sourceMappingURL=app.8267d79f.js.map