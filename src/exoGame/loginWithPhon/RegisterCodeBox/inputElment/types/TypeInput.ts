interface Type_Interface {
  inputRefs: { current: Array<HTMLInputElement | null> };
  UserInputCode: string[];
  setUserInputCode: React.Dispatch<React.SetStateAction<string[]>>;
  SetColorElment: () => string;
}
export type Type_Componet = ({ ...props }: Type_Interface) => React.ReactNode;
export type Type_HandelOnChange = (value: string, index: number) => void;
