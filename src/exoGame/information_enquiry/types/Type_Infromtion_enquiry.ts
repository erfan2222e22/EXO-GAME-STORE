type Type_id = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type Type_type = "input" | "Autocomplete" | "textarea";

export type Type_ChangeBooleanState = React.Dispatch<
  React.SetStateAction<boolean>
>;

export interface elmentsInArrayTypes {
  readonly id: Type_id;
  readonly type: Type_type;
  readonly hederText: string;
  readonly importeData: boolean;
  readonly name: string;
  value: string;
}

interface requtest {
  readonly name: string;
  readonly phoneNumber: string;
  readonly emailAdrees: string;
  readonly fille: string;
  readonly titleRequest: string;
  readonly HowNoticeYou: string;
  readonly request: string;
}

export interface Main_UseContext_Type {
  readonly elmentsInArray: elmentsInArrayTypes[];
  setCorrectRequest: Type_ChangeBooleanState;
  readonly phoneNumberEroreBolean: Type_ChangeBooleanState;
  setFailRequest: Type_ChangeBooleanState;
  readonly correctRequest: boolean;
  setElmentInArray: React.Dispatch<React.SetStateAction<elmentsInArrayTypes[]>>;
  setRequest: React.Dispatch<React.SetStateAction<Partial<requtest>>>;
}
