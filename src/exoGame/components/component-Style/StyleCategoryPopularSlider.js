import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ParentDiv = styled(Box)({
  position: "relative",
  width: "100%",
  top: "40px",
});

const BoxImg = styled(Box)({
  width: "70%",
  cursor: "pointer",
  margin: "20px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TextHeadr = styled(Typography)({
  textAlign: "right",
  position: "relative",
  right: "10px",
  fontFamily: "vazir",
  overflow: "hidden",
});

const TextImg = styled(Typography)({
  marginTop: "5px",
  textAlign: "center",
  overflow: "hidden",
  fontSize: "13px",
});

const Link_path = styled(Link)({
  textDecoration: "none",
  color: "black",
  fontFamily: "vazir",
  ":hover": {
    color: "#03c03c",
  },
});

export default { ParentDiv, BoxImg, TextHeadr, TextImg, Link_path };
