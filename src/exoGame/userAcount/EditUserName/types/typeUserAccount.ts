import { elmentValueList } from "../../EditeUserAccountParent/types/Type_EditUserAccountParent";
import { JSX } from "react";

interface elmentListStructure {
  EditAccount: elmentValueList[];
  EditPasswrodAccount: elmentValueList[];
}

interface Props_Interface {
  elmentValueList: elmentValueList[];
  setElmentValueList: React.Dispatch<React.SetStateAction<elmentListStructure>>;
  stateId: number | null | undefined;
}

interface handelUpdateUser {
  readonly name: string;
  readonly phoneNumber: string;
  readonly LastName: string;
  readonly email: string;
}

export type Component_Props = ({
  ...props
}: Props_Interface) => JSX.Element;

export type Type_handelUpdateUser = (input: handelUpdateUser) => Promise<void> | void;
export type Type_handelOnChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  title: string,
) => void;

export type Type_handelOnChangePassUser = (e_value: string, id: number) => void;
