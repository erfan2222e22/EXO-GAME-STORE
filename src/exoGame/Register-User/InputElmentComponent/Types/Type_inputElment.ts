import { ElmentInputInterface } from "../../types/Types_Register-User";

interface Props_types {
  item: ElmentInputInterface;
  index: number;
  seIinputElmentAtributes: React.Dispatch<
    React.SetStateAction<ElmentInputInterface[]>
  >;
  inputElmentAtributes: ElmentInputInterface[];
}

export type ComponentType = ({ ...porps }: Props_types) => React.ReactNode;

export type handelOnchangeInput_Types = (
  inputValue: string,
  item: ElmentInputInterface,
  index: Readonly<number>
) => void;

export type handelInputEmail_Types = (
  inputValue: string,
  index: Readonly<number>
) => void;
