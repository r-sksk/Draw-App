import Vue from "vue";
import App from "@/views/app.vue";
import store from "@/stores"
import router from "@/routes";

store.dispatch('init');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
