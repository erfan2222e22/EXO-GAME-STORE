import { useState } from "react";
import BtnELment from "./BtnElmentComponent/BtnElment";
import { ElmentInputInterface } from "./types/Types_Register-User";
import InputElment from "./InputElmentComponent/InputElment";
import styleComponent from "./style-Component/Style-Register-user";
const RegisterNewUser = () => {
  const { ParntBox, ContinerBox, InputParntBox, Img } = styleComponent;
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
      type: "password",
      nameInput: "password input",
      importValue: true,
      value: "",
      InputTitle: "set your password",
      error: "",
    },
    {
      id: 5,
      type: "password",
      nameInput: "password",
      importValue: true,
      value: "",
      InputTitle: "set again your password",
      error: "",
    },
  ]);
  const [allInputValuseTrue, setAllInputValuseTrue] = useState(false);

  return (
    <ParntBox>
      <ContinerBox>
        <InputParntBox>
          {inputElmentAtributes.map((item, index) => {
            return (
              <InputElment
                item={item}
                index={index}
                seIinputElmentAtributes={seIinputElmentAtributes}
                inputElmentAtributes={inputElmentAtributes}
              />
            );
          })}
          <BtnELment
            inputElmentAtributes={inputElmentAtributes}
            allInputValuseTrue={allInputValuseTrue}
            seIinputElmentAtributes={seIinputElmentAtributes}
            setAllInputValuseTrue={setAllInputValuseTrue}
          />
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
