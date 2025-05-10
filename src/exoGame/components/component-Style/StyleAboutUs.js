import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Box_AboutUs = styled(Box)({
  width: "90%",
  height: "500px",
  textAlign: "right",
  margin: "0 auto",
  marginTop: "150px",
  textAlign: "justify",
  direction: "rtl",
  marginRight: "30px",
  overflowY: "hidden",
});

const Box_Img = styled(Box)({
  width: "300px",
  height: "300px",
  margin: "0 auto",
});

export default {
  Box_AboutUs,
  Box_Img,
};
