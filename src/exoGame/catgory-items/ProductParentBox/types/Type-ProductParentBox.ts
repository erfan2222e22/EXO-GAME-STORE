import { Type_AsslbleContiner } from "../../../AssmblePc/types/types-AssmbleCniter";
import { Type_originalItems_extends } from "../../mainCatgoryPage/types/types-Catgory";
import { JSX } from "react";

export interface Type_Props {
  filteredItems: [] | Type_originalItems_extends[];
  originalItems: Type_originalItems_extends[];
  readonly pathName: string;
  DisplayCatgoryAssmble: boolean;
  setDisplayFilterBox: React.Dispatch<React.SetStateAction<boolean>>;
  selectPCPartBox: Type_AsslbleContiner[];
  setSelectPCPartBox: React.Dispatch<
    React.SetStateAction<Type_AsslbleContiner[] | [Type_AsslbleContiner]>
  >;
  closeCatgoryPcShape: () => void;
  findTruetoChooseItems: () => [Type_AsslbleContiner];
}

export type Type_handelOnClick = (
  e: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>,
  item: Type_originalItems_extends,
) => void;
export type Type_ComponentProps = ({ ...items }: Type_Props) => JSX.Element;
