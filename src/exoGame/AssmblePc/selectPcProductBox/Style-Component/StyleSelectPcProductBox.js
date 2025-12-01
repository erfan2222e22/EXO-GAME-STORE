import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const ParentBox = styled(Box)({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginTop: "200px",
});

const SelctedParentBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

const rotBGimg = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AnimationBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  "&::before": {
    content: "''",
    position: "absolute",
    width: "150%",
    height: "12%",
    backgroundImage:
      "linear-gradient(140deg, rgba(0, 255, 60, 1), rgba(0, 255, 60, 1))",
    animation: `${rotBGimg} 3s linear infinite`,
    transition: "all 0.2s linear",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    background: "#ffffffff",
    inset: 5,
    borderRadius: "15px",
  },
}));

const SelectBoxContiner = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "4.5rem",
  padding: "10px",
  backgroundColor: "#c0f5d0",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "20px",
  zIndex: "1",
}));

const SelectBoxSecendContiner = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
});

const AddPcPartsButton = styled(Box)({
  padding: "5px",
  borderRadius: "30%",
  backgroundColor: "#03c03c",
  color: "#fff",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxShadow:
    " rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
});

const AnimationBoxContainer = styled(Box)({
  width: "80%",
  height: "5rem",
  padding: "3px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px",
  zIndex: "1",
});

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
const IconsContiner = styled(Avatar)({
  display: "flex",
  gap: "10px",
});
const ImgBox = styled(Avatar)({
  width: "50px",
  height: "50px",
});
const TextHederBox = styled(Typography)({
  fontSize: "1.5rem",
});

const styleComponents = {
  ParentBox,
  SelctedParentBox,
  SelectBoxContiner,
  AddPcPartsButton,
  SelctedPcPatBox,
  SelectBoxSecendContiner,
  IconsDelete,
  IconsEdit,
  IconsContiner,
  ImgBox,
  TextHederBox,
  AnimationBox,
  AnimationBoxContainer,
};
export default styleComponents;
