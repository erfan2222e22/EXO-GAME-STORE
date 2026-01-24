export interface ElmentInputInterface {
  readonly id: 0 | 1 | 2 | 3 | 4 | 5;
  readonly type: "text" | "email" | "password";
  readonly nameInput: string;
  readonly importValue: boolean;
  value: string;
  readonly InputTitle: string;
  error: string;
}
