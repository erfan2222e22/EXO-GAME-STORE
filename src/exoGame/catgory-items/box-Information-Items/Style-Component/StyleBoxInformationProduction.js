import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const PrentBox = styled(Box)({
  display: "flex",
  gap: "4%",
  borderBottom: "2px solid #dddddd",
  marginTop: "40px",
  padding: "1%",
});
const HederText = styled(Typography)({
  fontWeight: "700",
  fontSize: "1rem",
  color: "#3c3c3c",
  borderLeft: "3px solid #03c03c",
  padding: "10px",
  cursor: "pointer",
  ":hover": {
    color: "#03c03c",
  },
});

const styleComponent = {
  PrentBox,
  HederText,
};
export default styleComponent;
