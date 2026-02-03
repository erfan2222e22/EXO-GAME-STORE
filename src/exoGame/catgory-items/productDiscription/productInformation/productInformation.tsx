import React from "react";
import { Typography } from "@mui/material";
import {
  ProductInformationItem,
  ProductInformationProps,
} from "./types/type_ProductInformation";
import styleComponent from "./style-Component/styleProductInformation";

const ProductInformation = (rest: ProductInformationProps) => {
  const { ParentContiner } = styleComponent;

  const {
    Memorycapacity,
    Ramcapacity,
    Graphicsprocessingunit,
    CentralProcessingUnit,
    YearIntroduced,
    genration,
    ConsoleType,
  } = rest;

  const items: ProductInformationItem[] = [
    { text: "type Console:", value: Memorycapacity },
    { text: "Generation:", value: Ramcapacity },
    { text: "Year Introduced", value: Graphicsprocessingunit },
    { text: "Central Processing Unit", value: CentralProcessingUnit },
    { text: "Graphics processing unit", value: YearIntroduced },
    { text: "Ram capacity", value: genration },
    { text: "Memory capacity", value: ConsoleType },
  ];

  return (
    <ParentContiner>
      {items.map((item, index) => {
        return (
          <Typography key={index} component="h6" sx={{ overflow: "hidden" }}>
            {item.text}: {item.value}
          </Typography>
        );
      })}
    </ParentContiner>
  );
};
export default ProductInformation;
