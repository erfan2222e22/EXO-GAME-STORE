import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ParentDiv = styled(Box)({
  width: "95%",
  display: "flex",
  margin: "0 auto",
  position: "relative",
  top: "30px",
});

const DivImg = styled(Box)({
  margin: "10px",
  width: "100%",
  overflow: "hidden",
});

const styleComponents = {
  ParentDiv,
  DivImg,
};

export default styleComponents;
