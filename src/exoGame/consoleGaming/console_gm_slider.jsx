import styleComponents from "./Style-Componet/StyleConsoleGm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FailToFetchDataPage from "../failToFetchDataPage/failToFetchDataPage";
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
        FailToFetchDataPage(navigate);
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
        FailToFetchDataPage(navigate);
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
