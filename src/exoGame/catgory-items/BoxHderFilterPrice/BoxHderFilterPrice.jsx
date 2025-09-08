import styleComponents from "../../components/component-Style/StyleHederFilterPrice";
import { Typography } from "@mui/material";
import { useState } from "react";
import AddchartIcon from "@mui/icons-material/Addchart";
const BoxHederFilterPrice = ({ originalItems, setFilteredItems, setValid }) => {
  const { BoxHderFilterPrice, SortFilterText, BtnDisplayCatgory } =
    styleComponents;
  const [switchToMaxPrice, setSwitchToMaxPrice] = useState(false);
  const [switchToLowerPrice, setSwitchToLowerPrice] = useState(false);
  const heightPriceFilterItems = () => {
    const highe = originalItems.sort((a, b) => b.price - a.price);
    setFilteredItems((prev) => (prev = highe));
    setSwitchToMaxPrice(true);
    if (switchToLowerPrice) {
      setSwitchToLowerPrice(false);
      setFilteredItems([]);
    }
  };

  const lowerPriceFilterItems = () => {
    const low = originalItems.sort((a, b) => a.price - b.price);
    setFilteredItems((prev) => (prev = low));
    setSwitchToLowerPrice(true);
    if (switchToMaxPrice) {
      setSwitchToMaxPrice(false);
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
