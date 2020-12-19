import { MutationTree } from "vuex";
import { RootState } from "@/stores/types";
import { fabric } from "fabric";

// ストアの状態変更（同期処理）のみ
export const mutations: MutationTree<RootState> = {
  initFirebase: (state, firebaseObj) => {
    state.firebase = firebaseObj;
  },

  initCanvas: (state) => {
    console.log("fabricCanvas init");

    const fabricObj = {
      backgroundColor: "rgb(255, 255, 255)",
    };
    const canvsElmId = "fabricCavas";
    const fabricCanvas = new fabric.Canvas(canvsElmId, fabricObj);
    state.fabric.canvas = fabricCanvas;
  },
};
