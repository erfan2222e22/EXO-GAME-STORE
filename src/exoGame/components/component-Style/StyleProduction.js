import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const Parnt_Div = styled(Box)({
  display: "flex",
  backgroundColor: "red",
  justifyContent: "center",
  alignItems: "center",
});
const Production_items = styled(Box)({
  width: "30%",
  height: "20%",
  margin: "10px",
  position: "relative",
  left: "25px",
  backgroundColor: "red",
});

export default {
  Production_items,
  Parnt_Div,
};
