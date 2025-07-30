import img1 from "./sliderImg/img1.jpg";
import img2 from "./sliderImg/img2.jpg";
import img3 from "./sliderImg/img3.jpg";
import img4 from "./sliderImg/img4.jpg";
import img5 from "./sliderImg/img5.jpg";
import img6 from "./sliderImg/img6.jpg";
import img7 from "./sliderImg/img7.jpg";
import styleComponent from "../components/component-Style/StyleSlider";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider1 = () => {
  const { BoxImg } = styleComponent;
  let imgs = [
    { img: img1, path: "/consol", id: 1 },
    { img: img2, path: "/catgory-pc", id: 2 },
    { img: img3, path: "/manitor", id: 3 },
    { img: img4, path: "/sell-Computer-parts", id: 4 },
    { img: img5, path: "/rendering", id: 5 },
    { img: img6, path: "/amd-gpu", id: 6 },
    { img: img7, path: "/Accessories", id: 7 },
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <BoxImg>
      <Slider {...settings}>
        {imgs.map((img) => (
          <Link key={img.id} to={img.path}>
            <Box
              component="img"
              src={img.img}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          </Link>
        ))}
      </Slider>
    </BoxImg>
  );
};

export default Slider1;
