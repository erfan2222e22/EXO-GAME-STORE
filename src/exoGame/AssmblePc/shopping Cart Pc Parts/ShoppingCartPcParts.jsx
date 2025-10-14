import React from "react";
import styleComponent from "../../components/component-Style/StyleShopCartPcParts";
import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { useState, useEffect } from "react";
const ShoppingCartPcParts = () => {
  const {
    ParentBox,
    BtnBox,
    HederText,
    ShopCartText,
    ContinerBox,
    ShopCartContiner,
  } = styleComponent;

  const context = useContext(contextUse);
  const { selectPCPartBox, setSelectPCPartBox } = context;
  const [totalPrice, setTotalPrice] = useState(0);

  const CalculateTotalPriceFunc = () => {
    const Validation = selectPCPartBox.filter(
      (fill) => fill.ProductArray.length > 0
    );

    const CalculateTotalPrice =
      Validation.length > 0 &&
      Validation.map((items) => {
        return items.ProductArray.map((item) => Number(item.price));
      })
        .reduce((a, b) => a.concat(b))
        .reduce((a, b) => a + b);

    setTotalPrice(CalculateTotalPrice);
  };

  const handelOnclick = () => {
    CalculateTotalPriceFunc();
    console.log(selectPCPartBox);
  };

  useEffect(() => {
    CalculateTotalPriceFunc();
  }, [selectPCPartBox]);

  return (
    <ParentBox>
      <ShopCartContiner>
        <HederText>Your computer!</HederText>
        <ContinerBox>
          <ShopCartText>{totalPrice}$</ShopCartText>
          <BtnBox component="button" onClick={handelOnclick}>
            Add to your cart
          </BtnBox>
        </ContinerBox>
      </ShopCartContiner>
    </ParentBox>
  );
};
export default ShoppingCartPcParts;
