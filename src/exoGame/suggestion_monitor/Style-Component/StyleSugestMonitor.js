import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";

const DivParent = styled(Box)({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
});

const DivImg = styled(Avatar)({
  width: "55%",
  margin: "5px",
});

const Text = styled(Typography)({
  fontFamily: "vazir",
  overflow: "hidden",
  fontSize: "14px",
  cursor: "pointer",
  "&:hover": { color: "#03c03c" },
});

const HeadrText = styled(Typography)({
  textAlign: "center",
  fontFamily: "vazir",
  overflow: "hidden",
});

const styleComponent = {
  DivParent,
  DivImg,
  Text,
  HeadrText,
};

export default styleComponent;
