export interface sugestMonitorList_Type {
  readonly img: string;
  readonly filterText: string;
  readonly gridArea: string;
  flexEnd: boolean | null;
  readonly id: number;
}

interface handelOnclickInterface {
  readonly img: string;
  readonly filterText: string;
  readonly id: number;
}

export type Type_handelOnclick = (
  item: Readonly<handelOnclickInterface>,
) => void;
