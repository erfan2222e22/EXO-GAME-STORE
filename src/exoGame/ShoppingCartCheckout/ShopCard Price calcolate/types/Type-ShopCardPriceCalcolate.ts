import { Extends_ProductsInShopCart } from "../../types/ShoppingCartCheckout";
interface Props_Type {
  ProductsValue: Extends_ProductsInShopCart[];
}
export type Component_Porps = ({ ...props }: Props_Type) => React.ReactNode;
