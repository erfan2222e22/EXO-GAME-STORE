import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

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

const styleComponent = { BtnSend };

export default styleComponent;
