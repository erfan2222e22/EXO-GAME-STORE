import styleComponents from "./Style-Component/StyleFilterBtn";
const FilterBtnComponent = ({ filterItmes }) => {
  const { FilterBtn } = styleComponents;
  return <FilterBtn onClick={filterItmes}>فیلتر</FilterBtn>;
};
export default FilterBtnComponent;
