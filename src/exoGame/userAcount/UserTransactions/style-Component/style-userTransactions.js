import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TableCell, TableRow } from "@mui/material";

const TableBodyBox = styled(TableRow)({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
});

const TableRowBox = styled(TableRow)({
  backgroundColor: "#e5f9eb",
  width: "100%",
  borderBottom: "1px solid #dee2e6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
});

const DefaultTableCell = styled(TableCell)({
  width: "33%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
});

const CenterTableCell = styled(DefaultTableCell)({
  borderRight: "1px solid #dee2e6",
  borderLeft: "1px solid #dee2e6",
});

const HederParntDiv = styled(Box)({
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#d4f7df",
  alignItems: "center",
  width: "100%",
  height: "10%",
  borderRadius: "7px",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});
const HderContinerDiv = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10%",
  width: "35%",
  textAlign: "center",
});
const BoxTitle = styled(Box)({
  fontSize: "1.1rem",
  color: "#3c3c3c",
});

const styleComponent = {
  TableRowBox,
  HederParntDiv,
  HderContinerDiv,
  BoxTitle,
  TableRow,
  DefaultTableCell,
  CenterTableCell,
  TableBodyBox,
};

export default styleComponent;
