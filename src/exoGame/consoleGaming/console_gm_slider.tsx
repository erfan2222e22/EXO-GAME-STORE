import styleComponents from "./Style-Componet/StyleConsoleGm";
import { useNavigate } from "react-router-dom";
import { handelOnClickType } from "./types/Type_Console_gm_slider";

const ConsoleGamingSlider = () => {
  const { ParentDiv, BoxConsoleGm } = styleComponents;
  const navigate = useNavigate();

  const handelOnClick: handelOnClickType = (
    LinkAdrees,
    navigateLink,
    filterdLinkProduct,
  ) => {
    navigate(navigateLink, {
      state: {
        ProductLink: LinkAdrees,
        pathName: "monitorProduct",
        filterdLinkProduct: filterdLinkProduct,
      },
    });
  };

  return (
    <ParentDiv>
      <BoxConsoleGm
        as="img"
        src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%204%20(2)-1-760x380.jpg"
        onClick={() =>
          handelOnClick(
            "http://localhost:3300/PortableConsolesProduct",
            "catgory/PortableConsolesProduct",
            false,
          )
        }
      ></BoxConsoleGm>
      <BoxConsoleGm
        as="img"
        src="https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Exo%20tbnl%20cats%20403%20v1%205%20(2)-1-760x380.jpg"
        onClick={() =>
          handelOnClick(
            "http://localhost:3300/productSonyConsole?id=3",
            "catgory/productSonyConsole/",
            true,
          )
        }
      ></BoxConsoleGm>
    </ParentDiv>
  );
};

export default ConsoleGamingSlider;
