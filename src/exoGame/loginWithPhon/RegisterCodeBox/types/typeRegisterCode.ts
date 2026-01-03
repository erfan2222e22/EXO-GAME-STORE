import { AxiosError } from "axios";
export interface TypeLocation {
  code: number[][];
  phoneNumber: string;
}
export type Type_handelCatchError = (err: AxiosError) => void;
