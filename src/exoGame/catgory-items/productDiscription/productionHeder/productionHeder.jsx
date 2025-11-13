import React from "react";
import Rating from "@mui/material/Rating";
import styleComponents from "./Style-Component/StyleProductHeder";
function ProductionHeder({ company, nameProduct }) {
  const {
    ParentBox,
    NameProduct,
    RatingBox,
    ProductModelText,
    InformationText,
  } = styleComponents;
  return (
    <ParentBox>
      <NameProduct component="h1">{nameProduct}</NameProduct>
      <InformationText component="h6">
        Manufacturers:{company} /Product:{nameProduct}
      </InformationText>
      <ProductModelText component="h6">
        Product model:{nameProduct}
      </ProductModelText>
      <RatingBox>
        <Rating defaultValue={5}></Rating>
        <span>coment 0</span>
      </RatingBox>
    </ParentBox>
  );
}
export default ProductionHeder;
