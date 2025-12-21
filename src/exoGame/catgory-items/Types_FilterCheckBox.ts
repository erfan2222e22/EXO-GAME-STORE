import { Type_FilterValuse } from "../catgory-items/mainCatgoryPage/types/types-Catgory";

type select_FilterValues = Omit<Type_FilterValuse, "maxPrice" | "minPrice">;

export interface Component_Props {
  filterType: keyof select_FilterValues;
  onFilterChange: (item: keyof Type_FilterValuse, value: string[]) => void;
  setingConsoleFilters: Type_FilterValuse;
  FilterValue: Type_FilterValuse;
}
