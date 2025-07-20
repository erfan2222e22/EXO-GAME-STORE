import { Box } from "@mui/system";
import img1 from "./img-form-benchmark/img1.jpg";
import img2 from "./img-form-benchmark/img2.jpg";
import component from "../components/component-Style/StyleBenchmarkFormSlide";
import { Link } from "react-router-dom";

const Form_and_benchmark_slider = () => {
  const { Parent_div, Div_img } = component;

  return (
    <Parent_div>
      <Link to="./awdawdaw">
        <Div_img component="img" src={img1} alt="img"></Div_img>
      </Link>
      <Link to="./awdawdawd">
        <Div_img component="img" src={img2} alt="img"></Div_img>
      </Link>
    </Parent_div>
  );
};

export default Form_and_benchmark_slider;
