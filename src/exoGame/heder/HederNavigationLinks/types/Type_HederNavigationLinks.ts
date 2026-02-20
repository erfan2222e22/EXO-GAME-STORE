import { JSX } from "react";

interface propsType {
  catgoryDisplay: boolean;
  setCatgoryDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
export type Component_Props = (props: propsType) => JSX.Element;
