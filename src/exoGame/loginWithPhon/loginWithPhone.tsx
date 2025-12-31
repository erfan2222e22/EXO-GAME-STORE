import React, { useEffect, useState } from "react";
import styleComponent from "./Style-Component/StyledComponentLoginPhone";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { Axios, AxiosError } from "axios";
import {
  userData,
  Type_checkPhoneNumber,
  Type_onChangHandelInput,
  Type_findUserPhoneNumber,
  Type_sendNewUserDataToServer,
  Type_navigateToLoginCode,
} from "./types/type-LoginWidthPhone";
import axios from "axios";
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

  const [phoneNumber, setPhoneNumber] = useState("");
  const [truePhoneNumber, setTruePhoneNumber] = useState(false);
  const [userIsRegistered, userSetIsRegistered] = useState(null);
  const [phoneNumberToSend, setPhoneNumberToSend] = useState("");
  const maxLength = 11;
  const patern = /^09\d{9}$/;
  //👆filter numbers 1 to 11 length and number start with 09

  const checkPhoneNumber: Type_checkPhoneNumber = (phoneNumber, patern) => {
    const valid = patern.test(phoneNumber);
    return valid;
  };

  useEffect(() => {
    const validPhoneNumber = checkPhoneNumber(phoneNumber, patern);
    validPhoneNumber && setTruePhoneNumber(true);
  }, [phoneNumber]);

  useEffect(() => {
    console.log(userIsRegistered);
    if (userIsRegistered === false && phoneNumberToSend) {
      sendNewUserDataToServer(phoneNumberToSend);
    }
  }, [userIsRegistered, phoneNumberToSend]);

  const onChangHandelInput: Type_onChangHandelInput = (value, event) => {
    setPhoneNumber(value.slice(0, 11));
    value.length >= maxLength && event.preventDefault();
  };

  const findUserPhoneNumber: Type_findUserPhoneNumber = async (phone) => {
    try {
      const { data: value } = await axios.get(
        `http://localhost:3300/users?phoneNumber=${phone}`
      );
      const { id, logined, phoneNumber, ...rest }: userData = value[0] || {};

      value.length > 0 && Object.values(rest).every((value) => value.length > 0)
        ? userSetIsRegistered(true)
        : userSetIsRegistered(false);
      console.log(value);
    } catch (err) {
      handelCatchError(err as AxiosError);
    }
  };

  const onClickButton = () => {
    if (truePhoneNumber) {
      const currentPhoneNumber = phoneNumber; // ذخیره phoneNumber قبل از خالی کردن
      setPhoneNumberToSend(currentPhoneNumber); // ذخیره برای استفاده در useEffect
      setTimeout(() => {
        setPhoneNumber("");
        setTruePhoneNumber(false);
        findUserPhoneNumber(currentPhoneNumber);
        createRandomeCode();
        alert("Code-Sended");
      }, 1000);
    }
  };

  const sendNewUserDataToServer: Type_sendNewUserDataToServer = async (
    phone
  ) => {
    try {
      const newUser = {
        name: "",
        phoneNumber: phone,
        LastName: "",
        email: "",
        logined: false,
      };
      await axios.post("http://localhost:3300/users", newUser);
    } catch (err) {
      handelCatchError(err as AxiosError);
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
        userIsRegistered: userIsRegistered,
      },
    });
  };

  const handelCatchError = (err: AxiosError) => {
    const errStatus = err as AxiosError;
    axios.isAxiosError(err) &&
      navigate("/failedToFetch", {
        state: { errorStatus: errStatus.status },
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
        <BtnContiner>
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

      {patern.test(phoneNumber) && (
        <Alert severity="success" sx={{ textAlign: "center" }}>
          good phone number
        </Alert>
      )}
      <p>09904606964</p>
    </div>
  );
};
export default LoginWithPhone;
