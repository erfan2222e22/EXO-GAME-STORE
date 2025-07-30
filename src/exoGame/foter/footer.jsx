import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
import img from "./navbar-Img/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styleComponent from "../components/component-Style/StyleFooter";
const Footer = () => {
  const { BoxFooter } = styleComponent;
  return (
    <div>
      <BoxFooter>
        <Tooltip title="instagram">
          <Link to="https://www.instagram.com/" className={style.icons}>
            <InstagramIcon sx={{ textAlign: "center" }}></InstagramIcon>
          </Link>
        </Tooltip>
        <Tooltip title="telgram">
          <Link to="https://telegram.org/" className={style.icons}>
            <TelegramIcon sx={{ textAlign: "center" }}></TelegramIcon>
          </Link>
        </Tooltip>
        <Tooltip title="youtube">
          <Link to="https://www.youtube.com/" className={style.icons}>
            <YouTubeIcon sx={{ textAlign: "center" }}></YouTubeIcon>
          </Link>
        </Tooltip>
        <Tooltip title="linkdin">
          <Link to="https://www.linkedin.com/" className={style.icons}>
            <LinkedInIcon sx={{ textAlign: "center" }}></LinkedInIcon>
          </Link>
        </Tooltip>
        <img src={img} alt="img" className={style.img}></img>
        <span>ساخته شده با ❤️ </span>
        <h6>
          <LocationOnIcon></LocationOnIcon>
          نشانی:
          <span>
            تهران، تقاطع خیابان ولیعصر و طالقانی، مجتمع تجاری نور، طبقه همکف سوم
            تجاری، واحد ۸۰۲۸
          </span>
        </h6>
        {/* <Box component=""></Box> */}
      </BoxFooter>
    </div>
  );
};
export default Footer;
