import { Type_originalItems_extends } from "../../catgory-items/mainCatgoryPage/types/types-Catgory";

interface Props_interface {
 readonly titeltext: string;
  arrayItems: Type_originalItems_extends[];
}

export type Component_Props = ({
  ...props
}: Props_interface) => React.ReactNode;

export type Type_handelOnClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  item: Type_originalItems_extends
) => void;
