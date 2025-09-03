import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
const TextItems = styled(Typography)({
  fontFamily: "vazri",
  fontWeight: "bolder",
});
const InsideBox = styled(Box)({
  width: "100%",
  backgroundColor: "red",
});
const styleComponents = { TextItems, InsideBox };
export default styleComponents;
