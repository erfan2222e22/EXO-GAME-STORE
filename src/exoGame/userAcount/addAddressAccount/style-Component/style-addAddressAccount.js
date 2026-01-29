import { Box, Typography } from "@mui/material";
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

const DefaultBtnStyle = styled(Box)({
  color: "#ffff",
  transition: " all 0.5s ease",
  width: "100px",
  height: "35px",
  borderRadius: "6px",
  border: "none",
  "&:active ": {
    backgroundColor: "red",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "#000000ff 0px 0px 0px 0px",
    transform: "translateY(3px)",
    transition: "100ms",
  },
});

const BtnNewAddres = styled(DefaultBtnStyle)({ backgroundColor: "#03c03c" });
const BtnReturn = styled(DefaultBtnStyle)({ backgroundColor: "#6c757d" });

const BoxBtns = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  padding: "10px",
});

const ContinerAddress = styled(Box)({
  width: "100%",
  marginTop: "10px",
  display: "flex",
  boxShadow:
    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.075)",
  },
});

const ContinerAddressP = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "70%",
  padding: "5px",
  borderRight: "1px solid #dee2e6",
  justifyContent: "space-around",
});

const P = styled(Typography)({
  color: "#ff0000",
  cursor: "pointer",
  textDecoration: "underline solid",
});

const EditAddressBox = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  gap: "15px",
});

const styleComponent = {
  LocationOnOutlinedIcons,
  KeyboardArrowRightIcons,
  HederParntDiv,
  HderContinerDiv,
  BoxTitle,
  BtnReturn,
  BtnNewAddres,
  BoxBtns,
  ContinerAddress,
  ContinerAddressP,
  P,
  EditAddressBox,
};

export default styleComponent;
