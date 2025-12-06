import DeleteIcon from "@mui/icons-material/Delete";
import { Typography, Box } from "@mui/material";
import styleComponents from "./Style-Component/StyleControlShpingCart";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect } from "react";
import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { useNavigate } from "react-router-dom";
import { Type_UseContext } from "./types/Types_ControlShopingCart";

const ControlShopingCart = () => {
  const {
    DiscriptionItems,
    CounterProductsBox,
    ButtonAddBasket,
    ButtonClearBasket,
    DelteIcons,
  } = styleComponents;

  const navigate = useNavigate();
  const {
    ProductsInShopCart,
    setProductsInShopCart,
    totalPrice,
    setTotalPrice,
  }: Type_UseContext = useContext(contextUse);

  useEffect(() => {
    setTotalPrice(
      ProductsInShopCart.reduce(
        (total, item) => total + Number(item.price) * (item.qty ?? 1),
        0
      )
    );
  }, [ProductsInShopCart, setTotalPrice]);

  const handelClearBasket = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setProductsInShopCart([]);
  };

  const incrementQty = (
    e: React.MouseEvent<HTMLSpanElement>,
    id: number | string
  ) => {
    e.stopPropagation();
    setProductsInShopCart((prevProducts) =>
      prevProducts.map((item: any) =>
        item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
      )
    );
  };

  const decrementQty = (
    e: React.MouseEvent<HTMLSpanElement>,
    id: number | string
  ) => {
    e.stopPropagation();
    setProductsInShopCart((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id && (item.qty || 1) > 1
          ? { ...item, qty: (item.qty || 1) - 1 }
          : item
      )
    );
  };

  const delteShopCart = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number | string
  ) => {
    e.stopPropagation();
    setProductsInShopCart((preve) => preve.filter((index) => index.id !== id));
  };

  const handelViewCart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate("/ShopingCartCheckout", {
      state: { product: ProductsInShopCart },
    });
  };

  return (
    <div>
      {ProductsInShopCart?.map((item) => {
        return (
          <>
            <DiscriptionItems style={{ display: "flex", gap: "50px" }}>
              <Typography component="p">{item.nameProduct}</Typography>
              <Box
                component="img"
                src={item?.img}
                sx={{ width: "50%", height: "50%" }}
                alt="🖤🖤"
              ></Box>
            </DiscriptionItems>
            <CounterProductsBox>
              <h5 style={{ overflow: "hidden" }}>{item?.price}$</h5>
              <div style={{ display: "flex", gap: "5px" }}>
                <Typography
                  component="span"
                  onClick={(e) => incrementQty(e, item.id)}
                >
                  <DelteIcons
                    as={DeleteIcon}
                    onClick={(e) => delteShopCart(e, item.id)}
                  ></DelteIcons>
                  +
                </Typography>
                <input
                  aria-label="."
                  value={item.qty}
                  style={{ width: "60px", textAlign: "center", height: "25px" }}
                ></input>
                <Typography
                  component="span"
                  onClick={(e) => decrementQty(e, item.id)}
                >
                  -
                </Typography>
              </div>
            </CounterProductsBox>
          </>
        );
      })}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Box>
          <p> total Price: </p>
          <ButtonClearBasket onClick={(e) => handelClearBasket(e)}>
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
            <span>delte Bask </span>
          </ButtonClearBasket>
        </Box>

        <Box>
          <p>{totalPrice}$</p>
          <ButtonAddBasket onClick={(e) => handelViewCart(e)}>
            <span>View Cart</span>
            <ChevronRightIcon></ChevronRightIcon>
          </ButtonAddBasket>
        </Box>
      </div>
    </div>
  );
};

export default ControlShopingCart;
