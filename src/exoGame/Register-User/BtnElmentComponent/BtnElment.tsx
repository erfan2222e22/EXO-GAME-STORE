import { useNavigate, useLocation } from "react-router-dom";
import styleComponent from "./style-Component/style-BtnElment";
import { Component_Porps } from "./types/Types-BtnElment";
import axios from "axios";
import { AxiosError } from "axios";
const BtnELment: Component_Porps = ({
  inputElmentAtributes,
  seIinputElmentAtributes,
  setAllInputValuseTrue,
  allInputValuseTrue,
}) => {
  const location = useLocation();
  const { id } = location.state || {};
  const navigate = useNavigate();
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
      (fill) => fill.value.length === 0 && fill.importValue
    );

    FindErrorInput === undefined
      ? setAllInputValuseTrue(true)
      : setAllInputValuseTrue(false);

    allInputValuseTrue && navigating();
  };

  const navigating = async () => {
    try {
      const InputValues = inputElmentAtributes
        .filter((fill) => fill.importValue)
        .map((item) => item.value);
      const [userName, LastName, email, _, password] = InputValues;

      const sendItem = {
        name: userName,
        LastName: LastName,
        email: email,
        logined: true,
        password: password,
      };

      await axios.patch(`http://localhost:3300/users/${id}`, sendItem);

      navigate("/acount", {
        state: { id: id },
      });
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
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
