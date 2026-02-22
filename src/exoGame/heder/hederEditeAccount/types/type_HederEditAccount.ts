import { JSX } from "react";

interface HederEditAccount {
  checkToRemoveNaviLinks: () => boolean;
  setShowEditAccountBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TypePropsComponent = ({
  ...props
}: HederEditAccount) => JSX.Element;
