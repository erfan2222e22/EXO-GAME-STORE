import React from "react";
import { Typography } from "@mui/material";
const ProductInformation = ({
  Memorycapacity,
  Ramcapacity,
  Graphicsprocessingunit,
  CentralProcessingUnit,
  YearIntroduced,
  genration,
  ConsoleType,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column ",
        gap: "20px",
        color: "black",
      }}
    >
      <Typography
        component="h6"
        sx={{
          color: "black",
          overflow: "hidden",
        }}
      >
        Key Features
      </Typography>
      <Typography component="h6" sx={{ overflow: "hidden" }}>
        type Console:{ConsoleType}
      </Typography>
      <Typography component="h6" sx={{ overflow: "hidden" }}>
        Generation:{genration}
      </Typography>
      <Typography component="h6" sx={{ overflow: "hidden" }}>
        Year Introduced:{YearIntroduced}
      </Typography>
      <Typography component="h6" sx={{ overflow: "hidden" }}>
        Central Processing Unit:{CentralProcessingUnit}
      </Typography>
      <Typography component="h6" sx={{ overflow: "hidden" }}>
        Graphics processing unit:{Graphicsprocessingunit}
      </Typography>
      <Typography component="h6" sx={{ overflow: "hidden" }}>
        Ram capacity:{Ramcapacity}
      </Typography>
      <Typography component="h6" sx={{ overflow: "hidden" }}>
        Memory capacity:{Memorycapacity}
      </Typography>
    </div>
  );
};
export default ProductInformation;
