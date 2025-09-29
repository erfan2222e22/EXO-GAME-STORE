import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sugest.css";
import styleComponent from "../components/component-Style/StyleSugestExo";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const SugestExoSlider = ({ titeltext, arrayItems }) => {
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

  const handelOnClick = (e, item) => {
    e.stopPropagation();
    navigate(`catgory/test/${item.id}`, { state: { item: item } });
  };

  return (
    <BoxSugest>
      <HederTextBox variant="body3">{titeltext}</HederTextBox>
      <Slider {...settings}>
        {arrayItems.map((item, index) => {
          return (
            <BoxParent key={index}>
              <BoxContiner onClick={(e) => handelOnClick(e, item)}>
                <BoxImg src={item.img} component="img"></BoxImg>
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
