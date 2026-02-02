import mitt, { Emitter } from "mitt";
import { Types_itemProduct } from "../exoGame/catgory-items/productDiscription/types/Types_ProductDiscription";
export type EmmiterEvents = {
  yPosition: { item: number };
  massage: {
    cartList: Types_itemProduct;
    counter: number;
  };
  test: {
    sendedMassage: any;
    setMassage: any;
  };
  updateMassage: {
    newValue: any;
  };
};

const emmiter: Emitter<EmmiterEvents> = mitt<EmmiterEvents>();

export default emmiter;
