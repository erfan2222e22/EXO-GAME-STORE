import { styled } from "@mui/material/styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Box } from "@mui/material";

const BoxParent = styled(Box)({
  display: "flex",
  gap: "5%",
  justifyContent: "center",
  marginTop: "50px",
});

const StyleIconPermIdentityIcon = styled(PermIdentityIcon)({
  fontSize: "45px",
  "&:hover": {
    color: "#03c03c",
  },
});
const StyleIconCreditCardIcon = styled(CreditCardIcon)({
  fontSize: "45px",
  "&:hover": {
    color: "#03c03c",
  },
});
const StyleIconAutorenewIcon = styled(AutorenewIcon)({
  fontSize: "45px",
  "&:hover": {
    color: "#03c03c",
  },
});
const StyleIconShieldOutlinedIcon = styled(ShieldOutlinedIcon)({
  fontSize: "45px",
  "&:hover": {
    color: "#03c03c",
  },
});
const StyleIconRocketLaunchOutlinedIcon = styled(RocketLaunchOutlinedIcon)({
  fontSize: "45px",
  animationDuration: "1s",
  "&:hover": {
    color: "#03c03c",
  },
});

const styleComponents = {
  BoxParent,
  StyleIconPermIdentityIcon,
  StyleIconCreditCardIcon,
  StyleIconAutorenewIcon,
  StyleIconShieldOutlinedIcon,
  StyleIconRocketLaunchOutlinedIcon,
};

export default styleComponents;
