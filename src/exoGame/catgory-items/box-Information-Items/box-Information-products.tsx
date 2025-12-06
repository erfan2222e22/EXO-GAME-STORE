import { Link } from "react-scroll";
import styleComponent from "./Style-Component/StyleBoxInformationProduction";
import TableInformationProducts from "./table-Information-Products/table-Information-Products";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import BoxDiscriptionItems from "./box-discription-items/box-discription-items";
import ComentBoxProducts from "./ComentBoxProducts/comentBoxProducts";
import { productsInformation } from "./Type_table_Information_Product";
import * as Scroll from "react-scroll";

const ScrollElement = Scroll.Element as React.ComponentType<{
  name: string;
  children?: React.ReactNode;
}>;

const BoxInfoProducts = () => {
  const { PrentBox, HederText } = styleComponent;
  const location = useLocation();
  const [productsInformation, setProductsInformation] =
    useState<productsInformation>();
  const { ...item } = productsInformation?.itemProduct || {};

  useEffect(() => {
    setProductsInformation(location.state);
  }, [productsInformation]);

  return (
    <>
      <PrentBox>
        <HederText>
          <Link to={"BoxDiscription"}>
            <span>Product review</span>
            <ArrowRightIcon></ArrowRightIcon>
          </Link>
        </HederText>

        <HederText>
          <Link to="TableDiscription">
            <span>Characteristics</span>
            <ArrowRightIcon></ArrowRightIcon>
          </Link>
        </HederText>

        <HederText>
          <Link to="Coments">
            <span>Comments</span>
            <ArrowRightIcon></ArrowRightIcon>
          </Link>
        </HederText>
      </PrentBox>

      <br />
      <br />
      <br />
      <br />

      <ScrollElement name="BoxDiscription">
        <BoxDiscriptionItems {...item}></BoxDiscriptionItems>
      </ScrollElement>

      <ScrollElement name="TableDiscription">
        <Typography
          sx={{
            margin: "5%",
            borderLeft: "1px solid #03c03c",
            padding: "10px",
          }}
          component="h1"
        >
          Characteristics
        </Typography>
        <TableInformationProducts {...item}></TableInformationProducts>
      </ScrollElement>

      <ScrollElement name="Coments">
        <ComentBoxProducts></ComentBoxProducts>
      </ScrollElement>
    </>
  );
};
export default BoxInfoProducts;
