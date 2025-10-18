import React from "react";
import styleComponent from "../components/component-Style/StyleShoppingCartCheckout";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useLocation } from "react-router-dom";
const ShoppingCartCheckout = () => {
  const {
    SettlementOfAccount,
    ContinueShoppingBtn,
    DelteIcon,
    ContinerShopCard,
    ParentSelectProduct,
    Input,
    PriceBox,
    InputBox,
    MainBox,
    ContainerBox,
  } = styleComponent;
  const location = useLocation();
  const { product } = location.state;

  return (
    <MainBox>
      <ParentSelectProduct>
        {product.map((value) => {
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
                    <div>
                      <img
                        style={{
                          width: "70%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                        src={value.img}
                        alt="🥺"
                        onClick={() => console.log(product.length)}
                      />
                    </div>
                    <div>
                      <p>ASUS Pro WS TRX50-SAGE WIFI Pro-WS-TRX50-SAGE-WIFI</p>
                      <span
                        style={{
                          fontSize: "12px",
                          position: "relative",
                          bottom: "17px",
                          fontWeight: "400",
                        }}
                      >
                        WIFI Pro-WS-TRX50-SAGE-WIFI
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <InputBox>
                      <span>+</span>
                      <Input value={0} component="Input"></Input>
                      <span>-</span>
                    </InputBox>
                    <PriceBox>
                      <span>200</span>
                      <span>$</span>
                    </PriceBox>
                  </div>
                  <DelteIcon component={DeleteOutlinedIcon}></DelteIcon>
                </div>
              </ContainerBox>
            </>
          );
        })}
      </ParentSelectProduct>
      <ContinerShopCard>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #dee2e6",
          }}
        >
          <p>Collect part:</p>
          <p>200 $</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Order total:</p>
          <p>200 $</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ContinueShoppingBtn>Continue shopping</ContinueShoppingBtn>
          <SettlementOfAccount>Settlement of account</SettlementOfAccount>
        </div>
      </ContinerShopCard>
    </MainBox>
  );
};
export default ShoppingCartCheckout;
