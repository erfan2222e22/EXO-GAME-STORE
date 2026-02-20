import { ElmentInputInterface } from "../../types/Types_Register-User";
import { JSX } from "react";

interface Props_types {
  item: ElmentInputInterface;
  readonly index: number;
  seIinputElmentAtributes: React.Dispatch<
    React.SetStateAction<ElmentInputInterface[]>
  >;
  inputElmentAtributes: ElmentInputInterface[];
}

export type ComponentType = ({ ...porps }: Props_types) => JSX.Element;

export type handelOnchangeInput_Types = (
  inputValue: string,
  index: Readonly<number>,
) => void;

export type handelInputPassEmail_Types = (
  inputValue: string,
  index: Readonly<number>,
  type: Readonly<string>,
) => void;
