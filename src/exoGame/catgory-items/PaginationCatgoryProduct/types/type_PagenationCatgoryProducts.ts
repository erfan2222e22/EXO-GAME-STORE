import React from "react";
import { JSX } from "react";

interface interface_Type_ComponentProps {
  allProductData: number;
  setPageConter: React.Dispatch<React.SetStateAction<number | string>>;
}

export type Type_ComponentProps = ({
  ...props
}: interface_Type_ComponentProps) => JSX.Element;
