import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContinerBox = styled(Box)({
  marginTop: "1.9%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1%",
  gap: "3%",
});

const ProductionItems = styled(Avatar)({
  width: "30%",
  height: "20%",
  cursor: "pointer",
});

const styleComponent = {
  ProductionItems,
  ContinerBox,
};

export default styleComponent;
