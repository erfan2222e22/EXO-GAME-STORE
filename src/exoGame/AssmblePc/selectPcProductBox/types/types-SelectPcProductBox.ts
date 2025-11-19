import {
  Type_AsslbleContiner,
  Type_AsslbleContiner_ProductArray,
} from "../../types/types-AssmbleCniter";

export type EventClick_Types = React.MouseEvent<HTMLElement>;

interface CategoryData {
  product: [Type_AsslbleContiner_ProductArray];
  pathName: string;
}
export type SwitchCatgoryData = CategoryData | null;

export interface Type_SelectPCPartBox extends Type_AsslbleContiner {}

export type Type_switchtoChooseProducts = (item: Type_SelectPCPartBox) => void;

export type Type_handelAddPcClick = (
  e: EventClick_Types,
  item: Type_SelectPCPartBox
) => void;
