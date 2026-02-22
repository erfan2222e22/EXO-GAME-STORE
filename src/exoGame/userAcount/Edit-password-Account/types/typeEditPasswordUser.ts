import { elmentValueList } from "../../EditeUserAccountParent/types/Type_EditUserAccountParent";
import { JSX } from "react";

export interface elmentListStructure {
  EditAccount: elmentValueList[];
  EditPasswrodAccount: elmentValueList[];
}

export interface Props_Interface_Component {
  elmentValueList: elmentValueList[];
  setElmentValueList: React.Dispatch<React.SetStateAction<elmentListStructure>>;
  stateId: number | null | undefined;
}
export type Component_Props = ({
  ...props
}: Props_Interface_Component) => JSX.Element;
