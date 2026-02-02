import React from "react";
import { Typography, Box } from "@mui/material";
import styleComponent from "./Style-Component/StyleAssmblePcShapeCatgory";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InformationPcPart from "../../../AssmblePc/informationPcPart/InformationPcPart";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  Component_Props,
  Type_checkBoxOnclick,
  displayBoxInformation,
} from "./types/Type-PcAssmbleCatgoryShape";
import { Type_AsslbleContiner_ProductArray } from "../../../AssmblePc/types/types-AssmbleCniter";

const PcAssmbleCatgoryShape = ({
  filteredItems,
  originalItems,
  handelOnClick,
  setDisplayFilterBox,
  selectPCPartBox,
  setSelectPCPartBox,
  closeCatgoryPcShape,
  findTruetoChooseItems,
}: Component_Props) => {
  const { MainBox, ContinerBoxDiscrib, Button, ImgBox, ContinerBox } =
    styleComponent;

  const [displayBoxes, setDisplayBoxes] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsInformation, setItemsInformation] = useState([]);

  const displayBoxInformation: displayBoxInformation = (item) => {
    setSelectedItems([item]);
    setDisplayBoxes(true);
    setDisplayFilterBox(false);

    const {
      id,
      company,
      ProductReview,
      LinkDiscriptionPrdouct,
      img,
      nameProduct,
      price,
      productSetting,
      title,
      ...restItems
    } = item;

    setItemsInformation([restItems]);
  };

  const checkBoxOnclick: Type_checkBoxOnclick = (item) => {
    const productItem: Type_AsslbleContiner_ProductArray = {
      id: item.id ?? "",
      price: item.price ?? 0,
      img: item.img ?? "",
      ...(item.nameProduct && { nameProduct: item.nameProduct }),
    } as Type_AsslbleContiner_ProductArray;

    setSelectPCPartBox((prev) => {
      return prev.map((items) =>
        items.title === item.title
          ? {
              ...items,
              ProductArray: Array.from(
                new Map(
                  [...items.ProductArray, productItem].map((product) => [
                    product.id,
                    product,
                  ])
                ).values()
              ),
            }
          : items
      );
    });
  };

  return (
    <>
      <Box sx={{ marginTop: "15%", display: displayBoxes ? "none" : "block" }}>
        {(filteredItems.length > 0 ? filteredItems : originalItems).map(
          (item) => (
            <Box key={item.id}>
              <MainBox>
                <ContinerBoxDiscrib>
                  {findTruetoChooseItems()[0].SeveralChoices && (
                    <>
                      <Checkbox
                        onClick={() => checkBoxOnclick(item)}
                      ></Checkbox>
                    </>
                  )}
                  <ImgBox src={item.img} as="img" />
                  <Typography>{item.nameProduct}</Typography>
                  <OpenInNewIcon
                    sx={{ color: "#03c03c", cursor: "pointer" }}
                    onClick={(e) => handelOnClick(e, item)}
                  ></OpenInNewIcon>
                </ContinerBoxDiscrib>
                <Box>
                  <ContinerBox>
                    <Typography
                      sx={{
                        fontFamily: "vazir",
                        overflow: "hidden",
                        ...(item.price === "ناموجود"
                          ? {
                              color: "red",
                            }
                          : item.price === "بزودی"
                          ? {
                              color: "#e46e00",
                            }
                          : {
                              color: "black",
                            }),
                      }}
                    >
                      {item.price}
                      <br />$
                    </Typography>
                    <Button
                      onClick={() => displayBoxInformation(item)}
                      as="button"
                    >
                      show
                    </Button>
                  </ContinerBox>
                </Box>
              </MainBox>
            </Box>
          )
        )}
      </Box>
      <InformationPcPart
        setSelectPCPartBox={setSelectPCPartBox}
        selectPCPartBox={selectPCPartBox}
        setDisplayBoxes={setDisplayBoxes}
        selectedItems={selectedItems}
        itemsInformation={itemsInformation}
        setDisplayFilterBox={setDisplayFilterBox}
        displayBoxes={displayBoxes}
        closeCatgoryPcShape={closeCatgoryPcShape}
      />
    </>
  );
};

export default PcAssmbleCatgoryShape;
