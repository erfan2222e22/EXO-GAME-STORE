import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const DiscriptionItems = styled(Box)({
  display: "flex",
  gap: "50",
});

const CounterProductsBox = styled(Box)({
  display: "flex",
  gap: "5px",
  marginTop: "20px",
  justifyContent: "space-between",
  borderBottom: "1px solid black  ",
  width: "100%",
  padding: "5px",
  "&:": {
    backgroundColor: "#03c03c",
  },
});

const ButtonAddBasket = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  width: "140px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  textAlign: "center",
  padding: "15px 25px",
  border: "unset",
  borderRadius: 15,
  color: "#212121",
  zIndex: 1,
  background: "#e8e8e8",
  position: "relative",
  fontWeight: 500,
  fontSize: 14,
  transition: "all 250ms",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 0,
    borderRadius: 15,
    backgroundColor: "#03c03c",
    zIndex: -1,
    transition: "all 250ms",
  },
  "&:hover": {
    color: "#e8e8e8",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

const ButtonClearBasket = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  width: "140px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  textAlign: "center",
  padding: "15px 25px",
  border: "unset",
  borderRadius: 15,
  color: "#212121",
  zIndex: 1,
  background: "#e8e8e8",
  position: "relative",
  fontWeight: 500,
  fontSize: 14,
  transition: "all 250ms",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: 0,
    borderRadius: 15,
    backgroundColor: "red",
    zIndex: -1,
    transition: "all 250ms",
  },
  "&:hover": {
    color: "#e8e8e8",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

const DelteIcons = styled(Box)({
  cursor: "pointer",
  color: "red",
  borderRadius: "5px",
  "&: hover": {
    color: "#fff",
    backgroundColor: "red",
  },
});

const styleComponents = {
  ButtonClearBasket,
  ButtonAddBasket,
  DiscriptionItems,
  CounterProductsBox,
  DelteIcons,
};

export default styleComponents;
