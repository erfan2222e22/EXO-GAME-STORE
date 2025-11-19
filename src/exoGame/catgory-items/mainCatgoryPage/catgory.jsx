import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styleComponents from "./Style-Component/StyleCatgory.js";
import FailToFetchDataPage from "../../failToFetchDataPage/failToFetchDataPage.jsx";
import CatgoryJsx from "./catgoryJsx.jsx";

const Catgory = ({
  product: propProduct,
  pathName: propPathName,
  selectPCPartBox,
  setSelectPCPartBox,
  closeCatgoryPcShape,
  findTruetoChooseItems,
}) => {
  const { MainBox, SmallSizeMainBox } = styleComponents; // styled component
  const location = useLocation();
  const navigate = useNavigate();

  const { product: stateProduct, pathName: statePathName } =
    location.state || {};

  // استفاده از props اگر موجود باشد، در غیر این صورت از location.state
  const product = propProduct || stateProduct;
  const pathName = propPathName || statePathName;

  const filterValuesTols = product[0].productSetting;
  //main state
  const [FilterValue, setFilterValue] = useState({});

  // const initialItems = product;

  const [originalItems, setOriginalItems] = useState(product); // all items catch from json server
  const [filteredItems, setFilteredItems] = useState([]); //flterd items between slected filters

  const [kind_filters, setKind_filters] = useState([]); //filterd valus box
  const [value_kind_filter, setKind_filters_value] = useState();

  const [valid, setValid] = useState(false);
  const [displayFilterBox, setDisplayFilterBox] = useState(true);

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
        FailToFetchDataPage(navigate);
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

  const props = {
    originalItems: originalItems,
    setFilteredItems: setFilteredItems,
    setValid: setValid,
    setOriginalItems: setOriginalItems,
    initialItems: product,
    setFilterValue: setFilterValue,
    filteredItems: filteredItems,
    pathName: pathName,
    stateProduct: stateProduct,
    setDisplayFilterBox: setDisplayFilterBox,
    selectPCPartBox: selectPCPartBox,
    setSelectPCPartBox: setSelectPCPartBox,
    closeCatgoryPcShape: closeCatgoryPcShape,
    findTruetoChooseItems: findTruetoChooseItems,
    FilterValue: FilterValue,
    kind_filters: kind_filters,
    handeOnClick: handeOnClick,
    itemsSetting: value_kind_filter,
    filterItmes: filterItmes,
    valid: valid,
    displayFilterBox: displayFilterBox,
    SmallSizeMainBox: SmallSizeMainBox,
    MainBox: MainBox,
  };

  return <CatgoryJsx props={props} />;
};
export default Catgory;
