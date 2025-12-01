import {
  Type_originalItems_extends,
  Type_FilterValuse,
} from "../../ProductParentBox/types/Type-ProductParentBox";
import React, { JSX } from "react";

export interface Component_Props_Types {
  originalItems: Type_originalItems_extends[];
  setFilteredItems: React.Dispatch<
    React.SetStateAction<Type_originalItems_extends[]>
  >;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
  setOriginalItems: React.Dispatch<
    React.SetStateAction<Type_originalItems_extends[]>
  >;
  initialItems: Type_originalItems_extends[];
  setFilterValue: React.Dispatch<React.SetStateAction<Type_FilterValuse>>;
}

export type Component_Props = ({
  ...props
}: Component_Props_Types) => JSX.Element;
