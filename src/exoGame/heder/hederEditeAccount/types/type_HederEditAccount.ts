interface HederEditAccount {
  checkToRemoveNaviLinks: () => boolean;
}
export type TypePropsComponent = ({
  ...props
}: HederEditAccount) => React.ReactNode;
