import { Props_Interface } from "../../hederIconElmeent/types/type-HederIconsElment";
type Type_Porps = Pick<Props_Interface, "checkToRemoveNaviLinks">;
export type Type_PropsComponent = ({ ...props }: Type_Porps) => React.ReactNode;
