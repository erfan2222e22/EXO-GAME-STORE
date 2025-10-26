import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const ParentDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5%",
  width: "95%",
  height: "1200px",
  margin: "0 auto",
  marginTop: "150px",
  textAlign: "center",
  padding: "10px",
});

const styleComponents = {
  ParentDiv,
};

export default styleComponents;
