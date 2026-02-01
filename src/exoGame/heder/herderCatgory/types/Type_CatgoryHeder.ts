interface typeProps {
  setCatgoryDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
export type Component_Props = (props: typeProps) => React.ReactNode;

export interface itemsType {
  readonly id: string | number;
  readonly DataLink: string;
  readonly text: string;
  readonly type: string;
  readonly filterdLinkProduct: boolean;
}
export interface Type_ItemValue {
  img?: string;
  productList?: { items: itemsType[] };
}

export type Type_onMouseHandel = (
  e: React.MouseEvent<HTMLElement>,
  item: Type_ItemValue,
) => void;
