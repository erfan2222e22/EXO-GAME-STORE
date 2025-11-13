import React from "react";
import Typography from "@mui/material/Typography";
import styleComponents from "./Style-Component/StyleAboutUs";
import img from "./aboutUsImg/image_2023-06-10_12-39-02.png";
export default function AboutUs() {
  const { BoxAboutUs, BoxImg } = styleComponents;
  return (
    <>
      <BoxAboutUs>
        <Typography sx={{ fontFamily: "vazir" }} variant="h6">
          about Exo Game
        </Typography>
        <Typography variant="body3">
          Exo Online Store is a specialized retailer in the field of gaming
          equipment and goods. It started its work in 2016 with the aim of
          providing services, including sales and expert advice on hardware,
          gaming, and networking products. In this store, you can find the best
          gaming products from reputable brands with the highest quality, or you
          can contact Exo Store experts, who are skilled technical personnel in
          the field of computer and gaming, to ask your questions and discuss
          your problems. As a sales representative of many reputable gaming
          brands such as Razer, Rapoo, MSI, Asus, Logitech, etc., Exo Store
          guarantees that the original product you want will be provided to you
          as soon as possible and with the best packaging. You can stay informed
          about the latest gaming news, discounts, and products through Exo
          Store's social networks such as Telegram channel, Instagram page,
          YouTube, and Aparat.
        </Typography>
        <BoxImg component="img" src={img} alt="img"></BoxImg>
      </BoxAboutUs>
    </>
  );
}
