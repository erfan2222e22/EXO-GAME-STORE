import BoxHederFilterPrice from "../BoxHderFilterPrice/BoxHderFilterPrice";
import ProductParentBoxComponent from "../ProductParentBox/ProductParentBox";
import RemoveFilterdItems from "../RemoveFilterdItems/RemoveFilterdItems";
import FilterTolsValue from "../FilterTolsValue/FilterTolsValue";
import FilterBtnComponent from "../FilterBtn/FilterBtn";
const CatgoryJsx = ({ props }) => {
  const {
    originalItems,
    setFilteredItems,
    setValid,
    setOriginalItems,
    product,
    setFilterValue,
    filteredItems,
    pathName,
    stateProduct,
    setDisplayFilterBox,
    selectPCPartBox,
    setSelectPCPartBox,
    closeCatgoryPcShape,
    findTruetoChooseItems,
    FilterValue,
    kind_filters,
    handeOnClick,
    value_kind_filter,
    filterItmes,
    valid,
    displayFilterBox,
    SmallSizeMainBox,
    MainBox,
  } = props;
  return (
    <>
      <BoxHederFilterPrice
        originalItems={originalItems}
        setFilteredItems={setFilteredItems}
        setValid={setValid}
        setOriginalItems={setOriginalItems}
        initialItems={product}
        setFilterValue={setFilterValue}
      />
      <ProductParentBoxComponent
        filteredItems={filteredItems}
        originalItems={originalItems}
        pathName={pathName}
        stateProduct={stateProduct}
        setDisplayFilterBox={setDisplayFilterBox}
        selectPCPartBox={selectPCPartBox}
        setSelectPCPartBox={setSelectPCPartBox}
        closeCatgoryPcShape={closeCatgoryPcShape}
        findTruetoChooseItems={findTruetoChooseItems}
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
      {displayFilterBox && (
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
      )}
    </>
  );
};

export default CatgoryJsx;
