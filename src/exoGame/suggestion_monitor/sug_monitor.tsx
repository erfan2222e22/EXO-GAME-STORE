import { Box } from "@mui/material";
import styleComponent from "./Style-Component/StyleSugestMonitor";
import { Type_handelOnclick } from "./types/type-Sug-Monitor";
import { useNavigate } from "react-router-dom";

const SugMonitor = () => {
  const { DivParent, DivImg, Text, HeadrText, ParentDivImg } = styleComponent;
  const sugestMonitorList = [
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%202K-200x200.png",
      filterText: "2K",
      gridArea: "1 / 1 / 3 / 3",
      flexEnd: true,
      id: 1,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%204k-200x200.png",
      filterText: "4K",
      gridArea: "3 / 1 / 5 / 3",
      flexEnd: true,
      id: 2,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20FHD-200x200.png",
      filterText: "FHD",
      gridArea: "1 / 3 / 3 / 5",
      flexEnd: false,
      id: 3,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20UW-200x200.png",
      filterText: "Ultra-Wide",
      gridArea: "3 / 3 / 5 / 5",
      flexEnd: false,
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
      <HeadrText>Choose the best monitor for your needs.</HeadrText>
      <DivParent>
        {sugestMonitorList.map((item) => {
          return (
            <Box key={item.id} sx={{ gridArea: item.gridArea }}>
              <ParentDivImg
                onClick={() => handelOnclick(item)}
                sx={{
                  alignItems: item.flexEnd ? "end" : "start",
                }}
              >
                <Box
                  sx={{
                    padding: "1px",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <DivImg as="img" src={item.img}></DivImg>
                  <Text>{item.filterText}</Text>
                </Box>
              </ParentDivImg>
            </Box>
          );
        })}
      </DivParent>
    </Box>
  );
};

export default SugMonitor;
