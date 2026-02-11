import styleComponents from "./Style-Component/StyleDiscriotionItems";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import emmiter from "../../../../mitt/emmiter";
import { Type_Event, PropsTypes } from "./types/Type-ProductAddinCard";

const ProductAddIncard: PropsTypes = ({
  SetProductCounter,
  price,
  productCounter,
  item,
}) => {
  const { ParentBoxAddItems, BoxInputCounterItemsInBox, BoxAddItems } =
    styleComponents;

  const handelOnclickBtn = (e: Type_Event) => {
    e.stopPropagation();
    if (price === "بزودی" || price === "ناموجود") {
      e.preventDefault();
    } else {
      emmiter.emit("massage", { cartList: item, counter: productCounter });
    }
  };

  const increseQty = (e: Type_Event) => {
    e.stopPropagation();
    SetProductCounter((preve) => preve + 1);
  };

  const decriseQty = (e: Type_Event) => {
    e.stopPropagation();
    SetProductCounter((preve) => (preve > 1 ? preve - 1 : 1));
  };

  return (
    <ParentBoxAddItems>
      <span style={{ fontSize: "40px", overflow: "hidden" }}>{price} $</span>
      <Box>
        <span>Count</span>
        <span
          role="button"
          style={{
            position: "relative",
            left: "12px",
            fontSize: "15px",
          }}
          onClick={(e) => decriseQty(e)}
        >
          -
        </span>
        <BoxInputCounterItemsInBox
          as="input"
          placeholder="conter"
          value={productCounter}
        ></BoxInputCounterItemsInBox>
        <span
          role="button"
          style={{
            position: "relative",
            right: "12px",
            fontSize: "15px",
          }}
          onClick={(e) => increseQty(e)}
        >
          +
        </span>
      </Box>
      <Box></Box>
      <BoxAddItems
        onClick={(e) => handelOnclickBtn(e)}
        as="button"
        sx={{
          overflow: "hidden",
          backgroundColor: price === "بزودی" ? "yellow" : "#03c03c",
        }}
      >
        <span style={{ fontSize: "25px" }}>add to cart</span>
      </BoxAddItems>
      <Typography
        sx={{
          fontSize: "14px",
          padding: "4px",
          overflow: "hidden",
        }}
      >
        Authenticity: and integrity <br /> guarantee + 10-day return policy
      </Typography>
    </ParentBoxAddItems>
  );
};
export default ProductAddIncard;
