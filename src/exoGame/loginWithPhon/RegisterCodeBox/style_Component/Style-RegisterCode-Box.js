import { Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxConteriner = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 auto",
  height: "530px",
  textAlign: "center",
  marginTop: "120px",
});

const ParentBox = styled(Box)({
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  textAlign: "center",
  height: "500px",
  padding: "5px",
  width: "35%",
});

const HederImg = styled(Avatar)({
  width: "50%",
  height: "20%",
});

const BoxHederTexts = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

const PhoneNumberText = styled(Typography)({
  color: "#03c03c",
});

const FristText = styled(Typography)({
  overflow: "hidden",
  color: "#3c3c3c",
  fontWeight: "normal",
});

const SecendText = styled(Typography)({
  overflow: "hidden",
  fontWeight: "inherit",
  letterSpacing: "1px",
});

const styleComponent = {
  BoxConteriner,
  ParentBox,
  HederImg,
  BoxHederTexts,
  PhoneNumberText,
  FristText,
  SecendText,
};

export default styleComponent;
