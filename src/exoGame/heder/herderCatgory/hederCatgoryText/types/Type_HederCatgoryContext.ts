import { itemsType } from "../../types/Type_CatgoryHeder";
import { Type_originalItems_extends } from "../../../../catgory-items/mainCatgoryPage/types/types-Catgory";
interface propsType {
  readonly item: itemsType;
  readonly key: number;
  setCatgoryDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Component_Props = (prop: propsType) => React.ReactNode;
export type navigatingRoter = (values: Type_originalItems_extends[]) => void;
