import axios from "axios";
import { AxiosError } from "axios";
import {
  user_Structure,
  Type_AddDataToServer,
  Type_NavigateToUserAccount,
  Type_DelteCloneUser,
} from "./types/Type_addDataToServer";
export const addDataToServer: Type_AddDataToServer = (
  userIsRegistered,
  navigate,
  userId,
  phoneNumber,
  handelCatchError
) => {
  if (userIsRegistered) {
    navigateToUserAccount(navigate, userId, handelCatchError);
  } else if (userIsRegistered === null) {
    delteCloneUser(phoneNumber, navigate, handelCatchError);
  } else {
    createNewUserData(navigate, phoneNumber, handelCatchError);
  }
};

const navigateToUserAccount: Type_NavigateToUserAccount = async (
  navigate,
  userId,
  handelCatchError
) => {
  try {
    await axios.patch(`http://localhost:3300/users/${userId}`, {
      logined: true,
    });

    setTimeout(() => {
      navigate(`/acount`, {
        state: { state: "" },
      });
    }, 500);
  } catch (err) {
    handelCatchError(err as AxiosError);
  }
};

const createNewUserData = async (
  navigate: any,
  phoneNumber: string,
  handelCatchError: any
) => {
  try {
    const newUser = {
      name: "",
      phoneNumber: phoneNumber,
      LastName: "",
      email: "",
      logined: false,
    };

    const { data: values } = await axios.post(
      "http://localhost:3300/users",
      newUser
    );

    const { id } = values;

    setTimeout(() => {
      navigate(`/register-user`, {
        state: { id: id },
      });
    }, 500);
  } catch (err) {
    handelCatchError(err as AxiosError);
  }
};

const delteCloneUser: Type_DelteCloneUser = async (
  phoneNumber,
  navigate,
  handelCatchError
) => {
  try {
    const { data: items } = await axios.get("http://localhost:3300/users");

    const idUsers = items
      .filter((fill: user_Structure) => fill.phoneNumber === phoneNumber)
      .map((item: user_Structure) => item.id);

    await Promise.all(
      idUsers.forEach((item: number[]) => {
        axios
          .delete(`http://localhost:3300/users/${item}`)
          .then((item) =>
            createNewUserData(navigate, phoneNumber, handelCatchError)
          )
          .catch((err) => console.log(err));
      })
    );
  } catch (err) {
    handelCatchError(err as AxiosError);
    console.log(err);
  }
};
