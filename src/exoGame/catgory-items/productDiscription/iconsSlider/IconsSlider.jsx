import styleComponent from "../../../components/component-Style/StyleIconsSloderProductDiscription";
const IconsSlider = () => {
  const {
    Box_Parent,
    StyleIcon_PermIdentityIcon,
    StyleIcon_CreditCardIcon,
    StyleIcon_AutorenewIcon,
    StyleIcon_ShieldOutlinedIcon,
    StyleIcon_RocketLaunchOutlinedIcon,
  } = styleComponent;
  return (
    <Box_Parent>
      <span>
        return product
        <StyleIcon_AutorenewIcon />
      </span>
      <span>
        send exo
        <StyleIcon_RocketLaunchOutlinedIcon />
      </span>
      <span>
        safe Payment
        <StyleIcon_CreditCardIcon />
      </span>
      <span>
        online suport
        <StyleIcon_PermIdentityIcon />
      </span>
      <span>
        Product Warranty
        <StyleIcon_ShieldOutlinedIcon />
      </span>
    </Box_Parent>
  );
};
export default IconsSlider;
