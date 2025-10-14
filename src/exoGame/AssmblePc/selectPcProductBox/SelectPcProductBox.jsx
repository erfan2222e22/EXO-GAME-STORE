import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { Typography } from "@mui/material";
import styleComponents from "../../components/component-Style/StyleSelectPcProductBox";
import { useState } from "react";
import axios from "axios";
import CatgoryPcBox from "./CatgoryBox/CatgoryPcBox";
import SelectedItemEdited from "../SelectedItemEdited/SelectedItemEdited";

const SelectPcProductBox = () => {
  const useItems = useContext(contextUse);

  const { selectPCPartBox, setSelectPCPartBox } = useItems;

  const {
    ParentBox,
    SelctedParentBox,
    SelectBoxContiner,
    AddPcPartsButton,

    ImgBox,
    SelectBoxSecendContiner,
    TextHederBox,
  } = styleComponents;

  const [DisplayCatgory, setDisplayCatgory] = useState(false);
  const [categoryData, setCategoryData] = useState(null);

  const handelAddPcClick = async (e, item) => {
    try {
      const fetchData = axios.get(item.jsonServer);
      const result = (await fetchData).data;
      setCategoryData({ product: result, pathName: item.title });
      setDisplayCatgory(true);
      switchtoChooseProducts(item);
    } catch (err) {
      console.log(err);
    }
  };

  const switchtoChooseProducts = (item) => {
    setSelectPCPartBox((prev) =>
      prev.map((fill) =>
        fill.text === item.text ? { ...fill, toChoose: true } : fill
      )
    );
  };

  const findTruetoChooseItems = () => {
    const filt = selectPCPartBox.filter((fill) => fill.toChoose === true);
    return filt;
  };

  const closeCatgoryPcShape = () => {
    setDisplayCatgory(false);
    setSelectPCPartBox((prev) =>
      prev.map((fill) =>
        fill.toChoose === true ? { ...fill, toChoose: false } : fill
      )
    );
  };

  return (
    <ParentBox>
      <CatgoryPcBox
        DisplayCatgory={DisplayCatgory}
        closeCatgoryPcShape={closeCatgoryPcShape}
        findTruetoChooseItems={findTruetoChooseItems}
        categoryData={categoryData}
        selectPCPartBox={selectPCPartBox}
        setSelectPCPartBox={setSelectPCPartBox}
      ></CatgoryPcBox>

      <TextHederBox>Details</TextHederBox>
      {selectPCPartBox?.map((item) => (
        <SelctedParentBox>
          <SelectBoxContiner>
            <SelectBoxSecendContiner>
              <ImgBox component="img" src={item.iconSrc}></ImgBox>
              <Typography>{item.text}</Typography>
            </SelectBoxSecendContiner>

            <AddPcPartsButton
              onClick={(e) => handelAddPcClick(e, item)}
              component="button"
            >
              <TextHederBox>+</TextHederBox>
            </AddPcPartsButton>
          </SelectBoxContiner>

          <SelectedItemEdited //Aded Pc Parts Box ✔
            handelAddPcClick={(e) => handelAddPcClick(e, item)}
            item={item}
            setSelectPCPartBox={setSelectPCPartBox}
            setDisplayCatgory={setDisplayCatgory}
            selectPCPartBox={selectPCPartBox}
          />
        </SelctedParentBox>
      ))}
    </ParentBox>
  );
};
export default SelectPcProductBox;
