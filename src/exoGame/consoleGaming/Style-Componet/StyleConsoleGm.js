import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";
const BoxConsoleGm = styled(Avatar)({
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
