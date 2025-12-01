import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const createData = (itemKeys: string[], itemData: string[]) => {
  return { itemKeys, itemData };
};

const TableInformationProducts = ({ ...item }) => {
  const { price, nameProduct } = item;
  const object = {
    price: price,
    nameProduct: nameProduct,
  };
  const [validation, SetValidation] = useState(false);
  const obj = Object.keys(validation ? item : object || {});
  const [tableValus, SetTableValus] = useState([]);
  const [rows, SetRows] = useState([]);

  useEffect(() => {
    const timer = 10;
    setTimeout(() => {
      SetTableValus(obj);
      if (tableValus.length > 0) {
        SetRows(
          (preve) =>
            (preve = tableValus.map((key) => createData(key, item[key])))
        );
      }
    }, timer);
  }, [tableValus]);

  return (
    <TableContainer
      sx={{ marginLeft: "10%", fontSize: "1rem" }}
      component={Paper}
    >
      <Table sx={{ width: "50%", height: "200px" }}>
        <TableBody>
          {rows.map((row2, key) => {
            return (
              <TableRow key={key}>
                <TableCell>{row2.itemKeys}</TableCell>
                <TableCell>{row2.itemData}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {!validation ? (
        <Button onClick={() => SetValidation(true)}>more^^^</Button>
      ) : (
        <Button onClick={() => SetValidation(false)}>close</Button>
      )}
    </TableContainer>
  );
};
export default TableInformationProducts;
