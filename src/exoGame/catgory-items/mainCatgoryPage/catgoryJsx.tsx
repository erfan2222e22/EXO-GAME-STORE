import BoxHederFilterPrice from "../BoxHderFilterPrice/BoxHderFilterPrice";
import ProductParentBoxComponent from "../ProductParentBox/ProductParentBox";
import RemoveFilterdItems from "../RemoveFilterdItems/RemoveFilterdItems";
import FilterTolsValue from "../FilterTolsValue/FilterTolsValue";
import FilterBtnComponent from "../FilterBtn/FilterBtn";
import { ComponentProps } from "./types/Type_CatgoryJsx";

const CatgoryJsx: ComponentProps = ({ props }) => {
  const {
    originalItems,
    setFilteredItems,
    SetBolShowSmallBox,
    setOriginalItems,
    initialItems,
    setFilterValue,
    filteredItems,
    pathName,
    DisplayCatgoryAssmble,
    setDisplayFilterBox,
    selectPCPartBox,
    setSelectPCPartBox,
    closeCatgoryPcShape,
    FilterValue,
    kind_filters,
    setPriceFunction,
    itemsSetting,
    filterItmes,
    bolShowSmallBox,
    displayFilterBox,
    SmallSizeMainBox,
    MainBox,
    findTruetoChooseItems,
  } = props;

  const FilterTolsValue_Props = {
    FilterValue: FilterValue,
    kind_filters: kind_filters,
    setFilterValue: setFilterValue,
    setPriceFunction: setPriceFunction,
    itemsSetting: itemsSetting,
  };

  const RemoveFilterdItems_Porps = {
    FilterValue: FilterValue,
    setFilterValue: setFilterValue,
    setFilteredItems: setFilteredItems,
  };

  return (
    <>
      <BoxHederFilterPrice
        originalItems={originalItems}
        setFilteredItems={setFilteredItems}
        SetBolShowSmallBox={SetBolShowSmallBox}
        setOriginalItems={setOriginalItems}
        initialItems={initialItems}
        setFilterValue={setFilterValue}
        FilterValue={FilterValue}
      />
      <ProductParentBoxComponent
        filteredItems={filteredItems}
        originalItems={originalItems}
        pathName={pathName}
        DisplayCatgoryAssmble={DisplayCatgoryAssmble}
        setDisplayFilterBox={setDisplayFilterBox}
        selectPCPartBox={selectPCPartBox}
        setSelectPCPartBox={setSelectPCPartBox}
        closeCatgoryPcShape={closeCatgoryPcShape}
        findTruetoChooseItems={findTruetoChooseItems}
      />
      {bolShowSmallBox && (
        <SmallSizeMainBox>
          <button
            onClick={() =>
              SetBolShowSmallBox((prev: boolean) => (prev = false))
            }
          >
            ✖
          </button>
          <RemoveFilterdItems props={RemoveFilterdItems_Porps} />
          <FilterTolsValue props={FilterTolsValue_Props} />
          <FilterBtnComponent filterItmes={filterItmes} />
        </SmallSizeMainBox>
      )}
      {displayFilterBox && (
        <MainBox>
          <RemoveFilterdItems props={RemoveFilterdItems_Porps} />
          <FilterTolsValue props={FilterTolsValue_Props} />
          <FilterBtnComponent filterItmes={filterItmes} />
        </MainBox>
      )}
    </>
  );
};

export default CatgoryJsx;
