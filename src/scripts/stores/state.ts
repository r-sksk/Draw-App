import { RootState } from "@/stores/types";

export const state: RootState = {
  firebase: {
    inst: undefined,
    app: undefined,
    dbPath: undefined,
    storageRef: undefined,
    boardsRef: undefined,
    messagesRef: undefined,
    objectsRef: undefined,
  },
  fabric: {
    canvas: undefined,
  },
};
