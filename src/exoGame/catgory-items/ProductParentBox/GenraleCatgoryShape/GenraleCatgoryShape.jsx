import styleComponent from "./style-Component/StyleParentBox";
import { Typography, Box } from "@mui/material";

import LaptopInformation from "../LaptopIconsInformation/LaptopInformation";
import MonitorIconsInformation from "../monitorIconsInformation/monitorIconsInformation";

const GenraleCatgoryShape = ({
  filteredItems,
  originalItems,
  handelOnClick,
}) => {
  const { ProductParentBox, BoxProduction, ImgProduction } = styleComponent;
  return (
    <ProductParentBox>
      {(filteredItems.length > 0 ? filteredItems : originalItems).map(
        (item) => (
          <BoxProduction key={item.id} onClick={(e) => handelOnClick(e, item)}>
            <ImgProduction src={item.img} component="img" />
            <Box>
              {item?.informationIconsLaptop && (
                <LaptopInformation originalItems={item} />
              )}
              {item?.informationIconsMonitor && (
                <MonitorIconsInformation originalItems={item} />
              )}
              <br />
              <Typography>{item.nameProduct}</Typography>
              <Typography
                sx={{
                  fontFamily: "vazir",
                  overflow: "hidden",
                  ...(item.price === "ناموجود"
                    ? {
                        color: "red",
                      }
                    : item.price === "بزودی"
                    ? {
                        color: "#e46e00",
                      }
                    : {
                        color: "black",
                      }),
                }}
              >
                {item.price}$
              </Typography>
            </Box>
          </BoxProduction>
        )
      )}
    </ProductParentBox>
  );
};

export default GenraleCatgoryShape;
