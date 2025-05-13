import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";
import imgCpu from "./img-pupolar-catgory/cpu-img.png";
import imgGpu from "./img-pupolar-catgory/gpu-img.png";
import imgHeadset from "./img-pupolar-catgory/headset-img.png";
import imgKeybord from "./img-pupolar-catgory/keybord-img.png";
import imgMotherbord from "./img-pupolar-catgory/motherbord-img.png";
import imgMouse from "./img-pupolar-catgory/mouse-img.png";
import imgMousepad from "./img-pupolar-catgory/mouspad-img.png";
import imgRam from "./img-pupolar-catgory/ram-img.png";
import imgSsd from "./img-pupolar-catgory/ssd-img.png";
import imgWebcome from "./img-pupolar-catgory/webcome-img.png";
import component from "../components/component-Style/StyleCategoryPopularSlider";
import "./style.css";

const CategoryPopularSlider = () => {
  const { ParentDiv, BoxImg, TextHeadr, TextImg, Link_path } = component;

  let imgs = [
    { src: imgCpu, text: "cpu", path: "./awd", id: 1 },
    { src: imgGpu, text: "کارت گرافیک ", path: "./awd", id: 2 },
    { src: imgHeadset, text: "هدست", path: "./awd", id: 3 },
    { src: imgKeybord, text: "کیبورد ", path: "./awd", id: 4 },
    { src: imgMotherbord, text: "مادربرد ", path: "./awd", id: 5 },
    { src: imgMouse, text: "موس", path: "./awd", id: 6 },
    { src: imgMousepad, text: "موس  پد ", path: "./awd", id: 7 },
    { src: imgRam, text: "رام", path: "./awd", id: 8 },
    { src: imgSsd, text: "ssd", path: "./awd", id: 9 },
    { src: imgWebcome, text: "وب کم", path: "./awd", id: 10 },
  ];

  let setting = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <ParentDiv>
      <TextHeadr>محبوب‌ترین دسته‌بندی‌ها </TextHeadr>
      <Slider {...setting}>
        {imgs.map((items) => {
          return (
            <Box key={items.id}>
              <Link_path to={items.path}>
                <BoxImg component="img" src={items.src}></BoxImg>
                <TextImg>{items.text}</TextImg>
              </Link_path>
            </Box>
          );
        })}
      </Slider>
    </ParentDiv>
  );
};

export default CategoryPopularSlider;
