interface Type_ProductList_enteris {
  readonly src: string;
  readonly text: string;
  readonly title: string;
  readonly id: number;
  readonly jsonServer: string;
}
export type Type_handelOnClick = (
  items: Readonly<Type_ProductList_enteris>
) => void;
