import styleComponents from "./Style-Component/StyleFilterBtn";
import { Component_Props } from "./types/Type_FilterBtn";
const FilterBtnComponent = ({ filterItmes }: Component_Props) => {
  const { FilterBtn } = styleComponents;
  return <FilterBtn onClick={filterItmes}>filter</FilterBtn>;
};
export default FilterBtnComponent;
