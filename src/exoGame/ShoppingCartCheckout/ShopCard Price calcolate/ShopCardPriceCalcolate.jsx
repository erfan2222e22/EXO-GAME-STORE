import React, { useState, useEffect } from "react";
import styleComponent from "../../components/component-Style/StyleShoppingCartCheckout";
const ShopCardPriceCalcolate = ({ ProductsValue }) => {
  const { ContinerShopCard, SettlementOfAccount, ContinueShoppingBtn } =
    styleComponent;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calulatPrice = ProductsValue.map(
      (item) => Number(item.price) * item.qty
    );
    if (calulatPrice.length > 0) {
      const show = calulatPrice.reduce((a, b) => +a + +b);
      setTotalPrice((prev) => (prev = show));
    } else {
      setTotalPrice((prev) => (prev = calulatPrice));
    }
  }, [ProductsValue]);

  return (
    <ContinerShopCard>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <p>Collect part:</p>
        <p>{totalPrice} $</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Order total:</p>
        <p>{totalPrice} $</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ContinueShoppingBtn>Continue shopping</ContinueShoppingBtn>
        <SettlementOfAccount>Settlement of account</SettlementOfAccount>
      </div>
    </ContinerShopCard>
  );
};
export default ShopCardPriceCalcolate;
