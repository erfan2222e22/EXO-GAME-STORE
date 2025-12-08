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
  failRequest: boolean;
  phoneNumberEroreText: string;
  setPhoneNumberEroreBolean: Type_ChangeBooleanState;
  setPhoneNumberEroreText: React.Dispatch<React.SetStateAction<string>>;
}
