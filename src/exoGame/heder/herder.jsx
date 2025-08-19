import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import styleComponents from "../components/component-Style/StyledComponentHeder";
import logoImg from "./hederLogoImg/logo.png";
import Tooltip from "@mui/material/Tooltip";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartIconBox from "../ShoppingCart/ShoppingCartIcon";
import { Link } from "react-router-dom";
import style from "./heder.module.css";
import { useContext } from "react";
import contextUse from "../useContext/useContext";

const Herder = () => {
  const {
    StyledAppBar,
    CoustomToolbar,
    SerchField,
    BoxIcons,
    Spans,
    Icons,
    TooltipBox,
    LogoImg,
    LinkRoter,
  } = styleComponents;

  const { valid, setValid } = useContext(contextUse);

  return (
    <div>
      <StyledAppBar>
        <CoustomToolbar>
          <div>
            <BoxIcons>
              <ShoppingCartIconBox
                valid={valid}
                setValid={setValid}
              ></ShoppingCartIconBox>
              {/* <Link to="/acount-login-Phone" style={{ color: "#858585" }}> */}
              <PersonIcon></PersonIcon>
              {/* </Link> */}
            </BoxIcons>
          </div>
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
            <LogoImg src={logoImg} alt="😑" component="img"></LogoImg>
          </Link>
        </CoustomToolbar>
        <TooltipBox>
          <Spans component="span">
            <LinkRoter component={Link}>Categories</LinkRoter>

            <Icons component={Inventory2OutlinedIcon}></Icons>
          </Spans>
          <Spans component="span">
            <LinkRoter component={Link}>Open box</LinkRoter>
            <Icons component={Inventory2OutlinedIcon}></Icons>
          </Spans>
          <Spans component="span">
            <LinkRoter component={Link}>Smart Assemble</LinkRoter>
            <Icons component={DashboardOutlinedIcon}></Icons>
          </Spans>
          <Spans component="span">
            <LinkRoter component={Link}>Exo mark</LinkRoter>
            <Icons component={SpeedOutlinedIcon}></Icons>
          </Spans>
          <Spans component="span">
            <LinkRoter component={Link}>Mag</LinkRoter>
            <Icons component={ArticleOutlinedIcon}></Icons>
          </Spans>
          <Spans>
            <LinkRoter component={Link} to="/about-us">
              About Us
            </LinkRoter>
            <Icons component={DensityMediumIcon}></Icons>
          </Spans>
        </TooltipBox>
      </StyledAppBar>
    </div>
  );
};
export default Herder;
