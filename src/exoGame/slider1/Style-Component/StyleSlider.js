import { Box, styled } from "@mui/system";
import { Avatar } from "@mui/material";
const ParentBox = styled(Box)({
  width: "95%",
  borderRadius: "20px",
  height: "300px",
  margin: "0 auto",
  marginTop: "140px",
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
  ParentBox,
};
export default styleComponent;
