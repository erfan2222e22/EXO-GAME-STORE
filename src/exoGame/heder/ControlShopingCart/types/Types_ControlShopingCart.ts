import { Type_originalItems_extends } from "../../../catgory-items/mainCatgoryPage/types/types-Catgory";
import { Type_UseContext_Main } from "../../ShopCartBox/types/Types_ShopCartBox";
type Pick_Type_originalItems_extends = Pick<
  Type_originalItems_extends,
  "id" | "img" | "price" | "nameProduct"
>;

export interface ProductsInShopCart extends Pick_Type_originalItems_extends {
  qty: number;
  uniqueCode?: number;
}

export interface Type_UseContext extends Type_UseContext_Main {
  totalPrice: number;
}

type SpanClickEvent = React.MouseEvent<HTMLSpanElement>;
type DivClickEvent = React.MouseEvent<HTMLDivElement>;

export type Type_incrementQty = (
  e: SpanClickEvent,
  id: number | string
) => void;

export type Type_decrementQty = (
  e: SpanClickEvent,
  id: number | string
) => void;

export type Type_delteShopCart = (
  e: DivClickEvent,
  id: number | string
) => void;

export type Type_handelViewCart = (e: DivClickEvent) => void;
export type Type_handelClearBasket = (e: DivClickEvent) => void;
