import { TextField, Toolbar, Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ContinerHeder = styled(Box)(({ theme }) => ({
  height: "125px",
  width: "100%",
  position: "fixed",
  zIndex: "10000",
  display: "grid",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  backgroundColor: "#ffffffff",
  direction: "rtl",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",

  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
  },
}));

const ContinerIconHeder = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",

  [theme.breakpoints.down("sm")]: {
    gridArea: "1/1/2/5",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ContinerInputHeder = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    gridArea: "2 / 1 / 3 / 5",
  },
}));

const ContinerLinksHeder = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const IconDiv = styled(Box)({
  width: "50%",
  height: "30%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  padding: "1px",
});

const EditAccountBox = styled(Box)({
  padding: "2px",
  border: "1px solid #c3c3c3",
  borderRadius: "3px",
  backgroundColor: "#ffff",
  width: "13%",
  height: "26%",
  direction: "ltr",
  margin: "0 auto",
  position: "fixed",
  top: "10%",
  left: "15%",
});

const EditAccountLinks = styled(Typography)({
  // padding: "1px",
  "&:hover": {
    backgroundColor: "gray",
  },
});

const InputDiv = styled(Toolbar)({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  gap: "30px",
  padding: "0.5px",
});

const SerchField = styled(TextField)(({ theme }) => ({
  width: "100%",
  height: "35%",
  overflow: "hidden",
  direction: "ltr",
  backgroundColor: "#e6e6e6",
  borderRadius: "6px",
  fontFamily: "vazir",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  boxShadow:
    " rgba(0, 0, 0, 0.25) 0px 3px 15px, rgba(0, 0, 0, 0.22) 0px 3px 10px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
    fontSize: "10px",
    overflow: "hidden",
  },
}));

const BoxIcons = styled(Box)(({ theme }) => ({
  color: "#858585",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  height: "100%",
  width: "100%",
}));

const Spans = styled(Box)(({ theme }) => ({
  margin: "7px",
  cursor: "pointer",
  fontSize: "13px",
  color: "#606060",
  width: "100px",
  flex: "1",
  textAlign: "center",
}));

const Icons = styled(Avatar)({
  transition: "all 0.3s ease-in-out",
  fontSize: "25px",
  "&:hover": {
    color: "#03c13c",
  },
});

const TooltipBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textAlign: "left",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  opacity: "1",
  animation: "3s ease-in-out",
}));

const LogoImg = styled(Avatar)(({ theme }) => ({
  width: "80%",
  height: "80%",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "80%",
  },
}));

const DrawerDisplay = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: { display: "none" },
  [theme.breakpoints.down("xl")]: { display: "none" },
  [theme.breakpoints.down("lg")]: { display: "none" },
  [theme.breakpoints.down("md")]: { display: "none" },
  [theme.breakpoints.down("sm")]: { display: "block" },
}));

const SmallSizeBoxLogoAndInput = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },

  [theme.breakpoints.down("lg")]: { display: "none" },
  [theme.breakpoints.down("md")]: { display: "none" },
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "100%",
    padding: "1%",
    gap: "5px",
  },
}));

const MediumeAndLargeBoxLogoAndInput = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "1%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const styleComponents = {
  LogoImg,
  BoxIcons,
  SerchField,
  Spans,
  Icons,
  TooltipBox,
  DrawerDisplay,
  SmallSizeBoxLogoAndInput,
  MediumeAndLargeBoxLogoAndInput,
  ContinerHeder,
  ContinerIconHeder,
  ContinerInputHeder,
  ContinerLinksHeder,
  IconDiv,
  InputDiv,
  EditAccountBox,
  EditAccountLinks,
};

export default styleComponents;
