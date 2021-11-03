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
      {
        path: "/cashtray",
        name: "pos-cashtray",
        component: () => import('../views/pos/cashtray.vue'),
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
