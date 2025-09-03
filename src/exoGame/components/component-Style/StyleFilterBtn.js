import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const FilterBtn = styled(Button)({
  width: "70%",
  border: "1px solid black ",
  color: "black",
  fontFamily: "vazir",
  position: "relative",
  right: "35px",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#03c03c",
    color: "#ffff",
    borderColor: "#03c03c",
  },
});
const styleComponents = { FilterBtn };
export default styleComponents;
