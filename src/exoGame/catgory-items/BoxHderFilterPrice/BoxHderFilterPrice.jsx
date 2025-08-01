import styleComponents from "../../components/component-Style/StyleCatgory";
import { Typography } from "@mui/material";
const BoxHederFilterPrice = ({
  originalItems,
  filterItmes,
  setFilterValue,
  setFilteredItems,
  kind_filters,
  setOriginalItems,
  initialItems,
  product,
}) => {
  const { BoxHderFilterPrice, SortFilterText } = styleComponents;

  const heightPriceFilterItems = () => {
    originalItems.sort((a, b) => b.price - a.price);
    console.log(product);
    filterItmes();
  };
  const lowerPriceFilterItems = () => {
    originalItems.sort((a, b) => a.price - b.price);
    console.log(product);
    filterItmes();
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
    // setFilteredItems(initialItems);
    console.log(originalItems);
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
