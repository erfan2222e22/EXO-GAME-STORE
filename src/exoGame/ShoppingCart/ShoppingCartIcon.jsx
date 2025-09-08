import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShoppingCartIconBox = ({ valid, setValid, ProductLength }) => {
  return (
    <div
      style={{
        width: "40%",
        height: "55%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {ProductLength > 0 && (
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            backgroundColor: "#3c3",
            fontSize: "1.1rem",
            padding: "5px",
            position: "relative",
            textAlign: "center",
            left: "12px",
            bottom: "13px",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          {ProductLength}
        </span>
      )}
      <ShoppingCartIcon
        sx={{ position: "fixed" }}
        onClick={(e) => {
          e.stopPropagation();
          setValid(true);
        }}
      ></ShoppingCartIcon>
    </div>
  );
};

export default ShoppingCartIconBox;
