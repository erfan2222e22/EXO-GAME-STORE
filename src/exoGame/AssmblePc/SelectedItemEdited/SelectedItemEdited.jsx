import React from "react";
import { Typography, Box } from "@mui/material";
import styleComponents from "./Style-Component/StyleSelectPcProductBox";
const SelectedItemEdited = ({ item, setSelectPCPartBox, handelAddPcClick }) => {
  const { SelctedPcPatBox, IconsDelete, IconsEdit, IconsContiner, ImgBox } =
    styleComponents;

  const DelteItems = (e, ItemId, ItemTitle) => {
    setSelectPCPartBox((prev) =>
      prev.map((item) =>
        item.title === ItemTitle
          ? {
              ...item,
              ProductArray: item.ProductArray?.filter(
                (fill) => fill.id !== ItemId
              ),
            }
          : item
      )
    );
  };

  const editeItem = (e) => {
    handelAddPcClick();
  };

  return (
    <div>
      {item.ProductArray.length > 0 && (
        <>
          {item.ProductArray.map((fill) => {
            return (
              <SelctedPcPatBox
                key={fill.id}
                sx={{
                  borderBottom:
                    item.ProductArray.length > 1 && "1px dotted black",
                }}
              >
                <Box sx={{ display: "flex", gap: "15px", overflow: "hidden" }}>
                  <ImgBox component="img" src={fill.img}></ImgBox>
                  <Typography>{fill.nameProduct}</Typography>
                  <Typography>{fill.price}$</Typography>
                  <Typography>*1</Typography>
                </Box>
                <IconsContiner>
                  <IconsEdit onClick={(e) => editeItem(e)}></IconsEdit>
                  <IconsDelete
                    onClick={(e) => DelteItems(e, fill.id, fill.title)}
                  ></IconsDelete>
                </IconsContiner>
              </SelctedPcPatBox>
            );
          })}
        </>
      )}
    </div>
  );
};
export default SelectedItemEdited;
