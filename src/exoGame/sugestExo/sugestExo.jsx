import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sugest.css";
import styleComponent from "../components/component-Style/StyleSugestExo";
import { Typography } from "@mui/material";

const SugestExo = ({ titel, array }) => {
  let settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const { BoxSugest, BoxSugestItemstyled } = styleComponent;
  return (
    <BoxSugest>
      <Typography
        sx={{
          position: "relative",
          left: "700px",
          bottom: "2px",
          fontFamily: "vazir",
        }}
        variant="body3"
      >
        {titel}
      </Typography>
      <Slider {...settings}>
        {array.map((item, index) => {
          return <BoxSugestItemstyled key={index}>{item}</BoxSugestItemstyled>;
        })}
      </Slider>
    </BoxSugest>
  );
};

export default SugestExo;
