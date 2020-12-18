import { ActionTree } from "vuex";
import { RootState } from "@/stores/types";
import Firebase from "@/apis/Firebase";
import { FirebaseConfig } from "@/apis/types";

// 外部との通信（非同期処理OK）、描画処理など
export const actions: ActionTree<RootState, RootState> = {
  connectFirebase: (context) => {
    const firebaseConfig: FirebaseConfig = {
      apiKey: "AIzaSyAwxa81wGhmDu_1KmoVUi48jIcxaNW5yHU",
      authDomain: "draw-talk.firebaseapp.com",
      databaseURL: "https://draw-talk.firebaseio.com",
      projectId: "draw-talk",
      storageBucket: "draw-talk.appspot.com",
      messagingSenderId: "920241367747",
      appId: "1:920241367747:web:45f7324d9619bfa92d5076",
      measurementId: "G-3TEQSWT2FD",
    };

    const firebase = Firebase.init(firebaseConfig);
    const firebaseObj = firebase.getDBInfo(firebase.firebaeInit);
    context.commit("initFirebase", firebaseObj);
  },
};
