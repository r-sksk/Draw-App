import firebase from "firebase";
import { FirebaseConfig } from "@/apis/types";

class Firebase {
  firebaeInit: firebase.app.App;

  static init(config: FirebaseConfig): Firebase {
    console.log("firebase init.");
    return new Firebase(config);
  }

  constructor(config: FirebaseConfig) {
    this.firebaeInit = firebase.initializeApp(config);
  }

  getDBInfo(): object {
    const dbPath = this.firebaeInit.database();
    const baseUrl = location.pathname;
    console.log(baseUrl);

    const storageRef = this.firebaeInit.storage().ref();
    const boardsRef = dbPath.ref(baseUrl);
    const messagesRef = dbPath.ref(`${baseUrl}/messages`);
    const objectsRef = dbPath.ref(`${baseUrl}/objects`);

    const firebaseObj = {
      inst: this,
      app: this.firebaeInit,
      dbPath: dbPath,
      storageRef: storageRef,
      boardsRef: boardsRef,
      messagesRef: messagesRef,
      objectsRef: objectsRef,
    };

    return firebaseObj;
  }

  private createBoardsRef(): firebase.database.Reference {
    const nowDt = Date.now();
    const newObject = {
      createdAt: nowDt,
      objects: { createdAt: nowDt },
      messages: { createdAt: nowDt },
    };

    const dbPath = this.firebaeInit.database();
    const boardsRef = dbPath.ref();
    const newBoardsRef = this.pushData(boardsRef, newObject);

    return newBoardsRef;
  }

  // READ処理（1回限り）
  private listenOnce(
    event: firebase.database.EventType,
    targetRef: firebase.database.Reference
  ): void {
    targetRef.once(event, (snapshot) => {
      // boardの存在確認
      if (snapshot.exists() === false || snapshot.key === null) {
        const newBoardsRef = this.createBoardsRef();
        // 作成されたboardへリダイレクト
        const newBaseUrl = `/${newBoardsRef.key}`;
        location.pathname = newBaseUrl;
      }
      // TODO: 受け取ったデータをcanvasへ反映（mutationの何かしらの処理）
    });
  }

  // READ処理（データの変更を監視）
  private listenOn(
    event: firebase.database.EventType,
    targetRef: firebase.database.Reference
  ): void {
    targetRef.on(event, (snapshot) => {
      // TODO: 受け取ったデータをcanvasへ反映（mutationの何かしらの処理）
    });
  }

  // realtime firebase 全体の値を読み取る
  attachValueListner(event: string, targetRef: firebase.database.Reference) {
    const castedEvent = event as firebase.database.EventType;
    this.listenOnce(castedEvent, targetRef);
  }

  // realtime firebase 特定のパスの子要素の値を読み取る
  attachChildListner(event: string, targetRef: firebase.database.Reference) {
    const castedEvent = event as firebase.database.EventType;
    this.listenOn(castedEvent, targetRef);
  }

  // INSERT処理
  pushData(
    targetRef: firebase.database.Reference,
    value: any
  ): firebase.database.ThenableReference {
    const ref = targetRef.push(value);
    return ref;
  }

  // UPDATE処理
  setData(targetRef: firebase.database.Reference, value: any, key: any): void {
    const childPath = targetRef.child(key);
    const parsedValue = JSON.stringify(value);
    childPath.set(parsedValue);
  }

  // DELETE処理
  deleteData(targetRef: firebase.database.Reference, key: any): void {
    const childPath = targetRef.child(key);
    childPath.remove();
  }

  // UPLOAD処理（Images）
  uploadImage(
    targetRef: firebase.storage.Reference,
    imgData: any,
    fileName: string
  ): void {
    const storagePath = targetRef.child(fileName);
    const uploadTask = storagePath.put(imgData);

    if (uploadTask) {
      this.showProgress(uploadTask);
    }
  }

  private showProgress(uploadTask: firebase.storage.UploadTask) {
    console.log(uploadTask);
  }
}

export default Firebase;
