import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const BoxSugest = styled(Box)({
  width: "100%",
  margin: "0 auto",
  padding: "0 50px",
  position: "relative",
  marginTop: "2rem",
});

const BoxParent = styled(Box)({
  border: "1px solid #dedede",
  width: "95% !important",
  margin: "0 5px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  "&:hover": {
    border: "1px solid #03c03c",
  },
});
const HederTextBox = styled(Typography)({
  display: "flex",
  justifyContent: "flex-end",
});

const BoxImg = styled(Box)({
  width: "90%",
  height: "90%",
});

const BoxContiner = styled(Box)({
  width: "100%",
  height: "350px",
  marginTop: "5%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  cursor: "pointer",
  overflow: "hidden",
});

const styleComponent = {
  BoxParent,
  BoxSugest,
  BoxContiner,
  HederTextBox,
  BoxImg,
};

export default styleComponent;
