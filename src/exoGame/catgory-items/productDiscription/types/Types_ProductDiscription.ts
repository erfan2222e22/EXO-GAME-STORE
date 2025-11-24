export interface Types_itemProduct {
  id?: Readonly<string | number>;
  img?: Readonly<string>;
  price?: number | string;
  LinkDiscriptionPrdouct?: Readonly<string>;
  ProductReview?: Readonly<string | boolean>;
  nameProduct?: Readonly<string>;
  [key: string]: string | number | boolean | string[] | number[];
}
