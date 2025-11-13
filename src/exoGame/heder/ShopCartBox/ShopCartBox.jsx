import { useEffect, useState } from "react";
import ControlShopingCart from "../ControlShopingCart/controlShopingCart";
import emmiter from "../../../mitt/emmiter";
import contextUse from "../../useContext/useContext";
import styleComponent from "./Style-Component/StyleShopCartParentBox";
const ShopCartBox = ({ sendmassage }) => {
  const [ProductsInShopCart, setProductsInShopCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { ParentBox, HederText, Img } = styleComponent;

  // Load cart data from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("shoppingCart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setProductsInShopCart(parsedCart);

        // Calculate total price
        const total = parsedCart.reduce(
          (sum, item) => sum + item.price * item.qty,
          0
        );
        setTotalPrice(total);
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    const handler = (data) => {
      const productsData = data.cartList;
      const { id, price, img, nameProduct } = productsData;
      const qtyToAdd = Number(data.counter) || 1;

      setProductsInShopCart((prev) => {
        const existing = prev.find((p) => p.id === id);
        if (existing) {
          return prev.map((p) =>
            p.id === id ? { ...p, qty: (p.qty || 1) + qtyToAdd } : p
          );
        }
        return [
          ...prev,
          {
            id: id,
            name: nameProduct,
            price: Number(price),
            img: img,
            qty: qtyToAdd,
          },
        ];
      });
    };

    emmiter.on("massage", handler);
    return () => {
      if (typeof emmiter.off === "function") {
        emmiter.off("massage", handler);
      } else if (typeof emmiter.removeListener === "function") {
        emmiter.removeListener("massage", handler);
      }
    };
  }, []);

  // Save cart data to localStorage whenever ProductsInShopCart changes
  useEffect(() => {
    try {
      localStorage.setItem("shoppingCart", JSON.stringify(ProductsInShopCart));

      // Calculate and update total price
      const total = ProductsInShopCart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
      setTotalPrice(total);

      sendmassage(ProductsInShopCart.length);
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [ProductsInShopCart, sendmassage]);

  return (
    <ParentBox>
      {ProductsInShopCart.length === 0 ? (
        <>
          <HederText component="h4">Item not found!</HederText>
          <Img
            component="img"
            src="https://exo.ir/catalog/view/theme/exo/image/gray-basket.svg"
            alt="bad ass~"
          ></Img>
        </>
      ) : (
        <contextUse.Provider
          value={{
            ProductsInShopCart,
            setProductsInShopCart,
            totalPrice,
            setTotalPrice,
          }}
        >
          <ControlShopingCart></ControlShopingCart>
        </contextUse.Provider>
      )}
    </ParentBox>
  );
};
export default ShopCartBox;
