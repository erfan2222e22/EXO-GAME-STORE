import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const ParentContiner = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  color: "black",
});

const styleComponents = {
  ParentContiner,
};

export default styleComponents;
