import React from "react";
import styleComponent from "./style-BtnElment/Style-BtnElment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosError } from "axios";
import { Component_Props } from "./types/type-BtnElment";

const BtnElment: Component_Props = ({
  elmentValueList,
  setElmentValueList,
  stateId,
}) => {
  const { BtnContinued } = styleComponent;
  const navigate = useNavigate();

  const handelOnClick = () => {
    setElmentValueList((prev) => ({
      ...prev,
      EditPasswrodAccount: prev.EditPasswrodAccount.map((item) => {
        if (item.value.length < 5) {
          return { ...item, error: "set input values" };
        } else {
          return item;
        }
      }),
    }));
    const findErrorInput = elmentValueList.find(
      (item) => item.error.trim().length > 0 || item.value.trim().length < 5
    );
    findErrorInput === undefined && handelUpdatePassword();
    console.log(findErrorInput);
  };

  const handelUpdatePassword = async () => {
    try {
      const findFristElmentValue = elmentValueList.find(
        (item) => item.title === "New password"
      );
      const { value } = findFristElmentValue;
      const updatePassword = {
        password: value,
      };
      await axios.patch(
        `http://localhost:3300/users/${stateId}`,
        updatePassword
      );
      navigate("/acount/My-Account");
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  return (
    <BtnContinued as="button" onClick={handelOnClick}>
      Continued
    </BtnContinued>
  );
};
export default BtnElment;
