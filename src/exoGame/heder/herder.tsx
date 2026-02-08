import styleComponents from "./Style-Component/StyledComponentHeder";
import contextUse from "../useContext/useContext";
import HederNavigationLink from "./HederNavigationLinks/HederNavigationLinks";
import HederCatgory from "./herderCatgory/CatgoryHeder";
import HerderIconElmmennt from "./hederIconElmeent/herderIconElmmennt.";
import HederInputElment from "./HederInputElment/HederInputElment";
import axios from "axios";

import { useContext, useState, useEffect } from "react";
import emmiter, { EmmiterEvents } from "../../mitt/emmiter";
import { useUserIdContext } from "../userIdContext/userIdContext.jsx";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const Herder = () => {
  const { TooltipBox, ContinerHeder, ContinerLinksHeder } = styleComponents;

  const [catgoryDisplay, setCatgoryDisplay] = useState(false);
  const [drawerDisplay, setDrawerDisplay] = useState(false);
  const [elmentYPosition, setElmentYPosition] = useState(0);
  const [showEditAccountBox, setShowEditAccountBox] = useState(false);

  const { setValid, ProductLength } = useContext(contextUse);
  const { userId, setUserID } = useUserIdContext();

  const navigate = useNavigate();

  const scroled = () => {
    emmiter.on("yPosition", (data: EmmiterEvents["yPosition"]) => {
      setElmentYPosition(data.item);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scroled);
    return () => window.removeEventListener("scroll", scroled);
  }, []);

  useEffect(() => {
    getLocalStorageUserId();
  }, [userId, setUserID]);

  const getLocalStorageUserId = () => {
    const getLocalStorageId = localStorage.getItem("userId");
    getLocalStorageId && checkUserlogined(+getLocalStorageId);
  };

  const checkUserlogined = async (getLocalStorageId: number) => {
    try {
      const { data: userData } = await axios.get(
        `http://localhost:3300/users/${getLocalStorageId}`,
      );

      const { logined } = userData;
      logined && setUserID((prev: number) => (prev = getLocalStorageId));
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  const checkToRemoveNaviLinks = () => {
    const FristSliderYLocation = 129;
    return elmentYPosition > FristSliderYLocation ? true : false;
  };

  return (
    <ContinerHeder sx={{ height: checkToRemoveNaviLinks() ? "125px" : "85px" }}>
      <HederInputElment checkToRemoveNaviLinks={checkToRemoveNaviLinks} />
      <HerderIconElmmennt
        checkToRemoveNaviLinks={checkToRemoveNaviLinks}
        setValid={setValid}
        ProductLength={ProductLength}
        userId={userId}
        setShowEditAccountBox={setShowEditAccountBox}
        setDrawerDisplay={setDrawerDisplay}
        drawerDisplay={drawerDisplay}
        catgoryDisplay={catgoryDisplay}
        setCatgoryDisplay={setCatgoryDisplay}
        showEditAccountBox={showEditAccountBox}
      />

      {checkToRemoveNaviLinks() && (
        <ContinerLinksHeder
          sx={{
            gridArea: checkToRemoveNaviLinks() && "2 / 1 /3 / 5",
          }}
        >
          <TooltipBox>
            <HederNavigationLink
              catgoryDisplay={catgoryDisplay}
              setCatgoryDisplay={setCatgoryDisplay}
            />
          </TooltipBox>
        </ContinerLinksHeder>
      )}
      {catgoryDisplay && <HederCatgory setCatgoryDisplay={setCatgoryDisplay} />}
    </ContinerHeder>
  );
};
export default Herder;
