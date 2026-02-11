import { useNavigate } from "react-router-dom";
import GenraleCatgoryShape from "./GenraleCatgoryShape/GenraleCatgoryShape";
import PcAssmbleCatgoryShape from "./PcAssmbleCatgoryShape/PcAssmbleCatgoryShape";

import {
  Type_ComponentProps,
  Type_handelOnClick,
} from "./types/Type-ProductParentBox";
const ProductParentBoxComponent: Type_ComponentProps = ({
  filteredItems,
  originalItems,
  pathName,
  DisplayCatgoryAssmble,
  setDisplayFilterBox,
  selectPCPartBox,
  setSelectPCPartBox,
  closeCatgoryPcShape,
  findTruetoChooseItems,
}) => {
  const navigate = useNavigate();

  const handelOnClick: Type_handelOnClick = (e, item) => {
    e.stopPropagation();
    navigate(`/catgory/${pathName}/${item.id}`, {
      state: { itemProduct: item },
    });
  };

  return (
    <>
      {DisplayCatgoryAssmble ? (
        <PcAssmbleCatgoryShape
          filteredItems={filteredItems}
          originalItems={originalItems}
          handelOnClick={handelOnClick}
          setDisplayFilterBox={setDisplayFilterBox}
          selectPCPartBox={selectPCPartBox}
          setSelectPCPartBox={setSelectPCPartBox}
          closeCatgoryPcShape={closeCatgoryPcShape}
          findTruetoChooseItems={findTruetoChooseItems}
        ></PcAssmbleCatgoryShape>
      ) : (
        <GenraleCatgoryShape
          filteredItems={filteredItems}
          originalItems={originalItems}
          handelOnClick={handelOnClick}
        />
      )}
    </>
  );
};

export default ProductParentBoxComponent;
