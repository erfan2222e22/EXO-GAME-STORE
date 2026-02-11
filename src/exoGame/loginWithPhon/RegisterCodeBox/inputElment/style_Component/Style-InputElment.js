import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxContiner = styled(Box)({
  width: "80%",
  height: "150px",
  display: "flex",
  padding: "1px",
  flexDirection: "column",
  alignItems: "flex-start",
});

const InputParentBox = styled(Box)({
  width: "100%",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  gap: "7px",
});

const Input = styled(TextField)({
  width: "70px",
  border: "1px solid black",
  borderRadius: "5px",
});

const styleComponent = {
  Input,
  InputParentBox,
  BoxContiner,
};
export default styleComponent;
