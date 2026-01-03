import React from "react";
import styleComponent from "./style-Component/Style-BtnElment";
import { Component_Porps } from "./types/Type-RgisterBtnElment";

const RegisterBtnElment: Component_Porps = ({
  code,
  UserInputCode,
  setValidInterdCode,
  SetColorElment,
  validInterdCode,
  setUserInputCode,
  navigation,
}) => {
  const { ContinuBtn } = styleComponent;

  const handelOnClick = () => {
    const ReciveCoded = code.flatMap((item: number[]) => item);

    const TestCode = UserInputCode.every((item, index) => {
      return Number(item) === ReciveCoded[index];
    }); //test User input Code

    TestCode
      ? setValidInterdCode((prev: boolean) => (prev = true))
      : setValidInterdCode((prev: boolean) => (prev = false));

    setUserInputCode((prev: any) =>
      prev.map((item: any) => {
        return item.toString().trim().length > 0 ? "" : item;
      })
    );

    validInterdCode && navigation();
  };

  return (
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
  );
};
export default RegisterBtnElment;
