interface typeProps {
  setCatgoryDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
export type Component_Props = (props: typeProps) => React.ReactNode;

export interface itemsType {
  id: Readonly<string | number>;
  DataLink: Readonly<string>;
  text: Readonly<string>;
  type: Readonly<string>;
}
export interface Type_ItemValue {
  img?: string;
  productList?: { items: itemsType[] };
}
