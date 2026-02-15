import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

const ParentDiv = styled(Box)({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Text = styled(Box)({
  lineHeight: "1.6",
  alignItems: "center",
  overflow: "hidden",
});

const BoxImg = styled(Avatar)({
  width: "66.666667%",
  height: "50%",
});

const styleComponents = {
  ParentDiv,
  Text,
  BoxImg,
};

export default styleComponents;
