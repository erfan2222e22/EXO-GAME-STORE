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
import { Box } from "@mui/material";
const Footer = () => {
  const { BoxFooter } = styleComponent;

  const elmentsArray = [
    {
      id: 1,
      title: "instagram",
      LinkAddres: "https://www.instagram.com/",
      component:
        "https://img.icons8.com/?size=100&id=eRJfQw0Zs44S&format=png&color=000000",
    },
    {
      id: 2,
      title: "telgram",
      LinkAddres: "https://telegram.org/",
      component:
        "https://img.icons8.com/?size=100&id=9R1sV3QvY18K&format=png&color=000000",
    },
    {
      id: 3,
      title: "youtube",
      LinkAddres: "https://www.youtube.com/",
      component:
        "https://img.icons8.com/?size=100&id=37325&format=png&color=000000",
    },
    {
      id: 4,
      title: "linkdin",
      LinkAddres: "https://www.linkedin.com/",
      component:
        "https://img.icons8.com/?size=100&id=447&format=png&color=000000",
    },
  ];

  return (
    <div>
      <BoxFooter>
        {elmentsArray.map((value) => {
          return (
            <Tooltip title={value.title}>
              <Link to={value.LinkAddres}>
                <Box
                  component="img"
                  src={value.component}
                  alt="🖤"
                  sx={{ textAlign: "center", width: "2.7%", height: "2.7%" }}
                ></Box>
              </Link>
            </Tooltip>
          );
        })}
        <img src={img} alt="img" className={style.img}></img>
        <br></br>
        <span> Made with ❤ </span>
        <h6>
          <LocationOnIcon></LocationOnIcon>
          Address:
          <span>
            Tehran, Vali Asr and Taleghani intersection, Noor Shopping Complex,
            3rd commercial floor, Unit 8028
          </span>
        </h6>
      </BoxFooter>
    </div>
  );
};
export default Footer;
