
import styleComponent from "./Style-Component/StyleSlider";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import emmiter from "../../mitt/emmiter";
import { Type_sendSoloItem } from "./types/Type-FrilstSlider";

const FristSliderPage = () => {
  const {ParentBox, BoxImg } = styleComponent;
  const useref = useRef(null);
  const navigate = useNavigate();

  const handelEvent = () => {
    const element = useref.current;
    if (!element || !element.getBoundingClientRect) return;
    const getPosition = element.getBoundingClientRect();
    emmiter.emit("yPosition", { item: getPosition.y });
  };

  useEffect(() => {
    const onScroll = () => handelEvent();
    window.addEventListener("scroll", onScroll, { passive: true });
    handelEvent();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const imgsProductList = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Gaming%20Consoles%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/allConsoleProducts",
      id: 1,
      title: "allConsoleProducts",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Gaming%20System%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/pcProduct",
      id: 2,
      title: "pcProduct",
    },
    {
      img:  "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Gaming%20Monitors%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/monitorProduct",
      id: 3,
      title: "monitorProduct",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/MSI%20C%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/allMsiProducts",
      id: 4,
      title: "allMsiProducts",
    },
    {
      img:  "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Rendering%20Systems%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/rendringPcProducts",
      id: 5,
      title: "rendringPcProducts",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Accessories%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/AllAccessoriesGamingProduct",
      id: 6,
      title: "AccessoriesGaming",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sendSoloItem: Type_sendSoloItem = (JsoneServer, ItemTitle) => {
    navigate(`/catgory/${ItemTitle}`, {
      state: {
        ProductLink: JsoneServer,
        pathName: ItemTitle,
        filterdLinkProduct: false,
      },
    });
  };

  return (
    <BoxImg sx={{}}>
      <Slider {...settings}>
        {imgsProductList.map((value) => (
          <Box ref={useref} key={value.id}>
            <ImgBox
              as="img"
              src={value.img}
              onClick={() => {
                sendSoloItem(value.jsoneServer, value.title);
              }}
            />
          </Box>
        ))}
      </Slider>
    </BoxImg>
  );
};

export default FristSliderPage;
