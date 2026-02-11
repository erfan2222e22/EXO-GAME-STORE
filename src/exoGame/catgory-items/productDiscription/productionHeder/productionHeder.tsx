import React from "react";
import Rating from "@mui/material/Rating";
import styleComponents from "./Style-Component/StyleProductHeder";
import { fuctionType } from "./types/Type-productHeder";

const ProductionHeder: fuctionType = ({ company, nameProduct }) => {
  const {
    ParentBox,
    NameProduct,
    RatingBox,
    ProductModelText,
    InformationText,
  } = styleComponents;

  return (
    <ParentBox>
      <NameProduct as="h1">{nameProduct}</NameProduct>
      <InformationText as="h6">
        Manufacturers:{company} /Product:{nameProduct}
      </InformationText>
      <ProductModelText as="h6">Product model:{nameProduct}</ProductModelText>
      <RatingBox>
        <Rating defaultValue={5}></Rating>
        <span>coment 0</span>
      </RatingBox>
    </ParentBox>
  );
};
export default ProductionHeder;
