import { useNavigate } from "react-router-dom";
import axios from "axios";
import GenraleCatgoryShape from "./GenraleCatgoryShape/GenraleCatgoryShape";
import PcAssmbleCatgoryShape from "./PcAssmbleCatgoryShape/PcAssmbleCatgoryShape";
import FailToFetchDataPage from "../../failToFetchDataPage/failToFetchDataPage";
import {
  Type_ComponentProps,
  Type_handelOnClick,
} from "./types/Type-ProductParentBox";
const ProductParentBoxComponent: Type_ComponentProps = ({
  filteredItems,
  originalItems,
  pathName,
  stateProduct,
  setDisplayFilterBox,
  selectPCPartBox,
  setSelectPCPartBox,
  closeCatgoryPcShape,
  findTruetoChooseItems,
}) => {
  const navigate = useNavigate();

  const handelOnClick: Type_handelOnClick = (e, item) => {
    e.stopPropagation();
    // axios(`http://localhost:3300/${pathName}/${item.id}`)
    //   .then(() => {
    //   })
    //   .catch((err) => {
    //     FailToFetchDataPage();
    //   });
    // navigate(`/catgory/${pathName}/${item.id}`, {
    //   state: { itemProduct: item },
    // });
    // console.log(item);
  };

  return (
    <>
      {stateProduct ? (
        <GenraleCatgoryShape
          filteredItems={filteredItems}
          originalItems={originalItems}
          handelOnClick={handelOnClick}
        />
      ) : (
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
      )}
    </>
  );
};

export default ProductParentBoxComponent;
