interface price {
  maxPrice: number;
  minPrice: number;
}
type selectedValue = (selectedValue: price) => void;

export interface Props_Component_Interface {
  setPriceFunction: selectedValue;
}
export type Props_Component = (
  props: Props_Component_Interface
) => React.ReactNode;
export type Type_handelOnchange = (event: any, newitem: number[]) => void;
