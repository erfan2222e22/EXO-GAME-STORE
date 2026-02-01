import { Type_originalItems_extends } from "../../../mainCatgoryPage/types/types-Catgory";

export interface component_Type {
  filteredItems: Type_originalItems_extends[];
  originalItems: Type_originalItems_extends[];
  handelOnClick: any;
}

export type Types_ComponentProps = ({
  ...props
}: component_Type) => React.ReactNode;
