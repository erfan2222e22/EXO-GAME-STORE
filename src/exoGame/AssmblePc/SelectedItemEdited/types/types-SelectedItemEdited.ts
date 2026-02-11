import {
  Type_AsslbleContiner,
  Type_AsslbleContiner_ProductArray,
} from "../../types/types-AssmbleCniter";

import React from "react";

export type click_Event_Type = React.MouseEvent<HTMLDivElement>;

export interface Type_AsslbleContiner_ProductArray_Filter extends Type_AsslbleContiner_ProductArray {}

export interface Types_setSelectPCPartBox extends Type_AsslbleContiner {}

export type Types_DelteItems = (
  e: click_Event_Type,
  ItemId: Readonly<string | number>,
  ItemTitle: Readonly<string | number>,
) => void;

export interface SelectedItemEditedProps {
  item: Types_setSelectPCPartBox;
  setSelectPCPartBox: React.Dispatch<
    React.SetStateAction<Types_setSelectPCPartBox[]>
  >;
  handelAddPcClick: () => void;
}
