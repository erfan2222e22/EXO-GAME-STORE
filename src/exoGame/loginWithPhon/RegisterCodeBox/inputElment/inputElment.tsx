import React from "react";
import styleComponent from "./style_Component/Style-InputElment";
import { Type_Componet, Type_HandelOnChange } from "./types/TypeInput";
import SendCodeAgainTimer from "../sendCodeAgainTimer/sendCodeAgainTimer";
const InputElment: Type_Componet = ({
  phoneNumber,
  inputRefs,
  UserInputCode,
  setUserInputCode,
  SetColorElment,
  sendCodeAgain,
}) => {
  const { BoxContiner, InputParentBox, Input } = styleComponent;

  const handelOnChange: Type_HandelOnChange = (value, index) => {
    if (isNaN(+value)) return;

    setUserInputCode((prev) =>
      prev.map((item, index2) => (index2 === index ? value : item)),
    );

    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <BoxContiner>
      <span
        onClick={() => console.log()}
        style={{
          position: "relative",
          top: "6px",
          left: "6px",
          overflow: "hidden",
        }}
      >
        Enter verification code:
      </span>
      <InputParentBox>
        {UserInputCode.map((item, index) => {
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
      <SendCodeAgainTimer
        phoneNumber={phoneNumber}
        sendCodeAgain={sendCodeAgain}
      />
    </BoxContiner>
  );
};
export default InputElment;
