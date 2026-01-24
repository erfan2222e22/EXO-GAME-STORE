import { AxiosError } from "axios";
export interface TypeLocation {
  readonly code: number[][];
  readonly phoneNumber: string;
  readonly sendCodeAgain: boolean;
}
export type Type_handelCatchError = (err: AxiosError) => void;
