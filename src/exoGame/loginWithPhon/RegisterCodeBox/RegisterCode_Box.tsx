import React, { useState } from "react";
import styleComponent from "./style_Component/Style-RegisterCode-Box";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const RegisterCodeBox = () => {
  const location = useLocation();
  const { code } = location.state;
  const { Input, ContinuBtn, BoxConteriner, ParentBox, InputParentBox } =
    styleComponent;
  const [UserInputCode, setUserInputCode] = useState(
    Array.from({ length: code.length }, (_, index) => [""])
  );

  const [validInterdCode, setValidInterdCode] = useState(null);

  const handelOnChange = (value: string, index: number) => {
    setUserInputCode((prev: string[][]) =>
      prev.map((item: any, index2: number) => {
        return index2 === index && isNaN(+value) === false ? +[value] : item;
      })
    );
  };

  const handelOnClick = () => {
    const ReciveCoded = code.flatMap((item: number[]) => item);

    const TestCode = UserInputCode.every(
      (item, index) => Number(item) === ReciveCoded[index]
    );
    TestCode
      ? setValidInterdCode((prev: boolean) => (prev = true))
      : setValidInterdCode((prev: boolean) => (prev = false));

    setUserInputCode((prev) =>
      prev.map((item) => {
        return item.toString().trim().length > 0 ? [""] : item;
      })
    );

    console.log(ReciveCoded);
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
        <InputParentBox>
          {UserInputCode.map((item: string[] | number[], index: number) => {
            return (
              <>
                <Input
                  onChange={(e) => handelOnChange(e.target.value, index)}
                  aria-label="."
                  type="tel"
                  value={item}
                  inputMode="numeric"
                  inputProps={{ maxLength: 1 }}
                  sx={{
                    borderColor: SetColorElment(),
                  }}
                ></Input>
              </>
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
