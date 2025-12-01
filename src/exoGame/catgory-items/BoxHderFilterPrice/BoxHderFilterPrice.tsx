import styleComponents from "./Style-Component/StyleHederFilterPrice";
import { Typography } from "@mui/material";
import { useState } from "react";
import AddchartIcon from "@mui/icons-material/Addchart";
import { Component_Props } from "./types/BoxHderFilterPrice";
const BoxHederFilterPrice: Component_Props = ({
  originalItems,
  setFilteredItems,
  setValid,
  setOriginalItems,
  initialItems,
  setFilterValue,
}) => {
  const { BoxHderFilterPrice, SortFilterText, BtnDisplayCatgory } =
    styleComponents;
  const [switchToMaxPrice, setSwitchToMaxPrice] = useState(false);
  const [switchToLowerPrice, setSwitchToLowerPrice] = useState(false);

  const heightPriceFilterItems = () => {
    const highePrice = originalItems?.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
    setSwitchToMaxPrice(true);
    setFilteredItems(highePrice);
    if (switchToLowerPrice) {
      setFilteredItems([]);
      setSwitchToLowerPrice(false);
    }
  };

  const lowerPriceFilterItems = () => {
    const lowPrice = originalItems.sort(
      (a: { price: string | number }, b: { price: string | number }) =>
        Number(a.price) - Number(b.price)
    );
    setSwitchToLowerPrice(true);
    setFilteredItems(lowPrice);

    if (switchToMaxPrice) {
      setFilteredItems([]);
      setSwitchToMaxPrice(false);
    }
  };

  const defualtProductSorted = () => {
    // Reset filter values to default
    setFilterValue((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, ""]))
    );

    // Reset to original items
    setOriginalItems(initialItems);
    setFilteredItems(initialItems);

    setSwitchToMaxPrice(false);
    setSwitchToLowerPrice(false);
  };

  return (
    <BoxHderFilterPrice>
      <BtnDisplayCatgory onClick={() => setValid((prev) => (prev = true))}>
        <AddchartIcon></AddchartIcon>
      </BtnDisplayCatgory>

      <SortFilterText onClick={heightPriceFilterItems}>
        Highest price
      </SortFilterText>
      <SortFilterText onClick={lowerPriceFilterItems}>
        Lowest price
      </SortFilterText>
      <SortFilterText onClick={defualtProductSorted}>Default</SortFilterText>
      <Typography sx={{ fontFamily: "vazir", overflow: "hidden" }}>
        Sort by:
      </Typography>
    </BoxHderFilterPrice>
  );
};

export default BoxHederFilterPrice;
