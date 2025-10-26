import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const ParentBox = styled(Box)({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: "left",
  padding: "10px",
  height: "60%",
  margin: "10px",
  width: "100%",
  position: "relative",
  right: "10px",
  top: "30px",
});

const styleComponents = {
  ParentBox,
};

export default styleComponents;
