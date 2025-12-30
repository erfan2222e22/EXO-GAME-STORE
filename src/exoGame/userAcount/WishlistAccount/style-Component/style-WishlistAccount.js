import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const Div = styled(Box)({
  width: "80%",
  padding: "5px",
});

const HederParntDiv = styled(Box)({
  borderRadius: "1.5%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#d4f7df",
  alignItems: "center",
  width: "100%",
  height: "10%",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});
const HderContinerDiv = styled(Box)({
  display: "flex",
  gap: "5%",
  width: "100%",
  textAlign: "center",
});
const BoxTitle = styled(Box)({
  fontSize: "1.1rem",
  color: "#3c3c3c",
});
const styleComponent = {
  HederParntDiv,
  HderContinerDiv,
  BoxTitle,
  Div,
};

export default styleComponent;
