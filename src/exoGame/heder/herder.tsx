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

const Herder = () => {
  const {
    StyledAppBar,
    CoustomToolbar,
    SerchField,
    BoxIcons,
    TooltipBox,
    LogoImg,
    DrawerDisplay,
    Icons,
    SmallSizeBoxLogoAndInput,
    MediumeAndLargeBoxLogoAndInput,
  } = styleComponents;

  const { valid, setValid, ProductLength } = useContext(contextUse);
  const [catgoryDisplay, setCatgoryDisplay] = useState(false);
  const [drawerDisplay, setDrawerDisplay] = useState(false);
  const [elmentYPosition, setElmentYPosition] = useState(0);

  const scroled = () => {
    emmiter.on("yPosition", (data: EmmiterEvents["yPosition"]) => {
      setElmentYPosition(data.item);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scroled);
    return () => window.removeEventListener("scroll", scroled);
  }, []);

  return (
    <Box>
      <StyledAppBar sx={{ height: elmentYPosition < 129 ? "80px" : "125px" }}>
        <CoustomToolbar>
          <Box>
            <BoxIcons>
              <ShoppingCartIconBox
                setValid={setValid}
                ProductLength={ProductLength}
              ></ShoppingCartIconBox>
              <Link to="/acount-login-Phone" style={{ color: "#858585" }}>
                <PersonIcon></PersonIcon>
              </Link>
              <DrawerDisplay>
                <button
                  style={{ border: "none", backgroundColor: "#fff" }}
                  onClick={() => setDrawerDisplay(true)}
                >
                  <Icons
                    sx={{ color: "#858585" }}
                    as={DensityMediumIcon}
                  ></Icons>
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
          </Box>
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
            <Link to="/">
              <LogoImg
                src="https://exo.ir/catalog/view/theme/exo/image/logo.svg"
                alt="😑"
                as="img"
              ></LogoImg>
            </Link>
          </MediumeAndLargeBoxLogoAndInput>
        </CoustomToolbar>
        <TooltipBox>
          {elmentYPosition < 129 ? (
            <></>
          ) : (
            <HederNavigationLink
              catgoryDisplay={catgoryDisplay}
              setCatgoryDisplay={setCatgoryDisplay}
            />
          )}
        </TooltipBox>
      </StyledAppBar>
      {catgoryDisplay && <HederCatgory setCatgoryDisplay={setCatgoryDisplay} />}
    </Box>
  );
};
export default Herder;
