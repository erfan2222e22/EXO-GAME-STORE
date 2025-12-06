import React from "react";
import { callback_Type } from "../../HederPrentBox/types/Types_HederParentBox";
import { Type_originalItems_extends } from "../../../catgory-items/ProductParentBox/types/Type-ProductParentBox";

interface sendmassageInterface {
  sendmassage: callback_Type;
}
export type Component_Props = ({
  ...props
}: sendmassageInterface) => React.ReactNode;

interface Type_handlerTypeInterface {
  cartList: Type_originalItems_extends;
  counter: Readonly<number>;
}

export type handlerType = (data: Type_handlerTypeInterface) => void;
