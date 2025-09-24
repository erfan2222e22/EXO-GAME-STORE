import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ContinerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "150px",
});
const ContinerBoxMain = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
});
const ContinerInputs = styled(Box)({
  gap: "10px",
  width: "400px",
  borderTop: "2px solid #b1abab",
  margin: "0 auto",
  padding: "10px",
});

const HederBoxContiner = styled(Box)({
  display: "flex",
  gap: "3px",
  width: "70%",
  margin: "5px",
});

const BtnSend = styled(Box)({
  width: "65%",
  border: "1px solid #03c03c",
  color: "#03c03c",
  display: "flex",
  justifyContent: "center",
  alignItems: "center ",
  cursor: "pointer",
  padding: "5px",
  textAlign: "center",
  borderRadius: "0.5rem",
  transitionDuration: "0.5s",
  "&:hover": {
    backgroundColor: "#03c03c",
    color: "#ffff",
  },
});

const Inputs = styled(Box)({
  width: "95%",
  borderRadius: "0.4rem",
  margin: "1px",
  padding: "1px",
  border: "2px solid #ccc;",
});

const styleComponent = {
  BtnSend,
  Inputs,
  ContinerInputs,
  HederBoxContiner,
  ContinerBox,
  ContinerBoxMain,
};
export default styleComponent;
