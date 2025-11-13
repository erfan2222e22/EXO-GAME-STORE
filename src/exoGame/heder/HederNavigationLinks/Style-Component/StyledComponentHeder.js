import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const Spans = styled(Box)(({ theme }) => ({
  margin: "7px",
  cursor: "pointer",
  fontSize: "13px",
  color: "#606060",
  width: "100px",
  flex: "1",
  textAlign: "center",
  height: "100%",
  overflow: "hidden",
}));

const Icons = styled(Box)({
  transition: "all 0.3s ease-in-out",
  fontSize: "25px",
  "&:hover": {
    color: "#03c13c",
  },
});

const LinkRoter = styled(Link)({
  textDecoration: "none",
  color: "#606060",
});

const styleComponent = {
  Spans,
  LinkRoter,
  Icons,
};

export default styleComponent;
