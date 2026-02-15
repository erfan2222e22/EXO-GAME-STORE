import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const ParentBox = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10%",
  marginTop: "150px",
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
    marginTop: "20px",
    width: "100%",
  },
}));

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

const AnimationBox = styled(Box)({
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
});

const SelectBoxContiner = styled(Box)({
  width: "100%",
  height: "4.5rem",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "1rem",
  zIndex: "1",
});

const SelectBoxSecendContiner = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  padding: "1%",
  fontSize: "1rem",
});

const AddPcPartsButton = styled(Box)({
  padding: "5px",
  borderRadius: "0.5rem",
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
  width: "60px",
  height: "60px",
  padding: "10px",
});

const TextHederBox = styled(Typography)({
  fontSize: "1.5rem",
});

const styleComponents = {
  ParentBox,
  SelctedParentBox,
  SelectBoxContiner,
  AddPcPartsButton,
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
