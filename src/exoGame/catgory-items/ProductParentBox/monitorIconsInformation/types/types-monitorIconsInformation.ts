import { Type_originalItems_extends } from "../../types/Type-ProductParentBox";
import { JSX } from "react";

interface Monitor_information extends Type_originalItems_extends {
  refreshRate: string;
  panelType: string;
  PanelSize: string;
  monitorSize: string;
}

type Partial_Items = Partial<Monitor_information>;

interface MonitorIconsInformationProps {
  originalItems: Partial_Items;
}

export type Type_function = (
  originalItems: MonitorIconsInformationProps
) => JSX.Element;

export interface MonitorIconItem {
  id: number;
  srcIcon: string;
  title: string;
  text: string | number | boolean | undefined;
}
