import React from "react";
import img1 from "./productionsImg/img1.jpg";
import img2 from "./productionsImg/img2.jpg";
import img3 from "./productionsImg/img3.jpg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import component from "../components/component-Style/StyleProduction";

const Production_box = () => {
  const { Production_items, Parnt_Div } = component;
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
            <Production_items
              component="img"
              src={item.img}
              alt="img):"
            ></Production_items>
          </Link>
        );
      })}
    </>
  );
};

export default Production_box;
