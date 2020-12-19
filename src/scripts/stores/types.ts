import Firebase from "@/apis/Firebase";

export interface RootState {
  firebase: {
    inst: Firebase | undefined;
    app: firebase.app.App | undefined;
    dbPath: firebase.database.Database | undefined;
    storageRef: firebase.storage.Reference | undefined;
    boardsRef: firebase.database.Reference | undefined;
    messagesRef: firebase.database.Reference | undefined;
    objectsRef: firebase.database.Reference | undefined;
  };
  fabric: {
    canvas: fabric.Canvas | undefined;
  };
}
