import { JSX } from "react";

interface PropsInterface {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
  readonly ProductLength: number;
}

export type Component_Porps = (props: PropsInterface) => JSX.Element;
