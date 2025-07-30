import { Box, styled } from "@mui/system";

const BoxImg = styled(Box)({
  width: "95%",
  borderRadius: "20px",
  height: "300px",
  margin: "0 auto",
  marginTop: "130px",
  position: "relative",
  "& .slick-slider": {
    height: "100%",
  },
  "& .slick-list": {
    height: "100%",
  },
  "& .slick-track": {
    height: "100%",
  },
  "& .slick-slide": {
    height: "100%",
  },
  "& .slick-slide > div": {
    height: "100%",
  },
});
const styleComponent = {
  BoxImg,
};
export default styleComponent;
