import { Box, Typography } from "@mui/material";
import component from "../components/component-Style/StyleBestLaptopBrand";
import acer_img from "./best-mon-brand-img/acer.png";
import apple_img from "./best-mon-brand-img/apple.png";
import leno_img from "./best-mon-brand-img/leno.png";
import asus_img from "./best-mon-brand-img/asus.png";
import micro_img from "./best-mon-brand-img/microsoft.png";

const Best_Brand_laptop = () => {
  const { Parent_Div, Text_Head, Box_img, Text_items, Link_style } = component;

  const itmes = [
    { imgs: acer_img, text: "Acer", path: "./slame", id: 1 },
    { imgs: micro_img, text: "Microsoft", path: "./slame", id: 2 },
    { imgs: leno_img, text: "Lenovo", path: "./slame", id: 3 },
    { imgs: apple_img, text: "Apple", path: "./slame", id: 4 },
    { imgs: asus_img, text: "Asus", path: "./slame", id: 5 },
  ];

  return (
    <Box>
      <Text_Head>بهترین برندهای لپتاپ دنیا</Text_Head>
      <Parent_Div>
        {itmes.map((item) => {
          return (
            <Box key={item.id}>
              <Link_style to={item.path}>
                <Box_img component="img" src={item.imgs} alt="img"></Box_img>
                <Text_items>{item.text}</Text_items>
              </Link_style>
            </Box>
          );
        })}
      </Parent_Div>
    </Box>
  );
};
export default Best_Brand_laptop;
