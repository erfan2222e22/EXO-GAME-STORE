import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxFooter = styled(Box)({
  borderTop: "1px solid #ccc",
  marginTop: "80px",
  textAlign: "center",
});

const Img = styled(Avatar)({
  width: "10%",
  height: "10%",
});

const styleComponents = {
  BoxFooter,
  Img,
};
export default styleComponents;
