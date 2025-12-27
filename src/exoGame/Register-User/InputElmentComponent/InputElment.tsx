import React from "react";
import StyleComponent from "./style-Component/Style-InputElment";
import {
  ComponentType,
  handelInputEmail_Types,
  handelOnchangeInput_Types,
} from "./Types/Type_inputElment";
const InputElment: ComponentType = ({
  item,
  index,
  seIinputElmentAtributes,
  inputElmentAtributes,
}) => {
  const { id, InputTitle, error, value, type } = item;
  const { ErrorText, Input, InputBox, InputTitle2 } = StyleComponent;

  const handelInputEmail: handelInputEmail_Types = (inputValue, index) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const FindFristEmailInput = inputElmentAtributes.find(
      (fill) => fill.nameInput === "email input"
    );
    const { value } = FindFristEmailInput; //frist input value
    const testPatern = emailPattern.test(inputValue);

    seIinputElmentAtributes((prev) => {
      return prev.map((item) =>
        item.id === index && item.nameInput === "email input"
          ? item.id === index
            ? {
                ...item,
                value: inputValue,
                error: testPatern ? "" : "this is not email!",
              }
            : item
          : item.id === index
          ? {
              ...item,
              value: inputValue,
              error: inputValue === value ? "" : "value not match to email",
            }
          : item
      );
    });
  };

  const handelOnchangeInput: handelOnchangeInput_Types = (
    inputValue,
    item,
    index
  ) => {
    const { value } = item;
    seIinputElmentAtributes((prev) => {
      return prev.map((item) =>
        item.id === index
          ? {
              ...item,
              value: inputValue,
              error: value.trim().length < 7 ? "you need length more 7" : "",
            }
          : item
      );
    });
  };

  return (
    <InputBox key={id}>
      <InputTitle2 as="h6">{InputTitle}</InputTitle2>
      <Input
        sx={{
          borderColor: error.trim().length > 0 ? "#ff0000ff" : "#000",
        }}
        as="input"
        value={value}
        type={type}
        aria-label="."
        onChange={(e) =>
          type === "email"
            ? handelInputEmail(e.target.value, index)
            : handelOnchangeInput(e.target.value, item, index)
        }
      ></Input>
      <ErrorText as="p">{item.error}</ErrorText>
    </InputBox>
  );
};
export default InputElment;
