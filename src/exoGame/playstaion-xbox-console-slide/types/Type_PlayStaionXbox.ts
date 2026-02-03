interface handelClickLinkInterface {
  id: 1 | 2 | 3;
  title: string;
  img: string;
  jsonServer: string;
}

type Pick_handelClickLink = Pick<
  handelClickLinkInterface,
  "title" | "jsonServer"
>;

export type Type_handelClickLink = (item: Pick_handelClickLink) => void;
