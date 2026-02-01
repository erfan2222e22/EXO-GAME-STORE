import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style-Component/sugest.css";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styleComponent from "./Style-Component/StyleSugestExoSlider";
import { Component_Props, Type_handelOnClick } from "./types/type-sugestExo";

const SugestExoSlider: Component_Props = ({ titeltext, arrayItems }) => {
  let settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const { BoxSugest, BoxParent, BoxContiner, HederTextBox, BoxImg } =
    styleComponent;

  const navigate = useNavigate();

  const handelOnClick: Type_handelOnClick = (e, item) => {
    e.stopPropagation();
    navigate(`catgory/${item.nameProduct}/${item.id}`, {
      state: { itemProduct: item },
    });
  };

  return (
    <BoxSugest>
      <HederTextBox>{titeltext}</HederTextBox>
      <Slider {...settings}>
        {arrayItems?.map((item, index) => {
          return (
            <BoxParent key={index}>
              <BoxContiner onClick={(e) => handelOnClick(e, item)}>
                <BoxImg src={item.img} as="img"></BoxImg>
                <Typography sx={{ height: "4rem" }}>
                  {item.nameProduct}
                </Typography>
                <Typography sx={{ overflow: "hidden" }}>
                  {item.price}$
                </Typography>
              </BoxContiner>
            </BoxParent>
          );
        })}
      </Slider>
    </BoxSugest>
  );
};

export default SugestExoSlider;
