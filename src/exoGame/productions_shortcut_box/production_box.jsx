import React from "react";
import img1 from "./productionsImg/img1.jpg";
import img2 from "./productionsImg/img2.jpg";
import img3 from "./productionsImg/img3.jpg";
import { Link } from "react-router-dom";
import styleComponent from "../components/component-Style/StyleProduction";

const ProductionBox = () => {
  const { ProductionItems, ParntDiv } = styleComponent;
  let items = [
    { img: img2, path: "/The-computers-are-ready.", id: 1 },
    { img: img3, path: "/laptops", id: 2 },
    { img: img1, path: "/Smart-assembly", id: 3 },
  ];

  return (
    <>
      {items.map((item) => {
        return (
          <Link to={item.path} key={item.id}>
            <ProductionItems
              component="img"
              src={item.img}
              alt="img):"
            ></ProductionItems>
          </Link>
        );
      })}
    </>
  );
};

export default ProductionBox;
