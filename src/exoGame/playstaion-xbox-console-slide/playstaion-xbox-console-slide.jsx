import { Box } from "@mui/material";
import img_playstaion from "./img-playstaion-xbox/playstaion.jpg";
import img_xbox from "./img-playstaion-xbox/xbox.jpg";
import styleComponent from "../components/component-Style/StylePlaystaionXboxSlider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const PlaystaionXboxConsoleSlider = () => {
  const { ParentDiv } = styleComponent;
  const navigate = useNavigate();
  let itmes = [
    //slider imgs and path
    {
      title: "productSonyConsole",
      img: img_playstaion,
      path: `/catgory/:id`,
      id: "1",
      jsonServer: "http://localhost:3300/productSonyConsole",
    },
    {
      title: "productXboxConsole",
      img: img_xbox,
      path: `/catgory/:id`,
      id: "2",
      jsonServer: "http://localhost:3300/productXboxConsole",
    },
  ];

  const handelClickLink = (item) => {
    axios(item.jsonServer)
      .then((data) => {
        navigate(`catgory/${item.title}`, {
          state: { product: data.data, pathName: item.title },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <ParentDiv>
      {itmes.map((item) => {
        return (
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handelClickLink(item);
            }}
            style={{ display: "flex" }}
            key={item.id}
          >
            <Box component="img" src={item.img}></Box>
          </Link>
        );
      })}
    </ParentDiv>
  );
};

export default PlaystaionXboxConsoleSlider;
