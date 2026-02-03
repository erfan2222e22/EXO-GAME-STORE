type everyType = string | number | boolean | string[] | number[] | undefined;

export interface ProductInformationItem {
  readonly text: string;
  value: everyType;
}

export interface ProductInformationProps {
  [key: string]: everyType;
}
