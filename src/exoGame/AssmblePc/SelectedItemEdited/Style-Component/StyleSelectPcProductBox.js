import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

const SelctedPcPatBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "600px",
  height: "80px",
  padding: "15px",
});
const IconsDelete = styled(Box)({
  color: "#7f7d7d",
  fontSize: "200%",
  cursor: "pointer",
});
const IconsEdit = styled(Box)({
  color: "#7f7d7d",
  fontSize: "200%",
  cursor: "pointer",
});
const IconsContiner = styled(Box)({
  display: "flex",
  gap: "10px",
});
const ImgBox = styled(Avatar)({
  width: "50px",
  height: "50px",
});

const styleComponents = {
  SelctedPcPatBox,
  IconsDelete,
  IconsEdit,
  IconsContiner,
  ImgBox,
};
export default styleComponents;
