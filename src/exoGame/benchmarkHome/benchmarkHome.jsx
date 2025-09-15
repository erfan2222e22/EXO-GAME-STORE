import BenchmarkHederImg from "./benchmarkHederImg/benchmakHederImg";
import BenchmarkList from "./BenchmarkList/BenchmarkList";
import BenchMarkFoter from "./benchmarkFoter/benchmarkFoter";
import styleComponents from "../components/component-Style/StyleBenchmarkHome";
const BenchmarkHome = () => {
  const { ParentDiv } = styleComponents;

  return (
    <ParentDiv>
      <BenchmarkHederImg />
      <BenchmarkList />
      <BenchMarkFoter />
    </ParentDiv>
  );
};

export default BenchmarkHome;
