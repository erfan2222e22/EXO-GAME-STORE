import { Box } from "@mui/material";
import styleComponent from "./Style-Component/StyleSugestMonitor";
import { Type_handelOnclick } from "./types/type-Sug-Monitor";
import { useNavigate } from "react-router-dom";

const SugMonitor = () => {
  const { DivParent, DivImg, Text, HeadrText } = styleComponent;
  const sugestMonitorList = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%202K-200x200.png",
      filterText: "2K",
      id: 1,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%204k-200x200.png",
      filterText: "4K",
      id: 2,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20FHD-200x200.png",
      filterText: "FHD",
      id: 3,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20UW-200x200.png",
      filterText: "Ultra-Wide",
      id: 4,
    },
  ];

  const navigate = useNavigate();

  const handelOnclick: Type_handelOnclick = (item) => {
    const ProductsLinks = `http://localhost:3300/monitorProduct?ImageResolutionSpecification=${item.filterText}`;

    navigate(`catgory/${item.filterText}`, {
      state: {
        ProductLink: ProductsLinks,
        pathName: "monitorProduct",
        filterdLinkProduct: true,
      },
    });
  };

  return (
    <Box>
      <HeadrText sx={{ textAlign: "center", color: "black" }}>
        Choose the best monitor for your needs.
      </HeadrText>
      <DivParent>
        {sugestMonitorList.map((item) => {
          return (
            <Box key={item.id}>
              <Box
                onClick={() => handelOnclick(item)}
                sx={{ cursor: "pointer" }}
              >
                <DivImg as="img" src={item.img}></DivImg>
                <Text>{item.filterText}</Text>
              </Box>
            </Box>
          );
        })}
      </DivParent>
    </Box>
  );
};

export default SugMonitor;
