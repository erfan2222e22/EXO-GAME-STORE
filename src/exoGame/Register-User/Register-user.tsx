import { useState } from "react";
import { Box } from "@mui/material";
import {
  ElmentInputInterface,
  handelOnchangeInput_Types,
  handelInputEmail_Types,
} from "./types/Types_Register-User";
import styleComponent from "./style-Component/Style-Register-user";
const RegisterNewUser = () => {
  const {
    ParntBox,
    ContinerBox,
    InputTitle,
    Input,
    InputBox,
    ContinuBtn,
    ErrorText,
    Img,
    InputParntBox,
  } = styleComponent;
  const [inputElmentAtributes, seIinputElmentAtributes] = useState<
    ElmentInputInterface[]
  >([
    {
      id: 0,
      type: "text",
      nameInput: "name Input",
      importValue: true,
      value: "",
      InputTitle: "enter Name",
      error: "",
    },
    {
      id: 1,
      type: "text",
      nameInput: "lastName input",
      importValue: true,
      value: "",
      InputTitle: "enter LastName",
      error: "",
    },
    {
      id: 2,
      type: "email",
      nameInput: "email input",
      importValue: true,
      value: "",
      InputTitle: "enter your email",
      error: "",
    },
    {
      id: 3,
      type: "email",
      nameInput: "set Again email Input ",
      importValue: true,
      value: "",
      InputTitle: "set again your email",
      error: "",
    },
    {
      id: 4,
      type: "text",
      nameInput: "idk name ",
      importValue: false,
      value: "",
      InputTitle: "set again your email",
      error: "",
    },
  ]);
  const [allInputValuseTrue, setAllInputValuseTrue] = useState(null);

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
    console.log(item);
  };

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

  const handelOnclick = () => {
    seIinputElmentAtributes((prev) => {
      return prev.map((item) =>
        item.importValue && item.value.trim().length === 0
          ? { ...item, error: `${item.nameInput} enter this input ` }
          : item
      );
    });
    const FindErrorInput = inputElmentAtributes.find(
      (fill) => fill.error.trim().length > 0 && fill.importValue
    );

    FindErrorInput === undefined
      ? setAllInputValuseTrue(true)
      : setAllInputValuseTrue(false);
  };

  const handelBtnColor = () => {
    let ElmentColor = "";
    switch (allInputValuseTrue) {
      case null:
        ElmentColor = "#000000ff";
        break;
      case true:
        ElmentColor = "#2bdb2bcc";
        break;
      case false:
        ElmentColor = "#ff0303ff";
        break;
    }
    return ElmentColor;
  };

  return (
    <ParntBox>
      <ContinerBox>
        <InputParntBox>
          {inputElmentAtributes.map((item, index) => {
            return (
              <InputBox key={item.id}>
                <InputTitle as="h6">{item.InputTitle}</InputTitle>
                <Input
                  sx={{
                    borderColor:
                      item.error.trim().length > 0 ? "#ff0000ff" : "#000",
                  }}
                  as="input"
                  value={item.value}
                  type={item.type}
                  aria-label="."
                  onChange={(e) =>
                    item.type === "email"
                      ? handelInputEmail(e.target.value, index)
                      : handelOnchangeInput(e.target.value, item, index)
                  }
                ></Input>
                <ErrorText as="p">{item.error}</ErrorText>
              </InputBox>
            );
          })}
          <ContinuBtn
            sx={{
              "&:hover": {
                backgroundColor: handelBtnColor(),
              },
            }}
            onClick={handelOnclick}
          >
            send
          </ContinuBtn>
        </InputParntBox>

        <Img
          as="img"
          src="https://exo.ir/catalog/view/theme/exo/image/signup_page.jpg"
          alt="❤"
        />
      </ContinerBox>
    </ParntBox>
  );
};
export default RegisterNewUser;
