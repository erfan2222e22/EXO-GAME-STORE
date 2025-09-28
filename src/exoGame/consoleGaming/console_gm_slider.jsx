import styleComponents from "../components/component-Style/StyleConsoleGm.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ConsoleGamingSlider = () => {
  const { ParentDiv, BoxConsoleGm } = styleComponents;
  const navigate = useNavigate();

  const PortableConsolesFunction = () => {
    axios
      .get("http://localhost:3300/PortableConsolesProduct")
      .then((data) =>
        navigate("catgory/PortableConsolesProduct", {
          state: { product: data.data, pathName: "PortableConsolesProduct" },
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
  const PlayStaionFunction = () => {
    axios
      .get("http://localhost:3300/productSonyConsole?id=3")
      .then((data) =>
        navigate(`catgory/productSonyConsole/${data.data[0].id}`, {
          state: { item: data.data[0] },
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ParentDiv>
      <BoxConsoleGm
        component="img"
        src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%204%20(2)-1-760x380.jpg"
        onClick={PortableConsolesFunction}
      ></BoxConsoleGm>
      <BoxConsoleGm
        component="img"
        src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%205%20(2)-1-760x380.jpg"
        onClick={PlayStaionFunction}
      ></BoxConsoleGm>
    </ParentDiv>
  );
};

export default ConsoleGamingSlider;
