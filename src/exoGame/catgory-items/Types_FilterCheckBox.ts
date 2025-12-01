import { Type_FilterValuse } from "./ProductParentBox/types/Type-ProductParentBox";

type select_FilterValues = Omit<Type_FilterValuse, "maxPrice" | "minPrice">;

export interface Component_Props {
  filterType: keyof select_FilterValues[];
  onFilterChange: (item: keyof Type_FilterValuse, value: string[]) => void;
  setingConsoleFilters: [[Type_FilterValuse]];
  FilterValue: Type_FilterValuse;
}
