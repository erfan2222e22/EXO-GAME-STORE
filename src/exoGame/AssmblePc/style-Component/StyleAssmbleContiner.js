import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

const Div = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const ParentHederImg = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  top: "20vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("xl")]: {
    top: "17vh",
  },

  [theme.breakpoints.down("lg")]: {
    top: "21vh",
  },

  [theme.breakpoints.down("md")]: {
    top: "27vh",
  },

  [theme.breakpoints.down("sm")]: {
    top: "21vh",
  },
}));

const Img = styled(Avatar)({
  width: "95%",
  height: "100%",
  borderRadius: "1rem",
});

const ComponentDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexFlow: "column-reverse",
  },
}));

const styleComponents = {
  Img,
  ParentHederImg,
  ComponentDiv,
  Div,
};

export default styleComponents;
