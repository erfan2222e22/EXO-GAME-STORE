import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ParentBox = styled(Box)(({ theme }) => ({
  width: "25vw",
  margin: "15px",
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  position: "sticky",
  marginTop: "255px",
  height: "100%",
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  borderRadius: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    width: "95vw",
    margin: "0 auto",
    marginTop: "160px",
  },
}));

const BtnBox = styled(Button)(({ theme }) => ({
  padding: "4px",
  border: "none",
  backgroundColor: "#03c03c",
  borderRadius: "0.5rem",
  color: "#fff",
  boxShadow:
    " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
}));

const ContinerBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "2vw",
  backgroundColor: "#ebebeb",
  width: "80%",
  borderRadius: "0.7rem",
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "5vw",
  },
}));

const ShopCartContiner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "700 !important",
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    fontWeight: "500 !important",
    gap: "20px",
  },
}));

const ShopCartText = styled(Box)({
  fontSize: "1.3rem",
  fontWeight: "700 !important",
});

const ErrorBox = styled(Box)({
  color: "#000000ff",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "14px",
  padding: "5px",
  border: "1px dashed  #6a6666ff",
});

const styleComponent = {
  ParentBox,
  BtnBox,
  ShopCartText,
  ContinerBox,
  ShopCartContiner,
  ErrorBox,
};

export default styleComponent;
