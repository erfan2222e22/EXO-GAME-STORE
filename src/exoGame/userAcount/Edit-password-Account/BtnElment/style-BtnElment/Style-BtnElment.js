import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const DefaultBtnStyle = styled(Box)({
  color: "#ffff",
  transition: " all 0.5s ease",
  width: "100px",
  height: "35px",
  borderRadius: "6px",
  border: "none",
  "&:active ": {
    backgroundColor: "red",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "#000000ff 0px 0px 0px 0px",
    transform: "translateY(3px)",
    transition: "100ms",
  },
});
const BtnContinued = styled(DefaultBtnStyle)({ backgroundColor: "#03c03c" });
const styleComponent = { BtnContinued };

export default styleComponent;
