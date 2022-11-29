import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/", //路徑錯誤時，自動導向首頁
  },

  {
    path: "/",
    component: () => import("@/views/frontend/Front"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/frontend/Home"),
      },
      {
        path: "/shop",
        name: "Shop",
        component: () => import("@/views/frontend/Shop"),
      },
      {
        path: "/product/:id",
        name: "product",
        component: () => import("@/views/frontend/ProductPage"),
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("@/views/frontend/Cart"),
      },
      {
        path: "/checkout",
        name: "CheckOut",
        component: () => import("@/views/frontend/Checkout"),
      },
      {
        path: "/payorder/:orderId",
        name: "PayOrder",
        component: () => import("@/views/frontend/Payorder"),
      },
    ],
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

  // 管理測試用
  {
    path: "/user",
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
