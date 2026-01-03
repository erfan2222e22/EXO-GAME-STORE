import React, { useRef, useState, useEffect } from "react";
import styleComponent from "./style_Component/Style-RegisterCode-Box";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosError } from "axios";
import { TypeLocation, Type_handelCatchError } from "./types/typeRegisterCode";
import InputElment from "./inputElment/inputElment";
import RegisterBtnElment from "./btnElment/RegisterBtnElment";
import { addDataToServer } from "./addDataToServer/AddDataToServer";

const RegisterCodeBox = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { code, phoneNumber }: TypeLocation = location.state;
  const { BoxConteriner, ParentBox, HederImg } = styleComponent;

  const [UserInputCode, setUserInputCode] = useState<string[]>( //input Box from code length
    Array.from({ length: code.length }, () => "")
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [userId, setUserId] = useState(0);
  const [validInterdCode, setValidInterdCode] = useState(null);
  const [userIsRegistered, setUserIsRegistered] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValidInterdCode(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [validInterdCode]);

  useEffect(() => {
    fetchPhoneNumber();
  }, []);

  const fetchPhoneNumber = async () => {
    try {
      const { data: dataUser } = await axios.get(
        `http://localhost:3300/users?phoneNumber=${phoneNumber}`
      );
      const { id, logined, ...rest } = dataUser[0] || {
        id: "",
        logined: "",
        items: "",
      };
      const validating = Object.values(rest).every(
        (items: any) => items.length > 0
      );

      if (dataUser.length === 0) {
        setUserIsRegistered(false);
      } else if (validating && dataUser.length === 1) {
        setUserIsRegistered(true);
        setUserId(id);
      } else if (!validating && dataUser.length > 0) {
        setUserIsRegistered(null);
      } else {
        setUserIsRegistered(false);
      }
    } catch (err) {
      handelCatchError(err as AxiosError);
    }
  };
  // userIsRegistered,

  const navigation = () => {
    addDataToServer(
      userIsRegistered,
      navigate,
      userId,
      phoneNumber,
      handelCatchError
    );
  };

  const handelCatchError: Type_handelCatchError = (err) => {
    const errStatus = err as AxiosError;
    axios.isAxiosError(err) &&
      navigate("/failedToFetch", {
        state: { errorStatus: errStatus.status },
      });
  };

  const SetColorElment = (): string => {
    let colorElment = "";
    switch (validInterdCode) {
      case null:
        colorElment = "#040404cc";
        break;
      case false:
        colorElment = "#ff0000cc";
        break;
      case true:
        colorElment = "#03c03c";
        break;
    }
    return colorElment;
  };

  return (
    <BoxConteriner>
      <ParentBox>
        <HederImg
          as="img"
          aria-label="."
          src="https://exo.ir/catalog/view/theme/exo/image/logo.svg"
        ></HederImg>

        <InputElment
          inputRefs={inputRefs}
          UserInputCode={UserInputCode}
          setUserInputCode={setUserInputCode}
          SetColorElment={SetColorElment}
        />
        <RegisterBtnElment
          code={code}
          UserInputCode={UserInputCode}
          setValidInterdCode={setValidInterdCode}
          setUserInputCode={setUserInputCode}
          SetColorElment={SetColorElment}
          validInterdCode={validInterdCode}
          navigation={navigation}
        />
        {validInterdCode === false && (
          <Typography sx={{ color: "red" }}>
            code is wrong pls try again!
          </Typography>
        )}
        {validInterdCode && (
          <Typography sx={{ color: "green" }}>code is valid !</Typography>
        )}
      </ParentBox>
    </BoxConteriner>
  );
};
export default RegisterCodeBox;
