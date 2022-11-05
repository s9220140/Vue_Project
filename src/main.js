import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
  configure,
} from "vee-validate";
import TW from "vee-validate/dist/locale/zh_TW";
import * as rules from "vee-validate/dist/rules";

import App from "./App.vue";
import router from "./router";

import "./bus";

// filters
import currencyFilter from "./filters/currency";
import dateFilter from "./filters/date";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize("zh_TW", TW);
localize({
  zh_TW: {
    names: {
      email: "電子信箱",
      name: "姓名",
      tel: "電話",
      address: "地址",
    },
    fields: {
      // email: {
      //   required: "電子信箱不得為空",
      // },
    },
  },
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
});

Vue.component("Loading", Loading);
Vue.filter("currency", currencyFilter);
Vue.filter("date", dateFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// 導航守衛
router.beforeEach((to, from, next) => {
  // console.log("to:", to, "from:", from, "next:", next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) next();
      else next({ path: "/login" });
    });
  } else next();
});
