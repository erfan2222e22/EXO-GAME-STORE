import React, { useEffect, useState, useCallback } from "react";
import styleComponent from "./Style-Component/StyledComponentLoginPhone";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

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
  const [truePhoneNumber, settruePhoneNumber] = useState(false);
  const maxLength = 11;
  const patern = /^09\d{9}$/;
  //👆filter numbers 1 to 11 length and number start with 09

  const checkNumber = (phoneNumber: string, patern: any) => {
    const valid = patern.test(phoneNumber);
    return valid && true;
  };

  useEffect(() => {
    const validPhoneNumber = checkNumber(phoneNumber, patern);
    validPhoneNumber && settruePhoneNumber(true);
  }, [phoneNumber, settruePhoneNumber]);

  const onChangHandelInput = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPhoneNumber(value.slice(0, 11));
    value.length >= maxLength && event.preventDefault();
  };

  const onClickButton = useCallback(() => {
    if (truePhoneNumber) {
      setTimeout(() => {
        setPhoneNumber("");
        settruePhoneNumber(false);
      }, 1500);
    }
    return truePhoneNumber;
  }, [truePhoneNumber]);

  const createRandomeCode = () => {
    const randomeNumber = Math.floor(Math.random() * 99999)
      .toString()
      .split("")
      .map((item) => [+item]);
    navigateToLoginCode(randomeNumber);
  };

  const navigateToLoginCode = (randomeNumber: number[][]) => {
    navigate(`verify-Code`, {
      state: { code: randomeNumber },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (onClickButton()) {
        createRandomeCode();
        alert("Code-Sended");
      }
    }, 3000);
  }, [onClickButton]);

  return (
    <div>
      <LoginBox>
        <HederBox>
          <Img
            src="http://localhost:3000/static/media/logo.8a05ed6da936dc416c38.png"
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
    </div>
  );
};
export default LoginWithPhone;
