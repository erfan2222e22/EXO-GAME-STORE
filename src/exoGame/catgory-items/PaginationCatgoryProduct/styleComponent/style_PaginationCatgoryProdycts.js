import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ParentBox = styled(Box)({
  display: "flex",
  width: "50%",
  margin: "0 auto",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
  height: "60px",
});

const Button = styled(Box)({
  padding: "2px",
  width: "45px",
  height: "45px",
  border: "1px solid black",
  backgroundColor: "#ffff",
  borderRadius: "5px",
});

const styleComponents = { ParentBox, Button };

export default styleComponents;
