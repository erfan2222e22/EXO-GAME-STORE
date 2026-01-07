import { Props_Interface_Component } from "../../types/typeEditPasswordUser";

type pick_Interface_Component = Pick<
  Props_Interface_Component,
  "elmentValueList" | "setElmentValueList"
>;

interface PropsTypes extends pick_Interface_Component {
  userPassword: string;
  id: number;
}

export type Component_Props = ({ ...props }: PropsTypes) => React.ReactNode;
