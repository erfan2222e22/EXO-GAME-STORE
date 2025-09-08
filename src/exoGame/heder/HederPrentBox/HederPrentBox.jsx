import ShopCartBox from "../ShopCartBox/ShopCartBox";
import Herder from "../herder";
import contextUse from "../../useContext/useContext";
import { useState, useEffect } from "react";

const HederPrentBox = () => {
  const [valid, setValid] = useState(false);
  const [ProductLength, setProductLength] = useState(0);

  const globalFunction = () => {
    setValid(false);
  };

  const callback = (childeData) => {
    setProductLength((prev) => (prev = childeData));
  };

  useEffect(() => {
    window.addEventListener("click", globalFunction);
  }, []);

  return (
    <contextUse.Provider value={{ valid, setValid, ProductLength }}>
      {valid && <ShopCartBox sendmassage={callback}></ShopCartBox>}
      <Herder></Herder>
    </contextUse.Provider>
  );
};

export default HederPrentBox;
