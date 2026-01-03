import { AxiosError } from "axios";

type NavigateFunction = (
  to: string,
  options?: { replace?: boolean; state?: any }
) => void;

type HandelError = (err: AxiosError) => void;

export interface user_Structure {
  name: string;
  phoneNumber: string;
  LastName: string;
  email: string;
  logined: true;
  id: number;
}

export type Type_AddDataToServer = (
  userIsRegistered: boolean | null,
  navigate: NavigateFunction,
  userId: number,
  phoneNumber: string,
  handelCatchError: HandelError
) => void;

export type Type_NavigateToUserAccount = (
  navigate: NavigateFunction,
  userId: number,
  handelCatchError: HandelError
) => void;

export type Type_CreateNewUserData = (
  navigate: NavigateFunction,
  userId: number,
  handelCatchError: HandelError
) => void;

export type Type_DelteCloneUser = (
  phoneNumber: string,
  navigate: NavigateFunction,
  handelCatchErro: HandelError
) => void;
