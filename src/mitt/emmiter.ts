import mitt, { Emitter } from "mitt";

export type EmmiterEvents = {
  yPosition: { item: number };
  massage: { cartList: any; counter: number };
};

const emmiter: Emitter<EmmiterEvents> = mitt<EmmiterEvents>();

export default emmiter;
