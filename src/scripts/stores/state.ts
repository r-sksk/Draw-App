import { RootState } from "@/stores/types";

export const state: RootState = {
  test: {
    testVar1: "",
    testVar2: 0,
    testVar3: true,
    testVar4: ["state1", "state1", "state1"],
  },
  firebase: {
    inst: undefined,
    dbPath: undefined,
    storagePath: undefined,
    boardsRef: undefined,
    messagesRef: undefined,
    objectsRef: undefined,
  },
};
