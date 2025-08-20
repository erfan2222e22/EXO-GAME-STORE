import ShopCartBox from "../ShopCartBox/ShopCartBox";
import Herder from "../herder";
import contextUse from "../../useContext/useContext";
import { useState, useEffect } from "react";

const HederPrentBox = () => {
  const [valid, setValid] = useState(false);

  const globalFunction = () => {
    setValid(false);
  };

  useEffect(() => {
    window.addEventListener("click", globalFunction);
  }, []);

  return (
    <contextUse.Provider value={{ valid, setValid }}>
      {valid && <ShopCartBox></ShopCartBox>}
      <Herder></Herder>
    </contextUse.Provider>
  );
};

export default HederPrentBox;
