import axios from "axios";
import { AxiosError } from "axios";

import {
  type_addAddressUserData,
  type_addDataOnServer,
  Return_getUserAddress_Type,
  Type_GetUserAddress,
} from "./types/Type_AddDataOnServer";

export const addDataOnServer: type_addDataOnServer = async (
  stateId,
  InputElmentsAbility,
  handleError,
  navigate,
) => {
  try {
    const userAddressLink = {
      addressLink: `http://localhost:3300/userAddres/${stateId}`,
    };
    const userDataLink = `http://localhost:3300/users/${stateId}`;

    await axios.patch(userDataLink, userAddressLink);

    getUserAddress(stateId);
    addAddressUserData(stateId, InputElmentsAbility, navigate, handleError);
  } catch (err) {
    handleError(err as AxiosError);
  }
};

const getUserAddress: Type_GetUserAddress = async (stateId: number) => {
  try {
    const { data: getUserAddress } = await axios.get(
      `http://localhost:3300/userAddres/${stateId}`,
    );
    return { state: 200, data: getUserAddress };
  } catch (err) {
    return { state: 404, data: err as AxiosError };
  }
};

const addAddressUserData: type_addAddressUserData = async (
  stateId,
  InputElmentsAbility,
  navigate,
  handleError,
) => {
  const [name, lastName, province, city, address, postalCode] =
    InputElmentsAbility;

  try {
    const userAddressObject = {
      id: stateId,
      name: name.value,
      lastName: lastName.value,
      province: province.value,
      city: city.value,
      address: address.value,
      postalCode: postalCode.value,
    };
    const showUserAddress = await getUserAddress(stateId);
    const { state } = showUserAddress;

    state === 200
      ? await axios.put(
          `http://localhost:3300/userAddres/${stateId}`,
          userAddressObject,
        )
      : await axios.post("http://localhost:3300/userAddres", userAddressObject);

    setTimeout(() => {
      navigate("/acount/address");
    }, 350);
  } catch (err) {
    handleError(err as AxiosError);
  }
};
