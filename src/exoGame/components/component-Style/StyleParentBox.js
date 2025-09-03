import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ProductParentBox = styled(Box)(({ theme }) => ({
  width: "55%",
  marginLeft: "7%",
  marginTop: "130px",
  overflow: "hidden",
  display: "grid",
  gap: "10px",
  backgroundColor: "white",
  gridTemplateColumns: "repeat(4, 1fr)",
  [theme.breakpoints.down("xs")]: {
    marginLeft: "1%",
    width: "65%",
    gap: "5px",
    gridTemplateColumns: "repeat(4, 1fr)",
    margin: "0 auto",
  },
  [theme.breakpoints.down("xl")]: {
    marginLeft: "1%",
    width: "65%",
    gap: "5px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("lg")]: {
    width: "70%",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
    marginLeft: "15%",
  },
}));

const BoxProduction = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  width: "250px",
  height: "300px",
  textAlign: "center",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "0 10px",
  gap: "5px",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#03c03c",
  },
  [theme.breakpoints.down("sm")]: { margin: "0 auto" },
}));

const ImgProduction = styled(Box)({
  margin: "0 auto",
  width: "200px",
  height: "250px",
});
const styleComponents = { BoxProduction, ImgProduction, ProductParentBox };

export default styleComponents;
