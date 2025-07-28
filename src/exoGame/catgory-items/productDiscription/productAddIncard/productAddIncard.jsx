import React from "react";
import component from "../../../components/component-Style/StyleDiscriotionItems";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const ProductAddIncard = ({ SetTest, price, test }) => {
  const { ParentBoxAddItems, BoxInputCounterItemsInBox, BoxAddItems } =
    component;

  const handelOnclickBtn = (e) => {
    if (price === "بزودی" || price === "ناموجود") {
      e.preventDefault();
    }
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
          onClick={() => SetTest((preve) => preve - 1)}
        >
          -
        </span>
        <BoxInputCounterItemsInBox
          component="input"
          placeholder="conter"
          value={test}
        ></BoxInputCounterItemsInBox>
        <span
          role="button"
          style={{
            position: "relative",
            right: "12px",
            fontSize: "15px",
          }}
          onClick={() => SetTest((preve) => preve + 1)}
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
