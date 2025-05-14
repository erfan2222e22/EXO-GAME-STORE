import { Box } from "@mui/material";
import img_playstaion from "./img-playstaion-xbox/playstaion.jpg";
import img_xbox from "./img-playstaion-xbox/xbox.jpg";
import component from "../components/component-Style/StylePlaystaionXboxSlider";
import { Link } from "react-router-dom";

const PlaystaionXboxConsoleSlider = () => {
  let itmes = [
    { img: img_playstaion, path: "./slame", id: 1 },
    { img: img_xbox, path: "./slame", id: 2 },
  ];
  const { Parent_div } = component;
  return (
    <Parent_div>
      {itmes.map((item) => {
        return (
          <Link to={item.path} style={{ display: "flex" }}>
            <Box component="img" src={item.img}></Box>
          </Link>
        );
      })}
    </Parent_div>
  );
};
export default PlaystaionXboxConsoleSlider;
