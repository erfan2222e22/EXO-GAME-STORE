import styleComponents from "./Style-Component/StyleRemoveFilterdItems";
const RemoveFilterdItems = ({
  FilterValue,
  setFilterValue,
  setFilteredItems,
}) => {
  const { HeadrBox, HeadrText, DelteBtn } = styleComponents;

  const showDelteBtn = (function () {
    const show = (arr) => {
      const itemsValue = Object.entries(arr)
        .map(([_, value]) => value !== "" || value > 0)
        .find((value) => {
          return value === true;
        });
      return itemsValue;
    };
    return {
      doSomthing(arr) {
        return show(arr);
      },
    };
  })();
  const result = showDelteBtn.doSomthing(FilterValue);

  const delteFilterItemsBtn = () => {
    setFilterValue((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, ""]))
    );
    setFilteredItems([]);
  };

  return (
    <HeadrBox>
      <HeadrText>filter</HeadrText>
      {result && <DelteBtn onClick={delteFilterItemsBtn}>delteitems</DelteBtn>}
    </HeadrBox>
  );
};
export default RemoveFilterdItems;
