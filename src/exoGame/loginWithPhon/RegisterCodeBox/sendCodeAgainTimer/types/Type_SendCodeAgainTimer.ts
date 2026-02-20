import { JSX } from "react";

interface propsType {
  readonly phoneNumber: string;
  readonly sendCodeAgain: boolean;
}

export type Component_Porps = ({ ...props }: propsType) => JSX.Element;
