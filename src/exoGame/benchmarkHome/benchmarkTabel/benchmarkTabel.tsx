import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styleComponent from "./Style-Component/StyleBenchmarkTabel";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useState } from "react";
import { AxiosError } from "axios";
import { Type_originalItems_extends } from "../../catgory-items/mainCatgoryPage/types/types-Catgory";
import { Type_handelOnclick } from "./types/type-benchmark-table";
const BenchmarkTabel = () => {
  const {
    ContiberBoxDiv,
    ContiberBoxHeder,
    TabelParentContainer,
    HederTabelCell,
    BodyTabelCell,
    ShowIcon,
    ChartContiner,
    Chart,
    TableRowBody,
    BtnSortItems,
    ContainerBtns,
    Text,
  } = styleComponent;

  const location = useLocation();
  const { products } = location.state || {};
  const navigate = useNavigate();

  const [test, setTest] = useState<Type_originalItems_extends[]>(products);
  const [switchToOutOfStock, setSwitchToOutOfStock] = useState(false);
  const [switchToShowItems, setSwitchToShowItems] = useState(false);

  const handelOnclick: Type_handelOnclick = (item) => {
    const { id, title } = item;
    axios
      .get(`http://localhost:3300/${title}/${id}`)
      .then((data) => {
        const dataItems = [data.data];
        navigate(`/catgory/cpu-product`, {
          state: { product: dataItems, pathName: dataItems[0].title },
        });
      })
      .catch((err) => {
        const errStatus = err as AxiosError;
        axios.isAxiosError(err) &&
          navigate("/failedToFetch", {
            state: { errorStatus: errStatus.status },
          });
      });
  };

  const handel_Onclick_Sort_Out_Of_Stock_Products = () => {
    const FilterdItems = test.filter((fil) => {
      return fil.price !== "ناموجود";
    });
    setTest(FilterdItems);
    setSwitchToOutOfStock(true);
    setSwitchToShowItems(false);
  };

  const handel_Onclick_Show_All_Items = () => {
    setTest(products);
    setSwitchToOutOfStock(false);
    setSwitchToShowItems(true);
  };

  return (
    <ContiberBoxDiv>
      <ContiberBoxHeder>
        <Box
          component="img"
          src="https://exo.ir/catalog/view/theme/exo/image/exomark.jpg"
          alt="☠"
          sx={{ width: "100%", borderRadius: "20px" }}
        ></Box>
        <Text>
          In assessing and selecting a processor, multi-core processing
          performance is the most important criterion, indicating the
          processor's maximum capability in performing heavy calculations,
          running simulations, rendering, and so on.
        </Text>
        <ContainerBtns>
          <BtnSortItems
            as="button"
            onClick={handel_Onclick_Sort_Out_Of_Stock_Products}
            sx={{
              backgroundColor: switchToOutOfStock && "#03c03c",
              color: switchToOutOfStock && "#ffffff",
            }}
          >
            Display available products
          </BtnSortItems>
          <BtnSortItems
            as="button"
            onClick={handel_Onclick_Show_All_Items}
            sx={{
              backgroundColor: switchToShowItems && "#03c03c",
              color: switchToShowItems && "#ffffff",
            }}
          >
            Show all items
          </BtnSortItems>
        </ContainerBtns>
      </ContiberBoxHeder>

      <TabelParentContainer as={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e5f9eb" }}>
              <HederTabelCell sx={{ width: "10%" }}>productName</HederTabelCell>
              <HederTabelCell sx={{ width: "30%" }}>Chart</HederTabelCell>
              <HederTabelCell sx={{ width: "20%" }}>
                benchmarkNum
              </HederTabelCell>
              <HederTabelCell sx={{ width: "30%" }}>Price</HederTabelCell>
              <HederTabelCell></HederTabelCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {test
              .sort((a, b) => Number(b.chartNumber) - Number(a.chartNumber))
              .map((item) => {
                return (
                  <TableRowBody key={item.id}>
                    <BodyTabelCell>{item.nameProduct}</BodyTabelCell>

                    <BodyTabelCell>
                      <ChartContiner>
                        <Chart sx={{ width: `${item.chartNumber}%` }}></Chart>
                      </ChartContiner>
                    </BodyTabelCell>

                    <BodyTabelCell>
                      {String(item.benchmarkNumber)}
                    </BodyTabelCell>
                    <BodyTabelCell
                      sx={{
                        color:
                          item.price === "ناموجود" && "rgba(253, 0, 0, 0.8)",
                      }}
                    >
                      {item.price}
                    </BodyTabelCell>
                    <BodyTabelCell>
                      <Tooltip title="show" placement="top">
                        <ShowIcon
                          onClick={() => handelOnclick(item)}
                          as={ChevronRightIcon}
                        ></ShowIcon>
                      </Tooltip>
                    </BodyTabelCell>
                  </TableRowBody>
                );
              })}
          </TableBody>
        </Table>
      </TabelParentContainer>
    </ContiberBoxDiv>
  );
};
export default BenchmarkTabel;
