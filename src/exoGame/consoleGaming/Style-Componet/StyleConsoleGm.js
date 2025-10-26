import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const BoxConsoleGm = styled(Box)({
  width: "95%",
  height: "80%",
  margin: "10px",
  cursor: "pointer",
  position: "relative",
  left: "5px",
});
const ParentDiv = styled(Box)({
  display: "flex",
  width: "100%",
  marginTop: "30px",
});
const styleComponents = {
  BoxConsoleGm,
  ParentDiv,
};
export default styleComponents;
