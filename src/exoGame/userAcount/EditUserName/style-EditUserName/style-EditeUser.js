import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled(Box)({
  width: "100%",
  padding: "5px",
});

const HederParntDiv = styled(Box)({
  borderRadius: "7px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#d4f7df",
  alignItems: "center",
  width: "100%",
  height: "60px",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});
const HderContinerDiv = styled(Box)({
  display: "flex",
  gap: "5%",
  width: "100%",
  textAlign: "center",
});
const BoxTitle = styled(Box)({
  fontSize: "1.1rem",
  color: "#3c3c3c",
});

const BoxBtns = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  padding: "10px",
});

const DefaultBtnStyle = styled(Box)({
  color: "#ffff",
  transition: " all 0.5s ease",
  width: "100px",
  height: "35px",
  borderRadius: "6px",
  border: "none",
  "&:active ": {
    backgroundColor: "red",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "#000000ff 0px 0px 0px 0px",
    transform: "translateY(3px)",
    transition: "100ms",
  },
});

const BtnContinued = styled(DefaultBtnStyle)({ backgroundColor: "#03c03c" });
const BtnReturn = styled(DefaultBtnStyle)({ backgroundColor: "#6c757d" });

const Input = styled(TextField)({
  display: "block",
  height: "30px",
  margin: "10px",
  width: "80%",
  border: "1px solid #ced4da",
  borderRadius: "3px",
  padding: "5px",
  "&:focus ": {
    // border: "1px solid #ced4da",
    borderColor: "red",
  },
});

const ParagraphBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "100px",
});

const Paragraph = styled(Box)({
  fontSize: "0.9rem",
  margin: "10px",
  width: "300px",
});

const styleComponent = {
  HederParntDiv,
  HderContinerDiv,
  BoxTitle,
  BtnReturn,
  BtnContinued,
  BoxBtns,
  Input,
  ParagraphBox,
  Paragraph,
  Div,
};

export default styleComponent;
