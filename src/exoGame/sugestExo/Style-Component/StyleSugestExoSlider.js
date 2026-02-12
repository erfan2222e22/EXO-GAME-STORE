import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";

const BoxSugest = styled(Box)({
  width: "100%",
  display: "flex",
  margin: "0 auto",
  padding: "0 50px",
  marginTop: "2rem",
  flexDirection: "column",
  gap: "1rem",
});

const BoxParent = styled(Box)(({ theme }) => ({
  transitionDuration: "0.3s",
  border: "1px solid #dedede",
  width: "90% !important",
  margin: "0 5px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  "&:hover": {
    border: "1px solid #03c03c",
  },
  [theme.breakpoints.down("sm")]: {
    overflow: "hidden",
  },
}));

const HederTextBox = styled(Typography)({
  display: "flex",
  justifyContent: "flex-end",
});

const BoxImg = styled(Avatar)({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
});

const ContinerBoxImg = styled(Box)({
  width: "100%",
  height: "100%",
});

const BoxText = styled(Typography)(({ theme }) => ({
  height: "5rem",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "30%",
    fontSize: "0.6rem",
    overflow: "hidden",
  },
}));

const BoxPriceText = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
  },
}));

const BoxContiner = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1px",
  padding: "2%",
  cursor: "pointer",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "190px",
  },
}));

const styleComponent = {
  BoxParent,
  BoxSugest,
  BoxContiner,
  HederTextBox,
  BoxImg,
  BoxText,
  BoxPriceText,
  ContinerBoxImg,
};

export default styleComponent;
