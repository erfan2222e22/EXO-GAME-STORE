import { elmentValueList } from "../../EditeUserAccountParent/types/Type_EditUserAccountParent";

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
  name: Readonly<string>;
  phoneNumber: Readonly<string>;
  LastName: Readonly<string>;
  email: Readonly<string>;
}

export type Component_Props = ({
  ...props
}: Props_Interface) => React.ReactNode;

export type Type_handelUpdateUser = (input: handelUpdateUser) => void;
export type Type_handelOnChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  title: string
) => void;
export type Type_handelOnChangePassUser = (e_value: string, id: number) => void;
