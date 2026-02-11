export interface inputTypes {
  readonly id: 0 | 1;
  readonly textHeder: "enter your userName" | "enter your password";
  value: string;
  error: string;
  readonly title: "userName" | "password";
  readonly type: "text" | "password";
}

export type Type_handelOnChange = (value: string, index: number) => void;
export type Type_getUserData = (userName: string, password: string) => void;
