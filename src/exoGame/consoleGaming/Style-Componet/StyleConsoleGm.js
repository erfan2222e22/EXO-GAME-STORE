import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

const BoxConsoleGm = styled(Avatar)(({ theme }) => ({
  width: "100%",
  cursor: "pointer",
  position: "relative",
  left: "5px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "125px",
  },
}));

const ParentDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginTop: "5%",
  gap: "2px",
  padding: "1%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const styleComponents = {
  BoxConsoleGm,
  ParentDiv,
};

export default styleComponents;
