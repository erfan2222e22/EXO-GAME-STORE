interface Porps_Type {
  code: number[][];
  UserInputCode: Readonly<string[]>;
  setValidInterdCode: React.Dispatch<React.SetStateAction<boolean | null>>;
  SetColorElment: () => string;
  validInterdCode: Readonly<boolean | null>;
  setUserInputCode: React.Dispatch<React.SetStateAction<string[]>>;
  navigation: () => void;
}

export type Component_Porps = ({ ...props }: Porps_Type) => React.ReactNode;
