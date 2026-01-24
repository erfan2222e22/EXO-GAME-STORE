interface Type_imgSrc {
  readonly imgSrc?: string;
}

export type Type_Component = (imgSrc: Type_imgSrc) => React.ReactNode;
