import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/*",
    redirect: { name: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: "",
  routes,
});

export default router;
