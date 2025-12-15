import { Type_originalItems_extends } from "../../catgory-items/ProductParentBox/types/Type-ProductParentBox";

export type Type_sendAfewItems = (
  JsoneServer: string,
  ItemTitle: string,
  JsoneStting: string
) => void;

export type Type_sendSoloItem = (
  JsoneServer: string,
  ItemTitle: string
) => void;

export type Type_NaviUse = (
  ItemsProducts: Type_originalItems_extends[],
  ItemTitle: string
) => void;
