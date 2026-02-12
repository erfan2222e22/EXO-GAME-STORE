import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContinerBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "1.9%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2%",
  gap: "3%",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    gridColumnGap: "1%",
    gridRowGap: "1%",
    padding: "1px",
  },
}));

const ProductionItems = styled(Avatar)(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "1rem",
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
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    borderRadius: "1rem",
  },
}));

const styleComponent = {
  ProductionItems,
  ContinerBox,
  ImgContiner,
};

export default styleComponent;
