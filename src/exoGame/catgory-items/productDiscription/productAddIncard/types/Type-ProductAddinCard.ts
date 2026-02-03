import { Types_itemProduct } from "../../types/Types_ProductDiscription";

export type Type_Event = React.MouseEvent<HTMLElement>;

interface PropsType {
  SetProductCounter: React.Dispatch<React.SetStateAction<number>>;
  productCounter: number;
  price: number | string;
  item: Types_itemProduct;
}

export type PropsTypes = ({ ...itms }: PropsType) => React.ReactNode;
