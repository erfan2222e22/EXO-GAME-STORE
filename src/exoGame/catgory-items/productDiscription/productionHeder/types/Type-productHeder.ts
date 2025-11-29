import { JSX } from "react";
import { Types_itemProduct } from "../../types/Types_ProductDiscription";

type SelectNameProduct = Partial<Pick<Types_itemProduct, "nameProduct">>;
type Recorded = Partial<
  Record<
    "company" | "manufacturers",
    string | number | boolean | string[] | number[]
  >
>;
type MergeTypes = SelectNameProduct & Recorded;
interface Type_props extends MergeTypes {}

export type fuctionType = ({ ...items }: Type_props) => JSX.Element;
