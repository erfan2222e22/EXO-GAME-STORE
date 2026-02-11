import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ContinerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "150px",
});
const ContinerBoxMain = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
});

const styleComponent = {
  ContinerBox,
  ContinerBoxMain,
};
export default styleComponent;
