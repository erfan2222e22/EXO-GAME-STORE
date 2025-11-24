export interface ProductInformationItem {
  text: Readonly<string>;
  value: string | number | boolean | string[] | number[] | undefined;
}

export interface ProductInformationProps {
  [key: string]: string | number | boolean | string[] | number[] | undefined;
}
