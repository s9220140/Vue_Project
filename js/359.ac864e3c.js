"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[359],{2907:function(t,a,e){e.d(a,{Z:function(){return c}});e(7658);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"card h-100"},[a("img",{staticClass:"product-image pt-3 h-50 w-50 mx-auto",attrs:{src:t.item.imageUrl,alt:t.item.title},on:{click:function(a){return a.preventDefault(),t.$router.push(`/product/${t.item.id}`)}}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push(`/product/${t.item.id}`)}}},[t._v(t._s(t.item.title))])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.item.price?t._e():a("div",{staticClass:"h5"},[t._v(t._s(t.item.origin_price)+" 元")]),t.item.price?a("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.item.origin_price)+" 元")]):t._e(),t.item.price?a("div",{staticClass:"h5 text-danger"},[t._v("現在只要 "+t._s(t.item.price)+" 元")]):t._e()])]),t._t("footer",(function(){return[a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:t.getProduct}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.status.info===t.item.id,expression:"status.info === item.id"}],staticClass:"fas fa-spinner fa-spin me-1"}),t._v(" 查看更多 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm ms-auto",attrs:{type:"button"},on:{click:t.addCart}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.status.addCart===t.item.id,expression:"status.addCart === item.id"}],staticClass:"fa-solid fa-sync fa-spin me-1"}),t._v(" 加到購物車 ")])])]}))],2)},i=[],o={props:["item","status"],methods:{getProduct(){this.$emit("getItem")},addCart(){this.$emit("addCart")}}},n=o,r=e(1001),l=(0,r.Z)(n,s,i,!1,null,null,null),c=l.exports},7846:function(t,a,e){e.d(a,{Z:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"modal fade",attrs:{"data-bs-backdrop":"static",id:"modalComponent",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"vertical-alignment-helper"},[a("div",{staticClass:"modal-dialog modal-md vertical-align-center",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-primary text-white"},[a("h5",{staticClass:"modal-title me-3",attrs:{id:"exampleModalLabel"}},[t._t("modalTitle",(function(){return[t.isNew?a("span",[t._v("新增產品")]):a("span",[t._v("編輯產品")])]}))],2),a("button",{staticClass:"btn-close bg-white",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a("div",{staticClass:"modal-body"},[t._t("modalBody",(function(){return[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",[a("label",{staticClass:"col-form-label",attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.imageUrl,expression:"item.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.item.imageUrl},on:{input:function(a){a.target.composing||t.$set(t.item,"imageUrl",a.target.value)}}})]),a("div",[a("label",{staticClass:"col-form-label",attrs:{for:"customFile"}},[t._v("或 上傳圖片 "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.status.upload_img,expression:"status.upload_img"}],staticClass:"fa-solid fa-cog fa-spin"})]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.item.imageUrl,alt:t.item.fileName}})]),a("div",{staticClass:"col-sm-8"},[a("div",[a("label",{staticClass:"col-form-label",attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.item.title},on:{input:function(a){a.target.composing||t.$set(t.item,"title",a.target.value)}}})]),a("div",[a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.category,expression:"item.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.item.category},on:{input:function(a){a.target.composing||t.$set(t.item,"category",a.target.value)}}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.unit,expression:"item.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.item.unit},on:{input:function(a){a.target.composing||t.$set(t.item,"unit",a.target.value)}}})])]),a("div",[a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.origin_price,expression:"item.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.item.origin_price},on:{input:function(a){a.target.composing||t.$set(t.item,"origin_price",a.target.value)}}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.price,expression:"item.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.item.price},on:{input:function(a){a.target.composing||t.$set(t.item,"price",a.target.value)}}})])]),a("hr"),a("div",[a("label",{staticClass:"col-form-label",attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.description,expression:"item.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.item.description},on:{input:function(a){a.target.composing||t.$set(t.item,"description",a.target.value)}}})]),a("div",[a("label",{staticClass:"col-form-label",attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.content,expression:"item.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.item.content},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:a.altKey?t.updateProduct.apply(null,arguments):null},input:function(a){a.target.composing||t.$set(t.item,"content",a.target.value)}}})]),a("div",{staticClass:"mt-2"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.is_enabled,expression:"item.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.item.is_enabled)?t._i(t.item.is_enabled,null)>-1:t._q(t.item.is_enabled,1)},on:{change:function(a){var e=t.item.is_enabled,s=a.target,i=s.checked?1:0;if(Array.isArray(e)){var o=null,n=t._i(e,o);s.checked?n<0&&t.$set(t.item,"is_enabled",e.concat([o])):n>-1&&t.$set(t.item,"is_enabled",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.item,"is_enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])])]}))],2),a("div",{staticClass:"modal-footer"},[t._t("modalFooter",(function(){return[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateData}},[t.status.update?a("i",{staticClass:"fas fa-spinner fa-spin me-1"}):t._e(),t._v("確認 ")])]}))],2)])])])])])},i=[],o={props:["item","isNew","status"],methods:{updateData(){this.$emit("update")},uploadFile(){console.log(this);const t=this,a=t.$refs.files.files[0];t.item.fileName=a.name;const e=new FormData;e.append("file-to-upload",a);const s="https://vue-course-api.hexschool.io/api/gunshop/admin/upload";t.status.upload_img=!0,t.$http.post(s,e,{headers:{"Content-Type":"multipart/form-data"}}).then((a=>{t.status.upload_img=!1,console.log(a.data),a.data.success?t.$set(t.item,"imageUrl",a.data.imageUrl):t.$bus.$emit("msg-pop",a.data.message,"danger"),document.getElementById("customFile").value=""}))}}},n=o,r=e(1001),l=(0,r.Z)(n,s,i,!1,null,"465c3649",null),c=l.exports},2599:function(t,a,e){e.d(a,{Z:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pages.current_page-1)}}},[t._v("Previous")])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])])},i=[],o={props:["pages"],methods:{changePage(t){this.$emit("pageItem",t)}}},n=o,r=e(1001),l=(0,r.Z)(n,s,i,!1,null,null,null),c=l.exports},1426:function(t,a,e){e.d(a,{Z:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"jumbotron d-flex justify-content-center align-items-end"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row justify-content-center align-items-end"},[a("div",{staticClass:"col-md-8"},[t._t("content",(function(){return[t._m(0)]}))],2)])])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"text-center"},[a("h1",{staticClass:"display-3 fw-bold text-white"},[t._v("Custom jumbotron")]),a("p",{staticClass:"fs-4 text-white"},[t._v("Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.")]),a("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"}},[t._v("搶購去")])])}],o=e(1001),n={},r=(0,o.Z)(n,s,i,!1,null,null,null),l=r.exports},359:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"shop"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),a("Jumbotron",{scopedSlots:t._u([{key:"content",fn:function(){return[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb justify-content-center fs-3 bg-dark"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{staticClass:"text-secondary",attrs:{href:"#"}},[t._v("首頁")])]),a("li",{staticClass:"breadcrumb-item active text-white",attrs:{"aria-current":"page"}},[t._v(" 商品 ")])])])]},proxy:!0}])}),a("div",{staticClass:"container my-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-md-12"},[a("div",{staticClass:"categories"},[a("h3",[t._v("商品種類")]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item list-group-item-action",class:{active:"全部商品"===t.isChoose},on:{click:function(a){return t.changeTab("全部商品")}}},[t._v(" 全部商品"),t._m(0)]),a("li",{staticClass:"list-group-item list-group-item-action",class:{active:"手槍"===t.isChoose},on:{click:function(a){return t.changeTab("手槍")}}},[t._v(" 手槍"),t._m(1)]),a("li",{staticClass:"list-group-item list-group-item-action",class:{active:"步槍"===t.isChoose},on:{click:function(a){return t.changeTab("步槍")}}},[t._v(" 步槍"),t._m(2)]),a("li",{staticClass:"list-group-item list-group-item-action",class:{active:"霰彈槍"===t.isChoose},on:{click:function(a){return t.changeTab("霰彈槍")}}},[t._v(" 霰彈槍"),t._m(3)]),a("li",{staticClass:"list-group-item list-group-item-action",class:{active:"彈藥"===t.isChoose},on:{click:function(a){return t.changeTab("彈藥")}}},[t._v(" 彈藥"),t._m(4)]),a("li",{staticClass:"list-group-item list-group-item-action",class:{active:"配件"===t.isChoose},on:{click:function(a){return t.changeTab("配件")}}},[t._v(" 配件"),t._m(5)])])]),t._m(6)]),a("div",{staticClass:"col-lg-9 col-md-12"},[t._m(7),a("div",{staticClass:"row"},[t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"col-lg-4 col-md-6 mb-3"},[a("Card",{attrs:{item:e,status:t.status},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.getProduct(e.id)}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.status.info===e.id,expression:"status.info === item.id"}],staticClass:"fas fa-spinner fa-spin me-1"}),t._v(" 快速瀏覽 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm ms-auto",attrs:{type:"button"},on:{click:function(a){return t.addToWish(e)}}},[t._v(" 加到收藏 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm ms-auto",attrs:{type:"button"},on:{click:function(a){return t.addToCart(e)}}},[t._v(" 加到購物車 ")])])]},proxy:!0}],null,!0)})],1)})),a("div",{staticClass:"d-flex justify-content-center my-3"},[a("Pagination",{attrs:{pages:t.pagination},on:{pageItem:t.getProducts}})],1)],2)])])]),a("Modal",{scopedSlots:t._u([{key:"modalTitle",fn:function(){return[t._v(" "+t._s(t.product.title)+" ")]},proxy:!0},{key:"modalBody",fn:function(){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:t.product.title}})]),a("div",{staticClass:"col-md-6"},[a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-3"},[t._v(t._s(t.product.content))])])])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():a("div",{staticClass:"h4"},[t._v(" "+t._s(t.product.origin_price)+" 元 ")]),t.product.price?a("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price?a("div",{staticClass:"h4 text-danger"},[t._v(" 現在只要 "+t._s(t.product.price)+" 元 ")]):t._e()]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-select mt-3",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?e:e[0])}}},t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" 選購 "+t._s(e)+" "),t.product.unit?t._e():a("span",[t._v("個")]),t._v(" "+t._s(t.product.unit)+" ")])})),0)]},proxy:!0},{key:"modalFooter",fn:function(){return[a("div",{staticClass:"text-muted text-nowrap me-3"},[t._v(" 小計 "),a("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addCart(t.product.id,t.product.num)}}},[t.product.id===t.status.addCart?a("i",{staticClass:"fas fa-spinner fa-spin me-1"}):t._e(),t._v(" 加到購物車 ")])]},proxy:!0}])})],1)},i=[function(){var t=this,a=t._self._c;return a("span",[a("i",{staticClass:"fa-solid fa-chevron-right"})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{staticClass:"fa-solid fa-chevron-right"})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{staticClass:"fa-solid fa-chevron-right"})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{staticClass:"fa-solid fa-chevron-right"})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{staticClass:"fa-solid fa-chevron-right"})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{staticClass:"fa-solid fa-chevron-right"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"blog"},[a("h3",{staticClass:"my-3"},[t._v("Recent Blog")]),a("div",{staticClass:"d-flex mb-3"},[a("img",{staticClass:"blog-img me-3",attrs:{src:"https://images.unsplash.com/photo-1633220744880-cdf6c2b39f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGd1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",alt:""}}),a("div",{staticClass:"text"},[a("p",{staticClass:"mb-2"},[t._v(" Even the all-powerful Pointing has no control about the blind texts ")]),a("div",{staticClass:"date"},[a("span",{staticClass:"me-3"},[a("i",{staticClass:"fa-solid fa-calendar-days me-1"}),t._v(" Apr. 18, 2020")]),a("span",[a("i",{staticClass:"fa-solid fa-comment me-1"}),t._v("19")])])])]),a("div",{staticClass:"d-flex mb-3"},[a("img",{staticClass:"blog-img me-3",attrs:{src:"https://images.unsplash.com/photo-1633220744880-cdf6c2b39f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGd1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",alt:""}}),a("div",{staticClass:"text"},[a("p",{staticClass:"mb-2"},[t._v(" Even the all-powerful Pointing has no control about the blind texts ")]),a("div",{staticClass:"date"},[a("span",{staticClass:"me-3"},[a("i",{staticClass:"fa-solid fa-calendar-days me-1"}),t._v(" Apr. 18, 2020")]),a("span",[a("i",{staticClass:"fa-solid fa-comment me-1"}),t._v("19")])])])]),a("div",{staticClass:"d-flex mb-3"},[a("img",{staticClass:"blog-img me-3",attrs:{src:"https://images.unsplash.com/photo-1633220744880-cdf6c2b39f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGd1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",alt:""}}),a("div",{staticClass:"text"},[a("p",{staticClass:"mb-2"},[t._v(" Even the all-powerful Pointing has no control about the blind texts ")]),a("div",{staticClass:"date"},[a("span",{staticClass:"me-3"},[a("i",{staticClass:"fa-solid fa-calendar-days me-1"}),t._v(" Apr. 18, 2020")]),a("span",[a("i",{staticClass:"fa-solid fa-comment me-1"}),t._v("19")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-12 d-flex justify-content-between align-items-center"},[a("h3",[t._v("選擇商品種類")]),a("div",{staticClass:"dropdown open"},[a("button",{staticClass:"btn btn-light dropdown-toggle",attrs:{type:"button",id:"triggerId","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" 選擇商品 ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"triggerId"}},[a("button",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")])])])])])}],o=(e(7658),e(2907)),n=e(1426),r=e(2166),l=e(7846),c=e(2599),d={components:{Jumbotron:n.Z,Card:o.Z,Modal:l.Z,Pagination:c.Z},data(){return{isLoading:!1,products:[],product:{},status:{info:"",addCart:"",delete:"",wish:""},pagination:{},cartData:JSON.parse(localStorage.getItem("cartData"))||[],wishData:JSON.parse(localStorage.getItem("wishData"))||[],cacheCartID:[],wishDataID:[],cartContent:{},wishContent:{},cache:{},qty:0,isChoose:"全部商品",pagination:{page_size:6,total_pages:1,current_page:1,has_pre:!1,has_next:!1},data_length:"",page_size:"",now_page:""}},methods:{getPage(t=1){const a=this;a.pagination.current_page=t},getProducts(t=1){const a=this,e=`https://vue-course-api.hexschool.io/api/gunshop/products?page=${t}`;a.$http.get(e).then((t=>{a.products=t.data.products,a.pagination=t.data.pagination}))},getProduct(t){const a=this,e=`https://vue-course-api.hexschool.io/api/gunshop/product/${t}`;a.status.info=t,a.$http.get(e).then((t=>{a.product=t.data.product;const e=new r.u_("#modalComponent");e.show(),a.status.info=""}))},addToCart(t){const a=this;a.cartData.forEach((t=>{a.cacheCartID.push(t.product_id)})),-1===a.cacheCartID.indexOf(t.id)?(a.cartContent={imageUrl:t.imageUrl,product_id:t.id,qty:1,name:t.title,origin_price:t.origin_price,price:t.price,unit:t.unit},a.cartData.push(a.cartContent),localStorage.setItem("cartData",JSON.stringify(a.cartData)),a.$bus.$emit("local-pop"),a.$bus.$emit("msg-pop","已加入購物車","success")):(a.cartData.forEach(((e,s)=>{e.product_id===t.id&&(a.qty=e.qty,a.cache={imageUrl:t.imageUrl,product_id:t.id,qty:a.qty+=1,name:t.title,origin_price:t.origin_price,price:t.price,unit:t.unit},a.cartData.splice(s,1))})),a.cartData.push(a.cache),localStorage.setItem("cartData",JSON.stringify(a.cartData)),a.$bus.$emit("msg-pop","已加入購物車","success"))},addToWish(t){const a=this;a.wishData.forEach((t=>{a.wishDataID.push(t.product_id)})),-1===a.wishDataID.indexOf(t.id)&&(a.wishContent={imageUrl:t.imageUrl,product_id:t.id,name:t.title,price:t.price},a.wishData.push(a.wishContent),localStorage.setItem("wishData",JSON.stringify(a.wishData)),a.$bus.$emit("local-pop"),a.$bus.$emit("msg-pop","已加入收藏","success"))},changeTab(t){const a=this;a.isChoose=t,a.pagination.current_page=1}},computed:{filterData(){const t=this;return"全部商品"===t.isChoose?t.products:t.products.filter((a=>{a.category,t.isChoose}))},filterPage(){const t=this;return t.data_length=t.filterData.length,t.page_size=t.page_size,t.pagination.total_pages=Math.ceil(t.data_length/t.page_size),t.now_page>1?t.pagination.has_pre=!0:t.pagination.has_pre=!1,t.now_page<t.pagination.total_pages?t.pagination.has_next=!0:t.pagination.has_next=!1,t.filterData.filter((a=>a<t.now_page*t.page_size&&a>=(t.now_page-1)*t.page_size))}},created(){this.getProducts()}},u=d,p=e(1001),m=(0,p.Z)(u,s,i,!1,null,"2834a9c4",null),f=m.exports}}]);
//# sourceMappingURL=359.ac864e3c.js.map