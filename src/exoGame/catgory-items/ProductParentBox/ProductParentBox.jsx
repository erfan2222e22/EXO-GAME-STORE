import component from "../../components/component-Style/StyleCatgory";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProductParentBoxComponent = ({
  filteredItems,
  originalItems,
  pathName,
}) => {
  const { ProductParentBox, BoxProduction, ImgProduction } = component;

  const navigate = useNavigate();
  const handelOnClikc = (item) => {
    axios(`http://localhost:3300/${pathName}/${item.id}`)
      .then(() => {
        navigate(`/catgory/${pathName}/${item.id}`, {
          state: { item: item },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ProductParentBox>
      {(filteredItems.length > 0 ? filteredItems : originalItems).map(
        (item) => (
          <BoxProduction key={item.id} onClick={() => handelOnClikc(item)}>
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
