import React from "react";
import styleComponent from "./style-Component/style-OrderHistoryAccount";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const OrderHistoryAccount = () => {
  const { Div, HederParntDiv, HderContinerDiv, BoxTitle } = styleComponent;
  return (
    <Div>
      <HederParntDiv>
        <HderContinerDiv>
          <AccountBalanceWalletIcon
            sx={{ fontSize: "2rem", height: "100%", color: "#03c03c" }}
          ></AccountBalanceWalletIcon>
          <BoxTitle>Order History</BoxTitle>
        </HderContinerDiv>
        <ArrowDropDownIcon
          sx={{
            fontSize: "2rem",
            height: "100%",
            color: "#7b7b7b",
            marginRight: "10px",
          }}
        ></ArrowDropDownIcon>
      </HederParntDiv>
      <Typography sx={{ margin: "10px", fontSize: "0.9rem" }}>
        You have no orders!
      </Typography>
    </Div>
  );
};
export default OrderHistoryAccount;
