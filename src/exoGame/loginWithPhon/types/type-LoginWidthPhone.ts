export interface userData {
  name: string;
  phoneNumber: string;
  LastName: string;
  email: string;
  logined: boolean;
  id: number;
}

export type Type_checkPhoneNumber = (
  phoneNumber: string,
  patern: any
) => boolean;

export type Type_onChangHandelInput = (
  value: string,
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

export type Type_findUserPhoneNumber = (phone: string) => void;
export type Type_sendNewUserDataToServer = (phone: string) => void;
export type Type_navigateToLoginCode = (randomeNumber: number[][]) => void;
