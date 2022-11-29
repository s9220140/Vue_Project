"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[140],{979:function(t,s,e){e.d(s,{Z:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover table-striped mt-4"},[s("thead",[t._t("thead",(function(){return[t._m(0)]}))],2),s("tbody",[t._t("tbody",(function(){return t._l(t.products,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.category))]),s("td",[t._v(t._s(e.title))]),s("td",{staticClass:"text-end"},[t._v(" "+t._s(t._f("currency")(e.origin_price))+" ")]),s("td",{staticClass:"text-end"},[t._v(" "+t._s(t._f("currency")(e.price))+" ")]),s("td",[e.is_enabled?s("span",{staticClass:"text-success"},[t._v("啟用")]):s("span",{staticClass:"text-danger"},[t._v("未啟用")])]),s("td",[s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn-outline-primary btn-sm me-1",on:{click:function(s){return t.openModal(!1,e)}}},[t._v(" 編輯 ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(s){return t.delModal(e)}}},[t._v(" 刪除 ")])])])])}))}))],2),t._t("tfoot",(function(){return[s("tfoot")]}))],2)])},n=[function(){var t=this,s=t._self._c;return s("tr",[s("th",{attrs:{width:"120"}},[t._v("分類")]),s("th",[t._v("產品名稱")]),s("th",{attrs:{width:"120"}},[t._v("原價")]),s("th",{attrs:{width:"120"}},[t._v("售價")]),s("th",{attrs:{width:"100"}},[t._v("是否啟用")]),s("th",{attrs:{width:"120"}},[t._v("編輯")])])}],o={props:["item","products"],methods:{openModal(t,s){this.$emit("edit",t,s)},delModal(t){this.$emit("delete",t)}}},c=o,r=e(1001),i=(0,r.Z)(c,a,n,!1,null,null,null),u=i.exports},1426:function(t,s,e){e.d(s,{Z:function(){return i}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"jumbotron d-flex justify-content-center align-items-end"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center align-items-end"},[s("div",{staticClass:"col-md-8"},[t._t("content",(function(){return[t._m(0)]}))],2)])])])},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"text-center"},[s("h1",{staticClass:"display-3 fw-bold text-white"},[t._v("Custom jumbotron")]),s("p",{staticClass:"fs-4 text-white"},[t._v("Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.")]),s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"}},[t._v("搶購去")])])}],o=e(1001),c={},r=(0,o.Z)(c,a,n,!1,null,null,null),i=r.exports},8140:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});e(7658);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"shop"},[s("Jumbotron",{scopedSlots:t._u([{key:"content",fn:function(){return[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb justify-content-center fs-3 bg-dark"},[s("router-link",{staticClass:"breadcrumb-item",attrs:{to:"/"}},[t._v("首頁")]),s("li",{staticClass:"breadcrumb-item active text-white"},[t._v("購物車")])],1)])]},proxy:!0}])}),s("div",{staticClass:"container"},[s("Table",{scopedSlots:t._u([{key:"thead",fn:function(){return[s("tr",[s("th",[t._v(" ")]),s("th",{attrs:{colspan:"2"}},[t._v("商品")]),s("th",[t._v("單價")]),s("th",[t._v("數量")]),s("th",[t._v("總價")])])]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.cart.carts,(function(e){return s("tr",{key:e.id,staticClass:"align-middle"},[s("td",[s("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(s){return t.delCartItem(e.id)}}},[t.status.delete?s("i",{staticClass:"fas fa-spinner fa-spin me-1"}):s("i",{staticClass:"fa-solid fa-trash-can"})])]),s("td",[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.$router.push(`/product/${e.product.id}`)}}},[s("img",{staticClass:"product-image",attrs:{src:e.product.imageUrl,alt:e.product.title}})])]),s("td",[s("h3",[s("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.$router.push(`/product/${e.product.id}`)}}},[t._v(" "+t._s(e.product.title))])]),e.coupon?s("p",{staticClass:"text-success mb-0"},[t._v("已套用優惠券")]):t._e()]),s("td",[t._v(t._s(t._f("currency")(e.product.price)))]),s("td",[t._v(t._s(e.qty))]),s("td",[t._v(t._s(t._f("currency")(e.total)))])])}))},proxy:!0},{key:"tfoot",fn:function(){return[s("tfoot",[s("tr",[s("td",{staticClass:"text-end",attrs:{colspan:"5"}},[t._v("總計")]),s("td",{staticClass:"text-end"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!==t.cart.total?s("tr",[s("td",{staticClass:"text-end text-success",attrs:{colspan:"5"}},[t._v("折扣價")]),s("td",{staticClass:"text-end text-success"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e()])]},proxy:!0}])}),s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"cart-total p-4 mt-2"},[s("h3",[t._v("購物車金額")]),s("p",{staticClass:"d-flex"},[s("span",[t._v("小計")]),s("span",[t._v(t._s(t._f("currency")(t.cart.total)))])]),t._m(0),t._l(t.cart.carts,(function(e){return s("p",{key:e.coupon.id,staticClass:"d-flex"},[s("span",[t._v("Discount")]),s("span",[t._v("-"+t._s(100-e.coupon.percent)+"%")])])})),s("hr"),s("p",{staticClass:"d-flex justify-content-end m-0"},[s("span",[t._v("總價")]),s("strong",{staticClass:"fs-5"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!==t.cart.total?s("p",{staticClass:"d-flex justify-content-end m-0 text-success"},[s("span",[t._v("折扣價")]),s("strong",{staticClass:"fs-5"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e()],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.cart.carts.length>0,expression:"cart.carts.length > 0"}],staticClass:"input-group input-group-sm mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.addCouponCode.apply(null,arguments)},input:function(s){s.target.composing||(t.coupon_code=s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" 套用優惠碼 ")])])]),s("button",{staticClass:"btn w-100 btn-primary my-2",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/checkout")}}},[t._v("結帳")])])])],1)],1)},n=[function(){var t=this,s=t._self._c;return s("p",{staticClass:"d-flex"},[s("span",[t._v("Delivery")]),s("span",[t._v("0.00")])])}],o=e(1426),c=e(979),r={data(){return{isLoading:!1,products:[],product:{},status:{info:"",addCart:"",delete:""},pagination:{},cart:{carts:[]},coupon_code:""}},methods:{getProducts(t=1){const s=this,e=`https://vue-course-api.hexschool.io/api/gunshop/products?page=${t}`;s.$http.get(e).then((t=>{s.products=t.data.products,s.pagination=t.data.pagination,console.log(s.products)}))},getProduct(){const t=this,s=t.$route.params.id,e=`https://vue-course-api.hexschool.io/api/gunshop/product/${s}`;t.$http.get(e).then((s=>{t.product=s.data.product}))},addCart(t,s=1){const e=this,a="https://vue-course-api.hexschool.io/api/gunshop/cart";e.status.addCart=t;const n={product_id:t,qty:s};e.$http.post(a,{data:n}).then((t=>{e.$bus.$emit("msg-pop",t.data.message,"success"),e.status.addCart="",e.getCart()}))},getCart(){const t=this,s="https://vue-course-api.hexschool.io/api/gunshop/cart";t.$http.get(s).then((s=>{t.cart=s.data.data,console.log(t.cart)}))},addCouponCode(){const t=this,s="https://vue-course-api.hexschool.io/api/gunshop/coupon",e={code:t.coupon_code};t.$http.post(s,{data:e}).then((s=>{console.log(s),s.data.success?t.$bus.$emit("msg-pop",s.data.message,"success"):t.$bus.$emit("msg-pop",s.data.message,"danger"),t.coupon_code="",t.getCart()}))},delCartItem(t){const s=this,e=`https://vue-course-api.hexschool.io/api/gunshop/cart/${t}`;s.status.delete=t,s.$http.delete(e).then((t=>{s.$bus.$emit("msg-pop",t.data.message,"success"),s.getCart(),s.status.delete=""}))}},created(){this.getCart()},components:{Jumbotron:o.Z,Table:c.Z}},i=r,u=e(1001),l=(0,u.Z)(i,a,n,!1,null,"e395c7ee",null),d=l.exports}}]);
//# sourceMappingURL=140.ec16644a.js.map