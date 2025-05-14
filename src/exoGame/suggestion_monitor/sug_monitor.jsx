import img_2k from "./sug_monitor_img/2k_img.png";
import img_4k from "./sug_monitor_img/4k_img.png";
import img_full_hd from "./sug_monitor_img/full_hd.png";
import img_ultera_wide from "./sug_monitor_img/ultera_wide.png";
import component from "../components/component-Style/StyleSugestMonitor";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sug_Monitor = () => {
  const { Div_parent, Div_img, Text, Headr_text } = component;
  let items = [
    { img: img_2k, text: "ultrawide", id: 1, path: "./ultrawide" },
    { img: img_4k, text: "ultrawide", id: 2, path: "./ultrawide" },
    { img: img_full_hd, text: "ultrawide", id: 3, path: "./ultrawide" },
    { img: img_ultera_wide, text: "ultrawide", id: 4, path: "./ultrawide" },
  ];

  return (
    <Box>
      <Headr_text sx={{ textAlign: "center", color: "black" }}>
        براساس نیازت بهترین مانیتور انتخاب کن
      </Headr_text>
      <Div_parent>
        {items.map((item) => {
          return (
            <Box key={item.id}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={item.path}
              >
                <Div_img component="img" src={item.img}></Div_img>
                <Text>{item.text}</Text>
              </Link>
            </Box>
          );
        })}
      </Div_parent>
    </Box>
  );
};

export default Sug_Monitor;
