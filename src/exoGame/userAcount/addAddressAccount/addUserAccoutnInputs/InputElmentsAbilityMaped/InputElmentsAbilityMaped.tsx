import React from "react";

import styleComponent from "./style_Component/style_InputElmentAbilityMaped";
import { Autocomplete, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  type_changeInputAbility,
  type_handelAutoCompleteEvent,
  type_handelInputEvent,
  Component_Props,
  Type_editeUserAddress,
} from "./types/Type_InputElmentAbilityMaped";

const InputElmentsAbilityMaped: Component_Props = ({
  InputElmentsAbility,
  provinceOptions,
  cityOption,
  cityTitleOptions,
  setCityTitleOptios,
  setInputElmentsAbility,
}) => {
  const { ParentDiv, Input, ErrorText } = styleComponent;
  const location = useLocation();
  const { nowUserAddress } = location.state || "";

  useEffect(() => {
    if (nowUserAddress) {
      setInputElmentsAbility((prev) => {
        const copyItems = [...prev];
        nowUserAddress.forEach((item: Type_editeUserAddress) => {
          const exsistingItem = copyItems.findIndex(
            (index) => index.id === item.id,
          );
          if (exsistingItem !== -1) {
            copyItems[exsistingItem] = {
              ...copyItems[exsistingItem],
              ...item,
            };
          } else {
            copyItems.push(item);
          }
        });
        return copyItems;
      });
    }
  }, []);

  const handelInputEvent: type_handelInputEvent = (e, id) => {
    const InputValue = e.target.value;
    console.log(nowUserAddress);
    changeInputAbility(InputValue, id);
  };

  const changeInputAbility: type_changeInputAbility = (InputValue, id) => {
    setInputElmentsAbility((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, value: InputValue } : item,
      );
    });
  };

  const handelAutoCompleteEvent: type_handelAutoCompleteEvent = (e, id) => {
    const InputValue = e.currentTarget.innerHTML;
    setCityTitleOptios(InputValue);
    changeInputAbility(InputValue, id);
  };

  return (
    <>
      {InputElmentsAbility.map((item) => {
        return (
          <ParentDiv>
            <p style={{ width: "130px", color: "#818181" }}>
              {item.textTitle}
              <span style={{ color: "#ff0000" }}>*</span>
            </p>

            {item.type === "text" ? (
              <Input
                as="input"
                value={item.value}
                type="text"
                aria-label="."
                onChange={(e) => handelInputEvent(e, item.id)}
                placeholder={item.textTitle}
              ></Input>
            ) : (
              <Autocomplete
                disablePortal
                onChange={(e) => handelAutoCompleteEvent(e, item.id)}
                sx={{ width: "75%" }}
                options={
                  item.type === "AutocompleteProvince"
                    ? provinceOptions
                    : (cityOption[cityTitleOptions] ?? [
                        { label: "select your provinceOptions" },
                      ])
                }
                renderInput={(params) => <TextField {...params} />}
              ></Autocomplete>
            )}
            <ErrorText as="p">{item.error}</ErrorText>
          </ParentDiv>
        );
      })}
    </>
  );
};
export default InputElmentsAbilityMaped;
