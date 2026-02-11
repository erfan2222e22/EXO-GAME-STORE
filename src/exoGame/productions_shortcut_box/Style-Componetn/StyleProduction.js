import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContinerBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "1.9%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1%",
  gap: "3%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "300px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    gridColumnGap: "0.7%",
    gridRowGap: "0.7%",
    padding: "1px",
  },
}));

const ProductionItems = styled(Avatar)(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "1%",
  objectFit: "cover",
  display: "block",
  width: "100%",
  height: "100%",
}));

const ImgContiner = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: "1px",
  backgroundColor: "red",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    borderRadius: "1%",
    width: "100%",
    height: "125%",
  },
}));

const styleComponent = {
  ProductionItems,
  ContinerBox,
  ImgContiner,
};

export default styleComponent;
