import React from "react";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
function ProductionHeder({ company, nameProduct }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "15px",
        flexDirection: "column",
        justifyContent: "left",
        padding: "10px",
        height: "60%",
        margin: "10px",
        width: "100%",
        position: "relative",
        right: "10px",
        top: "30px",
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: "black",
          fontWeight: "700 !important",
          fontSize: "calc(1.525rem + 0.9vw) !important",
        }}
      >
        {nameProduct}
      </Typography>
      <Typography
        component="h6"
        sx={{
          color: "black",
          fontSize: "calc(0.5rem + 0.9vw) !important",
        }}
      >
        Manufacturers:{company} /console:{nameProduct}
      </Typography>
      <Typography
        component="h6"
        sx={{
          color: "black",
          fontSize: "calc(0.5rem + 0.9vw) !important",
        }}
      >
        Product model:{nameProduct}
      </Typography>
      <div
        style={{
          height: "20%",
          display: "flex",
          gap: "10px",
        }}
      >
        <Rating defaultValue={5}></Rating>
        <span>coment0</span>
      </div>
    </Box>
  );
}
export default ProductionHeder;
