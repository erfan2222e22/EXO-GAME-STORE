import styleComponent from "../../../components/component-Style/StyleIconsSloderProductDiscription";
const IconsSlider = () => {
  const {
    BoxParent,
    StyleIconPermIdentityIcon,
    StyleIconCreditCardIcon,
    StyleIconAutorenewIcon,
    StyleIconShieldOutlinedIcon,
    StyleIconRocketLaunchOutlinedIcon,
  } = styleComponent;

  return (
    <BoxParent>
      <span>
        return product
        <StyleIconAutorenewIcon />
      </span>
      <span>
        send exo
        <StyleIconRocketLaunchOutlinedIcon />
      </span>
      <span>
        safe Payment
        <StyleIconCreditCardIcon />
      </span>
      <span>
        online suport
        <StyleIconPermIdentityIcon />
      </span>
      <span>
        Product Warranty
        <StyleIconShieldOutlinedIcon />
      </span>
    </BoxParent>
  );
};
export default IconsSlider;
