import { cityOption_interface } from "../../types/Type_AccountAddresInuts";
import { InputElmentsAbility_Interface } from "../../types/Type_AccountAddresInuts";
import { provinceOptions_Interface } from "../../types/Type_AccountAddresInuts";

export type type_handelAutoCompleteEvent = (
  e: React.SyntheticEvent<Element, Event>,
  id: number,
) => void;

export type type_handelInputEvent = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  id: number,
) => void;

export type type_changeInputAbility = (InputValue: string, id: number) => void;

interface component_Interface {
  InputElmentsAbility: InputElmentsAbility_Interface[];
  provinceOptions: null | provinceOptions_Interface[];
  cityOption: cityOption_interface;
  cityTitleOptions: string;
  setCityTitleOptios: React.Dispatch<React.SetStateAction<string>>;
  setInputElmentsAbility: React.Dispatch<
    React.SetStateAction<InputElmentsAbility_Interface[]>
  >;
}

export interface Type_editeUserAddress extends InputElmentsAbility_Interface {}

export type Component_Props = ({
  ...props
}: component_Interface) => React.ReactNode;
