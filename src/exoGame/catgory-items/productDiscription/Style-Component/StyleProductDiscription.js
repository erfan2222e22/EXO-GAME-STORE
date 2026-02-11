import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const ParentContiner = styled(Box)({
  display: "flex",
  marginTop: "100px",
  flexDirection: "row",
});

const ParentBox = styled(Box)({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: "left",
  padding: "10px",
  height: "60%",
  margin: "10px",
  width: "100%",
  position: "relative",
  right: "10px",
  top: "30px",
});

const SecendParentBox = styled(Box)({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: "left",
  padding: "10px",
  height: "60%",
  margin: "10px",
  width: "100%",
  position: "relative",
  right: "10px",
  top: "30px",
});

const ContinerBox = styled(Box)({
  display: "flex",
  gap: "20px",
  flexDirection: "row",
  justifyContent: "left",
  padding: "10px",
  height: "100%",
  margin: "10px",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  right: "10px",
  color: "#00000080",
});

const styleComponents = {
  ParentBox,
  ContinerBox,
  ParentContiner,
  SecendParentBox,
};

export default styleComponents;
