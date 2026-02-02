interface handelOnclickInterface {
  readonly img: string;
  readonly filterText: string;
  readonly id: number;
}
export type Type_handelOnclick = (
  item: Readonly<handelOnclickInterface>,
) => void;
