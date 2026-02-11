import React from "react";
import { Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styleComponent from "./Style-Component/StyleInformationPcPart";
import { scroller } from "react-scroll";

import {
  Props_Type,
  Type_selectPcPartHandel,
} from "./types/types_InformationPcPart";

import {
  Type_AsslbleContiner,
  Type_AsslbleContiner_ProductArray,
} from "../types/types-AssmbleCniter";

const InformationPcPart = ({
  setDisplayBoxes,
  displayBoxes,
  selectedItems,
  itemsInformation,
  setDisplayFilterBox,
  setSelectPCPartBox,
  selectPCPartBox,
  closeCatgoryPcShape,
}: Props_Type) => {
  const {
    MainBox,
    ImgBox,
    TableMainBox,
    TableParentBox,
    TableContainerBox,
    HederMainBox,
    HederItemText,
    ReturnBtn,
    SelectBtn,
    BtnBoxContiner,
    BtnBoxParent,
  } = styleComponent;

  const returnToSelectBox = () => {
    setDisplayFilterBox(true);
    setDisplayBoxes(false);
  };

  const selectPcPartHandel: Type_selectPcPartHandel = (items, ItemTitle) => {
    const { price, id, img, nameProduct } = items;

    const filterArray = selectPCPartBox.filter((fill: Type_AsslbleContiner) => {
      return fill.title === ItemTitle && fill.SeveralChoices;
    });

    const productItem: Type_AsslbleContiner_ProductArray = {
      id: id ?? "",
      price: price ?? 0,
      img: img ?? "",
      ...(nameProduct && { nameProduct: nameProduct }),
    } as Type_AsslbleContiner_ProductArray;

    setSelectPCPartBox((prev: Type_AsslbleContiner[]) => {
      const selectSolo = prev.map((fill: Type_AsslbleContiner) =>
        fill.title === ItemTitle
          ? { ...fill, ProductArray: [productItem] }
          : fill,
      );

      const selectAll = prev.map((fill: Type_AsslbleContiner) =>
        fill.title === ItemTitle
          ? {
              ...fill,
              ProductArray: Array.from(
                new Map(
                  [...fill.ProductArray, productItem].map((product) => [
                    product.id,
                    product,
                  ]),
                ).values(),
              ),
            }
          : fill,
      );
      return filterArray.length > 0 ? selectAll : selectSolo;
    });

    closeCatgoryPcShape();

    scroller.scrollTo("catgoryBox", {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <>
      {displayBoxes &&
        selectedItems.map((item) => {
          return (
            <MainBox key={item.id}>
              <ImgBox
                sx={{
                  backgroundImage: item.img,
                }}
              ></ImgBox>
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50%",
                  marginTop: "15%",
                  gridArea: "1/3/6/6",
                  width: "100%",
                }}
              >
                <TableMainBox>
                  <TableParentBox>
                    {itemsInformation.map((infoObj, infoIdx) =>
                      Object.entries(infoObj).map(([key, value]) => (
                        <TableContainerBox key={`${infoIdx}-${key}`}>
                          <span style={{ color: "#666" }}>{key}:</span>
                          <span style={{ color: "#222" }}>{String(value)}</span>
                        </TableContainerBox>
                      )),
                    )}
                  </TableParentBox>
                </TableMainBox>
              </Box>
              <HederMainBox>
                <OpenInNewIcon
                  sx={{
                    color: "#03c03c",
                    cursor: "pointer",
                  }}
                ></OpenInNewIcon>
                <HederItemText>{item.title}</HederItemText>
              </HederMainBox>
              <BtnBoxContiner>
                <BtnBoxParent>
                  <SelectBtn
                    onClick={() => selectPcPartHandel(item, item.title)}
                  >
                    Selection
                  </SelectBtn>
                  <ReturnBtn onClick={returnToSelectBox}>return</ReturnBtn>
                </BtnBoxParent>
              </BtnBoxContiner>
            </MainBox>
          );
        })}
    </>
  );
};
export default InformationPcPart;
