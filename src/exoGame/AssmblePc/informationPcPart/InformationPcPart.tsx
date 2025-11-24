import React from "react";
import { Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styleComponent from "./Style-Component/StyleInformationPcPart";
import { scroller } from "react-scroll";
import { useEffect } from "react";
import {
  Props_Type,
  Type_selectPcPartHandel,
  Type_Products,
} from "./types/types_InformationPcPart";
import { Type_AsslbleContiner } from "../types/types-AssmbleCniter";

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

  const returnToSelectBox = (e: React.MouseEvent<HTMLElement>) => {
    setDisplayFilterBox(true);
    setDisplayBoxes(false);
  };

  const selectPcPartHandel: Type_selectPcPartHandel = (e, items, ItemTitle) => {
    const filterArray = selectPCPartBox.filter((fill: Type_AsslbleContiner) => {
      return fill.title === ItemTitle && fill.SeveralChoices;
    });

    setSelectPCPartBox((prev) => {
      const selectSolo = prev.map((fill: Type_AsslbleContiner) =>
        fill.title === ItemTitle ? { ...fill, ProductArray: [items] } : fill
      );

      const selectAll = prev.map((fill: Type_AsslbleContiner) =>
        fill.title === ItemTitle
          ? {
              ...fill,
              ProductArray: Array.from(
                new Map(
                  [...fill.ProductArray, items].map((product) => [
                    product.id,
                    product,
                  ])
                ).values()
              ),
            }
          : fill
      );

      console.log(items);
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

  useEffect(() => {
    console.log(selectPCPartBox);
  }, [selectPCPartBox]);

  return (
    <>
      {displayBoxes &&
        selectedItems.map((item: Type_Products) => {
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
                  backgroundColor: "red",
                }}
                onClick={() => console.log(item)}
              >
                <TableMainBox>
                  <TableParentBox>
                    {itemsInformation.map((infoObj, infoIdx) =>
                      Object.entries(infoObj).map(([key, value]) => (
                        <TableContainerBox key={`${infoIdx}-${key}`}>
                          <span style={{ color: "#666" }}>{key}:</span>
                          <span style={{ color: "#222" }}>{String(value)}</span>
                        </TableContainerBox>
                      ))
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
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      selectPcPartHandel(e, item, item.title)
                    }
                  >
                    Selection
                  </SelectBtn>
                  <ReturnBtn onClick={(e) => returnToSelectBox(e)}>
                    return
                  </ReturnBtn>
                </BtnBoxParent>
              </BtnBoxContiner>
            </MainBox>
          );
        })}
    </>
  );
};
export default InformationPcPart;
