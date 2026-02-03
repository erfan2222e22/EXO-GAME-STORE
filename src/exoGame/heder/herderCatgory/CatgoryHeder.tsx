import styleComponent from "./Style-Component/StyleCatgoryHeder";
import { useEffect, useState } from "react";
import axios from "axios";
import HederCatgoryContent from "./hederCatgoryText/HederCatgoryContent";
import { AxiosError } from "axios";
import ParentEmptyImg from "./emptyiImgBox/ParentEmptyBoxImg";
import { useNavigate } from "react-router-dom";
import {
  Component_Props,
  itemsType,
  Type_onMouseHandel,
} from "./types/Type_CatgoryHeder";

const HederCatgory: Component_Props = ({ setCatgoryDisplay }) => {
  const {
    HederCatgoryBox,
    KeyTexts,
    CatgoryContiner,
    KeyItemsBox,
    ImgBox,
    EmptyBox,
  } = styleComponent;

  const [reciveData, setReciveData] = useState({});

  const [ReciveDataValue, setReciveDataValue] = useState([
    { fristHalfArray: [], secendHalfArray: [], imgAddrs: "" },
  ]);
  const { fristHalfArray, secendHalfArray, imgAddrs } = ReciveDataValue[0];
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const { data: Dataitems } = await axios.get(
        "http://localhost:3300/CatgoryHederData"
      );
      setReciveData(await Dataitems);
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onMouseHandel: Type_onMouseHandel = (e, ItemValus) => {
    const { img, productList } = ItemValus;
    const { items } = productList;
    let conterHalf = 2;

    const calculatorHalfLength = items.length / conterHalf;

    const fristHalfArray = items.filter(
      (fiill: itemsType) => +fiill.id <= calculatorHalfLength
    );
    const secendHalfArray = items.filter(
      (fiill: itemsType) => +fiill.id > calculatorHalfLength
    );

    setReciveDataValue([
      {
        fristHalfArray: fristHalfArray,
        imgAddrs: img,
        secendHalfArray: secendHalfArray,
      },
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

      {imgAddrs.length > 0 ? (
        <>
          <CatgoryContiner>
            <div
              style={{
                marginTop:
                  fristHalfArray?.length + secendHalfArray?.length > 30
                    ? "250px"
                    : "0px",
              }}
            >
              {fristHalfArray?.map((item, key) => {
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
                  fristHalfArray?.length + secendHalfArray?.length > 30
                    ? "305px"
                    : "0px",
              }}
            >
              {secendHalfArray?.map((item, key) => {
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
          <ImgBox>
            <img
              src={ReciveDataValue[0].imgAddrs}
              style={{ width: "100%", height: "100%" }}
              alt="🖼"
            ></img>
          </ImgBox>
        </>
      ) : (
        <EmptyBox>
          <ParentEmptyImg></ParentEmptyImg>
        </EmptyBox>
      )}
    </HederCatgoryBox>
  );
};
export default HederCatgory;
