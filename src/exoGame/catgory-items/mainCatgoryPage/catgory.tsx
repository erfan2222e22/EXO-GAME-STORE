import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styleComponents from "./Style-Component/StyleCatgory.js";
import CatgoryJsx from "./catgoryJsx";
import PaginationCatgoryProducts from "../PaginationCatgoryProduct/PaginationCatgoryProducts";

import {
  Type_CatgoryProps,
  Type_FilterValuse,
  Type_originalItems_extends,
  setPriceFunction,
} from "./types/types-Catgory.js";
import { usePaginationConterCatgory } from "../../PaginationCatgoryProducts/PaginationCatgoryProducts.jsx";

import { AxiosError } from "axios";
const Catgory = ({
  ProductLink: productLinkProps,
  pathName: pathNameProps,
  filterdLinkBoll: filterdLinkBollProps,
  selectPCPartBox,
  setSelectPCPartBox,
  closeCatgoryPcShape,
  findTruetoChooseItems,
  DisplayCatgoryAssmble,
}: Type_CatgoryProps) => {
  const { pageConter, setPageConter, allProductData, setAllProductData } =
    usePaginationConterCatgory();

  const { MainBox, SmallSizeMainBox } = styleComponents; // styled component

  const location = useLocation();
  const navigate = useNavigate();

  const {
    pathName: pathNameState,
    ProductLink: jsonServerState,
    filterdLinkProduct: filterLinkProductState,
  } = location.state || {};

  useEffect(() => {
    setProductOnOriginalItems();
    fetchAllProductData();
  }, []);

  useEffect(() => {
    setProductOnOriginalItems();
  }, [pageConter]);

  const filterValuesTols = allProductData[0]?.productSetting;
  const [FilterValue, setFilterValue] = useState<Type_FilterValuse>({});

  const [originalItems, setOriginalItems] = useState<
    Type_originalItems_extends[] | []
  >([]); // all items catch from json server
  const [filteredItems, setFilteredItems] = useState([]); //flterd items between slected filters
  const [kind_filters, setKind_filters] = useState([]); //filterd valus box

  const [value_kind_filter, setKind_filters_value] = useState();

  const [bolShowSmallBox, SetBolShowSmallBox] = useState(false);
  const [displayFilterBox, setDisplayFilterBox] = useState(true);

  const ProductJsonLink = productLinkProps || jsonServerState;
  const filterdLinkProduct = filterLinkProductState || filterdLinkBollProps;
  const pathName = pathNameProps || pathNameState;

  useEffect(() => {
    const fetchFillterData = async () => {
      try {
        const { data: ProductSettingData } = await axios.get(filterValuesTols);
        const { filterValues, kindofFilter } = ProductSettingData;
        SetEmptyDynamicFilterKeys(filterValues);
        setKind_filters_value(filterValues);
        setKind_filters(kindofFilter);
      } catch (err) {
        handelFetchError(err as AxiosError);
      }
    };
    fetchFillterData();
  }, [filterValuesTols]);

  const setProductOnOriginalItems = async () => {
    try {
      const jsonLink = `${ProductJsonLink}${filterdLinkProduct ? "&" : "?"}_page=${pageConter}&_limit=4`;
      const { data: userData } = await axios.get(jsonLink);
      setOriginalItems(userData);
      console.log(userData);
    } catch (err) {
      handelFetchError(err as AxiosError);
    }
  };

  const fetchAllProductData = async () => {
    try {
      const { data: ProductData } = await axios.get(ProductJsonLink);
      setAllProductData(ProductData);
      console.log(ProductData);
    } catch (err) {
      handelFetchError(err as AxiosError);
    }
  };

  const SetEmptyDynamicFilterKeys = (itemData: Type_FilterValuse) => {
    const itemDataValue = itemData[0];
    let productDataKyeAndValuse = Object.fromEntries(
      Object.entries(itemDataValue).map(([item, value]) => {
        if (typeof value === "number") {
          //valuse are default 0 or empty string
          return [item, 0];
        } else {
          return [item, ""];
        }
      }),
    );
    setFilterValue(productDataKyeAndValuse);
  };

  const setPriceFunction: setPriceFunction = (selectedValue) => {
    const { maxPrice, minPrice } = selectedValue;
    setFilterValue((prev) => ({
      ...prev,
      minPrice: minPrice,
      maxPrice: maxPrice,
    }));
    console.log(selectedValue);
  };

  const filterItmes = () => {
    const { minPrice, maxPrice, ...restFilters } = FilterValue || {};
    console.log(FilterValue);
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
      const price = parseInt(String(item.price), 10);
      const priceOk =
        (!hasMin || price >= minPrice) && (!hasMax || price <= maxPrice);
      if (!priceOk) return false;
      return activeFilters.every(([key, value]) => item[key] === value);
    });
    setFilteredItems(filtered);
  };

  const handelFetchError = (err: AxiosError) => {
    const errStatus = err as AxiosError;
    axios.isAxiosError(err) &&
      navigate("/failedToFetch", {
        state: { errorStatus: errStatus.status },
      });
  };

  const props = {
    originalItems: originalItems,
    setFilteredItems: setFilteredItems,
    SetBolShowSmallBox: SetBolShowSmallBox,
    setOriginalItems: setOriginalItems,
    initialItems: allProductData,
    setFilterValue: setFilterValue,
    filteredItems: filteredItems,
    pathName: pathName,
    DisplayCatgoryAssmble: DisplayCatgoryAssmble,
    setDisplayFilterBox: setDisplayFilterBox,
    selectPCPartBox: selectPCPartBox,
    setSelectPCPartBox: setSelectPCPartBox,
    closeCatgoryPcShape: closeCatgoryPcShape,
    findTruetoChooseItems: findTruetoChooseItems,
    FilterValue: FilterValue,
    kind_filters: kind_filters,
    setPriceFunction: setPriceFunction,
    itemsSetting: value_kind_filter,
    filterItmes: filterItmes,
    bolShowSmallBox: bolShowSmallBox,
    displayFilterBox: displayFilterBox,
    SmallSizeMainBox: SmallSizeMainBox,
    MainBox: MainBox,
  };

  return (
    <>
      <CatgoryJsx props={props} />
      <PaginationCatgoryProducts
        allProductData={allProductData.length}
        setPageConter={setPageConter}
      />
    </>
  );
};
export default Catgory;
