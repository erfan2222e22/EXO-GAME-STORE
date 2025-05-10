import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";
import "./sugest.css";
import component from "../components/component-Style/StyleSugestExo";
import { Typography } from "@mui/material";

function SugestExo({ titel, array }) {
  let settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const { Box_Sugest, Box_Sugest_Itemstyled } = component;
  return (
    <Box_Sugest>
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
          return (
            <Box_Sugest_Itemstyled key={index}>{item}</Box_Sugest_Itemstyled>
          );
        })}
      </Slider>
    </Box_Sugest>
  );
}

export default SugestExo;
