import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import styleComponent from "./style-Component/Style-AccountBox";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
const MyAccountBox = () => {
  const navigate = useNavigate();
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
        [{ text: "Edit Account Information", routeAddres: "" }],
        [{ text: "Change password", routeAddres: "" }],
        [{ text: "Change address book information", routeAddres: "" }],
        [{ text: "Edit Wishlist", routeAddres: "" }],
      ],
    },
    {
      id: 2,
      title: "My Orders",
      iconTitle: AccountBalanceWalletIcon,
      textArrayElment: [
        [{ text: "Order History", routeAddres: "" }],
        [{ text: "View Returned Goods Requests", routeAddres: "" }],
        [{ text: "Your Transactions", routeAddres: "" }],
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
                      key={value.text}
                      onClick={() => {
                        navigate(value.routeAddres, { state: "" });
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
