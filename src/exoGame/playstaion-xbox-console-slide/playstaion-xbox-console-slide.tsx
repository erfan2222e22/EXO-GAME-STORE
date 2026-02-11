import { Box } from "@mui/material";
import styleComponent from "./Style-Component/StylePlaystaionXboxSlider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { AxiosError } from "axios";
import { Type_handelClickLink } from "./types/Type_PlayStaionXbox";
const PlaystaionXboxConsoleSlider = () => {
  const { ParentDiv } = styleComponent;
  const navigate = useNavigate();
  let itmes = [
    {
      id: 1,
      title: "productXboxConsole",
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Consoles%20TMB%20Xbox%202-760x570.webp",
      jsonServer: "http://localhost:3300/productXboxConsole",
    },
    {
      id: 2,
      title: "productNintendoConsole",
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Consoles%20TMB%20Nintendo%202-760x570.webp",
      jsonServer:
        "http://localhost:3300/PortableConsolesProduct?manufacturers=Nintentod",
    },
    {
      id: 3,
      title: "productSonyConsole",
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/Desktop/Main%20banner/Consoles%20TMB%20Playstation%202-760x570.webp",
      jsonServer: `http://localhost:3300/productSonyConsole`,
    },
  ];

  const handelClickLink: Type_handelClickLink = (item) => {
    const { jsonServer, title } = item;
    navigate(`catgory/${title}`, {
      state: {
        pathName: title,
        ProductLink: jsonServer,
        filterdLinkProduct: false,
      },
    });
  };

  return (
    <ParentDiv>
      {itmes.map((item) => {
        return (
          <Box style={{ display: "flex" }} key={item.id}>
            <Box
              component="img"
              onClick={() => handelClickLink(item)}
              src={item.img}
              sx={{ borderRadius: "5px", backgroundColor: "red" }}
            ></Box>
          </Box>
        );
      })}
    </ParentDiv>
  );
};

export default PlaystaionXboxConsoleSlider;
