import { Props_Interface_Component } from "../../types/typeEditPasswordUser";
import { JSX } from "react";

type pick_Interface_Component = Pick<
  Props_Interface_Component,
  "elmentValueList" | "setElmentValueList"
>;

interface propsType extends pick_Interface_Component {
  stateId: number | null | undefined;
}

export type Component_Props = ({ ...props }: propsType) => JSX.Element;
