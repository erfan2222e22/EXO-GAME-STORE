import { styled } from "@mui/material/styles";
import { TextField, Box, Button } from "@mui/material";
const Login_Box = styled(Box)({
  width: "300px",
  height: "400px",
  margin: "0 auto",
  position: "relative",
  textAlign: "center",
  border: "1px solid #03c03c",
  borderRadius: "10px",
  marginTop: "120px",
  overflowY: "hidden",
});
const Input_login_phone = styled(TextField)({
  width: "200px",
  height: "60px",
  direction: "rtl",
  overflowX: "hidden",
  marginTop: "10px",
});
const Heder_box = styled(Box)({
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

export default {
  Login_Box,
  Input_login_phone,
  Heder_box,
  CustomButton,
  CustomButton2,
};
