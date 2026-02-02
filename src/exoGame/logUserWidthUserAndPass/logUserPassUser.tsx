import React from "react";
import styleComponent from "./style-Component/style-logUserPassUser";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { Box } from "@mui/material";
import {
  inputTypes,
  Type_handelOnChange,
  Type_getUserData,
} from "./types/typeLoginWithPassUser";

const LogUserPassUser = () => {
  const navigate = useNavigate();
  const {
    LoginBox,
    HederImg,
    BtnContinue,
    Input,
    ContinerInput,
    ParentInput,
    RedStar,
    ParentBox,
    BoxErore,
    TextError,
  } = styleComponent;

  const [errorFindUser, setErrorFindUser] = useState(false);
  const [inputElments, setInputElment] = useState<inputTypes[]>([
    {
      id: 0,
      textHeder: "enter your userName",
      value: "",
      error: "",
      title: "userName",
      type: "text",
    },
    {
      id: 1,
      textHeder: "enter your password",
      value: "",
      error: "",
      title: "password",
      type: "password",
    },
  ]);

  // useEffect(() => {
  //   if (errorFindUser) {
  //     setErrorFindUser(false);
  //   }
  // }, [errorFindUser]);

  const handelOnChange: Type_handelOnChange = (value, index) => {
    setInputElment((prev) => {
      return prev.map((item) => {
        return item.id === index ? { ...item, value: value } : item;
      });
    });
    console.log(value);
  };

  const setErrorInput = () => {
    setInputElment((prev) => {
      return prev.map((item) => {
        return item.value.trim().length === 0
          ? { ...item, error: `enter your ${item.title}` }
          : { ...item, error: "" };
      });
    });
  };

  const removeInputValue = () => {
    if (errorFindUser === false) {
      setInputElment((prev) => {
        return prev.map((item) => {
          return item.value.trim().length > 0 ? { ...item, value: "" } : item;
        });
      });
    }
  };

  const handelOnClick = () => {
    setErrorInput();
    removeInputValue();
    const findErrorInputs = inputElments.find(
      (fill) => fill.error.trim().length > 0
    );

    const findInputValue = inputElments.map((item) => item.value);
    const [userName, password] = findInputValue;

    findErrorInputs === undefined && getUserData(userName, password);
  };

  const getUserData: Type_getUserData = async (userName, password) => {
    try {
      const { data: userData } = await axios.get(
        `http://localhost:3300/users?name=${userName}&password=${password}`
      );
      const userId = userData[0]?.id;

      if (userData.length === 0) {
        setErrorFindUser(true);
      } else {
        setErrorFindUser(false);
        navigate("/acount", { state: { id: userId } });
      }
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  return (
    <ParentBox>
      {errorFindUser && (
        <BoxErore>
          <TextError as="h6">
            Warning: The password or email address entered is incorrect!{" "}
          </TextError>
        </BoxErore>
      )}

      <LoginBox>
        <Box>
          <HederImg
            as="img"
            src="https://exo.ir/catalog/view/theme/exo/image/cover.svg"
            alt=""
          ></HederImg>
        </Box>
        <Box>
          {inputElments.map((item, index) => {
            return (
              <ParentInput>
                <ContinerInput>
                  <p style={{ color: "#818181" }}>{item.textHeder}</p>
                  <RedStar>*</RedStar>
                </ContinerInput>
                <Input
                  onChange={(e) => handelOnChange(e.target.value, index)}
                  key={item.id}
                  aria-label="."
                  type={item.type}
                  as="input"
                  value={item.value}
                ></Input>
                <p style={{ color: "red" }}>{item.error}</p>
              </ParentInput>
            );
          })}
        </Box>
        <BtnContinue onClick={handelOnClick}>enter</BtnContinue>
      </LoginBox>
    </ParentBox>
  );
};
export default LogUserPassUser;
