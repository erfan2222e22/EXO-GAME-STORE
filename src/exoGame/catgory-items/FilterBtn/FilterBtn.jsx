import component from "../../components/component-Style/StyleCatgory";
const FilterBtnComponent = ({ filterItmes }) => {
  const { FilterBtn } = component;
  return <FilterBtn onClick={filterItmes}>فیلتر</FilterBtn>;
};
export default FilterBtnComponent;
