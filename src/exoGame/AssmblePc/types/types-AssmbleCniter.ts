export interface Type_AsslbleContiner_ProductArray {
  readonly id: string | number;
  readonly nameProduct?: string;
  price: number | string;
  readonly img: string;
  [key: string]: string | number;
}

export interface Type_AsslbleContiner {
  readonly id: number | string;
  readonly text: string;
  readonly iconSrc: string;
  readonly toChoose: boolean;
  readonly jsonServer: string;
  readonly title: string;
  readonly SeveralChoices: boolean;
  readonly MandatoryPcPart: boolean;
  ProductArray: Type_AsslbleContiner_ProductArray[];
}
