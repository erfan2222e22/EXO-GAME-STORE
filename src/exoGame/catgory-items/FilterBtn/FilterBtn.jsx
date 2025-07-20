import component from "../../components/component-Style/StyleCatgory";
const FilterBtnComponent = ({
  originalItems,
  setFilteredItems,
  FilterValue,
}) => {
  const { FilterBtn } = component;

  const filterItmes = () => {
    let FilterItems = originalItems.filter(
      (item) =>
        (FilterValue.company === "" || item.company === FilterValue.company) &&
        (FilterValue.genration === "" ||
          item.genration === FilterValue.genration) &&
        (FilterValue.minPrice === 0 ||
          parseInt(item.price) >= FilterValue.minPrice) &&
        (FilterValue.maxPrice === 0 ||
          parseInt(item.price) <= FilterValue.maxPrice)
    );
    setFilteredItems(FilterItems);
    console.log(FilterValue);
  };
  return <FilterBtn onClick={filterItmes}>فیلتر</FilterBtn>;
};

export default FilterBtnComponent;
