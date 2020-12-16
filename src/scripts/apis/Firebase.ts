import firebase from "firebase";
import { FirebaseConfig } from "./types";

class Firebase {
  firebaeInit: firebase.app.App;

  static init(config: FirebaseConfig): Firebase {
    console.log("firebase init.");
    return new Firebase(config);
  }

  constructor(config: FirebaseConfig) {
    this.firebaeInit = firebase.initializeApp(config);
  }

  getDBInfo(firebaeInit: firebase.app.App): object {
    const baseURL = `boards/${location.pathname}`;
    const dbPath = firebaeInit.database();

    const firebaseObj = {
      inst: firebaeInit,
      dbPath: dbPath,
      storagePath: firebaeInit.storage().ref(),
      boardsRef: dbPath.ref(`${baseURL}/createdAt`),
      messagesRef: dbPath.ref(`${baseURL}/messages`),
      objectsRef: dbPath.ref(`${baseURL}/objects`),
    };

    return firebaseObj;
  }

  once(
    event: firebase.database.EventType,
    targetRef: firebase.database.Reference
  ): void {
    targetRef.once(event, (snapshot) => {
      console.log(snapshot);
    });
  }

  on(
    event: firebase.database.EventType,
    targetRef: firebase.database.Reference
  ): void {
    targetRef.on(event, (snapshot) => {
      console.log(snapshot);
    });
  }
}

export default Firebase;
