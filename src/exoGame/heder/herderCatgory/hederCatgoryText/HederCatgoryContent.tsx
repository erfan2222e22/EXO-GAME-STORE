import React from "react";
import styleComponent from "./Style-Component/StyleContentHeder";
import { useNavigate } from "react-router-dom";
import { Component_Props } from "./types/Type_HederCatgoryContext";
const HederCatgoryContent: Component_Props = ({
  item,
  key,
  setCatgoryDisplay,
}) => {
  const { Ul, UlContiner } = styleComponent;
  const navigate = useNavigate();

  const handelOnClick = () => {
    const { DataLink, text, filterdLinkProduct } = item;
    navigate(`catgory/${text}`, {
      state: {
        pathName: text,
        ProductLink: DataLink,
        filterdLinkProduct: filterdLinkProduct,
      },
    });
    setCatgoryDisplay((prev) => (prev = false));
  };

  return (
    <UlContiner key={key}>
      <Ul as="ul">
        <li
          style={{
            fontWeight: item.type === "text" ? "normal" : "bolder",
            cursor: "pointer",
          }}
          onClick={handelOnClick}
        >
          {item.text}
        </li>
      </Ul>
    </UlContiner>
  );
};
export default HederCatgoryContent;
