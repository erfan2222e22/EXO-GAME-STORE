import styleComponent from "./Style-Component/StyledComponentHeder";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { Link } from "react-router-dom";
import { Component_Props } from "./types/Type_HederNavigationLinks";

const HederNavigationLink: Component_Props = ({
  catgoryDisplay,
  setCatgoryDisplay,
}) => {
  const { Spans, LinkRoter, Icons } = styleComponent;

  const elmentItmes = [
    {
      id: 1,
      text: "Categories",
      component: DensityMediumIcon,
      addresLink: "",
      onMouseEnter: true,
    },
    {
      id: 2,
      text: "Open box",
      component: Inventory2OutlinedIcon,
      addresLink: "",
      onMouseEnter: false,
    },
    {
      id: 3,
      text: "Smart Assemble",
      component: DashboardOutlinedIcon,
      addresLink: "/pc_assemble",
      onMouseEnter: false,
    },
    {
      id: 4,
      text: "Exo mark",
      component: SpeedOutlinedIcon,
      addresLink: "/benchmark_Home",
      onMouseEnter: false,
    },
    { id: 5, text: "Mag", component: ArticleOutlinedIcon, addresLink: "" },
    {
      id: 6,
      text: "About Us",
      component: DensityMediumIcon,
      addresLink: "/about-us",
      onMouseEnter: false,
    },
  ];

  const onMouseHandel = () => {
    setCatgoryDisplay((prev: boolean) => (prev = true));
  };

  const onMouseLeaveHandel = () => {
    setCatgoryDisplay((prev: boolean) => (prev = false));
  };

  return (
    <div
      style={{ display: "flex", width: "100%", gap: "4px", overflow: "hidden" }}
    >
      {elmentItmes.map((item, index) => {
        return (
          <Spans
            key={index}
            onMouseEnter={() => item.onMouseEnter && onMouseHandel()}
            onMouseLeave={() => item.onMouseEnter && onMouseLeaveHandel()}
          >
            <LinkRoter as={Link} to={item.addresLink}>
              {item.text}
            </LinkRoter>
            <Icons
              sx={{
                color:
                  item.onMouseEnter && catgoryDisplay ? "#03c13c" : "#606060",
              }}
              as={item.component}
            ></Icons>
          </Spans>
        );
      })}
    </div>
  );
};
export default HederNavigationLink;
