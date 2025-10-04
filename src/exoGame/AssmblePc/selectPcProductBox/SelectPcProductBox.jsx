import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { Typography, Box } from "@mui/material";
import styleComponents from "../../components/component-Style/StyleSelectPcProductBox";
import { useState } from "react";
import axios from "axios";
import CatgoryPcBox from "./CatgoryBox/CatgoryPcBox";

const SelectPcProductBox = () => {
  const useItems = useContext(contextUse);

  const { selectPCPartBox, setSelectPCPartBox } = useItems;

  const {
    ParentBox,
    SelctedParentBox,
    SelectBoxContiner,
    AddPcPartsButton,
    SelctedPcPatBox,
    IconsDelete,
    IconsEdit,
    IconsContiner,
    ImgBox,
    SelectBoxSecendContiner,
    TextHederBox,
  } = styleComponents;

  const awd = [{ name: "erfan" }];

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
        fill.text === item.text ? { ...fill, toChoose: false } : fill
      )
    );
    console.log(selectPCPartBox);
  };

  const findFalsetoChooseItems = () => {
    const filt = selectPCPartBox.filter((fill) => fill.toChoose === false);
    return filt;
  };

  const closeCatgory = () => {
    setDisplayCatgory(false);
    setSelectPCPartBox((prev) =>
      prev.map((fill) =>
        fill.toChoose === false ? { ...fill, toChoose: true } : fill
      )
    );
  };

  return (
    <ParentBox>
      <CatgoryPcBox
        DisplayCatgory={DisplayCatgory}
        closeCatgory={closeCatgory}
        findFalsetoChooseItems={findFalsetoChooseItems}
        categoryData={categoryData}
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

          <Box style={{ display: "flex" }}>
            {awd.map((item) => {
              return (
                <SelctedPcPatBox>
                  <Box sx={{ display: "flex", gap: "15px" }}>
                    <ImgBox
                      component="img"
                      src="https://exo.ir/image/cache/catalog/Products/AMD/CPU/Threadripper-Pro/Series-9000/Ryzen-Threadripper-PRO-9000-1-1500x1500.webp"
                    ></ImgBox>
                    <Typography>AMD Ryzen Threadripper PRO 9995WX</Typography>
                    <Typography>3000$</Typography>
                    <Typography>*1</Typography>
                  </Box>
                  <IconsContiner>
                    <IconsEdit></IconsEdit>
                    <IconsDelete></IconsDelete>
                  </IconsContiner>
                </SelctedPcPatBox>
              );
            })}
          </Box>
        </SelctedParentBox>
      ))}
    </ParentBox>
  );
};
export default SelectPcProductBox;
