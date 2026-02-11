import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const BoxContiner = styled(Box)({
  width: "40%",
  height: "55%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const SpanText = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#3c3",
  fontSize: "1.1rem",
  padding: "5px",
  position: "relative",
  textAlign: "center",
  left: "12px",
  bottom: "13px",
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  overflow: "hidden",
});

const styleComponents = { BoxContiner, SpanText };
export default styleComponents;
