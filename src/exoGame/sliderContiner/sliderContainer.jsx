import { useEffect, useState } from "react";
import SugestExoSlider from "../sugestExo/sugestExo";
import axios from "axios";

const SliderContainer = () => {
  const [offerItems, setOfferItems] = useState([]);
  const [lastFronExiItems, setLastFronExiItems] = useState([]);
  const [BestsellersExoItems, setBestsellersExoItems] = useState([]);

  const fetchDataFromServer = async () => {
    const arrayAddres = [
      "http://localhost:3300/BestsellersExoGameSliderProduct",
      "http://localhost:3300/TheLatestFromExoSliderProduct",
      "http://localhost:3300/ExoOfferSliderProduct",
    ];
    const allData = [];

    for (let i in arrayAddres) {
      try {
        const response = axios.get(arrayAddres[i]);

        allData.push({
          data: (await response).data,
        });

        setOfferItems(allData[0].data);
        setLastFronExiItems(allData[1].data);
        setBestsellersExoItems(allData[2].data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, {});

  return (
    <div>
      <SugestExoSlider
        arrayItems={offerItems}
        titeltext="exo offer"
      ></SugestExoSlider>
      <SugestExoSlider
        arrayItems={lastFronExiItems}
        titeltext="The latest from exo"
      ></SugestExoSlider>
      <SugestExoSlider
        arrayItems={BestsellersExoItems}
        titeltext="BestsellersExoGame"
      ></SugestExoSlider>
    </div>
  );
};
export default SliderContainer;
