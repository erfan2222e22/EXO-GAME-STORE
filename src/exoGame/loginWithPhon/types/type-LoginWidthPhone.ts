export type Type_checkPhoneNumber = (
  phoneNumber: string,
  patern: any
) => boolean;

export type Type_onChangHandelInput = (
  value: string,
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
export type Type_navigateToLoginCode = (randomeNumber: number[][]) => void;
