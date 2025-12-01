import styleComponents from "./Style-Component/StyleRemoveFilterdItems";
import { Type_FilterValuse } from "../ProductParentBox/types/Type-ProductParentBox";
import { Props_Component } from "./types/Types_RemoveFilterdItems";
import { number } from "prop-types";

const RemoveFilterdItems = ({
  FilterValue,
  setFilterValue,
  setFilteredItems,
}: Props_Component) => {
  const { HeadrBox, HeadrText, DelteBtn } = styleComponents;

  const showDelteBtn = (function () {
    const show = (arr: Type_FilterValuse[]) => {
      const itemsValue = Object.entries(arr)
        .map(([key, value]) => value.toString().length > 0)
        .find((value) => {
          return value;
        });
      return itemsValue;
    };
    return {
      doSomthing(arr: Type_FilterValuse[]) {
        return show(arr);
      },
    };
  })();
  const result = showDelteBtn.doSomthing(FilterValue);

  const delteFilterItemsBtn = () => {
    setFilterValue(
      //delete all FiterValuse
      (prev) => Object.fromEntries(Object.keys(prev).map((key) => [key, ""]))
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
