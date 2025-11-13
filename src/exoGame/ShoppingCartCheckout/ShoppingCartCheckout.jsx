import React from "react";
import styleComponent from "./Style-Component/StyleShoppingCartCheckout";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ShopCardPriceCalcolate from "./ShopCard Price calcolate/ShopCardPriceCalcolate";
const ShoppingCartCheckout = () => {
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
  const location = useLocation();
  const { product } = location.state;
  const [ProductsValue, setProductsValue] = useState(product);

  useEffect(() => {
    setProductsValue((prev) =>
      prev.map((item) => ({
        ...item,
        qty: 1,
        uniqueCode: Math.floor(Math.random() * 5000),
      }))
    );
  }, []);

  const IncreaseQty = (e, valueTitle, valueId) => {
    setProductsValue((prev) =>
      prev.map((item) =>
        item.id === valueId && item.title === valueTitle
          ? { ...item, qty: (item.qty += 1) }
          : item
      )
    );
    console.log();
  };

  const ReductionQty = (e, valueTitle, valueId) => {
    setProductsValue((prev) =>
      prev.map((item) =>
        item.id === valueId && item.title === valueTitle
          ? { ...item, qty: item.qty <= 0 ? (item.qty = 1) : (item.qty -= 1) }
          : item
      )
    );
  };

  const handelRemoveProducts = (e, valueUniqueCode) => {
    setProductsValue((prev) =>
      prev.filter((item) => item.uniqueCode !== valueUniqueCode)
    );
  };

  return (
    <>
      {ProductsValue.length > 0 ? (
        <MainBox>
          <ParentSelectProduct>
            {ProductsValue.map((value) => {
              return (
                <>
                  <ContainerBox>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px",
                      }}
                    >
                      <div style={{ display: "flex", gap: "10px" }}>
                        <div
                          style={{
                            width: "100px",
                            height: "100%",
                          }}
                        >
                          <BoxImg component="img" src={value.img} alt="🥺" />
                        </div>
                        <div style={{ width: "300px" }}>
                          <p>{value.nameProduct}</p>
                          <SpanText component="span">
                            {value.nameProduct}
                          </SpanText>
                        </div>
                      </div>
                      <div style={{ padding: "10px" }}>
                        <InputBox>
                          <span
                            onClick={(e) =>
                              IncreaseQty(e, value.title, value.id)
                            }
                          >
                            +
                          </span>
                          <Input value={value.qty} component="Input"></Input>
                          <span
                            onClick={(e) =>
                              ReductionQty(e, value.title, value.id)
                            }
                          >
                            -
                          </span>
                        </InputBox>
                        <PriceBox>
                          <span>{value.price * (value.qty || 1)}</span>
                          <span>$</span>
                        </PriceBox>
                      </div>
                      <DelteIcon
                        onClick={(e) =>
                          handelRemoveProducts(e, value.uniqueCode)
                        }
                        component={DeleteOutlinedIcon}
                      ></DelteIcon>
                    </div>
                  </ContainerBox>
                </>
              );
            })}
          </ParentSelectProduct>
          <ShopCardPriceCalcolate
            ProductsValue={ProductsValue}
            setProductsValue={setProductsValue}
          />
        </MainBox>
      ) : (
        <EmptyContainerBox>
          <MainContainerEmpty>
            <EmptyContainerText component="h1">Empty!</EmptyContainerText>
            <EmptyContainerImg
              src="https://exo.ir/catalog/view/theme/exo/image/gray-basket.svg"
              alt="slame"
              component="img"
            ></EmptyContainerImg>
          </MainContainerEmpty>
        </EmptyContainerBox>
      )}
    </>
  );
};
export default ShoppingCartCheckout;
