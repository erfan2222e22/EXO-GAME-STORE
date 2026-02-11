import { styled } from "@mui/material/styles";
import { TextField, Box, Button, Avatar } from "@mui/material";
const LoginBox = styled(Box)({
  width: "300px",
  height: "100%",
  margin: "0 auto",
  position: "relative",
  textAlign: "center",
  border: "1px solid #03c03c",
  borderRadius: "10px",
  marginTop: "140px",
  overflowY: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});
const InputLoginPhone = styled(TextField)({
  width: "200px",
  height: "60px",
  direction: "rtl",
  overflow: "hidden",
  marginTop: "10px",
});
const HederBox = styled(Box)({
  textAlign: "center",
  overflow: "hidden",
  marginTop: "10px",
});

const CustomButton = styled(Button)({
  backgroundColor: "#03c03c",
  width: "200px",
  height: "40px",
  margin: "5px",
  borderRadius: "8px",
  fontFamily: "vazir",
});
const CustomButton2 = styled(Button)({
  width: "200px",
  height: "40px",
  opacity: "0.8",
  backgroundColor: "#ffff",
  "&:hover": { backgroundColor: "#03c03c", color: "#ffff" },
  color: "#03c03c",
  border: "1px solid #03c03c",
  margin: "5px",
  borderRadius: "8px",
  fontSize: "10px",
  overflow: "hidden",
  letterSpacing: " 0.7px",
  "&:active": {
    opacity: "2",
    boxShadow: " #c0392b 0px 3px 2px,#000 0px 3px 5px",
  },
});

const Img = styled(Avatar)({
  width: "70px",
  height: "70px",
  overflow: "hidden",
});

const BtnContiner = styled(Box)({
  width: "220px",
  height: "50px",
  margin: "0 auto",
  boxShadow: " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
  borderRadius: "5px",
});

const styleComponent = {
  LoginBox,
  InputLoginPhone,
  HederBox,
  CustomButton,
  CustomButton2,
  Img,
  BtnContiner,
};

export default styleComponent;
