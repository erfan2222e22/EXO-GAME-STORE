import styleComponent from "./Style-Component/StyleSlider";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style-Component/slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect } from "react";
import FailToFetchDataPage from "../failToFetchDataPage/failToFetchDataPage";
import emmiter from "../../mitt/emmiter";
import {
  Type_sendAfewItems,
  Type_sendSoloItem,
  Type_NaviUse,
} from "./types/Type-FrilstSlider";

const FristSliderPage = () => {
  const { ParentBox, ImgBox } = styleComponent;
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

  const imgsList = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Gaming%20Consoles%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/allConsoleProductsLinks",
      id: 1,
      solorItems: false,
      jsonSetting: "http://localhost:3300/allConsoleSetting",
      title: "allConsoleProducts",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Gaming%20System%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/pcProduct",
      id: 2,
      solorItems: true,
      jsonSetting: null,
      title: "pcProduct",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Gaming%20Monitors%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/monitorProduct",
      id: 3,
      solorItems: true,
      jsonSetting: null,
      title: "monitorProduct",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/MSI%20C%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/allMsiProductsLinks",
      jsonSetting: "http://localhost:3300/allMsiProductsSetting",
      id: 4,
      solorItems: false,
      title: "allMsiProducts",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Rendering%20Systems%20slider%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/rendringPcProducts",
      id: 5,
      solorItems: true,
      jsonSetting: null,
      title: "rendringPcProducts",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Slider/Accessories%20pc%20v1%20copy-1600x400.jpg",
      jsoneServer: "http://localhost:3300/AccessoriesGaming",
      id: 7,
      solorItems: false,
      jsonSetting: "http://localhost:3300/AccessoriesGamingSetting",
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

  const sendSoloItem: Type_sendSoloItem = async (JsoneServer, ItemTitle) => {
    try {
      const GetItems = axios.get(JsoneServer);
      const ReciveItems = (await GetItems).data;
      NaviUse(ReciveItems, ItemTitle);
    } catch (err) {
      FailToFetchDataPage();
    }
  };

  const sendAfewItems: Type_sendAfewItems = async (
    JsoneServer,
    ItemTitle,
    JsoneStting
  ) => {
    try {
      const { data: urls } = await axios.get(JsoneServer);
      const response = await Promise.all(
        urls.map((data: string) =>
          axios.get(data).then((values) => values.data)
        )
      );
      const flatedItems = response.flat();
      let counterId = 0;
      flatedItems.forEach((value) => {
        counterId += 1;
        value.productSetting = JsoneStting;
        value.id = counterId;
      });
      NaviUse(flatedItems, ItemTitle);
    } catch (err) {
      console.log(err);
    }
  };

  const NaviUse: Type_NaviUse = (ItemsProducts, ItemTitle) => {
    navigate(`/catgory/${ItemTitle}`, {
      state: { product: ItemsProducts, pathName: ItemTitle },
    });
  };

  return (
    <ParentBox>
      <Slider {...settings}>
        {imgsList.map((value) => (
          <Box ref={useref} key={value.id}>
            <ImgBox
              as="img"
              src={value.img}
              onClick={() => {
                value.solorItems
                  ? sendSoloItem(value.jsoneServer, value.title)
                  : sendAfewItems(
                      value.jsoneServer,
                      value.title,
                      value.jsonSetting
                    );
              }}
            />
          </Box>
        ))}
      </Slider>
    </ParentBox>
  );
};

export default FristSliderPage;
