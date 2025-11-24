import React from "react";
import { Type_AsslbleContiner } from "../../types/types-AssmbleCniter";

export interface Type_Products {
  id: number | string;
  price: number | string;
  img: string;
  nameProduct?: string;
  manufacturers?: string;
  company?: string;
  title?: string;
  [key: string]: string | number;
}

export interface Props_Type {
  setDisplayBoxes: (prev: boolean) => void;
  displayBoxes: boolean;
  selectedItems: [Type_Products];
  itemsInformation: [Type_Products];
  setDisplayFilterBox: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectPCPartBox: React.Dispatch<
    React.SetStateAction<Type_AsslbleContiner[]>
  >;
  selectPCPartBox: Type_AsslbleContiner[];
  closeCatgoryPcShape: () => void;
}

export type Type_selectPcPartHandel = (
  e: React.MouseEvent<HTMLElement>,
  items: Readonly<Type_Products>,
  ItemTitle: Readonly<string>
) => void;
