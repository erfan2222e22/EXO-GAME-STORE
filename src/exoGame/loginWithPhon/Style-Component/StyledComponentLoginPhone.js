import { styled } from "@mui/material/styles";
import { TextField, Box, Button } from "@mui/material";
const LoginBox = styled(Box)({
  width: "300px",
  height: "400px",
  margin: "0 auto",
  position: "relative",
  textAlign: "center",
  border: "1px solid #03c03c",
  borderRadius: "10px",
  marginTop: "140px",
  overflowY: "hidden",
});
const InputLoginPhone = styled(TextField)({
  width: "200px",
  height: "60px",
  direction: "rtl",
  overflowX: "hidden",
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
  backgroundColor: "#ffff",
  "&:hover": { backgroundColor: "#03c03c", color: "#ffff" },
  color: "#03c03c",
  border: "1px solid #03c03c",
  margin: "5px",
  borderRadius: "8px",
  fontFamily: "vazir",
});

const Img = styled(Box)({
  width: "70px",
  height: "70px",
  overflow: "hidden",
});

const styleComponent = {
  LoginBox,
  InputLoginPhone,
  HederBox,
  CustomButton,
  CustomButton2,
  Img,
};

export default styleComponent;
