import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShoppingCartIconBox = ({ valid, setValid }) => {
  return (
    <div>
      <ShoppingCartIcon
        onClick={(e) => {
          e.stopPropagation();
          setValid(true);
        }}
      ></ShoppingCartIcon>
    </div>
  );
};

export default ShoppingCartIconBox;
