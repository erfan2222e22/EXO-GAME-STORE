import { AppBar, TextField, Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { margin, width } from "@mui/system";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  direction: "rtl",
  height: "125px",
  backgroundColor: "#ffff",
}));
const CoustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "200px",
  overflowY: "hidden",
});

const SerchField = styled(TextField)(({ theme }) => ({
  width: "75%",
  height: "35%",
  overflow: "hidden",
  direction: "rtl",
  backgroundColor: "#e6e6e6",
  borderRadius: "6px",
  fontFamily: "vazir",
  position: "relative",
  boxShadow:
    " rgba(0, 0, 0, 0.25) 0px 3px 15px, rgba(0, 0, 0, 0.22) 0px 3px 10px",
  [theme.breakpoints.down("sm")]: { width: "100%" },
}));

const BoxIcons = styled(Box)(({ theme }) => ({
  color: "#858585",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  height: "100px",
  width: "100px",
  [theme.breakpoints.down("sm")]: { position: "absolute", bottom: "35%" },
}));

const Spans = styled(Box)(({ theme }) => ({
  margin: "7px",
  cursor: "pointer",
  fontSize: "13px",
  color: "#606060",
  width: "50px",
  flex: "1",
}));

const Icons = styled(Box)({
  transition: "all 0.3s ease-in-out",
  fontSize: "25px",
  "&:hover": {
    color: "#03c13c",
  },
});

const TooltipBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textAlign: "left",
  justifyContent: "space-around",
  width: "100%",
  height: "125%",
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const LinkRoter = styled(Link)({
  textDecoration: "none",
  color: "#606060",
});
const LogoImg = styled(Box)(({ theme }) => ({
  width: "70px",
  height: "70px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: { width: "50px", height: "50px" },
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    height: "100%",
    padding: "2px",
  },
}));
const MediumeAndLargeBoxLogoAndInput = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  padding: "1%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const styleComponents = {
  LogoImg,
  StyledAppBar,
  CoustomToolbar,
  BoxIcons,
  SerchField,
  Spans,
  Icons,
  TooltipBox,
  LinkRoter,
  DrawerDisplay,
  SmallSizeBoxLogoAndInput,
  MediumeAndLargeBoxLogoAndInput,
};

export default styleComponents;
