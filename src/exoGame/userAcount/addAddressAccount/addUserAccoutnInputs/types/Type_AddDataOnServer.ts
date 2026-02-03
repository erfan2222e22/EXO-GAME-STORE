import { InputElmentsAbility_Interface } from "./Type_AccountAddresInuts";
import { AxiosError } from "axios";

type NavigateFunction = (
  to: string,
  options?: { replace?: boolean; state?: unknown },
) => void;

type Type_handleError = (err: AxiosError) => void;

export type type_addDataOnServer = (
  stateId: number,
  InputElmentsAbility: InputElmentsAbility_Interface[],
  handleError: Type_handleError,
  navigate: NavigateFunction,
) => void;

export type type_addAddressUserData = (
  stateId: number,
  InputElmentsAbility: InputElmentsAbility_Interface[],
  navigate: NavigateFunction,
  handleError: Type_handleError,
) => void;

export interface Return_getUserAddress_Type {
  state: number;
  data: InputElmentsAbility_Interface | AxiosError;
}

export type Type_GetUserAddress = (
  stateId: number,
) => Promise<Return_getUserAddress_Type>;

export type type_handleError = (err: AxiosError) => void;
