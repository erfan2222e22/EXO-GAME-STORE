import { Box } from "@mui/material";
import axios from "axios";
import styleComponent from "./Style-Component/StyleSugestMonitor";
import { Type_handelOnclick } from "./types/type-Sug-Monitor";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { isAxiosError } from "axios";

const SugMonitor = () => {
  const { DivParent, DivImg, Text, HeadrText } = styleComponent;
  const items = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%202K-200x200.png",
      text: "2K",
      id: 1,
      path: "./ultrawide",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%204k-200x200.png",
      text: "4K",
      id: 2,
      path: "./ultrawide",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20FHD-200x200.png",
      text: "FHD",
      id: 3,
      path: "./ultrawide",
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20UW-200x200.png",
      text: "Ultra-Wide",
      id: 4,
      path: "./ultrawide",
    },
  ];
  const navigate = useNavigate();

  const handelOnclick: Type_handelOnclick = async (item) => {
    try {
      const itemsJsonLinks = `http://localhost:3300/monitorProduc2t?ImageResolutionSpecification=${item.text}`;
      const { data: items } = await axios.get(itemsJsonLinks);
      navigate(`catgory/${item.text}`, {
        state: { product: items, pathName: "monitorProduct" },
      });
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
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
                <DivImg as="img" src={item.img}></DivImg>
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
