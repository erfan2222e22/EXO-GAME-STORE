import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { boxClasses, style } from "@mui/system";
import { Link } from "react-router-dom";

const Parent_Div = styled(Box)({
  width: "100%",
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
});
const Text_Head = styled(Typography)({
  fontFamily: "vazir",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  top: "30px",
  color: "#3c3c3c",
});
const Box_img = styled(Box)({
  width: "100px",
  height: "100px",
  cursor: "pointer",
  margin: "15px",
});

const Text_items = styled(Typography)({
  textAlign: "center",
  "&:hover": { color: "#03c03c" },
  colro: "#3c3c3c",
  fontSize: "15px",
});
const Link_style = styled(Link)({
  textDecoration: "none",
  color: "black",
});

export default { Parent_Div, Text_Head, Box_img, Text_items, Link_style };
