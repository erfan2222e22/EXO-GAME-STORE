export interface elmentListStructure {
  EditAccount: elmentValueList[];
  EditPasswrodAccount: elmentValueList[];
}

export interface elmentValueList {
  readonly id: number;
  readonly title: string;
  value: string;
  error?: string;
  readonly importData: boolean;
}
