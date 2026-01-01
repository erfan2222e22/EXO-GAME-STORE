import React, { useRef, useState, useEffect } from "react";
import styleComponent from "./style_Component/Style-RegisterCode-Box";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosError } from "axios";

const RegisterCodeBox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { code, phoneNumber } = location.state;
  const {
    Input,
    ContinuBtn,
    BoxConteriner,
    ParentBox,
    InputParentBox,
    HederImg,
  } = styleComponent;

  const [UserInputCode, setUserInputCode] = useState<string[]>( //input Box from code length
    Array.from({ length: code.length }, () => "")
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
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
      const { data: value } = await axios.get(
        `http://localhost:3300/users?phoneNumber=${phoneNumber}`
      );
      const { id, logined, ...rest } = value[0];
      const validating = Object.values(rest).every(
        (items: any) => items.length > 0
      );
      console.log(rest);
      if (validating) {
        setUserIsRegistered(true);
      } else {
        setUserIsRegistered(false);
      }
    } catch (err) {
      handelCatchError(err as AxiosError);
    }
  };

  const handelOnChange = (value: string, index: number) => {
    if (isNaN(+value)) return;

    setUserInputCode((prev) =>
      prev.map((item, index2) => (index2 === index ? value : item))
    );

    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handelOnClick = () => {
    const ReciveCoded = code.flatMap((item: number[]) => item);

    const TestCode = UserInputCode.every((item, index) => {
      return Number(item) === ReciveCoded[index];
    }); //test User input Code

    TestCode
      ? setValidInterdCode((prev: boolean) => (prev = true))
      : setValidInterdCode((prev: boolean) => (prev = false));

    setUserInputCode((prev) =>
      prev.map((item) => {
        return item.toString().trim().length > 0 ? "" : item;
      })
    );

    validInterdCode && navigation();
  };

  const navigateToUserAccount = async (id: number) => {
    try {
      await axios.patch(`http://localhost:3300/users/${id}`, {
        logined: true,
      });
      setTimeout(() => {
        navigate(`/acount`, {
          state: { state: "" },
        });
      }, 500);
    } catch (err) {
      handelCatchError(err as AxiosError);
    }
  };
  const createNewUserData = async () => {
    try {
      const newUser = {
        name: "",
        phoneNumber: phoneNumber,
        LastName: "",
        email: "",
        logined: false,
      };
      const { data: values } = await axios.post(
        "http://localhost:3300/users",
        newUser
      );

      const { id } = values;

      setTimeout(() => {
        navigate(`/register-user`, {
          state: { id: id },
        });
      }, 500);
      console.log(values);
    } catch (err) {
      handelCatchError(err as AxiosError);
    }
  };

  const navigation = () => {
    userIsRegistered ? navigateToUserAccount(2) : createNewUserData();
  };

  const handelCatchError = (err: AxiosError) => {
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
        <InputParentBox>
          {UserInputCode.map((item: string, index: number) => {
            return (
              <Input
                onChange={(e) => handelOnChange(e.target.value, index)}
                aria-label="."
                value={item}
                type="tel"
                inputMode="numeric"
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center" },
                }}
                sx={{ borderColor: SetColorElment() }}
                inputRef={(el: HTMLInputElement | null) => {
                  inputRefs.current[index] = el;
                }}
              ></Input>
            );
          })}
        </InputParentBox>

        <ContinuBtn
          sx={{
            "&:hover": {
              backgroundColor: SetColorElment(),
              boxShadow: `${SetColorElment()} 0px 7px 29px 0px`,
            },
            "&:active": {
              backgroundColor: "black",
            },
          }}
          onClick={handelOnClick}
        >
          click me
        </ContinuBtn>
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
