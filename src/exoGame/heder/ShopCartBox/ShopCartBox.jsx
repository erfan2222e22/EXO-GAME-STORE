import { useEffect, useState } from "react";
import ControlShopingCart from "../ControlShopingCart/controlShopingCart";
import emmiter from "../../../mitt/emmiter";
import contextUse from "../../useContext/useContext";
import styleComponent from "../../components/component-Style/StyleShopCartParentBox";
const ShopCartBox = () => {
  const [ProductsInShopCart, setProductsInShopCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { ParentBox, HederText, Img } = styleComponent;

  useEffect(() => {
    const handler = (data) => {
      const { id, price, img, nameProduct } = data.cartList;
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
