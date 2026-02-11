import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const IconDiv = styled(Box)({
  width: "50%",
  height: "30%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  padding: "1px",
});

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

const DrawerDisplay = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: { display: "none" },
  [theme.breakpoints.down("xl")]: { display: "none" },
  [theme.breakpoints.down("lg")]: { display: "none" },
  [theme.breakpoints.down("md")]: { display: "none" },
  [theme.breakpoints.down("sm")]: { display: "block" },
}));

const Icons = styled(Avatar)({
  transition: "all 0.3s ease-in-out",
  fontSize: "25px",
  "&:hover": {
    color: "#03c13c",
  },
});

const styleComponents = {
  BoxIcons,
  Icons,
  DrawerDisplay,
  ContinerIconHeder,
  IconDiv,
};

export default styleComponents;
