import { JSX } from "react";
interface Type_imgSrc {
  imgSrc: Partial<Readonly<string>>;
}

export type Type_Component = (imgSrc: Type_imgSrc) => JSX.Element;
