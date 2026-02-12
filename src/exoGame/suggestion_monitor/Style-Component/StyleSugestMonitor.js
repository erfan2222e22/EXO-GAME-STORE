import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";

const DivParent = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    gridTemplateColumns: "repeat(4 ,1fr)",
    gridTemplateRows: "repeat(4 ,1fr)",
    height: "100%",
  },
}));

const ParentDivImg = styled(Box)({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

const DivImg = styled(Avatar)({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  margin: "5px",
});

const ContinerImgAndText = styled(Box)({
  padding: "1px",
  width: "50%",
  height: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  textAlign: "center",
});

const Text = styled(Typography)({
  fontFamily: "vazir",
  overflow: "hidden",
  fontSize: "14px",
  cursor: "pointer",
  colro: "#3c3c3c",
  "&:hover": { color: "#03c03c" },
});

const HeadrText = styled(Typography)({
  textAlign: "center",
  fontFamily: "vazir",
  overflow: "hidden",
  colro: "#3c3c3c",
});

const styleComponent = {
  ContinerImgAndText,
  DivParent,
  DivImg,
  Text,
  HeadrText,
  ParentDivImg,
};

export default styleComponent;
