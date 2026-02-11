import { Box, Toolbar, Avatar, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContinerInputHeder = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    gridArea: "2 / 1 / 3 / 5",
  },
}));

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

const LogoImg = styled(Avatar)(({ theme }) => ({
  width: "80%",
  height: "80%",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "80%",
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

const SerchField = styled(TextField)(({ theme }) => ({
  width: "100%",
  height: "45%",
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

const styleComponents = {
  LogoImg,
  SmallSizeBoxLogoAndInput,
  MediumeAndLargeBoxLogoAndInput,
  ContinerInputHeder,
  InputDiv,
  SerchField,
};

export default styleComponents;
