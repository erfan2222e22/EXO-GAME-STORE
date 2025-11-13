import styleComponent from "./Style-Componetn/StyleProduction";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FailToFetchDataPage from "../failToFetchDataPage/failToFetchDataPage";
const ProductionBox = () => {
  const { ProductionItems } = styleComponent;
  const navigate = useNavigate();

  let items = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Sub%20Main%20Slider%20V1%202-750x255.jpg",
      id: 1,
      jsonServer: "http://localhost:3300/pcProduct",
      title: "pcProduct",
      valid: true,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Sub%20Main%20Slider%20V1%203-750x255.jpg",
      id: 2,
      jsonServer: "http://localhost:3300/laptopProduct",
      title: "laptopProduct",
      valid: true,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Sub%20Main%20Slider%20V1%201-750x255.jpg",
      id: 3,
      valid: false,
    },
  ];

  const handelOnclick = async (e, item) => {
    e.stopPropagation();
    console.log(item);
    try {
      const dataFetch = axios.get(item.jsonServer);
      navigate(`/catgory/${item.title}`, {
        state: { product: (await dataFetch).data, pathName: item.title },
      });
    } catch (err) {
      FailToFetchDataPage(navigate);
    }
  };

  const assemblePcRoting = () => navigate(`pc_assemble`);

  return (
    <>
      {items.map((item) => {
        return (
          <ProductionItems
            key={item.id}
            sx={{ cursor: "pointer" }}
            component="img"
            src={item.img}
            onClick={
              item.valid ? (e) => handelOnclick(e, item) : assemblePcRoting
            }
          ></ProductionItems>
        );
      })}
    </>
  );
};

export default ProductionBox;
