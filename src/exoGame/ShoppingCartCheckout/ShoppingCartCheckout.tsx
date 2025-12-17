import React from "react";
import styleComponent from "./Style-Component/StyleShoppingCartCheckout";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useEffect } from "react";
import ShopCardPriceCalcolate from "./ShopCard Price calcolate/ShopCardPriceCalcolate";
import { useShopCardContext } from "../shopCardStateContext/ShopCardStateContext";
import {
  useContext_Type,
  ReductionQty_Types,
  Function_Types,
} from "./types/ShoppingCartCheckout";

const ShoppingCartCheckout = () => {
  const { ProductsInShopCart, setProductsInShopCart }: useContext_Type =
    useShopCardContext();

  const {
    DelteIcon,
    ParentSelectProduct,
    Input,
    PriceBox,
    InputBox,
    MainBox,
    ContainerBox,
    EmptyContainerBox,
    EmptyContainerText,
    EmptyContainerImg,
    MainContainerEmpty,
    SpanText,
    BoxImg,
  } = styleComponent;

  useEffect(() => {
    setProductsInShopCart((prev) =>
      prev.map((item) => ({
        ...item,
        qty: 1,
        uniqueCode: Math.floor(Math.random() * 5000),
      }))
    );
  }, []);

  const IncreaseQty: Function_Types = (valueId) => {
    setProductsInShopCart((prev) =>
      prev.map((item) =>
        item.id === valueId ? { ...item, qty: (item.qty += 1) } : item
      )
    );
  };

  const ReductionQty: Function_Types = (valueId) => {
    setProductsInShopCart((prev) =>
      prev.map((item) =>
        item.id === valueId
          ? { ...item, qty: item.qty <= 0 ? (item.qty = 1) : (item.qty -= 1) }
          : item
      )
    );
  };

  const handelRemoveProducts: ReductionQty_Types = (valueUniqueCode) => {
    setProductsInShopCart((prev) =>
      prev.filter((item) => item.uniqueCode !== valueUniqueCode)
    );
  };

  return (
    <>
      {ProductsInShopCart?.length > 0 ? (
        <MainBox>
          <ParentSelectProduct>
            {ProductsInShopCart.map((value) => {
              return (
                <>
                  <ContainerBox key={value.id}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "100px",
                            height: "100%",
                          }}
                        >
                          <BoxImg as="img" src={value.img} alt="🥺" />
                        </div>
                        <div style={{ width: "300px" }}>
                          <p>{value.nameProduct}</p>
                          <SpanText as="h1">{value.nameProduct}</SpanText>
                        </div>
                      </div>
                      <div style={{ padding: "10px" }}>
                        <InputBox>
                          <span onClick={() => IncreaseQty(value.id)}>+</span>
                          <Input value={value.qty} as="input"></Input>
                          <span onClick={() => ReductionQty(value.id)}>-</span>
                        </InputBox>
                        <PriceBox>
                          {/* <span>{value.price * (value.qty || 1)}</span> */}
                          <span>{(value.qty || 1) * Number(value.price)}</span>
                          <span>$</span>
                        </PriceBox>
                      </div>
                      <DelteIcon
                        onClick={(e) => handelRemoveProducts(value.uniqueCode)}
                        as={DeleteOutlinedIcon}
                      ></DelteIcon>
                    </div>
                  </ContainerBox>
                </>
              );
            })}
          </ParentSelectProduct>
          <ShopCardPriceCalcolate ProductsValue={ProductsInShopCart} />
        </MainBox>
      ) : (
        <EmptyContainerBox>
          <MainContainerEmpty>
            <EmptyContainerText as="h1">Empty!</EmptyContainerText>
            <EmptyContainerImg
              src="https://exo.ir/catalog/view/theme/exo/image/gray-basket.svg"
              alt="slame"
              as="img"
            ></EmptyContainerImg>
          </MainContainerEmpty>
        </EmptyContainerBox>
      )}
    </>
  );
};
export default ShoppingCartCheckout;
