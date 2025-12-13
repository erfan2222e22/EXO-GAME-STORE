interface PropsInterface {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
  ProductLength: number;
}

export type Component_Porps = (props: PropsInterface) => React.ReactNode;
