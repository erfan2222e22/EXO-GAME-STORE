import { Props_Interface_Component } from "../../types/typeEditPasswordUser";

type pick_Interface_Component = Pick<
  Props_Interface_Component,
  "elmentValueList" | "setElmentValueList"
>;

interface propsType extends pick_Interface_Component {
  stateId: number | null | undefined;
}

// Alternative approach if extends doesn't work:
// type propsType = pick_Interface_Component & {
//   stateId: number | null | undefined;
// };

export type Component_Props = ({ ...props }: propsType) => React.ReactNode;
