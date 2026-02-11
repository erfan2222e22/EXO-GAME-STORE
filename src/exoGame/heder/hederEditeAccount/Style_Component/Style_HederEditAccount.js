import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const EditAccountBox = styled(Box)({
  padding: "2px",
  border: "1px solid #c3c3c3",
  borderRadius: "3px",
  backgroundColor: "#ffff",
  width: "13%",
  height: "26%",
  direction: "ltr",
  margin: "0 auto",
  position: "fixed",
  top: "10%",
  left: "15%",
});

const EditAccountLinks = styled(Typography)({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "gray",
  },
});

const styleComponents = {
  EditAccountBox,
  EditAccountLinks,
};

export default styleComponents;
