import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";

const ParentDiv = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1%",
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    height: "400px",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    gridRowGap: "1px",
    gridColumnGap: "1px",
  },
}));

const DivImgAndText = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddin: "1%",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
  },
}));

const TextHead = styled(Typography)({
  fontFamily: "vazir",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  top: "30px",
  color: "#3c3c3c",
});

const BoxImg = styled(Avatar)(({ theme }) => ({
  width: "70%",
  height: "70%",
  objectFit: "cover",
  display: "block",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}));

const TextItems = styled(Typography)({
  textAlign: "center",
  colro: "#3c3c3c",
  fontSize: "15px",
  "&:hover": { color: "#03c03c" },
});

const styleComponent = {
  ParentDiv,
  TextHead,
  BoxImg,
  TextItems,
  DivImgAndText,
};

export default styleComponent;
