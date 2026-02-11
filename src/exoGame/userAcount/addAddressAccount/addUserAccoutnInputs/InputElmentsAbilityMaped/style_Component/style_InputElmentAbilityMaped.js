import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ParentDiv = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "5px",
  gap: "40px",
});

const Input = styled(TextField)({
  width: "75%",
  height: "65%",
  padding: "2px",
  border: "1px solid #ced4da",
  outline: "none",
  transitionDuration: "0.4s",
  borderRadius: "4px",
  fontsize: "0.9rem",
  "&:focus": {
    outline: "none",
    borderColor: "#93a4bc",
  },
});

const ErrorText = styled(Typography)({
  color: "#ff0000",
  fontSize: "0.8rem",
  width: "30%",
});

const styleComponent = {
  Box,
  ParentDiv,
  Input,
  ErrorText,
};

export default styleComponent;
