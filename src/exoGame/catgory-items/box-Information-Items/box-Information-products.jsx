import React, { useEffect } from "react";
import { Link, Element } from "react-scroll";
import styleComponent from "../../components/component-Style/StyleBoxInformationProduction";
import TableInformationProducts from "./table-Information-Products/table-Information-Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
function BoxInfoProducts() {
  const { PrentBox, HederText } = styleComponent;
  const location = useLocation();
  const [productsInformation, setProductsInformation] = useState([]);
  const [to, setTo] = useState("box1");
  const { ...item } = productsInformation?.item || {};

  useEffect(() => {
    setProductsInformation(location.state);
  }, [location, productsInformation]);

  const handelClick = () => {
    alert("slame");
  };

  return (
    <>
      <PrentBox>
        <HederText>
          <Link onClick={() => setTo("box1")} to={"to"}>
            Product review <ArrowRightIcon></ArrowRightIcon>
          </Link>
        </HederText>
        <HederText>
          <Link onClick={handelClick} to="box1">
            Characteristics <ArrowRightIcon></ArrowRightIcon>
          </Link>
        </HederText>
        <HederText>
          <Link onClick={handelClick} to="box1">
            Comments <ArrowRightIcon></ArrowRightIcon>
          </Link>
        </HederText>
      </PrentBox>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Element name="box1">
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
      </Element>
    </>
  );
}
export default BoxInfoProducts;
