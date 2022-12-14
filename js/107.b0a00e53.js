"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[107],{7846:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modal fade",attrs:{"data-bs-backdrop":"static",id:"modalComponent",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"vertical-alignment-helper"},[e("div",{staticClass:"modal-dialog modal-md vertical-align-center",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[e("div",{staticClass:"modal-header bg-primary text-white"},[e("h5",{staticClass:"modal-title me-3",attrs:{id:"exampleModalLabel"}},[t._t("modalTitle",(function(){return[t.isNew?e("span",[t._v("新增產品")]):e("span",[t._v("編輯產品")])]}))],2),e("button",{staticClass:"btn-close bg-white",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),e("div",{staticClass:"modal-body"},[t._t("modalBody",(function(){return[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",[e("label",{staticClass:"col-form-label",attrs:{for:"image"}},[t._v("輸入圖片網址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.imageUrl,expression:"item.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.item.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.item,"imageUrl",e.target.value)}}})]),e("div",[e("label",{staticClass:"col-form-label",attrs:{for:"customFile"}},[t._v("或 上傳圖片 "),e("i",{directives:[{name:"show",rawName:"v-show",value:t.status.upload_img,expression:"status.upload_img"}],staticClass:"fa-solid fa-cog fa-spin"})]),e("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),e("img",{staticClass:"img-fluid",attrs:{src:t.item.imageUrl,alt:t.item.fileName}})]),e("div",{staticClass:"col-sm-8"},[e("div",[e("label",{staticClass:"col-form-label",attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})]),e("div",[e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"col-form-label",attrs:{for:"category"}},[t._v("分類")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.category,expression:"item.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.item.category},on:{input:function(e){e.target.composing||t.$set(t.item,"category",e.target.value)}}})]),e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"col-form-label",attrs:{for:"price"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.unit,expression:"item.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.item.unit},on:{input:function(e){e.target.composing||t.$set(t.item,"unit",e.target.value)}}})])]),e("div",[e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"col-form-label",attrs:{for:"origin_price"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.origin_price,expression:"item.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.item.origin_price},on:{input:function(e){e.target.composing||t.$set(t.item,"origin_price",e.target.value)}}})]),e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"col-form-label",attrs:{for:"price"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.price,expression:"item.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.item.price},on:{input:function(e){e.target.composing||t.$set(t.item,"price",e.target.value)}}})])]),e("hr"),e("div",[e("label",{staticClass:"col-form-label",attrs:{for:"description"}},[t._v("產品描述")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.description,expression:"item.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.item.description},on:{input:function(e){e.target.composing||t.$set(t.item,"description",e.target.value)}}})]),e("div",[e("label",{staticClass:"col-form-label",attrs:{for:"content"}},[t._v("說明內容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.content,expression:"item.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.item.content},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.altKey?t.updateProduct.apply(null,arguments):null},input:function(e){e.target.composing||t.$set(t.item,"content",e.target.value)}}})]),e("div",{staticClass:"mt-2"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.is_enabled,expression:"item.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.item.is_enabled)?t._i(t.item.is_enabled,null)>-1:t._q(t.item.is_enabled,1)},on:{change:function(e){var a=t.item.is_enabled,s=e.target,i=s.checked?1:0;if(Array.isArray(a)){var r=null,o=t._i(a,r);s.checked?o<0&&t.$set(t.item,"is_enabled",a.concat([r])):o>-1&&t.$set(t.item,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.item,"is_enabled",i)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])])]}))],2),e("div",{staticClass:"modal-footer"},[t._t("modalFooter",(function(){return[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" 取消 ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateData}},[t.status.update?e("i",{staticClass:"fas fa-spinner fa-spin me-1"}):t._e(),t._v("確認 ")])]}))],2)])])])])])},i=[],r={props:["item","isNew","status"],methods:{updateData(){this.$emit("update")},uploadFile(){console.log(this);const t=this,e=t.$refs.files.files[0];t.item.fileName=e.name;const a=new FormData;a.append("file-to-upload",e);const s="https://vue-course-api.hexschool.io/api/gunshop/admin/upload";t.status.upload_img=!0,t.$http.post(s,a,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{t.status.upload_img=!1,console.log(e.data),e.data.success?t.$set(t.item,"imageUrl",e.data.imageUrl):t.$bus.$emit("msg-pop",e.data.message,"danger"),document.getElementById("customFile").value=""}))}}},o=r,l=a(1001),n=(0,l.Z)(o,s,i,!1,null,"465c3649",null),d=n.exports},2599:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page-1)}}},[t._v("Previous")])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])])},i=[],r={props:["pages"],methods:{changePage(t){this.$emit("pageItem",t)}}},o=r,l=a(1001),n=(0,l.Z)(o,s,i,!1,null,null,null),d=n.exports},979:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover table-striped mt-4"},[e("thead",[t._t("thead",(function(){return[t._m(0)]}))],2),e("tbody",[t._t("tbody",(function(){return t._l(t.products,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-end"},[t._v(" "+t._s(t._f("currency")(a.origin_price))+" ")]),e("td",{staticClass:"text-end"},[t._v(" "+t._s(t._f("currency")(a.price))+" ")]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",{staticClass:"text-danger"},[t._v("未啟用")])]),e("td",[e("div",{staticClass:"d-flex"},[e("button",{staticClass:"btn btn-outline-primary btn-sm me-1",on:{click:function(e){return t.openModal(!1,a)}}},[t._v(" 編輯 ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.delModal(a)}}},[t._v(" 刪除 ")])])])])}))}))],2),t._t("tfoot",(function(){return[e("tfoot")]}))],2)])},i=[function(){var t=this,e=t._self._c;return e("tr",[e("th",{attrs:{width:"120"}},[t._v("分類")]),e("th",[t._v("產品名稱")]),e("th",{attrs:{width:"120"}},[t._v("原價")]),e("th",{attrs:{width:"120"}},[t._v("售價")]),e("th",{attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"120"}},[t._v("編輯")])])}],r={props:["item","products"],methods:{openModal(t,e){this.$emit("edit",t,e)},delModal(t){this.$emit("delete",t)}}},o=r,l=a(1001),n=(0,l.Z)(o,s,i,!1,null,null,null),d=n.exports},5107:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex justify-content-center"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1),e("Table",{directives:[{name:"show",rawName:"v-show",value:t.orders.length>0,expression:"orders.length > 0"}],scopedSlots:t._u([{key:"thead",fn:function(){return[e("tr",[e("th",[t._v("購買時間")]),e("th",[t._v("Email")]),e("th",[t._v("購買款項")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")]),e("th",[t._v("編輯")])])]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(t._f("date")(a.create_at)))]),e("td",[t._v(t._s(a.user.email))]),e("td",[e("ul",{staticClass:"mb-0"},t._l(a.products,(function(a){return e("li",{key:a.id},[t._v(t._s(a.product.title))])})),0)]),e("td",{staticClass:"text-end"},[t._v(t._s(t._f("currency")(a.total)))]),e("td",[a.is_paid?e("p",{staticClass:"text-success"},[t._v("已付款")]):e("p",{staticClass:"text-danger"},[t._v("未付款")])]),e("td",[e("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.openModal(a)}}},[t._v(" 編輯 ")])])])}))},proxy:!0},{key:"tfoot",fn:function(){},proxy:!0}])}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.orders.length>0,expression:"orders.length > 0"}],staticClass:"d-flex justify-content-center"},[e("Pagination",{directives:[{name:"show",rawName:"v-show",value:t.orders.length>0,expression:"orders.length > 0"}],attrs:{pagination:t.pagination},on:{pageItem:t.getOrders}})],1),e("Modal",{attrs:{item:t.tempOrder,status:t.status},on:{update:t.updateOrder},scopedSlots:t._u([{key:"modalTitle",fn:function(){return[e("h4",[t._v("編輯訂單")])]},proxy:!0},{key:"modalBody",fn:function(){return[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("信箱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.email,expression:"tempOrder.user.email"}],staticClass:"form-control",attrs:{type:"email",name:"",id:"email","aria-describedby":"emailHelpId",placeholder:""},domProps:{value:t.tempOrder.user.email},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"email",e.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.address,expression:"tempOrder.user.address"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"address",placeholder:"","aria-describedby":"helpId"},domProps:{value:t.tempOrder.user.address},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"address",e.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.name,expression:"tempOrder.user.name"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"name",placeholder:"","aria-describedby":"helpId"},domProps:{value:t.tempOrder.user.name},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"name",e.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"tel"}},[t._v("電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.tel,expression:"tempOrder.user.tel"}],staticClass:"form-control",attrs:{type:"tel",name:"",id:"tel",placeholder:"","aria-describedby":"helpId"},domProps:{value:t.tempOrder.user.tel},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"tel",e.target.value)}}})]),e("div",{staticClass:"form-check form-check-inline"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.is_paid,expression:"tempOrder.is_paid"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"",id:"",value:"checkedValue"},domProps:{checked:Array.isArray(t.tempOrder.is_paid)?t._i(t.tempOrder.is_paid,"checkedValue")>-1:t.tempOrder.is_paid},on:{change:function(e){var a=t.tempOrder.is_paid,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="checkedValue",o=t._i(a,r);s.checked?o<0&&t.$set(t.tempOrder,"is_paid",a.concat([r])):o>-1&&t.$set(t.tempOrder,"is_paid",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.tempOrder,"is_paid",i)}}}),t._v("是否已付款 ")])]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"total"}},[t._v("應付金額")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tempOrder.total,expression:"tempOrder.total",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",name:"",id:"total",placeholder:"","aria-describedby":"helpId"},domProps:{value:t.tempOrder.total},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"total",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t._l(t.tempOrder.products,(function(a){return e("div",{key:a.id,staticClass:"col-sm-6"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"qty"}},[t._v("數量")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:a.qty,expression:"item.qty",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",name:"",id:"name",placeholder:"","aria-describedby":"helpId"},domProps:{value:a.qty},on:{input:function(e){e.target.composing||t.$set(a,"qty",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])}))],2)]},proxy:!0},{key:"modalFooter",fn:function(){},proxy:!0}])})],1)},i=[],r=a(2166),o=a(7846),l=a(979),n=a(2599),d={components:{Table:l.Z,Modal:o.Z,Pagination:n.Z},data(){return{orders:{},tempOrder:{user:{}},status:{update:!1},pagination:{},isLoading:!1}},methods:{getOrders(){const t="https://vue-course-api.hexschool.io/api/gunshop/admin/orders",e=this;e.isLoading=!0,e.$http.get(t).then((t=>{e.isLoading=!1,e.orders=t.data.orders,e.pagination=t.data.pagination}))},openModal(t){const e=this;e.tempOrder=Object.assign({},t),console.log(e.tempOrder);const a=new r.u_("#modalComponent");a.show()},hideModal(){const t=document.querySelector("#modalComponent"),e=r.u_.getInstance(t);e.hide()},updateOrder(){const t=this,e=`https://vue-course-api.hexschool.io/api/gunshop/admin/order/${t.tempOrder.id}`;t.isLoading=!0,t.$http.put(e,{data:t.tempOrder}).then((e=>{t.$bus.$emit("msg-pop",e.data.message,"success"),t.isLoading=!1,t.hideModal(),t.getOrders()}))}},created(){this.getOrders()}},c=d,m=a(1001),p=(0,m.Z)(c,s,i,!1,null,null,null),u=p.exports}}]);
//# sourceMappingURL=107.b0a00e53.js.map