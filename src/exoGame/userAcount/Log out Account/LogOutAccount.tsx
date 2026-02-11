import React from "react";
import contextUse from "../../useContext/useContext";
import styleComponent from "./style-Component/Style-LogOutAccount";
import axios from "axios";

import { AxiosError } from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useUserIdContext } from "../../userIdContext/userIdContext";

const LogOutAccount = () => {
  const context = useContext(contextUse);
  const navigate = useNavigate();
  const { stateId } = context;
  const { setUserID } = useUserIdContext();
  const { Div, ContinuedBtn, ParentDivTexts, Text } = styleComponent;

  const handelOnClick = async () => {
    try {
      const userIdStorage = localStorage.getItem("userId");
      const USERID = stateId || +userIdStorage;

      setUserID((prev: number) => (prev = 0));

      const updateLogined = {
        logined: false,
      };

      userIdStorage &&
        (await axios.patch(
          `http://localhost:3300/users/${USERID}`,
          updateLogined,
        ));

      localStorage.removeItem("userId");
      navigate("/");
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  return (
    <Div>
      <ParentDivTexts>
        <Text as="h1">LogOutAccount</Text>
        <Text as="h6">
          You have successfully logged out of your account. You can now safely
          leave your system.
        </Text>
        <Text as="h6">
          Please note that your shopping cart is saved in your account. If you
          have items in it, you can complete your purchase upon re-entry in the
          future, provided the item is still available.
        </Text>
      </ParentDivTexts>
      <ContinuedBtn onClick={handelOnClick} as="button">
        continue
      </ContinuedBtn>
    </Div>
  );
};
export default LogOutAccount;
