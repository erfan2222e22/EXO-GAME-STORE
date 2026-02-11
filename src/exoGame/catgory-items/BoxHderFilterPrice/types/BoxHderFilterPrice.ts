import {
  Type_originalItems_extends,
  Type_FilterValuse,
} from "../../mainCatgoryPage/types/types-Catgory";
import React from "react";

export interface Component_Props_Types {
  originalItems: Type_originalItems_extends[];
  setFilteredItems: React.Dispatch<
    React.SetStateAction<Type_originalItems_extends[]>
  >;
  SetBolShowSmallBox: React.Dispatch<React.SetStateAction<boolean>>;
  setOriginalItems: React.Dispatch<
    React.SetStateAction<Type_originalItems_extends[]>
  >;
  initialItems: Type_originalItems_extends[];
  setFilterValue: React.Dispatch<React.SetStateAction<Type_FilterValuse>>;
  FilterValue: Type_FilterValuse;
}

export type Component_Props = ({
  ...props
}: Component_Props_Types) => React.ReactNode;
