import img1 from "./sliderImg/img1.jpg";
import img2 from "./sliderImg/img2.jpg";
import img3 from "./sliderImg/img3.jpg";
import img4 from "./sliderImg/img4.jpg";
import img5 from "./sliderImg/img5.jpg";
import img6 from "./sliderImg/img6.jpg";
import img7 from "./sliderImg/img7.jpg";
import styleComponent from "./Style-Component/StyleSlider";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style-Component/slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect, useState } from "react";
import FailToFetchDataPage from "../failToFetchDataPage/failToFetchDataPage";
import emmiter from "../../mitt/emmiter";
const Slider1 = () => {
  const { BoxImg } = styleComponent;
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

  let imgsList = [
    {
      img: img1,
      jsoneServer: "http://localhost:3300/allConsoleProductsLinks",
      id: 1,
      solorItems: false,
      jsonSetting: "http://localhost:3300/allConsoleSetting",
      title: "allConsoleProducts",
    },
    {
      img: img2,
      jsoneServer: "http://localhost:3300/pcProduct",
      id: 2,
      solorItems: true,
      jsonSetting: null,
      title: "pcProduct",
    },
    {
      img: img3,
      jsoneServer: "http://localhost:3300/monitorProduct",
      id: 3,
      solorItems: true,
      jsonSetting: null,
      title: "monitorProduct",
    },
    {
      img: img4,
      jsoneServer: "http://localhost:3300/allMsiProductsLinks",
      jsonSetting: "http://localhost:3300/allMsiProductsSetting",
      id: 4,
      solorItems: false,
      title: "allMsiProducts",
    },
    {
      img: img5,
      jsoneServer: "http://localhost:3300/rendringPcProducts",
      id: 5,
      solorItems: true,
      jsonSetting: null,
      title: "rendringPcProducts",
    },
    {
      img: img6,
      jsoneServer: "http://localhost:3300/allAmdProductsLink",
      id: 6,
      solorItems: false,
      jsonSetting: "http://localhost:3300/allAmdProductsSetting",
      title: "allAmdProductsLink",
    },
    {
      img: img7,
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

  const sendSoloItem = async (e, JsoneServer, ItemTitle) => {
    try {
      const GetItems = axios.get(JsoneServer);
      const ReciveItems = (await GetItems).data;
      navigate(`/catgory/${ItemTitle}`, {
        state: { product: ReciveItems, pathName: ItemTitle },
      });
    } catch (err) {
      FailToFetchDataPage(navigate);
    }
  };

  const sendAfewItems = async (e, JsoneServer, ItemTitle, JsoneStting) => {
    try {
      const { data: urls } = await axios.get(JsoneServer);
      const response = await Promise.all(
        urls.map((data) => axios.get(data).then((values) => values.data))
      );

      const flatedItems = response.flat();
      flatedItems.forEach((value) => {
        value.productSetting = JsoneStting;
      });
      NaviUse(flatedItems, ItemTitle);
    } catch (err) {
      FailToFetchDataPage(navigate);
    }
  };

  const NaviUse = (ItemsProducts, ItemTitle) => {
    navigate(`/catgory/${ItemTitle}`, {
      state: { product: ItemsProducts, pathName: ItemTitle },
    });
  };

  return (
    <BoxImg sx={{}}>
      <Slider {...settings}>
        {imgsList.map((value) => (
          <Box ref={useref}>
            <Box
              component="img"
              src={value.img}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                value.solorItems
                  ? sendSoloItem(e, value.jsoneServer, value.title)
                  : sendAfewItems(
                      e,
                      value.jsoneServer,
                      value.title,
                      value.jsonSetting
                    );
              }}
            />
          </Box>
        ))}
      </Slider>
    </BoxImg>
  );
};

export default Slider1;
