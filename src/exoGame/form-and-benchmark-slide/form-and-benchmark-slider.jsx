import styleComponents from "./Style-Component/StyleBenchmarkFormSlide";
import { Link } from "react-router-dom";

const FormAndBenchmarkSlider = () => {
  const { ParentDiv, DivImg } = styleComponents;

  return (
    <ParentDiv>
      <Link to="./benchmark_Home">
        <DivImg
          component="img"
          src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%201%20(2)-2-760x380.jpg"
          alt="img"
        ></DivImg>
      </Link>
      <Link to="./information_enquiry">
        <DivImg
          component="img"
          src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%202%20(2)-1-760x380.jpg"
          alt="img"
        ></DivImg>
      </Link>
    </ParentDiv>
  );
};

export default FormAndBenchmarkSlider;
