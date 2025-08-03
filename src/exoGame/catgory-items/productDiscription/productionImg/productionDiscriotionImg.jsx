import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/material";
const ProductDiscriptionImg = ({ imgSrc }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Box component="img" src={imgSrc} alt="💖"></Box>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <FavoriteBorderIcon></FavoriteBorderIcon>
        <ShareIcon></ShareIcon>
        <BookmarkIcon></BookmarkIcon>
      </div>
    </div>
  );
};
export default ProductDiscriptionImg;
