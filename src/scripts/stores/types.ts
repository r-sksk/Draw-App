export interface RootState {
  firebase: {
    inst: firebase.app.App | undefined;
    dbPath: firebase.database.Database | undefined;
    storagePath: firebase.storage.Reference | undefined;
    boardsRef: firebase.database.Reference | undefined;
    messagesRef: firebase.database.Reference | undefined;
    objectsRef: firebase.database.Reference | undefined;
  };
  fabric: {
    canvas: fabric.Canvas | undefined;
  };
}
