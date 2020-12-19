import { FabricJsConfig } from "@/libraries/types";
import { fabric } from "fabric";
import { RootState } from "@/stores/types";

class FabricJs {
  fabricCanvas: fabric.Canvas;

  static init(canvasElmId: string, config: FabricJsConfig): FabricJs {
    console.log("fabricCanvas init");

    return new FabricJs(canvasElmId, config);
  }

  constructor(canvasElmId: string, config: FabricJsConfig) {
    this.fabricCanvas = new fabric.Canvas(canvasElmId, config);
  }

  getFabricInfo(): object {
    const fabricObj = {
      inst: this,
      canvas: this.fabricCanvas,
    };

    return fabricObj;
  }
}

export default FabricJs;
