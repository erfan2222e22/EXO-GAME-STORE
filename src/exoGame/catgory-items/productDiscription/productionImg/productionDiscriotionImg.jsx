import styleComponents from "../../../components/component-Style/StyleDiscriotionItems";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const ProductDiscriptionImg = ({ imgSrc }) => {
  const { BoxImg } = styleComponents; //styled componets
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
        <BoxImg component="img" src={imgSrc} alt="none🎨" style={{}}></BoxImg>
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
