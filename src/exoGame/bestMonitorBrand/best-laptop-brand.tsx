import styleComponent from "./Style-Component/StyleBestLaptopBrand";

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Types_itmes,
  Types_BestBrandLaptop,
} from "./types/types_BestBrandMonitor";

const BestBrandLaptop = () => {
  const { ParentDiv, TextHead, BoxImg, TextItems, DivImgAndText } =
    styleComponent;

  const navigate = useNavigate();
  const itmesLaotop: Types_itmes[] = [
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Acer-400x400.png",
      id: 1,
      text: "Acer",
      gridArea: "1 / 1 / 3 / 4",
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Microsoft-400x400.png",
      text: "Microsoft",
      id: 2,
      gridArea: "1 / 4 / 3 / 7",
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Leno-400x400.png",
      text: "Lenovo",
      id: 3,
      gridArea: "3 / 1 / 5 / 4",
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Apple-400x400.png",
      text: "Apple",
      id: 4,
      gridArea: "3 / 4 / 5 / 7",
    },
    {
      imgs: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20Asus-400x400.png",
      text: "Asus",
      id: 5,
      gridArea: "5 / 1 / 7 / 7",
    },
  ];

  const handeloOnclick: Types_BestBrandLaptop = (item) => {
    const ProductsJsonLink = `http://localhost:3300/laptopProduct?Manufacturers=${item.text}`;
    navigate(`catgory/${item.text}`, {
      state: {
        ProductLink: ProductsJsonLink,
        pathName: "laptopProduct",
        filterdLinkProduct: true,
      },
    });
  };

  return (
    <Box>
      <TextHead>best laptop brands</TextHead>
      <ParentDiv>
        {itmesLaotop.map((item) => {
          return (
            <DivImgAndText key={item.id} sx={{ gridArea: item.gridArea }}>
              <BoxImg
                onClick={() => handeloOnclick(item)}
                src={item.imgs}
                as="img"
                alt="☹"
              ></BoxImg>
              <TextItems>{item.text}</TextItems>
            </DivImgAndText>
          );
        })}
      </ParentDiv>
    </Box>
  );
};
export default BestBrandLaptop;
