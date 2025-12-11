import React, { useRef, useState, useEffect } from "react";
import styleComponent from "./style_Component/Style-RegisterCode-Box";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterCodeBox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { code } = location.state;
  const {
    Input,
    ContinuBtn,
    BoxConteriner,
    ParentBox,
    InputParentBox,
    HederImg,
  } = styleComponent;
  const [UserInputCode, setUserInputCode] = useState<string[]>(
    Array.from({ length: code.length }, () => "")
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [validInterdCode, setValidInterdCode] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValidInterdCode(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [validInterdCode]);

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
    });
    TestCode
      ? setValidInterdCode((prev: boolean) => (prev = true))
      : setValidInterdCode((prev: boolean) => (prev = false));

    setUserInputCode((prev) =>
      prev.map((item) => {
        return item.toString().trim().length > 0 ? "" : item;
      })
    );

    validInterdCode && Navigation();
  };

  const Navigation = () => {
    navigate(`/register-user`, {
      state: { products: "" },
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
