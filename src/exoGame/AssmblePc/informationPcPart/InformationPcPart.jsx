import React from "react";
import { Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styleComponent from "./Style-Component/StyleInformationPcPart";
import { scroller } from "react-scroll";
const InformationPcPart = ({
  setDisplayBoxes,
  displayBoxes,
  selectedItems,
  itemsInformation,
  setDisplayFilterBox,
  setSelectPCPartBox,
  selectPCPartBox,
  closeCatgoryPcShape,
}) => {
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

  const returnToSelectBox = (e) => {
    setDisplayFilterBox(true);
    setDisplayBoxes(false);
  };

  const selectPcPartHandel = (e, items, ItemId, ItemTitle) => {
    const filterArray = selectPCPartBox.filter((fill) => {
      return fill.title === ItemTitle && fill.SeveralChoices;
    });

    setSelectPCPartBox((prev) => {
      const selectSolo = prev.map((fill) =>
        fill.title === ItemTitle ? { ...fill, ProductArray: [items] } : fill
      );

      const selectAll = prev.map((fill) =>
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

      if (filterArray.length > 0) {
        return selectAll;
      } else {
        return selectSolo;
      }
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
              <ImgBox component="img" src={item.img}></ImgBox>
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
                    onClick={(e) =>
                      selectPcPartHandel(e, item, item.id, item.title)
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
