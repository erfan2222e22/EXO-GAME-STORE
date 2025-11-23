export interface Type_AsslbleContiner_ProductArray {
  id: Readonly<number | string>;
  nameProduct?: Readonly<string>;
  price?: number | string;
  img: Readonly<string>;
  company?: Readonly<string>;
  manufacturers?: Readonly<string>;
  productSetting?: Readonly<string>;
  title?: Readonly<string>;
  [key: Readonly<string | number>]: string | number | null | boolean | [] | {};
}

export interface Type_AsslbleContiner {
  id: Readonly<number>;
  text: Readonly<string>;
  iconSrc: Readonly<string>;
  toChoose: boolean;
  jsonServer: Readonly<string>;
  title: Readonly<string>;
  SeveralChoices: boolean;
  MandatoryPcPart: boolean;
  ProductArray: Type_AsslbleContiner_ProductArray[];
}
