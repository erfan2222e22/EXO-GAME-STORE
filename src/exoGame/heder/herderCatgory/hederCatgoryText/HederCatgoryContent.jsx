import React from "react";
import styleComponent from "./Style-Component/StyleContentHeder";
const HederCatgoryContent = ({ item, key }) => {
  const { Ul, UlContiner } = styleComponent;
  return (
    <UlContiner key={key}>
      <Ul component="ul">
        <li
          style={{
            fontWeight: item.type === "text" ? "normal" : "bolder",
          }}
          onClick={() => console.log(item.id)}
        >
          {item.text}
        </li>
      </Ul>
    </UlContiner>
  );
};
export default HederCatgoryContent;
