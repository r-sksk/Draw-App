import Vue from "vue";
import App from "@/views/app.vue";
import store from "@/stores";

new Vue({
  store,
  render: (h) => h(App),
  mounted() {
    store.dispatch("connectFirebase");
    store.commit("attachFireBaseListner");
    store.commit("initFabricJs");
    store.commit("attachFabricJsListner");
  },
}).$mount("#app");
