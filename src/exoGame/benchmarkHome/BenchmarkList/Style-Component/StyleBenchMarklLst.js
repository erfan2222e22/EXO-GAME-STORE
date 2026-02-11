import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const ParentDiv = styled(Box)({
  height: "650px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const ParentListDiv = styled(Box)({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center ",
  flexDirection: "column",
  gap: "30px",
  padding: "15px",
});

const DivItems = styled(Box)({
  backgroundColor: "#e6e6e6",
  height: "140px",
  width: "50%",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
});

const ItemsText = styled(Box)({
  margin: "20px",
  overflow: "hidden",
  fontWeight: "bold",
  "&:hover": { color: "#03c03c" },
});

const HederText = styled(Box)({
  fontSize: "25px",
  fontWeight: "bold",
  overflow: "hidden",
});

const styleComponents = {
  ParentDiv,
  HederText,
  ParentListDiv,
  DivItems,
  ItemsText,
};

export default styleComponents;
