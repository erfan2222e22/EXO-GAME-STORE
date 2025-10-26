import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const MainBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "5px",
  width: "67%",
});
const ContinerBoxDiscrib = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "500px",
  gap: "10px",
  padding: "5px",
  height: "100%",
});

const Button = styled(Box)({
  color: "#fff",
  backgroundColor: "#03c03c",
  border: "none",
  padding: "6px 24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  width: "100%",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
});

const ImgBox = styled(Box)({
  width: "25%",
  height: "25%",
});

const ContinerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "110px",
  height: "120px",
  padding: "10px",
  textAlign: "center",
});

const styleComponents = {
  MainBox,
  ContinerBoxDiscrib,
  Button,
  ImgBox,
  ContinerBox,
};

export default styleComponents;
