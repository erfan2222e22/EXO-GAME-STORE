import { styled } from "@mui/material/styles";
import { Box, Avatar, Button, TextField, Typography } from "@mui/material";

const ParentBox = styled(Box)({
  marginTop: "130px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  gap: "20px",
});

const LoginBox = styled(Box)({
  width: "350px",
  height: "100%",
  margin: "0 auto",
  textAlign: "center",
  border: "1px solid #03c03c",
  borderRadius: "10px",
  overflowY: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  padding: "10px",
});

const BtnContinue = styled(Button)({
  backgroundColor: "#009e25",
  color: "#ffff",
  padding: "1px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "107px",
  height: "50px",
  border: "none",
  borderRadius: "8px",
});

const HederImg = styled(Avatar)({
  width: "65%",
  height: "35%",
  marginTop: "20px",
});

const Input = styled(TextField)({
  lineHeight: "2rem",
  width: "250px",
  outline: "none",
  border: "1px solid #ced4da",
  borderRadius: "5px",
  padding: "5px",
  transitionDuration: "0.4s",
  "&:focus": {
    outline: "none",
    borderColor: "#93a4bc",
  },
});

const ParentInput = styled(Box)({
  padding: "3px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const ContinerInput = styled(Box)({
  display: "flex",
  overflow: "hidden",
  gap: "3px",
});

const RedStar = styled(Box)({
  color: "#ff0000ff",
  position: "relative",
  top: "2px",
});

const BoxErore = styled(Box)({
  overflow: "hidden",
  backgroundColor: "#f8d7da",
  display: "flex",
  alignItems: "center",
  height: "50px",
  borderRadius: "10px",
  width: "700px ",
  padding: "10px",
  border: "1px solid #f5c2c7",
  fontWeight: "normal",
});

const TextError = styled(Typography)({
  overflow: "hidden",
  color: "#842029",
  position: "relative",
  top: "3.5px",
  padding: "4px",
});

const styleComponent = {
  ParentBox,
  HederImg,
  LoginBox,
  BtnContinue,
  Input,
  ContinerInput,
  ParentInput,
  RedStar,
  BoxErore,
  TextError,
};

export default styleComponent;
