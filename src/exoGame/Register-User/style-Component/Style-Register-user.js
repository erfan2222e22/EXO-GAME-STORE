import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ParntBox = styled(Box)({
  width: "90%",
  height: "400xp",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  justifyContent: "center",
  padding: "5px",
  marginTop: "100px",
  borderRadius: "10px",
  boxShadow: " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
  gap: "20px",
});

const ContinerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  overflow: "hidden",
  alignItems: "center",
});

const InputParntBox = styled(Box)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const Img = styled(Avatar)({
  width: "60%",
  height: "auto",
  borderRadius: "10px",
});

const styleComponent = {
  ContinerBox,
  ParntBox,
  InputParntBox,
  Img,
};

export default styleComponent;
