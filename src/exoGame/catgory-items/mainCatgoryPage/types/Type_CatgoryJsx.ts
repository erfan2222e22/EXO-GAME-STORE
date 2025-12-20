import { Type_originalItems_extends, Type_FilterValuse } from "./types-Catgory";
import { Type_AsslbleContiner } from "../../../AssmblePc/types/types-AssmbleCniter";

interface setPriceFunctionProps {
  minPrice: number;
  maxPrice: number;
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
    FilterValue: any;
    kind_filters: Type_FilterValuse[];
    setPriceFunction: (selectedValue: setPriceFunctionProps) => void;
    itemsSetting: string;
    filterItmes: () => void;
    bolShowSmallBox: boolean;
    displayFilterBox: boolean;
    SmallSizeMainBox: any;
    MainBox: any;
    findTruetoChooseItems: () => [Type_AsslbleContiner];
  };
}

export type ComponentProps = ({
  ...props
}: ComponentProps_Interface) => React.ReactNode;
