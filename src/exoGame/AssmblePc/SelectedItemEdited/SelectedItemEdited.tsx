import { Typography, Box } from "@mui/material";
import styleComponents from "./Style-Component/StyleSelectPcProductBox";
import {
  click_Event_Type,
  Types_DelteItems,
  Type_AsslbleContiner_ProductArray_Filter,
  Types_setSelectPCPartBox,
  SelectedItemEditedProps,
} from "./types/types-SelectedItemEdited";

const SelectedItemEdited = ({
  item,
  handelAddPcClick,
  setSelectPCPartBox,
}: SelectedItemEditedProps) => {
  const { SelctedPcPatBox, IconsDelete, IconsEdit, IconsContiner, ImgBox } =
    styleComponents;

  const ProductArray = item.ProductArray || [];

  const DelteItems: Types_DelteItems = (e, ItemId, ItemTitle) => {
    e.stopPropagation();
    setSelectPCPartBox((prev) =>
      prev.map((selectItem: Types_setSelectPCPartBox) =>
        selectItem.title === ItemTitle
          ? {
              ...selectItem,
              ProductArray: selectItem.ProductArray?.filter(
                (fill: Type_AsslbleContiner_ProductArray_Filter) =>
                  fill.id !== ItemId
              ),
            }
          : selectItem
      )
    );
  };

  const editeItem = (e: click_Event_Type) => {
    e.stopPropagation();
    handelAddPcClick(e);
  };

  return (
    <div>
      {ProductArray.length > 0 && (
        <>
          {ProductArray.map(
            (fill: Type_AsslbleContiner_ProductArray_Filter) => {
              return (
                <SelctedPcPatBox
                  key={fill.id}
                  sx={{
                    borderBottom: ProductArray.length > 1 && "1px dotted black",
                  }}
                >
                  <Box
                    sx={{ display: "flex", gap: "15px", overflow: "hidden" }}
                  >
                    <ImgBox src={fill.img}></ImgBox>
                    <Typography>{fill.nameProduct}</Typography>
                    <Typography>{fill.price}$</Typography>
                    <Typography>*1</Typography>
                  </Box>
                  <IconsContiner>
                    <IconsEdit
                      onClick={(e: click_Event_Type) => editeItem(e)}
                    ></IconsEdit>
                    <IconsDelete
                      onClick={(e:click_Event_Type) => DelteItems(e, fill.id, fill.title)}
                    ></IconsDelete>
                  </IconsContiner>
                </SelctedPcPatBox>
              );
            }
          )}
        </>
      )}
    </div>
  );
};

export default SelectedItemEdited;
