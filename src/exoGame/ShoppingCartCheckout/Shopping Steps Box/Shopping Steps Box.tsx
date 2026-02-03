import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import styleComponent from "./Style-Component/StyleShoppingStepsBox";

const ShoppingStepBox = () => {
  const {
    ContinerIcons,
    ParentBox,
    ContinertBox,
    ContinerIconsShopping,
    Line,
  } = styleComponent;
  return (
    <ParentBox>
      <ContinertBox>
        <ContinerIconsShopping>
          Shopping Cart
          <LocalGroceryStoreOutlinedIcon
            sx={{ color: "#03c03c", fontSize: "40px" }}
          ></LocalGroceryStoreOutlinedIcon>
        </ContinerIconsShopping>
        <Line as="hr"></Line>
        <ContinerIcons>
          Shipping Details
          <LocalShippingOutlinedIcon
            sx={{ color: "#818181", fontSize: "40px" }}
          ></LocalShippingOutlinedIcon>
        </ContinerIcons>
        <Line as="hr"></Line>
        <ContinerIcons>
          Payment
          <CreditCardOutlinedIcon
            sx={{ color: "#818181", fontSize: "40px" }}
          ></CreditCardOutlinedIcon>
        </ContinerIcons>
      </ContinertBox>
    </ParentBox>
  );
};
export default ShoppingStepBox;
