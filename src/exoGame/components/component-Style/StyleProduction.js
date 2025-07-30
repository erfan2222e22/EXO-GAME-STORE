import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const ParntDiv = styled(Box)({
  display: "flex",
  backgroundColor: "red",
  justifyContent: "center",
  alignItems: "center",
});
const ProductionItems = styled(Box)({
  width: "30%",
  height: "20%",
  margin: "10px",
  position: "relative",
  left: "25px",
  backgroundColor: "red",
});

const styleComponent = {
  ParntDiv,
  ProductionItems,
};

export default styleComponent;
