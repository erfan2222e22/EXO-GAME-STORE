import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ContinerInputs = styled(Box)({
  gap: "10px",
  width: "400px",
  borderTop: "1px solid #b1abab",
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
  ContinerInputs,
  HederBoxContiner,
};
export default styleComponent;
