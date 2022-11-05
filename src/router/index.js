import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login",
  },

  // 後端
  {
    path: "/admin",
    name: "Dashboard",
    component: () => import("@/views/backend/Dashboard"),
    children: [
      {
        path: "products",
        name: "Products",
        component: () => import("@/views/backend/Products"),
        meta: { requiresAuth: true },
      },
      {
        path: "coupons",
        name: "Coupons",
        component: () => import("@/views/backend/Coupons"),
        meta: { requiresAuth: true },
      },
      {
        path: "orders",
        name: "Orders",
        component: () => import("@/views/backend/Orders"),
        meta: { requiresAuth: true },
      },
    ],
  },

  {
    path: "/",
    name: "user",
    component: () => import("@/views/backend/Dashboard"),
    children: [
      {
        path: "customer_order",
        name: "CustomerOrders",
        component: () => import("@/views/backend/CustomerOrders"),
      },
      {
        path: "customer_checkout/:orderId",
        name: "CustomerCheckout",
        component: () => import("@/views/backend/CustomerCheckout"),
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/backend/Login"),
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
});

export default router;
