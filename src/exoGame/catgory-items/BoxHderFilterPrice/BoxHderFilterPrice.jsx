import styleComponents from "../../components/component-Style/StyleCatgory";
import { Typography } from "@mui/material";
import { useState } from "react";
const BoxHederFilterPrice = ({ originalItems, setFilteredItems }) => {
  const { BoxHderFilterPrice, SortFilterText } = styleComponents;
  const [valid, setValid] = useState(false);
  const [valid2, setValid2] = useState(false);
  const heightPriceFilterItems = () => {
    const highe = originalItems.sort((a, b) => b.price - a.price);
    setFilteredItems((prev) => (prev = highe));
    setValid(true);
    if (valid2) {
      setValid2(false);
      setFilteredItems([]);
    }
  };
  const lowerPriceFilterItems = () => {
    const low = originalItems.sort((a, b) => a.price - b.price);
    setFilteredItems((prev) => (prev = low));
    setValid2(true);
    if (valid) {
      setValid(false);
      setFilteredItems([]);
    }
  };

  const defualtProductSorted = () => {
    // setFilterValue((preve) => ({
    //   ...preve,
    //   company: "",
    //   genration: "",
    //   maxPrice: 0,
    //   minPrice: 0,
    // }));
    // setOriginalItems(initialItems);
    // setFilteredItems([]);
    // console.log(originalItems);
  };

  return (
    <BoxHderFilterPrice>
      <SortFilterText onClick={heightPriceFilterItems}>
        بیشترین قیمت
      </SortFilterText>
      <SortFilterText onClick={lowerPriceFilterItems}>
        کمترین قیمت
      </SortFilterText>
      <SortFilterText onClick={defualtProductSorted}>پیش فرض</SortFilterText>
      <Typography sx={{ fontFamily: "vazir", overflow: "hidden" }}>
        :مرتب کردن براساس
      </Typography>
    </BoxHderFilterPrice>
  );
};

export default BoxHederFilterPrice;
