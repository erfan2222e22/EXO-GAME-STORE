import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import styleComponents from "./Style-Component/StyleProductionDiscriptionImg";
import { Box } from "@mui/material";
import { Type_Component } from "./types/types-ImgProduct";

const ProductDiscriptionImg: Type_Component = ({ imgSrc }) => {
  const { ParentBox, ParentBoxImg } = styleComponents;
  return (
    <ParentBox>
      <Box>
        <Box component="img" src={imgSrc} alt="💖"></Box>
      </Box>
      <ParentBoxImg>
        <FavoriteBorderIcon></FavoriteBorderIcon>
        <ShareIcon></ShareIcon>
        <BookmarkIcon></BookmarkIcon>
      </ParentBoxImg>
    </ParentBox>
  );
};
export default ProductDiscriptionImg;
