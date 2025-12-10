import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";

const Inputs = styled(TextField)({
  width: "95%",
  borderRadius: "0.4rem",
  margin: "1px",
  padding: "1px",
  border: "2px solid #ccc;",
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

const styleComponent = {
  Inputs,
  ContinerInputs,
  HederBoxContiner,
};
export default styleComponent;
