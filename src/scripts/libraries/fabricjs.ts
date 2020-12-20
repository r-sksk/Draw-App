import { FabricJsConfig } from "@/libraries/types";
import { fabric } from "fabric";
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

  attachListner(): void {
    const canvas = this.fabricCanvas;

    this.attachMouseDown(canvas);
    this.attachMouseMove(canvas);
    this.attachMouseUp(canvas);
    this.attachPathCreated(canvas);
    this.attachObjectAdded(canvas);
    this.attachObjectModified(canvas);
    this.attachSelectionCreated(canvas);
    this.attachSelectionUpdated(canvas);
  }

  private attachMouseDown(canvas: fabric.Canvas): void {
    canvas.on("mouse:move", (e) => {
      // console.log(e);
    });
  }

  private attachMouseMove(canvas: fabric.Canvas): void {
    canvas.on("mouse:down", (e) => {
      // console.log(e);
    });
  }

  private attachMouseUp(canvas: fabric.Canvas): void {
    canvas.on("mouse:up", (e) => {
      // console.log(e);
    });
  }

  private attachPathCreated(canvas: fabric.Canvas): void {
    canvas.on("path:created", (e) => {
      // console.log(e);
    });
  }

  private attachObjectAdded(canvas: fabric.Canvas): void {
    canvas.on("object:added", (e) => {
      const minObjInfo = JSON.stringify(e.target);
      const promise = store.dispatch(
        "pushObjectsFireBase",
        JSON.parse(minObjInfo)
      );
      promise.then((ref) => {
        // この処理はmutationでやったほうがよさそう
        if (e.target !== undefined) {
          const targetIdx = canvas._objects.indexOf(e.target);
          canvas._objects[targetIdx]._set("refkey", ref.key);
          console.log(canvas._objects);
        }
      });
    });
  }

  private attachObjectModified(canvas: fabric.Canvas): void {
    canvas.on("object:modified", (e) => {
      console.log(e);
    });
  }

  private attachSelectionCreated(canvas: fabric.Canvas): void {
    canvas.on("selection:created", (e) => {
      console.log(e);
    });
  }

  private attachSelectionUpdated(canvas: fabric.Canvas): void {
    canvas.on("selection:updated", (e) => {
      console.log(e);
    });
  }
}

export default FabricJs;
