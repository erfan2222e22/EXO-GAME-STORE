import styleComponent from "./Style-Componetn/StyleProduction";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { Type_handelOnclick } from "./types/types_Production_Box";

const ProductionBox = () => {
  const { ProductionItems, ContinerBox } = styleComponent;
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

  const handelOnclick: Type_handelOnclick = async (e, item) => {
    e.stopPropagation();
    try {
      const { data: dataFetch } = await axios.get(item.jsonServer);
      navigate(`/catgory/${item.title}`, {
        state: { product: dataFetch, pathName: item.title },
      });
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  const assemblePcRoting = () => navigate(`pc_assemble`);

  return (
    <ContinerBox>
      {items.map((item) => {
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
