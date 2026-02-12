interface Type_handelOnclick_interfac {
  readonly img: string;
  readonly id: number;
  readonly jsonServer?: string;
  readonly title?: string;
  readonly filterdLinkProduct?: boolean;
  readonly valid: boolean;
  readonly gridArea: string;
}
export type Type_handelOnclick = (
  item: Readonly<Type_handelOnclick_interfac>,
) => void;
