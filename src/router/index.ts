import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Base from "../components/base/base.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      // pos rotues
      {
        path: "/cashtray",
        name: "pos-cashtray",
        component: () => import('../views/pos/cashtray.vue'),
      },
      {
        path: "/open-cashtray",
        name: "pos-open-cashtray",
        component: () => import('../views/pos/openCashtray.vue'),
      },
      {
        path: "/driver-totals",
        name: "driver-totals",
        component: () => import('../views/pos/driverTotals.vue'),
      },

      // accounts routes
      {
        path: "/cashflow",
        name: "cashflow",
        component: () => import('../views/accounts/cashflow.vue'),
      },
      {
        path: "/account-balance",
        name: "account-balance",
        component: () => import('../views/accounts/accountBalance.vue'),
      },
      {
        path: "/balance-of-trade",
        name: "balance-of-trade",
        component: () => import('../views/accounts/balanceOfTrade.vue'),
      },
      {
        path: "/suppliers-balance",
        name: "suppliers-balance",
        component: () => import('../views/accounts/suppliersBalance.vue'),
      },

      // items routes
      {
        path: "/top-sales",
        name: "top-sales",
        component: () => import('../views/items/topSales.vue'),
      },
      {
        path: "/stock",
        name: "stock",
        component: () => import('../views/items/stock.vue'),
      },
      {
        path: "/trans-cycle",
        name: "trans-cycle",
        component: () => import('../views/items/transCycle.vue'),
      },

    ]
  },
  {
    path: '/server-error',
    component: () => import('../views/errors/server.vue'),
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
