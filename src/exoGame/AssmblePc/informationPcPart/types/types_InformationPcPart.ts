import React from "react";
import { Type_AsslbleContiner } from "../../types/types-AssmbleCniter";
import { Type_originalItems_extends } from "../../../catgory-items/ProductParentBox/types/Type-ProductParentBox";

export interface Props_Type {
  setDisplayBoxes: (prev: boolean) => void;
  displayBoxes: boolean;
  selectedItems: Type_originalItems_extends[];
  itemsInformation: Type_originalItems_extends[];
  setDisplayFilterBox: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectPCPartBox: React.Dispatch<
    React.SetStateAction<Type_AsslbleContiner[]>
  >;
  selectPCPartBox: Type_AsslbleContiner[];
  closeCatgoryPcShape: () => void;
}

export type Type_selectPcPartHandel = (
  e: React.MouseEvent<HTMLElement>,
  items: Type_originalItems_extends,
  ItemTitle: Readonly<string>
) => void;
