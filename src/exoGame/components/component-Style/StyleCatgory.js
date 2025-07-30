import { styled } from "@mui/material/styles";
import { Box, Typography, Select, Button } from "@mui/material";

const MainBox = styled(Box)({
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
});
const MainSelect = styled(Select)({
  width: "100%",
});
const InsideBox = styled(Box)({
  width: "100%",
});
const TextItems = styled(Typography)({
  fontFamily: "vazri",
  fontWeight: "bolder",
});

const InputLabelText = styled(Typography)({
  fontFamily: "vazri",
  fontWeight: "normal",
});

const HeadrText = styled(Typography)({
  fontFamily: "vazir",
  fontWeight: "bolder",
  width: "80px",
  overflow: "hidden",
});

const FilterBtn = styled(Button)({
  width: "70%",
  border: "1px solid black ",
  color: "black",
  fontFamily: "vazir",
  position: "relative",
  right: "35px",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#03c03c",
    color: "#ffff",
    borderColor: "#03c03c",
  },
});

const DelteBtn = styled(Button)({
  backgroundColor: "rgb(220,53,69)",
  borderRadius: "25%",
  fontFamily: "vazir",
  width: "50%",
  height: "25px",
  overflow: "hidden",
  color: "#ffff",
  fontSize: "12px",
});

const HeadrBox = styled(Box)({
  fontFamily: "vazir",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  gap: "50%",
  overflow: "hidden",
});

const SortFilterText = styled(Typography)({
  fontFamily: "vazir",
  cursor: "pointer",
  overflow: "hidden",
  color: "#6c757d",
  fontSize: "14px",
  "&:hover": {
    color: "#03c03c",
  },
});

const ProductParentBox = styled(Box)({
  width: "55%",
  marginLeft: "7%",
  marginTop: "130px",
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",
  backgroundColor: "white",
});
const BoxProduction = styled(Box)({
  border: "1px solid black",
  width: "250px",
  height: "300px",
  textAlign: "center",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "0 10px",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#03c03c",
  },
});
const ImgProduction = styled(Box)({
  margin: "0 auto",
  width: "200px",
  height: "250px",
});
const BoxHderFilterPrice = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  width: "60%",
  height: "50px",
  alignItems: "center",
  position: "relative",
  top: "120px",
  left: "5%",
});

const styleComponents = {
  MainBox,
  MainSelect,
  InsideBox,
  TextItems,
  InputLabelText,
  HeadrText,
  FilterBtn,
  DelteBtn,
  HeadrBox,
  SortFilterText,
  ProductParentBox,
  BoxProduction,
  ImgProduction,
  BoxHderFilterPrice,
};

export default styleComponents;
