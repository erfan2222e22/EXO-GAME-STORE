import img_2k from "./sug_monitor_img/2k_img.png";
import img_4k from "./sug_monitor_img/4k_img.png";
import img_full_hd from "./sug_monitor_img/full_hd.png";
import img_ultera_wide from "./sug_monitor_img/ultera_wide.png";
import component from "../components/component-Style/StyleSugestMonitor";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sug_Monitor = () => {
  const { Div_parent, Div_img, Text, Headr_text } = component;

  return (
    <Box>
      <Headr_text sx={{ textAlign: "center", color: "black" }}>
        براساس نیازت بهترین مانیتور انتخاب کن
      </Headr_text>
      <Div_parent>
        <Box>
          <Link style={{ textDecoration: "none", color: "black" }} to="">
            <Div_img component="img" src={img_ultera_wide}></Div_img>
            <Text>ultrawide</Text>
          </Link>
        </Box>
        <Box>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <Div_img component="img" src={img_full_hd}></Div_img>
            <Text>FHD</Text>
          </Link>
        </Box>
        <Box>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <Div_img component="img" src={img_2k}></Div_img>
            <Text>2k</Text>
          </Link>
        </Box>
        <Box>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <Div_img component="img" src={img_4k}></Div_img>
            <Text>4k</Text>
          </Link>
        </Box>
      </Div_parent>
    </Box>
  );
};

export default Sug_Monitor;
