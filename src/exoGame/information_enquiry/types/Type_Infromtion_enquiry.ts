type Type_id = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type Type_type = "input" | "Autocomplete" | "textarea";
export type Type_ChangeBooleanState = React.Dispatch<
  React.SetStateAction<boolean>
>;

interface elmentsInArrayTypes {
  id: Readonly<Type_id>;
  type: Type_type;
  hederText: string;
  importeData: boolean;
  name: string;
  value: string;
}

interface requtest {
  name: string;
  phoneNumber: string;
  emailAdrees: string;
  fille: string;
  titleRequest: string;
  HowNoticeYou: string;
  request: string;
}

export interface Main_UseContext_Type {
  elmentsInArray: elmentsInArrayTypes[];
  setCorrectRequest: Type_ChangeBooleanState;
  phoneNumberEroreBolean: Type_ChangeBooleanState;
  setFailRequest: Type_ChangeBooleanState;
  correctRequest: boolean;
  setElmentInArray: React.Dispatch<React.SetStateAction<elmentsInArrayTypes[]>>;
  setRequest: React.Dispatch<React.SetStateAction<Partial<requtest>>>;
}
