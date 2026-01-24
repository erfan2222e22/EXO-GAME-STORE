interface Type_handelOnclick_interfac {
  readonly img: string;
  readonly id: number;
  readonly jsonServer?: string;
  readonly title?: string;
  readonly valid: boolean;
}
export type Type_handelOnclick = (
  e: React.MouseEvent<HTMLDivElement>,
  item: Readonly<Type_handelOnclick_interfac>
) => void;
