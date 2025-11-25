import { JSX } from "react";
import { Types_itemProduct } from "../../types/Types_ProductDiscription";

type SelectNameProduct = Partial<Pick<Types_itemProduct, "nameProduct">>;

interface Type_props extends SelectNameProduct {
  [key: string]: string | number | boolean | string[] | number[];
}

export type fuctionType = ({ ...items }: Type_props) => JSX.Element;
