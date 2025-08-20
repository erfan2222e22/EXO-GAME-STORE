import Tooltip from "@mui/material/Tooltip";
import { AppBar, TextField, Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#ffff",
  direction: "rtl",
});

const CoustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60px",
  overflowY: "hidden",
});

const SerchField = styled(TextField)({
  width: "50%",
  direction: "rtl",
  backgroundColor: "#e6e6e6",
  borderRadius: "6px",
  marginLeft: "250px",
  fontFamily: "vazir",
});

const BoxIcons = styled(Box)({
  color: "#858585",
  cursor: "pointer",
  display: "flex",
  gap: "20px",
  fontSize: "30",
});

const Spans = styled(Box)({
  margin: "16px",
  cursor: "pointer",
  fontSize: "13px",
  color: "#606060",
});

const LogoImg = styled(Box)({
  width: "70px",
  height: "70px",
  cursor: "pointer",
});

const Icons = styled(Box)({
  transition: "all 0.3s ease-in-out",
  fontSize: "25px",
  "&:hover": {
    color: "#03c13c",
  },
});

const TooltipBox = styled(Tooltip)({
  display: "flex",
  textAlign: "right",
  gap: "30px",
  position: "relative",
  width: "100%",
  height: "10%",
});

const LinkRoter = styled(Link)({
  textDecoration: "none",
  color: "#606060",
});

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
};

export default styleComponents;
