import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { Typography } from "@mui/material";
import styleComponents from "./Style-Component/StyleSelectPcProductBox";
import { useState } from "react";
import axios from "axios";
import CatgoryPcBox from "./CatgoryBox/CatgoryPcBox";
import SelectedItemEdited from "../SelectedItemEdited/SelectedItemEdited";
import { Element } from "react-scroll";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import FailToFetchDataPage from "../../failToFetchDataPage/failToFetchDataPage";
const SelectPcProductBox = () => {
  const useItems = useContext(contextUse);
  const navigate = useNavigate();

  const { selectPCPartBox, setSelectPCPartBox } = useItems;

  const {
    ParentBox,
    SelctedParentBox,
    SelectBoxContiner,
    AddPcPartsButton,

    ImgBox,
    SelectBoxSecendContiner,
    TextHederBox,
    AnimationBox,
    AnimationBoxContainer,
  } = styleComponents;

  const [DisplayCatgory, setDisplayCatgory] = useState(false);
  const [categoryData, setCategoryData] = useState(null);

  const handelAddPcClick = async (e, item) => {
    try {
      // recive  data from server when click on btn
      const fetchData = axios.get(item.jsonServer);
      const result = (await fetchData).data;
      setCategoryData({ product: result, pathName: item.title });
      setDisplayCatgory(true);
      switchtoChooseProducts(item);
      scroller.scrollTo("catgoryBox"); // scroll on catgoryProducts
    } catch (err) {
      FailToFetchDataPage(navigate);
    }
  };

  const switchtoChooseProducts = (item) => {
    // switch
    setSelectPCPartBox((prev) =>
      prev.map((fill) =>
        fill.text === item.text ? { ...fill, toChoose: true } : fill
      )
    );
    console.log(item);
  };

  const findTruetoChooseItems = () => {
    const filt = selectPCPartBox.filter((fill) => fill.toChoose === true);
    return filt || false;
  };

  const closeCatgoryPcShape = () => {
    // close catgoryBox on UI
    setDisplayCatgory(false);
    setSelectPCPartBox((prev) =>
      prev.map((fill) =>
        fill.toChoose === true ? { ...fill, toChoose: [] } : fill
      )
    );
  };

  return (
    <ParentBox>
      <Element name="catgoryBox">
        <CatgoryPcBox
          DisplayCatgory={DisplayCatgory}
          closeCatgoryPcShape={closeCatgoryPcShape}
          findTruetoChooseItems={findTruetoChooseItems}
          categoryData={categoryData}
          selectPCPartBox={selectPCPartBox}
          setSelectPCPartBox={setSelectPCPartBox}
        ></CatgoryPcBox>
      </Element>

      <TextHederBox>Details</TextHederBox>
      {selectPCPartBox?.map((item) => (
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
                  <ImgBox component="img" src={item.iconSrc}></ImgBox>
                  <Typography>{item.text}</Typography>
                </SelectBoxSecendContiner>
                {item.MandatoryPcPart ? (
                  <></>
                ) : (
                  <AddPcPartsButton
                    onClick={(e) => handelAddPcClick(e, item)}
                    component="button"
                  >
                    <TextHederBox>+</TextHederBox>
                  </AddPcPartsButton>
                )}
              </SelectBoxContiner>
            </AnimationBox>
          </AnimationBoxContainer>

          <SelectedItemEdited //Aded Pc Parts Box ✔
            handelAddPcClick={(e) => handelAddPcClick(e, item)}
            item={item}
            setSelectPCPartBox={setSelectPCPartBox}
            setDisplayCatgory={setDisplayCatgory}
          />
        </SelctedParentBox>
      ))}
    </ParentBox>
  );
};
export default SelectPcProductBox;
