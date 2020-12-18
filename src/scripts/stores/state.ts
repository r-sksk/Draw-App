import { RootState } from "@/stores/types";

export const state: RootState = {
  firebase: {
    inst: undefined,
    dbPath: undefined,
    storagePath: undefined,
    boardsRef: undefined,
    messagesRef: undefined,
    objectsRef: undefined,
  },
  fabric: {
    canvas: undefined,
  }
};
