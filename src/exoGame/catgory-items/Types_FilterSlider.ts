import { JSX } from "react";

interface price {
  maxPrice: number;
  minPrice: number;
}
type selectedValue = (selectedValue: price) => void;

export interface Props_Component_Interface {
  setPriceFunction: selectedValue;
}

export type Props_Component = (props: Props_Component_Interface) => JSX.Element;

export type Type_handelOnchange = (event: unknown, newitem: number[]) => void;
