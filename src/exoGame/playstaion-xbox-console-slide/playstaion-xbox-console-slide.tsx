import { Box } from "@mui/material";
import styleComponent from "./Style-Component/StylePlaystaionXboxSlider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import FailToFetchDataPage from "../failToFetchDataPage/failToFetchDataPage";
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
      jsonServer: "http://localhost:3300/productSonyConsole",
    },
  ];

  const handelClickLink: Type_handelClickLink = async (item) => {
    try {
      const { jsonServer, title } = item;
      const { data: PropductData } = await axios.get(jsonServer);
      navigate(`catgory/${title}`, {
        state: { product: PropductData, pathName: title },
      });
    } catch (err) {
      FailToFetchDataPage();
    }
  };

  return (
    <ParentDiv>
      {itmes.map((item) => {
        return (
          <Link
            to="#"
            onClick={() => handelClickLink(item)}
            style={{ display: "flex" }}
            key={item.id}
          >
            <Box
              component="img"
              src={item.img}
              sx={{ borderRadius: "5px" }}
            ></Box>
          </Link>
        );
      })}
    </ParentDiv>
  );
};

export default PlaystaionXboxConsoleSlider;
