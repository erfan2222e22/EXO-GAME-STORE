import img_2k from "./sug_monitor_img/2k_img.png";
import img_4k from "./sug_monitor_img/4k_img.png";
import img_full_hd from "./sug_monitor_img/full_hd.png";
import img_ultera_wide from "./sug_monitor_img/ultera_wide.png";
import stylecomponent from "../components/component-Style/StyleSugestMonitor";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SugMonitor = () => {
  const { DivParent, DivImg, Text, HeadrText } = stylecomponent;
  let items = [
    { img: img_2k, text: "2K", id: 1, path: "./ultrawide" },
    { img: img_4k, text: "4K", id: 2, path: "./ultrawide" },
    { img: img_full_hd, text: "FHD", id: 3, path: "./ultrawide" },
    { img: img_ultera_wide, text: "Ultra-Wide", id: 4, path: "./ultrawide" },
  ];
  const navigate = useNavigate();

  const handelOnclick = (item) => {
    const itemsJsonLinks = `http://localhost:3300/monitorProduct?ImageResolutionSpecification=${item.text}`;
    axios
      .get(itemsJsonLinks)
      .then((data) => {
        navigate(`catgory/${item.text}`, {
          state: { product: data.data, pathName: "monitorProduct" },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <HeadrText sx={{ textAlign: "center", color: "black" }}>
        Choose the best monitor for your needs.
      </HeadrText>
      <DivParent>
        {items.map((item) => {
          return (
            <Box key={item.id}>
              <Box
                onClick={() => handelOnclick(item)}
                sx={{ cursor: "pointer" }}
              >
                <DivImg component="img" src={item.img}></DivImg>
                <Text>{item.text}</Text>
              </Box>
            </Box>
          );
        })}
      </DivParent>
    </Box>
  );
};

export default SugMonitor;
