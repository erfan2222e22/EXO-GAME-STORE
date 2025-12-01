import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";

const ParentDiv = styled(Box)({
  width: "100%",
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
});
const TextHead = styled(Typography)({
  fontFamily: "vazir",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  top: "30px",
  color: "#3c3c3c",
});
const BoxImg = styled(Avatar)({
  width: "100px",
  height: "100px",
  cursor: "pointer",
  margin: "15px",
});

const TextItems = styled(Typography)({
  textAlign: "center",
  "&:hover": { color: "#03c03c" },
  colro: "#3c3c3c",
  fontSize: "15px",
});

const styleComponent = {
  ParentDiv,
  TextHead,
  BoxImg,
  TextItems,
};

export default styleComponent;
