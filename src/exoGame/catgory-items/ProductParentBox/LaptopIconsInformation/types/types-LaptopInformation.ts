import { Type_originalItems_extends } from "../../../mainCatgoryPage/types/types-Catgory";
import { JSX } from "react";

export interface LaptopItems_infromation extends Type_originalItems_extends {
  gpuModel: string;
  ram: string;
  Processor: string;
  monitorSize: string;
}

type Partial_Items = Partial<LaptopItems_infromation>;

export interface Type_Props {
  originalItems: Partial_Items;
}

export type Type_function = (props: Type_Props) => JSX.Element;

export interface Type_LaptopProduct {
  id: number;
  srcIcon: string;
  title: string;
  text: string | boolean | string[];
}
