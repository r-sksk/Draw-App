import Vue from "vue";
import App from "@/views/app.vue";
import store from "@/stores";
import router from "@/routes";
import { fabric } from "fabric";

<<<<<<< Updated upstream
// let canvas: Canvas;

// canvas = new fabric.Canvas("canvas", {
//   backgroundColor: "white",
//   rotationCursor: "grab",
// });
store.dispatch("init");
=======
store.dispatch("connectFirebase");
store.commit("initCanvas")
>>>>>>> Stashed changes

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
