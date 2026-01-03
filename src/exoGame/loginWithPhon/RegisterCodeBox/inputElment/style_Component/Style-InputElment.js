import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const InputParentBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
});

const Input = styled(TextField)({
  width: "50px",
  border: "1px solid black",
  borderRadius: "5px",
});

const styleComponent = {
  Input,
  InputParentBox,
};
export default styleComponent;
