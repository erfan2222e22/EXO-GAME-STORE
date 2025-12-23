import { Type_FilterValuse } from "../catgory-items/mainCatgoryPage/types/types-Catgory";
import { Item_Setting_Interface } from "./mainCatgoryPage/types/Type_CatgoryJsx";

type select_FilterValues = Omit<Type_FilterValuse, "maxPrice" | "minPrice">;

export interface Component_Props {
  onFilterChange: (item: keyof select_FilterValues, value: string) => void;
  filterType: keyof select_FilterValues;
  setingConsoleFilters: Item_Setting_Interface;
  FilterValue: Type_FilterValuse;
}
