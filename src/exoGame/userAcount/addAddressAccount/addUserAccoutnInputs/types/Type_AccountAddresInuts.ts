import { AxiosError } from "axios";

export interface InputElmentsAbility_Interface {
  readonly id: number;
  readonly value: string;
  readonly type: string;
  readonly textTitle: string;
  readonly error: string;
}

export interface provinceOptions_Interface {
  readonly label: string;
}

export interface cityOption_interface {
  [key: string]: {
    label: string;
  }[];
}

export type type_handleError = (err: AxiosError) => void;
