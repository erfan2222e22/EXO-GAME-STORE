import styleComponent from "./Style-Component/StyleCatgoryHeder";
import { useEffect, useState } from "react";
import axios from "axios";
import HederCatgoryContent from "./hederCatgoryText/HederCatgoryContent";
import FailToFetchDataPage from "../../failToFetchDataPage/failToFetchDataPage";
import ParentEmptyImg from "./emptyiImgBox/ParentEmptyBoxImg";

import {
  Component_Props,
  itemsType,
  Type_ItemValue,
} from "./types/Type_CatgoryHeder";

const HederCatgory: Component_Props = ({ setCatgoryDisplay }) => {
  const { HederCatgoryBox, KeyTexts, CatgoryContiner, KeyItemsBox, ImgBox } =
    styleComponent;

  const [reciveData, setReciveData] = useState({});

  const [ReciveDataValue, setReciveDataValue] = useState([
    { fristHalfArray: [] },
    { secendHalfArray: [] },
    { imgAddrs: "" },
  ]);
  const [fristHalfArray, secendHalfArray, imgAddrs] = ReciveDataValue;

  const fetchData = async () => {
    try {
      const { data: Dataitems } = await axios.get(
        "http://localhost:3300/CatgoryHederData"
      );
      setReciveData(await Dataitems);
    } catch (err) {
      FailToFetchDataPage();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onMouseHandel = (
    e: React.MouseEvent<HTMLElement>,
    ItemValus: Type_ItemValue
  ) => {
    const { img, productList } = ItemValus;
    const { items } = productList;
    let conter = 2;

    const calculatorHalfLength = items.length / conter;

    const fristHalfArray = items.filter(
      (fiill: itemsType) => +fiill.id <= calculatorHalfLength
    );
    const secendHalfArray = items.filter(
      (fiill: itemsType) => +fiill.id > calculatorHalfLength
    );

    console.log(fristHalfArray);

    setReciveDataValue([
      { fristHalfArray: fristHalfArray },
      { secendHalfArray: secendHalfArray },
      { imgAddrs: img },
    ]);
  };

  useEffect(() => {}, [ReciveDataValue, imgAddrs]);

  return (
    <HederCatgoryBox
      onMouseEnter={() => setCatgoryDisplay((prev) => (prev = true))}
      onMouseLeave={() => setCatgoryDisplay((prev) => (prev = false))}
    >
      <KeyItemsBox>
        {Object.entries(reciveData).map(([_, item]) => {
          return (
            <div>
              <KeyTexts as="p" onMouseEnter={(e) => onMouseHandel(e, item)}>
                {_}
              </KeyTexts>
            </div>
          );
        })}
      </KeyItemsBox>
      <CatgoryContiner>
        <div
          style={{
            marginTop:
              fristHalfArray.fristHalfArray?.length +
                secendHalfArray.secendHalfArray?.length >
              30
                ? "250px"
                : "0px",
          }}
        >
          {fristHalfArray.fristHalfArray?.map((item, key) => {
            return (
              <HederCatgoryContent
                item={item}
                key={key}
                setCatgoryDisplay={setCatgoryDisplay}
              />
            );
          })}
        </div>
        <div
          style={{
            marginTop:
              fristHalfArray?.fristHalfArray.length +
                secendHalfArray?.secendHalfArray.length >
              30
                ? "305px"
                : "0px",
          }}
        >
          {secendHalfArray.secendHalfArray?.map((item, key) => {
            return (
              <HederCatgoryContent
                item={item}
                key={key}
                setCatgoryDisplay={setCatgoryDisplay}
              />
            );
          })}
        </div>
      </CatgoryContiner>
      {imgAddrs.imgAddrs.length > 0 ? (
        <ImgBox>
          <img
            src={ReciveDataValue[2].imgAddrs}
            style={{ width: "100%", height: "100%" }}
            alt="🖼"
            onClick={() => console.log(imgAddrs.imgAddrs.length)}
          ></img>
        </ImgBox>
      ) : (
        // <ParentEmptyImg></ParentEmptyImg>
        <h2>Hover on items </h2>
      )}
    </HederCatgoryBox>
  );
};
export default HederCatgory;
