import { Type_AsslbleContiner } from "../../../AssmblePc/types/types-AssmbleCniter";

type unknownItemsType =
  | undefined
  | string
  | number
  | boolean
  | number[]
  | boolean[]
  | string[]
  | [string]
  | [number]
  | [boolean]
  | {};

export interface Type_FilterValuse {
  minPrice?: number | string;
  maxPrice?: number | string;
  company?: string[];
  Manufacturers?: string[];
  [key: string]: unknownItemsType;
}

interface Type_originalItems_ReadOnly {
  id: string | number;
  nameProduct: string;
  img: string;
  ProductReview: boolean | string;
  productSetting: string;
  Manufacturers: string;
  company: string;
  title: string;
}

type readOnlyTypes = Readonly<Partial<Type_originalItems_ReadOnly>>;

export interface Type_originalItems_extends extends readOnlyTypes {
  price: number | string;
  [key: string]: string | number | boolean | undefined | object[] | [];
}

export interface Type_CatgoryProps {
  ProductLink: string;
  filterdLinkBoll: boolean;
  pathName: number | string;
  selectPCPartBox: Type_AsslbleContiner[];
  setSelectPCPartBox: React.Dispatch<
    React.SetStateAction<Type_AsslbleContiner[]>
  >;
  closeCatgoryPcShape: () => void;
  findTruetoChooseItems: () => [Type_AsslbleContiner];
  DisplayCatgoryAssmble: boolean;
}

export interface setPriceFunction_Entris {
  minPrice: number;
  maxPrice: number;
}

export type setPriceFunction = (selectedValue: setPriceFunction_Entris) => void;

export interface FilterConfigItem {
  readonly id: string | number;
  readonly label: string;
  readonly kindOfFilter: "cheCheckbox" | "Slider";
  readonly filterType?: string;
}
