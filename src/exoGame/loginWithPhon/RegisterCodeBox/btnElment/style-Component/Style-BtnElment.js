import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxConteriner = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 auto",
  height: "400px",
  textAlign: "center",
  marginTop: "120px",
});

const ContinuBtn = styled(Button)({
  boxShadow: " rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
  backgroundColor: "#f3f3f3ff",
  padding: "10px 40px",
  borderRadius: "50px",
  cursor: "pointer",
  border: "0;",
  letterSpacing: " 1.5px",
  textTransform: " uppercase",
  fontSize: " 15px",
  transition: " all 0.5s ease",
  color: "black ",
  "&:hover": {
    letterSpacing: "3px",
    color: "#ffff",
  },
  "&:active ": {
    letterSpacing: "3px",
    backgroundColor: "black",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "#000000ff 0px 0px 0px 0px",
    transform: "translateY(10px)",
    transition: "100ms",
  },
});

const styleComponent = {
  ContinuBtn,
  BoxConteriner,
};
export default styleComponent;
