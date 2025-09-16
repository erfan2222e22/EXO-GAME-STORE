import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styleComponent from "../../components/component-Style/StyleBenchmarkTabel";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BenchmarkTabel = () => {
  const {
    TabelParentContainer,
    HederTabelCell,
    BodyTabelCell,
    ShowIcon,
    ChartContiner,
    Chart,
    TableRowBody,
  } = styleComponent;

  const location = useLocation();
  const { products } = location.state || {};
  const navigate = useNavigate();

  const handelOnclick = (item) => {
    axios
      .get(`http://localhost:3300/${item.title}/${item.id}`)
      .then((data) => {
        const dataItems = [data.data];
        navigate(`/catgory/cpu-product`, {
          state: { product: dataItems, pathName: dataItems[0].title },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TabelParentContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#e5f9eb" }}>
            <HederTabelCell sx={{ width: "10%" }}>productName</HederTabelCell>
            <HederTabelCell sx={{ width: "30%" }}>Chart</HederTabelCell>
            <HederTabelCell sx={{ width: "20%" }}>benchmarkNum</HederTabelCell>
            <HederTabelCell sx={{ width: "30%" }}>Price</HederTabelCell>
            <HederTabelCell></HederTabelCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => {
            return (
              <TableRowBody key={item.id}>
                <BodyTabelCell>{item.nameProduct}</BodyTabelCell>

                <BodyTabelCell>
                  <ChartContiner>
                    <Chart sx={{ width: `${item.chartNumber}%` }}></Chart>
                  </ChartContiner>
                </BodyTabelCell>

                <BodyTabelCell>{item.benchmarkNumber}</BodyTabelCell>
                <BodyTabelCell>{item.price}</BodyTabelCell>
                <BodyTabelCell>
                  <Tooltip title="show" placement="top">
                    <ShowIcon
                      onClick={() => handelOnclick(item)}
                      component={ChevronRightIcon}
                    ></ShowIcon>
                  </Tooltip>
                </BodyTabelCell>
              </TableRowBody>
            );
          })}
        </TableBody>
      </Table>
    </TabelParentContainer>
  );
};
export default BenchmarkTabel;
