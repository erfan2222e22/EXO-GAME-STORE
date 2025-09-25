import { Box } from "@mui/material";
import styleComponent from "../components/component-Style/StyleBestLaptopBrand";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BestBrandLaptop = () => {
  const { ParentDiv, TextHead, BoxImg, TextItems } = styleComponent;
  const navigate = useNavigate();

  const itmes = [
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

  const handeloOnclick = (item) => {
    const ProductsJsonLink = `http://localhost:3300/laptopProduct?Manufacturers=${item.text}`;

    axios
      .get(ProductsJsonLink)
      .then((data) => {
        navigate(`catgory/${item.text}`, {
          state: { product: data.data, pathName: "laptopProduct" },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <TextHead>best laptop brands</TextHead>
      <ParentDiv>
        {itmes.map((item) => {
          return (
            <Box key={item.id}>
              <BoxImg
                onClick={() => handeloOnclick(item)}
                component="img"
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
