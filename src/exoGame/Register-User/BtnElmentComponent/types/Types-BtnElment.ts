import React from "react";
import { ElmentInputInterface } from "../../types/Types_Register-User";
interface Props_interface {
  readonly inputElmentAtributes: ElmentInputInterface[];
  seIinputElmentAtributes: React.Dispatch<
    React.SetStateAction<ElmentInputInterface[]>
  >;
  setAllInputValuseTrue: React.Dispatch<React.SetStateAction<boolean>>;
  readonly allInputValuseTrue: null | boolean;
}
export type Component_Porps = ({
  ...props
}: Props_interface) => React.ReactNode;
