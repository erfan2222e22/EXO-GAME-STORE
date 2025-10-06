import React from "react";
import { Typography, Box } from "@mui/material";
import styleComponent from "../../../components/component-Style/StyleAssmblePcShapeCatgory";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InformationPcPart from "../../../AssmblePc/informationPcPart/InformationPcPart";
import { useState } from "react";

const PcAssmbleCatgoryShape = ({
  filteredItems,
  originalItems,
  handelOnClick,
  setDisplayFilterBox,
}) => {
  const { MainBox, ContinerBoxDiscrib, Button, ImgBox, ContinerBox } =
    styleComponent;

  const [displayBoxes, setDisplayBoxes] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsInformation, setItemsInformation] = useState([]);

  const displayBoxInformation = (e, item) => {
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

  return (
    <>
      <Box sx={{ marginTop: "15%", display: displayBoxes ? "none" : "block" }}>
        {(filteredItems.length > 0 ? filteredItems : originalItems).map(
          (item) => (
            <Box key={item.id}>
              <MainBox>
                <ContinerBoxDiscrib>
                  <ImgBox src={item.img} component="img" />
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
                      onClick={(e) => displayBoxInformation(e, item)}
                      component="button"
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
        setDisplayBoxes={setDisplayBoxes}
        selectedItems={selectedItems}
        itemsInformation={itemsInformation}
        handelOnClick={handelOnClick}
        setDisplayFilterBox={setDisplayFilterBox}
        displayBoxes={displayBoxes}
      />
    </>
  );
};
export default PcAssmbleCatgoryShape;
