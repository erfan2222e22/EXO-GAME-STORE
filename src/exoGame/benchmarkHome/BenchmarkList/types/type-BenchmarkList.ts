interface interface_handelOnclick {
  id: number;
  img: string;
  text: string;
  route: string;
  jsoneServer: string;
}
export type type_handelOnclick = (item: interface_handelOnclick) => void;
