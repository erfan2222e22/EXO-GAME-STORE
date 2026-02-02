import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const ContinerBox = styled(Box)({
  width: "100%",
  height: "300px",
  border: "1px solid ",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  gap: "10px",
  padding: "5px",
  marginTop: "50px",

  background:
    "radial-gradient(100% 100% at 11% 99%, #f00000 -100%, transparent),radial-gradient(100% 100% at 100% 14%, #080808 0%, transparent),radial-gradient(100% 100% at 30% 29%, #f7f7f7 0%, transparent),#000000;  } ",
});

const ParentBox = styled(Box)({
  height: window.innerHeight,
  backgroundColor: "black",
  boxSizing: "border-box",
  padding: "5%",
});

const Text = styled(Box)({
  color: "#ffff",
  overflow: "hidden",
});

const Text1 = styled(Box)({
  color: "#aca9a9ff",
  overflow: "hidden",
});

const styleComponents = {
  ParentBox,
  ContinerBox,
  Text,
  Text1,
};

export default styleComponents;
