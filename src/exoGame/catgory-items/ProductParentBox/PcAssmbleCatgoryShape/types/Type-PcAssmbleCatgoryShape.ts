import React from "react";
import {
  Type_Props,
  Type_originalItems_extends,
} from "../../types/Type-ProductParentBox";

type SelectProps = Pick<
  Type_Props,
  | "filteredItems"
  | "originalItems"
  | "setDisplayFilterBox"
  | "selectPCPartBox"
  | "setSelectPCPartBox"
  | "closeCatgoryPcShape"
  | "findTruetoChooseItems"
>;

export type Type_checkBoxOnclick = (item: Type_originalItems_extends) => void;
export type displayBoxInformation = (item: Type_originalItems_extends) => void;

export interface Component_Props extends SelectProps {
  handelOnClick: (
    e: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>,
    item: Type_originalItems_extends
  ) => void;
}
