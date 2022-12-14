"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[844],{979:function(t,s,a){a.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover table-striped mt-4"},[s("thead",[t._t("thead",(function(){return[t._m(0)]}))],2),s("tbody",[t._t("tbody",(function(){return t._l(t.products,(function(a){return s("tr",{key:a.id},[s("td",[t._v(t._s(a.category))]),s("td",[t._v(t._s(a.title))]),s("td",{staticClass:"text-end"},[t._v(" "+t._s(t._f("currency")(a.origin_price))+" ")]),s("td",{staticClass:"text-end"},[t._v(" "+t._s(t._f("currency")(a.price))+" ")]),s("td",[a.is_enabled?s("span",{staticClass:"text-success"},[t._v("啟用")]):s("span",{staticClass:"text-danger"},[t._v("未啟用")])]),s("td",[s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn-outline-primary btn-sm me-1",on:{click:function(s){return t.openModal(!1,a)}}},[t._v(" 編輯 ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(s){return t.delModal(a)}}},[t._v(" 刪除 ")])])])])}))}))],2),t._t("tfoot",(function(){return[s("tfoot")]}))],2)])},n=[function(){var t=this,s=t._self._c;return s("tr",[s("th",{attrs:{width:"120"}},[t._v("分類")]),s("th",[t._v("產品名稱")]),s("th",{attrs:{width:"120"}},[t._v("原價")]),s("th",{attrs:{width:"120"}},[t._v("售價")]),s("th",{attrs:{width:"100"}},[t._v("是否啟用")]),s("th",{attrs:{width:"120"}},[t._v("編輯")])])}],r={props:["item","products"],methods:{openModal(t,s){this.$emit("edit",t,s)},delModal(t){this.$emit("delete",t)}}},o=r,c=a(1001),i=(0,c.Z)(o,e,n,!1,null,null,null),u=i.exports},1426:function(t,s,a){a.d(s,{Z:function(){return i}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"jumbotron d-flex justify-content-center align-items-end"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center align-items-end"},[s("div",{staticClass:"col-md-8"},[t._t("content",(function(){return[t._m(0)]}))],2)])])])},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"text-center"},[s("h1",{staticClass:"display-3 fw-bold text-white"},[t._v("Custom jumbotron")]),s("p",{staticClass:"fs-4 text-white"},[t._v("Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.")]),s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"}},[t._v("搶購去")])])}],r=a(1001),o={},c=(0,r.Z)(o,e,n,!1,null,null,null),i=c.exports},4844:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});a(7658);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"shop"},[s("Jumbotron",{scopedSlots:t._u([{key:"content",fn:function(){return[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb justify-content-center fs-3 bg-dark"},[s("router-link",{staticClass:"breadcrumb-item",attrs:{to:"/"}},[t._v("首頁")]),s("li",{staticClass:"breadcrumb-item active text-white"},[t._v("購物車")])],1)])]},proxy:!0}])}),t.cartData.length>0?s("div",{staticClass:"container"},[s("div",{staticClass:"cart-with-item"},[s("Table",{scopedSlots:t._u([{key:"thead",fn:function(){return[s("tr",[s("th",[t._v(" ")]),s("th",{attrs:{colspan:"2"}},[t._v("商品")]),s("th",[t._v("單價")]),s("th",[t._v("數量")]),s("th",[t._v("總價")])])]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.cartData,(function(a){return s("tr",{key:a.product_id,staticClass:"align-middle"},[s("td",[s("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(s){return t.deleteCart(a)}}},[t.status.delete?s("i",{staticClass:"fas fa-spinner fa-spin me-1"}):s("i",{staticClass:"fa-solid fa-trash-can"})])]),s("td",[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.$router.push(`/product/${a.product_id}`)}}},[s("img",{staticClass:"product-image",attrs:{src:a.imageUrl,alt:a.name}})])]),s("td",[s("h3",[s("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.$router.push(`/product/${a.product_id}`)}}},[t._v(" "+t._s(a.name))])])]),s("td",[t._v(t._s(t._f("currency")(a.price)))]),s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"item.qty"}],staticClass:"form-select",on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(a,"qty",s.target.multiple?e:e[0])},t.getTotal]}},t._l(10,(function(a){return s("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])})),0)]),s("td",[t._v(t._s(t._f("currency")(a.price*a.qty)))])])}))},proxy:!0},{key:"tfoot",fn:function(){return[s("tfoot",[s("tr",[s("td",{staticClass:"text-end",attrs:{colspan:"5"}},[t._v("總計")]),s("td",{staticClass:"text-end"},[t._v(t._s(t._f("currency")(t.subTotal)))])])])]},proxy:!0}],null,!1,2384341028)}),s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"cart-total p-4 mt-2"},[s("h3",[t._v("購物車金額")]),s("p",{staticClass:"d-flex"},[s("span",[t._v("小計")]),s("span",[t._v(t._s(t._f("currency")(t.subTotal)))])]),s("hr"),s("p",{staticClass:"d-flex justify-content-end m-0"},[s("span",[t._v("總價")]),s("strong",{staticClass:"fs-5"},[t._v(t._s(t._f("currency")(t.subTotal)))])])]),s("button",{staticClass:"btn w-100 btn-primary my-2",attrs:{type:"button"},on:{click:t.addCart}},[t._v("結帳")])])])],1)]):s("div",{staticClass:"container-fluid px-0"},[s("div",{staticClass:"cart-without-item"},[s("div",{staticClass:"p-lg-5 p-0 mb-4 bg-light bg-cart"},[s("div",{staticClass:"container-fluid py-5 transbox"},[s("h1",{staticClass:"display-5 fw-bold text-center"},[t._v("購物車無商品")]),s("button",{staticClass:"btn btn-outline-primary btn-lg d-block mx-auto",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/shop")}}},[t._v("繼續去購物")])])])])])],1)},n=[],r=a(1426),o=a(979),c={data(){return{isLoading:!1,products:[],product:{},status:{info:"",addCart:"",delete:""},pagination:{},cart:{carts:[]},coupon_code:"",cartData:JSON.parse(localStorage.getItem("cartData"))||[],subTotal:0,cacheData:[],cache:{}}},methods:{getProducts(t=1){const s=this,a=`https://vue-course-api.hexschool.io/api/gunshop/products?page=${t}`;s.$http.get(a).then((t=>{s.products=t.data.products,s.pagination=t.data.pagination,console.log(s.products)}))},getProduct(){const t=this,s=t.$route.params.id,a=`https://vue-course-api.hexschool.io/api/gunshop/product/${s}`;t.$http.get(a).then((s=>{t.product=s.data.product}))},addCart(){const t=this,s="https://vue-course-api.hexschool.io/api/gunshop/cart";t.cartData.forEach((a=>{t.cache={product_id:a.product_id,qty:a.qty},t.$http.post(s,{data:t.cache}).then((s=>{console.log(s),t.$bus.$emit("msg-pop",s.data.message,"success")}))})),t.$router.push("/checkout")},delCartItem(t){const s=this,a=`https://vue-course-api.hexschool.io/api/gunshop/cart/${t}`;s.status.delete=t,s.$http.delete(a).then((t=>{s.$bus.$emit("msg-pop",t.data.message,"success"),s.getCart(),s.status.delete=""}))},deleteCart(t){const s=this;s.cartData.splice(s.cartData.indexOf(t),1),s.getTotal(),localStorage.setItem("cartData",JSON.stringify(s.cartData)),s.$bus.$emit("local-pop"),s.$bus.$emit("msg-pop","已刪除","success")},getTotal(){const t=this;t.subTotal=0,t.cartData.forEach((s=>{t.subTotal+=Number(s.price*s.qty)}))},getCart(){const t=this,s="https://vue-course-api.hexschool.io/api/gunshop/cart";t.$http.get(s).then((s=>{t.cart=s.data.data,console.log(t.cart)}))}},created(){this.getTotal()},components:{Jumbotron:r.Z,Table:o.Z}},i=c,u=a(1001),l=(0,u.Z)(i,e,n,!1,null,"0a1059b8",null),d=l.exports}}]);
//# sourceMappingURL=844.43bbdc61.js.map