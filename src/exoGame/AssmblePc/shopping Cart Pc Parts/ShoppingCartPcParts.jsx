import React from "react";
import styleComponent from "../../components/component-Style/StyleShopCartPcParts";
const ShoppingCartPcParts = () => {
  const {
    ParentBox,
    BtnBox,
    HederText,
    ShopCartText,
    ContinerBox,
    ShopCartContiner,
  } = styleComponent;
  return (
    <ParentBox>
      <ShopCartContiner>
        <HederText>Your computer!</HederText>
        <ContinerBox>
          <ShopCartText>0$</ShopCartText>
          <BtnBox component="button">Add to your cart</BtnBox>
        </ContinerBox>
      </ShopCartContiner>
    </ParentBox>
  );
};
export default ShoppingCartPcParts;
