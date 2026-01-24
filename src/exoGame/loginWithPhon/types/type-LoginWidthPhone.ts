export type Type_checkPhoneNumber = (
  phoneNumber: Readonly<string>,
  PATERN_IRAN_PHONE_NUMBER: Readonly<RegExp>
) => boolean;

export type Type_onChangHandelInput = (
  value: string,
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

export type Type_navigateToLoginCode = (
  randomeNumber: readonly number[][]
) => void;
