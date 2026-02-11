import styleComponent from "./Style-Componetn/StyleProduction";
import { useNavigate } from "react-router-dom";
import { Type_handelOnclick } from "./types/types_Production_Box";

const ProductionBox = () => {
  const { ProductionItems, ContinerBox, ImgContiner } = styleComponent;
  const navigate = useNavigate();

  const ProductionItemsList = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/Sub%20Main%20Slider%20mobile%20V1%20copy-562x225.jpg",
      id: 1,
      valid: false,
      gridArea: "1 / 1 / 3 / 6",
      allItems: "center",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/exo-subsub-main-slider-mobile-v2-1-300x225.webp",
      id: 2,
      jsonServer: " http://localhost:3300/pcProduct",
      title: "pcProduct",
      filterdLinkProduct: false,
      valid: true,
      gridArea: "3 / 1 / 5 / 3",
      allItems: "end",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/SubSub%20Main%20Slider%20mobile%20V1%202-300x225.jpg",
      id: 3,
      title: "laptopProduct",
      jsonServer: "http://localhost:3300/laptopProduct",
      filterdLinkProduct: false,
      valid: true,
      gridArea: "5 / 1 / 7 / 3",
      allItems: "end",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/exo-subsub-main-slider-mobile-v2-5-300x225.png",
      id: 4,
      title: "rendringPcProducts",
      jsonServer: "http://localhost:3300/rendringPcProducts",
      filterdLinkProduct: false,
      valid: true,
      gridArea: "3 / 3 / 5 / 5",
      allItems: "start",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/exo-subsub-main-slider-mobile-v2-3-300x225.png",
      id: 5,
      title: "productSonyConsole",
      jsonServer: "http://localhost:3300/productSonyConsole",
      filterdLinkProduct: false,
      valid: true,
      gridArea: "5 / 3 / 7 / 5",
      allItems: "start",
    },
  ];

  const handelOnclick: Type_handelOnclick = (item) => {
    const { title, filterdLinkProduct, jsonServer } = item;
    navigate(`/catgory/${title}`, {
      state: {
        ProductLink: jsonServer,
        pathName: title,
        filterdLinkProduct: filterdLinkProduct,
      },
    });
  };

  return (
    <ContinerBox>
      {ProductionItemsList.map((item) => {
        return (
          <ImgContiner
            sx={{ gridArea: item.gridArea, justifyContent: item.allItems }}
          >
            <ProductionItems
              key={item.id}
              as="img"
              src={item.img}
              onClick={
                item.valid
                  ? () => handelOnclick(item)
                  : () => navigate(`pc_assemble`)
              }
            ></ProductionItems>
          </ImgContiner>
        );
      })}
    </ContinerBox>
  );
};

export default ProductionBox;
