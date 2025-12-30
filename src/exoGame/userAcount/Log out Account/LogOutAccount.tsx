import React from "react";

import styleComponent from "./style-Component/Style-LogOutAccount";
const LogOutAccount = () => {
  const { Div, ContinuedBtn, ParentDivTexts, Text } = styleComponent;
  return (
    <Div>
      <ParentDivTexts>
        <Text as="h1">LogOutAccount</Text>
        <Text as="h6">
          You have successfully logged out of your account. You can now safely
          leave your system.
        </Text>
        <Text as="h6">
          Please note that your shopping cart is saved in your account. If you
          have items in it, you can complete your purchase upon re-entry in the
          future, provided the item is still available.
        </Text>
      </ParentDivTexts>
      <ContinuedBtn as="button">continue</ContinuedBtn>
    </Div>
  );
};
export default LogOutAccount;
