import { MutationTree } from "vuex";
import { RootState } from "@/stores/types";
import FabricJs from "@/libraries/fabricjs";

// ストアの状態変更（同期処理）のみ
export const mutations: MutationTree<RootState> = {
  initFirebase: (state, firebaseObj) => {
    state.firebase = firebaseObj;
  },

  attachFireBaseListner: (state) => {
    // firebase定義済みイベント
    // https://firebase.google.com/docs/database/cpp/retrieve-data
    const firebaseChildEvents = [
      "child_added",
      "child_changed",
      "child_moved",
      "child_removed",
    ];

    const fbinst = state.firebase.inst;
    // このガード処理を無くしたい
    if (fbinst === undefined) {
      return;
    }

    const boardsRef = state.firebase.boardsRef;
    // 全データチェック
    if (boardsRef !== undefined) {
      fbinst.attachValueListner("value", boardsRef);
    }

    const objectsRef = state.firebase.objectsRef;
    if (objectsRef !== undefined) {
      // すべてのイベント監視
      firebaseChildEvents.forEach((childEvent) => {
        fbinst.attachChildListner(childEvent, objectsRef);
      });
    }

    const messagesRef = state.firebase.messagesRef;
    if (messagesRef !== undefined) {
      // child_addedのみ監視
      fbinst.attachChildListner("child_added", messagesRef);
    }
  },

  initFabricJs: (state) => {
    const canvsElmId = "fabricCavas";
    const fabricObj = {
      backgroundColor: "rgb(255, 255, 255)",
    };

    const fabricInst = FabricJs.init(canvsElmId, fabricObj);
    state.fabric = fabricInst.getFabricInfo();
  },

  attachFabricJsListner(state) {
    console.log(state.fabric);
  },
};
