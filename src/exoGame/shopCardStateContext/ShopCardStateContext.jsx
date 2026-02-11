import { useContext, useState, createContext } from "react";
const ShopCardContext = createContext();

export const ShopCardStateContext = ({ childern }) => {
  const [ProductsInShopCart, setProductsInShopCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <ShopCardContext.Provider
      value={{
        ProductsInShopCart,
        setProductsInShopCart,
        totalPrice,
        setTotalPrice,
      }}
    >
      {childern}
    </ShopCardContext.Provider>
  );
};

export const useShopCardContext = () => {
  return useContext(ShopCardContext);
};
