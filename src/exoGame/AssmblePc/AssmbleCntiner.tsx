import contextUse from "../useContext/useContext";
import SelectPcProductBox from "./selectPcProductBox/SelectPcProductBox";
import ShoppingCart from "./shopping Cart Pc Parts/ShoppingCartPcParts";
import axios from "axios";
import { useState, useEffect } from "react";
import { Type_AsslbleContiner } from "./types/types-AssmbleCniter";
import styleComponent from "./style-Component/StyleAssmbleContiner.js";

const AssmbleContiner = () => {
  const [selectPCPartBox, setSelectPCPartBox] = useState<
    Type_AsslbleContiner[] | []
  >([]);

  useEffect(() => {
    fetchElmentData();
  }, []);

  useEffect(() => {
    setSelectPCPartBox((prev) => {
      let changed = false;

      const findProductCpu = prev.find(
        (i) => i.title === "cpu-product" && i.ProductArray.length > 0,
      );
      const findProductMotherBord = prev.find(
        (i) => i.title === "motherboardProduct" && i.ProductArray.length > 0,
      );
      const findProductRam = prev.find(
        (i) => i.title === "ramProduct" && i.ProductArray.length > 0,
      );

      const next = prev.map((value) => {
        if (value.title === "motherboardProduct") {
          const testing = !findProductCpu;
          if (value.MandatoryPcPart !== testing) {
            changed = true;
            return { ...value, MandatoryPcPart: testing };
          }
        }
        if (value.title === "ramProduct") {
          const testing = !findProductMotherBord;
          if (value.MandatoryPcPart !== testing) {
            changed = true;
            return { ...value, MandatoryPcPart: testing };
          }
        }
        if (value.title === "cpuAirConditioner") {
          const testing = !findProductRam;
          if (value.MandatoryPcPart !== testing) {
            changed = true;
            return { ...value, MandatoryPcPart: testing };
          }
        }
        return value;
      });

      return changed ? next : prev;
    });
  }, [selectPCPartBox]);

  const { ParentHederImg, Img, Div, ComponentDiv } = styleComponent;

  const fetchElmentData = async () => {
    try {
      const { data: ElmentData } = await axios.get(
        "http://localhost:3300/AssmbleContinerElmentsData",
      );
      setSelectPCPartBox(ElmentData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Div>
      <ParentHederImg>
        <Img
          alt="."
          src="https://exo.ir/catalog/view/theme/exo/image/smart-assembly-header.jpg"
        ></Img>
      </ParentHederImg>
      <ComponentDiv>
        <contextUse.Provider value={{ selectPCPartBox, setSelectPCPartBox }}>
          <SelectPcProductBox></SelectPcProductBox>
          <ShoppingCart></ShoppingCart>
        </contextUse.Provider>
      </ComponentDiv>
    </Div>
  );
};
export default AssmbleContiner;
