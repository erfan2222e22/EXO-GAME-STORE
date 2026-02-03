import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const ParentBox = styled(Box)({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: "left",
  padding: "10px",
  height: "60%",
  margin: "10px",
  width: "100%",
  position: "relative",
  right: "10px",
  top: "30px",
});

const NameProduct = styled(Box)({
  color: "black",
  fontWeight: "700 !important",
  fontSize: "calc(1.525rem + 0.9vw) !important",
});

const RatingBox = styled(Box)({
  height: "20%",
  display: "flex",
  gap: "10px",
});

const ProductModelText = styled(Box)({
  color: "black",
  fontSize: "calc(0.5rem + 0.9vw) !important",
});

const InformationText = styled(Box)({
  color: "black",
  fontSize: "calc(0.5rem + 0.9vw) !important",
});

const styleComponents = {
  ParentBox,
  NameProduct,
  RatingBox,
  ProductModelText,
  InformationText,
};

export default styleComponents;
