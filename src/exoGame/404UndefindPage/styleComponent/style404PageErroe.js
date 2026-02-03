import { styled, keyframes } from "@mui/material/styles";
import { Box } from "@mui/material";
const animation = keyframes`
    0%{background-position:50% 0%;}
    50%{background-position:0% 100%;}
    100%{background-position:50% 0%;}
`;

const ParentBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: window.innerHeight,
  overflowY: "hidden",
  background: "linear-gradient(44deg, #5a5959ff, #040404ff)",
  backgroundSize: "400% 400%",
  animation: `${animation} 8s ease infinite`,
});

const styleComponents = {
  ParentBox,
};

export default styleComponents;
