import { Box, styled } from "@mui/system";
import { Avatar } from "@mui/material";

const ParentBox = styled(Box)({
  width: "95%",
  borderRadius: "20px",
  height: "100%",
  margin: "0 auto",
  marginTop: "140px",
  position: "relative",
  overflow: "hidden",

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

const ImgBox = styled(Avatar)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",
});

const styleComponent = {
  ParentBox,
  ImgBox,
};
export default styleComponent;
