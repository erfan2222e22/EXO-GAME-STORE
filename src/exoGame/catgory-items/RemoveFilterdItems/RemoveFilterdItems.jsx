import React from "react";
import styleComponents from "../../components/component-Style/StyleCatgory";
const RemoveFilterdItems = ({
  FilterValue,
  setFilterValue,
  setFilteredItems,
}) => {
  const { HeadrBox, HeadrText, DelteBtn } = styleComponents;

  const delteFilterItemsBtn = () => {
    setFilterValue((preve) => ({
      ...preve,
      company: "",
      genration: "",
      maxPrice: 0,
      minPrice: 0,
    }));
    setFilteredItems([]);
  };

  return (
    <HeadrBox>
      <HeadrText>فیلتر کالا </HeadrText>
      {FilterValue.company.length > 0 ||
      FilterValue.genration.length > 0 ||
      FilterValue.maxPrice > 20000 ||
      FilterValue.minPrice > 100 ? (
        <DelteBtn onClick={delteFilterItemsBtn}>حذف فیلتر</DelteBtn>
      ) : (
        console.log("")
      )}
    </HeadrBox>
  );
};
export default RemoveFilterdItems;
