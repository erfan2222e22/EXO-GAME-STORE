import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ScrollButtonBox = styled(Box)({
  position: "fixed",
  left: "94.1%",
  display: "flex",
  justifyContent: "flex-end",
  zIndex: "1000",
  color: "#ffff",
  backgroundColor: "#03c03c",
  borderRadius: "10px",
  height: "7%",
  opacity: "0.5",
  cursor: "pointer",
  "&:hover": {
    opacity: "1",
  },
});

const ScrollButton = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const styleComponent = { ScrollButtonBox, ScrollButton };

export default styleComponent;
