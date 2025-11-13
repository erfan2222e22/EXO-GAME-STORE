import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styleComponents from "./Style-Component/ShopIcon";
const ShoppingCartIconBox = ({ valid, setValid, ProductLength }) => {
  const { BoxContiner, SpanText } = styleComponents;
  return (
    <BoxContiner>
      {ProductLength > 0 && <SpanText>{ProductLength}</SpanText>}
      <ShoppingCartIcon
        sx={{ position: "fixed" }}
        onClick={(e) => {
          e.stopPropagation();
          setValid(true);
        }}
      ></ShoppingCartIcon>
    </BoxContiner>
  );
};

export default ShoppingCartIconBox;
