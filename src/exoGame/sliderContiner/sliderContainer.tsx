import { useEffect, useState } from "react";
import SugestExoSlider from "../sugestExo/sugestExo";
import axios from "axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
const SliderContainer = () => {
  const [offerItems, setOfferItems] = useState([]);
  const [lastFronExiItems, setLastFronExiItems] = useState([]);
  const [BestsellersExoItems, setBestsellersExoItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = async () => {
    const arrayAddres = {
      BESTSELLERS: "http://localhost:3300/BestsellersExoGameSliderProduct",
      LATEST: "http://localhost:3300/TheLatestFromExoSliderProduct",
      OFFERS: "http://localhost:3300/ExoOfferSliderProduct",
    } as const;
    try {
      const response = await Promise.all(
        Object.values(arrayAddres).map((urls) => axios.get(urls)),
      );
      const [BESTSELLERS, LATEST, OFFERS] = response.map((item) => item.data);
      setOfferItems(BESTSELLERS);
      setLastFronExiItems(LATEST);
      setBestsellersExoItems(OFFERS);
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  return (
    <>
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
    </>
  );
};
export default SliderContainer;
