import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const BoxImg = styled(Box)({});

const ParentBox = styled(Box)({
  width: "100%",
  height: "650px",
  display: "flex",
  marginTop: "0px",
  fontFamily: "vazir",
});
const BoxAddItems = styled(Box)({
  backgroundColor: "#03c03c",
  border: "2px solid #ffff",
  borderRadius: "15px",
  boxShadow: "rgba(163, 170, 168, 0.73) 4px 4px 0 0",
  cursor: "pointer",
  display: "inline-block",
  color: "#ffff",
  padding: "0 18px",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "50px",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  width: "75%",
  "&:hover": {
    boxShadow: "rgb(145, 247, 176) 0px 5px 15px",
  },
  "&:active": {
    boxShadow: " #422800 2px 2px 0 0",
    transform: "translate(2px, 2px)",
  },
});

const ParentBoxAddItems = styled(Box)({
  textAlign: "center",
  width: "50%",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px",
  overflow: "hidden",
  margin: "0 auto",
  color: "black",
});

const BoxInputCounterItemsInBox = styled(Box)({
  textAlign: "center",
  width: "100px",
  height: "100%",
  overflow: "hidden",
});

export default {
  BoxImg,
  ParentBox,
  BoxAddItems,
  ParentBoxAddItems,
  BoxInputCounterItemsInBox,
};
