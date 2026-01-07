import React from "react";
import styleComponent from "./style-inputElment/style-InputElment";
import { Component_Props } from "./types/type-InputElment";
const InputElment: Component_Props = ({
  setElmentValueList,
  elmentValueList,
  userPassword,
  id,
}) => {
  const { Input } = styleComponent;

  const handelOnChangePassUser = (e_value: string) => {
    setElmentValueList((prev) => ({
      ...prev,
      EditPasswrodAccount: prev.EditPasswrodAccount.map((item) => {
        if (item.title !== "Previous password") {
          if (item.id !== id) return item;

          if (item.title === "New password") {
            return {
              ...item,
              value: e_value,
              error:
                item.value.trim().length > 5
                  ? ""
                  : "Password must be at least 6 characters.",
            };
          } else {
            const findFristElmentValue = elmentValueList.find(
              (item) => item.title === "New password"
            );
            const { value } = findFristElmentValue;

            return {
              ...item,
              value: e_value,
              error: e_value === value ? "" : "The input code is incorrect.",
            };
          }
        } else if (item.title === "Previous password") {
          if (item.id !== id) return item;
          return {
            ...item,
            value: e_value,
            error:
              e_value === userPassword
                ? ""
                : "The previous password is incorrect.",
          };
        } else {
          return item;
        }
      }),
    }));
  };

  return (
    <Input
      as="input"
      type="text"
      aria-label="."
      onChange={(e) => handelOnChangePassUser(e.target.value)}
    ></Input>
  );
};
export default InputElment;
