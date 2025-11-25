import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styleComponent from "./Style-Component/StyleProductDiscription";
import ProductDiscriptionImg from "./productionImg/productionDiscriotionImg";
import ProductionHeder from "./productionHeder/productionHeder";
import ProductInformation from "./productInformation/productInformation";
import ProductAddIncard from "./productAddIncard/productAddIncard";
import { Types_itemProduct } from "./types/Types_ProductDiscription";

const ProductDiscription = () => {
  const location = useLocation();
  const { itemProduct } = location.state || {};

  const { img, price, company, nameProduct, ...rest }: Types_itemProduct =
    itemProduct;

  const { ParentBox, ContinerBox, ParentContiner, SecendParentBox } =
    styleComponent;
  const [productCounter, SetProductCounter] = useState(1);

  useEffect(() => {
    productCounter < 0 && SetProductCounter(0);
  }, [productCounter]);

  return (
    <ParentContiner>
      <ProductDiscriptionImg imgSrc={img} />
      <ParentBox>
        <SecendParentBox>
          <ProductionHeder nameProduct={nameProduct} company={company} />
          <ContinerBox>
            <ProductInformation {...rest} />
            <ProductAddIncard
              SetProductCounter={SetProductCounter}
              productCounter={productCounter}
              price={price}
              item={itemProduct}
            />
          </ContinerBox>
        </SecendParentBox>
      </ParentBox>
    </ParentContiner>
  );
};
export default ProductDiscription;
