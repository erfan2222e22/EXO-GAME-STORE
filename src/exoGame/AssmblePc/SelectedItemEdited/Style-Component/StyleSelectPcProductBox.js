import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const SelctedPcPatBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "600px",
  height: "80px",
  padding: "15px",
});
const IconsDelete = styled(DeleteOutlinedIcon)({
  color: "#7f7d7d",
  fontSize: "200%",
  cursor: "pointer",
});
const IconsEdit = styled(EditOutlinedIcon)({
  color: "#7f7d7d",
  fontSize: "200%",
  cursor: "pointer",
});
const IconsContiner = styled(Box)({
  display: "flex",
  gap: "10px",
});
const ImgBox = styled(Box)({
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
