import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const MainBox = styled(Box)({
  zIndex: "4000",
  height: "80%",
  padding: "10px",
  position: "relative",
  display: "grid",
  backdropFilter: " blur(20px)",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: "20px",
  backgroundColor: "#fff",
});
const TableMainBox = styled(Box)({
  height: "100%",
  display: "flex",
  gap: "10px",
  padding: "3px",
});
const TableParentBox = styled(Box)({
  width: "80%",
  height: "100%",
  borderRadius: "10px",
  padding: "1px",
  border: "1px solid #666",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  gap: "6px",
});

const TableContainerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "7px",
  borderBottom: "1px solid #e6e6e6",
  height: "30%",
  overflow: "hidden",
  gap: "5px",
});

const ImgBox = styled(Box)({
  maxWidth: "100%",
  maxHeight: "100%",
  gridArea: "1/1/5/4",
});

const HederMainBox = styled(Box)({
  justifyContent: "flex-start",
  width: "100%",
  height: "15%",
  overflow: "hidden",
  borderBottom: "1px solid #3c3c3c",
  gridArea: "1/3/6/6",
});

const HederItemText = styled(Box)({
  color: "#3c3c3c",
  height: "53%",
  padding: "1px",
  overflow: "hidden",
});

const SelectBtn = styled(Box)({
  cursor: "pointer",
  width: "100px",
  borderRadius: "10px",
  border: "none",
  color: "#ffff",
  backgroundColor: "#03c03c",
  boxShadow:
    " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const ReturnBtn = styled(Box)({
  cursor: "pointer",
  transitionDuration: "0.5s",
  width: "100px",
  color: "rgb(112, 120, 128)",
  borderRadius: "10px",
  border: "1px solid gray",
  boxShadow:
    " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  "&:hover": {
    color: "#ffff",
    backgroundColor: "gray",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BtnBoxContiner = styled(Box)({
  display: "grid",
  gridArea: "5/1/6/6",
  borderTop: "1px solid #dee2e6",
});

const BtnBoxParent = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "5px",
});

const styleComponents = {
  MainBox,
  ImgBox,
  TableMainBox,
  TableParentBox,
  TableContainerBox,
  HederMainBox,
  HederItemText,
  SelectBtn,
  ReturnBtn,
  BtnBoxContiner,
  BtnBoxParent,
};

export default styleComponents;
