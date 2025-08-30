import React, { useEffect, useState } from "react";
import styleComponents from "../../components/component-Style/StyleCatgory";
const RemoveFilterdItems = ({
  FilterValue,
  setFilterValue,
  setFilteredItems,
}) => {
  const { HeadrBox, HeadrText, DelteBtn } = styleComponents;

  const counter = (function () {
    const show = (arr) => {
      const arry = Object.entries(arr)
        .map(([_, value]) => value !== "" || value > 0)
        .find((value) => {
          return value === true;
        });
      return arry;
    };
    return {
      doSomthing(arr) {
        return show(arr);
      },
    };
  })();
  const result = counter.doSomthing(FilterValue);

  const delteFilterItemsBtn = () => {
    setFilterValue((FilterValue = ""));
    setFilteredItems([]);
  };

  return (
    <HeadrBox>
      <HeadrText>filter</HeadrText>
      {result ? (
        <DelteBtn onClick={delteFilterItemsBtn}>delteitems</DelteBtn>
      ) : (
        <></>
      )}
    </HeadrBox>
  );
};
export default RemoveFilterdItems;
