import React, { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { Typography } from "@mui/material";
import styleComponents from "./Style-Component/StyleSelectPcProductBox";
import { useState } from "react";
import axios from "axios";
import CatgoryPcBox from "./CatgoryBox/CatgoryPcBox";
import SelectedItemEdited from "../SelectedItemEdited/SelectedItemEdited";
import FailToFetchDataPage from "../../failToFetchDataPage/failToFetchDataPage";
import * as Scroll from "react-scroll";

import {
  Type_SelectPCPartBox,
  EventClick_Types,
  SwitchCatgoryData,
  Type_handelAddPcClick,
  Type_switchtoChooseProducts,
} from "./types/types-SelectPcProductBox";

const ScrollElement = Scroll.Element as React.ComponentType<{
  name: string;
  children?: React.ReactNode;
}>;

const SelectPcProductBox = () => {
  const useItems = useContext(contextUse);
  const { selectPCPartBox, setSelectPCPartBox } = useItems;

  const {
    ParentBox,
    SelctedParentBox,
    SelectBoxContiner,
    AddPcPartsButton,
    SelectBoxSecendContiner,
    TextHederBox,
    AnimationBox,
    AnimationBoxContainer,
    ImgBox,
  } = styleComponents;

  const [DisplayCatgory, setDisplayCatgory] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<SwitchCatgoryData>(null);

  const handelAddPcClick: Type_handelAddPcClick = async (e, item) => {
    try {
      // recive  data from server when click on btn
      const fetchData = axios.get(item.jsonServer);
      const result = (await fetchData).data;
      setCategoryData({ product: result, pathName: item.title });
      setDisplayCatgory(true);
      switchtoChooseProducts(item);
      Scroll.scroller.scrollTo("catgoryBox"); // scroll on catgoryProducts
    } catch (err) {
      FailToFetchDataPage();
    }
  };

  const switchtoChooseProducts: Type_switchtoChooseProducts = (item) => {
    // switch
    setSelectPCPartBox((prev: Type_SelectPCPartBox[]) =>
      prev.map((fill) =>
        fill.text === item.text ? { ...fill, toChoose: true } : fill
      )
    );
  };

  const findTruetoChooseItems = () => {
    const filt = selectPCPartBox.filter(
      (fill: Type_SelectPCPartBox) => fill.toChoose === true
    );
    return filt || false;
  };

  const closeCatgoryPcShape = () => {
    // close catgoryBox on UI
    setDisplayCatgory(false);
    setSelectPCPartBox((prev: Type_SelectPCPartBox[]) =>
      prev.map((fill) =>
        fill.toChoose === true ? { ...fill, toChoose: false } : fill
      )
    );
  };

  return (
    <ParentBox>
      <ScrollElement name="catgoryBox">
        <CatgoryPcBox
          DisplayCatgory={DisplayCatgory}
          closeCatgoryPcShape={closeCatgoryPcShape}
          findTruetoChooseItems={findTruetoChooseItems}
          categoryData={categoryData}
          selectPCPartBox={selectPCPartBox}
          setSelectPCPartBox={setSelectPCPartBox}
        ></CatgoryPcBox>
      </ScrollElement>

      <TextHederBox>Details</TextHederBox>
      {selectPCPartBox?.map((item: Type_SelectPCPartBox) => (
        <SelctedParentBox>
          <AnimationBoxContainer>
            <AnimationBox
              sx={{
                "&::before": {
                  backgroundImage:
                    item.MandatoryPcPart &&
                    "linear-gradient(140deg, rgba(253, 0, 0, 1), rgba(255, 0, 0, 1))",
                },
              }}
            >
              <SelectBoxContiner
                sx={{
                  backgroundColor: item.MandatoryPcPart
                    ? "#f8f2f2ff"
                    : "#c0f5d0",
                }}
              >
                <SelectBoxSecendContiner>
                  <ImgBox src={item.iconSrc} alt={item.text}></ImgBox>
                  <Typography>{item.text}</Typography>
                </SelectBoxSecendContiner>
                {item.MandatoryPcPart ? (
                  <></>
                ) : (
                  <AddPcPartsButton
                    onClick={(e: EventClick_Types) => handelAddPcClick(e, item)}
                  >
                    <TextHederBox>+</TextHederBox>
                  </AddPcPartsButton>
                )}
              </SelectBoxContiner>
            </AnimationBox>
          </AnimationBoxContainer>

          <SelectedItemEdited
            //Aded Pc Parts Box ✔
            handelAddPcClick={(e: EventClick_Types) =>
              handelAddPcClick(e, item)
            }
            item={item}
            setSelectPCPartBox={setSelectPCPartBox}
          />
        </SelctedParentBox>
      ))}
    </ParentBox>
  );
};
export default SelectPcProductBox;
