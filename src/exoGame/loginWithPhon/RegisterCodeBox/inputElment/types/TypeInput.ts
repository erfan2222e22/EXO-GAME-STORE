import { JSX } from "react";

interface Type_Interface {
  readonly phoneNumber: string;
  inputRefs: { current: Array<HTMLInputElement | null> };
  readonly UserInputCode: readonly string[];
  setUserInputCode: React.Dispatch<React.SetStateAction<string[]>>;
  SetColorElment: () => string;
  readonly sendCodeAgain: boolean;
}

export type Type_Componet = ({ ...props }: Type_Interface) => JSX.Element;
export type Type_HandelOnChange = (value: string, index: number) => void;
