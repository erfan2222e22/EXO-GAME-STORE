import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";
import styleComponent from "./Style-Component/StyleCategoryPopularSlider";
import "./Style-Component/style.css";
import { useNavigate } from "react-router-dom";
import { Type_handelOnClick } from "./types/Type-catgory-popular-slider";

const CategoryPopularSlider = () => {
  const { ParentDiv, BoxImg, TextHeadr, TextImg, LinkPath } = styleComponent;
  const navigate = useNavigate();

  let ProductList = [
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-cpu-200x200.png",
      text: "cpu",
      title: "cpu-product",
      id: 1,
      jsonServer: "http://localhost:3300/cpu-product",
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-graphic-card-200x200.png",
      text: "gpu",
      title: "gpu-product",
      id: 2,
      jsonServer: "http://localhost:3300/gpu-product",
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-headset-200x200.png",
      text: "headSet",
      title: "HeadsetProduct",
      jsonServer: "http://localhost:3300/HeadsetProduct",
      id: 3,
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-keyboard-200x200.png",
      text: "keyBord",
      title: "keyBordProduct",
      id: 4,
      jsonServer: "http://localhost:3300/keyBordProduct",
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-motherboard-200x200.png",
      text: "motherBord",
      title: "motherboardProduct",
      id: 5,
      jsonServer: "http://localhost:3300/motherboardProduct",
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-mouse-200x200.png",
      text: "mouse",
      title: "mouseProduct",
      jsonServer: "http://localhost:3300/mouseProduct",
      id: 6,
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-mousepad-200x200.png",
      text: " mousePad",
      title: "mousePadProduct",
      jsonServer: "http://localhost:3300/mousePadProduct",
      id: 7,
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-ram-200x200.png",
      text: "ram",
      title: "ramProduct",
      jsonServer: "http://localhost:3300/ramProduct",
      id: 8,
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-ssd-200x200.png",
      text: "ssd",
      title: "ssdProduct",
      jsonServer: "http://localhost:3300/ssdProduct",
      id: 9,
    },
    {
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-webcam-200x200.png",
      text: "webCam",
      title: "WebCamProduct",
      jsonServer: "http://localhost:3300/WebcamProduct",
      id: 10,
    },
    {
      id: 11,
      src: "https://exo.ir/image/cache/catalog/New_Template/Categories-images/cat-button-gaming-laptop-200x200.png",
      text: "lapTop",
      title: "laptopProduct",
      jsonServer: "http://localhost:3300/laptopProduct",
    },
  ];

  let setting = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  const handelOnClick: Type_handelOnClick = (items) => {
    const { jsonServer, title } = items || {};
    navigate(`catgory/${title}`, {
      state: {
        ProductLink: jsonServer,
        pathName: title,
        filterdLinkProduct: false,
      },
    });
  };

  return (
    <ParentDiv>
      <TextHeadr>pupolar catgory </TextHeadr>
      <Slider {...setting}>
        {ProductList.map((items) => {
          return (
            <Box key={items.id}>
              <LinkPath>
                <BoxImg
                  onClick={() => handelOnClick(items)}
                  as="img"
                  src={items?.src}
                  alt="😥"
                ></BoxImg>
                <TextImg>{items.text}</TextImg>
              </LinkPath>
            </Box>
          );
        })}
      </Slider>
    </ParentDiv>
  );
};

export default CategoryPopularSlider;
