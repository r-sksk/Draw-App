import { MutationTree } from "vuex";
import { RootState } from "@/stores/types";

// ストアの状態変更（同期処理）のみ
export const mutations: MutationTree<RootState> = {
  firebase: (state, firebaseObj) => {
    state.firebase = firebaseObj;
  },
};
