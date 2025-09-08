import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const MainBox = styled(Box)(({ theme }) => ({
  direction: "rtl",
  border: "1px solid black ",
  margin: "0 auto",
  marginLeft: "67%",
  position: "absolute",
  top: "25%",
  right: "40px",
  width: "30%",
  padding: "20px",
  borderRadius: "6%",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
    right: "0.5%",
    marginLeft: "100%",
  },
  [theme.breakpoints.down("md")]: { width: "30%", top: "30%" },
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const SmallSizeMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: { display: "none" },
  [theme.breakpoints.down("xs")]: { display: "none" },
  [theme.breakpoints.down("lg")]: { display: "none" },
  [theme.breakpoints.down("md")]: { display: "none" },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "#d3d3d3ff",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: "15px",
    top: "170px",
    right: "150px",
    boxShadow:
      " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  },
}));

const styleComponents = {
  MainBox,
  SmallSizeMainBox,
};

export default styleComponents;
