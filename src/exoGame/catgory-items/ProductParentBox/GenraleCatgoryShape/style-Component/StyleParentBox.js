import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

const ProductParentBox = styled(Box)(({ theme }) => ({
  width: "55%",
  marginLeft: "7%",
  marginTop: "130px",
  overflow: "hidden",
  display: "grid",
  gap: "20px",
  backgroundColor: "#fff",
  gridTemplateColumns: "repeat(2, 1fr)",
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
  border: "1px solid #dedede",
  width: "85%",
  height: "100%",
  textAlign: "center",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "0 10px",
  gap: "10px",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#03c03c",
  },
  [theme.breakpoints.down("md")]: { width: "85%", height: "100%" },
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
  },
}));

const ImgProduction = styled(Avatar)(({ theme }) => ({
  margin: "0 auto",
  width: "250px",
  height: "250px",
  "&:hover": {
    borderColor: "#03c03c",
  },
  [theme.breakpoints.down("md")]: { width: "200px", height: "200px" },
  [theme.breakpoints.down("sm")]: { margin: "0 auto" },
}));

const styleComponents = { BoxProduction, ImgProduction, ProductParentBox };

export default styleComponents;
