interface itmesList_Types {
  readonly id: number;
  readonly title: string;
  readonly img: string;
  readonly jsonServer: string;
}

type Pick_handelClickLink = Pick<itmesList_Types, "title" | "jsonServer">;
type Pick_resultElmentImg = Pick<itmesList_Types, "img" | "id">;

export type Type_handelClickLink = (item: Pick_handelClickLink) => void;
export type Type_resultElmentImg = (item: Pick_resultElmentImg) => string;
