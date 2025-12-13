import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styleComponents from "./Style-Component/ShopIcon";
import { Component_Porps } from "./types/type-ShopingCartIcon";

const ShoppingCartIconBox: Component_Porps = ({ setValid, ProductLength }) => {
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
