import {
  Type_FilterValuse,
  Type_originalItems_extends,
} from "../../ProductParentBox/types/Type-ProductParentBox";

export interface Props_Component {
  FilterValue: Type_FilterValuse[];
  setFilterValue: React.Dispatch<React.SetStateAction<Type_FilterValuse>>;
  setFilteredItems: React.Dispatch<
    React.SetStateAction<Type_originalItems_extends[]>
  >;
}
