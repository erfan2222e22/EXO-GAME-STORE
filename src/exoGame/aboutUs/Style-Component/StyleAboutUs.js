import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

const BoxAboutUs = styled(Box)({
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

const BoxImg = styled(Avatar)({
  width: "300px",
  height: "300px",
  margin: "0 auto",
});

const styleComponents = {
  BoxAboutUs,
  BoxImg,
};

export default styleComponents;
