import styleComponents from "./Style-Component/StyleFilterBtn";
import { Btn_Component_Props } from "./types/Type_FilterBtn";
const FilterBtnComponent: Btn_Component_Props = ({ filterItmes }) => {
  const { FilterBtn } = styleComponents;
  return <FilterBtn onClick={filterItmes}>filter</FilterBtn>;
};
export default FilterBtnComponent;
