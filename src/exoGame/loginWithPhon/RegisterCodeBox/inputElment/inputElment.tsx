import React from "react";
import styleComponent from "./style_Component/Style-InputElment";
import { Type_Componet, Type_HandelOnChange } from "./types/TypeInput";

const InputElment: Type_Componet = ({
  inputRefs,
  UserInputCode,
  setUserInputCode,
  SetColorElment,
}) => {
  const { InputParentBox, Input } = styleComponent;

  const handelOnChange: Type_HandelOnChange = (value, index) => {
    if (isNaN(+value)) return;

    setUserInputCode((prev) =>
      prev.map((item, index2) => (index2 === index ? value : item))
    );

    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
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
  );
};
export default InputElment;
