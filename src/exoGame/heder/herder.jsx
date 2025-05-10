import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import components from "../components/component-Style/StyledComponentNavbar";
import logoImg from "./hederLogoImg/logo.png";
import Tooltip from "@mui/material/Tooltip";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { Link } from "react-router-dom";
import style from "./heder.module.css";

export default function Herder() {
  const { StyledAppBar, CoustomToolbar, SerchField, Box_icons } = components;
  return (
    <div>
      <StyledAppBar>
        <CoustomToolbar>
          <Box_icons>
            <ShoppingCartIcon></ShoppingCartIcon>
            <Link to="/acount-login-Phone" style={{ color: "#858585" }}>
              <PersonIcon></PersonIcon>
            </Link>
          </Box_icons>
          <SerchField
            placeholder="جستجو..."
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
            <img src={logoImg} alt="none_img" className={style.logo_img} />
          </Link>
        </CoustomToolbar>
        <Tooltip className={style.toolTip}>
          <span className={style.spans}>
            دسته بندی ها
            <span className={style.spans}>
              <Inventory2OutlinedIcon
                className={style.icon_tool_Tip}
              ></Inventory2OutlinedIcon>
              جعبه باز
            </span>
            <span className={style.spans}>
              <DashboardOutlinedIcon
                className={style.icon_tool_Tip}
              ></DashboardOutlinedIcon>
              اسمبل هوشمند
            </span>
            <span className={style.spans}>
              <SpeedOutlinedIcon
                className={style.icon_tool_Tip}
              ></SpeedOutlinedIcon>
              اگزومارک
            </span>
          </span>
          <span className={style.spans}>
            <ArticleOutlinedIcon
              className={style.icon_tool_Tip}
            ></ArticleOutlinedIcon>
            مگ
          </span>
          <span className={style.spans}>
            <Link className={style.link} to="/about-us">
              درباره ما
            </Link>
            <DensityMediumIcon
              className={style.icon_tool_Tip}
            ></DensityMediumIcon>
          </span>
        </Tooltip>
      </StyledAppBar>
    </div>
  );
}
