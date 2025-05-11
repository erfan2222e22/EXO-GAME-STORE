import { Box, Typography } from "@mui/material";
import component from "../components/component-Style/StyleBestLaptopBrand";
import acer_img from "./best-mon-brand-img/acer.png";
import apple_img from "./best-mon-brand-img/apple.png";
import leno_img from "./best-mon-brand-img/leno.png";
import asus_img from "./best-mon-brand-img/asus.png";
import micro_img from "./best-mon-brand-img/microsoft.png";

import { Link } from "react-router-dom";

const Best_Brand_laptop = () => {
  const { Parent_Div, Text_Head, Box_img, Text_items, Link_style } = component;
  return (
    <Box>
      <Text_Head>بهترین برندهای لپتاپ دنیا</Text_Head>
      <Parent_Div>
        <Box>
          <Link_style to="">
            <Box_img component="img" src={acer_img} alt="img"></Box_img>
            <Text_items> Acer</Text_items>
          </Link_style>
        </Box>

        <Box>
          <Link_style to="">
            <Box_img component="img" src={micro_img} alt="img"></Box_img>
            <Text_items>Microsoft</Text_items>
          </Link_style>
        </Box>

        <Box>
          <Link_style to="">
            <Box_img component="img" src={leno_img} alt="img"></Box_img>
            <Text_items> Lenovo</Text_items>
          </Link_style>
        </Box>

        <Box>
          <Link_style to="">
            <Box_img component="img" src={apple_img} alt="img"></Box_img>
            <Text_items>Apple</Text_items>
          </Link_style>
        </Box>

        <Box>
          <Link_style to="">
            <Box_img component="img" src={asus_img} alt="img"></Box_img>
            <Text_items>Asus</Text_items>
          </Link_style>
        </Box>
      </Parent_Div>
    </Box>
  );
};
export default Best_Brand_laptop;
