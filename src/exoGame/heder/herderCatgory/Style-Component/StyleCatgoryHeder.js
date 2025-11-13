import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const anime = keyframes`
from { opacity: 0; transform: translateY(-20px); }
to { opacity: 1; transform: translateX(0); }
`;
const HederCatgoryBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "90%",
  left: "50px",
  height: "450px",
  borderRadius: "10px",
  position: "fixed",
  margin: "0 auto",
  marginTop: "125px",
  padding: "3px",
  paddingTop: "3px",
  backgroundColor: "#f6f6f6ff",
  animation: `${anime} 1s ease-in-out `,
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(14, 14, 15, 0.05) 0px 0.25em 1em",
  zIndex: "3000",
  border: "0.1px solid #ccc",
  opacity: "1",
});

const KeyTexts = styled(Box)({
  cursor: "pointer",
  "&:hover": { color: "#3c3c" },
});

const CatgoryContiner = styled(Box)({
  width: "600px",
  display: "flex",
  justifyContent: "space-around",
});

const KeyItemsBox = styled(Box)({
  borderRight: "1px solid #bfbcbcff",
  padding: "5px",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  marginTop: "0px",
});

const Img = styled(Box)({
  width: "100%",
  height: "100%",
});
const ImgBox = styled(Box)({
  width: "300px",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const styleComponents = {
  HederCatgoryBox,
  KeyTexts,
  CatgoryContiner,
  KeyItemsBox,
  ImgBox,
  Img,
};

export default styleComponents;
