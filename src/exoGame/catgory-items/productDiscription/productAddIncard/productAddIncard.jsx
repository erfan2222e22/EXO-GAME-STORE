import styleComponents from "../../../components/component-Style/StyleDiscriotionItems";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import emmiter from "../../../../mitt/emmiter";

const ProductAddIncard = ({
  SetProductCounter,
  price,
  productCounter,
  item,
}) => {
  const { ParentBoxAddItems, BoxInputCounterItemsInBox, BoxAddItems } =
    styleComponents;

  const handelOnclickBtn = (e) => {
    e.stopPropagation();
    if (price === "بزودی" || price === "ناموجود") {
      e.preventDefault();
    } else {
      emmiter.emit("massage", { cartList: item, counter: productCounter });
    }
  };

  const increseQty = (e) => {
    e.stopPropagation();
    SetProductCounter((preve) => preve + 1);
  };

  const decriseQty = (e) => {
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
          component="input"
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
        component="button"
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
