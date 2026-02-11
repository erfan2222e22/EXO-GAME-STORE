import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ParentBox = styled(Box)({
  marginTop: "200px",
  padding: "10px",
});

const ContinertBox = styled(Box)({
  display: "flex",
  backgroundColor: "#e5f9eb",
  justifyContent: "space-around",
  alignItems: "center",
  height: "150px",
  gap: "10px",
  borderRadius: "5px ",
  boxShadow:
    " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
});

const ContinerIcons = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "17px",
  color: "#818181",
});
const ContinerIconsShopping = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "17px",
  fontWeight: "bolder",
  color: "#606060",
});

const Line = styled(Box)({
  border: "1px solid #818181",
  width: "200px",
});

const styleComponents = {
  ParentBox,
  ContinerIcons,
  ContinerIconsShopping,
  ContinertBox,
  Line,
};

export default styleComponents;
