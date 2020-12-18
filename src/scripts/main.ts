import Vue from "vue";
import App from "@/views/app.vue";
import store from "@/stores";
import router from "@/routes";
import { fabric } from "fabric";

store.dispatch("connectFirebase");
store.commit("initCanvas")

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
