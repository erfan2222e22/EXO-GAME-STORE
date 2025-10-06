import React from "react";
import { Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styleComponent from "../../components/component-Style/StyleInformationPcPart";
const InformationPcPart = ({
  setDisplayBoxes,
  displayBoxes,
  selectedItems,
  itemsInformation,
  handelOnClick,
  setDisplayFilterBox,
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

  const returnToSelectBox = () => {
    setDisplayFilterBox(true);
    setDisplayBoxes(false);
  };

  const selectPcPart = () => {
    console.log(selectedItems);
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
                  onClick={(e) => handelOnClick(e, item)}
                ></OpenInNewIcon>
                <HederItemText>{item.title}</HederItemText>
              </HederMainBox>
              <BtnBoxContiner>
                <BtnBoxParent>
                  <SelectBtn onClick={selectPcPart}>Selection</SelectBtn>
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
