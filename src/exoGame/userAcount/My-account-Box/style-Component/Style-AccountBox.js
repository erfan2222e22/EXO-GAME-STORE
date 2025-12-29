import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  gap: "10px",
});

const ParentDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1px",
  width: "70%",
  borderRadius: "5px",
  padding: "2px",
  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  marginLeft: "20px",
});
const HederParntDiv = styled(Box)({
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#d4f7df",
  alignItems: "center",
  width: "100%",
  height: "30%",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});
const HderContinerDiv = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10%",
  width: "35%",
  textAlign: "center",
});
const BoxTitle = styled(Box)({
  fontSize: "1.1rem",
  color: "#3c3c3c",
});

const ParentDivText = styled(Box)({
  marginLeft: "5px",
  overflow: "hidden",
});

const styleComponent = {
  ParentDiv,
  HederParntDiv,
  HderContinerDiv,
  BoxTitle,
  ParentDivText,
  Div,
};

export default styleComponent;
