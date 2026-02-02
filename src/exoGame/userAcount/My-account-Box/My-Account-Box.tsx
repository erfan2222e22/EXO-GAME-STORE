import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import styleComponent from "./style-Component/Style-AccountBox";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import contextUse from "../../useContext/useContext";
import { useContext } from "react";
const MyAccountBox = () => {
  const navigate = useNavigate();
  const context = useContext(contextUse);
  const { stateId } = context;

  const {
    Div,
    ParentDiv,
    HederParntDiv,
    HderContinerDiv,
    BoxTitle,
    ParentDivText,
  } = styleComponent;

  const elmentValueList = [
    {
      id: 1,
      title: "My-Account",
      iconTitle: PersonIcon,
      textArrayElment: [
        [
          {
            id: 1,
            text: "Edit Account Information",
            routeAddres: "/acount/Edit",
          },
        ],
        [{ id: 2, text: "Change password", routeAddres: "/acount/password" }],
        [
          {
            id: 3,
            text: "Change address book information",
            routeAddres: "/acount/address",
          },
        ],
        [{ id: 4, text: "Edit Wishlist", routeAddres: "/acount/Wishlist" }],
      ],
    },
    {
      id: 2,
      title: "My Orders",
      iconTitle: AccountBalanceWalletIcon,
      textArrayElment: [
        [{ id: 1, text: "Order History", routeAddres: "/acount/order" }],
        [
          {
            id: 2,
            text: "View Returned Goods Requests",
            routeAddres: "/acount/return",
          },
        ],
        [
          {
            id: 3,
            text: "Your Transactions",
            routeAddres: "/acount/Transactions",
          },
        ],
      ],
    },
  ];

  return (
    <Div>
      {elmentValueList.map((item) => {
        return (
          <ParentDiv key={item.id}>
            <HederParntDiv>
              <HderContinerDiv>
                <Box
                  sx={{ fontSize: "2rem", height: "100%", color: "#03c03c" }}
                  component={item.iconTitle}
                ></Box>
                <BoxTitle>My-Account</BoxTitle>
              </HderContinerDiv>
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: "2rem",
                  height: "100%",
                  color: "#7b7b7b",
                  marginRight: "10px",
                }}
              ></KeyboardArrowRightIcon>
            </HederParntDiv>
            <ParentDivText>
              {item.textArrayElment.map((item) =>
                item.map((value) => {
                  return (
                    <p
                      style={{ cursor: "pointer" }}
                      key={value.id}
                      onClick={() => {
                        // navigate(value.routeAddres, { state: { id: id } });
                        console.log(stateId);
                      }}
                    >
                      {value.text}
                    </p>
                  );
                })
              )}
            </ParentDivText>
          </ParentDiv>
        );
      })}
    </Div>
  );
};
export default MyAccountBox;
