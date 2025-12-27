import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContinuBtn = styled(Button)({
  borderRadius: "20px",
  width: "300px",
  boxShadow: " rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
  backgroundColor: "#f3f3f3ff",
  padding: "10px 40px",
  cursor: "pointer",
  border: "0;",
  letterSpacing: " 1.5px",
  textTransform: " uppercase",
  fontSize: " 15px",
  transition: " all 0.5s ease",
  color: "black ",
  "&:hover": {
    letterSpacing: "5px",
    color: "#131313ff",
    fontWeight: "10px",
  },
  "&:active ": {
    letterSpacing: "5px",
    backgroundColor: "black",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "#000000ff 0px 0px 0px 0px",
    transform: "translateY(5px)",
    transition: "100ms",
  },
});
const styleComponent = {
  ContinuBtn,
};

export default styleComponent;
