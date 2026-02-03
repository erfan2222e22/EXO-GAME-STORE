import styleComponent from "./style-Component/style-WishlistAccount";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Typography from "@mui/material/Typography";
const WishlistAccount = () => {
  const { BoxTitle, Div, HderContinerDiv, HederParntDiv } = styleComponent;

  return (
    <Div>
      <HederParntDiv>
        <HderContinerDiv>
          <FavoriteBorderOutlinedIcon
            sx={{ fontSize: "2rem", height: "100%", color: "#03c03c" }}
          ></FavoriteBorderOutlinedIcon>
          <BoxTitle>wishlist-Account</BoxTitle>
        </HderContinerDiv>
        <KeyboardArrowRightIcon
          sx={{
            fontSize: "2rem",
            height: "100%",
            color: "#7b7b7b",
            marginRight: "10px",
          }}
        ></KeyboardArrowRightIcon>
      </HederParntDiv>
      <Typography sx={{ margin: "10px", fontSize: "0.9rem" }}>
        Your wishlist is empty!
      </Typography>
    </Div>
  );
};
export default WishlistAccount;
