type setStateBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export interface Props_Interface {
  checkToRemoveNaviLinks: () => boolean;
  setValid: setStateBoolean;
  ProductLength: number;
  userId: number;
  setShowEditAccountBox: setStateBoolean;
  setDrawerDisplay: setStateBoolean;
  drawerDisplay: boolean;
  catgoryDisplay: boolean;
  setCatgoryDisplay: setStateBoolean;
  showEditAccountBox: boolean;
}

export type Component_Props_Type = ({
  ...props
}: Props_Interface) => React.ReactNode;
