export interface elmentListStructure {
  EditAccount: elmentValueList[];
  EditPasswrodAccount: elmentValueList[];
}

export interface elmentValueList {
  id: Readonly<number>;
  title: Readonly<string>;
  value: string;
  error?: string;
  importData: Readonly<boolean>;
}
