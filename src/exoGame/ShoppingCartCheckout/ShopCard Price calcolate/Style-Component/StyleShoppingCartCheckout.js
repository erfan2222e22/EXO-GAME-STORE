import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ContinerShopCard = styled(Box)({
  width: "30%",
  height: "180px",
  border: "1px solid #dee2e6",
  borderRadius: "10px",
  boxShadow: " rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const SettlementOfAccount = styled(Box)({
  cursor: "pointer",
  width: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "5px",
  border: "unset",
  borderRadius: "12px",
  color: "#212121",
  zIndex: 1,
  background: "#f0f0f0",
  position: "relative",
  fontWeight: "bolde",
  fontSize: "14px",
  transition: "all 250ms",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 0,
    borderRadius: "12px",
    backgroundColor: "#03c03c",
    zIndex: -1,
    transition: "all 500ms",
  },
  "&:hover": {
    color: "#e8e8e8",
  },
  "&:hover::before": {
    width: "100%",
  },
});

const ContinueShoppingBtn = styled(Box)({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "14px",
  textAlign: "center",
  padding: "3px",
  width: "120px",
  border: "none",
  backgroundColor: "#03c03c",
  borderRadius: "10px",
  color: "#e8e8e8",
  "&:hover::before": {
    width: "100%",
  },
});
const styleComponents = {
  ContinerShopCard,
  SettlementOfAccount,
  ContinueShoppingBtn,
};

export default styleComponents;
