import React from "react";
import styleComponent from "./style-Component/style-userTransactions";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  Paper,
} from "@mui/material";

const UserTransactions = () => {
  const context = useContext(contextUse);
  const { stateId } = context;
  const {
    DefaultTableCell,
    BoxTitle,
    HederParntDiv,
    HderContinerDiv,
    TableRowBox,
    CenterTableCell,
    TableBodyBox,
  } = styleComponent;
  return (
    <div
      style={{
        width: "80%",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <HederParntDiv>
        <HderContinerDiv>
          <AccountBalanceWalletOutlinedIcon
            sx={{ fontSize: "2rem", height: "100%", color: "#03c03c" }}
          ></AccountBalanceWalletOutlinedIcon>
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRowBox>
              <DefaultTableCell>Today date</DefaultTableCell>
              <CenterTableCell>Description</CenterTableCell>
              <DefaultTableCell>Value (TOM)</DefaultTableCell>
            </TableRowBox>
          </TableHead>
          <TableBody>
            <TableBodyBox>
              <TableCell sx={{ fontSize: "1rem" }}>
                No transactions found!
              </TableCell>
            </TableBodyBox>
          </TableBody>
        </Table>
      </TableContainer>
      <p onClick={() => console.log(stateId)}>fuq</p>
    </div>
  );
};
export default UserTransactions;
