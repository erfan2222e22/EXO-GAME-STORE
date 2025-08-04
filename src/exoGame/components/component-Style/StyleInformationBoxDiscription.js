import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Paragraf = styled(Box)({
  margin: "15px",
});
const HederText = styled(Typography)({
  margin: "15px",
  overflow: "hidden",
  borderLeft: "2px solid #03c03c",
  padding: "5px",
  fontSize: "2rem",
});
const BoxParent = styled(Typography)({
  display: "flex",
  flexDirection: "column",
});

const styleComponent = {
  Paragraf,
  HederText,
  BoxParent,
};

export default styleComponent;
