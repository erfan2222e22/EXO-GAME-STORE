import styleComponents from "./Style-Component/StyleRemoveFilterdItems";
import {
  Component_Porps,
  showDelteValueFilters,
} from "./types/Types_RemoveFilterdItems";
import { Type_FilterValuse } from "../mainCatgoryPage/types/types-Catgory";

const RemoveFilterdItems: Component_Porps = ({ props }) => {
  const { FilterValue, setFilterValue, setFilteredItems } = props;
  const { HeadrBox, HeadrText, DelteBtn } = styleComponents;

  const showDelteBtn = (function () {
    const showDelteValueFilters: showDelteValueFilters = (arr) => {
      const itemsValue = Object.entries(arr)
        .map(([key, value]) => value.toString().length > 0)
        .find((value) => {
          return value;
        });
      return itemsValue;
    };
    return {
      doSomthing(arr: Type_FilterValuse) {
        return showDelteValueFilters(arr);
      },
    };
  })();
  const result = showDelteBtn.doSomthing(FilterValue);

  const delteAllFiltersItems = () => {
    setFilterValue((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, ""]))
    );
    setFilteredItems([]);
  };

  return (
    <HeadrBox>
      <HeadrText onClick={() => console.log([FilterValue])}>filter</HeadrText>
      {result && <DelteBtn onClick={delteAllFiltersItems}>delteitems</DelteBtn>}
    </HeadrBox>
  );
};
export default RemoveFilterdItems;
