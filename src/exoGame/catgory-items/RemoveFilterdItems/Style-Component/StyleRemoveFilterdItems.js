import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

const HeadrBox = styled(Box)({
  fontFamily: "vazir",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  gap: "50%",
  overflow: "hidden",
});

const HeadrText = styled(Typography)({
  fontFamily: "vazir",
  fontWeight: "bolder",
  width: "80px",
  overflow: "hidden",
});

const DelteBtn = styled(Button)({
  backgroundColor: "rgb(220,53,69)",
  borderRadius: "25%",
  fontFamily: "vazir",
  width: "50%",
  height: "25px",
  overflow: "hidden",
  color: "#ffff",
  fontSize: "12px",
});

const styleComponents = {
  HeadrBox,
  HeadrText,
  DelteBtn,
};

export default styleComponents;
