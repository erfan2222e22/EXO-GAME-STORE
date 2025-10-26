import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const BoxParent = styled(Box)({
  border: "1px solid #a4a3a3",
  borderRadius: "10px",
  backdropFilter: " blur(8px)",
  width: "90%",
  height: "500px",
  zIndex: "20",
  position: "absolute",
  top: "250px",
  left: "4%",
});

const BoxContainer = styled(Box)({
  borderBottom: "1px solid #a4a3a3",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px",
});
const IconBox = styled(Box)({
  width: "35px",
  height: "35px",
});

const TitleBox = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

const ContinuBtnTrue = styled(Box)({
  padding: "5px",
  borderRadius: "5px",
  width: "100%",
  border: "1px solid #03c03c",
  color: "#03c03c",
  backgroundColor: "#ffff",
});
const ContinuBtnFalse = styled(Box)({
  textAlign: "center",
  padding: "5px",
  borderRadius: "5px",
  width: "7rem",
  border: "none",
  backgroundColor: "gray",
  color: "#ffff",
});
const styleComponents = {
  BoxParent,
  BoxContainer,
  IconBox,
  TitleBox,
  ContinuBtnTrue,
  ContinuBtnFalse,
};

export default styleComponents;
