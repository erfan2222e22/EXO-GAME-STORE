import { Box, Typography, TextField, Button, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ParntBox = styled(Box)({
  width: "90%",
  height: "400xp",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  justifyContent: "center",
  padding: "5px",
  marginTop: "100px",
  borderRadius: "10px",
  boxShadow: " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
  gap: "20px",
});

const ContinerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  overflow: "hidden",
  alignItems: "center",
});

const InputTitle = styled(Typography)({
  overflow: "hidden",
});

const Input = styled(TextField)({
  width: "300px",
  padding: "0.875rem",
  fontSize: "1rem",
  border: "1.5px solid #000",
  borderRadius: "0.5rem",
  boxShadow: "2.5px 3px 0 #000000ff",
  outline: "none",
  transition: "ease 0.25s",
});

const InputBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  overflowY: "hidden",
  padding: "3px",
});

const ContinuBtn = styled(Button)({
  borderRadius: "20px",
  width: "300px",
  boxShadow: " rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
  backgroundColor: "#f3f3f3ff",
  padding: "10px 40px",
  cursor: "pointer",
  border: "0;",
  letterSpacing: " 1.5px",
  textTransform: " uppercase",
  fontSize: " 15px",
  transition: " all 0.5s ease",
  color: "black ",
  "&:hover": {
    letterSpacing: "5px",
    color: "#131313ff",
    fontWeight: "10px",
  },
  "&:active ": {
    letterSpacing: "5px",
    backgroundColor: "black",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "#000000ff 0px 0px 0px 0px",
    transform: "translateY(5px)",
    transition: "100ms",
  },
});

const InputParntBox = styled(Box)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const ErrorText = styled(Typography)({ color: "red" });
const Img = styled(Avatar)({
  width: "60%",
  height: "auto",
  borderRadius: "10px",
});

const styleComponent = {
  ContinerBox,
  ParntBox,
  InputTitle,
  Input,
  InputBox,
  ContinuBtn,
  ErrorText,
  Img,
  InputParntBox,
};

export default styleComponent;
