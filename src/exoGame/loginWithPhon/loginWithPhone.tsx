import React, { useEffect, useState } from "react";
import styleComponent from "./Style-Component/StyledComponentLoginPhone";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Type_checkPhoneNumber,
  Type_onChangHandelInput,
  Type_navigateToLoginCode,
} from "./types/type-LoginWidthPhone";

const LoginWithPhone = () => {
  const navigate = useNavigate();
  const {
    LoginBox,
    InputLoginPhone,
    HederBox,
    CustomButton,
    CustomButton2,
    Img,
    BtnContiner,
  } = styleComponent; //style component

  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState(
    location.state?.phoneNumber || ""
  );
  const [truePhoneNumber, setTruePhoneNumber] = useState(false);
  const [sendCodeAgain, setSendCodeAgain] = useState(false);
  const maxLength = 11;
  const PATERN_IRAN_PHONE_NUMBER = /^09\d{9}$/;
  //👆filter numbers 1 to 11 length and number start with 09
  useEffect(() => {
    const validPhoneNumber = checkPhoneNumber(
      phoneNumber,
      PATERN_IRAN_PHONE_NUMBER
    );
    validPhoneNumber && setTruePhoneNumber(true);
  }, [phoneNumber]);

  useEffect(() => {
    const valid = PATERN_IRAN_PHONE_NUMBER.test(phoneNumber);
    if (valid) {
      setSendCodeAgain(false);
    }
  }, []);

  const checkPhoneNumber: Type_checkPhoneNumber = (
    phoneNumber,
    PATERN_IRAN_PHONE_NUMBER
  ) => {
    const valid = PATERN_IRAN_PHONE_NUMBER.test(phoneNumber);
    return valid;
  };

  const onChangHandelInput: Type_onChangHandelInput = (value, event) => {
    setPhoneNumber(value.slice(0, maxLength));
    value.trim().length < maxLength &&
      truePhoneNumber &&
      setTruePhoneNumber(false);
    value.length >= maxLength && event.preventDefault();
  };

  const onClickButton = () => {
    if (truePhoneNumber) {
      setTimeout(() => {
        setPhoneNumber("");
        setTruePhoneNumber(false);
        createRandomeCode();
        alert("Code-Sended");
      }, 2000);
    }
  };

  const createRandomeCode = () => {
    const randomeNumber = Math.floor(Math.random() * 99999)
      .toString()
      .split("")
      .map((item) => [+item]);
    navigateToLoginCode(randomeNumber);
    console.log(randomeNumber);
  };

  const navigateToLoginCode: Type_navigateToLoginCode = (randomeNumber) => {
    navigate(`verify-Code`, {
      state: {
        code: randomeNumber,
        phoneNumber: phoneNumber,
        sendCodeAgain: sendCodeAgain,
      },
    });
  };

  return (
    <div>
      <LoginBox>
        <HederBox>
          <Img
            src="https://exo.ir/catalog/view/theme/exo/image/logo.svg"
            alt="☹"
            as="img"
          />
          <br />
          <Typography>Exo game</Typography>
          <br />
          <Typography>Exo game </Typography>
        </HederBox>
        Enter your phone number :
        <InputLoginPhone
          type="number"
          inputProps={{ pattern: "[0-9]*", maxLength: maxLength }}
          onChange={(e) => onChangHandelInput(e.target.value, e)}
          value={phoneNumber}
        ></InputLoginPhone>
        <BtnContiner>
          <CustomButton onClick={onClickButton} variant="contained">
            Continue
          </CustomButton>
        </BtnContiner>
        <BtnContiner
          onClick={() => navigate("/register-with-userPass", { state: "" })}
        >
          <CustomButton2 variant="contained">
            Login with username and password
          </CustomButton2>
        </BtnContiner>
        <BtnContiner>
          <CustomButton2 variant="contained">
            Login with phone number and password
          </CustomButton2>
        </BtnContiner>
      </LoginBox>

      {PATERN_IRAN_PHONE_NUMBER.test(phoneNumber) && (
        <Alert severity="success" sx={{ textAlign: "center" }}>
          good phone number
        </Alert>
      )}
      <p onClick={() => console.log(truePhoneNumber)}>09904606964</p>
    </div>
  );
};
export default LoginWithPhone;
