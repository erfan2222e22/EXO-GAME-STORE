import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import styleComponents from "./Style-Component/StyledComponentHeder";
import ShoppingCartIconBox from "../ShoppingCart/ShoppingCartIcon";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import contextUse from "../useContext/useContext";
import { Box } from "@mui/system";
import { Drawer } from "@mui/material";
import HederNavigationLink from "./HederNavigationLinks/HederNavigationLinks";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import HederCatgory from "./herderCatgory/CatgoryHeder";
import emmiter, { EmmiterEvents } from "../../mitt/emmiter";
import { useUserIdContext } from "../userIdContext/userIdContext.jsx";
import { useNavigate } from "react-router-dom";

const Herder = () => {
  const {
    SerchField,
    BoxIcons,
    TooltipBox,
    LogoImg,
    DrawerDisplay,
    Icons,
    SmallSizeBoxLogoAndInput,
    MediumeAndLargeBoxLogoAndInput,
    ContinerHeder,
    ContinerIconHeder,
    ContinerInputHeder,
    ContinerLinksHeder,
    InputDiv,
    IconDiv,
    EditAccountBox,
    EditAccountLinks,
  } = styleComponents;

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
    const getLocalStorageId = localStorage.getItem("userId");
    getLocalStorageId &&
      setUserID((prev: number) => (prev = +getLocalStorageId));
  }, []);

  const checkToRemoveNaviLinks = () => {
    const FristSliderYLocation = 129;
    return elmentYPosition > FristSliderYLocation ? true : false;
  };

  return (
    <ContinerHeder sx={{ height: checkToRemoveNaviLinks() ? "125px" : "85px" }}>
      <ContinerInputHeder
        sx={{
          gridArea: checkToRemoveNaviLinks()
            ? "1 / 1 / 2 / 5"
            : "1 / 1 / 4 / 4",
        }}
      >
        <InputDiv>
          <SmallSizeBoxLogoAndInput>
            <Link to="/">
              <LogoImg
                src="https://exo.ir/catalog/view/theme/exo/image/logo.svg"
                alt="😑"
                as="img"
              ></LogoImg>
            </Link>
            <SerchField
              placeholder="search..."
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ marginLeft: "13px" }} />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
          </SmallSizeBoxLogoAndInput>

          <MediumeAndLargeBoxLogoAndInput>
            <Link to="/">
              <LogoImg
                src="https://exo.ir/catalog/view/theme/exo/image/logo.svg"
                alt="😑"
                as="img"
              ></LogoImg>
            </Link>
            <SerchField
              placeholder="search..."
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ marginLeft: "13px" }} />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
          </MediumeAndLargeBoxLogoAndInput>
        </InputDiv>
      </ContinerInputHeder>

      <ContinerIconHeder
        sx={{
          gridArea: checkToRemoveNaviLinks()
            ? "1 / 5 / 3 / 6"
            : "1 / 4 / 3 / 6",
        }}
      >
        <IconDiv>
          <BoxIcons>
            <ShoppingCartIconBox
              setValid={setValid}
              ProductLength={ProductLength}
            ></ShoppingCartIconBox>
            <PersonIcon
              onClick={() =>
                userId > 0
                  ? setShowEditAccountBox((prev) => (prev = true))
                  : navigate("/acount-login-Phon")
              }
            ></PersonIcon>

            <DrawerDisplay>
              <button
                style={{ border: "none", backgroundColor: "#fff" }}
                onClick={() => setDrawerDisplay(true)}
              >
                <Icons sx={{ color: "#858585" }} as={DensityMediumIcon}></Icons>
                .
              </button>
              <Drawer
                open={drawerDisplay}
                onClick={() => setDrawerDisplay(false)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    overflow: "hidden",
                  }}
                >
                  <HederNavigationLink
                    catgoryDisplay={catgoryDisplay}
                    setCatgoryDisplay={setCatgoryDisplay}
                  />
                </Box>
              </Drawer>
            </DrawerDisplay>
          </BoxIcons>
        </IconDiv>
        {showEditAccountBox && (
          <EditAccountBox
            style={{
              top: checkToRemoveNaviLinks() && "12%",
              left: checkToRemoveNaviLinks() && "9%",
            }}
          >
            <EditAccountLinks as="p">My Account</EditAccountLinks>
            <EditAccountLinks as="p">Order History</EditAccountLinks>
            <EditAccountLinks as="p">fav List</EditAccountLinks>
            <EditAccountLinks as="p">Exit</EditAccountLinks>
          </EditAccountBox>
        )}
      </ContinerIconHeder>

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
