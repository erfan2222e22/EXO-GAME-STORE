import component from "../../components/component-Style/StyleCatgory";
import { Typography, Box } from "@mui/material";
const ProductParentBoxComponent = ({ filteredItems, originalItems }) => {
  const { ProductParentBox, BoxProduction, ImgProduction } = component;
  return (
    <ProductParentBox>
      {(filteredItems.length > 0 ? filteredItems : originalItems).map(
        (item) => (
          <BoxProduction key={item.id}>
            <ImgProduction src={item.img} component="img" />
            <Box>
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
