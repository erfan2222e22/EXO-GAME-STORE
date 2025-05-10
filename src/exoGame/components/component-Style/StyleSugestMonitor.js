import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Div_parent = styled(Box)({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
});

const Div_img = styled(Box)({
  width: "55%",
  margin: "5px",
});

const Text = styled(Typography)({
  fontFamily: "vazir",
  overflow: "hidden",
  fontSize: "14px",
  cursor: "pointer",
  "&:hover": { color: "#03c03c" },
});

const Headr_text = styled(Typography)({
  textAlign: "center",
  fontFamily: "vazir",
  overflow: "hidden",
});

export default { Div_parent, Div_img, Text, Headr_text };
