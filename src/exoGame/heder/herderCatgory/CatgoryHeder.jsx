import styleComponent from "./Style-Component/StyleCatgoryHeder";
import { useEffect, useState } from "react";
import axios from "axios";
import HederCatgoryContent from "./hederCatgoryText/HederCatgoryContent";
import { useNavigate } from "react-router-dom";
import FailToFetchDataPage from "../../failToFetchDataPage/failToFetchDataPage";
const HederCatgory = ({ setCatgoryDisplay }) => {
  const {
    HederCatgoryBox,
    KeyTexts,
    CatgoryContiner,
    KeyItemsBox,
    Img,
    ImgBox,
  } = styleComponent;
  const navigate = useNavigate();

  const [reciveData, setReciveData] = useState({});

  const [ReciveDataValue, setReciveDataValue] = useState([
    { fristHalfArray: [] },
    { secendHalfArray: [] },
    { imgAddrs: {} },
  ]);
  const [fristHalfArray, secendHalfArray, imgAddrs] = ReciveDataValue;

  const fetchData = async () => {
    try {
      const { data: Dataitems } = await axios.get(
        "http://localhost:3300/CatgoryHederData"
      );
      setReciveData(await Dataitems);
    } catch (err) {
      FailToFetchDataPage(navigate)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onMouseHandel = (e, ItemKeys, ItemValuse) => {
    const { img, productList } = ItemValuse;
    const { items } = productList;
    let conter = 2;

    const calculatorHalfLength = items.length / conter;

    const fristHalfArray = items.filter(
      (fiill) => +fiill.id <= calculatorHalfLength
    );
    const secendHalfArray = items.filter(
      (fiill) => +fiill.id > calculatorHalfLength
    );

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
              <KeyTexts
                component="p"
                onMouseEnter={(e) => onMouseHandel(e, _, item)}
              >
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
              fristHalfArray?.length + secendHalfArray?.length > 30
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
              fristHalfArray?.length + secendHalfArray?.length > 30
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
      <ImgBox>
        <Img src={imgAddrs?.imgAddrs} alt="🖤" component="img"></Img>
      </ImgBox>
    </HederCatgoryBox>
  );
};

export default HederCatgory;
