import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ParentDiv = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  marginTop: "100px",
  gap: "10px",
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "100%",
  },
}));

const ImgBox = styled(Avatar)(({ theme }) => ({
  borderRadius: "1rem",
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    // height: "100%",
  },
}));

const styleComponent = {
  ParentDiv,
  ImgBox,
};

export default styleComponent;
