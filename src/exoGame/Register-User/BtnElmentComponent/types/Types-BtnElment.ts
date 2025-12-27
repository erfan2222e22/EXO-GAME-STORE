import React from "react";
import { ElmentInputInterface } from "../../types/Types_Register-User";
interface Props_interface {
  inputElmentAtributes: Readonly<ElmentInputInterface[]>;
  seIinputElmentAtributes: React.Dispatch<
    React.SetStateAction<ElmentInputInterface[]>
  >;
  setAllInputValuseTrue: React.Dispatch<React.SetStateAction<boolean>>;
  allInputValuseTrue: Readonly<null | boolean>;
}
export type Component_Porps = ({
  ...props
}: Props_interface) => React.ReactNode;
