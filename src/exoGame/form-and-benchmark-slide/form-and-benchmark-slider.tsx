import styleComponents from "./Style-Component/StyleBenchmarkFormSlide";
import { Link } from "react-router-dom";

const FormAndBenchmarkSlider = () => {
  const { ParentDiv, DivImg } = styleComponents;

  const items = [
    {
      id: 1,
      to: "./benchmark_Home",
      imgSrc:
        "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%201%20(2)-2-760x380.jpg",
    },
    {
      id: 2,
      to: "./information_enquiry",
      imgSrc:
        "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%202%20(2)-1-760x380.jpg",
    },
  ];

  return (
    <ParentDiv>
      {items.map((item) => {
        return (
          <Link to={item.to} key={item.id}>
            <DivImg as="img" src={item.imgSrc} alt="img"></DivImg>
          </Link>
        );
      })}
    </ParentDiv>
  );
};

export default FormAndBenchmarkSlider;
