import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import styleComponents from "./Style-Component/StyleProductionDiscriptionImg";
import { Box } from "@mui/material";
const ProductDiscriptionImg = ({ imgSrc }) => {
  const { ParentBox, ParentBoxImg } = styleComponents;
  return (
    <ParentBox>
      <div>
        <Box component="img" src={imgSrc} alt="💖"></Box>
      </div>
      <ParentBoxImg>
        <FavoriteBorderIcon></FavoriteBorderIcon>
        <ShareIcon></ShareIcon>
        <BookmarkIcon></BookmarkIcon>
      </ParentBoxImg>
    </ParentBox>
  );
};
export default ProductDiscriptionImg;
