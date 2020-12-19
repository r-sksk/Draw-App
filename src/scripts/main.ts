import Vue from "vue";
import App from "@/views/app.vue";
import store from "@/stores";
import router from "@/routes";
import { fabric } from "fabric";

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    store.dispatch("connectFirebase");
    store.commit("initCanvas");
  },
}).$mount("#app");
