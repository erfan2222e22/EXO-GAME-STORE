import styleComponents from "../../components/component-Style/StyleCatgory";
const FilterBtnComponent = ({ filterItmes }) => {
  const { FilterBtn } = styleComponents;
  return <FilterBtn onClick={filterItmes}>فیلتر</FilterBtn>;
};
export default FilterBtnComponent;
