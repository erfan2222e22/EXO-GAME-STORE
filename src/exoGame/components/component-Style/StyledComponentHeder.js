import { AppBar, TextField, Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#",
  direction: "ltr",
});

const CoustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60px",
  backgroundColor: "#ffff",
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

const styleComponents = {
  StyledAppBar,
  CoustomToolbar,
  BoxIcons,
  SerchField,
};

export default styleComponents;
