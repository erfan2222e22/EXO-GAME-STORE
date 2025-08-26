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
  const filterValuesTols = product[0].productSetting;
  //main state
  const [FilterValue, setFilterValue] = useState({});

  const initialItems = product;
  const [originalItems, setOriginalItems] = useState(product); // all items catch from json server
  const [filteredItems, setFilteredItems] = useState([]); //flterd items between slected filters

  const [kind_filters, setKind_filters] = useState([]); //filterd valus box
  const [value_kind_filter, setKind_filters_value] = useState();
  // const [test, setTest] = useState({});

  const dynamicFilterVlause = (itemData) => {
    const itemDataValue = itemData.data.filterValues[0];
    let productData = Object.fromEntries(
      Object.entries(itemDataValue).map(([item, value]) => {
        if (typeof value === "number") {
          return [item, 0];
        } else {
          return [item, ""];
        }
      })
    );
    setFilterValue(productData);
    console.log(FilterValue);
  };

  useEffect(() => {
    // catch data from server and set items on state items
    axios(filterValuesTols)
      .then((itemData) => {
        dynamicFilterVlause(itemData);
        setKind_filters_value(itemData.data.filterValues);
        setKind_filters(itemData.data.kindofFilter);
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
    const { company, name, genration, minPrice, maxPrice } = FilterValue || {};
    const filterdProducts = originalItems.filter(
      (fil) =>
        (fil.company !== undefined && fil.company === company) ||
        (fil.name !== undefined && fil.name === name) ||
        (fil.genration !== undefined && fil.genration === genration) ||
        parseInt(fil.price) >= minPrice ||
        parseInt(fil.price) <= maxPrice
    );

    setFilteredItems(filterdProducts);
    console.log(pathName);
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
