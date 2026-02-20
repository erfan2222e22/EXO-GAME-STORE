import React from "react";
import { callback_Type } from "../../HederPrentBox/types/Types_HederParentBox";
import { Type_originalItems_extends } from "../../../catgory-items/mainCatgoryPage/types/types-Catgory";
import { ProductsInShopCart } from "../../ControlShopingCart/types/Types_ControlShopingCart";
import { JSX } from "react";

interface sendmassageInterface {
  sendmassage: callback_Type;
}
export type Component_Props = ({
  ...props
}: sendmassageInterface) => JSX.Element;

interface Type_handlerTypeInterface {
  cartList: Type_originalItems_extends;
  counter: number;
}

export type handlerType = (data: Type_handlerTypeInterface) => void;

export interface Type_UseContext_Main {
  ProductsInShopCart: ProductsInShopCart[];
  setProductsInShopCart: React.Dispatch<
    React.SetStateAction<ProductsInShopCart[]>
  >;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}
