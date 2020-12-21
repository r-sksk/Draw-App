import { MutationTree } from "vuex";
import { RootState } from "@/stores/types";
import FabricJs from "@/libraries/fabricjs";
import { loadSVGFromString } from "fabric/fabric-impl";

// ストアの状態変更（同期処理）のみ
export const mutations: MutationTree<RootState> = {
  initFirebase: (state, firebaseObj) => {
    state.firebase = firebaseObj;
  },

  attachFireBaseListner: (state) => {
    // TODO:これmutationでやる処理か？どちらかといえばaction?

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
      isDrawingMode: true,
    };

    const fabricInst = FabricJs.init(canvsElmId, fabricObj);
    // TODO:
    //getFabricInfoの戻りの方が間違っている（とりあえずany）
    // firebaseも同じような感じなので直すこと
    state.fabric = fabricInst.getFabricInfo();
  },

  attachFabricJsListner: (state) => {
    // TODO:これmutationでやる処理か？どちらかといえばaction?

    const fabInst = state.fabric.inst;
    if (fabInst === undefined) {
      return;
    }

    fabInst.attachListner();
  },

  setFirebaseRefKey: (state: RootState, obj: object) => {
    const target = obj.target;
    const ref = obj.ref;
    const targetIdx = state.fabric.canvas?._objects.indexOf(target);
    if (targetIdx !== undefined) {
      state.fabric.canvas?._objects[targetIdx]._set("firebaseRefKey", ref.key);
    }

  }
};
