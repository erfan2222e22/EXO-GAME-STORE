import {
  Type_FilterValuse,
  Type_originalItems_extends,
} from "../../mainCatgoryPage/types/types-Catgory";

interface Interface_Poprs {
  props: {
    FilterValue: Type_FilterValuse;
    setFilterValue: React.Dispatch<React.SetStateAction<Type_FilterValuse>>;
    setFilteredItems: React.Dispatch<
      React.SetStateAction<Type_originalItems_extends[]>
    >;
  };
}
export type Component_Porps = ({
  ...props
}: Interface_Poprs) => React.ReactNode;

export type showDelteValueFilters = (arr: Type_FilterValuse) => boolean;
