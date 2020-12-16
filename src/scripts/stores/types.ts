export interface RootState {
  test: {
    testVar1: string;
    testVar2: number;
    testVar3: boolean;
    testVar4: string[];
  };
  firebase: {
    inst: firebase.app.App | undefined;
    dbPath: firebase.database.Database | undefined;
    storagePath: firebase.storage.Reference | undefined;
    boardsRef: firebase.database.Reference | undefined;
    messagesRef: firebase.database.Reference | undefined;
    objectsRef: firebase.database.Reference | undefined;
  };
  canvas: {
    inst: 
  }
}
