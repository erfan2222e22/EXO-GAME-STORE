import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const BoxSugest = styled(Box)({
  width: "90%",
  margin: "0 auto",
  padding: "0 50px",
  position: "relative",
  marginTop: "30px",
});

const BoxSugestItemstyled = styled(Box)({
  width: "95% !important",
  height: "250px",
  margin: "0 5px",
  textAlign: "center",
  backgroundColor: "#8c8c8c",
  backdropFilter: "blur( 20px )",
  WebkitBackdropFilter: "blur( 20px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  "&:hover": {
    border: "3px solid #03c03c",
  },
});
const styleComponent = {
  BoxSugestItemstyled,
  BoxSugest,
};

export default styleComponent;
