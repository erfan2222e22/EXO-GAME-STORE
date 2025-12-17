import { useEffect } from "react";
import ControlShopingCart from "../ControlShopingCart/controlShopingCart";
import emmiter from "../../../mitt/emmiter";
import styleComponent from "./Style-Component/StyleShopCartParentBox";
import {
  Component_Props,
  handlerType,
  Type_UseContext_Main,
} from "./types/Types_ShopCartBox";
import { useShopCardContext } from "../../shopCardStateContext/ShopCardStateContext";
const ShopCartBox: Component_Props = ({ sendmassage }) => {
  const {
    ProductsInShopCart,
    setProductsInShopCart,
    setTotalPrice,
  }: Type_UseContext_Main = useShopCardContext();

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
          (sum: number, item: { price: number; qty: number }) =>
            sum + item.price * item.qty,
          0
        );
        setTotalPrice(total);
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    const handler: handlerType = (data) => {
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
            nameProduct: nameProduct,
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
      }
    };
  }, []);

  // Save cart data to localStorage whenever ProductsInShopCart changes
  useEffect(() => {
    try {
      localStorage.setItem("shoppingCart", JSON.stringify(ProductsInShopCart));

      // Calculate and update total price
      const total = ProductsInShopCart.reduce(
        (sum, item) => sum + +item.price * +item.qty,
        0
      );
      setTotalPrice(total);

      sendmassage(ProductsInShopCart.length);
    } catch (error) {
      console.log("Error saving cart to localStorage:", error);
    }
  }, [ProductsInShopCart, sendmassage]);

  return (
    <ParentBox>
      {ProductsInShopCart.length === 0 ? (
        <>
          <HederText as="h4">Item not found!</HederText>
          <Img
            as="img"
            src="https://exo.ir/catalog/view/theme/exo/image/gray-basket.svg"
            alt="😑"
          ></Img>
        </>
      ) : (
        <ControlShopingCart></ControlShopingCart>
      )}
    </ParentBox>
  );
};
export default ShopCartBox;
