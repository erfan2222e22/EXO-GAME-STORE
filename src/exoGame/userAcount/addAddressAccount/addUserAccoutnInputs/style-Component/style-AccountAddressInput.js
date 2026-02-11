import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LocationOnOutlinedIcons = styled(LocationOnOutlinedIcon)({
  fontSize: "2rem",
  height: "100%",
  color: "#03c03c",
  marginLeft: "10px",
});

const KeyboardArrowRightIcons = styled(KeyboardArrowRightIcon)({
  fontSize: "2rem",
  height: "100%",
  color: "#7b7b7b",
  marginRight: "10px",
});

const ButtonContiner = styled(Box)({
  display: "flex",
  gap: "5px",
  width: "300px",
  margin: "0 auto",
  padding: "5px",
});

const Button = styled(Box)({
  width: "100px",
  height: "40px",
  backgroundColor: "#03c03c",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffff",
  fontSize: "1.1rem",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
});

const Div = styled(Box)({
  marginTop: "50px",
  width: "100%",
  padding: "5px",
});

const HederParntDiv = styled(Box)({
  borderRadius: "7px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#d4f7df",
  alignItems: "center",
  width: "100%",
  height: "10%",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});

const HderContinerDiv = styled(Box)({
  display: "flex",
  gap: "5%",
  width: "100%",
  textAlign: "center",
});

const BoxTitle = styled(Box)({
  fontSize: "1.1rem",
  color: "#3c3c3c",
});

const styleComponent = {
  Div,
  Box,
  ButtonContiner,
  Button,
  HederParntDiv,
  BoxTitle,
  HderContinerDiv,
  LocationOnOutlinedIcons,
  KeyboardArrowRightIcons,
};

export default styleComponent;
