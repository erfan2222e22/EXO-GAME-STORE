import styleComponents from "../../components/component-Style/StyledComponentHeder";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { Link } from "react-router-dom";
const HederNavigationLink = () => {
  const { Spans, LinkRoter, Icons } = styleComponents;
  return (
    <>
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
    </>
  );
};
export default HederNavigationLink;
