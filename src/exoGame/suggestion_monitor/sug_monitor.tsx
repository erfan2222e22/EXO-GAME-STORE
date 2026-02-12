import styleComponent from "./Style-Component/StyleSugestMonitor";

import { Box } from "@mui/material";
import {
  Type_handelOnclick,
  sugestMonitorList_Type,
} from "./types/type-Sug-Monitor";
import { useNavigate } from "react-router-dom";
import { useXandYWindowPosition } from "../Y-X-WindowContext/Y-X-WindowContext.jsx";
import { useEffect, useState } from "react";

const SugMonitor = () => {
  const {
    DivParent,
    DivImg,
    Text,
    HeadrText,
    ParentDivImg,
    ContinerImgAndText,
  } = styleComponent;
  const { xWindow, yWindow } = useXandYWindowPosition();

  const [sugestMonitorList, setSugestMonitorList] = useState<
    sugestMonitorList_Type[]
  >([
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%202K-200x200.png",
      filterText: "2K",
      gridArea: "1 / 1 / 3 / 3",
      flexEnd: null,
      id: 1,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%204k-200x200.png",
      filterText: "4K",
      gridArea: "3 / 1 / 5 / 3",
      flexEnd: null,
      id: 2,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20FHD-200x200.png",
      filterText: "FHD",
      gridArea: "1 / 3 / 3 / 5",
      flexEnd: null,
      id: 3,
    },
    {
      img: "https://exo.ir/image/cache/catalog/New_Template/Banners/carousel_banner/Icons%20Cat%20v1%20UW-200x200.png",
      filterText: "Ultra-Wide",
      gridArea: "3 / 3 / 5 / 5",
      flexEnd: null,
      id: 4,
    },
  ]);

  useEffect(() => {
    const smallWindowSize = 600;
    setSugestMonitorList((prev) =>
      prev.map((item) =>
        xWindow < smallWindowSize
          ? { ...item, flexEnd: item.id <= 2 ? true : false }
          : { ...item, flexEnd: null },
      ),
    );
  }, [xWindow, yWindow]);

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

  const validatingFlexEnd = () => {
    return sugestMonitorList[0].flexEnd ? true : false;
  };

  return (
    <Box>
      <HeadrText>Choose the best monitor for your needs.</HeadrText>
      <DivParent>
        {sugestMonitorList.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                gridArea: item.gridArea,
              }}
            >
              <ParentDivImg
                onClick={() => handelOnclick(item)}
                sx={{
                  alignItems: validatingFlexEnd()
                    ? item.flexEnd
                      ? "end"
                      : "start"
                    : "center",
                }}
              >
                <ContinerImgAndText>
                  <DivImg as="img" src={item.img}></DivImg>
                  <Text>{item.filterText}</Text>
                </ContinerImgAndText>
              </ParentDivImg>
            </Box>
          );
        })}
      </DivParent>
    </Box>
  );
};

export default SugMonitor;
