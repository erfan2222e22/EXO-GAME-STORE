interface awd {
  img: string;
  id: number;
  jsonServer?: string;
  title?: string;
  valid: boolean;
}
export type Type_handelOnclick = (
  e: React.MouseEvent<HTMLDivElement>,
  item: Readonly<awd>
) => void;
