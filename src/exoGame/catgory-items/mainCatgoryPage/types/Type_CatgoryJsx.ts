import {
  Type_originalItems_extends,
  Type_FilterValuse,
  FilterConfigItem,
} from "./types-Catgory";
import { Type_AsslbleContiner } from "../../../AssmblePc/types/types-AssmbleCniter";
import styleComponents from "../Style-Component/StyleCatgory";
const { MainBox, SmallSizeMainBox } = styleComponents;

interface setPriceFunctionProps {
  minPrice: number;
  maxPrice: number;
}

export interface Item_Setting_Interface {
  [key: string]: Type_FilterValuse;
}

interface ComponentProps_Interface {
  props: {
    originalItems: Type_originalItems_extends[];
    setFilteredItems: React.Dispatch<
      React.SetStateAction<Type_originalItems_extends[]>
    >;
    SetBolShowSmallBox: React.Dispatch<React.SetStateAction<boolean>>;
    setOriginalItems: React.Dispatch<
      React.SetStateAction<Type_originalItems_extends[]>
    >;
    initialItems: Type_originalItems_extends[];
    filteredItems: Type_originalItems_extends[];
    pathName: string;
    setFilterValue: React.Dispatch<React.SetStateAction<Type_FilterValuse>>;
    stateProduct: [Type_originalItems_extends];
    setDisplayFilterBox: React.Dispatch<React.SetStateAction<boolean>>;
    selectPCPartBox: Type_AsslbleContiner[];
    setSelectPCPartBox: React.Dispatch<
      React.SetStateAction<Type_AsslbleContiner[]>
    >;
    closeCatgoryPcShape: () => void;
    FilterValue: Type_FilterValuse;
    kind_filters: FilterConfigItem[];
    setPriceFunction: (selectedValue: setPriceFunctionProps) => void;
    itemsSetting: Item_Setting_Interface;
    filterItmes: () => void;
    bolShowSmallBox: boolean;
    displayFilterBox: boolean;
    SmallSizeMainBox: typeof SmallSizeMainBox; //HtmlStyledElment
    MainBox: typeof MainBox; //HtmlStyledElment
    findTruetoChooseItems: () => [Type_AsslbleContiner];
  };
}

export type ComponentProps = ({
  ...props
}: ComponentProps_Interface) => React.ReactNode;
