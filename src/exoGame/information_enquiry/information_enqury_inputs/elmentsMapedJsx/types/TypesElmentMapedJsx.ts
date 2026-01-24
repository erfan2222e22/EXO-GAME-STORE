import {
  Types_useContext,
  Type_HandelOnChange,
  Type_handelAutocomplete,
} from "../../types/Types_information_enqury_inputs";

type elmentsInArray = Pick<
  Types_useContext,
  | "elmentsInArray"
  | "failRequest"
  | "phoneNumberEroreBolean"
  | "phoneNumberEroreText"
>;

interface Props_Type_Interface extends elmentsInArray {
  handelOnchange: Type_HandelOnChange;
  handelAutocomplete: Type_handelAutocomplete;
}

export type Props_Type = ({
  ...props
}: Props_Type_Interface) => React.ReactNode;
