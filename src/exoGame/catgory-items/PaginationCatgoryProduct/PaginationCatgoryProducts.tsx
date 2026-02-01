import React from "react";
import styleComponent from "./styleComponent/style_PaginationCatgoryProdycts";
import { Box } from "@mui/material";
import { Type_ComponentProps } from "./types/type_PagenationCatgoryProducts";
const PaginationCatgoryProducts: Type_ComponentProps = ({
  allProductData,
  setPageConter,
}) => {
  const { ParentBox, Button } = styleComponent;
  return (
    <Box>
      <ParentBox>
        {Array.from({ length: allProductData / 4 }).map((item, key) => {
          return (
            <Box key={key} sx={{ margin: "2px" }}>
              <Button onClick={(e) => setPageConter(e.currentTarget.innerText)}>
                {key + 1}
              </Button>
            </Box>
          );
        })}
      </ParentBox>
    </Box>
  );
};

export default PaginationCatgoryProducts;
