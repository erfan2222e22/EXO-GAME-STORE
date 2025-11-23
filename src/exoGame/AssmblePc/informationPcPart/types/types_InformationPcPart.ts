import React from "react";
import { Type_AsslbleContiner } from "../../types/types-AssmbleCniter";

export interface Type_Products {
  id: Readonly<number | string>;
  price: number | string;
  img: Readonly<string>;
  nameProduct?: Readonly<string>;
  manufacturers?: Readonly<string>;
  company?: Readonly<string>;
  title?: Readonly<string>;
  [key: string | number]: string | boolean | number;
}

export interface Props_Type {
  setDisplayBoxes: (prev: boolean) => void;
  displayBoxes: boolean;
  selectedItems: [Type_Products];
  itemsInformation: [Type_Products];
  setDisplayFilterBox: React.Dispatch<React.SetStateAction<true | false>>;
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
