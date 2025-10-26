import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
const BoxHderFilterPrice = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  width: "60%",
  height: "50px",
  alignItems: "center",
  position: "relative",
  top: "120px",
  left: "5%",
  [theme.breakpoints.down("sm")]: { width: "90%", fontSize: "13px" },
}));

const SortFilterText = styled(Typography)({
  fontFamily: "vazir",
  cursor: "pointer",
  overflow: "hidden",
  color: "#6c757d",
  fontSize: "14px",
  "&:hover": {
    color: "#03c03c",
  },
});

const BtnDisplayCatgory = styled(Box)(({ theme }) => ({
  display: "none",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: { display: "block" },
}));

const styleComponents = {
  BoxHderFilterPrice,
  SortFilterText,
  BtnDisplayCatgory,
};

export default styleComponents;
