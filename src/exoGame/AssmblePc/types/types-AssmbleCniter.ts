export interface Type_AsslbleContiner_ProductArray {
  id: string | number;
  nameProduct?: string;
  price: number | string;
  img: string;
  [key: string]: string | number;
}

export interface Type_AsslbleContiner {
  id: number | string;
  text: string;
  iconSrc: string;
  toChoose: boolean;
  jsonServer: string;
  title: string;
  SeveralChoices: boolean;
  MandatoryPcPart: boolean;
  ProductArray: Type_AsslbleContiner_ProductArray[];
}
