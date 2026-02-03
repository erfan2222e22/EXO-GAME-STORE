import React from "react";
import { useState, useEffect } from "react";
import { Component_Porps } from "./types/Type_SendCodeAgainTimer";
import styleComponent from "./style-Component/style-SendCodeAgainTimer";
import { useNavigate } from "react-router-dom";
const SendCodeAgainTimer: Component_Porps = ({
  phoneNumber,
  sendCodeAgain,
}) => {
  const navigate = useNavigate();
  const [minuts, setMinuts] = useState(0);
  const [secend, setSecend] = useState(0);
  const [conterTimer, setConterTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const { BoxContiner, Text, Span } = styleComponent;

  useEffect(() => {
    if (!sendCodeAgain) {
      setStartTimer(true);
      setMinuts(1);
      setSecend(60);
      setConterTimer(0);
    }
  }, []);

  useEffect(() => {
    //timer for send again code to user PhoneNumber
    if (startTimer) {
      const timer = setInterval(() => {
        if (minuts > 0 && secend !== 0) {
          setSecend((sec) => (sec -= 1));
          if (secend === 1) {
            setMinuts((min) => (min -= 1));
          }
        } else if (minuts === 0 && secend === 0 && conterTimer === 0) {
          setSecend(5);
        } else {
          if (secend !== 0) {
            setSecend((sec) => (sec -= 1));
            setConterTimer((prev) => prev + 1);
          }
        }
      }, 1000); // every 1 secend run the setInterval
      return () => clearInterval(timer);
    }
  }, [minuts, secend, conterTimer, startTimer]);

  useEffect(() => {
    if (minuts === 0 && secend === 0 && conterTimer > 0) {
      setStartTimer(false);
    }
  }, [minuts, secend, conterTimer]);

  const handelSetTimer = () => {
    if (!startTimer) {
      navigate("/acount-login-Phone", {
        state: { phoneNumber: phoneNumber },
      });
    }
  };

  return (
    <BoxContiner>
      <Text as="span">
        {startTimer ? (
          `Time to wait before resending the verification code (${minuts}.${secend})`
        ) : (
          <p>
            <Span onClick={handelSetTimer} as="span">
              Click to
            </Span>
            send verification code.
          </p>
        )}
      </Text>
    </BoxContiner>
  );
};
export default SendCodeAgainTimer;
