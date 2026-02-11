import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ParentBox = styled(Box)({
  width: "320px",
  zIndex: "1000",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  left: "50px",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  gap: "20px",
  borderRadius: "20px",
  textAlign: "center",
  top: "20%",
  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
  backgroundColor: "#ffff",
});

const HederText = styled(Box)({
  width: "100%",
  height: "50px",
  borderBottom: "2px solid #9ea7af",
});

const Img = styled(Avatar)({
  width: "50%",
  height: "50%",
});

const styleComponent = { ParentBox, HederText, Img };

export default styleComponent;
