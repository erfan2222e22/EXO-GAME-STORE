import { Type_originalItems_extends } from "../../types/Type-ProductParentBox";

export interface component_Type {
  filteredItems: Type_originalItems_extends[];
  originalItems: Type_originalItems_extends[];
  handelOnClick: any;
}

export type Types_ComponentProps = ({
  ...props
}: component_Type) => React.ReactNode;
