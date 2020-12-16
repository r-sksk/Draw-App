export interface RootState {
<<<<<<< Updated upstream
  test: {
    testVar1: string;
    testVar2: number;
    testVar3: boolean;
    testVar4: string[];
  };
=======
>>>>>>> Stashed changes
  firebase: {
    inst: firebase.app.App | undefined;
    dbPath: firebase.database.Database | undefined;
    storagePath: firebase.storage.Reference | undefined;
    boardsRef: firebase.database.Reference | undefined;
    messagesRef: firebase.database.Reference | undefined;
    objectsRef: firebase.database.Reference | undefined;
  };
<<<<<<< Updated upstream
  canvas: {
    inst: 
  }
=======
  fabric: {
    canvas: fabric.Canvas | undefined;
  };
>>>>>>> Stashed changes
}
