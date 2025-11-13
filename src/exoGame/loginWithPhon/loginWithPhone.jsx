import React, { useEffect, useState } from "react";
import styleComponent from "./Style-Component/StyledComponentLoginPhone";
import img from "./loginPhoneImg/logo.png";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

const LoginWithPhone = () => {
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

  const checkNumber = (phoneNumber, patern) => {
    const valid = patern.test(phoneNumber);
    if (valid) {
      return true;
    }
  };

  useEffect(() => {
    const validPhoneNumber = checkNumber(phoneNumber, patern);
    if (validPhoneNumber) {
      settruePhoneNumber(true);
      console.log(validPhoneNumber);
    }
  }, [phoneNumber, settruePhoneNumber]);

  const onChangHandelInput = (e) => {
    let inputValue = e.target.value;
    setPhoneNumber(inputValue.slice(0, 11));
    if (inputValue.length >= maxLength) {
      e.preventDefault();
    }
  };

  const onClickButton = (e) => {
    truePhoneNumber ? alert("send code") : e.preventDefault();
  };

  return (
    <div>
      <LoginBox>
        <HederBox>
          <Img src={img} alt="☹" component="img" />
          <br />
          <Typography variant="body3">Exo game</Typography>
          <br />
          <Typography variant="body3">Exo game </Typography>
        </HederBox>
        Enter your phone number :
        <InputLoginPhone
          type="number"
          inputProps={{ pattern: "[0-9]*", maxLength: maxLength }}
          onChange={onChangHandelInput}
          value={phoneNumber}
        ></InputLoginPhone>
        <BtnContiner>
          <CustomButton
            onClick={onClickButton}
            variant="contained"
            component={Link}
            to="https://www.google.com/search?q=translate&rlz=1C1AVFC_enIR955IR955&oq=transla&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhBFGDsyBggDECMYJzIMCAQQABhDGIAEGIoFMgwIBRAAGEMYgAQYigUyCggGEAAYsQMYgAQyDAgHEAAYQxiABBiKBTIMCAgQABhDGIAEGIoFMgwICRAAGEMYgAQYigXSAQkzMjY2ajBqMTWoAgiwAgHxBTX6pBbV1NVe&sourceid=chrome&ie=UTF-8"
          >
            Continue
          </CustomButton>
        </BtnContiner>
        <BtnContiner>
          <CustomButton2 variant="contained" component={Link} to="">
            Login with username and password
          </CustomButton2>
        </BtnContiner>
        <BtnContiner>
          <CustomButton2 variant="contained" component={Link} to="">
            Login with phone number and password
          </CustomButton2>
        </BtnContiner>
      </LoginBox>
      {patern.test(phoneNumber) && (
        <Alert severity="success" sx={{ textAlign: "center" }}>
          Login with phone number and password
        </Alert>
      )}
    </div>
  );
};
export default LoginWithPhone;
