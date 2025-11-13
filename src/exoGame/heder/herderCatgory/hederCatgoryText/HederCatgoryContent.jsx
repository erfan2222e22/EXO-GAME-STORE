import React from "react";
import styleComponent from "./Style-Component/StyleContentHeder";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FailToFetchDataPage from "../../../failToFetchDataPage/failToFetchDataPage";
const HederCatgoryContent = ({ item, key, setCatgoryDisplay }) => {
  const { Ul, UlContiner } = styleComponent;
  const navigate = useNavigate();

  const navigatingRoter = (values) => {
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
      FailToFetchDataPage(navigate);
    }
  };

  return (
    <UlContiner key={key}>
      <Ul component="ul">
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
