import React, { useEffect, useState } from "react";
import component from "../components/component-Style/StyledComponentLoginPhone";
import img from "./loginPhoneImg/logo.png";
import { Link } from "react-router-dom";
import styled from "./loginWithPhone.module.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function LoginWithPhone() {
  const {
    Login_Box,
    Input_login_phone,
    Heder_box,
    CustomButton,
    CustomButton2,
  } = component; //style component

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
  });

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
      <Login_Box>
        <Heder_box>
          <img src={img} alt="img" className={styled.img} />
          <br />
          <Typography variant="body3">Exo game</Typography>
          <br />
          <Typography variant="body3">اگزو گیم</Typography>
        </Heder_box>
        :شماره تلفن خود را وارد نمایید
        <Input_login_phone
          type="number"
          inputProps={{ pattern: "[0-9]*", maxLength: maxLength }}
          onChange={onChangHandelInput}
          value={phoneNumber}
        ></Input_login_phone>
        <CustomButton
          onClick={onClickButton}
          variant="contained"
          component={Link}
          to="https://www.google.com/search?q=translate&rlz=1C1AVFC_enIR955IR955&oq=transla&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhBFGDsyBggDECMYJzIMCAQQABhDGIAEGIoFMgwIBRAAGEMYgAQYigUyCggGEAAYsQMYgAQyDAgHEAAYQxiABBiKBTIMCAgQABhDGIAEGIoFMgwICRAAGEMYgAQYigXSAQkzMjY2ajBqMTWoAgiwAgHxBTX6pBbV1NVe&sourceid=chrome&ie=UTF-8"
        >
          ادامه
        </CustomButton>
        <CustomButton2 variant="contained" component={Link} to="">
          ورود با نام کاربری و رمز عبور
        </CustomButton2>
        <CustomButton2 variant="contained" component={Link} to="">
          ورود با شماره و رمز عبور
        </CustomButton2>
      </Login_Box>
      {patern.test(phoneNumber) && (
        <Alert severity="success" sx={{ textAlign: "center" }}>
          valid phone number
        </Alert>
      )}
    </div>
  );
}
