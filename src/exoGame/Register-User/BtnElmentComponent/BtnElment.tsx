import styleComponent from "./style-Component/style-BtnElment";
import { Component_Porps } from "./types/Types-BtnElment";
const BtnELment: Component_Porps = ({
  inputElmentAtributes,
  seIinputElmentAtributes,
  setAllInputValuseTrue,
  allInputValuseTrue,
}) => {
  const { ContinuBtn } = styleComponent;

  const handelBtnColor = (): string => {
    let ElmentColor = "";
    switch (allInputValuseTrue) {
      case null:
        ElmentColor = "#000000ff";
        break;
      case true:
        ElmentColor = "#2bdb2bcc";
        break;
      case false:
        ElmentColor = "#ff0303ff";
        break;
    }
    return ElmentColor;
  };

  const handelOnclick = () => {
    seIinputElmentAtributes((prev) => {
      return prev.map((item) =>
        item.importValue && item.value.trim().length === 0
          ? { ...item, error: `${item.nameInput} enter this input ` }
          : item
      );
    });
    const FindErrorInput = inputElmentAtributes.find(
      (fill) => fill.error.trim().length > 0 && fill.importValue
    );

    FindErrorInput === undefined
      ? setAllInputValuseTrue(true)
      : setAllInputValuseTrue(false);
  };

  return (
    <ContinuBtn
      sx={{
        "&:hover": {
          backgroundColor: handelBtnColor(),
        },
      }}
      onClick={handelOnclick}
    >
      continu
    </ContinuBtn>
  );
};
export default BtnELment;
