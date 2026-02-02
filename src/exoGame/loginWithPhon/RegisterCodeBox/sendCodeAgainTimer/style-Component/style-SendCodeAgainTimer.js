import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxContiner = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const Text = styled(Typography)({
  overflow: "hidden",
});

const Span = styled(Typography)({
  color: "#03c03c",
  cursor: "pointer",
  borderBottom: "1px solid #03c03c",
  overflow: "hidden",
});

const styleComponent = {
  BoxContiner,
  Text,
  Span,
};

export default styleComponent;
