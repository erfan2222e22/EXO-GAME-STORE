import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const MainBox = styled(Box)({
  marginTop: "40px",
  display: "flex",
  gap: "10px",
  padding: "10px",
});

const ContainerBox = styled(Box)({
  width: "100%",
  height: "100px",
  overflow: "hidden",
  borderBottom: "1px solid #eeeeee",
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

const DelteIcon = styled(Box)({
  color: "#dc3545",
  cursor: "pointer",
  position: "relative",
  top: "9px",
  "&:hover": {
    color: "#ffff",
    backgroundColor: "red",
    borderRadius: "5px  ",
  },
});

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

const ParentSelectProduct = styled(Box)({
  width: "80%",
  minHeight: "100%",
  border: "1px solid #dee2e6",
  borderRadius: "10px",
  boxShadow: " rgba(0, 0, 0, 0.15) -4.4px 3.4px 7.2px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
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

const Input = styled(Box)({
  textAlign: "center",
  width: "100px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#e7e7e7ff",
});
const PriceBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const InputBox = styled(Box)({
  display: "flex",
  gap: "4px",
});
const EmptyContainerBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "20px",
});

const EmptyContainerText = styled(Box)({
  overflow: "hidden",
  color: "#3c3838ff",
});

const EmptyContainerImg = styled(Box)({
  width: "200px",
  height: "200px",
  textAlign: "center",
  boxShadow: " rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
});

const MainContainerEmpty = styled(Box)({
  padding: "20px",
  width: "350px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow:
    " rgba(130, 128, 128, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  flexDirection: "column",
  gap: "20px",
});

const styleComponents = {
  MainBox,
  ContainerBox,
  ParentSelectProduct,
  ContinerShopCard,
  SettlementOfAccount,
  ContinueShoppingBtn,
  DelteIcon,
  Input,
  PriceBox,
  InputBox,
  EmptyContainerBox,
  EmptyContainerText,
  EmptyContainerImg,
  MainContainerEmpty,
};

export default styleComponents;
