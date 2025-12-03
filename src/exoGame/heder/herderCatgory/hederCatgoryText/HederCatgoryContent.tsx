import React from "react";
import styleComponent from "./Style-Component/StyleContentHeder";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FailToFetchDataPage from "../../../failToFetchDataPage/failToFetchDataPage";
import {
  Component_Props,
  navigatingRoter,
} from "./types/Type_HederCatgoryContext";
const HederCatgoryContent: Component_Props = ({
  item,
  key,
  setCatgoryDisplay,
}) => {
  const { Ul, UlContiner } = styleComponent;
  const navigate = useNavigate();

  const navigatingRoter: navigatingRoter = (values) => {
    navigate(`catgory/${item.text}`, {
      state: { product: values, pathName: item.text },
    });
    setCatgoryDisplay((prev) => (prev = false));
  };

  const handelOnClick = async () => {
    try {
      const { data: values, status: valid_Status } = await axios.get(
        item.DataLink
      );
      valid_Status === 200 && navigatingRoter(values);
    } catch (err) {
      FailToFetchDataPage();
    }
  };

  return (
    <UlContiner key={key}>
      <Ul as="ul">
        <li
          style={{
            fontWeight: item.type === "text" ? "normal" : "bolder",
            cursor: "pointer",
            color: "red",
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
