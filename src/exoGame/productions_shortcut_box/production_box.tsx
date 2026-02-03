import styleComponent from "./Style-Componetn/StyleProduction";
import { useNavigate } from "react-router-dom";
import { Type_handelOnclick } from "./types/types_Production_Box";

const ProductionBox = () => {
  const { ProductionItems, ContinerBox } = styleComponent;
  const navigate = useNavigate();

  let ProductionItemsList = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Sub%20Main%20Slider%20V1%202-750x255.jpg",
      id: 1,
      jsonServer: "http://localhost:3300/pcProduct",
      title: "pcProduct",
      valid: true,
      filterdLinkProduct: false,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Sub%20Main%20Slider%20V1%203-750x255.jpg",
      id: 2,
      jsonServer: "http://localhost:3300/laptopProduct",
      title: "laptopProduct",
      valid: true,
      filterdLinkProduct: false,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Sub%20Main%20Slider%20V1%201-750x255.jpg",
      id: 3,
      valid: false,
    },
  ];

  const handelOnclick: Type_handelOnclick = (e, item) => {
    const { title, filterdLinkProduct, jsonServer } = item;
    navigate(`/catgory/${title}`, {
      state: {
        ProductLink: jsonServer,
        pathName: title,
        filterdLinkProduct: filterdLinkProduct,
      },
    });
  };

  const assemblePcRoting = () => navigate(`pc_assemble`);

  return (
    <ContinerBox>
      {ProductionItemsList.map((item) => {
        return (
          <ProductionItems
            key={item.id}
            as="img"
            src={item.img}
            onClick={
              item.valid ? (e) => handelOnclick(e, item) : assemblePcRoting
            }
          ></ProductionItems>
        );
      })}
    </ContinerBox>
  );
};

export default ProductionBox;
