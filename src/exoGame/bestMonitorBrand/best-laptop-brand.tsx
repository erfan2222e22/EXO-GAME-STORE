import { Box } from "@mui/material";
import styleComponent from "./Style-Component/StyleBestLaptopBrand";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import {
  Types_itmes,
  Types_BestBrandLaptop,
} from "./types/types_BestBrandMonitor";
const BestBrandLaptop = () => {
  const { ParentDiv, TextHead, BoxImg, TextItems } = styleComponent;
  const navigate = useNavigate();
  const itmesLaotop: Types_itmes[] = [
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Acer-400x400.png",
      text: "Acer",
      id: 1,
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Microsoft-400x400.png",
      text: "Microsoft",
      id: 2,
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Leno-400x400.png",
      text: "Lenovo",
      id: 3,
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Apple-400x400.png",
      text: "Apple",
      id: 4,
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Asus-400x400.png",
      text: "Asus",
      id: 5,
    },
  ];

  const handeloOnclick: Types_BestBrandLaptop = (item) => {
    const ProductsJsonLink = `http://localhost:3300/laptopProduct?Manufacturers=${item.text}`;
    axios
      .get(ProductsJsonLink)
      .then((data) => {
        navigate(`catgory/${item.text}`, {
          state: { product: data.data, pathName: "laptopProduct" },
        });
      })
      .catch((err) => {
        const errStatus = err as AxiosError;
        axios.isAxiosError(err) &&
          navigate("/failedToFetch", {
            state: { errorStatus: errStatus.status },
          });
      });
  };

  return (
    <Box>
      <TextHead>best laptop brands</TextHead>
      <ParentDiv>
        {itmesLaotop.map((item) => {
          return (
            <Box key={item.id}>
              <BoxImg
                onClick={() => handeloOnclick(item)}
                src={item.imgs}
                alt="☹"
              ></BoxImg>
              <TextItems>{item.text}</TextItems>
            </Box>
          );
        })}
      </ParentDiv>
    </Box>
  );
};
export default BestBrandLaptop;
