import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style-Component/sugest.css";
import Slider from "react-slick";
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

  const {
    BoxSugest,
    BoxParent,
    BoxContiner,
    HederTextBox,
    BoxImg,
    BoxText,
    BoxPriceText,
    ContinerBoxImg,
  } = styleComponent;

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
                <ContinerBoxImg>
                  <BoxImg src={item.img} as="img"></BoxImg>
                </ContinerBoxImg>
                <BoxText>{item.nameProduct}</BoxText>
                <BoxPriceText>{item.price}$</BoxPriceText>
              </BoxContiner>
            </BoxParent>
          );
        })}
      </Slider>
    </BoxSugest>
  );
};

export default SugestExoSlider;
