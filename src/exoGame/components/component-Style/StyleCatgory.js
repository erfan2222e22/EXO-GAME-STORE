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
  [theme.breakpoints.down("")]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
    right: "0.5%",
    marginLeft: "100%",
  },
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const styleComponents = {
  MainBox,
};

export default styleComponents;
