import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
const Input = styled(TextField)({
  display: "block",
  height: "30px",
  margin: "10px",
  width: "80%",
  border: "1px solid #ced4da",
  borderRadius: "3px",
  padding: "5px",
  "&:focus ": {
    borderColor: "red",
  },
});

const styleComponent = {
  Input,
};

export default styleComponent;
