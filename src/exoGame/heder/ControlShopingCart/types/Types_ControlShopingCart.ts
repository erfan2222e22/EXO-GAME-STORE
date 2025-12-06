import { Type_originalItems_extends } from "../../../catgory-items/ProductParentBox/types/Type-ProductParentBox";

type Pick_Type_originalItems_extends = Pick<
  Type_originalItems_extends,
  "id" | "img" | "price" | "nameProduct"
>;

export interface ProductsInShopCart extends Pick_Type_originalItems_extends {
  qty: number;
}

export interface Type_UseContext {
  ProductsInShopCart: ProductsInShopCart[];
  setProductsInShopCart: React.Dispatch<
    React.SetStateAction<ProductsInShopCart[]>
  >;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}
