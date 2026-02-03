import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "3%",
  width: "80%",
});

const ParentDivTexts = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const ContinuedBtn = styled(Box)({
  transition: " all 0.5s ease",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  border: "none",
  color: "#ffff",
  backgroundColor: "#03c03c",
  padding: "10px",
  borderRadius: "10px",
  width: "150px",
  fontSize: "1.1rem",
  letterSpacing: "3px",
  "&:active ": {
    backgroundColor: "#fa0000ff",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "#000000ff 0px 0px 0px 0px",
    transform: "translateY(3px)",
    transition: "100ms",
  },
});
const Text = styled(Box)({
  padding: "5px",
  color: "#3c3c3c",
});

const styleComponent = {
  ContinuedBtn,
  Div,
  ParentDivTexts,
  Text,
};

export default styleComponent;
