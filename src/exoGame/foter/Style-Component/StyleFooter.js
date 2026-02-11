import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxFooter = styled(Box)({
  borderTop: "1px solid #ccc",
  marginTop: "80px",
  textAlign: "center",
  position: "relative",
});

const Img = styled(Avatar)({
  width: "60px",
  height: "60px",
});

const styleComponents = {
  BoxFooter,
  Img,
};
export default styleComponents;
