import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled(Box)({
  display: "flex",
  height: "550px",
  marginTop: "100px",
  gap: "5px",
});

const ParentDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  borderRight: "1px solid #dee2e6",
  width: "30%",
  alignItems: "center",
  padding: "3px",
});

const HederImg = styled(Avatar)({
  width: "25%",
  height: "15%",
  border: "1px solid black",
  borderRadius: "50%",
  margin: "0 auto",
});

const ParentLink = styled(Box)({
  borderTop: "1px solid #dee2e6",
});

const ContinerLink = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "3px",
});

const Icon = styled(Avatar)({
  width: "7.7%",
  height: "7.7%",
  color: "#03c03cff",
  "&:hover": {
    color: "#03c03c",
  },
});

const LinkText = styled(Typography)({
  color: "#3c3c3c",
  cursor: "pointer",
  letterSpacing: "2px",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  fontSize: "0.8.5rem",
  "&:hover": {
    color: "#03c03c",
  },
});

const styleComponent = {
  Div,
  ParentDiv,
  HederImg,
  ParentLink,
  ContinerLink,
  Icon,
  LinkText,
};

export default styleComponent;
