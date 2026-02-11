import PersonIcon from "@mui/icons-material/Person";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ShoppingCartIconBox from "../../ShoppingCart/ShoppingCartIcon";
import HederNavigationLink from "../HederNavigationLinks/HederNavigationLinks";
import styleComponent from "./style-Component/style-HederIconsElments";
import HederEditAccount from "../hederEditeAccount/hederEditAccount";

import { useNavigate } from "react-router-dom";
import { Drawer, Box } from "@mui/material";
import { Component_Props_Type } from "./types/type-HederIconsElment";

const HerderIconElmmennt: Component_Props_Type = ({
  checkToRemoveNaviLinks,
  setValid,
  ProductLength,
  userId,
  setShowEditAccountBox,
  setDrawerDisplay,
  drawerDisplay,
  catgoryDisplay,
  setCatgoryDisplay,
  showEditAccountBox,
}) => {
  const { BoxIcons, ContinerIconHeder, DrawerDisplay, IconDiv, Icons } =
    styleComponent;

  const navigate = useNavigate();

  return (
    <ContinerIconHeder
      sx={{
        gridArea: checkToRemoveNaviLinks() ? "1 / 5 / 3 / 6" : "1 / 4 / 3 / 6",
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
                ? setShowEditAccountBox((prev: any) => (prev = true))
                : navigate("/acount-login-Phone")
            }
          ></PersonIcon>

          <DrawerDisplay>
            <button
              style={{ border: "none", backgroundColor: "#fff" }}
              onClick={() => setDrawerDisplay(true)}
            >
              <Icons sx={{ color: "#858585" }} as={DensityMediumIcon}></Icons>.
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
        <HederEditAccount
          checkToRemoveNaviLinks={checkToRemoveNaviLinks}
          setShowEditAccountBox={setShowEditAccountBox}
        ></HederEditAccount>
      )}
    </ContinerIconHeder>
  );
};

export default HerderIconElmmennt;
