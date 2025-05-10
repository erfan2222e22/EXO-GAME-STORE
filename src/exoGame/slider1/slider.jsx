import img1 from "./sliderImg/img1.jpg";
import img2 from "./sliderImg/img2.jpg";
import img3 from "./sliderImg/img3.jpg";
import img4 from "./sliderImg/img4.jpg";
import img5 from "./sliderImg/img5.jpg";
import img6 from "./sliderImg/img6.jpg";
import img7 from "./sliderImg/img7.jpg";
import component from "../components/component-Style/StyleSlider";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { Link, useFetcher } from "react-router-dom";
import "./slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Slider1() {
  const { Box_Img } = component;
  const [imgsAdress, setImgsAdress] = useState([]);
  let imgs = [
    { img: img1, path: "/consol", id: 1 },
    { img: img2, path: "/catgory-pc", id: 2 },
    { img: img3, path: "/manitor", id: 3 },
    { img: img4, path: "/sell-Computer-parts", id: 4 },
    { img: img5, path: "/rendering", id: 5 },
    { img: img6, path: "/amd-gpu", id: 6 },
    { img: img7, path: "/Accessories", id: 7 },
  ];

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:5000/test");
    const data = response.data.massage;
    console.log(data);
  };

  useEffect(() => {
    // fetchApi();
  }, []);

  var settings = {
    //customis slider
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <Box_Img>
      <Slider {...settings}>
        {imgs.map((img) => {
          return (
            <Link key={img.id} to={img.path}>
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    overflowY: "hidden",
                    cursor: "pointer",
                  }}
                  component="img"
                  src={img.img}
                ></Box>
              </Box>
            </Link>
          );
        })}
      </Slider>
    </Box_Img>
  );
}
