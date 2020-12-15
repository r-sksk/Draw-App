import firebase from "firebase";
import { FirebaseConfig } from "./types";
// import store from '@/stores'

class Firebase {
  firebase: object;
  boardsRef!: object;
  messagesRef!: object;
  objectsRef!: object;
  dbPath!: object;

  static async init(config: FirebaseConfig) {
    const firebaeInit = firebase.initializeApp(config);
    console.log("firebase init.");

    if (firebaeInit) {
      new Firebase(firebaeInit);
    }
  }

  constructor(firebaeInit: object) {
    this.firebase = firebaeInit;
    this.connectDB();
    this.getBoard();
  }

  async connectDB() {
    // const storagePath = this.firebase.storage().ref();
    this.dbPath = this.firebase.database();

    const boardsHash = location.pathname;
    this.boardsRef = this.dbPath.ref(`boards/${boardsHash}/createdAt`);
    this.messagesRef = this.dbPath.ref(`boards/${boardsHash}/messages`);
    this.objectsRef = this.dbPath.ref(`boards/${boardsHash}/objects`);
  }

  async getBoard() {
    let key: string;
    const now = new Date();

    this.boardsRef.once("value", (snapshot: object) => {
      if (!snapshot.exists()) {
        key = this.dbPath.ref("boards").push({
          createdAt: now.toLocaleString(),
          objects: {},
          messages: {},
        }).key;
      }
      //   location.pathname = `/${key}`;
    });
  }
}

export default Firebase;
