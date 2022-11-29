"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[936],{4595:function(e,t,o){o.r(t),o.d(t,{default:function(){return C}});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"d-flex justify-content-center"},[t("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}})],1),t("div",{staticClass:"text-end"},[e.isLoading?e._e():t("button",{staticClass:"btn btn-primary mt-3",on:{click:function(t){return e.openModal(!0)}}},[e._v(" 建立新的優惠券 ")])]),t("Table",{directives:[{name:"show",rawName:"v-show",value:e.coupons.length>0,expression:"coupons.length > 0"}],attrs:{item:e.tempCoupon,products:e.coupons},on:{edit:e.openModal,delete:e.delModal},scopedSlots:e._u([{key:"thead",fn:function(){return[t("tr",[t("th",[e._v("名稱")]),t("th",[e._v("優惠碼")]),t("th",[e._v("折扣百分比")]),t("th",[e._v("到期日")]),t("th",[e._v("是否啟用")]),t("th",[e._v("編輯")])])]},proxy:!0},{key:"tbody",fn:function(){return e._l(e.coupons,(function(o){return t("tr",{key:o.id},[t("td",[e._v(e._s(o.title))]),t("td",[e._v(e._s(o.code))]),t("td",[e._v(e._s(o.percent)+"%")]),t("td",[e._v(e._s(e._f("date")(o.due_date)))]),t("td",[1===o.is_enabled?t("span",{staticClass:"text-success"},[e._v("啟用")]):t("span",{staticClass:"text-muted"},[e._v("未起用")])]),t("td",[t("button",{staticClass:"btn btn-outline-primary btn-sm me-2",on:{click:function(t){return e.openModal(!1,o)}}},[e._v(" 編輯 ")]),t("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.delModal(o)}}},[e._v(" 刪除 ")])])])}))},proxy:!0}])}),t("div",{staticClass:"d-flex justify-content-center"},[t("Pagination",{directives:[{name:"show",rawName:"v-show",value:e.coupons.length>0,expression:"coupons.length > 0"}],attrs:{pagination:e.pagination},on:{pageItem:e.getCoupons}})],1),t("Modal",{attrs:{item:e.tempCoupon,"is-new":e.isNew,status:e.status},on:{update:e.updateCoupon},scopedSlots:e._u([{key:"modalTitle",fn:function(){return[e.isNew?t("span",[e._v("建立優惠券")]):t("span",[e._v("修改優惠券")])]},proxy:!0},{key:"modalBody",fn:function(){return[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"title"}},[e._v("標題")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:e.tempCoupon.title},on:{input:function(t){t.target.composing||e.$set(e.tempCoupon,"title",t.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"coupon_code"}},[e._v("優惠碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon_code",placeholder:"請輸入優惠碼"},domProps:{value:e.tempCoupon.code},on:{input:function(t){t.target.composing||e.$set(e.tempCoupon,"code",t.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"due_date"}},[e._v("到期日")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:e.due_date},on:{input:function(t){t.target.composing||(e.due_date=t.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"price"}},[e._v("折扣百分比")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入折扣百分比"},domProps:{value:e.tempCoupon.percent},on:{input:function(t){t.target.composing||e.$set(e.tempCoupon,"percent",t.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(e.tempCoupon.is_enabled)?e._i(e.tempCoupon.is_enabled,null)>-1:e._q(e.tempCoupon.is_enabled,1)},on:{change:function(t){var o=e.tempCoupon.is_enabled,s=t.target,a=s.checked?1:0;if(Array.isArray(o)){var n=null,i=e._i(o,n);s.checked?i<0&&e.$set(e.tempCoupon,"is_enabled",o.concat([n])):i>-1&&e.$set(e.tempCoupon,"is_enabled",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.tempCoupon,"is_enabled",a)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[e._v(" 是否啟用 ")])])])]},proxy:!0},{key:"modalFooter",fn:function(){},proxy:!0}])}),t("DeleteModal",{attrs:{item:e.tempCoupon,status:e.status},on:{delete:e.deleteCoupon}})],1)},a=[],n=o(2166),i=o(8266),p=o(7846),u=o(9143),d=o(979),l={data(){return{coupons:[],tempCoupon:{title:"",is_enabled:1,percent:100,due_date:0,code:""},status:{update:!1},due_date:new Date,isNew:!1,pagination:{},isLoading:!1}},watch:{due_date(){const e=this,t=Math.floor(new Date(e.due_date)/1e3);e.tempCoupon.due_date=t}},methods:{openModal(e,t){const o=this;if(o.isNew=e,o.isNew)o.tempCoupon={};else{o.tempCoupon=Object.assign({},t);const e=new Date(1e3*o.tempCoupon.due_date).toISOString().split("T");o.due_date=e[0]}const s=new n.u_("#modalComponent");s.show()},delModal(e){const t=this;t.tempCoupon=Object.assign({},e);const o=new n.u_("#delModal");o.show()},hideModal(){const e=document.querySelector("#modalComponent"),t=n.u_.getInstance(e);t.hide()},hideDelModal(){const e=document.querySelector("#delModal"),t=n.u_.getInstance(e);t.hide()},getCoupons(e=1){const t=this,o=`https://vue-course-api.hexschool.io/api/gunshop/admin/coupons?page=${e}`;t.isLoading=!0,t.$http.get(o,t.tempCoupon).then((e=>{t.coupons=e.data.coupons,t.pagination=e.data.pagination,console.log(e),t.isLoading=!1}))},updateCoupon(){const e=this;let t;e.status.update=!0,e.isNew?(t="https://vue-course-api.hexschool.io/api/gunshop/admin/coupon",e.isLoading=!0,e.$http.post(t,{data:e.tempCoupon}).then((t=>{e.status.update=!1,e.$bus.$emit("msg-pop",t.data.message,"success"),e.hideModal(),e.getCoupons(),e.isLoading=!1}))):(t=`https://vue-course-api.hexschool.io/api/gunshop/admin/coupon/${e.tempCoupon.id}`,e.due_date=new Date(1e3*e.tempCoupon.due_date),e.isLoading=!0,e.$http.put(t,{data:e.tempCoupon}).then((t=>{e.status.update=!1,e.hideModal(),e.$bus.$emit("msg-pop",t.data.message,"success"),e.getCoupons(),e.isLoading=!1})))},deleteCoupon(){const e=this,t=`https://vue-course-api.hexschool.io/api/gunshop/admin/coupon/${e.tempCoupon.id}`;e.status.update=!0,e.isLoading=!0,e.$http.delete(t).then((t=>{e.status.update=!1,e.$bus.$emit("msg-pop",t.data.message,"success"),e.hideDelModal(),e.isLoading=!1,e.getCoupons()}))}},created(){this.getCoupons()},components:{Modal:p.Z,DeleteModal:i.Z,Pagination:u.Z,Table:d.Z}},c=l,r=o(1001),m=(0,r.Z)(c,s,a,!1,null,null,null),C=m.exports}}]);
//# sourceMappingURL=936.369d8d1e.js.map