import type { ComponentType } from "react";

declare module "react-scroll" {
  interface ScrollOptions {
    duration?: number;
    delay?: number;
    smooth?: boolean | string;
    offset?: number;
  }

  export const Element: ComponentType<{ name?: any }>;
  export const scroller: {
    scrollTo: (name: string, options?: ScrollOptions) => void;
  };
}
