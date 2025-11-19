export interface Type_AsslbleContiner_ProductArray {
  id?: number | string;
  nameProduct?: string;
  price?: number | string;
  img?: string;
  company?: string;
  manufacturers?: string;
  productSetting?: string;
  title?: string;
  [key: string | number]: string | number | null;
}

export interface Type_AsslbleContiner {
  id: number;
  text: string;
  iconSrc: string;
  toChoose: boolean;
  jsonServer: string;
  title: string;
  SeveralChoices: boolean;
  MandatoryPcPart: boolean;
  ProductArray: Type_AsslbleContiner_ProductArray[];
}
