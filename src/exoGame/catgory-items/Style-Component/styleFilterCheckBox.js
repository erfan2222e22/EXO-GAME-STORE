import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const ParntBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2%",
  overflow: "hidden",
});
const ContinerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 1,
});

const styleComponents = { ParntBox, ContinerBox };
export default styleComponents;
