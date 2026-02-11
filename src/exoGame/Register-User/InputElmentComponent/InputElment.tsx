import React from "react";
import StyleComponent from "./style-Component/Style-InputElment";
import {
  ComponentType,
  handelInputPassEmail_Types,
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

  const handelInputPassEmail: handelInputPassEmail_Types = (
    inputValue,
    index,
    type
  ) => {
    let paternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const testPatern = paternEmail.test(inputValue);

    const FindFristEmailInput = inputElmentAtributes.find(
      (fill) => fill.type === type
    );
    const { value, nameInput } = FindFristEmailInput;

    seIinputElmentAtributes((prev) => {
      return prev.map((item) => {
        if (item.nameInput === nameInput) {
          if (item.id !== index) return item;
          if (type === "email") {
            // handel frist input of email and password
            //handel email input
            return {
              ...item,
              value: inputValue,
              error: testPatern ? "" : "this is not email!",
            };
          } else {
            //handel password input
            return {
              ...item,
              value: inputValue,
              error: value.trim().length > 6 ? "" : "you need length more 6",
            };
          }
        } else {
          // handel secend input of email and password
          let errorText = "";
          if (item.id !== index) return item;
          item.type === "email"
            ? (errorText = "value not match to email")
            : (errorText = "value not match to password");

          return {
            ...item,
            value: inputValue,
            error: inputValue === value ? "" : errorText,
          };
        }
      });
    });
  };

  const handelOnchangeInput: handelOnchangeInput_Types = (
    inputValue,
    index
  ) => {
    seIinputElmentAtributes((prev) => {
      return prev.map((item) =>
        +item.id === +index
          ? {
              ...item,
              value: inputValue,
              error:
                inputValue.trim().length < 3 ? "you need length more 3" : "",
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
        onChange={(e) => {
          if (type === "text") {
            handelOnchangeInput(e.target.value, index);
          } else {
            handelInputPassEmail(e.target.value, index, item.type);
          }
        }}
      ></Input>
      <ErrorText as="p">{item.error}</ErrorText>
    </InputBox>
  );
};
export default InputElment;
