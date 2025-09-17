import { Box } from "@mui/material";
import styleComponents from "../../components/component-Style/StyleBenchMarklLst";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BenchmarkList = () => {
  const { ParentDiv, ParentListDiv, DivItems, ItemsText, HederText } =
    styleComponents;

  const navigate = useNavigate();


  const BenchmarkList = [
    {
      id: 1,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/cpu_mark3-150x150.png",
      text: "Processor performance in multi-core processing",
      route: "passmark-multi-core",
      jsoneServer: "http://localhost:3300/cpu-product",
    },
    {
      id: 2,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/cpubenchpng-150x150.png",
      text: "Processor performance in single-core processing",
      route: "...",
      jsoneServer: "",
    },
    {
      id: 3,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/cpu_mark3-150x150.png",
      text: "Graphics performance in 3D processing",
      route: "...",
      jsoneServer: "",
    },
    {
      id: 4,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/2dmarkt2-150x150.png",
      text: "Graphics performance in 2D processing",
      route: "...",
      jsoneServer: "",
    },
    {
      id: 5,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/gpuc-150x150.png",
      text: "Graphic computing power",
      route: "...",
      jsoneServer: "",
    },
  ];

  const handelOnclick = (item) => {
    axios
      .get(item.jsoneServer)
      .then((data) => {
        navigate(`/benchmark_Home/${item.route}`, {
          state: { products: data.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ParentDiv>
      <HederText>BenchmarkList</HederText>
      <ParentListDiv>
        {BenchmarkList.map((item) => {
          return (
            <DivItems key={item.id} onClick={() => handelOnclick(item)}>
              <Box component="img" src={item.img} alt="☠"></Box>
              <ItemsText component="h6">{item.text}</ItemsText>
            </DivItems>
          );
        })}
      </ParentListDiv>
    </ParentDiv>
  );
};
export default BenchmarkList;
