import { FabricJsConfig } from "@/libraries/types";
import { fabric } from "fabric";
import { IEvent } from "fabric/fabric-impl";
import store from "@/stores";

class FabricJs {
  fabricCanvas: fabric.Canvas;

  static init(canvasElmId: string, config: FabricJsConfig): FabricJs {
    console.log("fabricCanvas init");

    return new FabricJs(canvasElmId, config);
  }

  constructor(canvasElmId: string, config: FabricJsConfig) {
    this.fabricCanvas = new fabric.Canvas(canvasElmId, config);
  }

  getFabricInfo(): any {
    const fabricObj = {
      inst: this,
      canvas: this.fabricCanvas,
    };

    return fabricObj;
  }

  objectAdded(e: IEvent) {
    const objData = JSON.parse(JSON.stringify(e.target));
    const promise = store.dispatch("pushObjectsFireBase", objData);

    promise.then((ref) => {
      if (e.target !== undefined) {
        store.commit("setFirebaseRefKey", {
          target: e.target,
          ref: ref,
        });
      }
    });
  }

  // mouseMove(e: IEvent) {}
  // mouseDown(e: IEvent) {}
  // mouseUp(e: IEvent) {}
  pathCreate(e: IEvent) {
    console.log(e);
  }
  // mouseMoved(e: IEvent) {}
  // objectModified(e: IEvent) {}
  // selectionCreated(e: IEvent) {}
  // selectionUpdated(e: IEvent) {}
}

export default FabricJs;
