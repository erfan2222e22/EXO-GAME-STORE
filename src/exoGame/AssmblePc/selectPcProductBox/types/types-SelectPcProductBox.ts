import { Type_AsslbleContiner } from "../../types/types-AssmbleCniter";

interface CategoryData {
  pathName: string;
  ProductLink: string;
  filterdLinkProduct: boolean;
}
export type SwitchCatgoryData = CategoryData | null;

export interface Type_SelectPCPartBox extends Type_AsslbleContiner {}

export type Type_switchtoChooseProducts = (item: Type_SelectPCPartBox) => void;

export type Type_handelAddPcClick = (item: Type_SelectPCPartBox) => void;
