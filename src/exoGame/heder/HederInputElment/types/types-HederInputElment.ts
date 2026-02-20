import { Props_Interface } from "../../hederIconElmeent/types/type-HederIconsElment";
import { JSX } from "react";

type Type_Porps = Pick<Props_Interface, "checkToRemoveNaviLinks">;
export type Type_PropsComponent = ({ ...props }: Type_Porps) => JSX.Element;
