import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const ContiberBoxDiv = styled(TableContainer)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "20px",
  height: "100%",
});
const ContiberBoxHeder = styled(TableContainer)({
  position: "relative",
  top: "200px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

const TabelParentContainer = styled(TableContainer)({
  border: "1px solid #dee2e6",
  borderRadius: "1rem",
  width: "95%",
  margin: "0 auto",
  marginTop: "200px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});

const HederTabelCell = styled(TableCell)({
  borderLeft: "1px solid #dee2e6",
  borderRight: "1px solid #dee2e6",
  color: "#3c3c3c",
  textAlign: "center",
});
const BodyTabelCell = styled(TableCell)({
  borderLeft: "1px solid #dee2e6",
  borderRight: "1px solid #dee2e6",
  color: "#3c3c3c",
  textAlign: "center",
});
const ShowIcon = styled(Box)({
  width: "80%",
  height: "80%",
  border: "1px solid #818181",
  color: "#3c3c3c",
  borderRadius: "5px",
  margin: "0 auto",
  cursor: "pointer  ",
  "&:hover": { color: "#03c03c" },
});

const ChartContiner = styled(Box)({
  width: "98%",
  height: "15px",
  backgroundColor: "#dee2e6",
  borderRadius: "20px",
  boxShadow:
    " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
});
const Chart = styled(Box)({
  height: "15px",
  backgroundColor: "#03c03c",
  borderRadius: "20px",
});
const TableRowBody = styled(TableRow)({
  "&:hover": { backgroundColor: "#25242413" },
});

const BtnSortItems = styled(Box)({
  backgroundColor: "#e3e1e1",
  borderRadius: "5px",
  padding: "3px",
  color: "#212529",
  border: "none",
});

const ContainerBtns = styled(Box)({
  display: "flex",
  gap: "20px",
});

const Text = styled(Box)({
  alignItems: "stretch",
  textAlign: "center",
});

const styleComponents = {
  ContiberBoxDiv,
  TabelParentContainer,
  HederTabelCell,
  BodyTabelCell,
  ShowIcon,
  ChartContiner,
  Chart,
  TableRowBody,
  BtnSortItems,
  ContainerBtns,
  ContiberBoxHeder,
  Text,
};
export default styleComponents;
