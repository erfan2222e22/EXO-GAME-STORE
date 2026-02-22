import { Extends_ProductsInShopCart } from "../../types/ShoppingCartCheckout";
import { JSX } from "react";

interface Props_Type {
  ProductsValue: Extends_ProductsInShopCart[];
}
export type Component_Porps = ({ ...props }: Props_Type) => JSX.Element;
