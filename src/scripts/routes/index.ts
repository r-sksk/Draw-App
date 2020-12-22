import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "@/views/home.vue";
import Home from "@/views/_id/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:*/",
    name: "home",
    component: Home,
    redirect : "/:*/*"
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
