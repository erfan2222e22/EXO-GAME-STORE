import styleComponents from "./Style-Componet/StyleConsoleGm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FailToFetchDataPage from "../failToFetchDataPage/failToFetchDataPage";
import { handelOnClickType } from "./types/Type_Console_gm_slider";

const ConsoleGamingSlider = () => {
  const { ParentDiv, BoxConsoleGm } = styleComponents;
  const navigate = useNavigate();

  const handelOnClick: handelOnClickType = async (LinkAdrees, navigateLink) => {
    try {
      const { data: GetData } = await axios.get(LinkAdrees);
      if (Array.isArray(GetData)) {
        navigate(navigateLink, {
          state: { product: GetData, pathName: "PortableConsolesProduct" },
        });
      } else {
        navigate(`${navigateLink}${GetData[0].id}`, {
          state: { itemProduct: GetData[0] },
        });
      }
    } catch (err) {
      FailToFetchDataPage();
    }
  };

  return (
    <ParentDiv>
      <BoxConsoleGm
        as="img"
        src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%204%20(2)-1-760x380.jpg"
        onClick={() =>
          handelOnClick(
            "http://localhost:3300/PortableConsolesProduct",
            "catgory/PortableConsolesProduct"
          )
        }
      ></BoxConsoleGm>
      <BoxConsoleGm
        as="img"
        src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%205%20(2)-1-760x380.jpg"
        onClick={() =>
          handelOnClick(
            "http://localhost:3300/productSonyConsole?id=3",
            "catgory/productSonyConsole/"
          )
        }
      ></BoxConsoleGm>
    </ParentDiv>
  );
};

export default ConsoleGamingSlider;
