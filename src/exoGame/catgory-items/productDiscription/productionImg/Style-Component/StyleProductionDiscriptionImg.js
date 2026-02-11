import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
const ParentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  justifyContent: "center",
  alignItems: "center",
});

const ParentBoxImg = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
});

const styleComponents = {
  ParentBox,
  ParentBoxImg,
};

export default styleComponents;
