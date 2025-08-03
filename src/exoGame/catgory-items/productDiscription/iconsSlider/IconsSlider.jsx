import { Typography } from "@mui/material";
import styleComponent from "../../../components/component-Style/StyleIconsSloderProductDiscription";
const IconsSlider = () => {
  const {
    BoxParent,
    StyleIconPermIdentityIcon,
    StyleIconCreditCardIcon,
    StyleIconAutorenewIcon,
    StyleIconShieldOutlinedIcon,
    StyleIconRocketLaunchOutlinedIcon,
    StyleParagraf,
  } = styleComponent;

  return (
    <BoxParent>
      <StyleParagraf>
        return product
        <StyleIconAutorenewIcon sx={{ color: "#818181bf" }} />
      </StyleParagraf>
      <StyleParagraf>
        send exo
        <StyleIconRocketLaunchOutlinedIcon />
      </StyleParagraf>
      <StyleParagraf>
        safe Payment
        <StyleIconCreditCardIcon />
      </StyleParagraf>
      <StyleParagraf>
        online suport
        <StyleIconPermIdentityIcon />
      </StyleParagraf>
      <StyleParagraf>
        Product Warranty
        <StyleIconShieldOutlinedIcon />
      </StyleParagraf>
    </BoxParent>
  );
};
export default IconsSlider;
