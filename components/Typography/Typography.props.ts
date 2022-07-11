import { DetailedHTMLProps, HTMLAttributes } from "react";

export enum variantMapping {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle1 = 'h6',
  subtitle2 = 'h6',
  body1 = 'p',
  body2 = 'p',
  body3 = 'p'
}

export interface TypographyProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant: keyof typeof variantMapping;
}
