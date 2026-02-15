import styleComponent from "./Style-Component/StylePlaystaionXboxSlider";

import { useNavigate } from "react-router-dom";
import {
  Type_handelClickLink,
  Type_resultElmentImg,
} from "./types/Type_PlayStaionXbox";
import { useXandYWindowPosition } from "../Y-X-WindowContext/Y-X-WindowContext.jsx";

const PlaystaionXboxConsoleSlider = () => {
  const { xWindow } = useXandYWindowPosition();
  const { ParentDiv, ImgBox } = styleComponent;
  const navigate = useNavigate();

  const itmesList = [
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

  const mobileImgList = [
    {
      id: 1,
      imgAddres:
        "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/Consoles%20TMB%20Mobile%20Playstation%20v1%20copy-656x180.webp",
    },
    {
      id: 2,
      imgAddres:
        "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/Consoles%20TMB%20Mobile%20Xbox%20v1%20copy-656x180.webp",
    },
    {
      id: 3,
      imgAddres:
        "https://exo.ir/image/cache/catalog/New_Template/Banners/Mobile/Main%20Banners/Consoles%20TMB%20Mobile%20nintendo%20v1%20copy-656x180.webp",
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

  const resultElmentImg: Type_resultElmentImg = (item) => {
    const { id, img } = item;
    const phoneWidth = 600;
    const mobileImg = mobileImgList.find((fill) => fill.id === id)?.imgAddres;
    const Result = xWindow > phoneWidth || xWindow === 0 ? img : mobileImg;
    return Result;
  };

  return (
    <ParentDiv>
      {itmesList.map((item) => {
        return (
          <ImgBox
            key={item.id}
            src={resultElmentImg(item)}
            alt="🎨"
            as="img"
            onClick={() => handelClickLink(item)}
          ></ImgBox>
        );
      })}
    </ParentDiv>
  );
};

export default PlaystaionXboxConsoleSlider;
