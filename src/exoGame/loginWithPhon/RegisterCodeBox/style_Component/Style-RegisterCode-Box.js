import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxConteriner = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 auto",
  height: "500px",
  textAlign: "center",
});

const ParentBox = styled(Box)({
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  textAlign: "center",
  height: "350px",
  padding: "10px",
  boxShadow:
    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
});

const InputParentBox = styled(TextField)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
});

const Input = styled(TextField)({
  width: "50px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  borderRadius: "5px",
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
    // boxShadow: `black 0px 7px 29px 0px`,
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
  Input,
  ContinuBtn,
  BoxConteriner,
  ParentBox,
  InputParentBox,
};
export default styleComponent;
