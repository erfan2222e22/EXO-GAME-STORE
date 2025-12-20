import { Type_AsslbleContiner } from "../../../AssmblePc/types/types-AssmbleCniter";

export interface Type_FilterValuse {
  minPrice?: number | string;
  maxPrice?: number | string;
  company?: string[];
  Manufacturers?: string[];
  [key: string]: any;
}
// | undefined
// | string
// | number
// | boolean
// | string[]
// | number[]
// | boolean[]
// | [string]
// | [number]
// | [boolean];

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
  [key: string]: string | number | boolean | undefined | [] | object[];
}

export interface Type_CatgoryProps {
  product: any;
  pathName: number | string;
  selectPCPartBox: Type_AsslbleContiner[];
  setSelectPCPartBox: React.Dispatch<
    React.SetStateAction<Type_AsslbleContiner[]>
  >;
  closeCatgoryPcShape: () => void;
  findTruetoChooseItems: () => [Type_AsslbleContiner];
}
export interface setPriceFunction_Entris {
  minPrice: number;
  maxPrice: number;
}

export type setPriceFunction = (selectedValue: setPriceFunction_Entris) => void;
