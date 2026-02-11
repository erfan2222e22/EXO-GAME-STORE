import { Box, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const InputBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  overflowY: "hidden",
  padding: "3px",
});
const InputTitle2 = styled(Typography)({
  overflow: "hidden",
});

const Input = styled(TextField)({
  width: "300px",
  padding: "0.875rem",
  fontSize: "1rem",
  border: "1.5px solid #000",
  borderRadius: "0.5rem",
  boxShadow: "2.5px 3px 0 #000000ff",
  outline: "none",
  transition: "ease 0.25s",
});
const ErrorText = styled(Typography)({ color: "red" });

const styleComponent = {
  InputTitle2,
  Input,
  InputBox,
  ErrorText,
};

export default styleComponent;
