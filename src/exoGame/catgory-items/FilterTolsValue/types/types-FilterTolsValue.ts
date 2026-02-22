import {
  Type_FilterValuse,
  FilterConfigItem,
  setPriceFunction,
} from "../../mainCatgoryPage/types/types-Catgory";
import { JSX } from "react";
import { Item_Setting_Interface } from "../../mainCatgoryPage/types/Type_CatgoryJsx";

export interface Component_Props_Interface {
  props: {
    itemsSetting: Item_Setting_Interface;
    setPriceFunction: setPriceFunction;
    setFilterValue: React.Dispatch<React.SetStateAction<Type_FilterValuse>>;
    kind_filters: FilterConfigItem[];
    FilterValue: Type_FilterValuse;
  };
}

export type Type_ComponentProps = ({
  ...props
}: Component_Props_Interface) => JSX.Element;
