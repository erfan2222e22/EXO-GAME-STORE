import { Main_UseContext_Type } from "../../types/Type_Infromtion_enquiry";
import { Type_ChangeBooleanState } from "../../types/Type_Infromtion_enquiry";

type Picks = Pick<
  Main_UseContext_Type,
  | "elmentsInArray"
  | "phoneNumberEroreBolean"
  | "setRequest"
  | "setElmentInArray"
>;

export interface Types_useContext extends Picks {
  readonly failRequest: boolean;
  readonly phoneNumberEroreText: string;
  setPhoneNumberEroreBolean: Type_ChangeBooleanState;
  setPhoneNumberEroreText: React.Dispatch<React.SetStateAction<string>>;
}
export type Type_HandelOnChange = (
  itemName: Readonly<string>,
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
) => void;

export type Type_handelAutocomplete = (
  e: React.SyntheticEvent<any, any>
) => void;

export type Type_PhoneNumberHndelErroe = (
  ItemName: Readonly<string>,
  valueText: string
) => void;
