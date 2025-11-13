import styleComponent from "./Style-Component/StyleShopCartPcParts";
import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ShoppingCartPcParts = () => {
  const navigate = useNavigate();
  const {
    ParentBox,
    BtnBox,
    HederText,
    ShopCartText,
    ContinerBox,
    ShopCartContiner,
    ErrorBox,
  } = styleComponent;

  const context = useContext(contextUse);
  const { selectPCPartBox } = context;
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorText, setErrorText] = useState("");
  const [BoleanError, setBoleanError] = useState(false);

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
    const ItemsTexts = ["MOTHERBORD", "RAM", "CPU COOLER"];

    const selectedProducts = selectPCPartBox
      .map((value) => value.ProductArray)
      .filter((fill) => fill.length > 0)
      .flatMap((item) => item);

    const findedItems = ItemsTexts.map((value) =>
      selectPCPartBox.filter(
        (fill) => fill.ProductArray.length === 0 && fill.text === value
      )
    ).flatMap((item) => item);

    findedItems.length === 0
      ? sendItems(selectedProducts)
      : setError(findedItems);
  };

  const sendItems = (selectedProducts) => {
    setBoleanError(false);
    navigate("/ShopingCartCheckout", {
      state: { product: selectedProducts },
    });
  };

  const setError = (findedItems) => {
    setErrorText((prev) => {
      const ItemText = findedItems.map((item) => item.text);
      setBoleanError(true);
      return (prev = ItemText);
    });
  };

  useEffect(() => {
    CalculateTotalPriceFunc();
  }, [selectPCPartBox]);

  return (
    <>
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
        {BoleanError && (
          <ErrorBox>
            <p>pls enter the</p>
            <p style={{ color: "red" }}>
              {errorText[0]},{errorText[1]},{errorText[2]}
            </p>
            <p>inputBoxes</p>
          </ErrorBox>
        )}
      </ParentBox>
    </>
  );
};
export default ShoppingCartPcParts;
