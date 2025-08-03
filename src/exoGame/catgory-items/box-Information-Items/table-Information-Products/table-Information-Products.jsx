import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const createData = (itemKeys, itemData) => {
  return { itemKeys, itemData };
};

const TableInformationProducts = ({ ...item }) => {
  const object = {
    //defualt items
    price: "",
    nameProduct: "",
    company: "",
    Ramcapacity: "",
  };
  const [test, Settest] = useState(false);
  const obj = Object.keys(test ? item : object || {});
  const [tableValus, SetTableValus] = useState([]);
  const [rows, SetRows] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      SetTableValus(obj);
      if (tableValus.length > 0) {
        SetRows(
          (preve) =>
            (preve = tableValus.map((key) => createData(key, item[key])))
        );
      }
    }, 10);
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
      {!test ? (
        <Button onClick={() => Settest(true)}>more^^^</Button>
      ) : (
        <Button onClick={() => Settest(false)}>close</Button>
      )}
    </TableContainer>
  );
};
export default TableInformationProducts;
