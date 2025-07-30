import img_2k from "./sug_monitor_img/2k_img.png";
import img_4k from "./sug_monitor_img/4k_img.png";
import img_full_hd from "./sug_monitor_img/full_hd.png";
import img_ultera_wide from "./sug_monitor_img/ultera_wide.png";
import stylecomponent from "../components/component-Style/StyleSugestMonitor";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const SugMonitor = () => {
  const { DivParent, DivImg, Text, HeadrText } = stylecomponent;
  let items = [
    { img: img_2k, text: "ultrawide", id: 1, path: "./ultrawide" },
    { img: img_4k, text: "ultrawide", id: 2, path: "./ultrawide" },
    { img: img_full_hd, text: "ultrawide", id: 3, path: "./ultrawide" },
    { img: img_ultera_wide, text: "ultrawide", id: 4, path: "./ultrawide" },
  ];

  return (
    <Box>
      <HeadrText sx={{ textAlign: "center", color: "black" }}>
        براساس نیازت بهترین مانیتور انتخاب کن
      </HeadrText>
      <DivParent>
        {items.map((item) => {
          return (
            <Box key={item.id}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={item.path}
              >
                <DivImg component="img" src={item.img}></DivImg>
                <Text>{item.text}</Text>
              </Link>
            </Box>
          );
        })}
      </DivParent>
    </Box>
  );
};

export default SugMonitor;
