import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ParentBox = styled(Box)({
  width: "25%",
  margin: "15px",
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  position: "sticky",
  marginTop: "255px",
  height: "100%",
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  borderRadius: "5px",
});

const BtnBox = styled(Button)({
  padding: "4px",
  border: "none",
  backgroundColor: "#03c03c",
  borderRadius: "10px",
  color: "#fff",
  boxShadow:
    " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
});

const ContinerBox = styled(Box)({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  backgroundColor: "#f2f2f2",
  width: "70%",
  borderRadius: "10px",
  padding: "5px",
});

const ShopCartContiner = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  justifyContent: "center",
  alignItems: "center",
});

const HederText = styled(Box)({
  fontSize: "1.5rem",
  fontWeight: "700 !important",
});

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
  border: "1px dashed  #6a6666ff ",
});

const styleComponent = {
  ParentBox,
  BtnBox,
  HederText,
  ShopCartText,
  ContinerBox,
  ShopCartContiner,
  ErrorBox,
};

export default styleComponent;
