import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const ParentBox = styled(Box)({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginTop: "200px",
});

const SelctedParentBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});
const SelectBoxContiner = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "#c0f5d0",
  width: "80%",
  height: "4.5rem",
  borderRadius: "1rem",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
});

const AddPcPartsButton = styled(Box)({
  padding: "5px",
  borderRadius: "30%",
  backgroundColor: "#03c03c",
  color: "#fff",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxShadow:
    " rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
});

const SelctedPcPatBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "600px",
  height: "80px",
  padding: "15px",
});

const styleComponents = {
  ParentBox,
  SelctedParentBox,
  SelectBoxContiner,
  AddPcPartsButton,
  SelctedPcPatBox,
};
export default styleComponents;
