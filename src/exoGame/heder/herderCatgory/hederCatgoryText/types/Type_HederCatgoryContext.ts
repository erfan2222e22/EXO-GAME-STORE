import { itemsType } from "../../types/Type_CatgoryHeder";
import { JSX } from "react";

interface propsType {
  readonly item: itemsType;
  readonly key: number;
  setCatgoryDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Component_Props = (prop: propsType) => JSX.Element;
