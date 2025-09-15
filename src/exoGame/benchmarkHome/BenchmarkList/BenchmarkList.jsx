import { Box } from "@mui/material";
import styleComponents from "../../components/component-Style/StyleBenchMarklLst";

const BenchmarkList = () => {
  const BenchmarkList = [
    {
      id: 1,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/cpu_mark3-150x150.png",
      text: "Processor performance in multi-core processing",
    },
    {
      id: 2,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/cpubenchpng-150x150.png",
      text: "Processor performance in single-core processing",
    },
    {
      id: 3,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/cpu_mark3-150x150.png",
      text: "Graphics performance in 3D processing",
    },
    {
      id: 4,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/2dmarkt2-150x150.png",
      text: "Graphics performance in 2D processing",
    },
    {
      id: 5,
      img: "https://exo.ir/image/cache/catalog/New_Template/Benchmark/gpuc-150x150.png",
      text: "Graphic computing power",
    },
  ];

  const { ParentDiv, ParentListDiv, DivItems, ItemsText, HederText } =
    styleComponents;

  return (
    <ParentDiv>
      <HederText>BenchmarkList</HederText>
      <ParentListDiv>
        {BenchmarkList.map((item) => {
          return (
            <DivItems key={item.id}>
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
