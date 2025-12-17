import { ProductsInShopCart } from "../../heder/ControlShopingCart/types/Types_ControlShopingCart";
import { Type_UseContext_Main } from "../../heder/ShopCartBox/types/Types_ShopCartBox";
type PickUseContextItems = Pick<
  Type_UseContext_Main,
  "ProductsInShopCart" | "setProductsInShopCart"
>;

export interface Extends_ProductsInShopCart extends ProductsInShopCart {
  uniqueCode?: number;
}

export interface useContext_Type extends PickUseContextItems {}

export type ReductionQty_Types = (valueUniqueCode: number) => void;
export type Function_Types = (valueId: string | number) => void;
