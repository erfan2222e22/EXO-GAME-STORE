import styleComponents from "../../components/component-Style/StyleCatgory";
import { useState, useEffect } from "react";
import BoxHederFilterPrice from "../BoxHderFilterPrice/BoxHderFilterPrice";
import ProductParentBoxComponent from "../ProductParentBox/ProductParentBox";
import RemoveFilterdItems from "../RemoveFilterdItems/RemoveFilterdItems";
import FilterTolsValue from "../FilterTolsValue/FilterTolsValue";
import { useLocation } from "react-router-dom";
import FilterBtnComponent from "../FilterBtn/FilterBtn";
import axios from "axios";
const Catgory = () => {
  const { MainBox } = styleComponents; // styled component
  const location = useLocation();
  const { product = [], pathName } = location.state || {};
  const filterValuesTols = product[0]?.productSetting;
  const [FilterValue, setFilterValue] = useState({
    //main state
    company: "",
    genration: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const initialItems = product;
  const [originalItems, setOriginalItems] = useState(product); // all items catch from json server
  const [filteredItems, setFilteredItems] = useState([]); //flterd items between slected filters

  const [kind_filters, setKind_filters] = useState([]); //filterd valus
  const [value_kind_filter, setKind_filters_value] = useState();

  useEffect(() => {
    // catch data from server and set items on state items
    axios(filterValuesTols)
      .then((item) => {
        setKind_filters(item.data.kindofFilter);
        setKind_filters_value(item.data.filterValues);
      })
      .catch((err) => {
        console.log(err);
      });
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
    console.log(originalItems);
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
        product={product}
      />
      <ProductParentBoxComponent
        filteredItems={filteredItems}
        originalItems={originalItems}
        pathName={pathName}
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
          itemsSetting={value_kind_filter}
        />
        <FilterBtnComponent filterItmes={filterItmes} />
      </MainBox>
    </>
  );
};

export default Catgory;
