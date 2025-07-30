import { Box } from "@mui/material";
import styleComponent from "../components/component-Style/StyleBestLaptopBrand";
import acer_img from "./best-mon-brand-img/acer.png";
import apple_img from "./best-mon-brand-img/apple.png";
import leno_img from "./best-mon-brand-img/leno.png";
import asus_img from "./best-mon-brand-img/asus.png";
import micro_img from "./best-mon-brand-img/microsoft.png";

const BestBrandLaptop = () => {
  const { ParentDiv, TextHead, BoxImg, TextItems, LinkStyle } = styleComponent;

  const itmes = [
    { imgs: acer_img, text: "Acer", path: "./slame", id: 1 },
    { imgs: micro_img, text: "Microsoft", path: "./slame", id: 2 },
    { imgs: leno_img, text: "Lenovo", path: "./slame", id: 3 },
    { imgs: apple_img, text: "Apple", path: "./slame", id: 4 },
    { imgs: asus_img, text: "Asus", path: "./slame", id: 5 },
  ];

  return (
    <Box>
      <TextHead>بهترین برندهای لپتاپ دنیا</TextHead>
      <ParentDiv>
        {itmes.map((item) => {
          return (
            <Box key={item.id}>
              <LinkStyle to={item.path}>
                <BoxImg component="img" src={item.imgs} alt="img"></BoxImg>
                <TextItems>{item.text}</TextItems>
              </LinkStyle>
            </Box>
          );
        })}
      </ParentDiv>
    </Box>
  );
};
export default BestBrandLaptop;
