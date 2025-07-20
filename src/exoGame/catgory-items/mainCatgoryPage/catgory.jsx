import component from "../../components/component-Style/StyleCatgory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import BoxHederFilterPrice from "../BoxHderFilterPrice/BoxHderFilterPrice";
import ProductParentBoxComponent from "../ProductParentBox/ProductParentBox";
import RemoveFilterdItems from "../RemoveFilterdItems/RemoveFilterdItems";
import FilterTolsValue from "../FilterTolsValue/FilterTolsValue";
import { useLocation } from "react-router-dom";
import FilterBtnComponent from "../FilterBtn/FilterBtn";

const Catgory = () => {
  const { MainBox } = component; // styled component
  const location = useLocation();
  const { product } = location.state || {};
  const filterValuesTols = product[0].kindofFilter;
  const [FilterValue, setFilterValue] = useState({
    //main state
    company: "",
    genration: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const [kind_filters, setKind_filters] = useState([]);

  const initialItems = product;
  const [originalItems, setOriginalItems] = useState(initialItems);
  const [filteredItems, setFilteredItems] = useState([]); //flterd items between slected filters

  useEffect(() => {
    setKind_filters(filterValuesTols);
  }, [product, filterValuesTols]);

  const handeOnClick = (selectedValue) => {
    // for now set filters valuse in state
    setFilterValue((prev) => ({
      ...prev,
      minPrice: selectedValue.minPrice,
      maxPrice: selectedValue.maxPrice,
    }));
  };

  const filterItmes = () => {
    // check items and set filters on state
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

  let setting = {
    slidesToShow: 8,
    slidesToScroll: 8,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <>
      <BoxHederFilterPrice
        filterItmes={filterItmes}
        originalItems={originalItems}
        setFilterValue={setFilterValue}
        setFilteredItems={setFilteredItems}
        setOriginalItems={setOriginalItems}
        initialItems={initialItems}
      />
      <ProductParentBoxComponent
        filteredItems={filteredItems}
        originalItems={originalItems}
      />
      <MainBox>
        <RemoveFilterdItems
          FilterValue={FilterValue}
          setFilterValue={setFilterValue}
          setFilteredItems={setFilteredItems}
        />
        <FilterTolsValue
          kind_filters={kind_filters}
          setFilterValue={setFilterValue}
          handeOnClick={handeOnClick}
          itemsSetting={product[0].filterValues}
        />
        <FilterBtnComponent
          originalItems={originalItems}
          FilterValue={FilterValue}
          setFilteredItems={setFilteredItems}
        />
      </MainBox>
    </>
  );
};

export default Catgory;
