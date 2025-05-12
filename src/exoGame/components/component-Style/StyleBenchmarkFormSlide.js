import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Parent_div = styled(Box)({
  width: "95%",
  display: "flex",
  margin: "0 auto",
  position: "relative",
  top: "30px",
});
const Div_img = styled(Box)({
  margin: "10px",
  width: "100%",
  overflow: "hidden",
});

export default { Parent_div, Div_img };
