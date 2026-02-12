import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

const ParentDiv = styled(Box)(({ theme }) => ({
  width: "95%",
  height: "100%",
  display: "flex",
  margin: "0 auto",
  marginTop: "20px",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "300px",
  },
}));

const DivImg = styled(Avatar)({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: "0.5rem",
});

const styleComponents = {
  ParentDiv,
  DivImg,
};

export default styleComponents;
