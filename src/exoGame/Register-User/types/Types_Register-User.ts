export interface ElmentInputInterface {
  id: 0 | 1 | 2 | 3 | 4;
  type: "text" | "email";
  nameInput: string;
  importValue: boolean;
  value: string;
  InputTitle: string;
  error: string;
}
export type handelOnchangeInput_Types = (
  inputValue: string,
  item: ElmentInputInterface,
  index: number
) => void;
export type handelInputEmail_Types = (
  inputValue: string,
  index: number
) => void;
