import { JSX } from "react";
export interface Component_Props_Interface {
  filterItmes: () => void;
}
export type Btn_Component_Props = ({
  ...items
}: Component_Props_Interface) => JSX.Element;
