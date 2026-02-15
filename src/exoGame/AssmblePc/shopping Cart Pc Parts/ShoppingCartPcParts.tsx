import styleComponent from "./Style-Component/StyleShopCartPcParts";
import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Type_AsslbleContiner_for_shop,
  Type_AsslbleContiner_ProductArray_shop,
  Type_sendItems,
  Type_sendError,
} from "./types/types_ShoppingCart";
import { Typography } from "@mui/material";

const ShoppingCartPcParts = () => {
  const navigate = useNavigate();
  const {
    ParentBox,
    BtnBox,
    ShopCartText,
    ContinerBox,
    ShopCartContiner,
    ErrorBox,
  } = styleComponent;

  const context = useContext(contextUse);
  const { selectPCPartBox } = context;
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorText, setErrorText] = useState<string | string[]>("");
  const [BoleanError, setBoleanError] = useState(false);

  const CalculateTotalPriceFunc = () => {
    const Validation = selectPCPartBox.filter(
      (fill: Type_AsslbleContiner_for_shop) => fill.ProductArray.length > 0,
    );

    let counterPrice = 0;
    const CalculateTotalPrice =
      Validation.length > 0 &&
      Validation.map((items: Type_AsslbleContiner_for_shop) =>
        items.ProductArray.map((item) => +item.price),
      ).flatMap((items: number[]) => items);

    for (let i in CalculateTotalPrice) {
      counterPrice += CalculateTotalPrice[i];
    }

    setTotalPrice(counterPrice);
  };

  const handelOnclick = () => {
    const ItemsTexts = ["MOTHERBORD", "RAM", "CPU COOLER"];

    const selectedProducts = selectPCPartBox
      .map((value: Type_AsslbleContiner_for_shop) => value.ProductArray)
      .filter(
        (fill: [Type_AsslbleContiner_ProductArray_shop]) => fill.length > 0,
      )
      .flatMap((item: Type_AsslbleContiner_ProductArray_shop[]) => item);

    const findedItems: Type_AsslbleContiner_for_shop[] = ItemsTexts.map(
      (value) =>
        selectPCPartBox.filter(
          (fill: Type_AsslbleContiner_for_shop) =>
            fill.ProductArray.length === 0 && fill.text === value,
        ),
    ).flatMap((item) => item);

    findedItems.length === 0
      ? sendItems(selectedProducts)
      : setError(findedItems);
  };

  const sendItems: Type_sendItems = (selectedProducts) => {
    setBoleanError(false);
    navigate("/ShopingCartCheckout", {
      state: { product: selectedProducts },
    });
  };

  const setError: Type_sendError = (findedItems) => {
    const ItemText = findedItems.map((item) => item.text);
    setErrorText((prev: any) => {
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
          <Typography>Your computer!</Typography>
          <ContinerBox>
            <ShopCartText>{totalPrice}$</ShopCartText>
            <BtnBox onClick={handelOnclick}>Add to your cart</BtnBox>
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
