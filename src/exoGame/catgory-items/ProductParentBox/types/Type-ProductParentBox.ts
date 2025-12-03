import { Type_AsslbleContiner } from "../../../AssmblePc/types/types-AssmbleCniter";

export interface Type_FilterValuse {
  minPrice?: number | string;
  maxPrice?: number | string;
  company?: string[];
  Manufacturers?: string[];
  [key: string]:
    | undefined
    | string
    | number
    | boolean
    | string[]
    | number[]
    | boolean[]
    | [string]
    | [number]
    | [boolean];
}

interface Type_originalItems_ReadOnly {
  id: string | number;
  nameProduct: string;
  img: string;
  ProductReview: boolean | string;
  productSetting: string;
  manufacturers: string;
  company: string;
  title: string;
}

type readOnlyTypes = Readonly<Partial<Type_originalItems_ReadOnly>>;

export interface Type_originalItems_extends extends readOnlyTypes {
  price: number | string;
  [key: string]: string | number | boolean | undefined | [] | object[];
}

export interface Type_Props {
  filteredItems: [] | Type_originalItems_extends[];
  originalItems: Type_originalItems_extends[];
  pathName: Readonly<string>;
  stateProduct: [Type_originalItems_extends];
  setDisplayFilterBox: React.Dispatch<React.SetStateAction<boolean>>;
  selectPCPartBox: Type_AsslbleContiner[];
  setSelectPCPartBox: React.Dispatch<
    React.SetStateAction<Type_AsslbleContiner[] | [Type_AsslbleContiner]>
  >;
  closeCatgoryPcShape: () => void;
  findTruetoChooseItems: () => Type_AsslbleContiner;
  value_kind_filter: Type_FilterValuse[];
}

export type Type_handelOnClick = (
  e: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>,
  item: Type_originalItems_extends
) => void;
export type Type_ComponentProps = ({ ...items }: Type_Props) => React.ReactNode;
