import { styled } from "@mui/material/styles";
import { Typography, Select } from "@mui/material";
const MainSelect = styled(Select)({
  width: "100%",
  height: "50px",
  overflow: "hidden",
  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
});

const InputLabelText = styled(Typography)({
  fontFamily: "vazri",
  fontWeight: "normal",
});

const StyleComponent = { MainSelect, InputLabelText };

export default StyleComponent;
