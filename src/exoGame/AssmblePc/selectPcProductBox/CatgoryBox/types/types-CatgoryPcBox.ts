import { Type_AsslbleContiner } from "../../../types/types-AssmbleCniter";
import {
  SwitchCatgoryData,
  Type_SelectPCPartBox,
} from "../../types/types-SelectPcProductBox";

export interface Type_FindTruetoChooseItems extends Type_AsslbleContiner {}

export interface Props_Types {
  DisplayCatgoryAssmble: boolean;
  closeCatgoryPcShape: () => void;
  findTruetoChooseItems: () => [Type_FindTruetoChooseItems];
  categoryData: SwitchCatgoryData;
  selectPCPartBox: Type_SelectPCPartBox[];
  setSelectPCPartBox: () => void;
}
