import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styleComponent from "../../components/component-Style/StyleDiscriotionItems";
import ProductDiscriptionImg from "./productionImg/productionDiscriotionImg";
import ProductionHeder from "./productionHeder/productionHeder";
import ProductInformation from "./productInformation/productInformation";
import ProductAddIncard from "./productAddIncard/productAddIncard";

const ProductDiscription = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const {
    nameProduct,
    price,
    genration,
    company,
    img,
    ConsoleType,
    YearIntroduced,
    CentralProcessingUnit,
    Graphicsprocessingunit,
    Ramcapacity,
    Memorycapacity,
  } = item || {};
  const { ParentBox } = styleComponent;
  const [productCounter, SetProductCounter] = useState(1);

  useEffect(() => {
    productCounter < 0 && SetProductCounter(0);
  }, [productCounter, CentralProcessingUnit]);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "100px",
        flexDirection: "row",
      }}
    >
      <ProductDiscriptionImg imgSrc={img} />
      <ParentBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
          }}
        >
          <ProductionHeder nameProduct={nameProduct} company={company} />
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "row",
              justifyContent: "left",
              padding: "10px",
              height: "100%",
              margin: "10px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              right: "10px",
              color: "#00000080",
            }}
          >
            <ProductInformation
              Memorycapacity={Memorycapacity}
              Ramcapacity={Ramcapacity}
              Graphicsprocessingunit={Graphicsprocessingunit}
              CentralProcessingUnit={CentralProcessingUnit}
              YearIntroduced={YearIntroduced}
              genration={genration}
              ConsoleType={ConsoleType}
            />
            <ProductAddIncard
              SetProductCounter={SetProductCounter}
              price={price}
              productCounter={productCounter}
              item={item}
            />
          </Box>
        </Box>
      </ParentBox>
    </div>
  );
};
export default ProductDiscription;
