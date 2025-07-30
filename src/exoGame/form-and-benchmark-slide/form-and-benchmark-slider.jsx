import img1 from "./img-form-benchmark/img1.jpg";
import img2 from "./img-form-benchmark/img2.jpg";
import styleComponents from "../components/component-Style/StyleBenchmarkFormSlide";
import { Link } from "react-router-dom";

const FormAndBenchmarkSlider = () => {
  const { ParentDiv, DivImg } = styleComponents;

  return (
    <ParentDiv>
      <Link to="./awdawdaw">
        <DivImg component="img" src={img1} alt="img"></DivImg>
      </Link>
      <Link to="./awdawdawd">
        <DivImg component="img" src={img2} alt="img"></DivImg>
      </Link>
    </ParentDiv>
  );
};

export default FormAndBenchmarkSlider;
