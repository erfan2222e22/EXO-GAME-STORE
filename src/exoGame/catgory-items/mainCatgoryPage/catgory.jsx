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
  const { MainBox, SmallSizeMainBox } = styleComponents; // styled component
  const location = useLocation();
  const { product = [], pathName } = location.state || {};
  const filterValuesTols = product[0].productSetting;
  //main state
  const [FilterValue, setFilterValue] = useState({});

  // const initialItems = product;
  const [originalItems, setOriginalItems] = useState(product); // all items catch from json server
  const [filteredItems, setFilteredItems] = useState([]); //flterd items between slected filters

  const [kind_filters, setKind_filters] = useState([]); //filterd valus box
  const [value_kind_filter, setKind_filters_value] = useState();

  const [valid, setValid] = useState(false);
  const dynamicFilterVlause = (itemData) => {
    const itemDataValue = itemData.data.filterValues[0];
    let productDataKyeAndValuse = Object.fromEntries(
      Object.entries(itemDataValue).map(([item, value]) => {
        if (typeof value === "number") {
          return [item, 0];
        } else {
          return [item, ""];
        }
      })
    );
    setFilterValue(productDataKyeAndValuse);
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
    const { minPrice, maxPrice, ...restFilters } = FilterValue || {};

    const activeFilters = Object.entries(restFilters).filter(([_, value]) => {
      return (
        value !== "" && value !== 0 && value !== null && value !== undefined
      );
    });

    const hasMin = typeof minPrice === "number" && minPrice > 0;
    const hasMax = typeof maxPrice === "number" && maxPrice > 0;
    if (activeFilters.length === 0 && !hasMin && !hasMax) {
      setFilteredItems(originalItems);
      return;
    }

    const filtered = originalItems.filter((item) => {
      const price = parseInt(item.price, 10);
      const priceOk =
        (!hasMin || price >= minPrice) && (!hasMax || price <= maxPrice);
      if (!priceOk) return false;
      return activeFilters.every(([key, value]) => item[key] === value);
    });

    setFilteredItems(filtered);
  };

  return (
    <>
      <BoxHederFilterPrice
        originalItems={originalItems}
        setFilteredItems={setFilteredItems}
        setValid={setValid}
      />
      <ProductParentBoxComponent
        filteredItems={filteredItems}
        originalItems={originalItems}
        pathName={pathName}
      />
      {valid && (
        <SmallSizeMainBox>
          <>
            <button onClick={() => setValid((prev) => (prev = false))}>
              ✖
            </button>
          </>
          <RemoveFilterdItems
            FilterValue={FilterValue}
            setFilterValue={setFilterValue}
            setFilteredItems={setFilteredItems}
          />
          <FilterTolsValue
            FilterValue={FilterValue}
            kind_filters={kind_filters}
            setFilterValue={setFilterValue}
            handeOnClick={handeOnClick}
            itemsSetting={value_kind_filter}
          />
          <FilterBtnComponent filterItmes={filterItmes} />
        </SmallSizeMainBox>
      )}
      <MainBox>
        <RemoveFilterdItems
          FilterValue={FilterValue}
          setFilterValue={setFilterValue}
          setFilteredItems={setFilteredItems}
        />
        <FilterTolsValue
          FilterValue={FilterValue}
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
