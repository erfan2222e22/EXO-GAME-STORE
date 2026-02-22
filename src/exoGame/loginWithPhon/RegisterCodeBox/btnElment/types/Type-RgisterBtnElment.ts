import { JSX } from "react";

interface Porps_Type {
  readonly code: readonly number[][];
  readonly UserInputCode: readonly string[];
  setValidInterdCode: React.Dispatch<React.SetStateAction<boolean | null>>;
  SetColorElment: () => string;
  readonly validInterdCode: boolean | null;
  setUserInputCode: React.Dispatch<React.SetStateAction<string[]>>;
  navigation: () => void;
}

export type Component_Porps = ({ ...props }: Porps_Type) => JSX.Element;
