import { Type_FilterValuse } from "../catgory-items/ProductParentBox/types/Type-ProductParentBox";

type selectedValue = (selectedValue: Type_FilterValuse) => void;

export interface Props_Component {
  onFilterChange: selectedValue;
}

export type Type_handelOnchange = (event: any, newitem: number[]) => void;
