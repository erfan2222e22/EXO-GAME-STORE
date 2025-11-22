import {
  Type_AsslbleContiner,
  Type_AsslbleContiner_ProductArray,
} from "../../types/types-AssmbleCniter";

export interface Type_AsslbleContiner_for_shop extends Type_AsslbleContiner {}

export interface Type_AsslbleContiner_ProductArray_shop
  extends Type_AsslbleContiner_ProductArray {}

export interface Type_Plus_reduce {
  a: number;
  b: number;
}

export interface Type_Concat_reduce {
  a: [Type_AsslbleContiner_ProductArray_shop];
  b: [Type_AsslbleContiner_ProductArray_shop];
}

export type Type_sendItems = (
  selectedProducts: Type_AsslbleContiner_for_shop
) => void;

export type Type_sendError = (
  findedItems: Type_AsslbleContiner_for_shop[]
) => void;
