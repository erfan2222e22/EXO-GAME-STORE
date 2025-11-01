import { Box } from "@mui/material";
import { styled } from "@mui/system";

const UlContiner = styled(Box)({
  height: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  overflow: "auto",
  margin: "1px",
});

const Ul = styled(Box)({
  color: "#020202ff",
  width: "100% ",
  overflow: "hidden",
  padding: "0px",
});

const styleComponent = { UlContiner, Ul };

export default styleComponent;
