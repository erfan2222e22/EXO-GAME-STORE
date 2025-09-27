import styleComponents from "../../components/component-Style/StyleParentBox";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LaptopInformation from "./LaptopIconsInformation/LaptopInformation";
import MonitorIconsInformation from "./monitorIconsInformation/monitorIconsInformation";
import axios from "axios";

const ProductParentBoxComponent = ({
  filteredItems,
  originalItems,
  pathName,
}) => {
  const { ProductParentBox, BoxProduction, ImgProduction } = styleComponents;
  const navigate = useNavigate();

  const handelOnClick = (e, item) => {
    e.stopPropagation();
    axios(`http://localhost:3300/${pathName}/${item.id}`)
      .then(() => {
        // navigate(`/catgory/${pathName}/${item.id}`, {
        //   state: { item: item },
        // });
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

export default ProductParentBoxComponent;
